/* ==========================================================================
   LabMaster — core: data access, state, storage, helpers, router
   ========================================================================== */
(function () {
  'use strict';

  var DATA = window.__LABMASTER_DATA__ || { programs: [], subjects: [] };
  var PROGRAMS = (DATA.programs || []).slice();
  var SUBJECTS = (DATA.subjects || []).slice();

  var PROGRAM_BY_ID = {};
  PROGRAMS.forEach(function (p) { PROGRAM_BY_ID[p.id] = p; });
  var SUBJECT_BY_ID = {};
  SUBJECTS.forEach(function (s) { SUBJECT_BY_ID[s.id] = s; });

  var LS_KEY = 'labmaster.state.v1';
  var VERSION = 1;
  var storageOk = true;

  /* ---------------- helpers ---------------- */
  function esc(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function pad2(n) { return n < 10 ? '0' + n : String(n); }

  function fmtDate(iso) {
    if (!iso) return '';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function relTime(iso) {
    if (!iso) return '';
    var d = new Date(iso).getTime();
    if (isNaN(d)) return '';
    var diff = Date.now() - d;
    var min = Math.round(diff / 60000);
    if (min < 1) return 'just now';
    if (min < 60) return min + ' min ago';
    var hrs = Math.round(min / 60);
    if (hrs < 24) return hrs + (hrs === 1 ? ' hour ago' : ' hours ago');
    var days = Math.round(hrs / 24);
    if (days < 30) return days + (days === 1 ? ' day ago' : ' days ago');
    return fmtDate(iso);
  }

  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }

  function clamp(n, lo, hi) { return Math.min(hi, Math.max(lo, n)); }

  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  }

  function slug(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function pct(part, total) {
    if (!total) return 0;
    return Math.round((part / total) * 100);
  }

  /* ---------------- icons ---------------- */
  var ICON_PATHS = {
    dashboard: '<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/>',
    bookmark: '<path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l3-4 3 3 5-7"/>',
    pdf: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15h2a1.5 1.5 0 0 0 0-3H9v6"/>',
    notes: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
    chevronRight: '<path d="M9 18l6-6-6-6"/>',
    chevronLeft: '<path d="M15 18l-6-6 6-6"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 8l5-5 5 5M12 3v12"/>',
    arrowLeft: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/>',
    code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    play: '<path d="M6 4l14 8-14 8z"/>',
    sparkle: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z"/>',
    trash: '<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
    alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
    home: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
    layers: '<path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/>',
    terminal: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    eye: '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>'
  };

  function icon(name, size, cls) {
    var p = ICON_PATHS[name] || ICON_PATHS.info;
    var s = size || 16;
    return '<svg class="ico ' + (cls || '') + '" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + p + '</svg>';
  }

  /* ---------------- state ---------------- */
  function emptyState() {
    return {
      version: VERSION,
      theme: 'system',
      completed: {},
      bookmarks: {},
      notes: {},
      recent: [],
      lastOpened: null,
      codeFontSize: 13
    };
  }

  /* Hydrate from the saved payload: loadState() sanitizes untrusted JSON and
     falls back to an empty state when storage is missing or corrupted. */
  var state = loadState();

  function isPlainObject(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v);
  }

  function sanitizeState(raw) {
    var clean = emptyState();
    if (!isPlainObject(raw)) return clean;

    if (raw.theme === 'light' || raw.theme === 'dark' || raw.theme === 'system') clean.theme = raw.theme;

    var fs = Number(raw.codeFontSize);
    if (isFinite(fs)) clean.codeFontSize = clamp(Math.round(fs), 11, 18);

    ['completed', 'bookmarks'].forEach(function (key) {
      var src = raw[key];
      if (!isPlainObject(src)) return;
      Object.keys(src).forEach(function (id) {
        if (PROGRAM_BY_ID[id]) {
          var v = src[id];
          clean[key][id] = (typeof v === 'string' && v.length < 40) ? v : new Date().toISOString();
        }
      });
    });

    if (isPlainObject(raw.notes)) {
      Object.keys(raw.notes).forEach(function (id) {
        if (!PROGRAM_BY_ID[id]) return;
        var n = raw.notes[id];
        var text = '';
        var at = new Date().toISOString();
        if (typeof n === 'string') text = n;
        else if (isPlainObject(n)) {
          text = typeof n.text === 'string' ? n.text : '';
          if (typeof n.updatedAt === 'string') at = n.updatedAt;
        }
        text = text.slice(0, 20000);
        if (text.trim()) clean.notes[id] = { text: text, updatedAt: at };
      });
    }

    if (Array.isArray(raw.recent)) {
      var seen = {};
      raw.recent.slice(0, 40).forEach(function (r) {
        var id = r && (typeof r === 'object' ? r.id : r);
        if (PROGRAM_BY_ID[id] && !seen[id]) {
          seen[id] = 1;
          clean.recent.push({ id: id, at: (r && typeof r.at === 'string') ? r.at : new Date().toISOString() });
        }
      });
      clean.recent = clean.recent.slice(0, 10);
    }

    if (PROGRAM_BY_ID[raw.lastOpened]) clean.lastOpened = raw.lastOpened;
    return clean;
  }

  function loadState() {
    try {
      var raw = window.localStorage.getItem(LS_KEY);
      if (!raw) return emptyState();
      var parsed = JSON.parse(raw);
      return sanitizeState(parsed);
    } catch (err) {
      storageOk = false;
      return emptyState();
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(LS_KEY, JSON.stringify(state));
      storageOk = true;
      return true;
    } catch (err) {
      storageOk = false;
      return false;
    }
  }

  function storageWorks() {
    if (!storageOk) return false;
    try {
      var k = '__lm_probe__';
      window.localStorage.setItem(k, '1');
      window.localStorage.removeItem(k);
      return true;
    } catch (e) { return false; }
  }

  /* ---------------- progress ---------------- */
  function isDone(id) { return !!state.completed[id]; }
  function isBookmarked(id) { return !!state.bookmarks[id]; }

  function programsOf(subjectId) {
    return PROGRAMS.filter(function (p) { return p.subjectId === subjectId; })
      .sort(function (a, b) { return a.programNumber - b.programNumber; });
  }

  function subjectStats(subjectId) {
    var list = programsOf(subjectId);
    var done = list.filter(function (p) { return isDone(p.id); }).length;
    return { total: list.length, done: done, remaining: list.length - done, percent: pct(done, list.length) };
  }

  function overallStats() {
    var done = PROGRAMS.filter(function (p) { return isDone(p.id); }).length;
    return {
      subjects: SUBJECTS.length,
      total: PROGRAMS.length,
      done: done,
      remaining: PROGRAMS.length - done,
      bookmarks: Object.keys(state.bookmarks).length,
      notes: Object.keys(state.notes).length,
      percent: pct(done, PROGRAMS.length)
    };
  }

  function setCompleted(id, on) {
    if (!PROGRAM_BY_ID[id]) return;
    if (on) state.completed[id] = new Date().toISOString();
    else delete state.completed[id];
    saveState();
  }

  function setBookmark(id, on) {
    if (!PROGRAM_BY_ID[id]) return;
    if (on) state.bookmarks[id] = new Date().toISOString();
    else delete state.bookmarks[id];
    saveState();
  }

  function recordView(id) {
    if (!PROGRAM_BY_ID[id]) return;
    state.recent = state.recent.filter(function (r) { return r.id !== id; });
    state.recent.unshift({ id: id, at: new Date().toISOString() });
    state.recent = state.recent.slice(0, 10);
    state.lastOpened = id;
    saveState();
  }

  function setNote(id, text) {
    if (!PROGRAM_BY_ID[id]) return;
    var clean = String(text || '').slice(0, 20000);
    if (clean.trim()) state.notes[id] = { text: clean, updatedAt: new Date().toISOString() };
    else delete state.notes[id];
    saveState();
  }

  function deleteNote(id) {
    delete state.notes[id];
    saveState();
  }

  function resetData(scope) {
    if (scope === 'all') {
      var theme = state.theme;
      var fs = state.codeFontSize;
      state = emptyState();
      state.theme = theme;
      state.codeFontSize = fs;
    } else if (scope === 'completed') {
      state.completed = {};
    } else if (scope === 'bookmarks') {
      state.bookmarks = {};
    } else if (scope === 'notes') {
      state.notes = {};
    } else if (scope === 'recent') {
      state.recent = [];
      state.lastOpened = null;
    }
    saveState();
  }

  /* ---------------- theme ---------------- */
  var mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function resolvedTheme() {
    if (state.theme === 'system') return (mql && mql.matches) ? 'dark' : 'light';
    return state.theme;
  }

  function applyTheme() {
    var t = resolvedTheme();
    document.documentElement.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#080c13' : '#f4f6fa');
    var btns = document.querySelectorAll('[data-theme-current]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('data-theme-current', state.theme);
      btns[i].setAttribute('title', 'Theme: ' + state.theme + ' (click to change)');
      btns[i].setAttribute('aria-label', 'Theme: ' + state.theme + '. Change theme');
    }
    var icons = document.querySelectorAll('[data-theme-icon]');
    for (var j = 0; j < icons.length; j++) {
      icons[j].innerHTML = icon(state.theme === 'system' ? 'monitor' : (state.theme === 'dark' ? 'moon' : 'sun'), 16);
    }
  }

  function cycleTheme() {
    /* system -> dark -> light -> system, so every press visibly changes the UI */
    state.theme = state.theme === 'system' ? 'dark' : (state.theme === 'dark' ? 'light' : 'system');
    saveState();
    applyTheme();
    if (typeof renderApp === 'function') renderApp({ keepScroll: true });
    if (typeof toast === 'function') toast('Theme: ' + state.theme, 'success');
  }

  /* ---------------- toast ---------------- */
  function toast(message, kind) {
    var root = document.getElementById('toast-root');
    if (!root) return;
    var el = document.createElement('div');
    el.className = 'toast ' + (kind || '');
    el.setAttribute('role', 'status');
    el.innerHTML = icon(kind === 'error' ? 'alert' : (kind === 'success' ? 'checkCircle' : 'info'), 15, 't-ico') +
      '<div>' + esc(message) + '</div>';
    root.appendChild(el);
    setTimeout(function () {
      el.style.opacity = '0';
      el.style.transition = 'opacity .2s ease';
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 220);
    }, 3200);
  }

  /* ---------------- confirm dialog ---------------- */
  var dialogState = { resolve: null, lastFocus: null };

  function closeDialog(result) {
    var root = document.getElementById('dialog-root');
    if (root) root.innerHTML = '';
    if (dialogState.lastFocus && dialogState.lastFocus.focus) {
      try { dialogState.lastFocus.focus(); } catch (e) {}
    }
    var r = dialogState.resolve;
    dialogState.resolve = null;
    if (r) r(!!result);
  }

  function confirmAction(opts) {
    return new Promise(function (resolve) {
      var root = document.getElementById('dialog-root');
      if (!root) { resolve(false); return; }
      dialogState.resolve = resolve;
      dialogState.lastFocus = document.activeElement;
      var danger = opts.danger !== false;
      root.innerHTML =
        '<div class="modal-backdrop open" data-dialog-backdrop>' +
          '<div class="modal dialog" role="alertdialog" aria-modal="true" aria-labelledby="dlg-title" aria-describedby="dlg-desc">' +
            '<div class="dlg-body">' +
              '<h2 id="dlg-title">' + esc(opts.title || 'Are you sure?') + '</h2>' +
              '<p id="dlg-desc">' + esc(opts.message || '') + '</p>' +
            '</div>' +
            '<div class="dlg-actions">' +
              '<button type="button" class="btn" data-dialog-cancel>' + esc(opts.cancelLabel || 'Cancel') + '</button>' +
              '<button type="button" class="btn ' + (danger ? 'btn-danger' : 'btn-primary') + '" data-dialog-confirm>' + esc(opts.confirmLabel || 'Confirm') + '</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      var confirmBtn = root.querySelector('[data-dialog-confirm]');
      var cancelBtn = root.querySelector('[data-dialog-cancel]');
      if (cancelBtn) cancelBtn.focus();
      root.querySelector('[data-dialog-backdrop]').addEventListener('click', function (e) {
        if (e.target === e.currentTarget) closeDialog(false);
      });
      if (confirmBtn) confirmBtn.addEventListener('click', function () { closeDialog(true); });
      if (cancelBtn) cancelBtn.addEventListener('click', function () { closeDialog(false); });
      root.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.preventDefault(); closeDialog(false); }
        if (e.key === 'Tab') {
          var f = [cancelBtn, confirmBtn];
          var idx = f.indexOf(document.activeElement);
          e.preventDefault();
          f[(idx + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
        }
      });
    });
  }

  /* ---------------- router ---------------- */
  function parseHash() {
    var raw = (window.location.hash || '').replace(/^#/, '');
    var parts = raw.split('?')[0].split('/').filter(Boolean);
    return {
      name: parts[0] || 'dashboard',
      param: parts[1] ? decodeURIComponent(parts[1]) : null
    };
  }

  function navigate(path) {
    var target = '#' + (path.charAt(0) === '/' ? path : '/' + path);
    if (window.location.hash === target) {
      if (typeof renderApp === 'function') renderApp({ keepScroll: false });
    } else {
      window.location.hash = target;
    }
  }

  function practicalPath(id) { return '/practical/' + id; }
  function subjectPath(id) { return '/subject/' + id; }

  /* ---------------- language helpers ---------------- */
  function langOf(program) {
    if (!program) return 'text';
    var tech = (program.technologies || []).join(' ').toLowerCase();
    if (tech.indexOf('php') >= 0) return 'php';
    if (tech.indexOf('python') >= 0) return 'python';
    if (tech.indexOf('sql') >= 0 && tech.indexOf('php') < 0) return 'sql';
    if (tech.indexOf('javascript') >= 0) return 'javascript';
    if (tech.indexOf('css') >= 0 && tech.indexOf('html') < 0) return 'css';
    if (tech.indexOf('html') >= 0) return 'html';
    return 'text';
  }

  function extFor(lang) {
    return { php: 'php', python: 'py', sql: 'sql', javascript: 'js', css: 'css', html: 'html' }[lang] || 'txt';
  }

  function fileFor(program) {
    if (program.codeFiles && program.codeFiles.length === 1) return program.codeFiles[0].fileName;
    if (program.runLocallyGuide && program.runLocallyGuide.fileName && program.runLocallyGuide.fileName.indexOf('&') < 0) {
      return program.runLocallyGuide.fileName;
    }
    return 'labmaster-p' + program.programNumber + '.' + extFor(langOf(program));
  }

  function codeTabsFor(program) {
    var tabs = [];
    var lang = langOf(program);
    if (program.correctedCode && program.correctedCode !== program.originalCode) {
      tabs.push({ key: 'corrected', label: 'Corrected code', lang: lang, code: program.correctedCode, file: fileFor(program) });
    }
    if (program.codeFiles && program.codeFiles.length) {
      program.codeFiles.forEach(function (f, i) {
        tabs.push({
          key: 'file' + i,
          label: f.fileName,
          lang: (f.language || lang).toLowerCase(),
          code: f.code,
          file: f.fileName
        });
      });
      if (program.correctedCode && program.correctedCode !== program.originalCode) {
        tabs.push({ key: 'original', label: 'Lab manual original', lang: lang, code: program.originalCode, file: 'original.' + extFor(lang) });
      }
    } else if (!program.correctedCode || program.correctedCode !== program.originalCode) {
      tabs.push({ key: 'original', label: 'Lab manual original', lang: lang, code: program.originalCode, file: fileFor(program) });
    }
    if (!tabs.length) tabs.push({ key: 'original', label: 'Source code', lang: lang, code: program.originalCode || '', file: fileFor(program) });
    return tabs;
  }

  /* ---------------- clipboard / download ---------------- */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', 'readonly');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  function downloadFile(filename, content, mime) {
    try {
      var blob = new Blob([content], { type: mime || 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 400);
      return true;
    } catch (e) { return false; }
  }

  /* ---------------- search ---------------- */
  var searchIndex = PROGRAMS.map(function (p) {
    var parts = [
      p.title || '',
      'practical ' + p.programNumber,
      'program ' + p.programNumber,
      String(p.id),
      p.shortDescription || '',
      p.pdfQuestion || '',
      (p.technologies || []).join(' '),
      (p.conceptsUsed || []).map(function (c) { return c.name + ' ' + c.description; }).join(' '),
      (p.vivaQuestions || []).map(function (v) { return v.question + ' ' + v.answer; }).join(' '),
      (p.examNotes || []).map(function (n) { return n.title + ' ' + n.description; }).join(' '),
      p.originalCode || '',
      p.correctedCode || ''
    ];
    return {
      id: p.id,
      subjectId: p.subjectId,
      title: p.title,
      num: p.programNumber,
      hay: parts.join(' \n ').toLowerCase()
    };
  });

  function searchContent(query, limit) {
    var q = String(query || '').trim().toLowerCase();
    var results = [];
    if (!q) return results;
    var terms = q.split(/\s+/).filter(function (t) { return t.length > 0; });

    SUBJECTS.forEach(function (s) {
      var hay = (s.title + ' ' + s.code + ' ' + s.subtitle + ' ' + s.description).toLowerCase();
      if (terms.every(function (t) { return hay.indexOf(t) >= 0; })) {
        results.push({ type: 'subject', id: s.id, title: s.title, sub: s.code + ' · ' + plural(s.totalPrograms, 'practical'), score: 60, href: subjectPath(s.id) });
      }
    });

    searchIndex.forEach(function (item) {
      var score = 0;
      var all = true;
      terms.forEach(function (t) {
        var inTitle = item.title.toLowerCase().indexOf(t) >= 0;
        if (inTitle) score += 60;
        else if (item.hay.indexOf(t) >= 0) score += 10;
        else all = false;
      });
      if (!all) return;
      if (String(item.num) === q) score += 200;
      results.push({
        type: 'practical',
        id: item.id,
        title: item.num + '. ' + item.title,
        sub: (SUBJECT_BY_ID[item.subjectId] || {}).title || '',
        score: score,
        href: practicalPath(item.id)
      });
    });

    Object.keys(state.notes).forEach(function (id) {
      var n = state.notes[id];
      var hay = (n.text || '').toLowerCase();
      if (terms.every(function (t) { return hay.indexOf(t) >= 0; })) {
        var p = PROGRAM_BY_ID[id];
        results.push({
          type: 'note',
          id: id,
          title: 'Note: ' + (p ? p.title : id),
          sub: n.text.slice(0, 110),
          score: 40,
          href: practicalPath(id)
        });
      }
    });

    PROGRAMS.forEach(function (p) {
      (p.vivaQuestions || []).forEach(function (v) {
        var hay = (v.question + ' ' + v.answer).toLowerCase();
        if (terms.every(function (t) { return hay.indexOf(t) >= 0; })) {
          results.push({
            type: 'viva',
            id: p.id,
            title: v.question,
            sub: 'Practical ' + p.programNumber + ' · ' + p.title,
            score: 30,
            href: practicalPath(p.id) + '#viva'
          });
        }
      });
    });

    results.sort(function (a, b) { return b.score - a.score; });
    var seen = {};
    return results.filter(function (r) {
      var k = r.type + ':' + r.id + ':' + r.title;
      if (seen[k]) return false;
      seen[k] = 1;
      return true;
    }).slice(0, limit || 24);
  }

  function highlightText(text, query) {
    var safe = esc(text);
    var q = String(query || '').trim();
    if (!q) return safe;
    var terms = q.split(/\s+/).filter(function (t) { return t.length > 1; }).slice(0, 6);
    if (!terms.length) return safe;
    var pattern = terms.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|');
    try {
      return safe.replace(new RegExp('(' + pattern + ')', 'gi'), '<mark>$1</mark>');
    } catch (e) { return safe; }
  }

  /* expose internals to later files in the same bundle */
  var LM = {
    DATA: DATA, PROGRAMS: PROGRAMS, SUBJECTS: SUBJECTS,
    PROGRAM_BY_ID: PROGRAM_BY_ID, SUBJECT_BY_ID: SUBJECT_BY_ID,
    LS_KEY: LS_KEY, VERSION: VERSION,
    esc: esc, pad2: pad2, fmtDate: fmtDate, relTime: relTime, plural: plural,
    clamp: clamp, debounce: debounce, slug: slug, pct: pct,
    icon: icon, ICON_PATHS: ICON_PATHS,
    state: state,
    getState: function () { return state; },
    setState: function (s) { state = s; },
    emptyState: emptyState, sanitizeState: sanitizeState,
    loadState: loadState, saveState: saveState, storageWorks: storageWorks,
    isDone: isDone, isBookmarked: isBookmarked,
    programsOf: programsOf, subjectStats: subjectStats, overallStats: overallStats,
    setCompleted: setCompleted, setBookmark: setBookmark, recordView: recordView,
    setNote: setNote, deleteNote: deleteNote, resetData: resetData,
    resolvedTheme: resolvedTheme, applyTheme: applyTheme, cycleTheme: cycleTheme,
    toast: toast, confirmAction: confirmAction, closeDialog: closeDialog,
    parseHash: parseHash, navigate: navigate, practicalPath: practicalPath, subjectPath: subjectPath,
    langOf: langOf, extFor: extFor, fileFor: fileFor, codeTabsFor: codeTabsFor,
    copyText: copyText, downloadFile: downloadFile,
    searchContent: searchContent, highlightText: highlightText
  };
  window.LM = LM;
})();
