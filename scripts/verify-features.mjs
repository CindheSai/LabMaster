#!/usr/bin/env node
/**
 * LabMaster feature verification.
 *
 * Drives the actual production build the user double-clicks
 * (dist/LabMaster/index.html over file://) in Chromium and asserts that the
 * interactive features really work: search overlay + keyboard flow, completion,
 * bookmarks, personal notes, theme persistence, prev/next navigation, the code
 * viewer and the PDF resource paths.
 *
 * Exits non-zero if any assertion fails.
 */
import pw from '/opt/appjet/browser/node_modules/playwright/index.js';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const APP_DIR = join(ROOT, 'dist/LabMaster');
const APP = 'file://' + join(APP_DIR, 'index.html');

const fails = [];
const oks = [];
const ok = (m) => { oks.push(m); console.log('  ok    ' + m); };
const fail = (m) => { fails.push(m); console.log('  FAIL  ' + m); };
const check = (cond, msg) => (cond ? ok(msg) : fail(msg));

const browser = await pw.chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

const go = async (hash) => {
  await page.goto(APP + hash, { waitUntil: 'load' });
  await page.waitForTimeout(320);
};
const group = async (name, fn) => {
  try { await fn(); } catch (e) { fail(`${name} threw: ${e.message.split('\n')[0]}`); }
};
const modalState = () => page.evaluate(() => {
  const m = document.getElementById('search-modal');
  if (!m) return null;
  return { open: m.classList.contains('open'), hidden: m.getAttribute('aria-hidden') };
});

/* ---------------------------------------------------------------- dashboard */
await group('dashboard', async () => {
  await go('#/dashboard');
  const text = await page.locator('#view').innerText();
  check(text.length > 100, 'dashboard renders content');
  check(/39/.test(text), 'dashboard reports 39 practicals');
  check(/Web Interface Designing/i.test(text), 'dashboard lists subject cards');
});

/* ------------------------------------------------------- search + keyboard */
await group('search', async () => {
  await page.keyboard.press('Control+k');
  await page.waitForTimeout(220);
  let s = await modalState();
  check(!!s && s.open, 'Ctrl+K opens the search overlay');

  const geo = await page.evaluate(() => {
    const m = document.getElementById('search-modal');
    const panel = m && m.querySelector('.modal');
    if (!panel) return null;
    const r = panel.getBoundingClientRect();
    const o = m.getBoundingClientRect();
    return {
      left: Math.round(r.left - o.left), right: Math.round(o.right - r.right),
      width: Math.round(r.width), vw: window.innerWidth,
      overlayW: Math.round(o.width), overlayH: Math.round(o.height)
    };
  });
  check(!!geo, 'search panel exists inside the overlay');
  if (geo) {
    check(Math.abs(geo.left - geo.right) <= 20, `search panel is centred (left ${geo.left}px vs right ${geo.right}px)`);
    check(geo.width < geo.vw, 'search panel is narrower than the viewport');
    check(geo.overlayW === geo.vw, 'overlay spans the viewport width');
  }

  await page.fill('#search-input', 'matrix');
  await page.waitForTimeout(260);
  const results = await page.evaluate(() =>
    document.querySelectorAll('#search-results [data-id], #search-results a, #search-results button').length);
  check(results > 0, `search returns results for "matrix" (${results})`);

  await page.keyboard.press('Enter');
  await page.waitForTimeout(380);
  const hash = await page.evaluate(() => location.hash);
  check(/^#\/practical\/\d+$/.test(hash), 'Enter opens a practical from the results (' + hash + ')');

  await page.keyboard.press('Control+k');
  await page.waitForTimeout(180);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(220);
  s = await modalState();
  check(!!s && !s.open && s.hidden === 'true', 'Escape closes the search overlay');
});

/* ------------------------------------------------- completion + persistence */
await group('completion', async () => {
  await go('#/practical/306');
  const btn = page.locator('[data-action="toggle-complete"]').first();
  check(await btn.count() > 0, 'practical page exposes a completion control');
  const before = (await btn.innerText()).trim();
  await btn.click();
  await page.waitForTimeout(260);
  const after = (await page.locator('[data-action="toggle-complete"]').first().innerText()).trim();
  check(before !== after, `completion toggle changes its label ("${before}" -> "${after}")`);

  await go('#/practical/306');
  const persisted = (await page.locator('[data-action="toggle-complete"]').first().innerText()).trim();
  check(persisted === after, 'completion survives a page reload under file://');
});

/* --------------------------------------------------------- bookmark + list */
await group('bookmark', async () => {
  const bm = page.locator('[data-action="toggle-bookmark"]').first();
  check(await bm.count() > 0, 'practical page exposes a bookmark control');
  const before = (await bm.innerText()).trim();
  await bm.click();
  await page.waitForTimeout(260);
  const after = (await page.locator('[data-action="toggle-bookmark"]').first().innerText()).trim();
  check(before !== after, 'bookmark toggle changes its state');

  await go('#/bookmarks');
  const listed = await page.locator('#view').innerText();
  check(/matrix/i.test(listed), 'bookmarked practical appears on the Bookmarks page');
});

/* ------------------------------------------------------------ personal note */
await group('notes', async () => {
  const NOTE = 'Regression note ' + Date.now();
  await go('#/practical/306');
  await page.fill('#note-input', NOTE);
  await page.click('[data-action="save-note"]');
  await page.waitForTimeout(280);
  await go('#/practical/306');
  const value = await page.inputValue('#note-input');
  check(value === NOTE, 'personal note persists across reload');
});

/* ------------------------------------------------------------------- theme */
await group('theme', async () => {
  await go('#/settings');
  await page.click('[data-action="set-theme"][data-theme="light"]');
  await page.waitForTimeout(260);
  const applied = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  check(applied === 'light', 'theme switches to light');
  await go('#/settings');
  const persisted = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  check(persisted === 'light', 'theme choice persists across reload');
  await page.click('[data-action="set-theme"][data-theme="dark"]');
  await page.waitForTimeout(200);
});

/* --------------------------------------------------------- prev/next links */
await group('prev-next', async () => {
  await go('#/practical/306');
  const href = await page.evaluate(() => {
    const links = [...document.querySelectorAll('#view a[href^="#/practical/"]')];
    const hit = links.find((a) => /next/i.test(a.textContent || ''));
    return hit ? hit.getAttribute('href') : null;
  });
  check(!!href, 'practical page offers a next-practical link');
  if (href) {
    await page.click(`#view a[href="${href}"]`);
    await page.waitForTimeout(320);
    const now = await page.evaluate(() => location.hash);
    check(now === href, 'next link navigates to the following practical (' + href + ')');
  }
});

/* ------------------------------------------------------------- code viewer */
await group('code viewer', async () => {
  await go('#/practical/306');
  const info = await page.evaluate(() => {
    const pre = document.querySelector('.code-scroll');
    return {
      lines: pre ? pre.innerText.split('\n').filter((l) => l.trim()).length : 0,
      copy: !!document.querySelector('[data-action="copy-code"]'),
      download: !!document.querySelector('[data-action="download-code"]')
    };
  });
  check(info.lines > 5, `code viewer renders source lines (${info.lines})`);
  check(info.copy, 'code viewer offers a copy action');
  check(info.download, 'code viewer offers a download action');
});

/* -------------------------------------------------------------- PDF assets */
await group('resources', async () => {
  await go('#/resources');
  const hrefs = await page.evaluate(() =>
    [...document.querySelectorAll('#view a[href*="resources/"]')].map((a) => a.getAttribute('href')));
  const unique = [...new Set(hrefs)];
  check(unique.length >= 4, `resource centre lists ${unique.length} PDF links`);
  for (const href of unique) {
    check(!href.startsWith('/'), 'relative PDF path: ' + href);
    check(existsSync(join(APP_DIR, href)), 'PDF present next to index.html: ' + href);
  }
});

/* ------------------------------------------------------------ console log */
check(errors.length === 0, 'no console or page errors (' + (errors.slice(0, 2).join(' | ') || 'none') + ')');

await browser.close();

console.log('');
if (fails.length) {
  console.log(`  FAIL ${fails.length} feature problem(s):`);
  fails.forEach((f) => console.log('       - ' + f));
  process.exit(1);
}
console.log(`  PASS  features verified on file:// (${oks.length} assertions)`);
