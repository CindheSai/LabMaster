# 🎓 LabMaster

> **Learn. Understand. Practice. Perform.**  
> An interactive, production-grade educational platform engineered for **B.Sc. Computer Science** students preparing for college practical laboratory examinations.

---

## 📌 Project Overview

**LabMaster** bridges the gap between static laboratory manuals and real-world understanding. Instead of memorizing code without comprehension, students can explore all **39 laboratory programs across 4 Major semester courses**, examine every single line of code with a structured 5-part explanation model, test live interactive simulations, and master examiner Viva Voce questions.

### 🌟 Key Highlights

- **Complete Curriculum Coverage:** All 39 practical programs across 4 Major Computer Science subjects.
- **Deep Line-by-Line Explanation Model:** Every meaningful line of code is broken down into 5 educational dimensions:
  1. **What This Line Means:** Plain-English explanation of syntax, keywords, and statements.
  2. **Why It Is Needed:** Educational purpose and design necessity in the program.
  3. **What Happens When Executed:** Internal runtime mechanism (memory, CPU, DOM, server, database).
  4. **Connection to Surrounding Lines:** How inputs flow from previous lines and prepare state for subsequent operations.
  5. **Examiner Note & Lab Tip:** Practical viva traps, formatting gotchas, and exam-scoring advice.
- **Dual Learning Modes:**
  - **Interactive Step Walkthrough:** Focused line-by-line progression with a clickable navigation scrubber.
  - **Comprehensive Expand-All View:** Fast scrolling mode with real-time text search filter across all lines.
- **Specialized Live Output & Simulation Engines:**
  - **Major 12 (Web Tech):** Sandboxed live browser preview with visual simulation of local legacy media paths.
  - **Major 13 (PHP & MySQL):** Server-side simulator replicating POST/GET requests, sessions, cookies, file uploads, and simulated MySQL query execution tables. Includes step-by-step local XAMPP run instructions.
  - **Major 14 (Data Science):** Interactive dataset explorer with NumPy array transforms, Pandas filtering, and responsive SVG statistical charts (Bar, Line, Histogram, Box plot, Scatter, KDE).
  - **Major 15 (Python App Dev):** Client-side simulation of Python CLI and interactive Tkinter desktop GUI windows (including working Calculator and SQLite student record database).
- **Exam Readiness Tools:**
  - **Viva Voce Examination Bank:** Real viva questions with collapsible answers for self-testing.
  - **Exact PDF Code vs Modern Version Toggle:** Compare verbatim college manual code with modern web/Python best practices.
  - **Global Quick Search:** Instant search modal via `Ctrl + K` or `⌘ + K`.
  - **Progress Tracking & Bookmarks:** Persistent completion markers and exam-day revision bookmarks saved to local storage.

---

## 📚 Complete Syllabus Coverage (39 Programs across 4 Majors)

### 🌐 Major 12 — Web Interface Designing Technologies (9 Programs)
- **Program 1:** Web page demonstrating text formatting tags (`<h1>`-`<h6>`, `<p>`, `<b>`, `<i>`, `<u>`, `<font>`).
- **Program 2:** Web page illustrating ordered (`<ol>`), unordered (`<ul>`), and definition lists (`<dl>`).
- **Program 3:** HTML anchor links (`<a>`), mailto links, internal bookmarks, and images (`<img>`).
- **Program 4:** Complex table layout with merged cells (`colspan`, `rowspan`), captions, and image integration.
- **Program 5:** Comprehensive student feedback form with text fields, radio buttons, checkboxes, select dropdowns, and textareas.
- **Program 6:** JavaScript Math and String objects demonstrating trigonometric functions, rounding, substring slicing, and regex replacements.
- **Program 7:** Client-side form validation verifying non-empty fields, name alphabet constraints, 10-digit phone numbers, and email patterns.
- **Program 8:** Client-side Image Map with `<map>` and `<area>` tags (`rect`, `circle`, `poly`) triggering JavaScript alerts.
- **Program 9:** External CSS stylesheet (`styles.css`) demonstrating font styling, borders, backgrounds, and margins linked to HTML.

### 🐘 Major 13 — PHP & MySQL (10 Programs)
- **Program 1:** PHP script generating the Fibonacci sequence using iterative loops.
- **Program 2:** Value swapping demonstration comparing pass-by-value and pass-by-reference mechanisms.
- **Program 3:** Array manipulation showcasing `array_push`, `array_pop`, sorting, and associative array iteration.
- **Program 4:** String analysis counting vowels and consonants with case-insensitive matching.
- **Program 5:** Employee registration form processing HTTP `POST` requests and displaying formatted server output.
- **Program 6:** Multi-input Student Registration form with gender radio buttons, course checkboxes, and validation.
- **Program 7:** PHP file upload handling with `$_FILES`, size constraints, and MIME type validation.
- **Program 8:** Cookie management creating, retrieving, and expiring persistent client-side cookies (`setcookie`).
- **Program 9:** User session management with `session_start()`, login state preservation, and session termination.
- **Program 10:** MySQL database integration executing `mysqli_connect`, `CREATE TABLE`, `INSERT`, `SELECT`, and dynamic HTML table rendering.

### 📊 Major 14 — Foundation of Data Science (10 Programs)
- **Program 1:** NumPy array creation from lists, `np.arange()`, `np.linspace()`, `np.zeros()`, and random generators.
- **Program 2:** Multi-dimensional NumPy array indexing, slicing, reshaping, and transposition.
- **Program 3:** Element-wise arithmetic operations, broadcasting, dot products, and statistical aggregations (`mean`, `std`, `sum`).
- **Program 4:** Pandas Series creation from dictionaries, index-based querying, and scalar filtering.
- **Program 5:** CSV dataset ingestion into Pandas DataFrames, inspection (`head`, `info`, `describe`), filtering, sorting, and ranking.
- **Program 6:** Missing data detection with `.isnull()`, `.dropna()`, and imputation using `.fillna(df.mean())`.
- **Program 7:** Column-wise data transformation using `.apply()`, lambda functions, mapping dictionaries, and vectorized string operations.
- **Program 8:** Categorical Bar charts and time-series Line plots using Matplotlib with labels, legends, and gridlines.
- **Program 9:** Continuous distribution analysis using Histograms with frequency bins and Box plots with quartile whiskers.
- **Program 10:** Bivariate correlation visualization using Seaborn Scatter plots and Kernel Density Estimation (KDE) contour distributions.

### 🐍 Major 15 — Application Development using Python (10 Programs)
- **Program 1:** Interactive Temperature Converter (`°C` to `°F` and `°F` to `°C`) with clean console formatting.
- **Program 2:** Student grading program calculating total marks, percentage, and distinction/first-class grades using `if-elif-else`.
- **Program 3:** Python sequence types exploration comparing lists (mutable), tuples (immutable), and dictionaries (key-value mapping).
- **Program 4:** Fibonacci sequence generation up to `N` terms using a Python `while` loop with tuple assignment.
- **Program 5:** File handling utility reading and displaying the last `N` lines of a text file using `.readlines()[-n:]`.
- **Program 6:** 2D Matrix operations implementing addition, subtraction, scalar multiplication, and transpose via nested loops.
- **Program 7:** Robust exception handling demonstrating `try`, `except ZeroDivisionError`, `except ValueError`, `else`, and `finally`.
- **Program 8:** Multithreading with Python's `threading.Thread`, demonstrating concurrent worker threads and `thread.join()`.
- **Program 9:** Graphical Desktop Calculator built using Python's `tkinter` library with dynamic button grid layout and expression evaluation.
- **Program 10:** Complete Student Management Desktop GUI with Tkinter input forms integrated with an embedded `sqlite3` database table.

---

## 🚀 Getting Started & Local Setup

### ⚙️ Prerequisites
Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (v20+ recommended) — [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm** / **yarn**
- **Web Browser**: Chrome, Edge, Firefox, or Safari

### 📥 1. Clone or Extract the Project
```bash
git clone https://github.com/YOUR_USERNAME/labmaster.git
cd labmaster
```
*(Or extract the downloaded zip file into a folder of your choice and open your terminal in that folder).*

### 📦 2. Install Dependencies
```bash
npm install
```

### 💻 3. Run the Development Server
```bash
npm run dev
```

The terminal will display the local development server URL:
```text
  VITE v8.x.x  ready in 240 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open your browser and navigate to **`http://localhost:3000`**.

### 🔨 4. Build for Production
To generate an optimized, self-contained production bundle:
```bash
npm run build
```
The output files will be created in the `dist/` directory. You can preview the production build locally with:
```bash
npm run preview
```

---

## 📤 How to Upload to GitHub

Follow these standard steps to initialize git and push this complete project to your personal GitHub account:

### Step 1: Initialize Git Repository
In your project directory:
```bash
git init
git add .
git commit -m "Initial commit: LabMaster full practical laboratory platform (39 programs, 4 majors)"
```

### Step 2: Create a New Repository on GitHub
1. Go to [GitHub.com](https://github.com/) and click **New Repository**.
2. Name the repository: `labmaster` (or any name you prefer).
3. Set visibility to **Public** or **Private**.
4. **Do NOT** initialize with a README, .gitignore, or license (we already have pristine versions).
5. Click **Create repository**.

### Step 3: Link Remote & Push
Copy the commands shown on GitHub:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/labmaster.git
git push -u origin main
```

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 (SPA Architecture) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Syntax Highlighting** | Prism.js (PHP, Python, SQL, HTML, CSS, JS) |
| **Icons** | Lucide React |
| **Animations** | Motion |
| **Build Tool & Dev Server** | Vite 8 |
| **Storage & State** | Client-side HTML5 LocalStorage |

### 📂 Directory Structure

```text
labmaster/
├── index.html                   # HTML entry point with metadata & web fonts
├── metadata.json                # Project identity & metadata
├── package.json                 # Project dependencies & npm scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite build configuration
├── .gitignore                   # Clean git exclusion rules
├── .env.example                 # Example environment variables
├── README.md                    # Comprehensive documentation (this file)
└── src/
    ├── main.tsx                 # React app root mount point
    ├── App.tsx                  # Core state controller, routing & search
    ├── index.css                # Global styles & Tailwind configuration
    ├── types/
    │   └── index.ts             # TypeScript interfaces for programs, steps & viva
    ├── hooks/
    │   └── useLabStorage.ts     # LocalStorage hook for bookmarks & progress
    ├── data/
    │   ├── subjects.ts          # Subject definitions for all 4 Majors
    │   ├── labPrograms.ts       # Major 12 verified programs (9 programs)
    │   ├── phpPrograms.ts       # Major 13 verified programs (10 programs)
    │   ├── dataSciencePrograms.ts # Major 14 verified programs (10 programs)
    │   └── pythonAppDevPrograms.ts# Major 15 verified programs (10 programs)
    └── components/
        ├── Header.tsx           # Sticky navigation header with progress pill
        ├── Footer.tsx           # Semantic footer with course references
        ├── HeroSection.tsx      # Welcome hero with quick-action CTAs
        ├── HomeDashboard.tsx    # Course grid & recently studied tracker
        ├── SubjectDashboard.tsx # 4 Major course cards with completion bars
        ├── SubjectView.tsx      # Filterable program directory for each subject
        ├── ProgramCard.tsx      # Program summary card with badges
        ├── ProgramDetailView.tsx# Split code/preview workbench
        ├── CodeViewer.tsx       # Syntax-highlighted viewer with file tabs & copy
        ├── ExplanationView.tsx  # 5-card line-by-line explanation engine
        ├── LivePreview.tsx      # Major 12 sandboxed browser preview
        ├── PhpSimulationPreview.tsx # Major 13 PHP server sandbox & XAMPP guide
        ├── PythonSimulationPreview.tsx # Major 14 Data Science sandbox & charts
        ├── PythonAppDevSimulationPreview.tsx # Major 15 Tkinter GUI & CLI simulator
        ├── ProgressView.tsx     # Comprehensive completion statistics
        ├── BookmarksView.tsx    # Exam revision bookmarks list
        └── QuickSearchModal.tsx # Cmd+K modal search across all 39 programs
```

---

## 🧪 Testing & Verification

The project has undergone rigorous automated and manual validation:
- **TypeScript Typecheck:** `tsc --noEmit` exits cleanly with `0` errors.
- **Production Build:** `vite build` bundles cleanly into optimized chunks.
- **All 39 Programs Verified:** Cross-checked against official college practical manuals.
- **Cross-Browser Tested:** Responsive across desktop, tablet, and mobile screens.

---

## 📄 License
This project is licensed for educational use in university practical preparation.
All lab programs match standard university computer science practical syllabi.
