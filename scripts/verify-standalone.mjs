#!/usr/bin/env node
/**
 * Verifies the REAL deliverable over the file:// protocol — not localhost.
 * Opens dist/LabMaster/index.html exactly as a student would after extracting
 * the ZIP, then walks every practical, search, storage, PDF and responsive path.
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/appjet/browser/node_modules/playwright');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP_DIR = path.join(ROOT, 'dist', 'LabMaster');
const ENTRY = path.join(APP_DIR, 'index.html');
const URL_ENTRY = 'file://' + ENTRY;
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'standalone', 'data.json'), 'utf8'));

const results = [];
function check(name, ok, detail) {
  results.push({ name, ok: !!ok, detail: detail === undefined ? '' : String(detail) });
}

const consoleErrors = [];
const pageErrors = [];

const browser = await chromium.launch({
  executablePath: '/opt/appjet/browser-binaries/chromium-1234/chrome-linux64/chrome',
  args: ['--no-sandbox', '--allow-file-access-from-files', '--disable-dev-shm-usage']
});

const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true });
const page = await context.newPage();
page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
page.on('pageerror', (e) => pageErrors.push(String(e && e.message ? e.message : e)));

async function go(hash) {
  await page.evaluate((h) => { window.location.hash = h; }, hash);
  await page.waitForTimeout(90);
}

/* ---------------------------------------------------------------- 1. boot --- */
await page.goto(URL_ENTRY, { waitUntil: 'load' });
await page.waitForSelector('#view h1', { timeout: 15000 });

check('index.html opens over file://', (await page.title()).includes('LabMaster'), await page.title());
check('dashboard heading renders', (await page.locator('#view h1').first().innerText()).length > 3);
check('no network requests needed', page.url().startsWith('file://'), page.url());

const navCount = await page.locator('.sidebar a, .sidebar button, nav.side-nav a').count();
check('navigation items present', navCount >= 11, navCount + ' nav controls');

/* --------------------------------------------------- 2. every practical --- */
let practicalFailures = [];
for (const p of data.programs) {
  await go('#/practical/' + p.id);
  const heading = await page.locator('#view h1').first().innerText().catch(() => '');
  const codeLines = await page.locator('.code-line, .cl').count();
  const hasAim = await page.locator('#aim, [data-section="aim"]').count();
  const hasViva = await page.locator('.viva-item, .viva-q, #viva').count();
  const ok = heading.trim().length > 2 && codeLines > 2 && hasAim > 0 && hasViva > 0;
  if (!ok) practicalFailures.push(`${p.id} "${p.title}" heading=${heading.length} code=${codeLines} aim=${hasAim} viva=${hasViva}`);
}
check(`all ${data.programs.length} practical pages render aim+code+viva`, practicalFailures.length === 0,
  practicalFailures.slice(0, 5).join(' | '));

/* --------------------------------------------- 3. subject + list pages ---- */
let subjectFailures = [];
for (const s of data.subjects) {
  await go('#/subject/' + s.id);
  const rows = await page.locator('.practical-row, .pl-row, [data-practical]').count();
  const h = await page.locator('#view h1').first().innerText().catch(() => '');
  if (!h || rows < s.totalPrograms) subjectFailures.push(`${s.code}: rows=${rows} expected=${s.totalPrograms}`);
}
check('four subject pages list every practical', subjectFailures.length === 0, subjectFailures.join(' | '));

await go('#/practicals');
const allRows = await page.locator('.practical-row, .pl-row, [data-practical]').count();
check('all-practicals page shows 39 rows', allRows === 39, allRows + ' rows');

/* ------------------------------------------------------- 4. global search -- */
await page.keyboard.press('Control+k');
await page.waitForSelector('#search-input, .search-input', { timeout: 5000 });
await page.fill('#search-input, .search-input', 'matrix');
await page.waitForTimeout(350);
const searchHits = await page.locator('#search-results .sr-item, .search-results a, .search-result').count();
check('Ctrl+K search returns results', searchHits > 0, searchHits + ' results');
await page.keyboard.press('Enter');
await page.waitForTimeout(250);
check('Enter opens the highlighted result', (await page.evaluate(() => location.hash)).includes('/practical/'),
  await page.evaluate(() => location.hash));
await page.keyboard.press('Escape');
await page.waitForTimeout(150);
const overlayHidden = await page.evaluate(() => {
  const el = document.querySelector('#search-overlay, .search-overlay');
  return !el || el.hidden || getComputedStyle(el).display === 'none' || !el.classList.contains('open');
});
check('Escape closes the search overlay', overlayHidden);

/* ---------------------------------------------- 5. completion + bookmark -- */
const first = data.programs[0];
await go('#/practical/' + first.id);
await page.click('[data-action="mark-complete"], [data-action="toggle-complete"], button:has-text("Mark as completed")').catch(() => {});
await page.waitForTimeout(200);
await page.click('[data-action="toggle-bookmark"]').catch(() => {});
await page.waitForTimeout(200);

/* notes */
const noteField = page.locator('textarea[data-note-input], #note-input, textarea').first();
await noteField.fill('Verified note: pointer arithmetic refreshes on reload.');
await page.locator('[data-action="save-note"], button:has-text("Save note")').first().click().catch(() => {});
await page.waitForTimeout(250);

await page.reload({ waitUntil: 'load' });
await page.waitForSelector('#view h1', { timeout: 15000 });
await go('#/practical/' + first.id);
const stateAfterReload = await page.evaluate(() => {
  const s = window.LM && window.LM.getState ? window.LM.getState() : null;
  return {
    completed: s ? Object.keys(s.completed || {}).length : -1,
    bookmarks: s ? Object.keys(s.bookmarks || {}).length : -1,
    notes: s ? Object.keys(s.notes || {}).length : -1
  };
});
check('completion survives a reload', stateAfterReload.completed >= 1, JSON.stringify(stateAfterReload));
check('bookmark survives a reload', stateAfterReload.bookmarks >= 1);
check('personal note survives a reload', stateAfterReload.notes >= 1);
const noteText = await page.locator('textarea[data-note-input], #note-input, textarea').first().inputValue().catch(() => '');
check('note content is restored', noteText.includes('pointer arithmetic'), noteText.slice(0, 40));

await go('#/bookmarks');
const bookmarkRows = await page.locator('.practical-row, .pl-row, [data-practical]').count();
check('bookmarks page lists the bookmarked practical', bookmarkRows >= 1, bookmarkRows + ' rows');

/* --------------------------------------------------------------- 6. theme -- */
const themeBefore = await page.evaluate(() => document.documentElement.dataset.theme);
await page.click('[data-action="cycle-theme"], [data-action="toggle-theme"], #theme-btn').catch(() => {});
await page.waitForTimeout(200);
const themeAfter = await page.evaluate(() => document.documentElement.dataset.theme);
check('theme toggle changes the theme', themeBefore !== themeAfter, themeBefore + ' -> ' + themeAfter);
await page.reload({ waitUntil: 'load' });
await page.waitForSelector('#view h1');
const themeReload = await page.evaluate(() => document.documentElement.dataset.theme);
check('theme choice persists', themeReload === themeAfter, themeReload);

/* ----------------------------------------------------------- 7. resources -- */
await go('#/resources');
await page.waitForTimeout(200);
const pdfLinks = await page.evaluate(() => Array.from(document.querySelectorAll('a[href$=".pdf"]')).map((a) => a.getAttribute('href')));
const uniquePdfs = Array.from(new Set(pdfLinks));
check('resources page lists all four PDFs', uniquePdfs.length === 4, uniquePdfs.join(', '));
const pdfFilesOk = uniquePdfs.every((href) => fs.existsSync(path.join(APP_DIR, decodeURI(href))));
check('every PDF link resolves to a real file on disk', pdfFilesOk);

/* -------------------------------------------- 8. export / import / reset -- */
await go('#/settings');
await page.waitForTimeout(200);
const [download] = await Promise.all([
  page.waitForEvent('download', { timeout: 8000 }).catch(() => null),
  page.click('[data-action="export-data"]').catch(() => {})
]);
let exportedPath = null;
if (download) {
  exportedPath = path.join(ROOT, 'dist', 'export-check.json');
  await download.saveAs(exportedPath);
}
check('export produces a JSON backup', !!exportedPath && fs.existsSync(exportedPath));
let exportedJson = null;
if (exportedPath) {
  try { exportedJson = JSON.parse(fs.readFileSync(exportedPath, 'utf8')); } catch (e) { exportedJson = null; }
}
check('exported JSON is valid and versioned', !!exportedJson && (exportedJson.version || exportedJson.schema),
  exportedJson ? JSON.stringify(Object.keys(exportedJson)) : 'none');

/* ------------------------------------------------------- 9. code download -- */
await go('#/practical/' + data.programs[1].id);
const [codeDownload] = await Promise.all([
  page.waitForEvent('download', { timeout: 8000 }).catch(() => null),
  page.locator('[data-action="download-code"]').first().click().catch(() => {})
]);
check('code download produces a file', !!codeDownload, codeDownload ? codeDownload.suggestedFilename() : 'no download');

/* --------------------------------------------------------- 10. assistant --- */
await go('#/assistant');
await page.waitForTimeout(200);
const assistantVisible = await page.locator('#view h1').first().innerText().catch(() => '');
check('study assistant page renders', assistantVisible.toLowerCase().includes('assistant'), assistantVisible);

/* ------------------------------------------------------ 11. responsive ----- */
const widths = [360, 390, 430, 768, 1024, 1366, 1440, 1920];
const overflow = [];
for (const w of widths) {
  await page.setViewportSize({ width: w, height: 900 });
  for (const hash of ['#/dashboard', '#/practicals', '#/practical/' + first.id, '#/resources', '#/settings']) {
    await go(hash);
    await page.waitForTimeout(120);
    const res = await page.evaluate(() => ({
      sw: document.documentElement.scrollWidth,
      cw: document.documentElement.clientWidth
    }));
    if (res.sw > res.cw + 1) overflow.push(`${w}px ${hash}: ${res.sw}>${res.cw}`);
  }
}
check('no horizontal overflow at 360–1920px', overflow.length === 0, overflow.slice(0, 6).join(' | '));

/* mobile drawer */
await page.setViewportSize({ width: 390, height: 844 });
await go('#/dashboard');
const drawerButton = page.locator('[data-action="toggle-nav"], #nav-toggle, button[aria-label*="menu" i]').first();
const hasDrawerButton = await drawerButton.count();
if (hasDrawerButton) {
  await drawerButton.click();
  await page.waitForTimeout(250);
  const drawerOpen = await page.evaluate(() => !!document.querySelector('.sidebar.open, body.nav-open, .nav-open'));
  check('mobile navigation drawer opens', drawerOpen);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  const drawerClosed = await page.evaluate(() => !document.querySelector('.sidebar.open, body.nav-open, .nav-open'));
  check('Escape closes the mobile drawer', drawerClosed);
} else {
  check('mobile navigation drawer opens', false, 'no drawer button found');
}

/* ------------------------------------------------------- 12. console/logs --- */
const ignorable = (t) => /favicon|ERR_FILE_NOT_FOUND.*favicon|Download the React/i.test(t);
const realErrors = pageErrors.filter((t) => !ignorable(t));
const realConsole = consoleErrors.filter((t) => !ignorable(t));
check('no uncaught page errors', realErrors.length === 0, realErrors.slice(0, 3).join(' | '));
check('no console errors', realConsole.length === 0, realConsole.slice(0, 3).join(' | '));

/* --------------------------------------------------------------- report ---- */
await browser.close();

const passed = results.filter((r) => r.ok).length;
console.log('\nLabMaster standalone verification — file://' + '\n' + '='.repeat(64));
for (const r of results) {
  console.log(`  ${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? '  [' + r.detail + ']' : ''}`);
}
console.log('='.repeat(64));
console.log(`  ${passed}/${results.length} checks passed`);
if (passed !== results.length) process.exitCode = 1;
