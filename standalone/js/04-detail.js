/* ==========================================================================
   LabMaster — practical detail, resources, settings, about, study assistant,
   global search results and the application renderer
   ========================================================================== */
(function () {
  'use strict';
  var LM = window.LM;
  var esc = LM.esc;
  var icon = LM.icon;
  var H = LM.h;
  var ui = LM.ui;

  function st() { return LM.getState(); }

  function textOf(v) {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    if (Array.isArray(v)) return v.map(textOf).filter(Boolean).join('\n');
    if (typeof v === 'object') {
      return Object.keys(v).map(function (k) { return typeof v[k] === 'string' ? v[k] : ''; }).filter(Boolean).join('\n\n');
    }
    return String(v);
  }

  function paras(text) {
    return textOf(text).split(/\n{1,}/).filter(function (l) { return l.trim(); })
      .map(function (l) { return '<p>' + esc(l) + '</p>'; }).join('');
  }

  function sec(letter, id, title, bodyHtml, icoName, actionsHtml) {
    return '<section class="card" id="' + id + '">' +
      '<div class="card-head">' +
        '<span class="chip chip-mono">' + letter + '</span>' +
        '<h2>' + esc(title) + '</h2>' +
        (actionsHtml ? '<div class="ch-actions">' + actionsHtml + '</div>' : '') +
      '</div>' +
      '<div class="card-body">' + bodyHtml + '</div>' +
      '</section>';
  }

  function notFound() {
    return {
      title: 'Not found',
      crumbs: [{ label: 'Not found' }],
      html: H.emptyState('alert', 'Page not found', 'That page does not exist in this copy of LabMaster. Use the navigation to continue.',
        '<a class="btn btn-primary btn-sm" href="#/dashboard">Go to dashboard</a>')
    };
  }

  /* ---------------- practical detail ---------------- */
  function isWebDemo(p) {
    var t = p.previewType || '';
    return ['html', 'table-images', 'form', 'javascript', 'external-css'].indexOf(t) >= 0;
  }

  function demoDoc(p) {
    var code = p.originalCode || '';
    if (p.previewType === 'external-css') {
      code = code.replace(/<link[^>]*styles\.css[^>]*>/i, '<!-- styles.css is not available inside the sandboxed preview -->');
    }
    return code;
  }

  function pythonImports(code) {
    var found = {};
    String(code || '').split('\n').forEach(function (line) {
      var m = /^\s*(?:import|from)\s+([A-Za-z_][\w]*)/.exec(line);
      if (m) found[m[1]] = 1;
    });
    return Object.keys(found);
  }

  function runInstructions(p) {
    var guide = p.runLocallyGuide;
    var lang = LM.langOf(p);
    var steps = [];
    if (guide && guide.xamppSteps && guide.xamppSteps.length) {
      steps = guide.xamppSteps.slice();
    } else if (lang === 'php') {
      steps = [
        'Install XAMPP (or any PHP 8 + Apache stack) and start Apache.',
        'Save the file(s) inside the htdocs folder, e.g. C:\\xampp\\htdocs\\labmaster\\' + LM.fileFor(p) + '.',
        'Open http://localhost/labmaster/' + LM.fileFor(p) + ' in your browser.'
      ];
    } else if (lang === 'python') {
      steps = [
        'Install Python 3.10 or newer from python.org.',
        'Save the program as ' + LM.fileFor(p) + ' in a folder of your choice.',
        'Open a terminal in that folder and run: python ' + LM.fileFor(p)
      ];
    } else if (lang === 'sql') {
      steps = [
        'Start MySQL (XAMPP/phpMyAdmin or the MySQL command line).',
        'Create a database and run the SQL statements in the provided file.',
        'Verify the created tables with SHOW TABLES; and SELECT * FROM <table>;'
      ];
    } else {
      steps = [
        'Save the code as ' + LM.fileFor(p) + '.',
        'Double-click the file to open it in Chrome, Edge or Firefox — no server is needed.',
        'Observe the rendered page and compare it with the expected output below.'
      ];
    }
    return steps;
  }

  function viewPractical(id) {
    var p = LM.PROGRAM_BY_ID[id];
    if (!p) return notFound();

    var s = LM.SUBJECT_BY_ID[p.subjectId] || {};
    var obj = p.objective || {};
    var done = LM.isDone(p.id);
    var note = st().notes[p.id];
    var draft = ui.draftNotes[p.id];
    var noteText = draft != null ? draft : (note ? note.text : '');
    var tabs = LM.codeTabsFor(p);
    var activeKey = ui.codeTab[p.id] || tabs[0].key;
    var tab = tabs.filter(function (t) { return t.key === activeKey; })[0] || tabs[0];
    var expanded = !!ui.codeExpand[p.id];
    var wrapped = !!ui.codeWrap[p.id];
    var lang = tab.lang || LM.langOf(p);
    var siblings = LM.programsOf(p.subjectId);
    var idx = -1;
    siblings.forEach(function (x, i) { if (x.id === p.id) idx = i; });
    var prev = idx > 0 ? siblings[idx - 1] : null;
    var next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;
    var nextSubject = LM.SUBJECTS[LM.SUBJECTS.findIndex(function (x) { return x.id === p.subjectId; }) + 1];
    var code = tab.code || '';

    var toc = [
      ['aim', 'Aim'], ['requirements', 'Requirements'], ['theory', 'Theory'], ['algorithm', 'Algorithm'],
      ['source', 'Source code'], ['explanation', 'Code explanation'], ['output', 'Expected output'],
      ['result', 'Result'], ['notes', 'Important notes'], ['viva', 'Viva questions'], ['personal', 'Personal notes']
    ];

    var html = '<div class="row" style="margin-bottom:10px;flex-wrap:wrap">' +
      '<a class="btn btn-sm btn-ghost" href="#' + LM.subjectPath(s.id) + '">' + icon('arrowLeft', 14) + esc(s.code || 'Subject') + '</a>' +
      '<span class="tiny muted">Practical ' + p.programNumber + ' of ' + siblings.length + '</span>' +
    '</div>';

    html += '<div class="detail-head">' +
      '<div class="dh-main">' +
        '<div class="eyebrow">' + esc(s.code || '') + ' · ' + esc(s.title || '') + '</div>' +
        '<h1>' + esc(p.title) + '</h1>' +
        '<div class="dh-meta">' +
          H.chip('Program ' + p.programNumber, 'chip-mono', 'code') +
          H.chip((p.technologies || []).join(' · '), 'chip-accent', 'terminal') +
          (done ? H.chip('Completed', 'chip-success', 'checkCircle') : H.chip('Not completed', '', 'clock')) +
          (p.correctedCode && p.correctedCode !== p.originalCode ? H.chip('Defect corrected', 'chip-warn', 'shield') : '') +
        '</div>' +
      '</div>' +
      '<div class="detail-actions">' +
        '<button type="button" class="btn ' + (done ? 'btn-soft' : 'btn-primary') + '" data-action="toggle-complete" data-id="' + p.id + '">' +
          icon(done ? 'refresh' : 'checkCircle', 15) + (done ? 'Mark as incomplete' : 'Mark as completed') + '</button>' +
        H.starButton(p) +
      '</div>' +
    '</div>';

    if (p.correctedCode && p.correctedCode !== p.originalCode) {
      html += '<div class="banner warn" style="margin-bottom:16px"><span class="b-ico">' + icon('shield', 16) + '</span>' +
        '<div><strong>This program had a defect — a corrected version is provided.</strong>' +
        (p.correctionExplanation ? '<div class="small" style="margin-top:6px">' + paras(p.correctionExplanation) + '</div>' : '') +
        '<div class="small" style="margin-top:6px">The original lab-manual code is preserved and available in the code viewer tabs, so nothing from your syllabus is lost.</div></div></div>';
    }

    /* Aim */
    var aimHtml = '';
    if (p.pdfQuestion) aimHtml += '<div class="aim"><p class="small muted" style="margin-bottom:6px">Lab manual question</p><p>' + esc(p.pdfQuestion).replace(/\n/g, '<br>') + '</p></div>';
    if (obj.whatItDoes) aimHtml += '<div class="divider"></div><p><strong>What this program does.</strong> ' + esc(obj.whatItDoes) + '</p>';
    if (obj.problemSolved) aimHtml += '<p><strong>Problem it solves.</strong> ' + esc(obj.problemSolved) + '</p>';
    if (!aimHtml) aimHtml = '<p class="muted small">Aim text is not available for this practical.</p>';

    /* Requirements */
    var libs = pythonImports(code);
    var reqList = ['A modern browser (Chrome, Edge, Firefox or Safari) to read this page.'];
    if (LM.langOf(p) === 'php') reqList.push('PHP 8+ with Apache (XAMPP/WAMP) to execute the script.');
    if (LM.langOf(p) === 'python') reqList.push('Python 3.10+ to execute the program.');
    if (LM.langOf(p) === 'sql') reqList.push('MySQL 8 (or MariaDB) for the SQL statements.');
    var guide = p.runLocallyGuide;
    var reqHtml = '<div class="meta-grid">' +
      '<div class="meta-item"><div class="sb-label">Languages</div><div>' + esc((p.technologies || []).join(', ') || '—') + '</div></div>' +
      '<div class="meta-item"><div class="sb-label">Files</div><div>' + esc(tabs.length + ' code ' + (tabs.length === 1 ? 'file' : 'files')) + '</div></div>' +
      '<div class="meta-item"><div class="sb-label">Python imports</div><div>' + esc(libs.length ? libs.join(', ') : '—') + '</div></div>' +
      '<div class="meta-item"><div class="sb-label">Runs on</div><div>' + esc(LM.langOf(p) === 'php' || LM.langOf(p) === 'python' || LM.langOf(p) === 'sql' ? 'Local server / interpreter' : 'Any browser') + '</div></div>' +
    '</div>';
    reqHtml += '<div class="divider"></div><ul class="small" style="margin:0;padding-left:18px;line-height:1.8">' +
      reqList.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>';
    if (guide) {
      reqHtml += '<div class="divider"></div><p class="small"><strong>Files to create:</strong> <span class="mono">' + esc(guide.fileName || LM.fileFor(p)) + '</span>' +
        (guide.localhostUrl ? ' · <span class="mono">' + esc(guide.localhostUrl) + '</span>' : '') + '</p>';
      if (guide.notes) reqHtml += '<div class="banner info" style="margin-top:10px"><span class="b-ico">' + icon('info', 15) + '</span><div class="small">' + esc(guide.notes) + '</div></div>';
    }

    /* Theory */
    var theoryHtml = '';
    if (obj.overallMechanism) theoryHtml += '<p><strong>How it works.</strong> ' + esc(obj.overallMechanism) + '</p>';
    if (obj.conceptsDemonstrated) theoryHtml += '<p><strong>Concepts demonstrated.</strong> ' + esc(obj.conceptsDemonstrated) + '</p>';
    if (obj.prerequisitesToUnderstand) theoryHtml += '<p><strong>Prerequisites.</strong> ' + esc(obj.prerequisitesToUnderstand) + '</p>';
    if ((p.conceptsUsed || []).length) {
      theoryHtml += '<div class="divider"></div><div class="concept-list">' + p.conceptsUsed.map(function (c) {
        return '<div class="concept"><div class="concept-name">' + esc(c.name) + '</div><div class="small muted">' + esc(c.description) + '</div></div>';
      }).join('') + '</div>';
    }
    if (!theoryHtml) theoryHtml = '<p class="muted small">Theory notes are not available for this practical.</p>';

    /* Algorithm */
    var algoHtml = (p.executionFlow || []).length
      ? '<ol class="small" style="margin:0;padding-left:20px;line-height:1.85">' + p.executionFlow.map(function (step) {
          return '<li>' + esc(String(step).replace(/^\d+\.\s*/, '')) + '</li>';
        }).join('') + '</ol>'
      : '<p class="muted small">No step-by-step algorithm was recorded for this practical.</p>';

    /* Source code */
    var codeHtml = '<div class="code-card">' +
      '<div class="code-toolbar">' +
        '<div class="code-tabs" role="tablist" aria-label="Code files">' +
          tabs.map(function (t) {
            return '<button type="button" role="tab" aria-selected="' + (t.key === tab.key ? 'true' : 'false') + '" class="code-tab ' + (t.key === tab.key ? 'active' : '') + '" data-action="code-tab" data-id="' + p.id + '" data-key="' + esc(t.key) + '">' + esc(t.label) + '</button>';
          }).join('') +
        '</div>' +
        '<div class="code-tool">' +
          '<span class="chip chip-mono">' + esc(String(lang).toUpperCase()) + '</span>' +
          '<button type="button" class="btn btn-sm btn-icon" data-action="code-font" data-delta="-1" aria-label="Decrease code font size">A−</button>' +
          '<button type="button" class="btn btn-sm btn-icon" data-action="code-font" data-delta="1" aria-label="Increase code font size">A+</button>' +
          '<button type="button" class="btn btn-sm" data-action="code-wrap" data-id="' + p.id + '">' + icon('code', 13) + (wrapped ? 'No wrap' : 'Wrap') + '</button>' +
          '<button type="button" class="btn btn-sm" data-action="code-expand" data-id="' + p.id + '">' + (expanded ? 'Collapse' : 'Expand') + '</button>' +
          '<button type="button" class="btn btn-sm" data-action="copy-code" data-id="' + p.id + '" data-key="' + esc(tab.key) + '">' + icon('copy', 13) + 'Copy</button>' +
          '<button type="button" class="btn btn-sm" data-action="download-code" data-id="' + p.id + '" data-key="' + esc(tab.key) + '">' + icon('download', 13) + 'Download</button>' +
        '</div>' +
      '</div>' +
      '<div class="code-shell ' + (wrapped ? 'wrap' : '') + '">' +
        '<div class="code-scroll ' + (expanded ? '' : 'collapsed') + '" tabindex="0" role="region" aria-label="Source code for ' + esc(p.title) + '">' +
          (LM.highlight ? LM.highlight.codeHtml(code, lang) : '<pre>' + esc(code) + '</pre>') +
        '</div>' +
      '</div>' +
    '</div>';

    /* Demo / execution */
    var execHtml = '';
    if (isWebDemo(p)) {
      execHtml += '<div class="banner info"><span class="b-ico">' + icon('shield', 15) + '</span><div class="small"><strong>Browser demo.</strong> HTML/CSS/JavaScript runs inside a sandboxed iframe, isolated from this application. No server is involved, and nothing outside the demo can be affected.</div></div>';
      if (p.previewType === 'external-css') {
        execHtml += '<div class="banner warn" style="margin-top:10px"><span class="b-ico">' + icon('alert', 15) + '</span><div class="small">This program links an external <span class="mono">styles.css</span> file. That stylesheet is not embedded in the app data, so the demo shows the unstyled HTML structure only — exactly as it would look without the CSS file.</div></div>';
      }
      if (ui.demoOn[p.id]) {
        execHtml += '<div class="mt-16"><iframe class="demo-frame" title="Live preview of ' + esc(p.title) + '" sandbox="allow-scripts allow-modals allow-forms allow-popups" srcdoc="' + esc(demoDoc(p)) + '"></iframe></div>' +
          '<div class="row mt-8"><button type="button" class="btn btn-sm" data-action="run-demo" data-id="' + p.id + '">' + icon('refresh', 13) + 'Reload demo</button>' +
          '<span class="tiny muted">If the preview is blank, your browser may block embedded documents — open the code in a separate file instead.</span></div>';
      } else {
        execHtml += '<div class="mt-16"><button type="button" class="btn btn-primary" data-action="run-demo" data-id="' + p.id + '">' + icon('play', 14) + 'Run browser demo</button>' +
          '<span class="tiny muted" style="margin-left:10px">Runs the program in a sandboxed frame.</span></div>';
      }
    } else {
      execHtml += '<div class="banner info"><span class="b-ico">' + icon('info', 15) + '</span><div class="small"><strong>No in-browser execution.</strong> ' + esc(LM.langOf(p) === 'php' ? 'PHP' : (LM.langOf(p) === 'sql' ? 'SQL' : 'Python')) + ' cannot run inside a double-clicked HTML file. This page shows the verified expected output and the exact steps to run the program locally — it never pretends the code executed here.</div></div>';
      execHtml += '<div class="mt-16"><div class="sb-label">Run it locally</div><ol class="small" style="margin:6px 0 0;padding-left:20px;line-height:1.85">' +
        runInstructions(p).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ol></div>';
    }

    /* Code explanation */
    var steps = p.steps || [];
    var explainHtml = steps.length
      ? '<div class="step-list">' + steps.map(function (step, i) {
          return '<details class="step"' + (i === 0 ? ' open' : '') + '>' +
            '<summary><span class="s-num">' + (step.stepNumber || i + 1) + '</span><span>' + esc(step.title || 'Step') + '</span>' +
              (step.lineNumberRange ? '<span class="chip chip-mono">' + esc(step.lineNumberRange) + '</span>' : '') +
              icon('chevronRight', 14, 's-chev') + '</summary>' +
            '<div class="step-body">' +
              (step.codeSnippet ? '<pre class="step-snippet mono small">' + esc(step.codeSnippet) + '</pre>' : '') +
              (step.whatItDoes ? '<div class="sb-block"><div class="sb-label">What it does</div><p class="small">' + esc(step.whatItDoes) + '</p></div>' : '') +
              (step.whyUsed ? '<div class="sb-block"><div class="sb-label">Why it is used</div><p class="small">' + esc(step.whyUsed) + '</p></div>' : '') +
              (step.howItWorks ? '<div class="sb-block"><div class="sb-label">How it works</div><p class="small">' + esc(step.howItWorks) + '</p></div>' : '') +
              (step.connectionToSurrounding ? '<div class="sb-block"><div class="sb-label">Connection to surrounding lines</div><p class="small">' + esc(step.connectionToSurrounding) + '</p></div>' : '') +
              (step.examRelevance ? '<div class="sb-block"><div class="sb-label">Exam relevance</div><p class="small">' + esc(step.examRelevance) + '</p></div>' : '') +
            '</div>' +
          '</details>';
        }).join('') + '</div>'
      : '<p class="muted small">A line-by-line explanation is not available for this practical.</p>';

    /* Output */
    var outText = p.sampleOutputText || obj.expectedOutputSummary || '';
    var outputHtml = outText
      ? '<div class="sb-label">Expected output</div><pre class="output-pre mono small">' + esc(outText) + '</pre>'
      : '<p class="muted small">No recorded output for this practical.</p>';
    if (p.outputExplanation) outputHtml += '<div class="divider"></div><p><strong>Reading the output.</strong> ' + esc(p.outputExplanation) + '</p>';
    if (!isWebDemo(p)) outputHtml += '<p class="tiny muted" style="margin-top:8px">Output shown here is the verified expected result recorded for this program; it was not produced by running the code in your browser.</p>';

    /* Result */
    var resultHtml = '<div class="meta-grid">' +
      '<div class="meta-item"><div class="sb-label">Status</div><div>' + (done ? 'Marked completed' : 'Not marked completed') + '</div></div>' +
      '<div class="meta-item"><div class="sb-label">Completed on</div><div>' + (done ? esc(LM.fmtDate(st().completed[p.id])) : '—') + '</div></div>' +
      '<div class="meta-item"><div class="sb-label">Expected result</div><div class="small">' + esc(obj.expectedOutputSummary || 'See expected output above.') + '</div></div>' +
    '</div>' +
    '<p class="small muted" style="margin-top:12px">For your lab record: write the aim, the program, the output you observe when you run it locally, and a one-line conclusion. Mark the practical completed once you have done that.</p>';

    /* Notes */
    var examNotes = p.examNotes || [];
    var notesHtml = examNotes.length
      ? '<div class="concept-list">' + examNotes.map(function (n) {
          return '<div class="concept"><div class="sb-label">' + esc(String(n.category || 'note').replace(/_/g, ' ')) + '</div>' +
            '<div style="font-weight:600;font-size:13.5px">' + esc(n.title || '') + '</div>' +
            '<div class="small muted" style="margin-top:3px">' + esc(n.description || '') + '</div></div>';
        }).join('') + '</div>'
      : '<p class="muted small">No additional exam notes for this practical.</p>';

    /* Viva */
    var viva = p.vivaQuestions || [];
    var vivaHtml = viva.length
      ? '<div class="input-group mb-8">' + icon('search', 15, 'ig-ico') +
          '<input class="input" type="search" placeholder="Search these viva questions…" data-viva-filter aria-label="Search viva questions for this practical"></div>' +
        '<div class="step-list">' + viva.map(function (q, i) {
          return '<details class="step" data-viva-item><summary><span class="s-num">' + (i + 1) + '</span><span>' + esc(q.question) + '</span>' + icon('chevronRight', 14, 's-chev') + '</summary>' +
            '<div class="step-body"><div class="sb-block"><div class="sb-label">Answer</div><p class="small">' + esc(q.answer) + '</p></div></div></details>';
        }).join('') + '</div>'
      : '<p class="muted small">No viva questions recorded for this practical.</p>';

    /* Personal notes */
    var personalHtml = '<div class="note-editor">' +
      '<label class="sb-label" for="note-input">Your notes for this practical</label>' +
      '<textarea class="textarea" id="note-input" rows="6" data-note-input data-id="' + p.id + '" placeholder="Write your observations, doubts or revision points…">' + esc(noteText) + '</textarea>' +
      '<div class="row" style="margin-top:10px">' +
        '<button type="button" class="btn btn-primary btn-sm" data-action="save-note" data-id="' + p.id + '">' + icon('save', 13) + 'Save note</button>' +
        (note ? '<button type="button" class="btn btn-sm btn-danger" data-action="delete-note" data-id="' + p.id + '">' + icon('trash', 13) + 'Delete note</button>' : '') +
        '<span class="tiny muted">' + (note ? 'Last saved ' + esc(LM.relTime(note.updatedAt)) : 'Not saved yet') + ' · stored only in this browser</span>' +
      '</div>' +
    '</div>';

    var tocHtml = '<div class="card card-pad"><div class="sb-label">On this page</div><div class="stack" style="gap:2px">' +
      toc.map(function (t) {
        return '<button type="button" class="btn btn-ghost btn-sm" style="justify-content:flex-start" data-action="scroll-to" data-target="' + t[0] + '">' + esc(t[1]) + '</button>';
      }).join('') + '</div>' +
      '<div class="divider"></div><div class="sb-label">Quick facts</div>' +
      '<div class="small muted" style="line-height:1.9">' +
        'Subject: ' + esc(s.code || '—') + '<br>' +
        'Program: ' + p.programNumber + ' of ' + siblings.length + '<br>' +
        'Status: ' + (done ? 'Completed' : 'Not completed') + '<br>' +
        'Bookmarked: ' + (LM.isBookmarked(p.id) ? 'Yes' : 'No') + '<br>' +
        'Viva questions: ' + viva.length +
      '</div>' +
      '<div class="divider"></div>' +
      '<button type="button" class="btn btn-sm w-full" data-action="toggle-bookmark" data-id="' + p.id + '">' + icon('star', 13) + (LM.isBookmarked(p.id) ? 'Remove bookmark' : 'Bookmark') + '</button>' +
    '</div>';

    html += '<div class="detail-layout">' +
      '<div class="stack" style="gap:16px">' +
        sec('A', 'aim', 'Aim', aimHtml, 'target') +
        sec('B', 'requirements', 'Requirements', reqHtml, 'list') +
        sec('C', 'theory', 'Theory', theoryHtml, 'book') +
        sec('D', 'algorithm', 'Algorithm', algoHtml, 'list') +
        sec('E', 'source', 'Source code', codeHtml + execHtml, 'code') +
        sec('F', 'explanation', 'Code explanation', explainHtml, 'terminal') +
        sec('G', 'output', 'Expected output', outputHtml, 'eye') +
        sec('H', 'result', 'Result', resultHtml, 'checkCircle') +
        sec('I', 'notes', 'Important notes', notesHtml, 'info') +
        sec('J', 'viva', 'Viva questions', vivaHtml, 'keyboard', '<a class="btn btn-sm" href="#/viva/' + esc(s.id) + '">All viva</a>') +
        sec('K', 'personal', 'Personal notes', personalHtml, 'notes') +
      '</div>' +
      '<aside class="detail-aside">' + tocHtml + '</aside>' +
    '</div>';

    var navHtml = '<div class="row" style="justify-content:space-between;margin-top:18px;flex-wrap:wrap;gap:10px">' +
      (prev
        ? '<a class="btn" href="#' + LM.practicalPath(prev.id) + '">' + icon('arrowLeft', 14) + 'P' + prev.programNumber + ' · ' + esc(prev.title.slice(0, 42)) + (prev.title.length > 42 ? '…' : '') + '</a>'
        : '<span></span>') +
      (next
        ? '<a class="btn" href="#' + LM.practicalPath(next.id) + '">P' + next.programNumber + ' · ' + esc(next.title.slice(0, 42)) + (next.title.length > 42 ? '…' : '') + icon('arrowRight', 14) + '</a>'
        : (nextSubject
            ? '<a class="btn" href="#' + LM.practicalPath(LM.programsOf(nextSubject.id)[0].id) + '">Next subject: ' + esc(nextSubject.code) + icon('arrowRight', 14) + '</a>'
            : '<a class="btn" href="#/subjects">All subjects' + icon('arrowRight', 14) + '</a>')) +
    '</div>';
    html += navHtml;

    return {
      title: 'P' + p.programNumber + ' · ' + p.title,
      crumbs: [{ label: 'Subjects', href: '/subjects' }, { label: s.code || '', href: LM.subjectPath(s.id) }, { label: 'Practical ' + p.programNumber }],
      html: html
    };
  }

  /* ---------------- resources ---------------- */
  function viewResources() {
    var html = H.pageHead('Lab Resources', 'The four original lab PDFs, bundled with this website. They open from the resources folder next to index.html — no internet connection is required.',
      '<a class="btn" href="#/practicals">' + icon('list', 14) + 'All practicals</a>', 'Documents');

    html += '<div class="grid grid-2">' + LM.SUBJECTS.map(function (s) {
      var pdf = s.pdf;
      if (!pdf) return '';
      var open = !!ui.pdfPreview[s.id];
      return '<div class="card" id="pdf-' + esc(s.id) + '">' +
        '<div class="card-head"><span class="pdf-ico">' + icon('pdf', 18) + '</span>' +
          '<div style="min-width:0"><h2 style="font-size:14px">' + esc(pdf.label) + '</h2>' +
          '<div class="tiny muted">' + esc(s.code + ' · ' + s.title) + '</div></div>' +
          '<div class="ch-actions"><span class="chip">' + s.totalPrograms + ' programs</span></div>' +
        '</div>' +
        '<div class="card-body">' +
          '<div class="pdf-meta mono tiny">' + esc(pdf.file) + '</div>' +
          '<div class="row mt-8" style="flex-wrap:wrap">' +
            '<a class="btn btn-sm btn-primary" href="' + esc(pdf.file) + '" target="_blank" rel="noopener">' + icon('external', 13) + 'Open PDF</a>' +
            '<a class="btn btn-sm" href="' + esc(pdf.file) + '" download>' + icon('download', 13) + 'Download</a>' +
            '<button type="button" class="btn btn-sm" data-action="pdf-preview" data-id="' + esc(s.id) + '">' + icon('eye', 13) + (open ? 'Hide preview' : 'Preview here') + '</button>' +
          '</div>' +
          (open
            ? '<div class="pdf-preview mt-8"><iframe src="' + esc(pdf.file) + '#view=FitH" title="Preview of ' + esc(pdf.label) + '"></iframe>' +
              '<p class="tiny muted mt-8">If the preview stays blank, your browser blocks embedded PDFs from local files. Use <strong>Open PDF</strong> instead — the file itself is present and correct.</p></div>'
            : '') +
        '</div>' +
      '</div>';
    }).join('') + '</div>';

    html += '<div class="section">' + H.sectionCard('How these files work',
      '<div class="stack small" style="line-height:1.7">' +
        '<p style="margin:0">The PDFs live in the <span class="mono">resources</span> folder beside <span class="mono">index.html</span>. Keep the folder structure intact — if you move <span class="mono">index.html</span> alone, the PDF links will not resolve.</p>' +
        '<p style="margin:0">All links are relative, so the folder can be extracted anywhere: Desktop, Documents, a USB drive or a network share.</p>' +
        '<p style="margin:0">Chrome and Edge show PDFs in their built-in viewer. Some browsers download the file instead of previewing it; the <strong>Download</strong> button always works.</p>' +
      '</div>', '', 'info') + '</div>';

    return { title: 'Resources', crumbs: [{ label: 'Resources' }], html: html };
  }

  /* ---------------- settings ---------------- */
  function storageBytes() {
    try {
      var raw = window.localStorage.getItem(LM.LS_KEY);
      return raw ? Math.round((raw.length * 2) / 1024) : 0;
    } catch (e) { return 0; }
  }

  function viewSettings() {
    var state = st();
    var themeOpts = [
      ['light', 'Light', 'sun', 'Clean white surfaces for bright rooms.'],
      ['dark', 'Dark', 'moon', 'Low-glare dark surfaces for long study sessions.'],
      ['system', 'System', 'monitor', 'Follow your operating system preference.']
    ];
    var html = H.pageHead('Settings', 'Appearance, keyboard shortcuts, local data and privacy controls.',
      '<a class="btn" href="#/about">' + icon('info', 14) + 'About</a>', 'Preferences');

    html += '<div class="section">' + H.sectionCard('Appearance',
      '<div class="sb-label">Theme</div><div class="grid grid-3" style="margin-top:8px">' +
        themeOpts.map(function (t) {
          return '<button type="button" class="btn theme-opt" style="justify-content:flex-start;height:auto;padding:12px;' + (state.theme === t[0] ? 'border-color:var(--accent,#2563eb);box-shadow:0 0 0 1px var(--accent,#2563eb) inset' : '') + '" data-action="set-theme" data-theme="' + t[0] + '">' +
            icon(t[2], 16) + '<span class="theme-opt-text" style="text-align:left"><strong style="display:block;font-size:13px">' + t[1] + '</strong><span class="tiny muted">' + esc(t[3]) + '</span></span></button>';
        }).join('') + '</div>' +
      '<div class="divider"></div>' +
      '<div class="spread" style="flex-wrap:wrap;gap:10px">' +
        '<div><div class="sb-label">Code font size</div><div class="small muted">Applies to every code viewer. Current: <strong>' + (state.codeFontSize || 13) + 'px</strong></div></div>' +
        '<div class="row"><button type="button" class="btn btn-sm" data-action="code-font" data-delta="-1" aria-label="Decrease code font size">A−</button>' +
        '<button type="button" class="btn btn-sm" data-action="code-font" data-delta="1" aria-label="Increase code font size">A+</button></div>' +
      '</div>' +
      '<p class="tiny muted" style="margin-top:10px">Motion respects your operating system\'s reduced-motion setting automatically.</p>', '', 'sun') + '</div>';

    html += '<div class="section">' + H.sectionCard('Keyboard shortcuts',
      '<div class="kv-list">' +
        [['Ctrl / ⌘ + K', 'Open global search'], ['↑ / ↓', 'Move through search results'], ['Enter', 'Open the selected result'], ['Esc', 'Close search or the mobile menu']].map(function (k) {
          return '<div class="kv"><div><span class="kbd">' + k[0] + '</span></div><div class="small muted">' + k[1] + '</div></div>';
        }).join('') +
      '</div>', '', 'keyboard') + '</div>';

    html += '<div class="section">' + H.sectionCard('Your data',
      '<div class="meta-grid">' +
        '<div class="meta-item"><div class="sb-label">Storage</div><div>' + (LM.storageWorks() ? 'Available (localStorage)' : 'Unavailable') + '</div></div>' +
        '<div class="meta-item"><div class="sb-label">Used</div><div>' + storageBytes() + ' KB</div></div>' +
        '<div class="meta-item"><div class="sb-label">Completed</div><div>' + Object.keys(state.completed).length + ' practicals</div></div>' +
        '<div class="meta-item"><div class="sb-label">Bookmarks / notes</div><div>' + Object.keys(state.bookmarks).length + ' / ' + Object.keys(state.notes).length + '</div></div>' +
      '</div>' +
      '<div class="banner info" style="margin-top:14px"><span class="b-ico">' + icon('shield', 15) + '</span><div class="small">Everything you mark, bookmark or write is stored in this browser only. Nothing is uploaded, and no account is required. Clearing browser data, using another browser or moving the folder to another computer does not carry your data over — export a JSON backup to move it.</div></div>' +
      '<div class="row mt-16" style="flex-wrap:wrap">' +
        '<button type="button" class="btn btn-sm" data-action="export-data">' + icon('download', 13) + 'Export progress</button>' +
        '<button type="button" class="btn btn-sm" data-action="import-data">' + icon('upload', 13) + 'Import progress</button>' +
        '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="completed">Reset completion</button>' +
        '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="bookmarks">Clear bookmarks</button>' +
        '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="notes">Clear notes</button>' +
        '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="all">Reset all data</button>' +
      '</div>', '', 'database') + '</div>';

    return { title: 'Settings', crumbs: [{ label: 'Settings' }], html: html };
  }

  /* ---------------- about ---------------- */
  function viewAbout() {
    var stats = LM.overallStats();
    var html = H.pageHead('About LabMaster', 'A portable practical-learning workspace for four computer science lab subjects.',
      '<a class="btn" href="#/settings">' + icon('settings', 14) + 'Settings</a>', 'About');

    html += '<div class="hero">' +
      '<div class="eyebrow">' + icon('sparkle', 13) + ' LabMaster · v1.0</div>' +
      '<h1>Built to be opened by double-click</h1>' +
      '<p>LabMaster bundles its entire curriculum, interface and code viewer into a single HTML file. Extract the folder, open <span class="mono">index.html</span>, and everything works — no installation, no server, no account and no internet connection.</p>' +
      '<div class="hero-stats">' +
        '<div class="hero-stat"><div class="hs-v">' + stats.subjects + '</div><div class="hs-l">Subjects</div></div>' +
        '<div class="hero-stat"><div class="hs-v">' + stats.total + '</div><div class="hs-l">Practicals</div></div>' +
        '<div class="hero-stat"><div class="hs-v">4</div><div class="hs-l">Lab PDFs</div></div>' +
        '<div class="hero-stat"><div class="hs-v">0</div><div class="hs-l">Dependencies</div></div>' +
      '</div>' +
    '</div>';

    html += '<div class="section"><div class="grid grid-2">' +
      H.sectionCard('What is included',
        '<div class="kv-list">' + LM.SUBJECTS.map(function (s) {
          return '<div class="kv"><div><strong>' + esc(s.code) + '</strong> · ' + esc(s.title) + '</div><div class="small muted text-right">' + s.totalPrograms + ' practicals</div></div>';
        }).join('') +
        '<div class="kv"><div><strong>Lab PDFs</strong> · original documents</div><div class="small muted text-right">4 files</div></div>' +
        '<div class="kv"><div><strong>Viva questions</strong> with answers</div><div class="small muted text-right">' + LM.PROGRAMS.reduce(function (n, p) { return n + (p.vivaQuestions || []).length; }, 0) + '</div></div>' +
        '</div>', '', 'layers') +
      H.sectionCard('How it is built',
        '<ul class="small" style="margin:0;padding-left:18px;line-height:1.9">' +
          '<li>One self-contained <span class="mono">index.html</span> — CSS, JavaScript and all curriculum data are embedded.</li>' +
          '<li>Zero external libraries, fonts, CDNs or network calls. The page works with Wi-Fi switched off.</li>' +
          '<li>All 39 programs, explanations and viva questions are preserved from the original lab data.</li>' +
          '<li>Local storage keeps your progress, bookmarks and notes in the browser.</li>' +
          '<li>Code demos for HTML/CSS/JavaScript run in a sandboxed frame; PHP, SQL and Python are never faked as executed.</li>' +
        '</ul>', '', 'shield') +
    '</div></div>';

    html += '<div class="section">' + H.sectionCard('Honest limitations',
      '<ul class="small" style="margin:0;padding-left:18px;line-height:1.9">' +
        '<li>PHP, MySQL and Python programs cannot execute inside a double-clicked HTML file. LabMaster shows their verified expected output and exact local-run instructions instead.</li>' +
        '<li>Progress is per browser and per file location. There is no sync between computers, browsers or user profiles.</li>' +
        '<li>Some browsers refuse to display embedded PDFs from <span class="mono">file://</span>; the Open and Download buttons still work.</li>' +
        '<li>The study assistant composes answers from the bundled lab data. It is not a live AI service and makes no network requests.</li>' +
      '</ul>', '', 'alert') + '</div>';

    html += '<div class="section">' + H.sectionCard('Content and credits',
      '<p class="small" style="margin:0 0 8px">Educational content originates from the LabMaster lab manual data for Majors 12–15: Web Interface Designing, PHP &amp; MySQL, Foundation of Data Science, and Python Application Development. Program numbering and original code are preserved; corrected versions are provided alongside the originals where a defect was found.</p>' +
      '<p class="tiny muted" style="margin:0">Data generated: ' + esc(LM.DATA.generatedAt || 'n/a') + ' · State version: v' + LM.VERSION + ' · Runs offline.</p>', '', 'file') + '</div>';

    return { title: 'About', crumbs: [{ label: 'About' }], html: html };
  }

  /* ---------------- offline study assistant ---------------- */
  function assistantAnswer(p, kind) {
    var obj = p.objective || {};
    var head = '<p class="tiny muted" style="margin-bottom:8px">Practical ' + p.programNumber + ' · ' + esc((LM.SUBJECT_BY_ID[p.subjectId] || {}).code || '') + '</p>';
    if (kind === 'aim') {
      return head + paras(p.pdfQuestion || obj.whatItDoes || 'No aim recorded.');
    }
    if (kind === 'theory') {
      return head + paras([obj.problemSolved, obj.overallMechanism, obj.conceptsDemonstrated].filter(Boolean).join('\n\n')) +
        ((p.conceptsUsed || []).length ? '<p><strong>Key concepts:</strong> ' + esc(p.conceptsUsed.map(function (c) { return c.name; }).join(', ')) + '</p>' : '');
    }
    if (kind === 'code') {
      return head + '<p><strong>How the program is structured:</strong></p><ol class="small" style="margin:6px 0 0;padding-left:20px;line-height:1.8">' +
        (p.steps || []).slice(0, 12).map(function (s) {
          return '<li>' + (s.lineNumberRange ? '<span class="mono tiny">' + esc(s.lineNumberRange) + '</span> — ' : '') + esc(s.title || '') + ': ' + esc(s.whatItDoes || '') + '</li>';
        }).join('') + '</ol>' +
        '<p class="tiny muted" style="margin-top:8px">Open the Code explanation section on the practical page for the full breakdown of every line.</p>';
    }
    if (kind === 'viva') {
      return head + '<p><strong>Practice these viva questions:</strong></p>' +
        (p.vivaQuestions || []).slice(0, 6).map(function (q, i) {
          return '<p><strong>' + (i + 1) + '. ' + esc(q.question) + '</strong><br><span class="small muted">' + esc(q.answer) + '</span></p>';
        }).join('');
    }
    if (kind === 'output') {
      return head + '<p><strong>Expected output</strong></p><pre class="output-pre mono small">' + esc(p.sampleOutputText || obj.expectedOutputSummary || 'No output recorded.') + '</pre>' +
        (p.outputExplanation ? '<p>' + esc(p.outputExplanation) + '</p>' : '');
    }
    if (kind === 'notes') {
      return head + ((p.examNotes || []).length
        ? (p.examNotes || []).map(function (n) { return '<p><strong>' + esc(n.title || '') + '</strong><br><span class="small muted">' + esc(n.description || '') + '</span></p>'; }).join('')
        : '<p>No exam notes recorded for this practical.</p>');
    }
    if (kind === 'summary') {
      return head + '<p><strong>Aim:</strong> ' + esc(obj.whatItDoes || '—') + '</p>' +
        '<p><strong>Concepts:</strong> ' + esc(obj.conceptsDemonstrated || '—') + '</p>' +
        '<p><strong>Expected result:</strong> ' + esc(obj.expectedOutputSummary || '—') + '</p>' +
        '<p><strong>Viva questions:</strong> ' + (p.vivaQuestions || []).length + '</p>';
    }
    return head + '<p>Choose a prompt to build an answer from this practical\'s content.</p>';
  }

  function viewAssistant() {
    var programs = LM.PROGRAMS;
    var selected = ui.assistantId || programs[0].id;
    var p = LM.PROGRAM_BY_ID[selected] || programs[0];
    var log = ui.assistantLog || [];

    var html = H.pageHead('Study Assistant', 'An offline helper that composes explanations from the lab data inside this app.',
      '<a class="btn" href="#/practicals">' + icon('list', 14) + 'All practicals</a>', 'Optional');

    html += '<div class="banner info" style="margin-bottom:16px"><span class="b-ico">' + icon('info', 15) + '</span><div class="small"><strong>This is not a live AI service.</strong> It runs entirely offline, makes no network requests and uses no API key. Every answer is assembled from the aim, theory, code explanation, output and viva data already bundled with this practical. The whole application works without it.</div></div>';

    html += '<div class="section">' + H.sectionCard('Ask about a practical',
      '<div class="grid grid-2" style="align-items:end">' +
        '<div class="field"><label class="sb-label" for="assistant-practical">Practical</label>' +
          '<select class="select" id="assistant-practical" data-assistant-practical>' +
            LM.SUBJECTS.map(function (s) {
              return '<optgroup label="' + esc(s.code + ' — ' + s.title) + '">' +
                LM.programsOf(s.id).map(function (x) {
                  return '<option value="' + x.id + '"' + (x.id === p.id ? ' selected' : '') + '>P' + x.programNumber + ' · ' + esc(x.title) + '</option>';
                }).join('') + '</optgroup>';
            }).join('') +
          '</select></div>' +
        '<div class="field"><label class="sb-label" for="assistant-query">Or search the whole curriculum</label>' +
          '<div class="row"><input class="input flex-1" id="assistant-query" type="search" placeholder="e.g. file upload validation, matrix multiplication…" data-assistant-query>' +
          '<button type="button" class="btn btn-primary" data-action="assistant-search">' + icon('search', 14) + 'Search</button></div></div>' +
      '</div>' +
      '<div class="divider"></div>' +
      '<div class="sb-label">Quick prompts for P' + p.programNumber + '</div>' +
      '<div class="row" style="flex-wrap:wrap;margin-top:8px">' +
        [['aim', 'Explain the aim'], ['theory', 'Explain the theory'], ['code', 'Walk through the code'], ['output', 'Show expected output'], ['viva', 'Practice viva'], ['notes', 'Exam notes'], ['summary', 'Revision summary']].map(function (k) {
          return '<button type="button" class="btn btn-sm" data-action="assistant-prompt" data-prompt="' + k[0] + '">' + k[1] + '</button>';
        }).join('') +
      '</div>' +
      '<p class="tiny muted" style="margin-top:10px">Selected: <strong>P' + p.programNumber + ' · ' + esc(p.title) + '</strong> — <a href="#' + LM.practicalPath(p.id) + '">open the practical</a></p>', '', 'sparkle') + '</div>';

    html += '<div class="section">' + H.sectionCard('Conversation',
      (log.length
        ? '<div class="assistant-log">' + log.map(function (m) {
            return '<div class="msg q">' + esc(m.q) + '</div><div class="msg a">' + m.a + '</div>';
          }).join('') + '</div>'
        : H.emptyState('sparkle', 'Nothing asked yet', 'Pick a practical and choose a quick prompt above. Answers appear here instantly, even offline.', '')) +
      (log.length ? '<div class="row mt-16"><button type="button" class="btn btn-sm" data-action="assistant-clear">' + icon('trash', 13) + 'Clear conversation</button></div>' : ''),
      '', 'terminal') + '</div>';

    return { title: 'Study Assistant', crumbs: [{ label: 'Study Assistant' }], html: html };
  }

  /* ---------------- search results ---------------- */
  function renderSearchResults(query) {
    var q = String(query || '').trim();
    if (!q) {
      return '<div class="search-empty">' +
        '<p class="small muted">Search subjects, practical titles, program numbers, theory, code, viva questions and your notes.</p>' +
        '<div class="row" style="justify-content:center;flex-wrap:wrap;margin-top:8px">' +
          ['file upload', 'matrix', 'cookie', 'pandas', 'calculator', 'selectors'].map(function (t) {
            return '<button type="button" class="chip" data-action="search-suggest" data-q="' + esc(t) + '">' + esc(t) + '</button>';
          }).join('') +
        '</div></div>';
    }
    var results = LM.searchContent(q, 20);
    if (!results.length) {
      return '<div class="search-empty"><p class="small muted">No matches for “' + esc(q) + '”. Try a program number (e.g. 107), a language (PHP, Python) or a topic.</p></div>';
    }
    var groups = [
      ['subject', 'Subjects'], ['practical', 'Practicals'], ['note', 'Your notes'], ['viva', 'Viva questions']
    ];
    var out = '';
    groups.forEach(function (g) {
      var items = results.filter(function (r) { return r.type === g[0]; });
      if (!items.length) return;
      out += '<div class="sr-group-label">' + g[1] + '</div>';
      out += items.map(function (r) {
        var href = '#' + String(r.href || '').split('#')[0];
        return '<a class="sr-item" href="' + esc(href) + '" data-search-result>' +
          '<span class="sr-item-main">' +
            '<span class="sr-item-title">' + LM.highlightText(r.title, q) + '</span>' +
            '<span class="sr-item-sub">' + esc(r.sub || '') + '</span>' +
          '</span>' +
          '<span class="chip chip-mono">' + esc(r.type === 'practical' ? 'P' + String(r.title).split('.')[0] : r.type) + '</span>' +
        '</a>';
      }).join('');
    });
    return out;
  }

  /* ---------------- renderer ---------------- */
  function resolve(route) {
    switch (route.name) {
      case 'dashboard': return LM.views.dashboard();
      case 'subjects': return LM.views.subjects();
      case 'subject': return LM.views.subject(route.param) || notFound();
      case 'practical': return viewPractical(route.param);
      case 'practicals': return LM.views.practicals();
      case 'bookmarks': return LM.views.bookmarks();
      case 'progress': return LM.views.progress();
      case 'notes': return LM.views.notes();
      case 'viva': return LM.views.viva(route.param);
      case 'resources': return viewResources();
      case 'settings': return viewSettings();
      case 'about': return viewAbout();
      case 'assistant': return viewAssistant();
      default: return notFound();
    }
  }

  var NAV_PARENT = { subject: 'subjects', practical: 'practicals' };

  function renderBreadcrumbs(crumbs) {
    var el = document.getElementById('breadcrumbs');
    if (!el) return;
    var parts = ['<a href="#/dashboard" aria-label="Dashboard">' + icon('home', 14) + '</a>'];
    (crumbs || []).forEach(function (c) {
      parts.push('<span class="sep" aria-hidden="true">/</span>');
      parts.push(c.href ? '<a href="#' + c.href + '">' + esc(c.label) + '</a>' : '<span aria-current="page">' + esc(c.label) + '</span>');
    });
    el.innerHTML = parts.join('');
  }

  function renderApp(opts) {
    var o = opts || {};
    var route = LM.parseHash();
    var view = resolve(route);
    var viewEl = document.getElementById('view');
    if (!viewEl) return;
    var y = window.scrollY;

    viewEl.innerHTML = view.html;
    document.title = view.title + ' — LabMaster';
    renderBreadcrumbs(view.crumbs);

    var active = NAV_PARENT[route.name] || route.name;
    var links = document.querySelectorAll('[data-nav]');
    for (var i = 0; i < links.length; i++) {
      var on = links[i].getAttribute('data-nav') === active;
      links[i].classList.toggle('active', on);
      if (on) links[i].setAttribute('aria-current', 'page'); else links[i].removeAttribute('aria-current');
    }
    if (LM.updateNavCounts) LM.updateNavCounts();

    document.body.classList.remove('nav-open');
    if (o.keepScroll) window.scrollTo(0, y); else window.scrollTo(0, 0);

    if (o.focus !== false) {
      var h1 = viewEl.querySelector('h1');
      if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
    }
    var fs = LM.getState().codeFontSize || 13;
    document.documentElement.style.setProperty('--code-fs', fs + 'px');
  }

  window.renderApp = renderApp;
  LM.renderApp = renderApp;
  LM.renderSearchResults = renderSearchResults;
  LM.assistantAnswer = assistantAnswer;
  LM.views.resources = viewResources;
  LM.views.settings = viewSettings;
  LM.views.about = viewAbout;
  LM.views.assistant = viewAssistant;
  LM.views.practical = viewPractical;
})();
