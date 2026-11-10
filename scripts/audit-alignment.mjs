#!/usr/bin/env node
/**
 * LabMaster alignment audit
 * -----------------------------------------------------------------------------
 * Measures the built single-file app in a real browser and fails on layout
 * defects the eye catches but CSS review misses:
 *
 *   1. horizontal page overflow (scrollWidth > viewport)
 *   2. content column drifting between routes
 *   3. shell metrics changing between routes (sidebar width / header height)
 *   4. cards or code blocks overflowing their own container
 *   5. same-row grid cards with different heights
 *   6. buttons in one action row with different heights
 *   7. search modal not centred / clipped
 *
 * Usage: node scripts/audit-alignment.mjs [path-to-index.html]
 */
import { chromium } from '/opt/appjet/browser/node_modules/playwright/index.js';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const FILE = path.resolve(process.argv[2] || 'dist/LabMaster/index.html');
const URL = pathToFileURL(FILE).href;

const VIEWPORTS = [
  { w: 360, h: 780, name: '360 mobile' },
  { w: 390, h: 844, name: '390 mobile' },
  { w: 430, h: 932, name: '430 mobile' },
  { w: 768, h: 1024, name: '768 tablet' },
  { w: 1024, h: 768, name: '1024 small desktop' },
  { w: 1366, h: 768, name: '1366 laptop' },
  { w: 1440, h: 900, name: '1440 desktop' },
  { w: 1920, h: 1080, name: '1920 wide' }
];

const ROUTES = [
  ['#/dashboard', 'Dashboard'],
  ['#/subjects', 'Subjects'],
  ['#/subject/major-12', 'Subject'],
  ['#/practicals', 'Practicals'],
  ['#/practical/1', 'Practical'],
  ['#/practical/306', 'Practical (code heavy)'],
  ['#/bookmarks', 'Bookmarks'],
  ['#/progress', 'Progress'],
  ['#/viva', 'Viva'],
  ['#/resources', 'Resources'],
  ['#/notes', 'Notes'],
  ['#/assistant', 'Assistant'],
  ['#/settings', 'Settings'],
  ['#/about', 'About']
];

const TOL = 1.5;
const problems = [];
const metrics = new Map();

function push(route, viewport, kind, detail) {
  problems.push({ route, viewport, kind, detail });
}

const browser = await chromium.launch();
const page = await browser.newPage();
const consoleErrors = [];
page.on('pageerror', (e) => consoleErrors.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error' && !/Failed to load resource/i.test(m.text())) consoleErrors.push(m.text());
});

for (const vp of VIEWPORTS) {
  await page.setViewportSize({ width: vp.w, height: vp.h });

  for (const [route, label] of ROUTES) {
    await page.goto(URL + route, { waitUntil: 'load' });
    await page.waitForFunction(() => {
      const v = document.getElementById('view');
      return v && v.children.length > 0;
    }, null, { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(120);

    const m = await page.evaluate(() => {
      const view = document.getElementById('view');
      const shell = document.querySelector('.app-shell');
      const sidebar = document.querySelector('.sidebar');
      const topbar = document.querySelector('.topbar');
      const cs = getComputedStyle(view);
      const vr = view.getBoundingClientRect();
      const sb = sidebar.getBoundingClientRect();
      const tb = topbar.getBoundingClientRect();

      // children of the routed view share one left edge unless they are full-bleed
      const kids = [...view.children].map((el) => {
        const r = el.getBoundingClientRect();
        return { tag: el.className || el.tagName, left: r.left, right: r.right, width: r.width };
      });

      const overflowers = [];
      const scroller = document.scrollingElement;
      const docOverflow = scroller.scrollWidth - window.innerWidth;

      for (const el of view.querySelectorAll('.card, .p-row, .detail-head, .hero, .code-card, .stat, .subject-card, .note-item, .meta-item')) {
        const r = el.getBoundingClientRect();
        if (r.right > window.innerWidth + 1.5 || r.left < -1.5) {
          overflowers.push({ cls: el.className, left: Math.round(r.left), right: Math.round(r.right) });
        }
        if (el.scrollWidth - el.clientWidth > 2 && getComputedStyle(el).overflowX === 'visible') {
          overflowers.push({ cls: el.className, scroll: el.scrollWidth, client: el.clientWidth, kind: 'content' });
        }
      }

      // same-row grid cards should share a height
      const uneven = [];
      for (const grid of view.querySelectorAll('.grid')) {
        const items = [...grid.children];
        if (items.length < 2) continue;
        const rows = new Map();
        for (const it of items) {
          const r = it.getBoundingClientRect();
          const key = Math.round(r.top);
          if (!rows.has(key)) rows.set(key, []);
          rows.get(key).push(Math.round(r.height));
        }
        for (const [top, heights] of rows) {
          if (heights.length > 1 && Math.max(...heights) - Math.min(...heights) > 2) {
            uneven.push({ top, heights });
          }
        }
      }

      // buttons sharing one action row should share a height
      const unevenButtons = [];
      for (const row of view.querySelectorAll('.row, .detail-actions, .hero-actions, .filter-bar, .spread')) {
        const btns = [...row.querySelectorAll(':scope > .btn')];
        if (btns.length < 2) continue;
        const hs = btns.map((b) => Math.round(b.getBoundingClientRect().height));
        if (Math.max(...hs) - Math.min(...hs) > 1) unevenButtons.push({ cls: row.className, hs });
      }

      return {
        docOverflow,
        contentLeft: Math.round(vr.left + parseFloat(cs.paddingLeft)),
        contentRight: Math.round(vr.right - parseFloat(cs.paddingRight)),
        contentPad: cs.paddingLeft + '/' + cs.paddingRight,
        sidebarW: Math.round(sb.width),
        topbarH: Math.round(tb.height),
        kids: kids.slice(0, 8),
        overflowers: overflowers.slice(0, 6),
        uneven,
        unevenButtons
      };
    });

    metrics.set(`${vp.name}|${route}`, m);

    if (m.docOverflow > TOL) {
      push(route, vp.name, 'page overflow', `document is ${m.docOverflow}px wider than the viewport`);
    }
    if (m.overflowers.length) {
      for (const o of m.overflowers) push(route, vp.name, 'container overflow', JSON.stringify(o));
    }
    if (m.uneven.length) {
      for (const u of m.uneven) push(route, vp.name, 'uneven grid row', JSON.stringify(u));
    }
    if (m.unevenButtons.length) {
      for (const u of m.unevenButtons) push(route, vp.name, 'uneven button row', JSON.stringify(u));
    }

    // the routed view must start at a single left edge
    const lefts = [...new Set(m.kids.map((k) => k.left))];
    if (lefts.length > 1) {
      const spread = Math.max(...lefts) - Math.min(...lefts);
      if (spread > 1) push(route, vp.name, 'content drift', `children start at x=${lefts.join(', ')}`);
    }
  }

  // cross-route shell consistency for this viewport
  const sameVp = [...metrics.entries()].filter(([k]) => k.startsWith(vp.name + '|'));
  const sidebars = [...new Set(sameVp.map(([, v]) => v.sidebarW))];
  const headers = [...new Set(sameVp.map(([, v]) => v.topbarH))];
  const pads = [...new Set(sameVp.map(([, v]) => v.contentPad))];
  if (sidebars.length > 1) push('*', vp.name, 'sidebar drift', `widths: ${sidebars.join(', ')}`);
  if (headers.length > 1) push('*', vp.name, 'header drift', `heights: ${headers.join(', ')}`);
  if (pads.length > 1) push('*', vp.name, 'padding drift', `content padding: ${pads.join(', ')}`);

  // content column alignment across routes (same left/right edges)
  const lefts = [...new Set(sameVp.map(([, v]) => v.contentLeft))];
  const rights = [...new Set(sameVp.map(([, v]) => v.contentRight))];
  if (Math.max(...lefts) - Math.min(...lefts) > 1) push('*', vp.name, 'content column drift', `left edges: ${lefts.join(', ')}`);
  if (Math.max(...rights) - Math.min(...rights) > 1) push('*', vp.name, 'content column drift', `right edges: ${rights.join(', ')}`);
}

/* search modal centring on desktop + mobile */
for (const vp of [{ w: 1366, h: 768, name: '1366 laptop' }, { w: 390, h: 844, name: '390 mobile' }]) {
  await page.setViewportSize({ width: vp.w, height: vp.h });
  await page.goto(URL + '#/dashboard', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  await page.click('[data-action="open-search"]').catch(() => {});
  await page.waitForTimeout(250);
  const modal = await page.evaluate(() => {
    const el = document.querySelector('#search-modal .modal') || document.querySelector('#search-modal');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { left: Math.round(r.left), right: Math.round(r.right), top: Math.round(r.top), w: Math.round(r.width), vw: window.innerWidth };
  });
  if (!modal) {
    push('#/dashboard', vp.name, 'search modal', 'modal element not found');
  } else {
    const leftGap = modal.left;
    const rightGap = modal.vw - modal.right;
    if (Math.abs(leftGap - rightGap) > 2) push('#/dashboard', vp.name, 'modal off-centre', `left ${leftGap}px vs right ${rightGap}px`);
    if (modal.left < -1 || modal.right > modal.vw + 1) push('#/dashboard', vp.name, 'modal clipped', JSON.stringify(modal));
  }
  await page.keyboard.press('Escape').catch(() => {});
}

await browser.close();

/* --------------------------------------------------------------- report --- */
const routeCount = ROUTES.length * VIEWPORTS.length;
console.log(`LabMaster alignment audit — ${routeCount} route/viewport combinations\n`);

if (!problems.length) {
  console.log('  PASS  no alignment defects detected');
  process.exit(0);
}

const byKind = new Map();
for (const p of problems) {
  if (!byKind.has(p.kind)) byKind.set(p.kind, []);
  byKind.get(p.kind).push(p);
}
for (const [kind, list] of byKind) {
  console.log(`  FAIL  ${kind} — ${list.length} occurrence(s)`);
  for (const p of list.slice(0, 6)) {
    console.log(`        ${p.route} @ ${p.viewport}: ${p.detail}`);
  }
  if (list.length > 6) console.log(`        … ${list.length - 6} more`);
}
if (consoleErrors.length) {
  console.log(`\n  console errors — ${consoleErrors.length}`);
  [...new Set(consoleErrors)].slice(0, 6).forEach((e) => console.log('        ' + e));
}
console.log(`\n  ${problems.length} alignment problem(s) across ${routeCount} checks`);
process.exit(1);
