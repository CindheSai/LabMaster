#!/usr/bin/env node
/**
 * Content integrity checks for LabMaster.
 *
 * Verifies that the shipped educational data still contains the four original
 * subjects and all 39 practicals with their original IDs, that every practical
 * carries real teaching material, that the four PDF resources resolve, and that
 * the five known programming defects stay corrected.
 *
 * Exits non-zero on any failure so it can run as a CI check.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = JSON.parse(readFileSync(join(ROOT, 'standalone/data.json'), 'utf8'));

const problems = [];
const notes = [];
const fail = (msg) => problems.push(msg);
const ok = (msg) => notes.push(msg);

/** Some authored fields are strings, some are arrays of paragraphs/lines. */
const asText = (v) => {
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v.map(asText).join(' ');
  if (v && typeof v === 'object') return Object.values(v).map(asText).join(' ');
  return '';
};

/* ---------------------------------------------------------------- subjects */
const EXPECTED = {
  'major-12': { ids: [1, 2, 3, 4, 5, 6, 7, 8, 9], name: 'Web Interface Designing' },
  'major-13': { ids: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110], name: 'PHP & MySQL' },
  'major-14': { ids: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210], name: 'Foundation of Data Science' },
  'major-15': { ids: [301, 302, 303, 304, 305, 306, 307, 308, 309, 310], name: 'Python Application Development' }
};

const subjects = DATA.subjects || [];
const programs = DATA.programs || [];

if (subjects.length !== 4) fail(`expected 4 subjects, found ${subjects.length}`);
if (programs.length !== 39) fail(`expected 39 practicals, found ${programs.length}`);

const allIds = programs.map((p) => p.id);
const uniqueIds = new Set(allIds);
if (uniqueIds.size !== allIds.length) fail('duplicate practical IDs present');
else ok(`39 unique practical IDs (${allIds.length} programs)`);

for (const [sid, spec] of Object.entries(EXPECTED)) {
  const subject = subjects.find((s) => s.id === sid);
  if (!subject) { fail(`subject ${sid} missing`); continue; }

  const owned = programs.filter((p) => p.subjectId === sid).map((p) => p.id).sort((a, b) => a - b);
  if (owned.join(',') !== spec.ids.join(',')) {
    fail(`${sid} practical IDs ${owned.join(',')} != expected ${spec.ids.join(',')}`);
  } else {
    ok(`${sid} owns ${spec.ids.length} practicals with original IDs`);
  }

  if (!Array.isArray(subject.programIds) || subject.programIds.length !== spec.ids.length) {
    fail(`${sid} programIds length wrong`);
  }
  if (!subject.title) fail(`${sid} has no title`);

  // every practical must carry genuine teaching material
  for (const id of spec.ids) {
    const p = programs.find((x) => x.id === id);
    if (!p) { fail(`practical ${id} missing`); continue; }
    if (!asText(p.title).trim()) fail(`practical ${id} has no title`);
    if (asText(p.originalCode).trim().length < 20) fail(`practical ${id} has no source code`);
    if (asText(p.objective).trim().length < 10) fail(`practical ${id} has no aim/objective`);
    if (!Array.isArray(p.steps) || p.steps.length === 0) fail(`practical ${id} has no algorithm steps`);
    if (!Array.isArray(p.vivaQuestions) || p.vivaQuestions.length === 0) fail(`practical ${id} has no viva questions`);
    if (!p.subjectId) fail(`practical ${id} has no subject association`);
  }
}

const vivaCount = programs.reduce((n, p) => n + (p.vivaQuestions || []).length, 0);
const stepCount = programs.reduce((n, p) => n + (p.steps || []).length, 0);
ok(`${vivaCount} viva questions and ${stepCount} algorithm steps preserved`);

/* ------------------------------------------------------------------- PDFs */
const PDF_ROOTS = ['standalone', 'dist/LabMaster', 'release/LabMaster'];
for (const s of subjects) {
  if (!s.pdf) { fail(`${s.id} has no PDF association`); continue; }
  const found = PDF_ROOTS.some((root) => existsSync(join(ROOT, root, s.pdf)));
  if (!found) fail(`PDF ${s.pdf} for ${s.id} not found on disk`);
  else ok(`${s.id} PDF resolves: ${s.pdf}`);
}

/* ------------------------------------------------- five known defect fixes */
const byId = (id) => programs.find((p) => p.id === id);
const codeOf = (p) => (p ? asText(p.correctedCode) || asText(p.originalCode) : '');

// Major 15 Program 6 — matrix multiplication accumulation + dimension check
{
  const p = byId(306);
  const code = codeOf(p);
  if (!p) fail('M15 P6 (id 306) missing');
  else {
    if (!/result\[i\]\[j\]\s*\+=/.test(code)) fail('M15 P6: no result[i][j] += accumulation');
    if (!/\[k\]\[j\]/.test(code)) fail('M15 P6: inner product does not use [k][j] of matrix B');
    if (!/(len\(matrix_B\)|shape\[0\]|rows_b|ncols|cols)/i.test(code)) fail('M15 P6: no dimension validation');
    if (problems.length === 0) ok('M15 P6 matrix multiplication accumulates correctly and validates dimensions');
  }
}

// Major 14 Program 6 — mixed-type missing values, no blind df.mean()
{
  const p = byId(206);
  const code = codeOf(p);
  if (!p) fail('M14 P6 (id 206) missing');
  else {
    if (/fillna\(\s*df\.mean\(\)/.test(code)) fail('M14 P6: still calls fillna(df.mean()) on mixed columns');
    if (!/(select_dtypes|numeric_only|dtype|is_numeric)/.test(code)) fail('M14 P6: no numeric/categorical split');
    if (!/(fillna|ffill|bfill|dropna)/.test(code)) fail('M14 P6: no missing-value handling');
    if (problems.length === 0) ok('M14 P6 handles numeric and categorical columns separately');
  }
}

// Major 13 Program 7 — secure PHP upload validation
{
  const p = byId(107);
  const code = codeOf(p);
  if (!p) fail('M13 P7 (id 107) missing');
  else {
    const hasMime = /(finfo|mime_content_type|getimagesize|\$_FILES\[[^\]]+\]\['type'\])/.test(code);
    const hasExtAllowlist = /(in_array\s*\(|allow|ALLOWED|whitelist)/i.test(code) && /(ext|extension)/i.test(code);
    const hasSize = /(size\s*>|MAX_|max_size|UPLOAD_ERR_INI_SIZE)/i.test(code);
    const hasRandomName = /(uniqid|random_bytes|bin2hex|random_int|md5\s*\(|hash\s*\()/.test(code);
    const hasTraversal = /(basename\s*\(|realpath|str_replace|\.\.)/.test(code);
    if (!hasMime) fail('M13 P7: no MIME validation');
    if (!hasExtAllowlist) fail('M13 P7: no extension allowlist');
    if (!hasSize) fail('M13 P7: no file-size limit');
    if (!hasRandomName) fail('M13 P7: no randomised stored filename');
    if (!hasTraversal) fail('M13 P7: no path-traversal protection');
    if (problems.length === 0) ok('M13 P7 validates MIME, extension allowlist, size, random name and traversal');
  }
}

// Major 15 Program 9 — calculator without eval()
{
  const p = byId(309);
  const code = codeOf(p);
  if (!p) fail('M15 P9 (id 309) missing');
  else {
    if (/\beval\s*\(/.test(code)) fail('M15 P9: still uses eval()');
    if (!/(ast\.parse|tokenize|shunting|def\s+\w*parse|operator\.)/.test(code)) fail('M15 P9: no safe arithmetic parser');
    if (problems.length === 0) ok('M15 P9 evaluates arithmetic without eval()');
  }
}

// Major 15 Program 10 — full CRUD
{
  const p = byId(310);
  const code = codeOf(p);
  if (!p) fail('M15 P10 (id 310) missing');
  else {
    for (const op of ['INSERT', 'SELECT', 'UPDATE', 'DELETE']) {
      if (!new RegExp(op, 'i').test(code)) fail(`M15 P10: missing ${op} operation`);
    }
    if (problems.length === 0) ok('M15 P10 implements Create, Read, Update and Delete');
  }
}

/* --------------------------------------------- clean first-run application */
try {
  const core = readFileSync(join(ROOT, 'standalone/js/01-core.js'), 'utf8');
  if (/completed\s*:\s*\[[^\]]*\d/.test(core)) fail('storage defaults pre-mark completed practicals');
  if (/bookmarks\s*:\s*\[[^\]]*\d/.test(core)) fail('storage defaults pre-populate bookmarks');
  ok('first run starts with no completed practicals and no bookmarks');
} catch (e) {
  fail(`could not read core storage module: ${e.message}`);
}

/* ---------------------------------------------------------------- results */
for (const n of notes) console.log(`  ok   ${n}`);
if (problems.length) {
  console.error(`\n  FAIL ${problems.length} content problem(s):`);
  for (const p of problems) console.error(`       - ${p}`);
  process.exit(1);
}
console.log(`\n  PASS  content integrity verified: 4 subjects, 39 practicals, ${vivaCount} viva questions, 4 PDFs, 5 defect fixes`);
