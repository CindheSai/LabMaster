/* ==========================================================================
   LabMaster — shared UI helpers + dashboard, subjects, lists, bookmarks,
   progress, notes and viva views
   ========================================================================== */
(function () {
  'use strict';
  var LM = window.LM;
  var esc = LM.esc;
  var icon = LM.icon;

  function st() { return LM.getState(); }

  var ui = {
    subjectFilter: {},
    subjectSort: {},
    allFilter: 'all',
    allSubject: 'all',
    bookmarkQuery: '',
    notesQuery: '',
    codeTab: {},
    demoOn: {},
    pdfPreview: {},
    assistantLog: [],
    vivaQuery: {},
    draftNotes: {}
  };
  LM.ui = ui;

  /* ---------------- primitives ---------------- */
  function chip(text, kind, icoName) {
    return '<span class="chip ' + (kind || '') + '">' + (icoName ? icon(icoName, 12) : '') + esc(text) + '</span>';
  }

  function progressBar(percent, cls) {
    var p = LM.clamp(percent, 0, 100);
    return '<div class="progress ' + (cls || '') + '" role="progressbar" aria-valuenow="' + p + '" aria-valuemin="0" aria-valuemax="100">' +
      '<span style="width:' + p + '%"></span></div>';
  }

  function emptyState(icoName, title, text, actionHtml) {
    return '<div class="empty-state">' +
      '<div class="es-ico">' + icon(icoName || 'info', 28) + '</div>' +
      '<h3>' + esc(title) + '</h3>' +
      '<p>' + esc(text) + '</p>' +
      (actionHtml || '') +
      '</div>';
  }

  function pageHead(title, sub, actionsHtml, eyebrow) {
    return '<div class="page-head">' +
      '<div class="ph-main">' +
        (eyebrow ? '<div class="eyebrow">' + esc(eyebrow) + '</div>' : '') +
        '<h1 class="page-title">' + esc(title) + '</h1>' +
        (sub ? '<p class="page-sub">' + esc(sub) + '</p>' : '') +
      '</div>' +
      (actionsHtml ? '<div class="row">' + actionsHtml + '</div>' : '') +
      '</div>';
  }

  function sectionCard(title, bodyHtml, actionsHtml, iconName) {
    return '<section class="card">' +
      '<div class="card-head">' +
        (iconName ? '<span class="muted">' + icon(iconName, 16) + '</span>' : '') +
        '<h2>' + esc(title) + '</h2>' +
        (actionsHtml ? '<div class="ch-actions">' + actionsHtml + '</div>' : '') +
      '</div>' +
      '<div class="card-body">' + bodyHtml + '</div>' +
      '</section>';
  }

  function starButton(p, small) {
    var on = LM.isBookmarked(p.id);
    return '<button type="button" class="star-btn ' + (on ? 'on' : '') + '" data-action="toggle-bookmark" data-id="' + p.id + '" data-focus="star-' + p.id + '"' +
      ' aria-pressed="' + (on ? 'true' : 'false') + '" aria-label="' + (on ? 'Remove bookmark from ' : 'Bookmark ') + esc(p.title) + '" title="' + (on ? 'Remove bookmark' : 'Add bookmark') + '">' +
      icon('star', small ? 14 : 16) + '</button>';
  }

  function statusChip(p) {
    return LM.isDone(p.id)
      ? '<span class="p-status done">' + icon('checkCircle', 13) + 'Completed</span>'
      : '<span class="p-status muted">Not completed</span>';
  }

  function practicalRow(p, opts) {
    var o = opts || {};
    var subject = LM.SUBJECT_BY_ID[p.subjectId] || {};
    var tech = (p.technologies || []).slice(0, 3);
    var meta = [];
    if (o.showSubject) meta.push(esc(subject.code || ''));
    meta.push(esc(tech.join(' · ')));
    if (p.codeFiles && p.codeFiles.length) meta.push(p.codeFiles.length + ' files');
    return '<div class="p-row ' + (LM.isDone(p.id) ? 'done' : '') + '" data-row' +
      ' data-search="' + esc((p.programNumber + ' ' + p.title + ' ' + (p.technologies || []).join(' ') + ' ' + (subject.title || '')).toLowerCase()) + '"' +
      ' data-status="' + (LM.isDone(p.id) ? 'done' : 'todo') + '"' +
      ' data-bookmark="' + (LM.isBookmarked(p.id) ? '1' : '0') + '">' +
      '<a class="p-num" href="#' + LM.practicalPath(p.id) + '" tabindex="-1" aria-hidden="true">' + p.programNumber + '</a>' +
      '<div class="p-main">' +
        '<a class="p-title" href="#' + LM.practicalPath(p.id) + '">' + esc(p.title) + '</a>' +
        '<div class="p-meta">' + meta.join('<span class="sep">·</span>') + '</div>' +
      '</div>' +
      '<div class="p-actions">' +
        (o.showStatus === false ? '' : statusChip(p)) +
        starButton(p, true) +
        '<a class="btn btn-sm" href="#' + LM.practicalPath(p.id) + '" data-focus="open-' + p.id + '">Open ' + icon('chevronRight', 13) + '</a>' +
      '</div>' +
    '</div>';
  }

  function subjectCard(s) {
    var stats = LM.subjectStats(s.id);
    return '<a class="subject-card" href="#' + LM.subjectPath(s.id) + '">' +
      '<div class="sc-top">' +
        '<span class="sc-badge">' + esc(String(s.code || '').replace(/[^0-9]/g, '') || '—') + '</span>' +
        '<div style="min-width:0">' +
          '<div class="sc-code">' + esc(s.code || '') + '</div>' +
          '<h3>' + esc(s.title) + '</h3>' +
        '</div>' +
      '</div>' +
      '<p class="sc-desc">' + esc(s.description || s.subtitle || '') + '</p>' +
      '<div>' +
        '<div class="spread" style="margin-bottom:6px;font-size:12px;color:var(--muted)">' +
          '<span>' + stats.done + ' of ' + stats.total + ' practicals</span>' +
          '<span class="pct">' + stats.percent + '%</span>' +
        '</div>' +
        progressBar(stats.percent, stats.percent === 100 ? 'success' : '') +
      '</div>' +
      '<div class="sc-foot">' +
        '<span>' + icon('book', 13) + ' ' + esc((s.languages || []).join(' · ')) + '</span>' +
        '<span>' + icon('chevronRight', 14) + '</span>' +
      '</div>' +
    '</a>';
  }

  /* ---------------- dashboard ---------------- */
  function viewDashboard() {
    var state = st();
    var stats = LM.overallStats();
    var last = state.lastOpened ? LM.PROGRAM_BY_ID[state.lastOpened] : null;
    if (!last) last = LM.PROGRAMS[0];

    var recent = state.recent
      .map(function (r) { return LM.PROGRAM_BY_ID[r.id] ? { p: LM.PROGRAM_BY_ID[r.id], at: r.at } : null; })
      .filter(Boolean)
      .slice(0, 5);

    var activity = [];
    Object.keys(state.completed).forEach(function (id) {
      if (LM.PROGRAM_BY_ID[id]) activity.push({ kind: 'completed', id: id, at: state.completed[id] });
    });
    Object.keys(state.bookmarks).forEach(function (id) {
      if (LM.PROGRAM_BY_ID[id]) activity.push({ kind: 'bookmark', id: id, at: state.bookmarks[id] });
    });
    Object.keys(state.notes).forEach(function (id) {
      if (LM.PROGRAM_BY_ID[id]) activity.push({ kind: 'note', id: id, at: state.notes[id].updatedAt });
    });
    state.recent.forEach(function (r) {
      if (LM.PROGRAM_BY_ID[r.id]) activity.push({ kind: 'view', id: r.id, at: r.at });
    });
    activity.sort(function (a, b) { return new Date(b.at) - new Date(a.at); });
    activity = activity.slice(0, 8);

    var actIcon = { completed: 'checkCircle', bookmark: 'star', note: 'notes', view: 'eye' };
    var actText = {
      completed: 'Marked practical completed',
      bookmark: 'Bookmarked a practical',
      note: 'Updated personal notes',
      view: 'Opened practical'
    };

    var html = '<div class="hero">' +
      '<div class="eyebrow">' + icon('sparkle', 13) + ' LabMaster · Practical Learning Workspace</div>' +
      '<h1>Welcome to your programming laboratory</h1>' +
      '<p>Four subjects, 39 practicals, verified source code, line-by-line explanations, viva preparation and lab PDFs — all stored locally and available offline.</p>' +
      '<div class="hero-actions">' +
        '<a class="btn btn-primary btn-lg" href="#' + LM.practicalPath(last.id) + '">' +
          icon('play', 15) + (state.lastOpened ? 'Continue: Practical ' + last.programNumber : 'Start with Practical ' + last.programNumber) +
        '</a>' +
        '<a class="btn btn-lg" href="#/subjects">' + icon('book', 15) + 'Browse subjects</a>' +
        '<a class="btn btn-lg" href="#/resources">' + icon('pdf', 15) + 'Lab resources</a>' +
      '</div>' +
      '<div class="hero-stats">' +
        '<div class="hero-stat"><div class="hs-v">' + stats.subjects + '</div><div class="hs-l">Subjects</div></div>' +
        '<div class="hero-stat"><div class="hs-v">' + stats.total + '</div><div class="hs-l">Practicals</div></div>' +
        '<div class="hero-stat"><div class="hs-v">' + stats.done + '</div><div class="hs-l">Completed</div></div>' +
        '<div class="hero-stat"><div class="hs-v">' + stats.percent + '%</div><div class="hs-l">Overall progress</div></div>' +
      '</div>' +
    '</div>';

    html += '<div class="section">' +
      '<div class="grid grid-4">' +
        '<div class="stat"><div class="st-ico">' + icon('layers', 15) + '</div><div class="st-label">Subjects</div><div class="st-value">' + stats.subjects + '</div><div class="st-meta">Majors 12 – 15</div></div>' +
        '<div class="stat"><div class="st-ico">' + icon('list', 15) + '</div><div class="st-label">Practicals</div><div class="st-value">' + stats.total + '</div><div class="st-meta">All programs available</div></div>' +
        '<div class="stat accent"><div class="st-ico">' + icon('checkCircle', 15) + '</div><div class="st-label">Completed</div><div class="st-value">' + stats.done + '</div><div class="st-meta">' + stats.remaining + ' remaining</div></div>' +
        '<div class="stat"><div class="st-ico">' + icon('star', 15) + '</div><div class="st-label">Bookmarks</div><div class="st-value">' + stats.bookmarks + '</div><div class="st-meta">' + stats.notes + ' saved ' + (stats.notes === 1 ? 'note' : 'notes') + '</div></div>' +
      '</div>' +
    '</div>';

    html += '<div class="section">' +
      '<div class="section-head"><h2>Overall progress</h2><span class="sh-note">' + stats.done + ' of ' + stats.total + ' practicals completed</span>' +
      '<div class="sh-actions"><a class="btn btn-sm" href="#/progress">' + icon('chart', 13) + 'Progress details</a></div></div>' +
      '<div class="card card-pad">' +
        '<div class="spread" style="margin-bottom:8px"><span class="small muted">Learning completion</span><span class="pct">' + stats.percent + '%</span></div>' +
        progressBar(stats.percent, stats.percent === 100 ? 'success' : '') +
      '</div>' +
    '</div>';

    html += '<div class="section">' +
      '<div class="section-head"><h2>Subjects</h2><span class="sh-note">Syllabus order preserved</span>' +
      '<div class="sh-actions"><a class="btn btn-sm" href="#/subjects">View all</a></div></div>' +
      '<div class="grid grid-2">' + LM.SUBJECTS.map(subjectCard).join('') + '</div>' +
    '</div>';

    html += '<div class="section"><div class="grid grid-2">' +
      '<div class="card">' +
        '<div class="card-head"><span class="muted">' + icon('clock', 16) + '</span><h2>Continue learning</h2>' +
        (recent.length ? '<div class="ch-actions"><a class="btn btn-sm" href="#/practicals">All practicals</a></div>' : '') + '</div>' +
        '<div class="card-body">' +
          (recent.length
            ? '<div class="stack">' + recent.map(function (r) {
                return '<a class="p-row" href="#' + LM.practicalPath(r.p.id) + '" style="text-decoration:none">' +
                  '<span class="p-num">' + r.p.programNumber + '</span>' +
                  '<span class="p-main"><span class="p-title" style="display:block">' + esc(r.p.title) + '</span>' +
                  '<span class="p-meta">' + esc((LM.SUBJECT_BY_ID[r.p.subjectId] || {}).code || '') + ' · opened ' + esc(LM.relTime(r.at)) + '</span></span>' +
                  '<span class="p-actions">' + icon('chevronRight', 15) + '</span>' +
                '</a>';
              }).join('') + '</div>'
            : emptyState('play', 'No practicals opened yet', 'Open any practical to see it here for quick resuming.', '<a class="btn btn-sm btn-primary" href="#/practicals">Browse practicals</a>')) +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-head"><span class="muted">' + icon('chart', 16) + '</span><h2>Recent activity</h2></div>' +
        '<div class="card-body">' +
          (activity.length
            ? '<div class="timeline">' + activity.map(function (a) {
                var p = LM.PROGRAM_BY_ID[a.id];
                return '<div class="tl-item">' +
                  '<span class="tl-ico">' + icon(actIcon[a.kind], 14) + '</span>' +
                  '<div class="tl-main">' +
                    '<a class="tl-title" href="#' + LM.practicalPath(p.id) + '">' + esc(p.title) + '</a>' +
                    '<div class="tl-sub">' + esc(actText[a.kind]) + ' · ' + esc((LM.SUBJECT_BY_ID[p.subjectId] || {}).code || '') + '</div>' +
                  '</div>' +
                  '<span class="tl-time">' + esc(LM.relTime(a.at)) + '</span>' +
                '</div>';
              }).join('') + '</div>'
            : emptyState('clock', 'No activity yet', 'Your completed practicals, bookmarks, notes and recently opened programs will appear here.', '')) +
        '</div>' +
      '</div>' +
    '</div></div>';

    return { title: 'Dashboard', crumbs: [{ label: 'Dashboard' }], html: html };
  }

  /* ---------------- subjects ---------------- */
  function viewSubjects() {
    var stats = LM.overallStats();
    var html = pageHead('All Subjects', 'Four lab subjects, 39 practicals. Every program keeps its original syllabus order, source code and viva questions.',
      '<a class="btn" href="#/resources">' + icon('pdf', 14) + 'PDF resources</a>' +
      '<a class="btn" href="#/practicals">' + icon('list', 14) + 'All practicals</a>',
      'Curriculum');

    html += '<div class="grid grid-2">' + LM.SUBJECTS.map(subjectCard).join('') + '</div>';

    html += '<div class="section">' + sectionCard('Subject overview',
      '<div class="kv-list">' + LM.SUBJECTS.map(function (s) {
        var ss = LM.subjectStats(s.id);
        return '<div class="kv" style="grid-template-columns:minmax(0,1fr) 190px">' +
          '<div><strong>' + esc(s.code) + '</strong> · ' + esc(s.title) + '<div class="tiny muted">' + esc((s.languages || []).join(' · ')) + '</div></div>' +
          '<div><div class="spread tiny muted" style="margin-bottom:4px"><span>' + ss.done + '/' + ss.total + '</span><span>' + ss.percent + '%</span></div>' + progressBar(ss.percent) + '</div>' +
        '</div>';
      }).join('') + '</div>' +
      '<div class="divider"></div><p class="small muted">' + stats.total + ' practicals in total · ' + stats.done + ' completed · ' + stats.remaining + ' remaining</p>',
      '', 'layers') + '</div>';

    return { title: 'Subjects', crumbs: [{ label: 'Subjects' }], html: html };
  }

  /* ---------------- subject detail ---------------- */
  function viewSubject(subjectId) {
    var s = LM.SUBJECT_BY_ID[subjectId];
    if (!s) return null;
    var stats = LM.subjectStats(s.id);
    var filter = ui.subjectFilter[s.id] || 'all';
    var sort = ui.subjectSort[s.id] || 'order';
    var all = LM.programsOf(s.id);
    var filtered = all.filter(function (p) {
      if (filter === 'completed') return LM.isDone(p.id);
      if (filter === 'incomplete') return !LM.isDone(p.id);
      if (filter === 'bookmarked') return LM.isBookmarked(p.id);
      return true;
    });
    if (sort === 'alpha') filtered = filtered.slice().sort(function (a, b) { return a.title.localeCompare(b.title); });

    var counts = {
      all: all.length,
      completed: all.filter(function (p) { return LM.isDone(p.id); }).length,
      incomplete: all.filter(function (p) { return !LM.isDone(p.id); }).length,
      bookmarked: all.filter(function (p) { return LM.isBookmarked(p.id); }).length
    };

    var html = '<div class="row" style="margin-bottom:10px"><a class="btn btn-sm btn-ghost" href="#/subjects">' + icon('arrowLeft', 14) + 'All subjects</a></div>';

    html += '<div class="detail-head">' +
      '<div class="dh-main">' +
        '<div class="eyebrow">' + esc(s.code) + ' · ' + esc(s.semester || 'Lab syllabus') + '</div>' +
        '<h1>' + esc(s.title) + '</h1>' +
        '<p class="page-sub">' + esc(s.description || s.subtitle || '') + '</p>' +
        '<div class="dh-meta">' +
          chip(pluralSafe(stats.total) + ' practicals', '', 'list') +
          chip((s.languages || []).join(' · '), 'chip-accent', 'code') +
          (s.badge ? chip(s.badge, 'chip-success', 'check') : '') +
        '</div>' +
      '</div>' +
      '<div style="min-width:210px">' +
        '<div class="spread small muted" style="margin-bottom:6px"><span>' + stats.done + ' of ' + stats.total + ' completed</span><span class="pct">' + stats.percent + '%</span></div>' +
        progressBar(stats.percent, stats.percent === 100 ? 'success' : '') +
        '<div class="row" style="margin-top:12px">' +
          (s.pdf ? '<a class="btn btn-sm" href="' + esc(s.pdf.file) + '" target="_blank" rel="noopener">' + icon('pdf', 13) + 'Open PDF</a>' +
                   '<a class="btn btn-sm" href="' + esc(s.pdf.file) + '" download>' + icon('download', 13) + 'Download</a>' : '') +
          '<a class="btn btn-sm" href="#/viva/' + s.id + '">' + icon('keyboard', 13) + 'Viva</a>' +
        '</div>' +
      '</div>' +
    '</div>';

    html += '<div class="section card card-pad">' +
      '<div class="filter-bar">' +
        '<div class="input-group search-field">' + icon('search', 15, 'ig-ico') +
          '<input class="input" type="search" placeholder="Search in ' + esc(s.code) + '…" value="' + esc(ui.subjectQuery[s.id] || '') + '" data-list-filter="subject-' + esc(s.id) + '" aria-label="Search practicals in ' + esc(s.title) + '">' +
        '</div>' +
        ['all', 'completed', 'incomplete', 'bookmarked'].map(function (f) {
          var label = { all: 'All', completed: 'Completed', incomplete: 'Incomplete', bookmarked: 'Bookmarked' }[f];
          return '<button type="button" class="filter-chip ' + (filter === f ? 'active' : '') + '" data-action="subject-filter" data-subject="' + esc(s.id) + '" data-filter="' + f + '">' +
            label + ' <span class="n">' + counts[f] + '</span></button>';
        }).join('') +
        '<select class="select" style="width:auto;min-width:170px" data-action="subject-sort" data-subject="' + esc(s.id) + '" aria-label="Sort practicals">' +
          '<option value="order"' + (sort === 'order' ? ' selected' : '') + '>Syllabus order</option>' +
          '<option value="alpha"' + (sort === 'alpha' ? ' selected' : '') + '>Alphabetical (A–Z)</option>' +
        '</select>' +
      '</div>' +
    '</div>';

    html += '<div class="section" id="list-subject-' + esc(s.id) + '">' +
      (filtered.length
        ? '<div class="p-list">' + filtered.map(function (p) { return practicalRow(p); }).join('') + '</div>'
        : emptyState('search', 'No practicals match this filter', 'Try a different filter or clear the search text.', '<button type="button" class="btn btn-sm" data-action="subject-filter" data-subject="' + esc(s.id) + '" data-filter="all">Show all practicals</button>')) +
      '<p class="small muted mt-8" id="filter-count-' + esc(s.id) + '">Showing ' + filtered.length + ' of ' + all.length + ' practicals</p>' +
    '</div>';

    return {
      title: s.code + ' · ' + s.title,
      crumbs: [{ label: 'Subjects', href: '/subjects' }, { label: s.code }],
      html: html
    };
  }

  function pluralSafe(n) { return n; }

  /* ---------------- all practicals ---------------- */
  function viewPracticals() {
    var filter = ui.allFilter || 'all';
    var subjectId = ui.allSubject || 'all';
    var list = LM.PROGRAMS.slice().sort(function (a, b) {
      if (a.subjectId === b.subjectId) return a.programNumber - b.programNumber;
      return LM.SUBJECTS.findIndex(function (s) { return s.id === a.subjectId; }) -
             LM.SUBJECTS.findIndex(function (s) { return s.id === b.subjectId; });
    });
    var scoped = subjectId === 'all' ? list : list.filter(function (p) { return p.subjectId === subjectId; });
    var filtered = scoped.filter(function (p) {
      if (filter === 'completed') return LM.isDone(p.id);
      if (filter === 'incomplete') return !LM.isDone(p.id);
      if (filter === 'bookmarked') return LM.isBookmarked(p.id);
      return true;
    });

    var html = pageHead('All Practicals', 'Every program from the four lab subjects in syllabus order, with source code, explanations and viva questions.',
      '<a class="btn" href="#/progress">' + icon('chart', 14) + 'Progress</a>', 'Library');

    html += '<div class="section card card-pad">' +
      '<div class="filter-bar">' +
        '<div class="input-group search-field">' + icon('search', 15, 'ig-ico') +
          '<input class="input" type="search" placeholder="Search all practicals…" data-list-filter="all-practicals" aria-label="Search all practicals">' +
        '</div>' +
        '<select class="select" style="width:auto;min-width:190px" data-action="all-subject" aria-label="Filter by subject">' +
          '<option value="all"' + (subjectId === 'all' ? ' selected' : '') + '>All subjects</option>' +
          LM.SUBJECTS.map(function (s) {
            return '<option value="' + esc(s.id) + '"' + (subjectId === s.id ? ' selected' : '') + '>' + esc(s.code + ' — ' + s.title) + '</option>';
          }).join('') +
        '</select>' +
        ['all', 'completed', 'incomplete', 'bookmarked'].map(function (f) {
          var label = { all: 'All', completed: 'Completed', incomplete: 'Incomplete', bookmarked: 'Bookmarked' }[f];
          var n = f === 'all' ? scoped.length : scoped.filter(function (p) {
            return f === 'completed' ? LM.isDone(p.id) : (f === 'incomplete' ? !LM.isDone(p.id) : LM.isBookmarked(p.id));
          }).length;
          return '<button type="button" class="filter-chip ' + (filter === f ? 'active' : '') + '" data-action="all-filter" data-filter="' + f + '">' + label + ' <span class="n">' + n + '</span></button>';
        }).join('') +
      '</div>' +
    '</div>';

    html += '<div class="section" id="list-all-practicals">' +
      (filtered.length
        ? '<div class="p-list">' + filtered.map(function (p) { return practicalRow(p, { showSubject: true }); }).join('') + '</div>'
        : emptyState('search', 'No practicals found', 'Adjust the subject, filter or search text to see practicals here.', '<button type="button" class="btn btn-sm" data-action="all-filter" data-filter="all">Reset filter</button>')) +
      '<p class="small muted mt-8">Showing ' + filtered.length + ' of ' + scoped.length + ' practicals</p>' +
    '</div>';

    return { title: 'All Practicals', crumbs: [{ label: 'Practicals' }], html: html };
  }

  /* ---------------- bookmarks ---------------- */
  function viewBookmarks() {
    var ids = Object.keys(st().bookmarks).filter(function (id) { return LM.PROGRAM_BY_ID[id]; });
    var list = ids.map(function (id) { return LM.PROGRAM_BY_ID[id]; })
      .sort(function (a, b) { return new Date(st().bookmarks[b.id]) - new Date(st().bookmarks[a.id]); });

    var html = pageHead('Bookmarks', 'Practical reference list saved in this browser. Bookmarks are stored locally and never uploaded.',
      '<a class="btn" href="#/practicals">' + icon('list', 14) + 'All practicals</a>', 'Saved');

    if (!list.length) {
      html += emptyState('star', 'No bookmarks yet', 'Use the star button on any practical to keep it here for quick revision.',
        '<a class="btn btn-primary btn-sm" href="#/practicals">Browse practicals</a>');
      return { title: 'Bookmarks', crumbs: [{ label: 'Bookmarks' }], html: html };
    }

    html += '<div class="section card card-pad"><div class="input-group">' + icon('search', 15, 'ig-ico') +
      '<input class="input" type="search" placeholder="Search bookmarks…" data-list-filter="bookmarks" aria-label="Search bookmarks"></div></div>';

    html += '<div class="section" id="list-bookmarks"><div class="p-list">' +
      list.map(function (p) { return practicalRow(p, { showSubject: true }); }).join('') +
      '</div><p class="small muted mt-8">' + LM.plural(list.length, 'bookmark') + ' saved</p></div>';

    return { title: 'Bookmarks', crumbs: [{ label: 'Bookmarks' }], html: html };
  }

  /* ---------------- progress ---------------- */
  function viewProgress() {
    var state = st();
    var stats = LM.overallStats();
    var storage = LM.storageWorks();

    var html = pageHead('Learning Progress', 'Completion is tracked only when you mark a practical complete. New installations start with zero progress.',
      '<button type="button" class="btn" data-action="export-data">' + icon('download', 14) + 'Export JSON</button>' +
      '<button type="button" class="btn" data-action="import-data">' + icon('upload', 14) + 'Import JSON</button>',
      'Progress');

    html += '<div class="grid grid-4">' +
      '<div class="stat accent"><div class="st-label">Completed</div><div class="st-value">' + stats.done + '</div><div class="st-meta">of ' + stats.total + ' practicals</div></div>' +
      '<div class="stat"><div class="st-label">Remaining</div><div class="st-value">' + stats.remaining + '</div><div class="st-meta">not marked yet</div></div>' +
      '<div class="stat"><div class="st-label">Bookmarks</div><div class="st-value">' + stats.bookmarks + '</div><div class="st-meta">saved practicals</div></div>' +
      '<div class="stat"><div class="st-label">Personal notes</div><div class="st-value">' + stats.notes + '</div><div class="st-meta">stored locally</div></div>' +
    '</div>';

    html += '<div class="section">' + sectionCard('Overall completion',
      '<div class="spread" style="margin-bottom:8px"><span class="small muted">' + stats.done + ' of ' + stats.total + ' practicals</span><span class="pct">' + stats.percent + '%</span></div>' +
      progressBar(stats.percent, stats.percent === 100 ? 'success' : '') +
      '<div class="divider"></div>' +
      '<div class="stack">' + LM.SUBJECTS.map(function (s) {
        var ss = LM.subjectStats(s.id);
        return '<div>' +
          '<div class="spread small" style="margin-bottom:5px"><a href="#' + LM.subjectPath(s.id) + '" style="font-weight:600">' + esc(s.code) + ' — ' + esc(s.title) + '</a>' +
          '<span class="muted">' + ss.done + '/' + ss.total + ' · ' + ss.percent + '%</span></div>' +
          progressBar(ss.percent, ss.percent === 100 ? 'success' : '') +
        '</div>';
      }).join('') + '</div>', '', 'chart') + '</div>';

    html += '<div class="section"><div class="grid grid-2">' +
      sectionCard('Recently viewed',
        (state.recent.length
          ? '<div class="timeline">' + state.recent.slice(0, 6).map(function (r) {
              var p = LM.PROGRAM_BY_ID[r.id];
              return '<div class="tl-item"><span class="tl-ico">' + icon('eye', 14) + '</span>' +
                '<div class="tl-main"><a class="tl-title" href="#' + LM.practicalPath(p.id) + '">' + esc(p.title) + '</a>' +
                '<div class="tl-sub">Practical ' + p.programNumber + ' · ' + esc((LM.SUBJECT_BY_ID[p.subjectId] || {}).code || '') + '</div></div>' +
                '<span class="tl-time">' + esc(LM.relTime(r.at)) + '</span></div>';
            }).join('') + '</div>'
          : '<p class="small muted">No practicals opened yet.</p>'),
        '<button type="button" class="btn btn-sm" data-action="reset-scope" data-scope="recent">Clear</button>', 'clock') +
      sectionCard('Data management',
        '<div class="stack">' +
          '<div class="banner info"><span class="b-ico">' + icon('info', 15) + '</span><div><strong>Local storage only.</strong> Progress, bookmarks and notes live in this browser\'s localStorage for this file. Clearing browser data, using a different browser or moving the folder to another computer will not carry them over. Export a JSON backup to move your progress.</div></div>' +
          '<div class="row">' +
            '<button type="button" class="btn btn-sm" data-action="export-data">' + icon('download', 13) + 'Export progress</button>' +
            '<button type="button" class="btn btn-sm" data-action="import-data">' + icon('upload', 13) + 'Import progress</button>' +
          '</div>' +
          '<div class="divider" style="margin:4px 0"></div>' +
          '<div class="row">' +
            '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="completed">Reset completion</button>' +
            '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="bookmarks">Clear bookmarks</button>' +
            '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="notes">Clear notes</button>' +
            '<button type="button" class="btn btn-sm btn-danger" data-action="reset-scope" data-scope="all">Reset all data</button>' +
          '</div>' +
          '<p class="tiny muted">Storage ' + (storage ? 'is available' : 'is unavailable — changes will last only until you close the tab') + '. State version: v' + LM.VERSION + '.</p>' +
        '</div>', '', 'shield') +
    '</div></div>';

    return { title: 'Progress', crumbs: [{ label: 'Progress' }], html: html };
  }

  /* ---------------- notes ---------------- */
  function viewNotes() {
    var state = st();
    var ids = Object.keys(state.notes).filter(function (id) { return LM.PROGRAM_BY_ID[id]; });
    var list = ids.map(function (id) { return { p: LM.PROGRAM_BY_ID[id], note: state.notes[id] }; })
      .sort(function (a, b) { return new Date(b.note.updatedAt) - new Date(a.note.updatedAt); });

    var html = pageHead('Personal Notes', 'Your own notes for each practical. They are saved in this browser only and are never transmitted anywhere.',
      '<a class="btn" href="#/practicals">' + icon('list', 14) + 'Open a practical</a>', 'Private');

    if (!list.length) {
      html += emptyState('notes', 'No notes yet', 'Open any practical and use the Personal notes section to write your own observations, doubts or revision points.',
        '<a class="btn btn-primary btn-sm" href="#/practicals">Browse practicals</a>');
      return { title: 'Notes', crumbs: [{ label: 'Notes' }], html: html };
    }

    html += '<div class="section card card-pad"><div class="input-group">' + icon('search', 15, 'ig-ico') +
      '<input class="input" type="search" placeholder="Search notes…" data-list-filter="notes" aria-label="Search notes"></div></div>';

    html += '<div class="section" id="list-notes"><div class="note-list">' + list.map(function (item) {
      var p = item.p;
      return '<div class="note-item" data-row data-search="' + esc((item.note.text + ' ' + p.title).toLowerCase()) + '">' +
        '<div class="ni-head">' +
          '<a class="ni-title" href="#' + LM.practicalPath(p.id) + '">' + esc(p.title) + '</a>' +
          '<span class="chip chip-mono">P' + p.programNumber + '</span>' +
          '<span class="tiny muted">' + esc(LM.relTime(item.note.updatedAt)) + '</span>' +
          '<div class="ni-actions">' +
            '<a class="btn btn-sm" href="#' + LM.practicalPath(p.id) + '">Open</a>' +
            '<button type="button" class="btn btn-sm btn-danger" data-action="delete-note" data-id="' + p.id + '">' + icon('trash', 13) + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="ni-body">' + esc(item.note.text.slice(0, 600)) + (item.note.text.length > 600 ? '…' : '') + '</div>' +
      '</div>';
    }).join('') + '</div><p class="small muted mt-8">' + LM.plural(list.length, 'note') + ' saved locally</p></div>';

    return { title: 'Notes', crumbs: [{ label: 'Notes' }], html: html };
  }

  /* ---------------- viva ---------------- */
  function viewViva(subjectId) {
    var subject = subjectId ? LM.SUBJECT_BY_ID[subjectId] : null;
    var programs = subject ? LM.programsOf(subject.id) : LM.PROGRAMS;
    var total = programs.reduce(function (n, p) { return n + (p.vivaQuestions || []).length; }, 0);

    var html = pageHead(
      subject ? 'Viva: ' + subject.code : 'Viva Questions',
      subject ? subject.title + ' — every viva question from the lab manual with answers.' : 'All viva questions across the four subjects. Expand a question to read the answer.',
      '<a class="btn" href="#/practicals">' + icon('list', 14) + 'Practicals</a>', 'Exam preparation');

    html += '<div class="section card card-pad"><div class="row">' +
      '<div class="input-group search-field">' + icon('search', 15, 'ig-ico') +
        '<input class="input" type="search" placeholder="Search viva questions and answers…" data-viva-filter aria-label="Search viva questions">' +
      '</div>' +
      '<select class="select" style="width:auto;min-width:210px" data-action="viva-subject" aria-label="Choose subject">' +
        '<option value="">All subjects</option>' +
        LM.SUBJECTS.map(function (s) {
          return '<option value="' + esc(s.id) + '"' + (subject && subject.id === s.id ? ' selected' : '') + '>' + esc(s.code + ' — ' + s.title) + '</option>';
        }).join('') +
      '</select>' +
      '<span class="chip">' + LM.plural(total, 'question') + '</span>' +
    '</div></div>';

    html += '<div class="section stack" data-viva-list>' + programs.map(function (p) {
      var qs = p.vivaQuestions || [];
      if (!qs.length) return '';
      return '<div class="card" data-viva-group data-search="' + esc((p.title + ' ' + qs.map(function (q) { return q.question + ' ' + q.answer; }).join(' ')).toLowerCase()) + '">' +
        '<div class="card-head">' +
          '<span class="chip chip-mono">P' + p.programNumber + '</span>' +
          '<h2><a href="#' + LM.practicalPath(p.id) + '">' + esc(p.title) + '</a></h2>' +
          '<div class="ch-actions"><span class="chip">' + qs.length + ' Q</span></div>' +
        '</div>' +
        '<div class="card-body"><div class="step-list">' + qs.map(function (q, i) {
          return '<details class="step" data-viva-item>' +
            '<summary><span class="s-num">' + (i + 1) + '</span><span>' + esc(q.question) + '</span>' + icon('chevronRight', 14, 's-chev') + '</summary>' +
            '<div class="step-body"><div class="sb-block"><div class="sb-label">Answer</div><p>' + esc(q.answer) + '</p></div></div>' +
          '</details>';
        }).join('') + '</div></div>' +
      '</div>';
    }).join('') + '</div>';

    return {
      title: subject ? 'Viva · ' + subject.code : 'Viva Questions',
      crumbs: [{ label: 'Viva' }],
      html: html
    };
  }

  LM.views = {
    dashboard: viewDashboard,
    subjects: viewSubjects,
    subject: viewSubject,
    practicals: viewPracticals,
    bookmarks: viewBookmarks,
    progress: viewProgress,
    notes: viewNotes,
    viva: viewViva
  };
  LM.h = {
    chip: chip, progressBar: progressBar, emptyState: emptyState, pageHead: pageHead,
    sectionCard: sectionCard, starButton: starButton, statusChip: statusChip,
    practicalRow: practicalRow, subjectCard: subjectCard
  };
})();
