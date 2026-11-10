#!/usr/bin/env node
/**
 * LabMaster standalone builder
 * -----------------------------------------------------------------------------
 * Bundles the hand-written CSS/JS in `standalone/` plus the exported curriculum
 * data into ONE self-contained `index.html` that runs from the file:// protocol,
 * then stages the deliverables:
 *
 *   dist/LabMaster/index.html          <- double-click this
 *   dist/LabMaster/resources/*.pdf     <- the four original lab PDFs
 *   dist/LabMaster/README.txt
 *   dist/LabMaster/USER_GUIDE.txt
 *   dist/labmaster-standalone.zip      <- ready to hand to a student
 *
 * The same index.html / resources / docs are also copied to the repository root
 * so the repository itself is a working deliverable and deployable site.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'standalone');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(DIST, 'LabMaster');

const PDF_SOURCES = {
  'major-12': 'WEB_Programs_and_outputs_eec7b34e.pdf',
  'major-13': 'PHP_Lab_Programs_1_to_10_2f795e75.pdf',
  'major-14': 'data_science_Lab_f10b4c30.pdf',
  'major-15': 'PythonPrograms__1__980d97c0.pdf'
};

const problems = [];
const notes = [];

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

/* ---------------------------------------------------------------- inputs --- */
const cssFiles = fs.readdirSync(path.join(SRC, 'css')).filter((f) => f.endsWith('.css')).sort();
const jsFiles = fs.readdirSync(path.join(SRC, 'js')).filter((f) => f.endsWith('.js')).sort();

const css = cssFiles.map((f) => `/* ==== ${f} ==== */\n` + read(path.join(SRC, 'css', f))).join('\n');
const js = jsFiles.map((f) => `/* ==== ${f} ==== */\n` + read(path.join(SRC, 'js', f))).join('\n;\n');
const data = JSON.parse(read(path.join(SRC, 'data.json')));
const template = read(path.join(SRC, 'template.html'));

/* ------------------------------------------------------------- validation --- */
const programs = data.programs || [];
if (programs.length !== 39) problems.push(`expected 39 practicals, found ${programs.length}`);
if ((data.subjects || []).length !== 4) problems.push(`expected 4 subjects, found ${(data.subjects || []).length}`);

const seenIds = new Set();
const seenNumbers = {};
for (const p of programs) {
  if (seenIds.has(p.id)) problems.push(`duplicate program id ${p.id}`);
  seenIds.add(p.id);
  const key = `${p.subjectId}:${p.programNumber}`;
  if (seenNumbers[key]) problems.push(`duplicate program number ${key}`);
  seenNumbers[key] = true;
  if (!p.title) problems.push(`program ${p.id} has no title`);
  if (!p.originalCode) problems.push(`program ${p.id} has no source code`);
  if (!p.objective || !p.objective.whatItDoes) problems.push(`program ${p.id} has no objective`);
  if (!(p.steps || []).length) problems.push(`program ${p.id} has no code explanation steps`);
  if (!(p.vivaQuestions || []).length) problems.push(`program ${p.id} has no viva questions`);
}
for (const s of data.subjects || []) {
  const count = programs.filter((p) => p.subjectId === s.id).length;
  if (count !== s.totalPrograms) problems.push(`${s.code}: ${count} programs bundled, expected ${s.totalPrograms}`);
  if (!s.pdf || !PDF_SOURCES[s.id]) problems.push(`${s.code}: no PDF mapping`);
}

if (js.includes('</script')) problems.push('bundled JavaScript contains a literal </script> and cannot be inlined');
if (css.includes('</style')) problems.push('bundled CSS contains a literal </style> and cannot be inlined');
if (/<script[^>]+src=/i.test(template)) problems.push('template references an external script (must be self-contained)');
if (/<link[^>]+rel=["']stylesheet/i.test(template)) problems.push('template references an external stylesheet (must be self-contained)');

/* ------------------------------------------------------------------ bundle --- */
const json = JSON.stringify(data)
  .replace(/<\//g, '<\\/')            // never terminate the inline <script> from data
  .replace(/\u2028/g, '\\u2028')
  .replace(/\u2029/g, '\\u2029');

let html = template
  .replace('/*{{CSS}}*/', () => css)
  .replace('{{DATA}}', () => json)
  .replace('/*{{JS}}*/', () => js);

/* sanity: the shell must define the router + renderer, and every practical id must be present */
for (const marker of ['window.__LABMASTER_DATA__', 'window.LM', 'window.renderApp']) {
  if (!html.includes(marker)) problems.push(`bundle is missing ${marker}`);
}
for (const id of seenIds) {
  if (!html.includes(`"id":${JSON.stringify(String(id))}`) && !html.includes(`"id":${id}`)) {
    problems.push(`practical ${id} is missing from the bundle`);
  }
}

if (problems.length) {
  console.error('BUILD FAILED');
  problems.forEach((p) => console.error('  - ' + p));
  process.exit(1);
}

/* --------------------------------------------------------------- stage out --- */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'resources'), { recursive: true });

fs.writeFileSync(path.join(OUT, 'index.html'), html, 'utf8');

const pdfRoot = path.join(ROOT, 'public', 'assets', 'aistudio');
const copiedPdfs = [];
for (const subject of data.subjects) {
  const sourceName = PDF_SOURCES[subject.id];
  const source = path.join(pdfRoot, sourceName);
  if (!fs.existsSync(source)) {
    console.error(`BUILD FAILED: missing PDF ${source}`);
    process.exit(1);
  }
  const target = path.join(OUT, subject.pdf.file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  copiedPdfs.push({ file: subject.pdf.file, bytes: fs.statSync(target).size });
}

for (const doc of ['README.txt', 'USER_GUIDE.txt']) {
  const from = path.join(SRC, 'docs', doc);
  if (!fs.existsSync(from)) {
    console.error(`BUILD FAILED: missing ${from}`);
    process.exit(1);
  }
  fs.copyFileSync(from, path.join(OUT, doc));
}

/* ------------------------------------------------- root copy (deliverable) --- */
fs.copyFileSync(path.join(OUT, 'index.html'), path.join(ROOT, 'index.html'));
fs.rmSync(path.join(ROOT, 'resources'), { recursive: true, force: true });
fs.cpSync(path.join(OUT, 'resources'), path.join(ROOT, 'resources'), { recursive: true });
for (const doc of ['README.txt', 'USER_GUIDE.txt']) {
  fs.copyFileSync(path.join(OUT, doc), path.join(ROOT, doc));
}

/* --------------------------------------------------------------------- zip --- */
const zipPath = path.join(DIST, 'labmaster-standalone.zip');
fs.rmSync(zipPath, { force: true });
try {
  execFileSync('python3', ['-m', 'zipfile', '-c', zipPath, 'LabMaster'], { cwd: DIST, stdio: 'pipe' });
} catch (e) {
  problems.push('could not create the ZIP archive: ' + e.message);
}

/* --------------------------------------------------- release (tracked) ----- */
/* dist/ is excluded by the workspace git exclude file, so the shipped
   artifacts are mirrored into release/ which is committed to GitHub. */
const RELEASE = path.join(ROOT, 'release');
fs.rmSync(RELEASE, { recursive: true, force: true });
fs.mkdirSync(RELEASE, { recursive: true });
fs.cpSync(OUT, path.join(RELEASE, 'LabMaster'), { recursive: true });
if (fs.existsSync(zipPath)) {
  fs.copyFileSync(zipPath, path.join(RELEASE, 'labmaster-standalone.zip'));
}

/* ------------------------------------------------------------------ report --- */
const htmlBytes = fs.statSync(path.join(OUT, 'index.html')).size;
notes.push(`index.html          ${(htmlBytes / 1024).toFixed(1)} KB (single file, no external requests)`);
notes.push(`subjects/practicals ${data.subjects.length} / ${programs.length}`);
notes.push(`viva questions      ${programs.reduce((n, p) => n + p.vivaQuestions.length, 0)}`);
notes.push(`code explanation    ${programs.reduce((n, p) => n + p.steps.length, 0)} annotated steps`);
for (const p of copiedPdfs) notes.push(`${p.file.padEnd(46)} ${(p.bytes / 1024).toFixed(0)} KB`);
if (fs.existsSync(zipPath)) notes.push(`zip                 ${(fs.statSync(zipPath).size / 1024).toFixed(0)} KB -> dist/labmaster-standalone.zip`);

console.log('LabMaster standalone build complete\n');
notes.forEach((n) => console.log('  ' + n));
console.log('\n  open: dist/LabMaster/index.html  (double-click, no server)');
console.log('  ship: release/LabMaster + release/labmaster-standalone.zip  (committed to Git)');
