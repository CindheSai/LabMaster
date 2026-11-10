LABMASTER — PRACTICAL LEARNING WORKSPACE
========================================

WHAT THIS IS
------------
LabMaster is a complete, offline study workspace for four computer science lab
subjects. Everything — the interface, the 39 practicals, the code viewer, the
viva questions and your own notes — lives inside a single HTML file.

  4 subjects
  39 practicals (original program numbers preserved)
  4 original lab PDFs
  1 file to open


HOW TO START (THE ONLY STEP)
----------------------------
1. Extract the ZIP file.
2. Open the extracted LabMaster folder.
3. Double-click  index.html
4. The website opens in Chrome, Edge, Firefox or Safari.

That is all. There is no installation, no command prompt, no localhost, no
build step, no account and no API key. You can also copy the folder to a USB
stick and open it on another computer the same way.

Keep the folder intact
----------------------
index.html works on its own, but the four PDFs are separate files inside the
resources folder. If you move index.html out of the folder, the PDF links will
not find their files. Move or copy the whole folder instead.


WHAT IS INSIDE
--------------
Major 12 — Web Interface Designing            9 practicals  (P1–P9)
Major 13 — PHP & MySQL                       10 practicals  (P101–P110)
Major 14 — Foundation of Data Science        10 practicals  (P201–P210)
Major 15 — Python Application Development    10 practicals  (P301–P310)

Every practical page contains:

  Aim · Requirements · Theory · Algorithm · Source code
  Line-by-line code explanation · Expected output · Result
  Important notes · Viva questions and answers · Your personal notes

Features:

  * Dashboard with real progress statistics (nothing is hard-coded)
  * Subject pages with search, filters and sorting
  * Professional code viewer: syntax highlighting, line numbers, copy,
    download, font size, wrap and expand
  * Global search across subjects, practicals, theory, code, viva and notes
    (Ctrl + K / Cmd + K, arrow keys, Enter, Esc)
  * Bookmarks and completion tracking
  * Personal notes with export / import of all your data as JSON
  * Light, dark and system themes
  * Lab resources centre with the four PDFs (open, download, preview)
  * Offline study assistant that composes answers from the bundled lab data
  * Responsive layout for phone, tablet and desktop
  * Keyboard accessible, with visible focus and reduced-motion support


WHAT RUNS IN THE BROWSER — AND WHAT DOES NOT
--------------------------------------------
HTML, CSS and JavaScript practicals can be demonstrated live inside a sandboxed
frame. PHP, MySQL and Python cannot execute inside a double-clicked HTML file;
no browser can do that without a server. For those practicals LabMaster shows
the verified expected output plus exact instructions for running the program on
your own machine (XAMPP for PHP/MySQL, python for Python). Nothing pretends to
have executed when it has not.


YOUR DATA
---------
Completion, bookmarks, notes, recent activity and your theme are stored in your
browser's local storage for this file.

  * Nothing is uploaded anywhere; there is no account and no tracking.
  * Clearing browser data, using another browser, or moving the folder to
    another computer does not carry your progress over.
  * Use Settings → Export progress to save a JSON backup, and Import progress
    to restore it on another computer.

New installations always start empty: zero completed practicals, zero
bookmarks, zero notes.


OFFLINE USE
-----------
The application makes no network requests at all. After extraction it works
with Wi-Fi switched off. No fonts, icons, scripts or stylesheets are loaded
from the internet.


FILES
-----
  index.html                          the whole application
  resources/web-interface-designing.pdf
  resources/php-mysql.pdf
  resources/data-science.pdf
  resources/python-application-development.pdf
  README.txt                          this file
  USER_GUIDE.txt                      step-by-step study guide

A development copy of the source (TypeScript/React project, bundling scripts)
lives in the original repository, not in this folder — the folder above is the
finished product.


ACCURACY NOTE
-------------
Program numbering, titles and original source code come from the lab manual
data. Where a program contained a defect (for example the matrix multiplication
accumulation, the pandas mean-fill on mixed columns, the PHP upload validation,
the eval-based calculator and the CRUD operations), a corrected version is
provided and the original is kept beside it in the code viewer, so nothing from
the syllabus is lost. Every correction is explained on the practical page.

LabMaster v1.0 · runs offline · no dependencies
