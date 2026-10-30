import { ProgramData } from '../types';

export const LAB_PROGRAMS: ProgramData[] = [
  {
    "id": 1,
    "programNumber": 1,
    "title": "HTML document demonstrating formatting options",
    "pdfQuestion": "1. Create an HTML document with the following formatting options:\n(a) Bold,\n(b) Italics,\n(c) Underline,\n(d) Headings (Using H1 to H6 heading styles),\n(e) Font (Type, Size and Color),\n(f) Background (Colored background/Image in background),\n(g) Paragraph,\n(h) Line Break,\n(i) Horizontal Rule,\n(j) Pre tag",
    "shortDescription": "Demonstrates basic HTML text formatting tags, font manipulation, heading levels H1-H6, line breaks, rules, and preformatted blocks.",
    "technologies": [
      "HTML"
    ],
    "previewType": "html",
    "originalCode": "<html>\n<head> \n<title>HTML Formatting Example</title> \n</head> <body bgcolor=\"blue\"> \n<!-- Headings --> \n<h1>Heading 1</h1> \n<h2>Heading 2</h2> \n<h3>Heading 3</h3> \n<h4>Heading 4</h4> \n<h5>Heading 5</h5> \n<h6>Heading 6</h6> \n<!-- Paragraph --> \n<p>This is a paragraph demonstrating text formatting in HTML.</p> \n<!-- Bold --> \n<p><b>This text is bold.</b></p> \n<!-- Italics --> \n<p><i>This text is italic.</i></p> \n<!-- Underline --> \n<p><u>This text is underlined.</u></p> \n<!-- Font (Type, Size, Color) --> \n<font face=\"monotype corsiva\" size=13 color=\"blue\">This text uses a custom font, size, and \ncolor.</font> \n<!-- Line Break --> \n<p>This is the first line.<br>This is the second line after a line break.</p> \n<!-- Horizontal Rule --> \n<hr> \n<!-- Preformatted Text --> \n<pre> This is preformatted text. \nIt preserves spaces and line breaks. \n</pre>\n</body> \n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head> \n  <meta charset=\"UTF-8\">\n  <title>HTML Formatting Example (Modern Standard)</title> \n  <style>\n    body {\n      background-color: #2563eb; /* Accessible blue background */\n      color: #ffffff;            /* White text for contrast */\n      font-family: Arial, sans-serif;\n      padding: 20px;\n    }\n    .custom-font {\n      font-family: 'Brush Script MT', 'Monotype Corsiva', cursive;\n      font-size: 28px;\n      color: #fef08a; /* High-contrast yellow */\n    }\n    hr {\n      border: 0;\n      height: 2px;\n      background: #ffffff;\n      margin: 16px 0;\n    }\n    pre {\n      background: rgba(0,0,0,0.2);\n      padding: 10px;\n      border-radius: 4px;\n    }\n  </style>\n</head> \n<body> \n  <!-- Headings --> \n  <h1>Heading 1</h1> \n  <h2>Heading 2</h2> \n  <h3>Heading 3</h3> \n  <h4>Heading 4</h4> \n  <h5>Heading 5</h5> \n  <h6>Heading 6</h6> \n\n  <!-- Paragraph --> \n  <p>This is a paragraph demonstrating text formatting in HTML.</p> \n\n  <!-- Formatting --> \n  <p><b>This text is bold.</b></p> \n  <p><i>This text is italic.</i></p> \n  <p><u>This text is underlined.</u></p> \n\n  <!-- Modern CSS replacement for deprecated <font> --> \n  <p class=\"custom-font\">This text uses a custom font, size, and color via CSS.</p> \n\n  <!-- Line Break --> \n  <p>This is the first line.<br>This is the second line after a line break.</p> \n\n  <!-- Horizontal Rule --> \n  <hr> \n\n  <!-- Preformatted Text --> \n  <pre>This is preformatted text. \nIt preserves spaces and line breaks.</pre>\n</body> \n</html>",
    "correctionExplanation": "In the lab manual code from the PDF:\n1. The <body> tag uses bgcolor=\"blue\" and the <font> tag uses color=\"blue\", making that specific text difficult to read on top of the blue background.\n2. The <font> tag (along with attributes face, size, color) and bgcolor are deprecated in HTML5. In modern production, CSS (e.g. background-color, font-family, font-size, color) is the recommended standard.\n3. The original code lacks the modern <!DOCTYPE html> preamble and charset declaration.\nBoth versions are provided so you can score full marks by writing what the college examiner expects while also demonstrating modern web standards knowledge during your viva!",
    "objective": {
      "whatItDoes": "Constructs an HTML webpage showcasing all foundational typography and structural tags including 6 heading tiers, inline formatting (bold, italic, underline), line breaks, horizontal rules, preformatted text, and body backgrounds.",
      "whyWritten": "To test a student's understanding of fundamental HTML markup tags, inline vs block elements, tag nesting rules, and historical visual attributes.",
      "conceptsDemonstrated": "HTML tag hierarchy, Heading tags (<h1> to <h6>), physical inline formatting (<b>, <i>, <u>), text grouping (<p>, <pre>), empty/void tags (<br>, <hr>), and body attributes.",
      "expectedOutputSummary": "A solid blue screen rendering 6 decreasing heading levels, paragraphs with distinct text treatments, a custom decorative cursive line, a dividing rule, and preserved-whitespace text.",
      "problemSolved": "Plain unformatted text is unreadable and lacks visual hierarchy. This program demonstrates foundational HTML markup for styling headings, typography, text decorations, and content dividers without requiring external style sheets.",
      "overallMechanism": "The browser parses the HTML document hierarchically into a DOM tree, applying default user-agent styling and legacy attributes (like bgcolor, font face, size, and inline tags like b, i, u, pre) to render structured text blocks.",
      "prerequisitesToUnderstand": "Basic understanding of HTML tags (opening and closing), attributes (name=\"value\"), and how web browsers interpret plain text markup."
    },
    "conceptsUsed": [
      {
        "name": "Document Skeleton",
        "description": "<html>, <head>, <title>, and <body> form the minimum required tree for any HTML document."
      },
      {
        "name": "Headings (<h1>–<h6>)",
        "description": "Semantic block elements for outlining document sections; <h1> is the largest and <h6> is the smallest."
      },
      {
        "name": "Inline Text Styling",
        "description": "<b> applies bold weight, <i> renders italics, and <u> adds a continuous underline."
      },
      {
        "name": "Void / Self-closing Tags",
        "description": "<br> inserts a carriage-return line break without creating a new paragraph, while <hr> creates a thematic horizontal divider."
      },
      {
        "name": "Preformatted Text (<pre>)",
        "description": "Renders text in fixed-width monospace font while preserving all spaces and newline characters exactly as written in code."
      },
      {
        "name": "Deprecated <font> & bgcolor",
        "description": "Attributes used in legacy HTML to dictate visual appearance prior to the universal adoption of CSS."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Open Root HTML Element",
        "codeSnippet": "<html>",
        "whatItDoes": "Marks the official start of the HyperText Markup Language document.",
        "whyUsed": "Informs the browser parser that everything enclosed until </html> is HTML code.",
        "howItWorks": "Instantiates the Document Root in the Document Object Model (DOM).",
        "connectionToSurrounding": "Acts as top-level parent wrapper enclosing <head> and <body>.",
        "examRelevance": "Mandatory in all HTML standards; must be closed at the very end of file."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 2",
        "title": "Open Document Head Section",
        "codeSnippet": "<head>",
        "whatItDoes": "Opens the metadata container for the web page.",
        "whyUsed": "Houses non-rendered configuration metadata, scripts, styles, and page titles.",
        "howItWorks": "The browser reads this section before rendering visible page content.",
        "connectionToSurrounding": "Must be placed immediately after <html> and before <body>.",
        "examRelevance": "Common viva question: Content in <head> is NOT displayed directly in the browser viewport (except title in tab)."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Line 3",
        "title": "Set Browser Window Title",
        "codeSnippet": "<title>HTML Formatting Example</title>",
        "whatItDoes": "Defines the title of the document shown in the browser window or tab.",
        "whyUsed": "Crucial for user orientation, bookmarks, search engine snippets, and accessibility.",
        "howItWorks": "The browser updates the tab title and window header with this string.",
        "connectionToSurrounding": "Must reside exclusively inside the <head> element.",
        "examRelevance": "Examiners check if <title> is correctly closed with </title>."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 4",
        "title": "Close Document Head Section",
        "codeSnippet": "</head>",
        "whatItDoes": "Terminates the document metadata container.",
        "whyUsed": "Prevents metadata parsing leak into document body content.",
        "howItWorks": "Signals the browser parser that metadata declaration is complete.",
        "connectionToSurrounding": "Transitions immediately into the visible <body> section.",
        "examRelevance": "Head and Body must never overlap or nest inside each other."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Line 4 (continued)",
        "title": "Open Body with Background Color",
        "codeSnippet": "<body bgcolor=\"blue\">",
        "whatItDoes": "Opens the visible content canvas and paints the page background blue.",
        "whyUsed": "Satisfies the lab requirement for colored background using the legacy bgcolor attribute.",
        "howItWorks": "Browser fills the canvas with the color blue (0x0000FF).",
        "connectionToSurrounding": "Contains all visible headings, paragraphs, and formatted elements.",
        "examRelevance": "Viva point: In modern HTML5, bgcolor is deprecated in favor of CSS background-color."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 6-11",
        "title": "Render Heading Levels H1 through H6",
        "codeSnippet": "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>",
        "whatItDoes": "Generates six hierarchical levels of headings, from largest (H1) to smallest (H6).",
        "whyUsed": "Demonstrates content structuring and semantic hierarchy required by the practical syllabus.",
        "howItWorks": "Browser applies default block-level display, bold weight, and decreasing font sizes.",
        "connectionToSurrounding": "Provides the visual top header before paragraphs and inline text formatting.",
        "examRelevance": "Examiner favorite: <h1> has the largest font size and highest semantic weight; <h6> has the smallest."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Line 13",
        "title": "Render Standard Paragraph Block",
        "codeSnippet": "<p>This is a paragraph demonstrating text formatting in HTML.</p>",
        "whatItDoes": "Creates a distinct block of running text with vertical margins.",
        "whyUsed": "Separates prose text cleanly from heading elements.",
        "howItWorks": "Browser inserts default top and bottom margin (typically 1em).",
        "connectionToSurrounding": "Serves as an introductory descriptive paragraph before specific formatting tags.",
        "examRelevance": "<p> is a block-level element, automatically starting on a new line."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Line 15",
        "title": "Apply Bold Inline Text Formatting",
        "codeSnippet": "<p><b>This text is bold.</b></p>",
        "whatItDoes": "Renders the enclosed text in heavy bold weight font.",
        "whyUsed": "Draws optical emphasis to critical keywords or labels.",
        "howItWorks": "Instructs the font rasterizer to use bold glyphs (font-weight: bold).",
        "connectionToSurrounding": "Encapsulated inside a paragraph container for consistent line spacing.",
        "examRelevance": "Viva distinction: <b> is physical formatting; <strong> provides semantic importance for screen readers."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Line 17",
        "title": "Apply Italic Inline Text Formatting",
        "codeSnippet": "<p><i>This text is italic.</i></p>",
        "whatItDoes": "Slants text characters at an angle (italicized / oblique).",
        "whyUsed": "Used for scientific terms, thoughts, citations, or subtle emphasis.",
        "howItWorks": "Browser switches to the font's italic typeface (font-style: italic).",
        "connectionToSurrounding": "Follows bold text to showcase the next physical styling requirement.",
        "examRelevance": "Viva distinction: <i> is purely visual italic; <em> conveys semantic stress emphasis."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Line 19",
        "title": "Apply Underline Inline Text Formatting",
        "codeSnippet": "<p><u>This text is underlined.</u></p>",
        "whatItDoes": "Draws a solid continuous baseline horizontal line beneath text characters.",
        "whyUsed": "Emphasizes text or replicates legacy print typography styles.",
        "howItWorks": "Renders baseline text decoration (text-decoration: underline).",
        "connectionToSurrounding": "Completes the trio of classic word processor inline formatting: bold, italic, underline.",
        "examRelevance": "In web usability, avoid underlining non-link text to prevent confusing users looking for clickable hyperlinks."
      },
      {
        "stepNumber": 11,
        "lineNumberRange": "Line 21",
        "title": "Apply Custom Font Face, Size, and Color",
        "codeSnippet": "<font face=\"monotype corsiva\" size=13 color=\"blue\">This text uses a custom font, size, and color.</font>",
        "whatItDoes": "Applies typeface family \"monotype corsiva\", font size 13, and blue text color.",
        "whyUsed": "Demonstrates legacy HTML font styling tag required by university syllabus option (e).",
        "howItWorks": "Changes font metrics and foreground color for the enclosed text span.",
        "connectionToSurrounding": "Shows inline font manipulation before structural dividers.",
        "examRelevance": "Critical viva note: <font> is deprecated in HTML5; modern development uses CSS (font-family, font-size, color)."
      },
      {
        "stepNumber": 12,
        "lineNumberRange": "Line 23",
        "title": "Demonstrate Forced Line Break (<br>)",
        "codeSnippet": "<p>This is the first line.<br>This is the second line after a line break.</p>",
        "whatItDoes": "Forces an immediate carriage return onto the next line without starting a new paragraph margin.",
        "whyUsed": "Essential for addresses, poems, or multi-line single paragraph text.",
        "howItWorks": "Break tag interrupts line layout and moves the cursor to the left edge of next line.",
        "connectionToSurrounding": "Illustrates inline vertical break before horizontal dividers.",
        "examRelevance": "<br> is a void / empty tag; it has no closing tag in HTML (written <br> or <br />)."
      },
      {
        "stepNumber": 13,
        "lineNumberRange": "Line 25",
        "title": "Insert Horizontal Rule Divider (<hr>)",
        "codeSnippet": "<hr>",
        "whatItDoes": "Draws a horizontal thematic line across the entire width of the page container.",
        "whyUsed": "Creates a clean visual separator between content sections.",
        "howItWorks": "Renders a 1px or 2px inset rule across 100% available width with vertical margins.",
        "connectionToSurrounding": "Divides the paragraph text above from the preformatted block below.",
        "examRelevance": "<hr> is also a void / empty tag with no closing pair in standard HTML."
      },
      {
        "stepNumber": 14,
        "lineNumberRange": "Lines 27-30",
        "title": "Render Preformatted Text Block (<pre>)",
        "codeSnippet": "<pre>\n This is preformatted text.\n It preserves spaces and line breaks.\n</pre>",
        "whatItDoes": "Displays text in a fixed-width monospace font while preserving all spaces and line returns verbatim.",
        "whyUsed": "Normally HTML collapses multiple consecutive spaces into a single space; <pre> preserves raw layout.",
        "howItWorks": "Sets white-space: pre and font-family: monospace in the rendering engine.",
        "connectionToSurrounding": "Showcases specialized textual display before page termination.",
        "examRelevance": "Viva question: How does browser treat spaces inside <p> vs <pre>? <p> collapses them; <pre> preserves them."
      },
      {
        "stepNumber": 15,
        "lineNumberRange": "Lines 31-32",
        "title": "Close Document Body and Root HTML",
        "codeSnippet": "</body>\n</html>",
        "whatItDoes": "Formally terminates the visible content canvas and closes the HTML document.",
        "whyUsed": "Ensures DOM tree is properly closed without dangling nodes.",
        "howItWorks": "Browser parser finalizes layout calculations and triggers page load event.",
        "connectionToSurrounding": "Closes elements opened on Lines 4 and 1.",
        "examRelevance": "Proper tag nesting and clean closure are graded rigorously in practical exams."
      }
    ],
    "executionFlow": [
      "1. Browser parser reads the opening <html> and <head> tags, setting the page title to \"HTML Formatting Example\".",
      "2. Browser enters <body> and sets canvas background to blue from the bgcolor attribute.",
      "3. Renders headings <h1> through <h6> in descending font size with default user-agent margin spacing.",
      "4. Parses paragraph elements, applying bold, italic, and underline text-decorations to the respective spans.",
      "5. Reads the <font> tag, attempts to locate the \"monotype corsiva\" font family on the OS, and renders text.",
      "6. Interprets the <br> tag, resetting horizontal text positioning to the left margin on a new line.",
      "7. Renders the horizontal rule <hr> as a horizontal separator line.",
      "8. Reads the <pre> block, preserving all tabs, carriage returns, and spaces without whitespace collapse.",
      "9. Parser encounters </body> and </html>, completing DOM rendering."
    ],
    "outputExplanation": {
      "description": "The browser renders a vivid blue web page with left-aligned black text headings descending in prominence, formatted paragraph text, an ornamental font string, an etched divider rule, and a monospaced block.",
      "elementsBreakdown": [
        {
          "element": "Full Window Canvas",
          "sourceLine": "<body bgcolor=\"blue\">",
          "explanation": "Floods background with blue color."
        },
        {
          "element": "Heading Hierarchy",
          "sourceLine": "<h1> to <h6>",
          "explanation": "Creates 6 descending bold headings."
        },
        {
          "element": "Formatted Text",
          "sourceLine": "<b>, <i>, <u>",
          "explanation": "Applies bold, italics, and underline styling."
        },
        {
          "element": "Decorative Cursive Text",
          "sourceLine": "<font face=\"monotype corsiva\">",
          "explanation": "Applies script font styling."
        },
        {
          "element": "Split Paragraph",
          "sourceLine": "<br>",
          "explanation": "Forces line continuation without extra paragraph spacing."
        },
        {
          "element": "Horizontal Rule",
          "sourceLine": "<hr>",
          "explanation": "Draws a full-width divider line."
        },
        {
          "element": "Preformatted Block",
          "sourceLine": "<pre>",
          "explanation": "Displays text in monospace with identical spacing."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Void Elements",
        "description": "<br> and <hr> are void (empty) tags. They do not have closing counterparts like </br> or </hr> in standard HTML."
      },
      {
        "category": "attributes",
        "title": "Deprecated Attributes in HTML5",
        "description": "bgcolor and the <font> tag are deprecated. In viva examinations, mention that CSS background-color and font-family are the modern replacements."
      },
      {
        "category": "common_mistakes",
        "title": "Color Contrast Trap",
        "description": "In the lab manual code, font color is set to blue on top of a blue background, which makes the text low contrast. Be prepared to explain this to the examiner."
      },
      {
        "category": "pro_tips",
        "title": "Heading Order Semantics",
        "description": "Always remember H1 is largest and H6 is smallest. Headings should strictly represent content structure, not just visual size."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the difference between <b> and <strong> in HTML?",
        "answer": "<b> is a presentational tag that only applies visual bold weight, whereas <strong> is a semantic tag that indicates strong importance or urgency for accessibility tools like screen readers."
      },
      {
        "question": "What is an empty or void tag in HTML? Give examples.",
        "answer": "An empty (void) tag is an element that cannot have any child nodes or text content and does not have an end tag. Examples include <br>, <hr>, <img>, and <input>."
      },
      {
        "question": "Why is the <pre> tag useful?",
        "answer": "Browsers normally collapse multiple consecutive whitespace characters and ignore newlines. The <pre> tag preserves all spaces, tabs, and line breaks exactly as typed in the source code."
      },
      {
        "question": "Why are the <font> tag and bgcolor attribute considered deprecated?",
        "answer": "HTML is meant for document structure and content semantics, while presentation and visual styling should be handled exclusively by CSS. Separation of concerns improves maintainability and accessibility."
      },
      {
        "question": "How many heading levels exist in HTML?",
        "answer": "There are six heading levels: <h1> (most important / largest) through <h6> (least important / smallest)."
      }
    ]
  },
  {
    "id": 2,
    "programNumber": 2,
    "title": "HTML document containing ordered lists, unordered lists, nested lists, and an image",
    "pdfQuestion": "2. Create an HTML document which consists of:\n(a) Ordered List\n(b) Unordered List\n(c) Nested List\n(d) Image",
    "shortDescription": "Demonstrates ordered lists (<ol>), unordered bulleted lists (<ul>), hierarchical nested lists, and image insertion (<img>).",
    "technologies": [
      "HTML"
    ],
    "previewType": "html",
    "originalCode": "<html> \n<head> \n<title>HTML Lists and Image Example</title> \n</head> \n<body> \n<h1>HTML List and Image Example</h1> \n<!-- Ordered List --> \n<h2>Ordered List</h2> \n<ol> \n<li>B.Com</li> \n<li>B.Sc.,</li> \n<li>BCA</li> \n<li>BBA</li> \n</ol> \n<!-- Unordered List --> \n<h2>Unordered List</h2> \n<ul> \n<li>B.Com</li> \n<li>B.Sc.,</li> \n<li>BCA</li> \n<li>BBA</li> \n</ul> \n<!-- Nested List --> \n<h2>Nested List</h2> \n<ul> \n<li>B.Sc., \n<ul> \n<li>Science Wing</li> \n<li>Life Sceince Wing</li> \n</ul> \n</li> \n<li>B.Sc., \n<ol> \n<li>Mathematics</li> \n<li>Pyhsics</li> \n<li>Electronics</li> \n<li>Statistics</li> \n<li>Computer Science</li> \n</ol> \n</li> \n</ul> \n<!-- Image --> \n<h2>Image Example</h2> \n<img src=\"URL\" alt=\"Sample Image\"> \n</body> \n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\"> \n<head> \n  <meta charset=\"UTF-8\">\n  <title>HTML Lists and Image Example</title> \n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      margin: 24px;\n      line-height: 1.6;\n      color: #1e293b;\n    }\n    h1 { color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }\n    h2 { color: #2563eb; margin-top: 20px; }\n    ol, ul { padding-left: 24px; }\n    .demo-img {\n      border: 1px solid #cbd5e1;\n      border-radius: 8px;\n      padding: 4px;\n      background: #f8fafc;\n      max-width: 260px;\n      display: block;\n      margin-top: 10px;\n    }\n  </style>\n</head> \n<body> \n  <h1>HTML List and Image Example</h1> \n\n  <!-- Ordered List --> \n  <h2>Ordered List</h2> \n  <ol> \n    <li>B.Com</li> \n    <li>B.Sc.</li> \n    <li>BCA</li> \n    <li>BBA</li> \n  </ol> \n\n  <!-- Unordered List --> \n  <h2>Unordered List</h2> \n  <ul> \n    <li>B.Com</li> \n    <li>B.Sc.</li> \n    <li>BCA</li> \n    <li>BBA</li> \n  </ul> \n\n  <!-- Nested List --> \n  <h2>Nested List</h2> \n  <ul> \n    <li>B.Sc.\n      <ul> \n        <li>Science Wing</li> \n        <li>Life Science Wing</li> \n      </ul> \n    </li> \n    <li>B.Sc. Specializations\n      <ol> \n        <li>Mathematics</li> \n        <li>Physics</li> \n        <li>Electronics</li> \n        <li>Statistics</li> \n        <li>Computer Science</li> \n      </ol> \n    </li> \n  </ul> \n\n  <!-- Image with working educational SVG graphic --> \n  <h2>Image Example</h2> \n  <svg class=\"demo-img\" width=\"260\" height=\"140\" viewBox=\"0 0 260 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect width=\"260\" height=\"140\" rx=\"6\" fill=\"#EFF6FF\"/>\n    <rect x=\"20\" y=\"20\" width=\"220\" height=\"100\" rx=\"4\" fill=\"#DBEAFE\" stroke=\"#3B82F6\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n    <circle cx=\"70\" cy=\"65\" r=\"18\" fill=\"#93C5FD\"/>\n    <path d=\"M50 100 L95 65 L130 90 L160 55 L210 100 Z\" fill=\"#3B82F6\" fill-opacity=\"0.8\"/>\n    <text x=\"130\" y=\"122\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#1D4ED8\" text-anchor=\"middle\" font-weight=\"bold\">Sample Image Graphic</text>\n  </svg>\n</body> \n</html>",
    "correctionExplanation": "In the lab manual code:\n1. The image tag uses src=\"URL\" as a placeholder. In a real exam or computer lab, this must be replaced with an actual image filename or relative path (e.g. \"college_logo.jpg\") or the browser will show a broken image box with the alt text.\n2. Typos in original PDF: \"Life Sceince\" instead of \"Life Science\", and \"Pyhsics\" instead of \"Physics\". In your exam, write the correct spelling.\n3. Proper nesting syntax requires child lists (<ol> or <ul>) to be enclosed inside the parent <li> tag, which the original code correctly does!",
    "objective": {
      "whatItDoes": "Creates an academic degree directory showing ordered numerical listings, bulleted unordered items, multilevel nested sub-lists mixing both types, and an embedded image.",
      "whyWritten": "To test list structuring techniques, correct nesting inside list items (<li>), and the <img> tag attributes.",
      "conceptsDemonstrated": "<ol> numbering, <ul> bullet markers, hierarchical sub-item nesting, <img> tag with src and alt attributes.",
      "expectedOutputSummary": "A numbered list from 1 to 4, a disc-bulleted list, a nested outline showing sub-bullets and sub-numbers, and an image representation.",
      "problemSolved": "Students need to understand how to present structured sequential, non-sequential, and hierarchical data, as well as embedding visual media into HTML pages.",
      "overallMechanism": "The browser renders list containers (<ol>, <ul>, <dl>) by computing automatic markers (numbers, letters, roman numerals, bullets) and left indents for each child item (<li>, <dt>, <dd>), while fetching and rendering images via <img>.",
      "prerequisitesToUnderstand": "Basic HTML document structure (html, head, body) and differences between block vs inline media."
    },
    "conceptsUsed": [
      {
        "name": "Ordered Lists (<ol>)",
        "description": "Renders items prefixed by sequential numbers (1, 2, 3...) or letters/Roman numerals depending on the type attribute."
      },
      {
        "name": "Unordered Lists (<ul>)",
        "description": "Renders items prefixed by bullet glyphs (discs, circles, or squares)."
      },
      {
        "name": "List Items (<li>)",
        "description": "Represents individual elements within both ordered and unordered lists."
      },
      {
        "name": "List Nesting Rules",
        "description": "Sub-lists must always be placed directly inside a parent <li> tag before closing the </li>."
      },
      {
        "name": "Image Embedding (<img>)",
        "description": "A void tag requiring src (source path/URL) and alt (alternative text for accessibility and broken links)."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-4",
        "title": "Document Root, Head, and Title Initialization",
        "codeSnippet": "<html>\n<head>\n<title>HTML Lists and Image Example</title>\n</head>",
        "whatItDoes": "Opens HTML document, establishes metadata container, and sets browser tab title to \"HTML Lists and Image Example\".",
        "whyUsed": "Provides the required valid document envelope.",
        "howItWorks": "Browser creates the document root and window header.",
        "connectionToSurrounding": "Precedes the visible <body> section.",
        "examRelevance": "Every lab document must start with proper root and head sections."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 5",
        "title": "Open Document Body",
        "codeSnippet": "<body>",
        "whatItDoes": "Opens the canvas for visible elements including headings, lists, and images.",
        "whyUsed": "Container for all page layout elements.",
        "howItWorks": "Initializes the default user-agent flow container.",
        "connectionToSurrounding": "Contains all ordered lists, unordered lists, definition lists, and images.",
        "examRelevance": "Always matches with closing </body> at end of file."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 6-12",
        "title": "Ordered List with Default Numbers (1, 2, 3)",
        "codeSnippet": "<h2>Ordered List (Default - Numbers)</h2>\n<ol>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Cherry</li>\n</ol>",
        "whatItDoes": "Renders an ordered numbered list starting at 1 with items Apple, Banana, Cherry.",
        "whyUsed": "Demonstrates default numerical sequencing in HTML.",
        "howItWorks": "<ol> defaults to type=\"1\"; increments an internal counter for each <li>.",
        "connectionToSurrounding": "Introduces the first list type requested in syllabus.",
        "examRelevance": "Default type for <ol> is arabic numerals (\"1\")."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 13-19",
        "title": "Ordered List with Capital Letters (A, B, C)",
        "codeSnippet": "<h2>Ordered List (Uppercase Letters)</h2>\n<ol type=\"A\">\n  <li>Red</li>\n  <li>Green</li>\n  <li>Blue</li>\n</ol>",
        "whatItDoes": "Renders an ordered sequence using capital alphabetic letters (A. Red, B. Green, C. Blue).",
        "whyUsed": "Demonstrates modifying list counter numbering system using type=\"A\".",
        "howItWorks": "Browser calculates alphabetical indices A, B, C... for list markers.",
        "connectionToSurrounding": "Follows numeric list to show alternative ordering attributes.",
        "examRelevance": "Valid type values for <ol>: \"1\", \"A\", \"a\", \"I\", \"i\"."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 20-26",
        "title": "Ordered List with Lowercase Roman Numerals (i, ii, iii)",
        "codeSnippet": "<h2>Ordered List (Lowercase Roman Numerals)</h2>\n<ol type=\"i\">\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>",
        "whatItDoes": "Renders an ordered sequence using lowercase roman numerals (i, ii, iii).",
        "whyUsed": "Demonstrates roman numeral numbering frequently used in academic outlines.",
        "howItWorks": "Browser formats the ordinal number of each <li> into lowercase Roman format.",
        "connectionToSurrounding": "Completes the ordered list demonstrations.",
        "examRelevance": "Uppercase Roman uses type=\"I\", lowercase Roman uses type=\"i\"."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 27-33",
        "title": "Unordered List with Default Disc Bullets",
        "codeSnippet": "<h2>Unordered List (Default - Disc)</h2>\n<ul>\n  <li>Dog</li>\n  <li>Cat</li>\n  <li>Elephant</li>\n</ul>",
        "whatItDoes": "Renders an unordered list using solid black filled circular bullets (disc).",
        "whyUsed": "Used for collections of items where order does not convey precedence or chronology.",
        "howItWorks": "Browser renders filled circle glyph (•) and indents item text.",
        "connectionToSurrounding": "Transitions from ordered to unordered list styling.",
        "examRelevance": "Default bullet type for <ul> is \"disc\"."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 34-40",
        "title": "Unordered List with Square Bullets",
        "codeSnippet": "<h2>Unordered List (Square Bullets)</h2>\n<ul type=\"square\">\n  <li>Car</li>\n  <li>Bus</li>\n  <li>Train</li>\n</ul>",
        "whatItDoes": "Renders an unordered list with filled square bullets (■).",
        "whyUsed": "Demonstrates the type=\"square\" attribute on <ul>.",
        "howItWorks": "Changes bullet marker rendering from circular disc to square.",
        "connectionToSurrounding": "Contrasts with default disc styling.",
        "examRelevance": "Valid type values for <ul>: \"disc\", \"circle\", \"square\"."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 41-47",
        "title": "Unordered List with Hollow Circle Bullets",
        "codeSnippet": "<h2>Unordered List (Circle Bullets)</h2>\n<ul type=\"circle\">\n  <li>Tea</li>\n  <li>Coffee</li>\n  <li>Milk</li>\n</ul>",
        "whatItDoes": "Renders an unordered list using hollow circular outline bullets (○).",
        "whyUsed": "Demonstrates the type=\"circle\" bullet style.",
        "howItWorks": "Browser renders an unfilled stroke circle marker before each item.",
        "connectionToSurrounding": "Completes the three native bullet styles of HTML.",
        "examRelevance": "CSS equivalent: list-style-type: circle."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Lines 48-60",
        "title": "Nested List (Hierarchical Menu)",
        "codeSnippet": "<h2>Nested List</h2>\n<ol>\n  <li>Fruits\n    <ul>\n      <li>Mango</li>\n      <li>Orange</li>\n    </ul>\n  </li>\n  <li>Vegetables\n    <ul>\n      <li>Potato</li>\n      <li>Tomato</li>\n    </ul>\n  </li>\n</ol>",
        "whatItDoes": "Creates a hierarchical two-level outline with an outer ordered list containing inner unordered sublists.",
        "whyUsed": "Essential for representing categories and sub-items, breadcrumbs, and sitemaps.",
        "howItWorks": "The inner <ul> is nested strictly inside the parent <li> before closing </li>.",
        "connectionToSurrounding": "Combines ordered and unordered concepts together.",
        "examRelevance": "Examiner trap: Inner list MUST be inside the parent <li> tag, never directly between <li> tags."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Lines 61-72",
        "title": "Definition List (<dl>, <dt>, <dd>)",
        "codeSnippet": "<h2>Definition List</h2>\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n</dl>",
        "whatItDoes": "Creates a glossary list mapping terms (<dt>) to their descriptions (<dd>).",
        "whyUsed": "Ideal for dictionaries, metadata lists, and FAQ sections.",
        "howItWorks": "Browser indents <dd> automatically beneath <dt> without bullet markers.",
        "connectionToSurrounding": "Demonstrates the third major HTML list type alongside <ol> and <ul>.",
        "examRelevance": "<dl> = Definition List, <dt> = Definition Term, <dd> = Definition Description."
      },
      {
        "stepNumber": 11,
        "lineNumberRange": "Lines 73-77",
        "title": "Image Embedding with Attributes",
        "codeSnippet": "<h2>Image Example</h2>\n<img src=\"flower.jpg\" alt=\"Flower Image\" width=\"200\" height=\"150\">",
        "whatItDoes": "Embeds an external graphic file \"flower.jpg\" with fallback description and dimensions 200x150 pixels.",
        "whyUsed": "Satisfies syllabus requirement for image display alongside lists.",
        "howItWorks": "Browser sends HTTP request for flower.jpg, reserves a 200x150px box, and paints bitmap.",
        "connectionToSurrounding": "Placed after all lists as a standalone visual element.",
        "examRelevance": "Examiners always ask: What does the \"alt\" attribute do? Displays text if image fails to load and assists screen readers."
      },
      {
        "stepNumber": 12,
        "lineNumberRange": "Lines 78-79",
        "title": "Close Document Body and HTML Root",
        "codeSnippet": "</body>\n</html>",
        "whatItDoes": "Closes the body canvas and terminates the HTML file.",
        "whyUsed": "Completes proper well-formed document structure.",
        "howItWorks": "Finalizes document rendering pipeline.",
        "connectionToSurrounding": "Closes tags opened on lines 5 and 1.",
        "examRelevance": "Ensures DOM validator passes."
      }
    ],
    "executionFlow": [
      "1. Browser parses heading \"HTML List and Image Example\".",
      "2. Encounters <ol>, initializes list counter at 1, and renders each <li> with an incrementing number.",
      "3. Encounters <ul>, renders bulleted list items.",
      "4. Parses nested <ul>: opens first <li> (\"B.Sc.\"), encounters sub-level <ul>, indents by default margin and renders sub-bullets (circle marker), then closes </li>.",
      "5. Parses second <li> containing a sub <ol>, rendering numbered items 1 through 5.",
      "6. Reaches <img> tag, checks src attribute, and renders image or alt fallback.",
      "7. Closes </body> and </html>."
    ],
    "outputExplanation": {
      "description": "The page displays a clean academic curriculum layout: a numbered sequence 1-4 for degree names, a bulleted list of degrees, a multi-tier indented breakdown for B.Sc. wings and science subjects, followed by an image.",
      "elementsBreakdown": [
        {
          "element": "Numbered List 1 to 4",
          "sourceLine": "<ol> <li>...</li> </ol>",
          "explanation": "Displays B.Com, B.Sc., BCA, BBA."
        },
        {
          "element": "Bulleted List",
          "sourceLine": "<ul> <li>...</li> </ul>",
          "explanation": "Displays same degrees with disc bullets."
        },
        {
          "element": "Sub-bullet items",
          "sourceLine": "<ul> <li>Science Wing</li> ... </ul>",
          "explanation": "Indented sub-list with hollow circle bullets."
        },
        {
          "element": "Sub-numbered items 1 to 5",
          "sourceLine": "<ol> <li>Mathematics</li> ... </ol>",
          "explanation": "Indented numbers for the 5 subjects."
        },
        {
          "element": "Sample Image / Alt text",
          "sourceLine": "<img src=\"URL\" alt=\"Sample Image\">",
          "explanation": "Renders image or \"Sample Image\" text box."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Correct List Nesting Structure",
        "description": "Never place <ol> or <ul> directly inside another <ol> or <ul>. The child list MUST be placed inside a parent <li> tag."
      },
      {
        "category": "attributes",
        "title": "Essential <img> Attributes",
        "description": "src specifies source URL/file path; alt gives textual replacement; width and height prevent cumulative layout shift."
      },
      {
        "category": "common_mistakes",
        "title": "Literal \"URL\" Placeholder in Exams",
        "description": "In your college exam, if you do not have an internet connection or local image file, write a real relative filename like logo.jpg rather than literal text \"URL\"."
      },
      {
        "category": "pro_tips",
        "title": "Starting Number in <ol>",
        "description": "You can start an ordered list from any number using <ol start=\"5\"> or reverse it using <ol reversed>."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the default bullet type for an unordered list, and how can it be changed?",
        "answer": "The default bullet type is disc (filled circle). It can be changed using the HTML type attribute (circle, square, disc) or using the CSS property list-style-type."
      },
      {
        "question": "What are the two mandatory attributes of the <img> tag?",
        "answer": "src (source) is required to specify the location of the image file, and alt (alternative text) is required for accessibility and fallback display."
      },
      {
        "question": "Can an ordered list use letters instead of numbers? How?",
        "answer": "Yes, by setting the type attribute: <ol type=\"A\"> for uppercase letters, <ol type=\"a\"> for lowercase letters, <ol type=\"I\"> for Roman numerals, or <ol type=\"i\"> for small Roman numerals."
      },
      {
        "question": "What is a description list in HTML?",
        "answer": "A description list is defined by <dl>, containing terms (<dt>) and their corresponding descriptions (<dd>), often used for glossaries or metadata pairs."
      },
      {
        "question": "What happens if the image path specified in src is invalid or not found?",
        "answer": "The browser displays a broken image icon alongside the string provided in the alt attribute."
      }
    ]
  },
  {
    "id": 3,
    "programNumber": 3,
    "title": "HTML table with four rows, five columns, and an image",
    "pdfQuestion": "3. Create a Table with four rows and five columns. Place an image in one column.",
    "shortDescription": "Constructs an HTML data table with 4 rows and 5 columns, including headers (<th>), data cells (<td>), internal CSS borders, and an embedded image in row 1, col 5.",
    "technologies": [
      "HTML",
      "CSS"
    ],
    "previewType": "html",
    "originalCode": "<html> \n<head> \n<title>HTML Table with Image</title> \n<style> \ntable \n{ \nwidth: 80%; \nborder-collapse: collapse; \nmargin: 20px 0; \n} \nth, td \n{ \nborder: 1px solid #333; \npadding: 10px; \ntext-align: center; \n} \nimg \n{ \nmax-width: 100px; \nheight: auto; \n} </style> \n</head> \n<body> \n<h1>Table with Image</h1> \n<table> \n<tr> \n<th>Header 1</th> \n<th>Header 2</th> \n<th>Header 3</th> \n<th>Header 4</th> \n<th>Header 5</th> \n</tr> \n<tr> \n<td>Row 1, Col 1</td> \n<td>Row 1, Col 2</td> \n<td>Row 1, Col 3</td> \n<td>Row 1, Col 4</td> \n<td><img src=\"URL\" alt=\"Sample Image\"></td> \n</tr> \n<tr> \n<td>Row 2, Col 1</td> \n<td>Row 2, Col 2</td> \n<td>Row 2, Col 3</td> \n<td>Row 2, Col 4</td> \n<td>Row 2, Col 5</td> \n</tr> \n<tr> \n<td>Row 3, Col 1</td> \n<td>Row 3, Col 2</td> \n<td>Row 3, Col 3</td> \n<td>Row 3, Col 4</td> \n<td>Row 3, Col 5</td> \n</tr> \n</table> \n</body> \n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\"> \n<head> \n  <meta charset=\"UTF-8\">\n  <title>HTML Table with Image</title> \n  <style> \n    body {\n      font-family: Arial, sans-serif;\n      margin: 24px;\n    }\n    table { \n      width: 85%; \n      border-collapse: collapse; \n      margin: 20px 0; \n      box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n    } \n    th, td { \n      border: 1px solid #333; \n      padding: 12px; \n      text-align: center; \n    } \n    th {\n      background-color: #f1f5f9;\n      font-weight: 600;\n    }\n    img { \n      max-width: 90px; \n      height: auto; \n      display: inline-block;\n    } \n  </style> \n</head> \n<body> \n  <h1>Table with Image</h1> \n  <table> \n    <tr> \n      <th>Header 1</th> \n      <th>Header 2</th> \n      <th>Header 3</th> \n      <th>Header 4</th> \n      <th>Header 5</th> \n    </tr> \n    <tr> \n      <td>Row 1, Col 1</td> \n      <td>Row 1, Col 2</td> \n      <td>Row 1, Col 3</td> \n      <td>Row 1, Col 4</td> \n      <td>\n        <!-- Clean SVG avatar graphic representing the embedded image -->\n        <svg width=\"60\" height=\"40\" viewBox=\"0 0 60 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"60\" height=\"40\" rx=\"4\" fill=\"#e0e7ff\"/>\n          <circle cx=\"30\" cy=\"16\" r=\"8\" fill=\"#6366f1\"/>\n          <path d=\"M16 34 C16 26 44 26 44 34\" fill=\"#4f46e5\"/>\n        </svg>\n      </td> \n    </tr> \n    <tr> \n      <td>Row 2, Col 1</td> \n      <td>Row 2, Col 2</td> \n      <td>Row 2, Col 3</td> \n      <td>Row 2, Col 4</td> \n      <td>Row 2, Col 5</td> \n    </tr> \n    <tr> \n      <td>Row 3, Col 1</td> \n      <td>Row 3, Col 2</td> \n      <td>Row 3, Col 3</td> \n      <td>Row 3, Col 4</td> \n      <td>Row 3, Col 5</td> \n    </tr> \n  </table> \n</body> \n</html>",
    "correctionExplanation": "In the lab manual code:\n1. The table contains exactly 4 rows (1 header row + 3 data rows = 4 total rows) and 5 columns (Header 1 through Header 5), meeting the exam question requirement perfectly.\n2. The image uses src=\"URL\". In a live exam, replacing \"URL\" with a working local image file ensures the cell displays an actual picture rather than the broken alt icon.\n3. The CSS includes border-collapse: collapse, which merges double borders into single solid lines—a key concept examiners test!",
    "objective": {
      "whatItDoes": "Constructs an HTML table with 4 rows and 5 columns, styling it with internal CSS for clean cell borders and centering, and placing an image inside the fifth column of the second row.",
      "whyWritten": "To test understanding of tabular layout in HTML, row/column calculation, cell padding, CSS border-collapse, and placing media inside table cells.",
      "conceptsDemonstrated": "<table>, <tr>, <th>, <td>, CSS border-collapse, padding, text-align, img max-width inside table cells.",
      "expectedOutputSummary": "A structured 4×5 grid with a bold header row, bordered cells with centered text, and an image icon nestled inside cell (Row 1, Col 5).",
      "problemSolved": "Tabular data requires strict row-and-column alignment. This program demonstrates constructing a multi-row, multi-column grid containing text headers, data cells, and embedded media.",
      "overallMechanism": "The HTML table model organizes data into a <table> wrapper with child <tr> (table row) elements containing <th> (header cell) and <td> (data cell) nodes, calculating row heights and column widths automatically.",
      "prerequisitesToUnderstand": "Understanding 2D grid structures (rows x columns) and HTML element nesting."
    },
    "conceptsUsed": [
      {
        "name": "Table Structure",
        "description": "<table> encompasses all table data, <tr> creates horizontal rows, <th> defines header cells, and <td> defines data cells."
      },
      {
        "name": "Row & Column Geometry",
        "description": "Total rows = number of <tr> tags (1 header + 3 data rows = 4). Columns = number of cell tags inside each row (5)."
      },
      {
        "name": "border-collapse: collapse",
        "description": "Eliminates the default double-border spacing between adjacent table cells."
      },
      {
        "name": "Media in Data Cells",
        "description": "Any HTML element (including images, forms, buttons) can be nested inside a <td> cell."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-4",
        "title": "Document Root, Head, and Title",
        "codeSnippet": "<html>\n<head>\n<title>HTML Table with Image</title>",
        "whatItDoes": "Initializes the HTML document and sets the page title.",
        "whyUsed": "Standard document envelope.",
        "howItWorks": "Browser loads the head container.",
        "connectionToSurrounding": "Encloses embedded styles and document title.",
        "examRelevance": "Always include meaningful titles in lab submissions."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 4-18",
        "title": "Internal CSS Table Styling Rules",
        "codeSnippet": "<style>\ntable {\n  border-collapse: collapse;\n  width: 80%;\n  margin: 20px auto;\n}\nth, td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: center;\n}\nth {\n  background-color: #f2f2f2;\n}\n</style>\n</head>",
        "whatItDoes": "Applies CSS table formatting: borders collapsed into a single grid, centered 80% width, 8px cell padding, centered text alignment, and light gray header background.",
        "whyUsed": "Eliminates ugly default double borders and provides readable spacing.",
        "howItWorks": "border-collapse: collapse unites adjacent cell borders into single lines.",
        "connectionToSurrounding": "Styles all table tags rendered inside the body below.",
        "examRelevance": "Viva question: What does border-collapse: collapse do? It merges double cell borders into a single clean border."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 19-22",
        "title": "Open Body and Table Header",
        "codeSnippet": "<body>\n<h2 align=\"center\">Four Rows by Five Columns Table</h2>\n<table>",
        "whatItDoes": "Opens body, outputs centered heading, and opens the <table> container.",
        "whyUsed": "Initializes the 2D grid structure.",
        "howItWorks": "Browser creates an HTMLTableElement DOM node.",
        "connectionToSurrounding": "Wraps all subsequent rows and cells.",
        "examRelevance": "<table> is the master parent tag for tabular data."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 23-32",
        "title": "Row 1: Header Row (5 Columns with <th>)",
        "codeSnippet": "<tr>\n  <th>Header 1</th>\n  <th>Header 2</th>\n  <th>Header 3</th>\n  <th>Header 4</th>\n  <th>Header 5</th>\n</tr>",
        "whatItDoes": "Defines the first row containing five bold, centered column headings.",
        "whyUsed": "Identifies the data purpose for each vertical column.",
        "howItWorks": "<tr> creates a row; <th> renders bold centered header cells.",
        "connectionToSurrounding": "Establishes the 5-column grid dimension.",
        "examRelevance": "Difference between <th> and <td>: <th> is bold and centered by default; <td> is normal and left-aligned."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 33-39",
        "title": "Row 2: Data Row with Embedded Image in Col 5",
        "codeSnippet": "<tr>\n  <td>Row 1, Col 1</td>\n  <td>Row 1, Col 2</td>\n  <td>Row 1, Col 3</td>\n  <td>Row 1, Col 4</td>\n  <td><img src=\"URL\" alt=\"Sample Image\" width=\"50\" height=\"50\"></td>\n</tr>",
        "whatItDoes": "Renders second row with four text cells and an embedded 50x50 pixel image in the fifth column.",
        "whyUsed": "Fulfills the specific lab question requirement: \"an image inside one cell\".",
        "howItWorks": "<td> allows any block or inline HTML element, including <img>, to be nested inside.",
        "connectionToSurrounding": "First data row beneath headers.",
        "examRelevance": "Examiners check if image dimensions are constrained so the table does not stretch distort."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 40-46",
        "title": "Row 3: Data Row (5 Columns)",
        "codeSnippet": "<tr>\n  <td>Row 2, Col 1</td>\n  <td>Row 2, Col 2</td>\n  <td>Row 2, Col 3</td>\n  <td>Row 2, Col 4</td>\n  <td>Row 2, Col 5</td>\n</tr>",
        "whatItDoes": "Creates the third table row containing five textual data cells.",
        "whyUsed": "Satisfies 4-row grid requirement.",
        "howItWorks": "Browser aligns cell contents beneath corresponding headers.",
        "connectionToSurrounding": "Middle row in data grid.",
        "examRelevance": "All rows in standard tables should match the column count to prevent jagged layouts."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 47-53",
        "title": "Row 4: Data Row (5 Columns)",
        "codeSnippet": "<tr>\n  <td>Row 3, Col 1</td>\n  <td>Row 3, Col 2</td>\n  <td>Row 3, Col 3</td>\n  <td>Row 3, Col 4</td>\n  <td>Row 3, Col 5</td>\n</tr>",
        "whatItDoes": "Creates the fourth and final row containing five data cells.",
        "whyUsed": "Completes the 4 rows x 5 columns requirement.",
        "howItWorks": "Browser finishes grid layout calculation.",
        "connectionToSurrounding": "Final row before table closure.",
        "examRelevance": "Total grid cells: 4 rows * 5 columns = 20 cells."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 54-56",
        "title": "Close Table, Body, and HTML Root",
        "codeSnippet": "</table>\n</body>\n</html>",
        "whatItDoes": "Closes table container, body, and HTML document.",
        "whyUsed": "Clean structural termination.",
        "howItWorks": "Finalizes rendering.",
        "connectionToSurrounding": "Closes tags opened on lines 22, 19, and 1.",
        "examRelevance": "Ensure every <table> has a closing </table>."
      }
    ],
    "executionFlow": [
      "1. Browser loads internal stylesheet applying border and collapse rules.",
      "2. Renders <h1> \"Table with Image\".",
      "3. Calculates 80% table container width and creates Row 1 with 5 <th> cells.",
      "4. Creates Row 2: first 4 cells receive text, fifth cell renders <img>.",
      "5. Creates Row 3 and Row 4 with 5 text cells each.",
      "6. Applies borders and aligns text center according to CSS rules."
    ],
    "outputExplanation": {
      "description": "A clean, centered, four-row by five-column table with a dark outer border and cell borders. The top row features bold headings, while Row 1, Col 5 features an image or sample graphic.",
      "elementsBreakdown": [
        {
          "element": "Table Grid",
          "sourceLine": "<table>",
          "explanation": "80% width container with border-collapse."
        },
        {
          "element": "5 Column Headers",
          "sourceLine": "<th>Header 1</th> to <th>Header 5</th>",
          "explanation": "Bold column identifiers."
        },
        {
          "element": "Column 5 Image",
          "sourceLine": "<td><img src=\"URL\" alt=\"Sample Image\"></td>",
          "explanation": "Picture nested inside the table cell."
        },
        {
          "element": "15 Total Data Cells",
          "sourceLine": "<td>...</td>",
          "explanation": "Grid content aligned in 3 data rows."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Core Table Tags",
        "description": "<table> (wrapper), <tr> (table row), <th> (table header cell), <td> (table data cell)."
      },
      {
        "category": "attributes",
        "title": "Spanning Attributes (colspan and rowspan)",
        "description": "colspan merges cells horizontally across columns; rowspan merges cells vertically across rows."
      },
      {
        "category": "common_mistakes",
        "title": "Mismatched Cell Counts",
        "description": "If one row has 5 cells and another has 4 without a colspan, the table borders will look uneven or broken."
      },
      {
        "category": "pro_tips",
        "title": "Semantic Table Sections",
        "description": "In advanced HTML, tables can be divided into <thead>, <tbody>, and <tfoot> for better accessibility and print paging."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the function of the border-collapse CSS property in tables?",
        "answer": "border-collapse: collapse merges adjacent cell borders into a single clean border line, eliminating the default double-border spacing of HTML tables."
      },
      {
        "question": "What is the difference between <th> and <td>?",
        "answer": "<th> is a table header cell (rendered in bold and centered by default), while <td> is a standard data cell (rendered in regular font and left-aligned by default)."
      },
      {
        "question": "How do you span a table cell across multiple columns or rows?",
        "answer": "Use the colspan attribute to span multiple columns (e.g., <td colspan=\"2\">) and the rowspan attribute to span multiple rows (e.g., <td rowspan=\"3\">)."
      },
      {
        "question": "What is the purpose of the <caption> tag in HTML tables?",
        "answer": "The <caption> tag specifies a title or explanation for the table, placed immediately after the opening <table> tag, which is useful for screen readers."
      },
      {
        "question": "Can you place interactive elements like buttons, inputs, or images inside a <td>?",
        "answer": "Yes, <td> cells are container elements that can hold any valid HTML element, including text, links, forms, images, and even nested tables."
      }
    ]
  },
  {
    "id": 4,
    "programNumber": 4,
    "title": "Aligning images using the HTML table tag",
    "pdfQuestion": "4. Using “table” tag, align the images as follows:",
    "shortDescription": "Arranges images in a 3-row grid using an HTML table with cellspacing, cellpadding, center alignment, and a spanned header \"Buy 'Tweeties' online\" across 2 columns.",
    "technologies": [
      "HTML"
    ],
    "previewType": "table-images",
    "originalCode": "<html>\n<head> \n<title>p4</title> \n</head> \n<body>\n<table cellspacing=6 cellpadding=6 align=\"center\"> \n<tr> \n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\blue hills.jpg\" height=\"40\" width=\"70\"> \n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\sunset.jpg\" height=\"40\" width=\"70\"> \n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\blue hills.jpg\" height=\"40\" width=\"70\">\n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\sunset.jpg\" height=\"40\" width=\"70\">\n<tr> \n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\blue hills.jpg\" height=\"40\" width=\"70\"> <td colspan=2><h1>Buy \"Tweeties\" online\n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\sunset.jpg\" height=\"40\" width=\"70\"> \n<tr> \n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\blue hills.jpg\" height=\"40\" width=\"70\"> <td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\sunset.jpg\" height=\"40\" width=\"70\">\n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\blue hills.jpg\" height=\"40\" width=\"70\"> \n<td><img src=\"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\sunset.jpg\" height=\"40\" width=\"70\">\n</table>\n</body> \n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head> \n  <meta charset=\"UTF-8\">\n  <title>Aligning Images with Table (Standard HTML5)</title> \n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: 30px;\n      background: #fafafa;\n    }\n    table {\n      border-collapse: separate;\n      border-spacing: 12px; /* Replaces legacy cellspacing */\n      background: #ffffff;\n      padding: 16px;\n      border-radius: 8px;\n      box-shadow: 0 1px 4px rgba(0,0,0,0.08);\n    }\n    td {\n      padding: 6px; /* Replaces legacy cellpadding */\n      text-align: center;\n      vertical-align: middle;\n    }\n    .thumb {\n      width: 70px;\n      height: 40px;\n      object-fit: cover;\n      border-radius: 4px;\n      border: 1px solid #d1d5db;\n      display: block;\n    }\n    h1 {\n      font-size: 24px;\n      color: #111827;\n      margin: 0;\n      white-space: nowrap;\n    }\n  </style>\n</head> \n<body>\n  <table> \n    <!-- Row 1: 4 alternating images -->\n    <tr> \n      <td><img src=\"images/blue_hills.jpg\" alt=\"Blue Hills\" class=\"thumb\"></td>\n      <td><img src=\"images/sunset.jpg\" alt=\"Sunset\" class=\"thumb\"></td>\n      <td><img src=\"images/blue_hills.jpg\" alt=\"Blue Hills\" class=\"thumb\"></td>\n      <td><img src=\"images/sunset.jpg\" alt=\"Sunset\" class=\"thumb\"></td>\n    </tr>\n    <!-- Row 2: Image, Spanned H1 across 2 cols, Image -->\n    <tr> \n      <td><img src=\"images/blue_hills.jpg\" alt=\"Blue Hills\" class=\"thumb\"></td>\n      <td colspan=\"2\"><h1>Buy \"Tweeties\" online</h1></td>\n      <td><img src=\"images/sunset.jpg\" alt=\"Sunset\" class=\"thumb\"></td>\n    </tr>\n    <!-- Row 3: 4 alternating images -->\n    <tr> \n      <td><img src=\"images/blue_hills.jpg\" alt=\"Blue Hills\" class=\"thumb\"></td>\n      <td><img src=\"images/sunset.jpg\" alt=\"Sunset\" class=\"thumb\"></td>\n      <td><img src=\"images/blue_hills.jpg\" alt=\"Blue Hills\" class=\"thumb\"></td>\n      <td><img src=\"images/sunset.jpg\" alt=\"Sunset\" class=\"thumb\"></td>\n    </tr>\n  </table>\n</body> \n</html>",
    "correctionExplanation": "Important observations regarding the lab manual source code:\n1. Windows XP Local Path: The original code points to \"C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\blue hills.jpg\" and \"sunset.jpg\". These are legacy Windows XP default sample picture paths. On modern computers (Windows 10/11, Mac, Linux) or web servers, these paths will fail and render broken image boxes.\n2. Unclosed <td> and <tr> tags: In the PDF code, several <td> tags lack matching </td> closing tags. In older HTML (HTML 3.2/4.01), <td> tags had optional closing tags. In modern HTML and XHTML, closing every tag is considered essential best practice.\n3. Obsolete Attributes: align=\"center\", cellspacing, and cellpadding are deprecated; CSS border-spacing and padding are the modern standards.\nIn our interactive live preview, we provide smart simulated graphics of Blue Hills and Sunset so you can see the exact intended table layout!",
    "objective": {
      "whatItDoes": "Arranges 10 image thumbnails around a central promotional heading (\"Buy 'Tweeties' online\") using an HTML table layout with cell spacing and column spanning.",
      "whyWritten": "To teach students how tables were used for visual page layouts before CSS Flexbox/Grid, specifically demonstrating colspan and cell spacing.",
      "conceptsDemonstrated": "Table layout geometry, colspan attribute, cellpadding and cellspacing attributes, centering tables, absolute file path limitations.",
      "expectedOutputSummary": "A 3×4 matrix where the top and bottom rows hold 4 small pictures each, while the middle row has a picture on each end with \"Buy 'Tweeties' online\" spanning the center 2 columns.",
      "problemSolved": "Before modern CSS Grid and Flexbox existed, web developers relied on borderless HTML tables to align multiple images into consistent galleries and matrices.",
      "overallMechanism": "The browser arranges images into an invisible rectangular table grid using cellpadding for internal cell buffer and cellspacing for gutters between image cells.",
      "prerequisitesToUnderstand": "Basic table structure (table, tr, td) and image tags (img src)."
    },
    "conceptsUsed": [
      {
        "name": "colspan Attribute",
        "description": "Merges 2 horizontal columns in Row 2 so the headline fits perfectly into the 4-column grid."
      },
      {
        "name": "cellspacing Attribute",
        "description": "Sets space (in pixels) between individual table cells."
      },
      {
        "name": "cellpadding Attribute",
        "description": "Sets padding (in pixels) between cell content and the cell border."
      },
      {
        "name": "align=\"center\"",
        "description": "Legacy attribute used to center the table on the browser page."
      },
      {
        "name": "Fixed Image Dimensions",
        "description": "Using width=\"70\" and height=\"40\" to create uniform rectangular thumbnails."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-5",
        "title": "Document Shell and Body Initialization",
        "codeSnippet": "<html>\n<head>\n<title>p4</title>\n</head>\n<body>",
        "whatItDoes": "Initializes HTML document structure with title \"p4\" and opens body canvas.",
        "whyUsed": "Base template for rendering browser markup.",
        "howItWorks": "Sets up DOM environment.",
        "connectionToSurrounding": "Precedes the layout table.",
        "examRelevance": "Standard HTML skeleton."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 6",
        "title": "Table Tag with Cellspacing and Cellpadding",
        "codeSnippet": "<table cellspacing=6 cellpadding=6 align=\"center\">",
        "whatItDoes": "Creates a centered table with 6px gap between cells (cellspacing) and 6px internal padding inside each cell (cellpadding).",
        "whyUsed": "Prevents adjacent images from touching and centers the photo gallery on screen.",
        "howItWorks": "cellspacing defines space between cell walls; cellpadding defines space between cell wall and cell contents.",
        "connectionToSurrounding": "Grid container enclosing all 3 rows of images.",
        "examRelevance": "Crucial viva distinction: cellpadding = interior padding; cellspacing = exterior spacing between cells."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 7-11",
        "title": "Row 1: Top Gallery Row (4 Images)",
        "codeSnippet": "<tr>\n<td><img src=\"pic1.jpg\" width=\"100\" height=\"100\"></td>\n<td><img src=\"pic2.jpg\" width=\"100\" height=\"100\"></td>\n<td><img src=\"pic3.jpg\" width=\"100\" height=\"100\"></td>\n<td><img src=\"pic4.jpg\" width=\"100\" height=\"100\"></td>",
        "whatItDoes": "Renders the first horizontal row containing four thumbnail images aligned side-by-side.",
        "whyUsed": "Demonstrates horizontal photo gallery row.",
        "howItWorks": "Each <td> positions an image into its own column cell.",
        "connectionToSurrounding": "First row of the multi-row image collage.",
        "examRelevance": "Hardcoded local absolute paths (e.g. C:\\Documents...) in original PDF fail on other computers; use relative paths."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 12-14",
        "title": "Row 2: Middle Gallery Row (2 Images)",
        "codeSnippet": "<tr>\n<td><img src=\"pic5.jpg\" width=\"100\" height=\"100\"></td>\n<td><img src=\"pic6.jpg\" width=\"100\" height=\"100\"></td>",
        "whatItDoes": "Opens second table row and aligns two images horizontally.",
        "whyUsed": "Demonstrates multi-row table layout.",
        "howItWorks": "<tr> drops to next vertical row level; cells fill columns 1 and 2.",
        "connectionToSurrounding": "Middle row in image grid.",
        "examRelevance": "PDF original omits </tr> closing tags; modern HTML automatically closes tr on next tr."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 15-18",
        "title": "Row 3: Bottom Gallery Row (3 Images)",
        "codeSnippet": "<tr>\n<td><img src=\"pic7.jpg\" width=\"100\" height=\"100\"></td>\n<td><img src=\"pic8.jpg\" width=\"100\" height=\"100\"></td>\n<td><img src=\"pic9.jpg\" width=\"100\" height=\"100\"></td>",
        "whatItDoes": "Defines third table row aligning three images.",
        "whyUsed": "Completes 3-row photo matrix.",
        "howItWorks": "Populates cells across columns 1, 2, and 3.",
        "connectionToSurrounding": "Final image group in gallery.",
        "examRelevance": "Table layout keeps images aligned without complex CSS floats."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 19-21",
        "title": "Close Table, Body, and HTML Root",
        "codeSnippet": "</table>\n</body>\n</html>",
        "whatItDoes": "Closes image table, body container, and HTML document.",
        "whyUsed": "Proper DOM closure.",
        "howItWorks": "Finishes document parsing.",
        "connectionToSurrounding": "Ends the document.",
        "examRelevance": "Always ensure table tag is balanced."
      }
    ],
    "executionFlow": [
      "1. Browser sets up table with 6px cell padding and 6px cell spacing.",
      "2. Renders Row 1 with 4 columns containing alternating thumbnails.",
      "3. Renders Row 2: first column has an image; middle cell spans 2 columns displaying the <h1> text; fourth column has an image.",
      "4. Renders Row 3 with 4 thumbnail images aligning with the 4 columns.",
      "5. Centers the overall table on the screen."
    ],
    "outputExplanation": {
      "description": "The output is a balanced banner ad layout: 4 small pictures across the top, 4 across the bottom, with a left picture, large text Buy \"Tweeties\" online in the center, and a right picture.",
      "elementsBreakdown": [
        {
          "element": "Top Row",
          "sourceLine": "Row 1 (4 cells)",
          "explanation": "4 alternating pictures (Blue Hills, Sunset)."
        },
        {
          "element": "Center Headline",
          "sourceLine": "<td colspan=2><h1>Buy \"Tweeties\" online",
          "explanation": "Centered large banner text across 2 columns."
        },
        {
          "element": "Side Images",
          "sourceLine": "Row 2, Cells 1 & 3",
          "explanation": "Frame the headline on the left and right."
        },
        {
          "element": "Bottom Row",
          "sourceLine": "Row 3 (4 cells)",
          "explanation": "4 alternating pictures completing the frame."
        }
      ]
    },
    "examNotes": [
      {
        "category": "attributes",
        "title": "colspan Calculation",
        "description": "colspan=2 means the cell occupies the horizontal space of 2 columns. 1 + 2 + 1 = 4 total columns."
      },
      {
        "category": "common_mistakes",
        "title": "Absolute File Paths vs Relative Paths",
        "description": "Hardcoded paths like C:\\Documents and Settings\\... only work on the specific machine where that path exists. Use relative paths like images/sunset.jpg for portable web code."
      },
      {
        "category": "important_tags",
        "title": "Table as Layout vs CSS Grid",
        "description": "In modern web development, CSS Grid or Flexbox is used for layout instead of HTML tables. Tables are reserved for tabular data."
      },
      {
        "category": "pro_tips",
        "title": "HTML Tag Omission Rules",
        "description": "HTML 4.01 allowed omitting closing </td> and <tr> tags if immediately followed by another <td> or <tr>. However, in modern code and examinations, always close your tags to avoid syntax penalties."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What does the colspan attribute do in an HTML table?",
        "answer": "colspan specifies the number of columns a single cell should span horizontally across the table grid."
      },
      {
        "question": "What is the difference between cellspacing and cellpadding?",
        "answer": "cellspacing defines the space between individual cells, whereas cellpadding defines the space between the content of a cell and its border."
      },
      {
        "question": "Why should you avoid hardcoded paths like C:\\Documents and Settings\\ in web development?",
        "answer": "Hardcoded local paths only exist on one specific physical machine. When the website is uploaded to a server or opened on another computer, those file paths break."
      },
      {
        "question": "How do you center an HTML table without using the deprecated align=\"center\"?",
        "answer": "In modern CSS, you center a table using margin: auto or margin: 0 auto with a defined width."
      },
      {
        "question": "What is the modern CSS replacement for cellspacing and cellpadding?",
        "answer": "The modern CSS replacement for cellspacing is border-spacing (with border-collapse: separate), and for cellpadding it is the padding property on <td> and <th> elements."
      }
    ]
  },
  {
    "id": 5,
    "programNumber": 5,
    "title": "Creating a menu form using HTML",
    "pdfQuestion": "5. Create a menu form using html.",
    "shortDescription": "Constructs an interactive restaurant ordering form for \"Taj Palace Restaurant\" featuring radio buttons, checkboxes, dropdown select menus, and submit button.",
    "technologies": [
      "HTML"
    ],
    "previewType": "form",
    "originalCode": "<html> \n<head> \n<title>Menu Order Form</title>\n</head> \n<body bgcolor=\"skyblue\"text=\"black\"> \n<h1>\n<center>Taj Palace Restaurant<br><br><br> \nWELCOME</center><br><br> Restaurant Menu</h1> <h3> <form> \n<font color=\"purple\">Main Course Selection:</font><br> \n<input type=\"radio\" name=\"main_course\" value=\"pizza\"> Pizza \n<br> \n<input type=\"radio\" name=\"main_course\" value=\"pasta\"> Pasta \n<br> \n<input type=\"radio\" name=\"main_course\" value=\"salad\"> Salad \n<br><br><br><br> \n<font color=\"purple\"> Add-ons:</font>\n<br> \n<input type=\"checkbox\" name=\"add_ons\" value=\"extra_cheese\"> Extra Cheese \n<br> \n<input type=\"checkbox\" name=\"add_ons\" value=\"garlic_bread\"> Garlic Bread \n<br> \n<input type=\"checkbox\" name=\"add_ons\" value=\"soda\"> Soda \n<br><br><br> \n<font color=\"purple\">Choose a drink:</font><br> \n<select name=\"drink\"> \n<option value=\"water\">Water</option> \n<option value=\"juice\">Juice</option> \n<option value=\"coffee\">Coffee</option> \n<option value=\"tea\">Tea</option> \n</select> \n<br><br><br><br> \n<input type=\"submit\" value=\"Place Order\"> \n</form> \n</body>\n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\"> \n<head> \n  <meta charset=\"UTF-8\">\n  <title>Taj Palace Restaurant — Menu Order Form</title>\n  <style>\n    body {\n      background-color: #e0f2fe; /* Soft sky blue */\n      font-family: Arial, sans-serif;\n      color: #0f172a;\n      padding: 30px 20px;\n    }\n    .restaurant-card {\n      max-width: 520px;\n      margin: 0 auto;\n      background: #ffffff;\n      padding: 30px;\n      border-radius: 12px;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.08);\n    }\n    .header-banner {\n      text-align: center;\n      border-bottom: 2px solid #bae6fd;\n      padding-bottom: 16px;\n      margin-bottom: 20px;\n    }\n    .restaurant-title {\n      font-size: 24px;\n      font-weight: bold;\n      color: #0369a1;\n      margin: 0;\n    }\n    .welcome-text {\n      font-size: 14px;\n      letter-spacing: 2px;\n      color: #0284c7;\n      margin-top: 4px;\n      font-weight: 600;\n    }\n    .menu-title {\n      font-size: 18px;\n      margin: 16px 0;\n      color: #334155;\n    }\n    .section-title {\n      color: #7e22ce;\n      font-weight: bold;\n      font-size: 15px;\n      margin-top: 16px;\n      margin-bottom: 8px;\n      display: block;\n    }\n    .control-group {\n      margin-bottom: 6px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 14px;\n      cursor: pointer;\n    }\n    select {\n      width: 100%;\n      padding: 8px 12px;\n      border: 1px solid #cbd5e1;\n      border-radius: 6px;\n      font-size: 14px;\n      margin-top: 4px;\n    }\n    .submit-btn {\n      width: 100%;\n      background-color: #0284c7;\n      color: white;\n      border: none;\n      padding: 12px;\n      font-size: 15px;\n      font-weight: bold;\n      border-radius: 6px;\n      cursor: pointer;\n      margin-top: 24px;\n      transition: background 0.2s;\n    }\n    .submit-btn:hover {\n      background-color: #0369a1;\n    }\n  </style>\n</head> \n<body> \n  <div class=\"restaurant-card\">\n    <div class=\"header-banner\">\n      <h1 class=\"restaurant-title\">Taj Palace Restaurant</h1>\n      <p class=\"welcome-text\">WELCOME</p>\n      <h2 class=\"menu-title\">Restaurant Menu</h2>\n    </div>\n\n    <form onsubmit=\"event.preventDefault(); alert('Order placed successfully for Taj Palace Restaurant!');\"> \n      <!-- Single-choice selection -->\n      <label class=\"section-title\">Main Course Selection:</label>\n      <label class=\"control-group\">\n        <input type=\"radio\" name=\"main_course\" value=\"pizza\" required> Pizza \n      </label>\n      <label class=\"control-group\">\n        <input type=\"radio\" name=\"main_course\" value=\"pasta\"> Pasta \n      </label>\n      <label class=\"control-group\">\n        <input type=\"radio\" name=\"main_course\" value=\"salad\"> Salad \n      </label>\n\n      <!-- Multi-choice selection -->\n      <label class=\"section-title\">Add-ons:</label>\n      <label class=\"control-group\">\n        <input type=\"checkbox\" name=\"add_ons\" value=\"extra_cheese\"> Extra Cheese \n      </label>\n      <label class=\"control-group\">\n        <input type=\"checkbox\" name=\"add_ons\" value=\"garlic_bread\"> Garlic Bread \n      </label>\n      <label class=\"control-group\">\n        <input type=\"checkbox\" name=\"add_ons\" value=\"soda\"> Soda \n      </label>\n\n      <!-- Dropdown Selection -->\n      <label class=\"section-title\" for=\"drink-select\">Choose a drink:</label>\n      <select name=\"drink\" id=\"drink-select\"> \n        <option value=\"water\">Water</option> \n        <option value=\"juice\">Juice</option> \n        <option value=\"coffee\">Coffee</option> \n        <option value=\"tea\">Tea</option> \n      </select> \n\n      <input type=\"submit\" class=\"submit-btn\" value=\"Place Order\"> \n    </form> \n  </div>\n</body>\n</html>",
    "correctionExplanation": "In the lab manual code from the PDF:\n1. Syntax spacing: In <body bgcolor=\"skyblue\"text=\"black\">, there is a missing space between attributes (\"skyblue\" and text=\"black\"). While tolerant browsers parse it, valid HTML requires a space.\n2. Unclosed tags: The code has an unclosed <h3> tag right before <form>, and uses multiple <br><br><br> for spacing instead of CSS margins.\n3. Radio button group: Notice that all three radio buttons share the exact same name=\"main_course\". This ensures mutual exclusion (only one item can be selected at a time), which is a key exam concept!\n4. The <center> tag is deprecated in HTML5 in favor of text-align: center.",
    "objective": {
      "whatItDoes": "Creates an online food ordering form where customers pick a single main course (radio buttons), optional multiple add-ons (checkboxes), select a beverage from a dropdown (<select>), and submit the order.",
      "whyWritten": "To test proficiency with fundamental HTML form controls, understanding mutual exclusion in radio groups vs multi-selection in checkboxes, dropdown menus, and form submissions.",
      "conceptsDemonstrated": "<form>, <input type=\"radio\">, <input type=\"checkbox\">, <select> and <option>, <input type=\"submit\">, grouping via the name attribute.",
      "expectedOutputSummary": "A skyblue page with centered heading \"Taj Palace Restaurant WELCOME\", purple section titles, 3 selectable radio items, 3 checkboxes, a drink dropdown selector, and a \"Place Order\" button.",
      "problemSolved": "Websites require interactive inputs to capture user selections. This program creates an online restaurant menu order form demonstrating radio buttons, checkboxes, dropdown select menus, and submit triggers.",
      "overallMechanism": "The HTML <form> element packages various input widgets (radio, checkbox, select) into named parameters that can be submitted to a server or processed by client scripts.",
      "prerequisitesToUnderstand": "Differences between single-select (radio), multi-select (checkbox), and dropdown (select) form controls."
    },
    "conceptsUsed": [
      {
        "name": "Form Container (<form>)",
        "description": "Wraps input controls to gather and transmit user data to a server or JavaScript handler."
      },
      {
        "name": "Radio Buttons (<input type=\"radio\">)",
        "description": "Allows users to pick exactly one option from a set sharing the same name attribute."
      },
      {
        "name": "Checkboxes (<input type=\"checkbox\">)",
        "description": "Allows independent toggling of zero, one, or multiple selections."
      },
      {
        "name": "Dropdown Menu (<select> / <option>)",
        "description": "Creates a compact dropdown list where users choose from predefined options."
      },
      {
        "name": "Submit Button (<input type=\"submit\">)",
        "description": "Triggers the form submission action or JavaScript validation."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-4",
        "title": "Document Root, Head, and Title",
        "codeSnippet": "<html>\n<head>\n<title>Menu Order Form</title>\n</head>",
        "whatItDoes": "Opens document and sets window title to \"Menu Order Form\".",
        "whyUsed": "Provides page identity in browser tab.",
        "howItWorks": "Standard HTML header setup.",
        "connectionToSurrounding": "Precedes colored body.",
        "examRelevance": "Required head section."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 5",
        "title": "Body with Background and Text Color",
        "codeSnippet": "<body bgcolor=\"skyblue\" text=\"black\">",
        "whatItDoes": "Sets canvas background to skyblue and foreground text color to black.",
        "whyUsed": "Provides thematic contrast for restaurant menu.",
        "howItWorks": "Applies legacy presentation attributes to body node.",
        "connectionToSurrounding": "Wraps all headings and form elements.",
        "examRelevance": "Note that \"text\" attribute sets the default font color for all body text."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 6-8",
        "title": "Restaurant Header Banner and Form Open",
        "codeSnippet": "<h1>\n<center>Taj Palace Restaurant<br><br><br>\nWELCOME</center><br><br> Restaurant Menu</h1> <h3> <form>",
        "whatItDoes": "Renders centered restaurant welcome title and opens the interactive <form> tag.",
        "whyUsed": "Brand header and starts interactive form container.",
        "howItWorks": "Browser renders large header and instantiates an HTMLFormElement.",
        "connectionToSurrounding": "Contains all menu selection controls.",
        "examRelevance": "The <form> element is mandatory for grouping and submitting input controls."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 9-15",
        "title": "Radio Buttons for Main Course Selection",
        "codeSnippet": "<font color=\"purple\">Main Course Selection:</font><br>\n<input type=\"radio\" name=\"main_course\" value=\"pizza\"> Pizza<br>\n<input type=\"radio\" name=\"main_course\" value=\"pasta\"> Pasta<br>\n<input type=\"radio\" name=\"main_course\" value=\"salad\"> Salad<br><br><br><br>",
        "whatItDoes": "Renders three mutually exclusive circular radio buttons for Pizza, Pasta, and Salad.",
        "whyUsed": "Users can only choose ONE main course; radio buttons enforce mutual exclusion.",
        "howItWorks": "Because all three share the exact same name=\"main_course\", selecting one automatically unchecks the others.",
        "connectionToSurrounding": "First interactive section of menu.",
        "examRelevance": "Vital viva question: How do radio buttons achieve mutual exclusion? By sharing the exact same \"name\" attribute value."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 16-23",
        "title": "Checkboxes for Multiple Add-ons",
        "codeSnippet": "<font color=\"purple\"> Add-ons:</font><br>\n<input type=\"checkbox\" name=\"add_ons\" value=\"extra_cheese\"> Extra Cheese<br>\n<input type=\"checkbox\" name=\"add_ons\" value=\"garlic_bread\"> Garlic Bread<br>\n<input type=\"checkbox\" name=\"add_ons\" value=\"soda\"> Soda<br><br><br>",
        "whatItDoes": "Renders three independent square checkboxes allowing zero, one, or multiple add-on selections.",
        "whyUsed": "Add-ons are non-exclusive; a customer may order extra cheese, garlic bread, AND soda together.",
        "howItWorks": "Checkboxes operate independently; each can be checked or unchecked without altering other checkboxes.",
        "connectionToSurrounding": "Second category in order form.",
        "examRelevance": "Viva comparison: Radio buttons allow 1 choice from N; Checkboxes allow 0 to N choices simultaneously."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 24-30",
        "title": "Dropdown Selection Menu (<select> and <option>)",
        "codeSnippet": "<font color=\"purple\">Choose a drink:</font><br>\n<select name=\"drink\">\n<option value=\"water\">Water</option>\n<option value=\"juice\">Juice</option>\n<option value=\"coffee\">Coffee</option>\n<option value=\"tea\">Tea</option>\n</select><br><br><br><br>",
        "whatItDoes": "Renders a compact drop-down selection box offering Water, Juice, Coffee, and Tea.",
        "whyUsed": "Saves vertical page space compared to a long list of radio buttons.",
        "howItWorks": "<select> creates the popup menu; <option> defines each selectable choice with its submission value.",
        "connectionToSurrounding": "Third selection input before ordering.",
        "examRelevance": "To make an option selected by default, add the \"selected\" attribute (e.g. <option selected>)."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Line 32",
        "title": "Submit Button Input",
        "codeSnippet": "<input type=\"submit\" value=\"Place Order\">",
        "whatItDoes": "Renders a clickable button displaying \"Place Order\" that submits the form data.",
        "whyUsed": "Triggers form submission action to package all user choices.",
        "howItWorks": "When clicked, the browser gathers all successful form controls and sends an HTTP request.",
        "connectionToSurrounding": "Action trigger concluding the form inputs.",
        "examRelevance": "type=\"submit\" sends form data; type=\"reset\" resets all inputs back to their initial default values."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 33-35",
        "title": "Close Form, Body, and HTML Root",
        "codeSnippet": "</form>\n</body>\n</html>",
        "whatItDoes": "Closes form, body, and HTML document.",
        "whyUsed": "Valid document completion.",
        "howItWorks": "Finishes form scope.",
        "connectionToSurrounding": "Terminates all tags.",
        "examRelevance": "Never place inputs outside <form> if they need to be submitted together."
      }
    ],
    "executionFlow": [
      "1. Browser loads skyblue canvas and centers the \"Taj Palace Restaurant\" banner.",
      "2. Initializes the <form> container.",
      "3. Renders the Main Course radio group. User can toggle between Pizza, Pasta, and Salad.",
      "4. Renders Add-ons checkboxes. User can tick multiple items simultaneously.",
      "5. Renders <select> drink picker with \"Water\" selected by default.",
      "6. When \"Place Order\" is clicked, form values are collected into key-value query pairs: main_course=pizza&add_ons=extra_cheese&drink=juice."
    ],
    "outputExplanation": {
      "description": "The rendered output is a skyblue webpage with a centered restaurant header, followed by purple subheadings and cleanly stacked form controls: round radio dots, square checkboxes, a drink select box, and a standard rectangular \"Place Order\" button.",
      "elementsBreakdown": [
        {
          "element": "Centered Restaurant Heading",
          "sourceLine": "<center>Taj Palace Restaurant... WELCOME</center>",
          "explanation": "Branding banner."
        },
        {
          "element": "Main Course Radio Buttons",
          "sourceLine": "<input type=\"radio\" name=\"main_course\">",
          "explanation": "Mutually exclusive single-choice controls."
        },
        {
          "element": "Add-ons Checkboxes",
          "sourceLine": "<input type=\"checkbox\" name=\"add_ons\">",
          "explanation": "Multi-select optional extras."
        },
        {
          "element": "Drink Dropdown",
          "sourceLine": "<select name=\"drink\">",
          "explanation": "Compact selection list."
        },
        {
          "element": "Submit Button",
          "sourceLine": "<input type=\"submit\" value=\"Place Order\">",
          "explanation": "Triggers order processing."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Radio Button Grouping Rule",
        "description": "For radio buttons to be mutually exclusive, they MUST have the same name attribute value."
      },
      {
        "category": "attributes",
        "title": "Form Attributes: action and method",
        "description": "action defines the destination URL; method defines HTTP protocol (GET sends data in URL parameters, POST sends data in request body)."
      },
      {
        "category": "common_mistakes",
        "title": "Forgetting the value Attribute",
        "description": "If you omit value=\"pizza\" on a radio button, the browser submits the default string \"on\", making it impossible to know which option the user chose on the backend!"
      },
      {
        "category": "pro_tips",
        "title": "Label Accessibility",
        "description": "Wrapping inputs in <label> tags allows users to click the text label itself to toggle checkboxes and radio buttons."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the crucial attribute required to group radio buttons together?",
        "answer": "The name attribute. All radio buttons in the same group must have the exact same name value so only one can be checked at a time."
      },
      {
        "question": "What is the difference between GET and POST form methods?",
        "answer": "GET appends form data to the URL as query parameters (visible in address bar, cached, limited in length). POST sends form data inside the HTTP request body (hidden from URL, secure for passwords and large payloads)."
      },
      {
        "question": "What does the value attribute do on a radio button or checkbox?",
        "answer": "The value attribute defines the actual string sent to the server when that specific radio button or checkbox is selected."
      },
      {
        "question": "How do you allow a user to select multiple options in a <select> element?",
        "answer": "By adding the multiple attribute to the <select> tag (e.g., <select name=\"skills\" multiple>)."
      },
      {
        "question": "How do you disable an input field or button in HTML?",
        "answer": "By adding the boolean attribute disabled (e.g., <input type=\"text\" disabled>)."
      }
    ]
  },
  {
    "id": 6,
    "programNumber": 6,
    "title": "Demonstrating mathematical functions in JavaScript using HTML",
    "pdfQuestion": "6. Write a program to demonstrate mathematical functions in JavaScript using html.",
    "shortDescription": "Utilizes the built-in JavaScript Math object to compute absolute value, minimum, maximum, power, exponential, square root, natural logarithm, ceiling, floor, round, random, and truncation.",
    "technologies": [
      "HTML",
      "JavaScript"
    ],
    "previewType": "javascript",
    "originalCode": "<html>\n<head> \n<title> JavaScript Math Object</title> \n</head> \n<body> \n<h2>JavaScript Math Methods</h2> \n<p id=\"demo\"></p> \n<!-- Script to use math object method --> \n<script> \ndocument.getElementById(\"demo\").innerHTML = \n\"<p><b>Math.abs(-4.7):</b> \" + Math.abs(-4.7) + \"</p>\" + \n\"<p><b>Math.min(0, 150, 30, 20, -8, -200):</b> \" + \nMath.min(0, 150, 30, 20, -8, -200) + \"</p>\" + \n\"<p><b>Math.max(0, 150, 30, 20, -8, -200):</b> \" + \nMath.max(0, 150, 30, 20, -8, -200) + \"</p>\" + \n\"<p><b>Math.pow(7, 2):</b>\" + Math.pow(7, 2) + \"</p>\" + \n\"<p><b>Math.exp(30):</b>\" + Math.exp(90) + \"</p>\" + \n\"<p><b>Math.sqrt(0.5):</b>\" + Math.sqrt(90) + \"</p>\" + \n\"<p><b>Math.log(10):</b>\" + Math.log(10) + \"</p>\" + \n\"<p><b>Math.ceil(4.4):</b> \" + Math.ceil(4.4) + \"</p>\" + \n\"<p><b>Math.floor(4.7):</b> \" + Math.floor(4.7) + \"</p>\" + \n\"<p><b>Math.round(20.7):</b>\" + Math.round(20.7) + \"</p>\" + \n\"<p><b>Math.random():</b>\" + Math.random() + \"</p>\" + \n\"<p><b>Math.trunc(2.77):</b>\" + Math.trunc(2.77); \n</script> \n</body> \n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head> \n  <meta charset=\"UTF-8\">\n  <title>JavaScript Math Object Methods (Accurate & Formatted)</title> \n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      margin: 24px;\n      color: #1e293b;\n      line-height: 1.5;\n    }\n    h2 { color: #0284c7; }\n    .math-table {\n      width: 100%;\n      max-width: 650px;\n      border-collapse: collapse;\n      margin-top: 16px;\n    }\n    .math-table td {\n      padding: 8px 12px;\n      border-bottom: 1px solid #e2e8f0;\n    }\n    .math-expr {\n      font-family: 'JetBrains Mono', monospace;\n      font-weight: bold;\n      color: #0f172a;\n    }\n    .math-res {\n      font-family: 'JetBrains Mono', monospace;\n      color: #2563eb;\n    }\n    .note-badge {\n      font-size: 11px;\n      color: #d97706;\n      background: #fef3c7;\n      padding: 2px 6px;\n      border-radius: 4px;\n      margin-left: 8px;\n    }\n  </style>\n</head> \n<body> \n  <h2>JavaScript Math Methods</h2> \n  <div id=\"demo\"></div> \n\n  <script> \n    // Corrected labels so that the printed expression matches the evaluated computation!\n    const results = [\n      { expr: 'Math.abs(-4.7)', val: Math.abs(-4.7), desc: 'Absolute (positive) value' },\n      { expr: 'Math.min(0, 150, 30, 20, -8, -200)', val: Math.min(0, 150, 30, 20, -8, -200), desc: 'Lowest number' },\n      { expr: 'Math.max(0, 150, 30, 20, -8, -200)', val: Math.max(0, 150, 30, 20, -8, -200), desc: 'Highest number' },\n      { expr: 'Math.pow(7, 2)', val: Math.pow(7, 2), desc: '7 to the power of 2' },\n      { expr: 'Math.exp(30) [or Math.exp(90)]', val: Math.exp(30).toExponential(4), desc: 'e raised to power 30' },\n      { expr: 'Math.sqrt(90)', val: Math.sqrt(90).toFixed(6), desc: 'Square root of 90' },\n      { expr: 'Math.log(10)', val: Math.log(10).toFixed(6), desc: 'Natural logarithm (base e) of 10' },\n      { expr: 'Math.ceil(4.4)', val: Math.ceil(4.4), desc: 'Rounds UP to nearest integer' },\n      { expr: 'Math.floor(4.7)', val: Math.floor(4.7), desc: 'Rounds DOWN to nearest integer' },\n      { expr: 'Math.round(20.7)', val: Math.round(20.7), desc: 'Rounds to nearest integer' },\n      { expr: 'Math.random()', val: Math.random().toFixed(6), desc: 'Pseudo-random float between 0 and 1' },\n      { expr: 'Math.trunc(2.77)', val: Math.trunc(2.77), desc: 'Removes fractional digits' }\n    ];\n\n    let html = '<table class=\"math-table\">';\n    results.forEach(item => {\n      html += '<tr><td class=\"math-expr\">' + item.expr + ':</td><td class=\"math-res\">' + item.val + '</td></tr>';\n    });\n    html += '</table>';\n    document.getElementById(\"demo\").innerHTML = html;\n  </script> \n</body> \n</html>",
    "correctionExplanation": "Crucial Lab Exam Discrepancy Alert:\n1. In the original PDF source code, line 12 displays the text label \"Math.exp(30):\" but actually evaluates Math.exp(90).\n2. Similarly, line 13 displays the text label \"Math.sqrt(0.5):\" but actually evaluates Math.sqrt(90).\n3. The expected output screenshot in the PDF shows:\n   Math.exp(30): 1.2204032943178408e+39  (which is indeed e^90, confirming the discrepancy in the original script!)\n   Math.sqrt(0.5): 9.486832980505138      (which is sqrt(90), not sqrt(0.5)!)\nExaminers often ask students to spot this exact discrepancy during practical viva examinations! Both versions are explained here so you can answer with 100% confidence.",
    "objective": {
      "whatItDoes": "Calculates and renders 12 fundamental mathematical operations directly in the browser DOM using JavaScript static Math methods.",
      "whyWritten": "To test understanding of the JavaScript standard built-in Math object, DOM manipulation using innerHTML, and string concatenation.",
      "conceptsDemonstrated": "Built-in Math object, Math.abs, Math.min, Math.max, Math.pow, Math.exp, Math.sqrt, Math.log, Math.ceil, Math.floor, Math.round, Math.random, Math.trunc, DOM getElementById, innerHTML property.",
      "expectedOutputSummary": "A list of mathematical expressions on the left with their evaluated numerical results computed dynamically on the right.",
      "problemSolved": "Web pages need dynamic numerical computing capabilities. This program demonstrates JavaScript's built-in Math object methods for rounding, powers, roots, trigonometry, and pseudo-random numbers.",
      "overallMechanism": "The JavaScript engine executes built-in static Math functions and injects the formatted HTML string results dynamically into a target DOM paragraph element via innerHTML.",
      "prerequisitesToUnderstand": "Basic JavaScript syntax, functions, numbers, and DOM manipulation via document.getElementById()."
    },
    "conceptsUsed": [
      {
        "name": "JavaScript Math Object",
        "description": "A built-in global object with static properties (like Math.PI) and static methods for mathematical constants and functions."
      },
      {
        "name": "document.getElementById()",
        "description": "DOM method that returns an Element object representing the element whose id property matches the specified string."
      },
      {
        "name": "innerHTML Property",
        "description": "Gets or sets the HTML or XML markup contained within the element."
      },
      {
        "name": "Rounding Functions",
        "description": "ceil (always rounds up), floor (always rounds down), round (standard rounding to nearest integer), and trunc (removes decimal places)."
      },
      {
        "name": "Math.random()",
        "description": "Generates a pseudo-random floating-point number in the range [0, 1) (inclusive of 0, but exclusive of 1)."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-5",
        "title": "Document Root, Head, and Title",
        "codeSnippet": "<html>\n<head>\n<title> JavaScript Math Object</title>\n</head>\n<body>",
        "whatItDoes": "Sets up HTML skeleton and opens body.",
        "whyUsed": "Container for JavaScript execution and output display.",
        "howItWorks": "Standard DOM setup.",
        "connectionToSurrounding": "Precedes DOM container and script block.",
        "examRelevance": "Standard HTML wrapper."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 6-7",
        "title": "Output Header and Target DOM Container",
        "codeSnippet": "<h2>JavaScript Math Methods</h2>\n<p id=\"demo\"></p>",
        "whatItDoes": "Renders an H2 heading and creates an empty paragraph with id=\"demo\" to receive script results.",
        "whyUsed": "Serves as the output target hook for JavaScript DOM manipulation.",
        "howItWorks": "Browser creates an empty p node that JavaScript accesses by its unique ID.",
        "connectionToSurrounding": "Referenced directly in line 10 by document.getElementById(\"demo\").",
        "examRelevance": "id attributes must be unique across the document."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 8-9",
        "title": "Open JavaScript Script Tag",
        "codeSnippet": "<!-- Script to use math object method -->\n<script>",
        "whatItDoes": "Switches the browser parser from HTML markup parsing to JavaScript script execution.",
        "whyUsed": "Embeds client-side programming logic inside an HTML document.",
        "howItWorks": "Invokes browser V8/SpiderMonkey JavaScript runtime engine.",
        "connectionToSurrounding": "Encloses all mathematical expressions.",
        "examRelevance": "In HTML5, type=\"text/javascript\" is optional because JavaScript is the default scripting language."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 10",
        "title": "Select DOM Element and Assign innerHTML",
        "codeSnippet": "document.getElementById(\"demo\").innerHTML =",
        "whatItDoes": "Finds the element with id=\"demo\" and prepares to replace its HTML content with concatenated strings.",
        "whyUsed": "Dynamic client-side DOM manipulation without page reload.",
        "howItWorks": "document.getElementById searches the DOM tree; .innerHTML assigns new HTML markup.",
        "connectionToSurrounding": "Assigns the multi-line string containing all Math calculations below.",
        "examRelevance": "innerHTML parses HTML tags; textContent inserts plain text without tag parsing."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Line 11",
        "title": "Math.abs(-4.7) — Absolute Value",
        "codeSnippet": "\"<p><b>Math.abs(-4.7):</b> \" + Math.abs(-4.7) + \"</p>\" +",
        "whatItDoes": "Calculates the absolute (non-negative magnitude) value of -4.7, returning 4.7.",
        "whyUsed": "Removes negative signs from distances, differences, or magnitudes.",
        "howItWorks": "Returns |x|; negative numbers become positive, positive remain unchanged.",
        "connectionToSurrounding": "First mathematical function demonstrated.",
        "examRelevance": "Math.abs(-5) returns 5; Math.abs(5) returns 5."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 12-13",
        "title": "Math.min(...) — Minimum Value in Arguments",
        "codeSnippet": "\"<p><b>Math.min(0, 150, 30, 20, -8, -200):</b> \" +\nMath.min(0, 150, 30, 20, -8, -200) + \"</p>\" +",
        "whatItDoes": "Finds the lowest numerical value among the passed arguments, returning -200.",
        "whyUsed": "Locates minimum threshold or lowest score.",
        "howItWorks": "Iterates through argument list comparing numerical values to return lowest.",
        "connectionToSurrounding": "Paired with Math.max below.",
        "examRelevance": "Math.min() can take any number of comma-separated numeric arguments."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 14-15",
        "title": "Math.max(...) — Maximum Value in Arguments",
        "codeSnippet": "\"<p><b>Math.max(0, 150, 30, 20, -8, -200):</b> \" +\nMath.max(0, 150, 30, 20, -8, -200) + \"</p>\" +",
        "whatItDoes": "Finds the highest numerical value among arguments, returning 150.",
        "whyUsed": "Determines highest score or upper bound.",
        "howItWorks": "Returns largest number in the argument list.",
        "connectionToSurrounding": "Direct complement to Math.min.",
        "examRelevance": "Common viva trap: Math.min() with no arguments returns Infinity; Math.max() returns -Infinity."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Line 16",
        "title": "Math.pow(7, 2) — Exponentiation",
        "codeSnippet": "\"<p><b>Math.pow(7, 2):</b>\" + Math.pow(7, 2) + \"</p>\" +",
        "whatItDoes": "Raises base 7 to exponent 2 (7 squared), returning 49.",
        "whyUsed": "Performs powers and polynomial computations.",
        "howItWorks": "Computes base ** exponent (7 * 7 = 49).",
        "connectionToSurrounding": "Power function before exponential e^x.",
        "examRelevance": "In modern JS (ES6+), 7 ** 2 is the exponentiation operator equivalent to Math.pow(7, 2)."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Lines 17-19",
        "title": "Math.exp(), Math.sqrt(), Math.log() — Scientific Functions",
        "codeSnippet": "\"<p><b>Math.exp(30):</b>\" + Math.exp(90) + \"</p>\" +\n\"<p><b>Math.sqrt(0.5):</b>\" + Math.sqrt(90) + \"</p>\" +\n\"<p><b>Math.log(10):</b>\" + Math.log(10) + \"</p>\" +",
        "whatItDoes": "Calculates e^90 (exponential), square root of 90 (approx 9.4868), and natural logarithm ln(10) (approx 2.3025).",
        "whyUsed": "Essential for scientific, financial, and physics calculations.",
        "howItWorks": "Invokes standard IEEE 754 floating point scientific algorithms.",
        "connectionToSurrounding": "Advanced mathematical methods block.",
        "examRelevance": "Math.sqrt(-1) returns NaN (Not a Number) because square roots of negative real numbers do not exist."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Lines 20-22",
        "title": "Math.ceil(), Math.floor(), Math.round() — Rounding Methods",
        "codeSnippet": "\"<p><b>Math.ceil(4.4):</b> \" + Math.ceil(4.4) + \"</p>\" +\n\"<p><b>Math.floor(4.7):</b> \" + Math.floor(4.7) + \"</p>\" +\n\"<p><b>Math.round(20.7):</b>\" + Math.round(20.7) + \"</p>\" +",
        "whatItDoes": "Demonstrates three rounding behaviors: ceil(4.4)=5 (up to ceiling), floor(4.7)=4 (down to floor), and round(20.7)=21 (nearest integer).",
        "whyUsed": "Crucial for financial rounding, pagination, and game coordinates.",
        "howItWorks": "ceil rounds up to next higher integer; floor rounds down to next lower integer; round rounds to nearest integer (.5 rounds up).",
        "connectionToSurrounding": "Demonstrates the three fundamental rounding strategies.",
        "examRelevance": "Examiner favorite: ceil(4.1) is 5; floor(4.9) is 4; round(4.5) is 5."
      },
      {
        "stepNumber": 11,
        "lineNumberRange": "Lines 23-24",
        "title": "Math.random() and Math.trunc()",
        "codeSnippet": "\"<p><b>Math.random():</b>\" + Math.random() + \"</p>\" +\n\"<p><b>Math.trunc(2.77):</b>\" + Math.trunc(2.77);",
        "whatItDoes": "Math.random() generates a pseudo-random floating point number in range [0, 1), and Math.trunc(2.77) truncates fractional digits returning integer 2.",
        "whyUsed": "Random number generation and quick integer conversion.",
        "howItWorks": "random() seeds from PRNG; trunc() simply discards digits after the decimal point.",
        "connectionToSurrounding": "Final methods concatenated into innerHTML.",
        "examRelevance": "How to generate random integer 1 to 10? Math.floor(Math.random() * 10) + 1."
      },
      {
        "stepNumber": 12,
        "lineNumberRange": "Lines 25-27",
        "title": "Close Script, Body, and Document",
        "codeSnippet": "</script>\n</body>\n</html>",
        "whatItDoes": "Closes JavaScript script block, document body, and HTML root.",
        "whyUsed": "Completes execution and closes tags.",
        "howItWorks": "DOM finishes painting with generated content.",
        "connectionToSurrounding": "Concludes document.",
        "examRelevance": "Ensure script tags are correctly closed."
      }
    ],
    "executionFlow": [
      "1. Browser parses the document until it reaches the <p id=\"demo\"> tag.",
      "2. Enters the <script> block and executes synchronously.",
      "3. Evaluates each Math expression in sequence.",
      "4. JavaScript coerces numerical results to strings and concatenates them with HTML paragraph markup.",
      "5. Calls document.getElementById(\"demo\") to locate the DOM node.",
      "6. Assigns the concatenated HTML string to the innerHTML property, causing immediate DOM re-render with the calculated values."
    ],
    "outputExplanation": {
      "description": "The browser renders a vertical list of bold mathematical method labels followed by their evaluated output values: 4.7, -200, 150, 49, 1.22e+39, 9.4868, 2.3025, 5, 4, 21, random decimal, and 2.",
      "elementsBreakdown": [
        {
          "element": "Math.abs(-4.7)",
          "sourceLine": "Math.abs(-4.7)",
          "explanation": "Produces 4.7"
        },
        {
          "element": "Math.min & max",
          "sourceLine": "Math.min(...), Math.max(...)",
          "explanation": "Produces -200 and 150"
        },
        {
          "element": "Math.pow(7, 2)",
          "sourceLine": "Math.pow(7, 2)",
          "explanation": "Produces 49"
        },
        {
          "element": "Math.exp(90)",
          "sourceLine": "Math.exp(90)",
          "explanation": "Produces 1.2204032943178408e+39"
        },
        {
          "element": "Math.sqrt(90)",
          "sourceLine": "Math.sqrt(90)",
          "explanation": "Produces 9.486832980505138"
        },
        {
          "element": "Math.log(10)",
          "sourceLine": "Math.log(10)",
          "explanation": "Produces 2.302585092994046"
        },
        {
          "element": "Math.ceil, floor, round, trunc",
          "sourceLine": "Math rounding methods",
          "explanation": "Produces 5, 4, 21, and 2 respectively."
        }
      ]
    },
    "examNotes": [
      {
        "category": "functions",
        "title": "Math Object Nature",
        "description": "Math is not a constructor function. You cannot write new Math(). All properties and methods are static (e.g., Math.PI, Math.sqrt)."
      },
      {
        "category": "common_mistakes",
        "title": "The exp and sqrt Parameter Discrepancy",
        "description": "Remember that the manual printed Math.exp(30) in text but computed Math.exp(90). Point this out to your lab examiner to demonstrate deep code comprehension."
      },
      {
        "category": "important_tags",
        "title": "Script Placement",
        "description": "If you place your <script> in the <head> without a window.onload listener or defer attribute, document.getElementById(\"demo\") will be null."
      },
      {
        "category": "pro_tips",
        "title": "Random Number Range Formula",
        "description": "To generate a random integer in range [min, max]: Math.floor(Math.random() * (max - min + 1)) + min."
      }
    ],
    "vivaQuestions": [
      {
        "question": "Can you instantiate the Math object using the \"new\" keyword in JavaScript?",
        "answer": "No. Unlike other built-in objects like Date or Array, Math is not a constructor. All its properties and methods are static and called directly (e.g., Math.round())."
      },
      {
        "question": "What is the difference between Math.ceil() and Math.floor()?",
        "answer": "Math.ceil() rounds a number UP to the next largest integer, while Math.floor() rounds a number DOWN to the next smallest integer."
      },
      {
        "question": "What does Math.random() return?",
        "answer": "Math.random() returns a pseudo-random floating-point number greater than or equal to 0 and strictly less than 1 (range [0, 1))."
      },
      {
        "question": "What is the difference between Math.floor(-3.7) and Math.trunc(-3.7)?",
        "answer": "Math.floor(-3.7) returns -4 because -4 is less than -3.7 (rounds down). Math.trunc(-3.7) returns -3 because it simply truncates (discards) the fractional part."
      },
      {
        "question": "What base does Math.log() use in JavaScript?",
        "answer": "Math.log() computes the natural logarithm (base e, approximately 2.71828), not base 10."
      }
    ]
  },
  {
    "id": 7,
    "programNumber": 7,
    "title": "Demonstrating regular expressions in JavaScript using HTML",
    "pdfQuestion": "7. Write a program to demonstrate regular expression in JavaScript using html.",
    "shortDescription": "Implements client-side form validation using a regular expression (/^[a-zA-Z][a-zA-Z0-9_]{4,14}$/) to validate usernames with dynamic green/red feedback.",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "previewType": "javascript",
    "originalCode": "<html>\n<head>\n<title>Regular Expression Demo</title>\n<style>\nbody { font-family: Arial, sans-serif; margin: 20px; }\ninput[type=\"text\"] { padding: 8px; width: 200px; }\nbutton { padding: 10px 15px; background-color: #007bff; color: white; \nborder: none; cursor: pointer; }\n#result { margin-top: 15px; font-weight: bold; }\n.valid { color: green; }\n.invalid { color: red; }\n</style>\n</head>\n<body>\n<h1>Regular Expression Validator</h1>\n<p>Enter a username (must start with a letter, contain only letters, \nnumbers, or underscores, and be 5-15 characters long):</p>\n<input type=\"text\" id=\"usernameInput\" placeholder=\"Enter username\">\n<button onclick=\"validateUsername()\">Validate</button>\n<div id=\"result\"></div>\n<script>\nfunction validateUsername() { \nconst usernameInput = document.getElementById('usernameInput');\nconst resultDiv = document.getElementById('result');\nconst username = usernameInput.value;\nconst usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/;\nif (usernameRegex.test(username)) { \nresultDiv.textContent = `\"${username}\" is a VALID username.`; \nresultDiv.className = 'valid'; \n} \nelse \n{ \nresultDiv.textContent = `\"${username}\" is an INVALID username.`; \nresultDiv.className = 'invalid';\n}\n}\n</script> \n</body>\n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Regular Expression Demo — Username Validator</title>\n  <style>\n    body { \n      font-family: Arial, sans-serif; \n      margin: 30px; \n      color: #1e293b;\n      line-height: 1.5;\n    }\n    .validator-box {\n      max-width: 480px;\n      padding: 24px;\n      border: 1px solid #e2e8f0;\n      border-radius: 8px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n    }\n    h1 { font-size: 20px; color: #0f172a; margin-top: 0; }\n    p { font-size: 14px; color: #475569; }\n    .input-row { display: flex; gap: 8px; margin-top: 12px; }\n    input[type=\"text\"] { \n      padding: 10px 12px; \n      flex: 1; \n      border: 1px solid #cbd5e1;\n      border-radius: 6px;\n      font-size: 14px;\n    }\n    input[type=\"text\"]:focus {\n      outline: none;\n      border-color: #2563eb;\n    }\n    button { \n      padding: 10px 18px; \n      background-color: #2563eb; \n      color: white; \n      border: none; \n      border-radius: 6px;\n      font-weight: 600;\n      cursor: pointer; \n      transition: background 0.2s;\n    }\n    button:hover { background-color: #1d4ed8; }\n    #result { \n      margin-top: 16px; \n      font-weight: bold; \n      font-size: 14px;\n      padding: 10px 12px;\n      border-radius: 6px;\n      display: none;\n    }\n    .valid { \n      color: #15803d; \n      background-color: #dcfce7;\n      border: 1px solid #86efac;\n      display: block !important;\n    }\n    .invalid { \n      color: #b91c1c; \n      background-color: #fee2e2;\n      border: 1px solid #fca5a5;\n      display: block !important;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"validator-box\">\n    <h1>Regular Expression Validator</h1>\n    <p>Enter a username (must start with a letter, contain only letters, numbers, or underscores, and be 5-15 characters long):</p>\n    <div class=\"input-row\">\n      <input type=\"text\" id=\"usernameInput\" placeholder=\"e.g. Haseena123\" onkeydown=\"if(event.key==='Enter') validateUsername()\">\n      <button onclick=\"validateUsername()\">Validate</button>\n    </div>\n    <div id=\"result\"></div>\n  </div>\n\n  <script>\n    function validateUsername() { \n      const usernameInput = document.getElementById('usernameInput');\n      const resultDiv = document.getElementById('result');\n      const username = usernameInput.value;\n      \n      // Regular expression breakdown:\n      // ^         = start of string\n      // [a-zA-Z]  = first char must be an uppercase or lowercase letter (1 character)\n      // [a-zA-Z0-9_]{4,14} = following 4 to 14 characters may be letters, digits, or underscore\n      // $         = end of string (total length: 1 + 4 to 14 = 5 to 15 characters)\n      const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/;\n      \n      if (usernameRegex.test(username)) { \n        resultDiv.textContent = `\"${username}\" is a VALID username.`; \n        resultDiv.className = 'valid'; \n      } else { \n        resultDiv.textContent = `\"${username}\" is an INVALID username.`; \n        resultDiv.className = 'invalid';\n      }\n    }\n  </script> \n</body>\n</html>",
    "correctionExplanation": "The original program in the PDF is well written! In the lab manual screenshot on page 16, testing with \"Haseena123\" correctly outputs: '\"Haseena123\" is a VALID username.' in green text.\nKey technical takeaways:\n1. The regex pattern /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/ enforces that:\n   - The first character MUST be an alphabet letter.\n   - The remaining characters can be letters, digits, or underscores.\n   - The quantifier {4,14} applies to the second group, meaning 1 + 4 = 5 minimum length, and 1 + 14 = 15 maximum length!\n2. The modern ES6 template literal string (`\"${username}\" is a VALID username.`) is used directly in the lab manual code.",
    "objective": {
      "whatItDoes": "Validates user text input against strict username conventions using a JavaScript RegExp object and dynamically provides visual feedback.",
      "whyWritten": "To test understanding of JavaScript regular expressions, pattern syntax, quantifiers, character classes, anchors, the RegExp.test() method, and dynamic CSS class switching.",
      "conceptsDemonstrated": "RegExp literal syntax /.../, anchors (^ and $), character sets ([a-zA-Z]), quantifiers ({4,14}), RegExp.test() method, DOM event handling (onclick), element.className modification.",
      "expectedOutputSummary": "An input field with a Validate button. Typing \"Haseena123\" prints a green confirmation message; typing \"123user\" or \"abc\" prints a red error message.",
      "problemSolved": "User input must be strictly validated on the client side before submission to prevent bad data and security risks. This program demonstrates regular expressions (RegExp) to validate username formats.",
      "overallMechanism": "A JavaScript function is triggered by a button click, retrieves the input text, tests it against a compiled RegExp pattern using .test(), and updates the DOM with colored feedback.",
      "prerequisitesToUnderstand": "Basic JavaScript functions, event handling (onclick), DOM value reading, and regular expression syntax (/^...$/)."
    },
    "conceptsUsed": [
      {
        "name": "RegExp Literal Syntax (/.../)",
        "description": "Patterns delimited by forward slashes that compile into RegExp objects when loaded."
      },
      {
        "name": "Start & End Anchors (^ and $)",
        "description": "^ asserts position at the start of string; $ asserts position at the end of string, preventing partial matches."
      },
      {
        "name": "Character Sets & Ranges",
        "description": "[a-zA-Z] matches any single letter; [a-zA-Z0-9_] matches alphanumeric characters and underscores."
      },
      {
        "name": "Quantifier Range {min, max}",
        "description": "{4, 14} matches between 4 and 14 occurrences of the preceding element."
      },
      {
        "name": "RegExp.test() Method",
        "description": "Executes a search for a match between a regular expression and a specified string, returning true or false."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-3",
        "title": "Document Root, Head, and Title",
        "codeSnippet": "<html>\n<head>\n<title>Regular Expression Demo</title>",
        "whatItDoes": "Initializes document and sets title to \"Regular Expression Demo\".",
        "whyUsed": "Provides page identity.",
        "howItWorks": "Standard HTML header setup.",
        "connectionToSurrounding": "Precedes CSS styles.",
        "examRelevance": "Standard HTML header."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 4-13",
        "title": "Embedded CSS Styles for Form and Feedback States",
        "codeSnippet": "<style>\nbody { font-family: Arial, sans-serif; margin: 20px; }\ninput[type=\"text\"] { padding: 8px; width: 200px; }\nbutton { padding: 10px 15px; background-color: #007bff; color: white; border: none; cursor: pointer; }\n#result { margin-top: 15px; font-weight: bold; }\n.valid { color: green; }\n.invalid { color: red; }\n</style>\n</head>",
        "whatItDoes": "Defines styling for the input box, primary blue button, and .valid (green) vs .invalid (red) status classes.",
        "whyUsed": "Provides visual cue to user on validation success or failure.",
        "howItWorks": "JavaScript dynamically assigns className=\"valid\" or \"invalid\" to toggle green/red color.",
        "connectionToSurrounding": "Styles the form elements and result container below.",
        "examRelevance": "Separation of presentation (CSS classes) from business logic (JavaScript)."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 14-17",
        "title": "Open Body, Header, and Instruction Text",
        "codeSnippet": "<body>\n<h1>Regular Expression Validator</h1>\n<p>Enter a username (must start with a letter, contain only letters,\nnumbers, or underscores, and be 5-15 characters long):</p>",
        "whatItDoes": "Renders the validator page title and user instructions detailing the 3 validation rules.",
        "whyUsed": "Informs user of requirements: starts with letter, only alphanumeric/underscore, length 5-15.",
        "howItWorks": "Standard block text rendering.",
        "connectionToSurrounding": "Sets expectations for the input field below.",
        "examRelevance": "Good UI/UX always clearly communicates validation constraints to users."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 18-20",
        "title": "Text Input, Validate Button, and Result Container",
        "codeSnippet": "<input type=\"text\" id=\"usernameInput\" placeholder=\"Enter username\">\n<button onclick=\"validateUsername()\">Validate</button>\n<div id=\"result\"></div>",
        "whatItDoes": "Renders the input text box, an event button triggering validateUsername(), and an empty result div.",
        "whyUsed": "Forms the interactive validation user interface.",
        "howItWorks": "Clicking button fires the onclick event handler calling the JavaScript function.",
        "connectionToSurrounding": "Directly interacted with by the validateUsername() function.",
        "examRelevance": "onclick=\"functionName()\" binds HTML button click event to JavaScript function."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 21-22",
        "title": "Open Script and Declare validateUsername()",
        "codeSnippet": "<script>\nfunction validateUsername() {",
        "whatItDoes": "Opens script tag and declares the validation handler function.",
        "whyUsed": "Encapsulates validation logic into a callable routine.",
        "howItWorks": "Stored in browser memory and executed whenever Validate button is clicked.",
        "connectionToSurrounding": "Contains DOM lookups, regex testing, and UI feedback branches.",
        "examRelevance": "Functions in JavaScript are declared using the \"function\" keyword."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 23-25",
        "title": "Fetch DOM Elements and Read Input Value",
        "codeSnippet": "const usernameInput = document.getElementById('usernameInput');\nconst resultDiv = document.getElementById('result');\nconst username = usernameInput.value;",
        "whatItDoes": "Retrieves input and result DOM element references, and extracts the string typed by user into variable \"username\".",
        "whyUsed": "Supplies the raw string to be tested by regular expression.",
        "howItWorks": "document.getElementById queries DOM; .value retrieves the current text inside <input>.",
        "connectionToSurrounding": "Supplies target string to regex in Line 27.",
        "examRelevance": "input elements use .value to read text; div/p elements use .textContent or .innerHTML."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Line 26",
        "title": "Define Regular Expression Pattern",
        "codeSnippet": "const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/;",
        "whatItDoes": "Creates RegExp object requiring 1 letter at start (^ [a-zA-Z]), followed by 4 to 14 letters, numbers, or underscores ([a-zA-Z0-9_]{4,14}), anchored to end ($). Total length: 1 + (4..14) = 5 to 15 characters.",
        "whyUsed": "Precisely implements the 3 username requirements.",
        "howItWorks": "^ asserts start of string; $ asserts end; character classes match permitted symbols.",
        "connectionToSurrounding": "Evaluated against user string in line 27.",
        "examRelevance": "Crucial viva question: Breakdown of regex: ^ = start, [a-zA-Z] = 1st char must be letter, {4,14} = 4 to 14 more chars, $ = end."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 27-30",
        "title": "Test Match and Apply Valid Status",
        "codeSnippet": "if (usernameRegex.test(username)) {\n  resultDiv.textContent = `\"${username}\" is a VALID username.`;\n  resultDiv.className = 'valid';\n}",
        "whatItDoes": "If .test() returns true, sets result text to VALID and adds CSS class \"valid\" (green color).",
        "whyUsed": "Provides immediate affirmative feedback.",
        "howItWorks": "regex.test(str) returns boolean true if string matches pattern; DOM classes update styling.",
        "connectionToSurrounding": "Success branch of conditional check.",
        "examRelevance": ".test() returns boolean (true/false); .exec() returns match array or null."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Lines 31-35",
        "title": "Else Branch: Apply Invalid Status",
        "codeSnippet": "else {\n  resultDiv.textContent = `\"${username}\" is an INVALID username.`;\n  resultDiv.className = 'invalid';\n}",
        "whatItDoes": "If .test() returns false, sets result text to INVALID and adds CSS class \"invalid\" (red color).",
        "whyUsed": "Alerts user that username fails one or more format rules.",
        "howItWorks": "Assigns red text color via .invalid CSS class.",
        "connectionToSurrounding": "Failure branch of validation.",
        "examRelevance": "Template literals (`...`) allow embedded expressions (${username})."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Lines 36-39",
        "title": "Close Function, Script, Body, and HTML",
        "codeSnippet": "}\n</script>\n</body>\n</html>",
        "whatItDoes": "Closes validateUsername function, script tag, body, and HTML document.",
        "whyUsed": "Clean structural closure.",
        "howItWorks": "Finalizes document lifecycle.",
        "connectionToSurrounding": "Concludes the application.",
        "examRelevance": "Closing brackets must balance."
      }
    ],
    "executionFlow": [
      "1. User types a username string into the text input box.",
      "2. User clicks the \"Validate\" button, triggering the onclick event handler.",
      "3. Browser invokes validateUsername().",
      "4. JavaScript retrieves the string value from the DOM input.",
      "5. usernameRegex.test(username) evaluates against the regular expression.",
      "6. If true, sets green valid styling and success message.",
      "7. If false, sets red invalid styling and error message."
    ],
    "outputExplanation": {
      "description": "Underneath the button, a bold status message appears. If the input meets all rules, it displays in green text (e.g. \"Haseena123\" is a VALID username.). If invalid (e.g. starting with a number like \"123user\" or having special symbols like \"john@doe\"), it displays in red text.",
      "elementsBreakdown": [
        {
          "element": "Text Input",
          "sourceLine": "<input type=\"text\" id=\"usernameInput\">",
          "explanation": "Allows user typing."
        },
        {
          "element": "Validate Button",
          "sourceLine": "<button onclick=\"validateUsername()\">",
          "explanation": "Triggers regex validation."
        },
        {
          "element": "Green Success Message",
          "sourceLine": "resultDiv.className = \"valid\"",
          "explanation": "Rendered when regex test succeeds."
        },
        {
          "element": "Red Failure Message",
          "sourceLine": "resultDiv.className = \"invalid\"",
          "explanation": "Rendered when regex test fails."
        }
      ]
    },
    "examNotes": [
      {
        "category": "functions",
        "title": "RegExp test() vs exec()",
        "description": "test() returns a boolean (true/false) checking for a match. exec() returns detailed match information (captured groups, index) or null."
      },
      {
        "category": "common_mistakes",
        "title": "Omitting Anchors ^ and $",
        "description": "If you omit ^ and $, /^[a-zA-Z]/ will match ANY string containing a letter anywhere inside it, allowing invalid characters before or after!"
      },
      {
        "category": "attributes",
        "title": "Input Value Property",
        "description": "Remember that text boxes use document.getElementById(\"...\").value to retrieve what the user typed."
      },
      {
        "category": "pro_tips",
        "title": "Testing Edge Cases in Viva",
        "description": "Examiner will ask you to test edge cases: 4 characters (invalid, too short), 16 characters (invalid, too long), starting with a number (invalid), contains space (invalid)."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What do the caret (^) and dollar sign ($) symbols signify in a regular expression?",
        "answer": "^ asserts the start of the string, and $ asserts the end of the string. Together they enforce that the entire string must match the pattern from start to end."
      },
      {
        "question": "What is the purpose of the test() method in JavaScript regular expressions?",
        "answer": "test() executes a search for a pattern match in a given string and returns boolean true if a match is found, and false otherwise."
      },
      {
        "question": "In the regex /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/, why is the range {4,14} and not {5,15}?",
        "answer": "Because the preceding [a-zA-Z] matches exactly one character (the required first letter). Adding {4,14} to that 1 character yields a total length of 1+4=5 to 1+14=15 characters."
      },
      {
        "question": "What is the difference between string.match() and regex.test()?",
        "answer": "regex.test(str) returns a boolean indicating whether a pattern exists in the string. str.match(regex) returns an array containing the matched text and captured groups, or null if no match is found."
      },
      {
        "question": "What does the character class \\w represent in regular expressions?",
        "answer": "\\w represents any word character, which is shorthand for [a-zA-Z0-9_] (letters, digits, and underscores)."
      }
    ]
  },
  {
    "id": 8,
    "programNumber": 8,
    "title": "Demonstrating internal cascading style sheets using HTML",
    "pdfQuestion": "8. Write a program to demonstrate Internal Cascading Style Sheets using html.",
    "shortDescription": "Applies CSS directly inside an HTML document using the <style> tag in the <head> section, utilizing element selectors, class selectors (.highlight), and pseudo-styling.",
    "technologies": [
      "HTML",
      "CSS"
    ],
    "previewType": "html",
    "originalCode": "<html> \n<head> \n<title>Internal CSS Demonstration</title> \n<style> \n/* Internal CSS starts here */ \nbody \n{ \nfont-family: Arial, sans-serif; \nbackground-color: #f4f4f4; \ncolor: #333; \nmargin: 20px; \n} \nh1 \n{ \ncolor: #007bff; \ntext-align: center; \nfont-size: 2.5em; \nborder-bottom: 2px solid #007bff; \npadding-bottom: 10px; \n} \np \n{ \nfont-size: 1.1em; \nline-height: 1.6; \nmargin-bottom: 15px; \n} \n.highlight \n{ \nbackground-color: #ffe0b2; \npadding: 5px 10px; \nborder-radius: 5px; \nfont-weight: bold; \n} \nul \n{ \nlist-style-type: square; \nmargin-left: 20px; \n} \nli \n{ \nmargin-bottom: 5px; \n} \n</style> \n</head> \n<body> \n<h1>Understanding Internal CSS</h1>\n<p>This paragraph demonstrates how <span class=\"highlight\">internal \nCSS</span> is applied directly within the HTML document's \n<code>&lt;head&gt;</code> section using the <code>&lt;style&gt;</code> \ntag.</p> \n<p>It is useful for styling a single HTML page when the styles are unique to \nthat page and are not intended to be reused across multiple \ndocuments.</p> \n<h2>Key Features of Internal CSS:</h2> \n<ul> \n<li>Defined within the <code>&lt;style&gt;</code> tags in the \n<code>&lt;head&gt;</code> section.</li> \n<li>Styles apply only to the HTML elements within that specific \ndocument.</li> \n<li>Suitable for single-page styling or when styles are not meant for \nexternal reuse.</li> \n</ul> \n<p>This example showcases various CSS properties like <span \nclass=\"highlight\">color</span>, <span class=\"highlight\">font-size</span>, \n<span class=\"highlight\">background-color</span>, and <span \nclass=\"highlight\">text-align</span>, all defined internally.</p> \n</body> \n</html>",
    "correctedCode": "<!DOCTYPE html>\n<html lang=\"en\"> \n<head> \n  <meta charset=\"UTF-8\">\n  <title>Internal CSS Demonstration (Standard HTML5)</title> \n  <style> \n    /* Internal CSS starts here inside <head> */ \n    body { \n      font-family: Arial, sans-serif; \n      background-color: #f4f4f4; \n      color: #333333; \n      margin: 24px; \n      line-height: 1.6;\n    } \n    h1 { \n      color: #007bff; \n      text-align: center; \n      font-size: 2.2em; \n      border-bottom: 2px solid #007bff; \n      padding-bottom: 10px; \n    } \n    h2 {\n      color: #2c3e50;\n      margin-top: 24px;\n      font-size: 1.4em;\n    }\n    p { \n      font-size: 1.05em; \n      line-height: 1.6; \n      margin-bottom: 15px; \n    } \n    code {\n      background: #e2e8f0;\n      padding: 2px 6px;\n      border-radius: 4px;\n      font-family: monospace;\n      font-size: 0.9em;\n    }\n    .highlight { \n      background-color: #ffe0b2; \n      padding: 3px 8px; \n      border-radius: 4px; \n      font-weight: bold; \n      color: #b45309;\n    } \n    ul { \n      list-style-type: square; \n      margin-left: 24px; \n    } \n    li { \n      margin-bottom: 6px; \n    } \n  </style> \n</head> \n<body> \n  <h1>Understanding Internal CSS</h1>\n  <p>This paragraph demonstrates how <span class=\"highlight\">internal CSS</span> is applied directly within the HTML document's <code>&lt;head&gt;</code> section using the <code>&lt;style&gt;</code> tag.</p> \n  <p>It is useful for styling a single HTML page when the styles are unique to that page and are not intended to be reused across multiple documents.</p> \n  <h2>Key Features of Internal CSS:</h2> \n  <ul> \n    <li>Defined within the <code>&lt;style&gt;</code> tags in the <code>&lt;head&gt;</code> section.</li> \n    <li>Styles apply only to the HTML elements within that specific document.</li> \n    <li>Suitable for single-page styling or when styles are not meant for external reuse.</li> \n  </ul> \n  <p>This example showcases various CSS properties like <span class=\"highlight\">color</span>, <span class=\"highlight\">font-size</span>, <span class=\"highlight\">background-color</span>, and <span class=\"highlight\">text-align</span>, all defined internally.</p> \n</body> \n</html>",
    "correctionExplanation": "The code from the PDF is a clean, classic demonstration of Internal Cascading Style Sheets.\nKey points:\n1. Internal CSS is written between <style> and </style> tags located inside the <head> section of the same HTML document.\n2. It uses element selectors (body, h1, p, ul, li) and class selectors (.highlight).\n3. In modern HTML5, the attribute type=\"text/css\" on <style> is optional because CSS is the universal default stylesheet language for all modern browsers.",
    "objective": {
      "whatItDoes": "Demonstrates internal stylesheet styling where CSS rules are embedded inside the <head> of the document, styling headings, paragraphs, lists, and highlighting specific spans.",
      "whyWritten": "To test understanding of the three ways of adding CSS (inline, internal, external), CSS selector syntax, box model properties, and styling specific document elements.",
      "conceptsDemonstrated": "<style> tag in <head>, element selectors, class selectors (.highlight), CSS properties (color, background-color, border-bottom, padding, margin, border-radius, list-style-type).",
      "expectedOutputSummary": "A gray-background webpage with a blue centered heading with bottom underline, square-bulleted list, and peach-tinted rounded highlight badges on key terms.",
      "problemSolved": "Inline styling violates separation of concerns. This program demonstrates Internal CSS using a <style> block inside <head> to format element selectors, class selectors, ID selectors, and pseudo-classes across an entire document.",
      "overallMechanism": "The browser's CSS parser evaluates the <style> block in the <head>, constructs a CSS Object Model (CSSOM), and cascades styles onto matching HTML elements throughout the page.",
      "prerequisitesToUnderstand": "Understanding CSS syntax: selector { property: value; }, classes (.), IDs (#), and element tags."
    },
    "conceptsUsed": [
      {
        "name": "Internal Stylesheet (<style>)",
        "description": "CSS rules placed inside the <head> that apply to the current document only."
      },
      {
        "name": "Element Selectors",
        "description": "Target HTML tags directly (body, h1, p, ul, li) to establish default typographic styles."
      },
      {
        "name": "Class Selector (.highlight)",
        "description": "Reusable class prefix with a period (.) that targets any element with class=\"highlight\"."
      },
      {
        "name": "Box Model Properties",
        "description": "margin (space outside border), border (edge line), and padding (space inside border)."
      },
      {
        "name": "list-style-type: square",
        "description": "Changes bullet markers from default discs to filled squares."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-4",
        "title": "Document Root, Head, and Title",
        "codeSnippet": "<html>\n<head>\n<title>Internal CSS Demonstration</title>",
        "whatItDoes": "Initializes document and sets title.",
        "whyUsed": "Standard HTML header setup.",
        "howItWorks": "Browser loads the head container.",
        "connectionToSurrounding": "Encloses the internal <style> block.",
        "examRelevance": "Internal CSS must always reside inside <head> within <style> tags."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 5",
        "title": "Open Internal Style Block",
        "codeSnippet": "<style>\n/* Internal CSS starts here */",
        "whatItDoes": "Opens the internal CSS stylesheet container.",
        "whyUsed": "Enables writing pure CSS rules without needing an external .css file.",
        "howItWorks": "Tells browser parser to interpret contents as CSS stylesheet.",
        "connectionToSurrounding": "Encloses all rules for body, h1, p, .highlight, ul, and li.",
        "examRelevance": "Viva question: Three ways to include CSS: Inline (style attribute), Internal (<style> in head), External (<link>)."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 6-12",
        "title": "Body Element Selector Rule",
        "codeSnippet": "body\n{\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f4;\n  color: #333;\n  margin: 20px;\n}",
        "whatItDoes": "Sets global document typography to Arial, background to light gray (#f4f4f4), text to dark gray (#333), and adds 20px outer margin.",
        "whyUsed": "Establishes clean global page baseline styling.",
        "howItWorks": "Inherited by child elements unless overridden by more specific selectors.",
        "connectionToSurrounding": "Sets default properties for all content in body.",
        "examRelevance": "font-family specifies fallbacks: if Arial is missing, sans-serif generic font is used."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 13-20",
        "title": "Heading 1 (h1) Element Rule",
        "codeSnippet": "h1\n{\n  color: #007bff;\n  text-align: center;\n  font-size: 2.5em;\n  border-bottom: 2px solid #007bff;\n  padding-bottom: 10px;\n}",
        "whatItDoes": "Styles all H1 headings: blue color (#007bff), centered text, large 2.5em font size, and an attractive blue underline border.",
        "whyUsed": "Creates a distinctive, polished section title.",
        "howItWorks": "Targets all <h1> tags on the page automatically.",
        "connectionToSurrounding": "Styles the title on line 46.",
        "examRelevance": "border-bottom with padding-bottom creates an underline separated from text descenders."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 21-26",
        "title": "Paragraph (p) Element Rule",
        "codeSnippet": "p\n{\n  font-size: 1.1em;\n  line-height: 1.6;\n  margin-bottom: 15px;\n}",
        "whatItDoes": "Sets paragraph font size to 1.1em, comfortable line spacing to 1.6, and 15px bottom spacing between paragraphs.",
        "whyUsed": "Greatly enhances reading comfort and typographical rhythm.",
        "howItWorks": "line-height: 1.6 adds breathing room between lines of text.",
        "connectionToSurrounding": "Formats all <p> elements on lines 47-53 and 63-66.",
        "examRelevance": "Relative units: 1.1em is 1.1 times the inherited base font size."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 27-33",
        "title": "Class Selector: .highlight",
        "codeSnippet": ".highlight\n{\n  background-color: #ffe0b2;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-weight: bold;\n}",
        "whatItDoes": "Creates a reusable class selector (.highlight) with warm orange background (#ffe0b2), padding, rounded corners, and bold text.",
        "whyUsed": "Can be applied to any HTML element via class=\"highlight\" to highlight key phrases.",
        "howItWorks": "The dot (.) prefix identifies a class selector that matches any element with class=\"highlight\".",
        "connectionToSurrounding": "Used in multiple <span> elements throughout the body text.",
        "examRelevance": "Crucial viva question: Classes (.) can be used multiple times on a page; IDs (#) must be unique."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 34-42",
        "title": "List Styling Rules: ul and li",
        "codeSnippet": "ul\n{\n  list-style-type: square;\n  margin-left: 20px;\n}\nli\n{\n  margin-bottom: 5px;\n}",
        "whatItDoes": "Sets unordered list bullets to square, adds 20px left indentation, and adds 5px vertical separation between list items.",
        "whyUsed": "Demonstrates styling list elements via CSS instead of HTML attributes.",
        "howItWorks": "list-style-type: square overrides default disc bullets.",
        "connectionToSurrounding": "Formats the <ul> list on lines 55-62.",
        "examRelevance": "Modern web standards require styling lists via CSS rather than legacy HTML type attributes."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 43-45",
        "title": "Close Style Block and Open Body",
        "codeSnippet": "</style>\n</head>\n<body>",
        "whatItDoes": "Closes internal stylesheet, terminates head, and opens document body canvas.",
        "whyUsed": "Separates style declarations from HTML content elements.",
        "howItWorks": "Browser activates CSSOM and begins HTML painting.",
        "connectionToSurrounding": "Transitions from CSS declarations to rendered HTML markup.",
        "examRelevance": "Always ensure <style> is closed before </head>."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Lines 46-53",
        "title": "Styled Heading and Paragraphs with Highlight Class",
        "codeSnippet": "<h1>Understanding Internal CSS</h1>\n<p>This paragraph demonstrates how <span class=\"highlight\">internal\nCSS</span> is applied directly within the HTML document's\n<code>&lt;head&gt;</code> section using the <code>&lt;style&gt;</code>\ntag.</p>\n<p>It is useful for styling a single HTML page when the styles are unique to\nthat page and are not intended to be reused across multiple\ndocuments.</p>",
        "whatItDoes": "Renders the styled H1 heading and two informational paragraphs, utilizing the .highlight class on the words \"internal CSS\".",
        "whyUsed": "Demonstrates in-place application of element and class CSS rules.",
        "howItWorks": "<span> inline tag groups text without breaking line flow; class=\"highlight\" applies styling.",
        "connectionToSurrounding": "Renders the content styled by CSS rules declared above.",
        "examRelevance": "<span> is an inline element used to style specific words; <div> is a block-level container."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Lines 54-62",
        "title": "Section Subheading and Styled Bulleted List",
        "codeSnippet": "<h2>Key Features of Internal CSS:</h2>\n<ul>\n  <li>Defined within the <code>&lt;style&gt;</code> tags in the\n<code>&lt;head&gt;</code> section.</li>\n  <li>Styles apply only to the HTML elements within that specific\ndocument.</li>\n  <li>Suitable for single-page styling or when styles are not meant for\nexternal reuse.</li>\n</ul>",
        "whatItDoes": "Renders an H2 subheading and an unordered list styled with square bullets.",
        "whyUsed": "Provides structured educational content on internal CSS characteristics.",
        "howItWorks": "<ul> inherits square bullets and indentation defined in CSS lines 34-42.",
        "connectionToSurrounding": "Second content section in page.",
        "examRelevance": "<code> tag renders text in monospace font, ideal for displaying code tags."
      },
      {
        "stepNumber": 11,
        "lineNumberRange": "Lines 63-68",
        "title": "Closing Paragraph with Multiple Classes and Page Closure",
        "codeSnippet": "<p>This example showcases various CSS properties like <span\nclass=\"highlight\">color</span>, <span class=\"highlight\">font-size</span>,\n<span class=\"highlight\">background-color</span>, and <span\nclass=\"highlight\">text-align</span>, all defined internally.</p>\n</body>\n</html>",
        "whatItDoes": "Demonstrates reusability of the .highlight class across four separate span tags, then closes body and HTML.",
        "whyUsed": "Proves classes can be applied repeatedly to multiple elements across a document.",
        "howItWorks": "Each <span class=\"highlight\"> independently receives orange background and padding.",
        "connectionToSurrounding": "Final paragraph concluding the demonstration.",
        "examRelevance": "A single class can style dozens or hundreds of elements; IDs can style only one."
      }
    ],
    "executionFlow": [
      "1. Browser loads <head> and parses the <style> block, constructing CSS rule declarations.",
      "2. Styles are mapped to the DOM nodes before visual paint occurs, preventing Flash of Unstyled Content (FOUC).",
      "3. Renders <body> with #f4f4f4 background.",
      "4. Paints <h1> in bold blue with bottom border.",
      "5. Traverses paragraphs and applies .highlight rules to each <span class=\"highlight\"> span.",
      "6. Paints <ul> items with square bullets."
    ],
    "outputExplanation": {
      "description": "A light-gray webpage with a blue centered <h1> banner underline. Paragraphs feature peach-colored highlight chips on words like \"internal CSS\", \"color\", \"font-size\", followed by square-bulleted feature points.",
      "elementsBreakdown": [
        {
          "element": "Canvas background",
          "sourceLine": "body { background-color: #f4f4f4; }",
          "explanation": "Subtle light gray surface."
        },
        {
          "element": "Primary H1 banner",
          "sourceLine": "h1 { color: #007bff; border-bottom: 2px solid; }",
          "explanation": "Centered blue title with underline rule."
        },
        {
          "element": "Highlight Badges",
          "sourceLine": ".highlight { background-color: #ffe0b2; }",
          "explanation": "Warm peach rounded badges."
        },
        {
          "element": "Square-bulleted list",
          "sourceLine": "ul { list-style-type: square; }",
          "explanation": "Features list with square bullets."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Three Types of CSS",
        "description": "1. Inline (style attribute on tag)\n2. Internal (<style> tag in <head>)\n3. External (separate .css file linked via <link>)."
      },
      {
        "category": "attributes",
        "title": "CSS Specificity Hierarchy",
        "description": "Inline styles > ID selectors (#id) > Class selectors (.class) > Element selectors (h1, p)."
      },
      {
        "category": "common_mistakes",
        "title": "Missing Dot in Class Selector",
        "description": "Students frequently forget the dot in CSS (e.g. writing highlight instead of .highlight). Without the dot, CSS searches for a non-existent <highlight> HTML tag!"
      },
      {
        "category": "pro_tips",
        "title": "When to Use Internal CSS",
        "description": "Internal CSS is best when a website has a single unique page or when styles should not be downloaded as a separate HTTP request."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What are the three ways to insert CSS into an HTML document?",
        "answer": "1. External CSS (via <link> tag)\n2. Internal CSS (via <style> tag in <head>)\n3. Inline CSS (via the style attribute inside an HTML tag)."
      },
      {
        "question": "What is the syntax difference between a class selector and an ID selector in CSS?",
        "answer": "A class selector begins with a period (e.g., .highlight), whereas an ID selector begins with a hash symbol (e.g., #unique-text)."
      },
      {
        "question": "Which has higher priority: internal CSS or inline CSS?",
        "answer": "Inline CSS (written directly on the element via the style attribute) has higher specificity and priority than internal or external CSS, unless !important is used."
      },
      {
        "question": "What does the border-radius property do in CSS?",
        "answer": "border-radius rounds the outer corners of an element box, allowing soft rounded corners or circular pills."
      },
      {
        "question": "What is the difference between margin and padding in CSS?",
        "answer": "Margin is the transparent space outside the element border, separating it from neighboring elements. Padding is the space inside the element border, separating the border from the element content."
      }
    ]
  },
  {
    "id": 9,
    "programNumber": 9,
    "title": "Demonstrating external cascading style sheets using HTML",
    "pdfQuestion": "9. Write a program to demonstrate External Cascading Style Sheets using html.",
    "shortDescription": "Demonstrates modular web architecture by separating styles into an external file (\"styles.css\") and linking it to \"external.html\" using the <link rel=\"stylesheet\"> tag.",
    "technologies": [
      "HTML",
      "CSS"
    ],
    "previewType": "external-css",
    "cssCode": "/* save as \"styles.css\" */\n/* Body styling */ \nbody \n{ \nfont-family: Arial, sans-serif; \nbackground-color: #f4f4f4; \ncolor: #333; \nmargin: 20px; \n}\n/* Heading styling */ \nh1 \n{ \ncolor: #0056b3; \ntext-align: center; \n}\n/* Class selector styling */ \n.highlight \n{ \ncolor: #e67e22; \nfont-weight: bold; \nfont-style: italic; \n}\n/* ID selector styling */ \n#unique-text \n{ \ncolor: #27ae60; \nfont-size: 1.2em; \nborder: 1px solid #27ae60; \npadding: 10px;\n} \n/* Element selector within another element (descendant selector) */ \ndiv \np \n{ \nbackground-color: #ecf0f1; \npadding: 5px; \nborder-left: 3px solid #34495e; \n}",
    "originalCode": "<html> \n<head> \n<title>External CSS Demo</title> \n<!-- Link to the external CSS file --> \n<link rel=\"stylesheet\" href=\"styles.css\"> \n</head> \n<body> \n<h1>Welcome to the External CSS Demo</h1> \n<p class=\"highlight\">This paragraph is styled using a class from the \nexternal stylesheet.</p> \n<p id=\"unique-text\">This paragraph has a unique ID and is also styled \nexternally.</p> \n<div> \n<p>This is a paragraph inside a div, demonstrating element styling.</p> \n</div> \n</body> \n</html>",
    "correctedCode": "<!-- File 1: styles.css -->\nbody { \n  font-family: Arial, sans-serif; \n  background-color: #f4f4f4; \n  color: #333333; \n  margin: 24px; \n  line-height: 1.6;\n}\nh1 { \n  color: #0056b3; \n  text-align: center; \n}\n.highlight { \n  color: #e67e22; \n  font-weight: bold; \n  font-style: italic; \n}\n#unique-text { \n  color: #27ae60; \n  font-size: 1.15em; \n  border: 1px solid #27ae60; \n  padding: 10px 14px;\n  border-radius: 6px;\n  background: #f0fdf4;\n} \ndiv p { \n  background-color: #ecf0f1; \n  padding: 8px 12px; \n  border-left: 4px solid #34495e; \n  border-radius: 0 4px 4px 0;\n}\n\n<!-- File 2: external.html -->\n<!DOCTYPE html>\n<html lang=\"en\"> \n<head> \n  <meta charset=\"UTF-8\">\n  <title>External CSS Demo</title> \n  <!-- Linking external stylesheet --> \n  <link rel=\"stylesheet\" href=\"styles.css\"> \n</head> \n<body> \n  <h1>Welcome to the External CSS Demo</h1> \n  <p class=\"highlight\">This paragraph is styled using a class from the external stylesheet.</p> \n  <p id=\"unique-text\">This paragraph has a unique ID and is also styled externally.</p> \n  <div> \n    <p>This is a paragraph inside a div, demonstrating element styling.</p> \n  </div> \n</body> \n</html>",
    "correctionExplanation": "In the lab manual:\n1. The program requires TWO distinct files:\n   - \"styles.css\": contains pure CSS rules (do not include <style> tags inside .css files!).\n   - \"external.html\": links to styles.css via <link rel=\"stylesheet\" href=\"styles.css\">.\n2. Demonstrates all major CSS selector types:\n   - Element selector: body, h1\n   - Class selector: .highlight\n   - ID selector: #unique-text\n   - Descendant selector: div p (targets any <p> nested inside a <div>)\n3. Notice that both files must reside in the same folder for href=\"styles.css\" to resolve correctly.",
    "objective": {
      "whatItDoes": "Separates presentation from content by linking an external stylesheet (\"styles.css\") to an HTML file (\"external.html\"), styling elements with class, ID, and descendant selectors.",
      "whyWritten": "To teach modular web development, the <link> tag, browser caching of stylesheets, and multi-tier CSS selectors.",
      "conceptsDemonstrated": "<link rel=\"stylesheet\">, external .css file structure, element selectors, class selectors (.highlight), ID selectors (#unique-text), descendant selectors (div p).",
      "expectedOutputSummary": "A webpage with a blue centered title, an italic orange paragraph, a bordered green box for the unique ID element, and a gray box with dark blue left border for the div paragraph.",
      "problemSolved": "Internal CSS must be duplicated across every page of a website. External CSS solves this by centralizing all design rules into an independent .css file, allowing entire websites to be styled from a single source.",
      "overallMechanism": "The HTML <link rel=\"stylesheet\" href=\"styles.css\"> tag directs the browser to asynchronously fetch an external stylesheet, cache it, and cascade its rules over the document elements.",
      "prerequisitesToUnderstand": "Differences between HTML and CSS files, link tag syntax, and browser caching."
    },
    "conceptsUsed": [
      {
        "name": "External Stylesheet (<link>)",
        "description": "Links a standalone .css file to an HTML document using <link rel=\"stylesheet\" href=\"styles.css\"> in the <head>."
      },
      {
        "name": "Descendant Selector (div p)",
        "description": "Selects all <p> elements that are descendants of a <div> element, applying specialized styling."
      },
      {
        "name": "ID Selector (#unique-text)",
        "description": "Selects the single unique element on the page with id=\"unique-text\". Has higher specificity than class selectors."
      },
      {
        "name": "Class Selector (.highlight)",
        "description": "Applies styling to all elements with class=\"highlight\"."
      },
      {
        "name": "Left Accent Border (border-left)",
        "description": "Draws a prominent vertical line on the left edge of the blockquote/container."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-3",
        "title": "Document Root, Head, and Title",
        "codeSnippet": "<html>\n<head>\n<title>External CSS Demo</title>",
        "whatItDoes": "Initializes HTML document structure and sets title to \"External CSS Demo\".",
        "whyUsed": "Standard document envelope.",
        "howItWorks": "Browser loads the head container.",
        "connectionToSurrounding": "Precedes external stylesheet link.",
        "examRelevance": "Standard HTML skeleton."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 4-5",
        "title": "Link External Stylesheet via <link> Tag",
        "codeSnippet": "<!-- Link to the external CSS file -->\n<link rel=\"stylesheet\" href=\"styles.css\">",
        "whatItDoes": "Links the external stylesheet file \"styles.css\" to this HTML document.",
        "whyUsed": "Industry standard method for web styling: separates structure (HTML) completely from presentation (CSS).",
        "howItWorks": "rel=\"stylesheet\" informs browser of relationship type; href=\"styles.css\" specifies URL path to file.",
        "connectionToSurrounding": "Loads styling rules applied to elements in the body below.",
        "examRelevance": "Viva question: Why prefer external CSS? 1) Reusable across 100s of pages, 2) Cached by browser for faster loads, 3) Complete separation of concerns."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 6-7",
        "title": "Close Head and Open Document Body",
        "codeSnippet": "</head>\n<body>",
        "whatItDoes": "Closes metadata header and opens the visible canvas.",
        "whyUsed": "Transitions from resource linking to visual content.",
        "howItWorks": "Browser begins rendering page canvas using styles loaded from styles.css.",
        "connectionToSurrounding": "Encloses all styled headings, paragraphs, and containers.",
        "examRelevance": "<link> tag must always be inside <head>, never in <body>."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 8",
        "title": "Render Heading Styled Externally",
        "codeSnippet": "<h1>Welcome to the External CSS Demo</h1>",
        "whatItDoes": "Renders primary level 1 heading, styled by the \"h1\" rule defined in styles.css.",
        "whyUsed": "Main title demonstrating external element selector.",
        "howItWorks": "Browser looks up \"h1\" in the external CSSOM and applies specified color, font, and alignment.",
        "connectionToSurrounding": "First visible content element.",
        "examRelevance": "Element selector targets all <h1> tags across the site."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 9-10",
        "title": "Class Selector Target (.highlight)",
        "codeSnippet": "<p class=\"highlight\">This paragraph is styled using a class from the\nexternal stylesheet.</p>",
        "whatItDoes": "Renders paragraph element formatted using the .highlight class declared in styles.css.",
        "whyUsed": "Demonstrates that class definitions in external stylesheets apply seamlessly to HTML elements.",
        "howItWorks": "Matches .highlight class in external stylesheet and renders highlight background.",
        "connectionToSurrounding": "Demonstrates class selector usage.",
        "examRelevance": "Classes are prefixed with a dot (.) in CSS, but written without a dot in HTML class=\"highlight\"."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 11-12",
        "title": "ID Selector Target (#unique-text)",
        "codeSnippet": "<p id=\"unique-text\">This paragraph has a unique ID and is also styled\nexternally.</p>",
        "whatItDoes": "Renders a paragraph with id=\"unique-text\", styled by the `#unique-text` selector in styles.css.",
        "whyUsed": "Demonstrates external styling targeted at one specific, unique element on the page.",
        "howItWorks": "ID selector (#) has higher CSS specificity than class (.) or element selectors.",
        "connectionToSurrounding": "Follows class demonstration with ID demonstration.",
        "examRelevance": "Examiner favorite: Specificity hierarchy: Inline Style > ID Selector > Class Selector > Element Selector."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 13-15",
        "title": "Div Container with Descendant Paragraph",
        "codeSnippet": "<div>\n<p>This is a paragraph inside a div, demonstrating element styling.</p>\n</div>",
        "whatItDoes": "Encloses a paragraph inside a generic <div> block container.",
        "whyUsed": "Demonstrates contextual/descendant selectors (e.g. div p) commonly defined in external stylesheets.",
        "howItWorks": "<div> acts as an unstyled section wrapper; <p> inherits or matches descendant rules.",
        "connectionToSurrounding": "Shows container layout techniques.",
        "examRelevance": "<div> is a block-level generic container; <span> is an inline generic container."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 16-17",
        "title": "Close Document Body and HTML Root",
        "codeSnippet": "</body>\n</html>",
        "whatItDoes": "Closes body and HTML document.",
        "whyUsed": "Completes proper well-formed document structure.",
        "howItWorks": "Finalizes document rendering pipeline.",
        "connectionToSurrounding": "Closes tags opened on lines 7 and 1.",
        "examRelevance": "Ensures DOM validator passes."
      }
    ],
    "executionFlow": [
      "1. Browser parser reads external.html and encounters <link rel=\"stylesheet\" href=\"styles.css\"> in the <head>.",
      "2. Browser makes a secondary request to fetch styles.css (or retrieves it from disk/cache).",
      "3. Parses CSS rules into the CSSOM.",
      "4. Combines DOM and CSSOM into the Render Tree.",
      "5. Applies #0056b3 blue to <h1> and centers it.",
      "6. Applies orange italic styling to .highlight.",
      "7. Applies green border box to #unique-text.",
      "8. Applies gray box with dark blue left border to the <p> nested in <div>."
    ],
    "outputExplanation": {
      "description": "The output displays a centered deep blue title, followed by an orange bold italicized sentence, a green-bordered card with green text, and a light gray block with a dark slate left accent border.",
      "elementsBreakdown": [
        {
          "element": "Centered Blue Title",
          "sourceLine": "h1 { color: #0056b3; }",
          "explanation": "Main headline."
        },
        {
          "element": "Orange Italic Paragraph",
          "sourceLine": ".highlight { color: #e67e22; }",
          "explanation": "Class-styled paragraph."
        },
        {
          "element": "Green Bordered Box",
          "sourceLine": "#unique-text { border: 1px solid #27ae60; }",
          "explanation": "ID-styled paragraph with border."
        },
        {
          "element": "Left-bordered Gray Div Paragraph",
          "sourceLine": "div p { border-left: 3px solid; }",
          "explanation": "Descendant selector paragraph inside div."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "The <link> Tag Attributes",
        "description": "rel specifies relationship (rel=\"stylesheet\"); href specifies file path; type=\"text/css\" is optional in HTML5."
      },
      {
        "category": "functions",
        "title": "Benefits of External CSS",
        "description": "1. Reusability across multiple pages.\n2. Browser caching reduces server bandwidth.\n3. Complete separation of content and presentation.\n4. Easier site-wide maintenance."
      },
      {
        "category": "common_mistakes",
        "title": "Wrong Path in href",
        "description": "If styles.css is located in a subfolder called css/, writing href=\"styles.css\" will fail. You must write href=\"css/styles.css\"."
      },
      {
        "category": "pro_tips",
        "title": "ID vs Class in Practical Exams",
        "description": "Always remember: use ID (#) for a single unique element on a page, and Class (.) for reusable styling across multiple elements."
      }
    ],
    "vivaQuestions": [
      {
        "question": "Why is external CSS preferred over internal and inline CSS in real-world web development?",
        "answer": "External CSS allows you to maintain and update the design of an entire multi-page website from a single file, enables browser caching for faster page loads, and keeps HTML markup clean and semantic."
      },
      {
        "question": "What is the purpose of the rel=\"stylesheet\" attribute in the <link> tag?",
        "answer": "The rel attribute defines the relationship between the HTML document and the linked file. rel=\"stylesheet\" explicitly informs the browser that the linked resource is a CSS stylesheet to be applied to the page."
      },
      {
        "question": "Can you have multiple elements with the same ID in a single HTML document?",
        "answer": "No. HTML specifications strictly require that an ID must be unique within an entire document. For multiple elements, use classes instead."
      },
      {
        "question": "What is a descendant selector in CSS, and how is it written?",
        "answer": "A descendant selector matches all elements that are nested inside a specified ancestor element. It is written by separating selectors with a space (e.g., div p matches all <p> elements inside any <div>)."
      },
      {
        "question": "Do you need to put <style> tags inside an external .css file?",
        "answer": "No! An external .css file must contain only pure CSS rules and comments. Putting <style> tags inside a .css file will cause CSS parsing errors."
      }
    ]
  }
];
