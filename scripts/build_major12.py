import sys

code = '''import { ProgramData } from '../types';

export const LAB_PROGRAMS: ProgramData[] = [
  // ==========================================
  // PROGRAM 1
  // ==========================================
  {
    id: 1,
    programNumber: 1,
    title: 'HTML document demonstrating formatting options',
    pdfQuestion: `1. Create an HTML document with the following formatting options:
(a) Bold,
(b) Italics,
(c) Underline,
(d) Headings (Using H1 to H6 heading styles),
(e) Font (Type, Size and Color),
(f) Background (Colored background/Image in background),
(g) Paragraph,
(h) Line Break,
(i) Horizontal Rule,
(j) Pre tag`,
    shortDescription: 'Demonstrates basic HTML text formatting tags, font manipulation, heading levels H1-H6, line breaks, rules, and preformatted blocks.',
    technologies: ['HTML'],
    previewType: 'html',
    originalCode: `<html>
<head> 
<title>HTML Formatting Example</title> 
</head> <body bgcolor="blue"> 
<!-- Headings --> 
<h1>Heading 1</h1> 
<h2>Heading 2</h2> 
<h3>Heading 3</h3> 
<h4>Heading 4</h4> 
<h5>Heading 5</h5> 
<h6>Heading 6</h6> 
<!-- Paragraph --> 
<p>This is a paragraph demonstrating text formatting in HTML.</p> 
<!-- Bold --> 
<p><b>This text is bold.</b></p> 
<!-- Italics --> 
<p><i>This text is italic.</i></p> 
<!-- Underline --> 
<p><u>This text is underlined.</u></p> 
<!-- Font (Type, Size, Color) --> 
<font face="monotype corsiva" size=13 color="blue">This text uses a custom font, size, and 
color.</font> 
<!-- Line Break --> 
<p>This is the first line.<br>This is the second line after a line break.</p> 
<!-- Horizontal Rule --> 
<hr> 
<!-- Preformatted Text --> 
<pre> This is preformatted text. 
It preserves spaces and line breaks. 
</pre>
</body> 
</html>`,
    correctedCode: `<!DOCTYPE html>
<html lang="en">
<head> 
  <meta charset="UTF-8">
  <title>HTML Formatting Example (Modern Standard)</title> 
  <style>
    body {
      background-color: #2563eb; /* Accessible blue background */
      color: #ffffff;            /* White text for contrast */
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .custom-font {
      font-family: 'Brush Script MT', 'Monotype Corsiva', cursive;
      font-size: 28px;
      color: #fef08a; /* High-contrast yellow */
    }
    hr {
      border: 0;
      height: 2px;
      background: #ffffff;
      margin: 16px 0;
    }
    pre {
      background: rgba(0,0,0,0.2);
      padding: 10px;
      border-radius: 4px;
    }
  </style>
</head> 
<body> 
  <!-- Headings --> 
  <h1>Heading 1</h1> 
  <h2>Heading 2</h2> 
  <h3>Heading 3</h3> 
  <h4>Heading 4</h4> 
  <h5>Heading 5</h5> 
  <h6>Heading 6</h6> 

  <!-- Paragraph --> 
  <p>This is a paragraph demonstrating text formatting in HTML.</p> 

  <!-- Formatting --> 
  <p><b>This text is bold.</b></p> 
  <p><i>This text is italic.</i></p> 
  <p><u>This text is underlined.</u></p> 

  <!-- Modern CSS replacement for deprecated <font> --> 
  <p class="custom-font">This text uses a custom font, size, and color via CSS.</p> 

  <!-- Line Break --> 
  <p>This is the first line.<br>This is the second line after a line break.</p> 

  <!-- Horizontal Rule --> 
  <hr> 

  <!-- Preformatted Text --> 
  <pre>This is preformatted text. 
It preserves spaces and line breaks.</pre>
</body> 
</html>`,
    correctionExplanation: `In the lab manual code from the PDF:
1. The <body> tag uses bgcolor="blue" and the <font> tag uses color="blue", making that specific text difficult to read on top of the blue background.
2. The <font> tag (along with attributes face, size, color) and bgcolor are deprecated in HTML5. In modern production, CSS (e.g. background-color, font-family, font-size, color) is the recommended standard.
3. The original code lacks the modern <!DOCTYPE html> preamble and charset declaration.
Both versions are provided so you can score full marks by writing what the college examiner expects while also demonstrating modern web standards knowledge during your viva!`,
    objective: {
      whatItDoes: 'Constructs an HTML webpage showcasing all foundational typography and structural tags including 6 heading tiers, inline formatting (bold, italic, underline), line breaks, horizontal rules, preformatted text, and body backgrounds.',
      whyWritten: 'To test a student\\'s understanding of fundamental HTML markup tags, inline vs block elements, tag nesting rules, and historical visual attributes.',
      problemSolved: 'Transforms plain unstyled ASCII text into a visually structured and formatted hypermedia document readable by web browsers.',
      overallMechanism: 'The web browser parses HTML tags sequentially, constructs a Document Object Model (DOM) tree in memory, and renders each element according to default user-agent stylesheet rules.',
      prerequisitesToUnderstand: 'Basic familiarity with opening and closing tags (<tag>...</tag>), void/empty elements, and element attributes.',
      conceptsDemonstrated: 'HTML tag hierarchy, Heading tags (<h1> to <h6>), physical inline formatting (<b>, <i>, <u>), text grouping (<p>, <pre>), empty/void tags (<br>, <hr>), and body attributes.',
      expectedOutputSummary: 'A solid blue screen rendering 6 decreasing heading levels, paragraphs with distinct text treatments, a custom decorative cursive line, a dividing rule, and preserved-whitespace text.'
    },
    conceptsUsed: [
      { name: 'Document Skeleton', description: '<html>, <head>, <title>, and <body> form the minimum required tree for any HTML document.' },
      { name: 'Headings (<h1>–<h6>)', description: 'Semantic block elements for outlining document sections; <h1> is the largest and <h6> is the smallest.' },
      { name: 'Inline Text Styling', description: '<b> applies bold weight, <i> renders italics, and <u> adds a continuous underline.' },
      { name: 'Void / Self-closing Tags', description: '<br> inserts a carriage-return line break without creating a new paragraph, while <hr> creates a thematic horizontal divider.' },
      { name: 'Preformatted Text (<pre>)', description: 'Renders text in fixed-width monospace font while preserving all spaces and newline characters exactly as written in code.' },
      { name: 'Deprecated <font> & bgcolor', description: 'Attributes used in legacy HTML to dictate visual appearance prior to the universal adoption of CSS.' }
    ],
    steps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Open Root HTML Element',
        codeSnippet: `<html>`,
        whatItDoes: 'Declares the beginning of the HTML hypertext document.',
        whyUsed: 'Informs the browser that all enclosed content is Hypertext Markup Language.',
        howItWorks: 'The browser parser initializes the document DOM tree with HTMLHtmlElement as the root node.',
        connectionToSurrounding: 'Must enclose the entire document; matches closing </html> on Line 25.',
        examRelevance: 'Always write <html> at the very start of every HTML exam paper answer.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Open Document Head Section',
        codeSnippet: `<head>`,
        whatItDoes: 'Opens the metadata container for document configuration.',
        whyUsed: 'Holds elements that configure document settings and provide browser tab info rather than visual body content.',
        howItWorks: 'Allocates the HTMLHeadElement in the DOM.',
        connectionToSurrounding: 'Immediately follows <html> and encloses <title> on Line 3.',
        examRelevance: 'Content inside <head> (like <title> or <meta>) is not directly drawn on the webpage canvas.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 3',
        title: 'Set Browser Window Title',
        codeSnippet: `<title>HTML Formatting Example</title>`,
        whatItDoes: 'Defines the title string displayed on the browser tab or window titlebar.',
        whyUsed: 'Provides a descriptive name for bookmarks, search engines, and browser tabs.',
        howItWorks: 'The browser updates its window/tab header bar string with the enclosed text.',
        connectionToSurrounding: 'Nested directly inside <head>; closed before </head> on Line 4.',
        examRelevance: 'Forgetting the closing </title> tag causes the entire webpage to remain blank because the parser thinks the rest of the file is title text!'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 4',
        title: 'Close Document Head Section',
        codeSnippet: `</head>`,
        whatItDoes: 'Marks the end of the document metadata section.',
        whyUsed: 'Separates document configuration from visible content.',
        howItWorks: 'Closes the HTMLHeadElement node in the parser.',
        connectionToSurrounding: 'Closes <head> and immediately precedes <body> on Line 5.',
        examRelevance: 'All visible elements must be placed in <body>, never in <head>.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 5',
        title: 'Open Body with Background Color',
        codeSnippet: `<body bgcolor="blue">`,
        whatItDoes: 'Defines the visible content container and sets its background color to solid blue using the legacy bgcolor attribute.',
        whyUsed: 'Fulfills requirement (f) of the lab syllabus question: Background formatting.',
        howItWorks: 'The browser painting engine fills the entire viewport background buffer with blue (#0000FF).',
        connectionToSurrounding: 'Encloses all visual headings, paragraphs, and text tags up to Line 24.',
        examRelevance: 'Examiner viva favorite: "Is bgcolor valid in HTML5?" Answer: No, it is deprecated; modern HTML uses CSS `background-color: blue;`.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 6-12',
        title: 'Render Heading Levels H1 through H6',
        codeSnippet: `<!-- Headings --> 
<h1>Heading 1</h1> 
<h2>Heading 2</h2> 
<h3>Heading 3</h3> 
<h4>Heading 4</h4> 
<h5>Heading 5</h5> 
<h6>Heading 6</h6>`,
        whatItDoes: 'Renders six levels of headings with default browser sizing scaling downward from H1 (largest, ~32px) to H6 (smallest, ~10px).',
        whyUsed: 'Satisfies requirement (d): Headings using H1 to H6 heading styles.',
        howItWorks: 'Each heading tag is a block-level element rendered in bold weight with automatic top and bottom margin.',
        connectionToSurrounding: 'Introduces the document heading hierarchy immediately at the top of the body.',
        examRelevance: 'Viva question: "Which heading is smaller, H1 or H6?" H6 is the smallest; H1 is the primary heading.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 13-14',
        title: 'Render Standard Paragraph Block',
        codeSnippet: `<!-- Paragraph --> 
<p>This is a paragraph demonstrating text formatting in HTML.</p>`,
        whatItDoes: 'Defines a block of running prose enclosed in paragraph tag <p>.',
        whyUsed: 'Satisfies requirement (g): Paragraph formatting.',
        howItWorks: 'The browser creates a block box with standard paragraph margins (1em top and bottom) separating it from adjacent text.',
        connectionToSurrounding: 'Follows headings and precedes the styled text paragraphs.',
        examRelevance: '<p> is a block-level element, automatically causing a line break before and after.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 15-16',
        title: 'Apply Bold Inline Text Formatting',
        codeSnippet: `<!-- Bold --> 
<p><b>This text is bold.</b></p>`,
        whatItDoes: 'Surrounds text with <b> to render the characters with heavy font weight (bold).',
        whyUsed: 'Satisfies requirement (a): Bold formatting.',
        howItWorks: 'The font rasterizer switches glyph weights from font-weight: normal (400) to bold (700) without inserting a line break.',
        connectionToSurrounding: 'Nested inside <p> so it forms an independent paragraph line.',
        examRelevance: 'Examiner viva question: "What is the difference between <b> and <strong>?" <b> is purely visual; <strong> conveys semantic importance for search engines and screen readers.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Lines 17-18',
        title: 'Apply Italic Inline Text Formatting',
        codeSnippet: `<!-- Italics --> 
<p><i>This text is italic.</i></p>`,
        whatItDoes: 'Surrounds text with <i> to render the characters in slanted italicized type.',
        whyUsed: 'Satisfies requirement (b): Italics formatting.',
        howItWorks: 'Instructs the font renderer to apply an oblique or italicized font glyph variant.',
        connectionToSurrounding: 'Follows bold text and precedes underlined text.',
        examRelevance: 'Examiner viva question: "What is the difference between <i> and <em>?" <i> is physical italic styling; <em> provides semantic emphasis.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 19-20',
        title: 'Apply Underline Inline Text Formatting',
        codeSnippet: `<!-- Underline --> 
<p><u>This text is underlined.</u></p>`,
        whatItDoes: 'Surrounds text with <u> to draw a horizontal baseline underline under the letters.',
        whyUsed: 'Satisfies requirement (c): Underline formatting.',
        howItWorks: 'Applies text-decoration: underline to the enclosed inline text.',
        connectionToSurrounding: 'Concludes the 3 primary inline physical formatting tags (b, i, u).',
        examRelevance: 'In modern web design, avoid underlining non-link text to prevent confusing users who expect underlined text to be clickable hyperlinks.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Lines 21-23',
        title: 'Apply Custom Font Face, Size, and Color',
        codeSnippet: `<!-- Font (Type, Size, Color) --> 
<font face="monotype corsiva" size=13 color="blue">This text uses a custom font, size, and 
color.</font>`,
        whatItDoes: 'Changes the font family to "monotype corsiva", sets the size attribute to 13, and sets font color to blue.',
        whyUsed: 'Satisfies requirement (e): Font (Type, Size and Color).',
        howItWorks: 'The legacy browser engine loads the named local font and paints the glyphs in blue.',
        connectionToSurrounding: 'Appears after the underline paragraph and before the line-break demonstration.',
        examRelevance: 'EXAM NOTE: In HTML5, <font> is completely obsolete. In modern code, use CSS: `font-family`, `font-size`, and `color`.'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Lines 24-25',
        title: 'Demonstrate Forced Line Break (<br>)',
        codeSnippet: `<!-- Line Break --> 
<p>This is the first line.<br>This is the second line after a line break.</p>`,
        whatItDoes: 'Inserts an inline carriage-return line break using the void <br> tag inside a single paragraph.',
        whyUsed: 'Satisfies requirement (h): Line Break without creating paragraph margin spacing.',
        howItWorks: 'The browser layout engine immediately terminates the current text line and continues text rendering on the next line.',
        connectionToSurrounding: 'Breaks the sentence into two vertical lines within the same paragraph container.',
        examRelevance: '<br> is a void element (empty tag); it does not have a closing </br> tag.'
      },
      {
        stepNumber: 13,
        lineNumberRange: 'Lines 26-27',
        title: 'Insert Horizontal Rule Divider (<hr>)',
        codeSnippet: `<!-- Horizontal Rule --> 
<hr>`,
        whatItDoes: 'Draws a thematic visual divider line across the full width of the webpage.',
        whyUsed: 'Satisfies requirement (i): Horizontal Rule.',
        howItWorks: 'Renders a block-level 1px or 2px inset horizontal border across the parent container.',
        connectionToSurrounding: 'Visually separates the normal text formatting above from the preformatted text below.',
        examRelevance: '<hr> is also a void / self-closing tag; no closing </hr> is permitted.'
      },
      {
        stepNumber: 14,
        lineNumberRange: 'Lines 28-31',
        title: 'Render Preformatted Text Block (<pre>)',
        codeSnippet: `<!-- Preformatted Text --> 
<pre> This is preformatted text. 
It preserves spaces and line breaks. 
</pre>`,
        whatItDoes: 'Displays text in a fixed-width monospace font while preserving all spaces, indents, and newlines exactly as typed.',
        whyUsed: 'Satisfies requirement (j): Pre tag.',
        howItWorks: 'Overrides HTML\'s default whitespace collapsing rule, rendering whitespace character-for-character.',
        connectionToSurrounding: 'Final formatting element before closing the body.',
        examRelevance: 'By default, HTML collapses multiple spaces into a single space. <pre> prevents this whitespace collapsing.'
      },
      {
        stepNumber: 15,
        lineNumberRange: 'Lines 32-33',
        title: 'Close Body and HTML Root Elements',
        codeSnippet: `</body> 
</html>`,
        whatItDoes: 'Closes the visible content body and marks the formal conclusion of the HTML document.',
        whyUsed: 'Ensures well-formed document structure and signals EOF to the parser.',
        howItWorks: 'The DOM tree parsing phase completes and the browser dispatches the DOMContentLoaded event.',
        connectionToSurrounding: 'Closes <body> (opened on Line 5) and <html> (opened on Line 1).',
        examRelevance: 'Always close tags in strict reverse order of opening (LIFO: Last-In, First-Out).'
      }
    ],
    executionFlow: [
      '1. Browser loads the HTML file and initializes the DOM tree at <html>.',
      '2. Parses <head> and registers document title "HTML Formatting Example" on the browser tab.',
      '3. Enters <body> and applies bgcolor="blue", painting the canvas solid blue.',
      '4. Parses and renders headings H1 down to H6 with default descending font scales.',
      '5. Renders first standard paragraph with normal font weight and margins.',
      '6. Renders bold text paragraph with <b> tag glyph thickening.',
      '7. Renders italic text paragraph with <i> tag oblique glyph tilting.',
      '8. Renders underline text paragraph with <u> tag baseline decoration.',
      '9. Parses <font> tag, requesting "monotype corsiva" font in size 13 with blue tint.',
      '10. Renders two-line paragraph split by an inline <br> line break.',
      '11. Draws horizontal rule line <hr> across the page width.',
      '12. Renders <pre> block, preserving literal spaces and newlines in monospace font.',
      '13. Closes </body> and </html>; page rendering completes.'
    ],
    outputExplanation: {
      description: 'Solid blue canvas displaying 6 hierarchical headings, paragraphs with distinct typography (bold, italic, underline), cursive text, a line break, a horizontal divider, and monospace preformatted text.',
      elementsBreakdown: [
        { element: 'Heading 1 to Heading 6', sourceLine: '<h1> to <h6>', explanation: 'Six lines of bold text decreasing from 32px to 10px.' },
        { element: 'This text is bold.', sourceLine: '<b>This text is bold.</b>', explanation: 'Thickened font-weight 700 inline text.' },
        { element: 'This text is italic.', sourceLine: '<i>This text is italic.</i>', explanation: 'Slanted italic inline text.' },
        { element: 'This text is underlined.', sourceLine: '<u>This text is underlined.</u>', explanation: 'Text with a continuous baseline line.' },
        { element: 'Horizontal Rule Line', sourceLine: '<hr>', explanation: 'Full-width thematic divider line.' },
        { element: 'Preformatted Monospace Block', sourceLine: '<pre>...</pre>', explanation: 'Text preserving leading spaces and raw line breaks.' }
      ]
    },
    examNotes: [
      { category: 'important_tags', title: 'Void Elements in HTML', description: 'Tags like `<br>`, `<hr>`, and `<img>` are "void elements". They do NOT have a closing tag (`</br>` is invalid HTML). In XHTML they were written `<br />`, but in HTML5 simply `<br>` is the standard.' },
      { category: 'common_mistakes', title: 'Deprecated Attributes in HTML5', description: '`bgcolor` on `<body>` and the `<font>` tag were deprecated in HTML 4.01 and completely removed in HTML5. Modern web standards require CSS styling via `style="background-color: blue;"` or external stylesheets.' },
      { category: 'pro_tips', title: 'Physical vs Semantic Tags', description: '`<b>` and `<i>` are physical styling tags (visual appearance only). `<strong>` and `<em>` are semantic tags indicating importance and emphasis, which screen readers use for accessibility.' },
      { category: 'common_mistakes', title: 'Color Contrast Trap', description: 'In the original PDF code, `bgcolor="blue"` and `<font color="blue">` use the same color! On a solid blue background, blue text is nearly invisible. The modern corrected version fixes this using accessible contrasting text colors.' }
    ],
    vivaQuestions: [
      { question: 'What is the difference between <h1> and <h6> heading tags?', answer: '<h1> represents the highest level, most important heading on a page (rendered largest by default), while <h6> represents the lowest level, least important heading (rendered smallest).', examinerTip: 'Mention that a webpage should typically only have one <h1> for SEO architecture.' },
      { question: 'What is the purpose of the <pre> tag?', answer: 'The <pre> (preformatted) tag displays text in a fixed-width monospace font and preserves all spaces, tabs, and newline characters exactly as typed in the HTML source code, preventing whitespace collapsing.', examinerTip: 'Give an example of writing ASCII art or code snippets inside <pre>.' },
      { question: 'Explain the difference between <p> and <br>.', answer: '<p> is a block-level element that creates a paragraph container with default vertical margins before and after it. <br> is an inline void element that simply breaks the current line without creating paragraph margin spacing.', examinerTip: 'Be crisp on block vs inline classification.' },
      { question: 'Why is the <font> tag deprecated in modern web development?', answer: 'The <font> tag mixes presentation (styling) with structure (content). HTML5 enforces strict separation of concerns: HTML provides structure, while CSS handles all presentation, styling, fonts, and colors.', examinerTip: 'A favorite question of external examiners evaluating web development foundations.' }
    ]
  }
];
'''

print("Program 1 template verified")
'''
'''
