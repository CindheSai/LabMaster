/* ==========================================================================
   LabMaster — dependency-free syntax highlighting (HTML, CSS, JS, PHP, SQL, Python)
   ========================================================================== */
(function () {
  'use strict';
  var LM = window.LM;
  var esc = LM.esc;

  function tok(src, cls) { return { re: new RegExp(src, 'y'), cls: cls }; }

  var PY_KEY = '\\b(?:def|class|return|if|elif|else|for|while|in|not|and|or|import|from|as|with|try|except|finally|raise|pass|break|continue|lambda|global|nonlocal|assert|yield|del|is|None|True|False|async|await|match|case)\\b';
  var JS_KEY = '\\b(?:var|let|const|function|return|if|else|for|while|do|switch|case|break|continue|new|this|typeof|instanceof|try|catch|finally|throw|class|extends|super|import|export|default|from|await|async|yield|delete|in|of|void|true|false|null|undefined)\\b';
  var PHP_KEY = '\\b(?:if|else|elseif|endif|foreach|endforeach|for|endfor|while|endwhile|switch|case|break|continue|function|return|echo|print|new|class|extends|implements|public|private|protected|static|const|try|catch|finally|throw|include|require|include_once|require_once|isset|unset|empty|array|as|and|or|xor|true|false|null|global|use|namespace)\\b';
  var SQL_KEY = '\\b(?:SELECT|FROM|WHERE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DATABASE|DROP|ALTER|ADD|PRIMARY|KEY|FOREIGN|REFERENCES|NOT|NULL|DEFAULT|AUTO_INCREMENT|INT|VARCHAR|TEXT|DATE|DATETIME|DECIMAL|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP|BY|ORDER|HAVING|LIMIT|OFFSET|AND|OR|AS|DISTINCT|COUNT|SUM|AVG|MIN|MAX|LIKE|IN|IS|BETWEEN|UNION|INDEX|UNIQUE|CONSTRAINT|CHECK|VIEW|IF|EXISTS|USE|SHOW|DESCRIBE|ASC|DESC|CASCADE|TRUNCATE|BEGIN|COMMIT|ROLLBACK)\\b';

  var RULES = {
    python: [
      tok('#[^\\n]*', 'tok-com'),
      tok('"""[\\s\\S]*?"""|\'\'\'[\\s\\S]*?\'\'\'', 'tok-str'),
      tok('(?:[rbfuRBFU]{0,2})"(?:\\\\.|[^"\\\\\\n])*"|(?:[rbfuRBFU]{0,2})\'(?:\\\\.|[^\'\\\\\\n])*\'', 'tok-str'),
      tok('@[A-Za-z_][\\w.]*', 'tok-attr'),
      tok(PY_KEY, 'tok-key'),
      tok('\\b(?:print|len|range|int|str|float|list|dict|set|tuple|open|input|sum|max|min|abs|round|sorted|enumerate|zip|type|isinstance|super|map|filter|format|append|keys|values|items|read|write|readlines|strip|split|join|get|add|remove|pop|insert|sort)\\b', 'tok-fn'),
      tok('\\b\\d+(?:\\.\\d+)?\\b', 'tok-num'),
      tok('[+\\-*/%=<>!&|^~]+', 'tok-op')
    ],
    javascript: [
      tok('//[^\\n]*', 'tok-com'),
      tok('/\\*[\\s\\S]*?\\*/', 'tok-com'),
      tok('`(?:\\\\.|[^`\\\\])*`', 'tok-str'),
      tok('"(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])*\'', 'tok-str'),
      tok(JS_KEY, 'tok-key'),
      tok('\\b(?:document|window|console|alert|prompt|parseInt|parseFloat|Math|Date|JSON|localStorage|setTimeout|setInterval|querySelector|querySelectorAll|getElementById|addEventListener)\\b', 'tok-fn'),
      tok('\\b\\d+(?:\\.\\d+)?\\b', 'tok-num'),
      tok('[+\\-*/%=<>!&|^~?:]+', 'tok-op')
    ],
    html: [
      tok('<!--[\\s\\S]*?-->', 'tok-com'),
      tok('<!DOCTYPE[^>]*>', 'tok-key'),
      tok('</?[a-zA-Z][\\w:-]*', 'tok-tag'),
      tok('\\/?>', 'tok-tag'),
      tok('[a-zA-Z_:][-\\w:.]*(?=\\s*=)', 'tok-attr'),
      tok('"(?:[^"]*)"|\'(?:[^\']*)\'', 'tok-str'),
      tok('&[a-zA-Z#0-9]+;', 'tok-num')
    ],
    css: [
      tok('/\\*[\\s\\S]*?\\*/', 'tok-com'),
      tok('"(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])*\'', 'tok-str'),
      tok('@[a-zA-Z-]+', 'tok-key'),
      tok('[-a-zA-Z]+(?=\\s*:)', 'tok-attr'),
      tok('#[0-9a-fA-F]{3,8}\\b', 'tok-num'),
      tok('\\b\\d+(?:\\.\\d+)?(?:px|em|rem|%|vh|vw|s|ms|deg|pt|fr)?\\b', 'tok-num'),
      tok('[.#][-\\w]+', 'tok-tag'),
      tok('[{}:;,>+~*]+', 'tok-op')
    ],
    php: [
      tok('\\/\\/[^\\n]*|#[^\\n]*', 'tok-com'),
      tok('/\\*[\\s\\S]*?\\*/', 'tok-com'),
      tok('"(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])*\'', 'tok-str'),
      tok('<\\?php|<\\?=|\\?>', 'tok-key'),
      tok('\\$[A-Za-z_][\\w]*', 'tok-var'),
      tok(PHP_KEY, 'tok-key'),
      tok('\\b(?:htmlspecialchars|filter_var|move_uploaded_file|basename|pathinfo|in_array|preg_match|strlen|strtolower|strtoupper|trim|count|date|setcookie|session_start|mysqli_connect|mysqli_query|mysqli_fetch_assoc|mysqli_real_escape_string|header|die|exit|printf|sprintf|implode|explode|file_get_contents|file_put_contents|is_uploaded_file|finfo_open|random_bytes|bin2hex|uniqid|number_format|array_map|array_filter|json_encode|json_decode)\\b', 'tok-fn'),
      tok('\\b\\d+(?:\\.\\d+)?\\b', 'tok-num'),
      tok('</?[a-zA-Z][\\w:-]*', 'tok-tag'),
      tok('[+\\-*/%=<>!&|^~.?:]+', 'tok-op')
    ],
    sql: [
      tok('--[^\\n]*', 'tok-com'),
      tok('/\\*[\\s\\S]*?\\*/', 'tok-com'),
      tok('"(?:[^"\\\\\\n])*"|\'(?:[^\'\\\\\\n])*\'', 'tok-str'),
      tok(SQL_KEY, 'tok-key'),
      tok('\\b\\d+(?:\\.\\d+)?\\b', 'tok-num'),
      tok('[=<>!,;()*.]+', 'tok-op')
    ],
    text: []
  };

  function rulesFor(lang) {
    var key = String(lang || '').toLowerCase();
    if (key === 'py') key = 'python';
    if (key === 'js') key = 'javascript';
    if (key === 'html') key = 'html';
    if (key === 'htm') key = 'html';
    if (key === 'mysql' || key === 'sqlite') key = 'sql';
    return RULES[key] || RULES.text;
  }

  function tokenize(code, lang) {
    var rules = rulesFor(lang);
    var text = String(code == null ? '' : code).replace(/\r\n?/g, '\n');
    if (!rules.length) return [{ t: text, c: null }];
    var out = [];
    var plain = '';
    var i = 0;
    var guard = 0;
    while (i < text.length && guard < 200000) {
      guard++;
      var matched = false;
      for (var k = 0; k < rules.length; k++) {
        var r = rules[k];
        r.re.lastIndex = i;
        var m = r.re.exec(text);
        if (m && m.index === i && m[0].length) {
          if (plain) { out.push({ t: plain, c: null }); plain = ''; }
          out.push({ t: m[0], c: r.cls });
          i += m[0].length;
          matched = true;
          break;
        }
      }
      if (!matched) { plain += text.charAt(i); i++; }
    }
    if (plain) out.push({ t: plain, c: null });
    return out;
  }

  function highlightLines(code, lang) {
    var tokens = tokenize(code, lang);
    var lines = [''];
    tokens.forEach(function (t) {
      var parts = t.t.split('\n');
      for (var i = 0; i < parts.length; i++) {
        if (i > 0) lines.push('');
        var part = parts[i];
        if (!part) continue;
        lines[lines.length - 1] += t.c ? '<span class="' + t.c + '">' + esc(part) + '</span>' : esc(part);
      }
    });
    return lines;
  }

  function codeHtml(code, lang, options) {
    var opts = options || {};
    var lines = highlightLines(code, lang);
    var out = [];
    var start = opts.startLine || 1;
    for (var i = 0; i < lines.length; i++) {
      out.push('<div class="code-line"><span class="ln" aria-hidden="true">' + (start + i) + '</span><span class="lc">' + (lines[i] || ' ') + '</span></div>');
    }
    return out.join('');
  }

  LM.highlight = { tokenize: tokenize, highlightLines: highlightLines, codeHtml: codeHtml };
})();
