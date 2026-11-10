/* ==========================================================================
   LabMaster — application shell: navigation, delegated events, keyboard
   shortcuts, search overlay, storage actions and boot
   ========================================================================== */
(function () {
  'use strict';
  var LM = window.LM;
  var esc = LM.esc;
  var icon = LM.icon;
  var ui = LM.ui;

  /* ---------- state used by the views (initialised before first render) ---------- */
  ui.subjectQuery = ui.subjectQuery || {};
  ui.subjectFilter = ui.subjectFilter || {};
  ui.subjectSort = ui.subjectSort || {};
  ui.codeTab = ui.codeTab || {};
  ui.codeExpand = ui.codeExpand || {};
  ui.codeWrap = ui.codeWrap || {};
  ui.demoOn = ui.demoOn || {};
  ui.pdfPreview = ui.pdfPreview || {};
  ui.draftNotes = ui.draftNotes || {};
  ui.assistantLog = ui.assistantLog || [];
  ui.assistantId = ui.assistantId || null;
  ui.searchActive = 0;

  var NAV = [
    { label: 'Workspace', items: [
      { id: 'dashboard', label: 'Dashboard', ico: 'dashboard', href: '#/dashboard' },
      { id: 'subjects', label: 'All Subjects', ico: 'layers', href: '#/subjects' },
      { id: 'practicals', label: 'All Practicals', ico: 'list', href: '#/practicals', count: 'programs' },
      { id: 'bookmarks', label: 'Bookmarks', ico: 'bookmark', href: '#/bookmarks', count: 'bookmarks' },
      { id: 'progress', label: 'Learning Progress', ico: 'chart', href: '#/progress' }
    ] },
    { label: 'Study', items: [
      { id: 'viva', label: 'Viva Questions', ico: 'keyboard', href: '#/viva' },
      { id: 'resources', label: 'Lab Resources', ico: 'pdf', href: '#/resources' },
      { id: 'notes', label: 'Personal Notes', ico: 'notes', href: '#/notes', count: 'notes' },
      { id: 'assistant', label: 'Study Assistant', ico: 'sparkle', href: '#/assistant' }
    ] },
    { label: 'System', items: [
      { id: 'settings', label: 'Settings', ico: 'settings', href: '#/settings' },
      { id: 'about', label: 'About LabMaster', ico: 'info', href: '#/about' }
    ] }
  ];

  function buildNav() {
    var host = document.getElementById('sidebar-nav');
    if (!host) return;
    host.innerHTML = NAV.map(function (group) {
      return '<div class="nav-group-label">' + esc(group.label) + '</div>' +
        group.items.map(function (item) {
          return '<a class="nav-item" href="' + item.href + '" data-nav="' + item.id + '" title="' + esc(item.label) + '">' +
            icon(item.ico, 17) + '<span>' + esc(item.label) + '</span>' +
            (item.count ? '<span class="nav-count" data-count="' + item.count + '">0</span>' : '') +
          '</a>';
        }).join('');
    }).join('');
  }

  function updateNavCounts() {
    var state = LM.getState();
    var stats = LM.overallStats();
    var map = {
      programs: stats.total,
      bookmarks: Object.keys(state.bookmarks || {}).length,
      notes: Object.keys(state.notes || {}).length
    };
    var nodes = document.querySelectorAll('[data-count]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-count');
      nodes[i].textContent = map[key] == null ? '' : String(map[key]);
      nodes[i].style.display = map[key] ? '' : 'none';
    }
    var bar = document.getElementById('sidebar-progress-bar');
    var label = document.getElementById('sidebar-progress-label');
    if (bar) bar.style.width = stats.percent + '%';
    if (label) label.textContent = stats.completed + ' of ' + stats.total + ' practicals complete';
    var themeIcon = document.querySelector('[data-theme-icon]');
    if (themeIcon) themeIcon.innerHTML = icon(state.theme === 'light' ? 'sun' : (state.theme === 'dark' ? 'moon' : 'monitor'), 16);
  }
  LM.updateNavCounts = updateNavCounts;

  /* ---------- helpers ---------- */
  function el(id) { return document.getElementById(id); }
  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function captureDraft() {
    var t = document.querySelector('[data-note-input]');
    if (t) ui.draftNotes[t.getAttribute('data-id')] = t.value;
  }

  function rerender(keepScroll) {
    captureDraft();
    if (LM.renderApp) LM.renderApp({ keepScroll: keepScroll !== false });
  }

  function programOf(node) {
    var id = node.getAttribute('data-id');
    return LM.PROGRAM_BY_ID[id];
  }

  /* ---------- search ---------- */
  function renderSearch(value) {
    var box = el('search-results');
    if (!box) return;
    box.innerHTML = LM.renderSearchResults(value);
    ui.searchActive = 0;
    markActive();
  }

  function results() { return all('[data-search-result]'); }

  function markActive() {
    var items = results();
    items.forEach(function (item, i) {
      var on = i === ui.searchActive;
      item.classList.toggle('active', on);
      if (on) { item.setAttribute('aria-selected', 'true'); if (item.scrollIntoView) item.scrollIntoView({ block: 'nearest' }); }
      else item.removeAttribute('aria-selected');
    });
  }

  function openSearch() {
    var modal = el('search-modal');
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    var input = el('search-input');
    if (input) { input.value = ''; input.focus(); }
    renderSearch('');
  }

  function closeSearch() {
    var modal = el('search-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    var trigger = document.querySelector('.search-trigger');
    if (trigger) trigger.focus();
  }

  function searchOpen() {
    var modal = el('search-modal');
    return !!modal && modal.classList.contains('open');
  }

  /* ---------- data actions ---------- */
  function exportData() {
    var payload = {
      app: 'LabMaster',
      schema: 'labmaster-progress',
      version: LM.VERSION,
      exportedAt: new Date().toISOString(),
      data: LM.getState()
    };
    var stamp = new Date().toISOString().slice(0, 10);
    var ok = LM.downloadFile('labmaster-progress-' + stamp + '.json', JSON.stringify(payload, null, 2), 'application/json');
    LM.toast(ok ? 'Progress exported as JSON' : 'Could not create the export file', ok ? 'success' : 'error');
  }

  function importData() {
    var input = el('import-file');
    if (!input) return;
    input.value = '';
    input.click();
  }

  function handleImportFile(input) {
    var file = input.files && input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var parsed = null;
      try { parsed = JSON.parse(String(reader.result)); } catch (e) { parsed = null; }
      if (!parsed || typeof parsed !== 'object') {
        LM.toast('That file is not valid JSON — nothing was imported', 'error');
        return;
      }
      var raw = parsed.data || parsed.state || parsed;
      if (!raw || typeof raw !== 'object' || (!raw.completed && !raw.bookmarks && !raw.notes)) {
        LM.toast('No LabMaster progress data found in that file', 'error');
        return;
      }
      var clean = LM.sanitizeState(raw);
      LM.confirmAction({
        title: 'Replace your current data?',
        message: 'Importing replaces your current completion, bookmarks and notes with the contents of this file. Export first if you want a backup.',
        confirmLabel: 'Import and replace',
        cancelLabel: 'Cancel',
        danger: true
      }).then(function (yes) {
        if (!yes) return;
        LM.setState(clean);
        LM.saveState();
        rerender(true);
        LM.toast('Progress imported', 'success');
      });
    };
    reader.onerror = function () { LM.toast('Could not read that file', 'error'); };
    reader.readAsText(file);
  }

  function resetScope(scope) {
    var copy = {
      completed: ['Reset completion?', 'All practicals will be marked incomplete again. Bookmarks and notes are kept.'],
      bookmarks: ['Clear all bookmarks?', 'Every bookmarked practical will be removed. Completion and notes are kept.'],
      notes: ['Delete all notes?', 'Every personal note will be permanently deleted. Completion and bookmarks are kept.'],
      recent: ['Clear recent activity?', 'Recently viewed practicals will be removed. Progress, bookmarks and notes are kept.'],
      all: ['Reset everything?', 'Completion, bookmarks, notes, recent activity and settings return to a fresh install. This cannot be undone.']
    }[scope] || ['Are you sure?', 'This cannot be undone.'];
    LM.confirmAction({
      title: copy[0],
      message: copy[1],
      confirmLabel: 'Yes, continue',
      cancelLabel: 'Cancel',
      danger: true
    }).then(function (yes) {
      if (!yes) return;
      LM.resetData(scope);
      rerender(true);
      LM.toast('Data cleared', 'success');
    });
  }

  function saveNote(node) {
    var id = node.getAttribute('data-id');
    var field = document.querySelector('[data-note-input][data-id="' + id + '"]');
    var text = field ? field.value : (ui.draftNotes[id] || '');
    if (!text.trim()) {
      LM.deleteNote(id);
      ui.draftNotes[id] = '';
      LM.toast('Empty note removed', 'info');
    } else {
      LM.setNote(id, text.trim());
      ui.draftNotes[id] = null;
      LM.toast('Note saved in this browser', 'success');
    }
    rerender(true);
  }

  function deleteNote(node) {
    var id = node.getAttribute('data-id');
    LM.confirmAction({
      title: 'Delete this note?',
      message: 'The note for this practical will be removed from this browser.',
      confirmLabel: 'Delete note',
      cancelLabel: 'Keep it',
      danger: true
    }).then(function (yes) {
      if (!yes) return;
      LM.deleteNote(id);
      ui.draftNotes[id] = null;
      rerender(true);
      LM.toast('Note deleted', 'success');
    });
  }

  function copyCode(node) {
    var p = programOf(node);
    if (!p) return;
    var key = node.getAttribute('data-key');
    var tabs = LM.codeTabsFor(p);
    var tab = tabs.filter(function (t) { return t.key === key; })[0] || tabs[0];
    LM.copyText(tab.code).then(function () {
      LM.toast('Code copied to clipboard', 'success');
    }).catch(function () {
      LM.toast('Copy failed — select the code and press Ctrl+C', 'error');
    });
  }

  function downloadCode(node) {
    var p = programOf(node);
    if (!p) return;
    var key = node.getAttribute('data-key');
    var tabs = LM.codeTabsFor(p);
    var tab = tabs.filter(function (t) { return t.key === key; })[0] || tabs[0];
    var ok = LM.downloadFile(tab.file || LM.fileFor(p), tab.code);
    LM.toast(ok ? 'Downloading ' + (tab.file || LM.fileFor(p)) : 'Download failed', ok ? 'success' : 'error');
  }

  function setCodeFont(delta) {
    var state = LM.getState();
    var next = Math.max(11, Math.min(20, (state.codeFontSize || 13) + delta));
    if (next === state.codeFontSize) return;
    state.codeFontSize = next;
    LM.saveState();
    document.documentElement.style.setProperty('--code-fs', next + 'px');
    rerender(true);
  }

  function assistantSay(kind) {
    var select = document.querySelector('[data-assistant-practical]');
    var id = select ? select.value : (ui.assistantId || LM.PROGRAMS[0].id);
    var p = LM.PROGRAM_BY_ID[id];
    if (!p) return;
    var labels = {
      aim: 'Explain the aim of P' + p.programNumber,
      theory: 'Explain the theory of P' + p.programNumber,
      code: 'Walk through the code of P' + p.programNumber,
      output: 'Show the expected output of P' + p.programNumber,
      viva: 'Practice viva for P' + p.programNumber,
      notes: 'Exam notes for P' + p.programNumber,
      summary: 'Revision summary of P' + p.programNumber
    };
    ui.assistantId = p.id;
    ui.assistantLog.push({ q: labels[kind] || 'Explain this practical', a: LM.assistantAnswer(p, kind), at: Date.now() });
    if (ui.assistantLog.length > 30) ui.assistantLog = ui.assistantLog.slice(-30);
    rerender(true);
  }

  function assistantSearch() {
    var input = el('assistant-query');
    var q = input ? input.value.trim() : '';
    if (!q) { LM.toast('Type something to search for', 'info'); return; }
    var found = LM.searchContent(q, 8);
    var answer = found.length
      ? '<p class="tiny muted">' + found.length + ' match' + (found.length === 1 ? '' : 'es') + ' in the lab data:</p>' +
        found.map(function (r) {
          return '<p><a href="#' + String(r.href).split('#')[0] + '"><strong>' + esc(r.title) + '</strong></a><br><span class="small muted">' + esc(r.sub || '') + '</span></p>';
        }).join('')
      : '<p>Nothing in the bundled lab data matches “' + esc(q) + '”. Try a program number, a language or a shorter keyword.</p>';
    ui.assistantLog.push({ q: q, a: answer, at: Date.now() });
    rerender(true);
  }

  /* ---------- delegated clicks ---------- */
  var clickHandlers = {
    'toggle-complete': function (node) {
      var p = programOf(node);
      if (!p) return;
      var next = !LM.isDone(p.id);
      LM.setCompleted(p.id, next);
      LM.toast(next ? 'P' + p.programNumber + ' marked completed' : 'P' + p.programNumber + ' marked incomplete', next ? 'success' : 'info');
      rerender(true);
    },
    'toggle-bookmark': function (node) {
      var p = programOf(node);
      if (!p) return;
      var next = !LM.isBookmarked(p.id);
      LM.setBookmark(p.id, next);
      LM.toast(next ? 'Bookmarked' : 'Bookmark removed', next ? 'success' : 'info');
      rerender(true);
    },
    'set-theme': function (node) {
      var theme = node.getAttribute('data-theme');
      var state = LM.getState();
      state.theme = theme;
      LM.saveState();
      LM.applyTheme();
      rerender(true);
      LM.toast('Theme: ' + theme, 'success');
    },
    'cycle-theme': function () { LM.cycleTheme(); },
    'code-tab': function (node) {
      var p = programOf(node);
      if (!p) return;
      ui.codeTab[p.id] = node.getAttribute('data-key');
      rerender(true);
    },
    'code-font': function (node) { setCodeFont(parseInt(node.getAttribute('data-delta'), 10) || 1); },
    'code-expand': function (node) {
      var id = node.getAttribute('data-id');
      ui.codeExpand[id] = !ui.codeExpand[id];
      rerender(true);
    },
    'code-wrap': function (node) {
      var id = node.getAttribute('data-id');
      ui.codeWrap[id] = !ui.codeWrap[id];
      rerender(true);
    },
    'copy-code': function (node) { copyCode(node); },
    'download-code': function (node) { downloadCode(node); },
    'run-demo': function (node) {
      var id = node.getAttribute('data-id');
      ui.demoOn[id] = true;
      rerender(true);
    },
    'save-note': function (node) { saveNote(node); },
    'delete-note': function (node) { deleteNote(node); },
    'export-data': function () { exportData(); },
    'import-data': function () { importData(); },
    'reset-scope': function (node) { resetScope(node.getAttribute('data-scope') || 'all'); },
    'subject-filter': function (node) {
      var sid = node.getAttribute('data-subject');
      ui.subjectFilter[sid] = node.getAttribute('data-filter') || 'all';
      rerender(true);
    },
    'all-filter': function (node) {
      ui.allFilter = node.getAttribute('data-filter') || 'all';
      rerender(true);
    },
    'pdf-preview': function (node) {
      var id = node.getAttribute('data-id');
      ui.pdfPreview[id] = !ui.pdfPreview[id];
      rerender(true);
    },
    'scroll-to': function (node) {
      var target = el(node.getAttribute('data-target'));
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      var h = target.querySelector('h2');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    },
    'open-search': function () { openSearch(); },
    'close-search': function () { closeSearch(); },
    'search-suggest': function (node) {
      var input = el('search-input');
      if (input) { input.value = node.getAttribute('data-q') || ''; input.focus(); renderSearch(input.value); }
    },
    'sidebar-toggle': function () { document.body.classList.toggle('nav-open'); },
    'sidebar-collapse': function () {
      var shell = document.querySelector('.app-shell');
      if (!shell) return;
      shell.classList.toggle('collapsed');
      try { window.localStorage.setItem('labmaster:sidebar', shell.classList.contains('collapsed') ? '1' : '0'); } catch (e) {}
    },
    'assistant-prompt': function (node) { assistantSay(node.getAttribute('data-prompt')); },
    'assistant-search': function () { assistantSearch(); },
    'assistant-clear': function () {
      ui.assistantLog = [];
      rerender(true);
      LM.toast('Conversation cleared', 'info');
    }
  };

  function onClick(e) {
    var node = e.target.closest ? e.target.closest('[data-action]') : null;
    if (node) {
      var action = node.getAttribute('data-action');
      if (clickHandlers[action]) {
        e.preventDefault();
        clickHandlers[action](node, e);
        return;
      }
    }
    if (e.target.closest && e.target.closest('.nav-item')) {
      document.body.classList.remove('nav-open');
    }
    if (e.target.closest && e.target.closest('a[href^="#/"]') && searchOpen()) closeSearch();
  }

  function onChange(e) {
    var node = e.target;
    var action = node.getAttribute && node.getAttribute('data-action');
    if (action === 'subject-sort') {
      ui.subjectSort[node.getAttribute('data-subject')] = node.value;
      rerender(true);
      return;
    }
    if (action === 'all-subject') {
      ui.allSubject = node.value;
      rerender(true);
      return;
    }
    if (action === 'viva-subject') {
      LM.navigate(node.value ? '/viva/' + node.value : '/viva');
      return;
    }
    if (node.id === 'import-file') { handleImportFile(node); return; }
    if (node.hasAttribute && node.hasAttribute('data-assistant-practical')) {
      ui.assistantId = node.value;
    }
  }

  function onInput(e) {
    var node = e.target;
    if (!node.hasAttribute) return;
    if (node.hasAttribute('data-list-filter')) {
      var scope = node.getAttribute('data-list-filter');
      var q = node.value.trim().toLowerCase();
      var rows = all('[data-row][data-list="' + scope + '"]');
      if (!rows.length) rows = all('[data-row]');
      var shown = 0;
      rows.forEach(function (row) {
        var hay = (row.getAttribute('data-search') || row.textContent || '').toLowerCase();
        var match = !q || hay.indexOf(q) >= 0;
        row.classList.toggle('hidden', !match);
        if (match) shown++;
      });
      var note = document.querySelector('[data-list-count="' + scope + '"]');
      if (note) note.textContent = shown + ' shown';
      return;
    }
    if (node.hasAttribute('data-viva-filter')) {
      var query = node.value.trim().toLowerCase();
      all('[data-viva-item]').forEach(function (item) {
        var hay = (item.textContent || '').toLowerCase();
        item.classList.toggle('hidden', !!query && hay.indexOf(query) < 0);
      });
      return;
    }
    if (node.hasAttribute('data-search-input')) { renderSearch(node.value); return; }
    if (node.hasAttribute('data-note-input')) {
      ui.draftNotes[node.getAttribute('data-id')] = node.value;
      return;
    }
    if (node.hasAttribute('data-subject-query')) {
      ui.subjectQuery[node.getAttribute('data-subject-query')] = node.value;
      return;
    }
  }

  function onKeydown(e) {
    var key = e.key;
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '');

    if ((e.ctrlKey || e.metaKey) && (key === 'k' || key === 'K')) {
      e.preventDefault();
      if (searchOpen()) closeSearch(); else openSearch();
      return;
    }
    if (key === 'Escape') {
      if (searchOpen()) { e.preventDefault(); closeSearch(); return; }
      if (document.body.classList.contains('nav-open')) { document.body.classList.remove('nav-open'); return; }
      if (document.getElementById('dialog-root') && document.getElementById('dialog-root').innerHTML) {
        LM.closeDialog(false);
      }
      return;
    }
    if (!searchOpen()) return;
    var items = results();
    if (!items.length) return;
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      e.preventDefault();
      ui.searchActive = (ui.searchActive + (key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      markActive();
      return;
    }
    if (key === 'Enter') {
      var target = items[ui.searchActive];
      if (target) { e.preventDefault(); target.click(); }
    }
  }

  /* ---------- boot ---------- */
  function boot() {
    buildNav();
    LM.applyTheme();
    document.documentElement.style.setProperty('--code-fs', (LM.getState().codeFontSize || 13) + 'px');

    try {
      if (window.localStorage.getItem('labmaster:sidebar') === '1') {
        var shell = document.querySelector('.app-shell');
        if (shell) shell.classList.add('collapsed');
      }
    } catch (e) {}

    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('input', onInput);
    document.addEventListener('keydown', onKeydown);

    window.addEventListener('hashchange', function () {
      var route = LM.parseHash();
      if (route.name === 'practical') LM.recordView(route.param);
      if (LM.renderApp) LM.renderApp({ focus: false });
    });

    if (!LM.storageWorks()) {
      var banner = document.getElementById('storage-warning');
      if (banner) banner.classList.remove('hidden');
    }

    var route = LM.parseHash();
    if (route.name === 'practical') LM.recordView(route.param);
    if (LM.renderApp) LM.renderApp({ focus: false });
    updateNavCounts();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
