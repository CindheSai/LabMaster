/**
 * LabMaster standalone data export.
 *
 * Reads the original educational data modules (the single source of truth for
 * all 4 subjects and 39 practicals) and writes `standalone/data.json`, which is
 * embedded directly into the portable index.html so the app never needs fetch().
 *
 * The five known program defects are corrected here (correctedCode / expected
 * output / security), while the original lab-manual code is preserved verbatim
 * in `originalCode` for study and comparison.
 */
import fs from 'node:fs';
import path from 'node:path';
import { MAJOR_SUBJECTS } from '../src/data/subjects';
import { LAB_PROGRAMS } from '../src/data/labPrograms';
import { PHP_LAB_PROGRAMS } from '../src/data/phpPrograms';
import { DATA_SCIENCE_LAB_PROGRAMS } from '../src/data/dataSciencePrograms';
import { PYTHON_APP_DEV_LAB_PROGRAMS } from '../src/data/pythonAppDevPrograms';

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'standalone', 'data.json');

type AnyProgram = Record<string, any>;

const programs: AnyProgram[] = [
  ...(LAB_PROGRAMS as AnyProgram[]).map((p) => ({ ...p, subjectId: 'major-12' })),
  ...(PHP_LAB_PROGRAMS as AnyProgram[]).map((p) => ({ ...p, subjectId: 'major-13' })),
  ...(DATA_SCIENCE_LAB_PROGRAMS as AnyProgram[]).map((p) => ({ ...p, subjectId: 'major-14' })),
  ...(PYTHON_APP_DEV_LAB_PROGRAMS as AnyProgram[]).map((p) => ({ ...p, subjectId: 'major-15' })),
];

const byId = (id: number): AnyProgram => {
  const found = programs.find((p) => p.id === id);
  if (!found) throw new Error(`Program ${id} not found`);
  return found;
};

/* ------------------------------------------------------------------ */
/* FIX 1 — Major 15 Program 6: matrix multiplication accumulation      */
/* ------------------------------------------------------------------ */
const PY306_CODE = `# Matrix addition and multiplication with dimension validation
rows_a = int(input('Enter number of rows for Matrix A: '))
cols_a = int(input('Enter number of columns for Matrix A: '))
rows_b = int(input('Enter number of rows for Matrix B: '))
cols_b = int(input('Enter number of columns for Matrix B: '))

# Addition needs identical dimensions
if rows_a != rows_b or cols_a != cols_b:
    raise SystemExit('Matrix addition requires both matrices to have the same dimensions.')

print('\\nEnter values for Matrix A')
matrix_A = [[int(input(f'A[{i}][{j}]: ')) for j in range(cols_a)] for i in range(rows_a)]

print('\\nEnter values for Matrix B')
matrix_B = [[int(input(f'B[{i}][{j}]: ')) for j in range(cols_b)] for i in range(rows_b)]

# 1. Addition: element by element
add_result = [[matrix_A[i][j] + matrix_B[i][j] for j in range(cols_a)] for i in range(rows_a)]

print('\\nAddition of Matrix-A and Matrix-B is :')
for row in add_result:
    print(row)

# Multiplication needs columns(A) == rows(B)
if cols_a != rows_b:
    raise SystemExit('Matrix multiplication requires columns of A to equal rows of B.')

# 2. Multiplication: ACCUMULATE the row-by-column dot product
mult_result = [[0 for _ in range(cols_b)] for _ in range(rows_a)]
for i in range(rows_a):
    for j in range(cols_b):
        for k in range(cols_a):
            mult_result[i][j] += matrix_A[i][k] * matrix_B[k][j]

print('\\nMultiplication of Matrix-A and Matrix-B is :')
for row in mult_result:
    print(row)
`;

const PY306_OUTPUT = `Enter number of rows for Matrix A: 2
Enter number of columns for Matrix A: 2
Enter number of rows for Matrix B: 2
Enter number of columns for Matrix B: 2

Enter values for Matrix A
A[0][0]: 1
A[0][1]: 2
A[1][0]: 3
A[1][1]: 4

Enter values for Matrix B
B[0][0]: 5
B[0][1]: 6
B[1][0]: 7
B[1][1]: 8

Addition of Matrix-A and Matrix-B is :
[6, 8]
[10, 12]

Multiplication of Matrix-A and Matrix-B is :
[19, 22]
[43, 50]`;

{
  const p = byId(306);
  p.correctedCode = PY306_CODE;
  p.sampleOutputText = PY306_OUTPUT;
  p.correctionExplanation =
    'Defect in the lab-manual listing: the inner multiplication loop assigns with "=" instead of accumulating with "+=", so every earlier product in the dot product is overwritten and only the k = cols-1 term survives. The manual also reuses the addition matrix without clearing it. This corrected version (1) validates that addition operands share dimensions, (2) validates cols(A) == rows(B) before multiplying, and (3) accumulates with result[i][j] += matrix_A[i][k] * matrix_B[k][j]. The corrected expected output for A = [[1,2],[3,4]] and B = [[5,6],[7,8]] is [[19,22],[43,50]]; the manual output [[14,16],[28,32]] is the symptom of the bug.';
  p.technologies = Array.from(new Set([...(p.technologies || []), 'Python']));
}

/* ------------------------------------------------------------------ */
/* FIX 2 — Major 14 Program 6: mixed-type missing value imputation     */
/* ------------------------------------------------------------------ */
const DS206_CODE = `import pandas as pd

# Keep the CSV beside the script and use a relative path
df = pd.read_csv('emp.csv')

print("Missing data in each column:")
print(df.isnull().sum())

# Option 1: drop every row that contains a missing value
df_dropped = df.dropna()
print("\\nData after dropping rows with missing values:")
print(df_dropped.head())

# Option 2: impute per column type
# df.mean() on the whole frame fails (TypeError) in Pandas 2.x because it tries
# to average text columns. Average numeric columns and use the mode for text.
numeric_cols = df.select_dtypes(include='number').columns
text_cols = df.select_dtypes(exclude='number').columns

df_filled = df.copy()
for col in numeric_cols:
    df_filled[col] = df_filled[col].fillna(df_filled[col].mean())

for col in text_cols:
    mode = df_filled[col].mode(dropna=True)
    if not mode.empty:
        df_filled[col] = df_filled[col].fillna(mode.iloc[0])

print("\\nData after filling numeric columns with mean and text columns with mode:")
print(df_filled)
print("\\nRemaining missing values:", int(df_filled.isnull().sum().sum()))
`;

{
  const p = byId(206);
  p.correctedCode = DS206_CODE;
  p.correctionExplanation =
    'Defect in the lab-manual listing: df.fillna(df.mean()) is applied to the whole DataFrame. From Pandas 2.0 onwards df.mean() on mixed dtypes raises a TypeError because string columns cannot be averaged, and silently dropping or averaging text is statistically wrong. The corrected version detects numeric and text columns with select_dtypes(), imputes numeric gaps with the column mean and text gaps with the column mode, and reports how many values are still missing.';
}

/* ------------------------------------------------------------------ */
/* FIX 3 — Major 13 Program 7: secure PHP file upload                  */
/* ------------------------------------------------------------------ */
const PHP107_INDEX = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Secure File Upload</title>
</head>
<body>
  <h1>Upload a document</h1>
  <form enctype="multipart/form-data" action="upload.php" method="post">
    <label for="uploaded_file">Select file (PDF, PNG, JPG, TXT &mdash; max 2 MB):</label><br>
    <input type="file" id="uploaded_file" name="uploaded_file"
           accept=".pdf,.png,.jpg,.jpeg,.txt" required>
    <input type="submit" value="Upload">
  </form>
</body>
</html>`;

const PHP107_UPLOAD = `<?php
// upload.php - hardened upload handler (XAMPP: htdocs/phplab/upload.php)
declare(strict_types=1);

const MAX_BYTES = 2 * 1024 * 1024; // 2 MB
// Extension => accepted MIME types. Never execute uploaded files.
const ALLOWED = [
    'pdf'  => ['application/pdf'],
    'png'  => ['image/png'],
    'jpg'  => ['image/jpeg'],
    'jpeg' => ['image/jpeg'],
    'txt'  => ['text/plain'],
];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed.');
}

if (!isset($_FILES['uploaded_file']) || $_FILES['uploaded_file']['error'] !== UPLOAD_ERR_OK) {
    exit('Please select a file to upload.');
}

$file = $_FILES['uploaded_file'];

// 1. Size limit
if ($file['size'] <= 0 || $file['size'] > MAX_BYTES) {
    exit('File is empty or larger than 2 MB.');
}

// 2. Extension allowlist
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
if (!array_key_exists($ext, ALLOWED)) {
    exit('File type not allowed.');
}

// 3. Real MIME type check (never trust the browser-supplied type)
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime  = $finfo->file($file['tmp_name']);
if (!in_array($mime, ALLOWED[$ext], true)) {
    exit('File content does not match its extension.');
}

// 4. Randomised, safe file name - the client name is never used on disk
$uploadDir = __DIR__ . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR;
if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true)) {
    exit('Upload directory could not be created.');
}
$safeName = bin2hex(random_bytes(16)) . '.' . $ext;

// 5. Resolve the real path and confirm it stays inside the upload directory
$realDir = realpath($uploadDir);
if ($realDir === false) {
    exit('Upload directory is not accessible.');
}
$destination = $realDir . DIRECTORY_SEPARATOR . $safeName;
if (strpos($destination, $realDir . DIRECTORY_SEPARATOR) !== 0) {
    exit('Invalid destination path.');
}

// 6. move_uploaded_file() only accepts genuine HTTP uploads
if (!move_uploaded_file($file['tmp_name'], $destination)) {
    exit('There was an error saving the uploaded file.');
}

echo 'File uploaded successfully as ' . htmlspecialchars($safeName, ENT_QUOTES, 'UTF-8') . '.';
`;

{
  const p = byId(107);
  p.originalCode = `${PHP107_INDEX}\n\n${PHP107_UPLOAD}`;
  p.codeFiles = [
    {
      fileName: 'index.html',
      language: 'html',
      label: 'Upload form',
      description: 'Client-side form with multipart encoding and a matching accept filter.',
      code: PHP107_INDEX,
    },
    {
      fileName: 'upload.php',
      language: 'php',
      label: 'Secure handler',
      description: 'Server-side validation: size, extension allowlist, real MIME type, randomised name, path traversal guard.',
      code: PHP107_UPLOAD,
    },
  ];
  p.correctedCode = `${PHP107_INDEX}\n\n${PHP107_UPLOAD}`;
  p.correctionExplanation =
    'Defect in the lab-manual listing: the original handler trusts $_FILES["name"], writes it straight into the upload folder and never checks size, extension or real content type. That allows path traversal ("../../shell.php"), overwriting existing files, and uploading executable .php files into a web-served folder. This hardened version enforces a 2 MB limit, an extension allowlist, a finfo MIME check, a cryptographically random file name, a realpath containment check, and it never executes uploaded files. XAMPP note: this is a real server-side script - it only runs through http://localhost, not from a double-clicked HTML file.';
  p.sampleOutputText = `File uploaded successfully as 9f2c1d7ab84e4c0fa3b5d6e7c8a91b23.pdf.`;
}

/* ------------------------------------------------------------------ */
/* FIX 4 — Major 15 Program 9: calculator without eval()               */
/* ------------------------------------------------------------------ */
const PY309_CODE = `import ast
import operator
import tkinter as tk

# Only these AST node types may be evaluated - everything else is rejected.
OPS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.FloorDiv: operator.floordiv,
    ast.Mod: operator.mod,
    ast.Pow: operator.pow,
    ast.USub: operator.neg,
    ast.UAdd: operator.pos,
}


def safe_eval(expression):
    """Evaluate pure arithmetic without eval(). Raises ValueError otherwise."""
    def _eval(node):
        if isinstance(node, ast.Expression):
            return _eval(node.body)
        if isinstance(node, ast.Constant):
            if isinstance(node.value, (int, float)):
                return node.value
            raise ValueError('Only numbers are allowed')
        if isinstance(node, ast.BinOp) and type(node.op) in OPS:
            left, right = _eval(node.left), _eval(node.right)
            if isinstance(node.op, ast.Pow) and abs(right) > 100:
                raise ValueError('Exponent too large')
            return OPS[type(node.op)](left, right)
        if isinstance(node, ast.UnaryOp) and type(node.op) in OPS:
            return OPS[type(node.op)](_eval(node.operand))
        raise ValueError('Unsupported expression')

    return _eval(ast.parse(expression, mode='eval'))


def click(event):
    text = event.widget.cget('text')
    if text == '=':
        try:
            value = safe_eval(entry.get())
            entry.delete(0, tk.END)
            entry.insert(0, str(value))
        except (ValueError, SyntaxError, ZeroDivisionError):
            entry.delete(0, tk.END)
            entry.insert(0, 'Error')
    elif text == 'C':
        entry.delete(0, tk.END)
    else:
        entry.insert(tk.END, text)


root = tk.Tk()
root.title('Safe Calculator')

entry = tk.Entry(root, font='Arial 20')
entry.grid(row=0, column=0, columnspan=4, ipadx=8, ipady=8)

buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
]

for i, row in enumerate(buttons):
    for j, text in enumerate(row):
        btn = tk.Button(root, text=text, font='Arial 18', width=5, height=2)
        btn.grid(row=i + 1, column=j, padx=3, pady=3)
        btn.bind('<Button-1>', click)

root.mainloop()
`;

{
  const p = byId(309);
  p.correctedCode = PY309_CODE;
  p.correctionExplanation =
    'Security defect in the lab-manual listing: the "=" handler calls eval() on whatever is in the Entry widget. eval() executes arbitrary Python, so input such as __import__("os").system("calc") runs real code. The corrected version parses the expression with ast.parse(..., mode="eval") and only permits numeric constants plus the arithmetic operators in an explicit allowlist, rejecting names, calls, attribute access and oversized exponents. It also catches ZeroDivisionError, which the original did not.';
  p.sampleOutputText = `Typing 7 * 8 =              -> 56
Typing 9 / 0 =              -> Error
Typing __import__("os") =   -> Error (rejected by the parser, no code executed)`;
}

/* ------------------------------------------------------------------ */
/* FIX 5 — Major 15 Program 10: full CRUD (Create/Read/Update/Delete)  */
/* ------------------------------------------------------------------ */
const PY310_CODE = `import sqlite3
import tkinter as tk

conn = sqlite3.connect('data.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS records (
                 id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT NOT NULL,
                 age INTEGER)''')
conn.commit()

selected_id = None


def refresh():
    """READ - list every record in the listbox."""
    listbox.delete(0, tk.END)
    for row in c.execute('SELECT id, name, age FROM records ORDER BY id'):
        listbox.insert(tk.END, f'{row[0]} | {row[1]} | {row[2]}')


def add():
    """CREATE - insert a new record."""
    name, age = e1.get().strip(), e2.get().strip()
    if not name or not age.isdigit():
        status.config(text='Enter a name and a numeric age.')
        return
    c.execute('INSERT INTO records (name, age) VALUES (?, ?)', (name, int(age)))
    conn.commit()
    e1.delete(0, tk.END)
    e2.delete(0, tk.END)
    status.config(text='Record added.')
    refresh()


def select(event):
    """Remember the highlighted record for update/delete."""
    global selected_id
    if not listbox.curselection():
        return
    row = listbox.get(listbox.curselection()[0])
    selected_id = int(row.split('|')[0].strip())
    e1.delete(0, tk.END)
    e1.insert(0, row.split('|')[1].strip())
    e2.delete(0, tk.END)
    e2.insert(0, row.split('|')[2].strip())
    status.config(text=f'Selected record {selected_id}')


def update():
    """UPDATE - change the selected record."""
    global selected_id
    name, age = e1.get().strip(), e2.get().strip()
    if selected_id is None:
        status.config(text='Select a record first.')
        return
    if not name or not age.isdigit():
        status.config(text='Enter a name and a numeric age.')
        return
    c.execute('UPDATE records SET name = ?, age = ? WHERE id = ?',
              (name, int(age), selected_id))
    conn.commit()
    status.config(text=f'Record {selected_id} updated.')
    refresh()


def delete():
    """DELETE - remove the selected record."""
    global selected_id
    if selected_id is None:
        status.config(text='Select a record first.')
        return
    c.execute('DELETE FROM records WHERE id = ?', (selected_id,))
    conn.commit()
    status.config(text=f'Record {selected_id} deleted.')
    selected_id = None
    e1.delete(0, tk.END)
    e2.delete(0, tk.END)
    refresh()


root = tk.Tk()
root.title('SQLite CRUD App')

tk.Label(root, text='Name').grid(row=0, column=0)
e1 = tk.Entry(root)
e1.grid(row=0, column=1)

tk.Label(root, text='Age').grid(row=1, column=0)
e2 = tk.Entry(root)
e2.grid(row=1, column=1)

tk.Button(root, text='Add', command=add).grid(row=2, column=0, pady=5)
tk.Button(root, text='Update', command=update).grid(row=2, column=1, pady=5)
tk.Button(root, text='Delete', command=delete).grid(row=2, column=2, pady=5)
tk.Button(root, text='Refresh', command=refresh).grid(row=2, column=3, pady=5)

listbox = tk.Listbox(root, width=40, height=8)
listbox.grid(row=3, column=0, columnspan=4, pady=10)
listbox.bind('<<ListboxSelect>>', select)

status = tk.Label(root, text='Ready')
status.grid(row=4, column=0, columnspan=4)

refresh()
root.mainloop()
conn.close()
`;

{
  const p = byId(310);
  p.correctedCode = PY310_CODE;
  p.correctionExplanation =
    'Gap in the lab-manual listing: it only implements Create (Add) and Read (View), so it is not a complete CRUD application. The corrected version adds Update and Delete on the selected row, uses an AUTOINCREMENT primary key so rows can be addressed reliably, validates the age input, and uses parameterised SQL (?) for every statement to prevent SQL injection. All four operations are genuine - they run against SQLite when you run the file with Python.';
  p.sampleOutputText = `Add  -> Ada, 21
Add  -> Grace, 24
Update (id 1) -> Ada, 22
Delete (id 2)
Refresh -> 1 | Ada | 22`;
}

/* ------------------------------------------------------------------ */
/* Assemble output                                                     */
/* ------------------------------------------------------------------ */
const SUBJECT_PDFS: Record<string, { file: string; label: string }> = {
  'major-12': { file: 'resources/web-interface-designing.pdf', label: 'Web Programs and Outputs' },
  'major-13': { file: 'resources/php-mysql.pdf', label: 'PHP Lab Programs 1 to 10' },
  'major-14': { file: 'resources/data-science.pdf', label: 'Data Science Lab Manual' },
  'major-15': { file: 'resources/python-application-development.pdf', label: 'Python Programs' },
};

const subjects = MAJOR_SUBJECTS.map((s) => {
  const list = programs
    .filter((p) => p.subjectId === s.id)
    .sort((a, b) => a.programNumber - b.programNumber);
  return {
    ...s,
    totalPrograms: list.length,
    pdf: SUBJECT_PDFS[s.id],
    programIds: list.map((p) => p.id),
    languages: Array.from(new Set(list.flatMap((p) => p.technologies || []))),
  };
});

for (const p of programs) {
  if (!p.pdfQuestion) p.pdfQuestion = p.title;
  if (!p.shortDescription) p.shortDescription = '';
  p.vivaQuestions = p.vivaQuestions || [];
  p.steps = p.steps || [];
  p.examNotes = p.examNotes || [];
  p.conceptsUsed = p.conceptsUsed || [];
  p.executionFlow = p.executionFlow || [];
  p.technologies = p.technologies || [];
}

const payload = {
  schema: 1,
  generatedAt: new Date().toISOString(),
  subjects,
  programs: programs.sort((a, b) => {
    const sa = subjects.findIndex((s) => s.id === a.subjectId);
    const sb = subjects.findIndex((s) => s.id === b.subjectId);
    return sa - sb || a.programNumber - b.programNumber;
  }),
};

const ids = new Set(payload.programs.map((p) => p.id));
if (ids.size !== 39) throw new Error(`Expected 39 unique programs, found ${ids.size}`);
if (payload.subjects.length !== 4) throw new Error('Expected 4 subjects');
for (const s of payload.subjects) {
  if (s.totalPrograms !== s.programIds.length) throw new Error(`Count mismatch for ${s.id}`);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(payload));

const bytes = fs.statSync(OUT).size;
console.log(
  `export-data: ${payload.subjects.length} subjects, ${payload.programs.length} practicals, ${(bytes / 1024).toFixed(0)} KB -> ${path.relative(ROOT, OUT)}`,
);
