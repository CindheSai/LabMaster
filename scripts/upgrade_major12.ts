import fs from 'fs';
import { LAB_PROGRAMS } from '../src/data/labPrograms';
import { ProgramData, StepExplanation } from '../src/types';

// ============================================================================
// MAJOR 12: Granular Line-by-Line Steps & Enriched Objectives for Programs 1-9
// ============================================================================

const major12Enrichments: Record<number, {
  objectiveEnrichment: {
    problemSolved: string;
    overallMechanism: string;
    prerequisitesToUnderstand: string;
  };
  granularSteps: StepExplanation[];
}> = {
  // --------------------------------------------------------------------------
  // PROGRAM 1: HTML Document Demonstrating Formatting Options
  // --------------------------------------------------------------------------
  1: {
    objectiveEnrichment: {
      problemSolved: 'Plain unformatted text is unreadable and lacks visual hierarchy. This program demonstrates foundational HTML markup for styling headings, typography, text decorations, and content dividers without requiring external style sheets.',
      overallMechanism: 'The browser parses the HTML document hierarchically into a DOM tree, applying default user-agent styling and legacy attributes (like bgcolor, font face, size, and inline tags like b, i, u, pre) to render structured text blocks.',
      prerequisitesToUnderstand: 'Basic understanding of HTML tags (opening and closing), attributes (name="value"), and how web browsers interpret plain text markup.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Open Root HTML Element',
        codeSnippet: `<html>`,
        whatItDoes: 'Marks the official start of the HyperText Markup Language document.',
        whyUsed: 'Informs the browser parser that everything enclosed until </html> is HTML code.',
        howItWorks: 'Instantiates the Document Root in the Document Object Model (DOM).',
        connectionToSurrounding: 'Acts as top-level parent wrapper enclosing <head> and <body>.',
        examRelevance: 'Mandatory in all HTML standards; must be closed at the very end of file.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Open Document Head Section',
        codeSnippet: `<head>`,
        whatItDoes: 'Opens the metadata container for the web page.',
        whyUsed: 'Houses non-rendered configuration metadata, scripts, styles, and page titles.',
        howItWorks: 'The browser reads this section before rendering visible page content.',
        connectionToSurrounding: 'Must be placed immediately after <html> and before <body>.',
        examRelevance: 'Common viva question: Content in <head> is NOT displayed directly in the browser viewport (except title in tab).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 3',
        title: 'Set Browser Window Title',
        codeSnippet: `<title>HTML Formatting Example</title>`,
        whatItDoes: 'Defines the title of the document shown in the browser window or tab.',
        whyUsed: 'Crucial for user orientation, bookmarks, search engine snippets, and accessibility.',
        howItWorks: 'The browser updates the tab title and window header with this string.',
        connectionToSurrounding: 'Must reside exclusively inside the <head> element.',
        examRelevance: 'Examiners check if <title> is correctly closed with </title>.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 4',
        title: 'Close Document Head Section',
        codeSnippet: `</head>`,
        whatItDoes: 'Terminates the document metadata container.',
        whyUsed: 'Prevents metadata parsing leak into document body content.',
        howItWorks: 'Signals the browser parser that metadata declaration is complete.',
        connectionToSurrounding: 'Transitions immediately into the visible <body> section.',
        examRelevance: 'Head and Body must never overlap or nest inside each other.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 4 (continued)',
        title: 'Open Body with Background Color',
        codeSnippet: `<body bgcolor="blue">`,
        whatItDoes: 'Opens the visible content canvas and paints the page background blue.',
        whyUsed: 'Satisfies the lab requirement for colored background using the legacy bgcolor attribute.',
        howItWorks: 'Browser fills the canvas with the color blue (0x0000FF).',
        connectionToSurrounding: 'Contains all visible headings, paragraphs, and formatted elements.',
        examRelevance: 'Viva point: In modern HTML5, bgcolor is deprecated in favor of CSS background-color.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 6-11',
        title: 'Render Heading Levels H1 through H6',
        codeSnippet: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
        whatItDoes: 'Generates six hierarchical levels of headings, from largest (H1) to smallest (H6).',
        whyUsed: 'Demonstrates content structuring and semantic hierarchy required by the practical syllabus.',
        howItWorks: 'Browser applies default block-level display, bold weight, and decreasing font sizes.',
        connectionToSurrounding: 'Provides the visual top header before paragraphs and inline text formatting.',
        examRelevance: 'Examiner favorite: <h1> has the largest font size and highest semantic weight; <h6> has the smallest.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 13',
        title: 'Render Standard Paragraph Block',
        codeSnippet: `<p>This is a paragraph demonstrating text formatting in HTML.</p>`,
        whatItDoes: 'Creates a distinct block of running text with vertical margins.',
        whyUsed: 'Separates prose text cleanly from heading elements.',
        howItWorks: 'Browser inserts default top and bottom margin (typically 1em).',
        connectionToSurrounding: 'Serves as an introductory descriptive paragraph before specific formatting tags.',
        examRelevance: '<p> is a block-level element, automatically starting on a new line.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Line 15',
        title: 'Apply Bold Inline Text Formatting',
        codeSnippet: `<p><b>This text is bold.</b></p>`,
        whatItDoes: 'Renders the enclosed text in heavy bold weight font.',
        whyUsed: 'Draws optical emphasis to critical keywords or labels.',
        howItWorks: 'Instructs the font rasterizer to use bold glyphs (font-weight: bold).',
        connectionToSurrounding: 'Encapsulated inside a paragraph container for consistent line spacing.',
        examRelevance: 'Viva distinction: <b> is physical formatting; <strong> provides semantic importance for screen readers.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Line 17',
        title: 'Apply Italic Inline Text Formatting',
        codeSnippet: `<p><i>This text is italic.</i></p>`,
        whatItDoes: 'Slants text characters at an angle (italicized / oblique).',
        whyUsed: 'Used for scientific terms, thoughts, citations, or subtle emphasis.',
        howItWorks: 'Browser switches to the font\'s italic typeface (font-style: italic).',
        connectionToSurrounding: 'Follows bold text to showcase the next physical styling requirement.',
        examRelevance: 'Viva distinction: <i> is purely visual italic; <em> conveys semantic stress emphasis.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Line 19',
        title: 'Apply Underline Inline Text Formatting',
        codeSnippet: `<p><u>This text is underlined.</u></p>`,
        whatItDoes: 'Draws a solid continuous baseline horizontal line beneath text characters.',
        whyUsed: 'Emphasizes text or replicates legacy print typography styles.',
        howItWorks: 'Renders baseline text decoration (text-decoration: underline).',
        connectionToSurrounding: 'Completes the trio of classic word processor inline formatting: bold, italic, underline.',
        examRelevance: 'In web usability, avoid underlining non-link text to prevent confusing users looking for clickable hyperlinks.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Line 21',
        title: 'Apply Custom Font Face, Size, and Color',
        codeSnippet: `<font face="monotype corsiva" size=13 color="blue">This text uses a custom font, size, and color.</font>`,
        whatItDoes: 'Applies typeface family "monotype corsiva", font size 13, and blue text color.',
        whyUsed: 'Demonstrates legacy HTML font styling tag required by university syllabus option (e).',
        howItWorks: 'Changes font metrics and foreground color for the enclosed text span.',
        connectionToSurrounding: 'Shows inline font manipulation before structural dividers.',
        examRelevance: 'Critical viva note: <font> is deprecated in HTML5; modern development uses CSS (font-family, font-size, color).'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Line 23',
        title: 'Demonstrate Forced Line Break (<br>)',
        codeSnippet: `<p>This is the first line.<br>This is the second line after a line break.</p>`,
        whatItDoes: 'Forces an immediate carriage return onto the next line without starting a new paragraph margin.',
        whyUsed: 'Essential for addresses, poems, or multi-line single paragraph text.',
        howItWorks: 'Break tag interrupts line layout and moves the cursor to the left edge of next line.',
        connectionToSurrounding: 'Illustrates inline vertical break before horizontal dividers.',
        examRelevance: '<br> is a void / empty tag; it has no closing tag in HTML (written <br> or <br />).'
      },
      {
        stepNumber: 13,
        lineNumberRange: 'Line 25',
        title: 'Insert Horizontal Rule Divider (<hr>)',
        codeSnippet: `<hr>`,
        whatItDoes: 'Draws a horizontal thematic line across the entire width of the page container.',
        whyUsed: 'Creates a clean visual separator between content sections.',
        howItWorks: 'Renders a 1px or 2px inset rule across 100% available width with vertical margins.',
        connectionToSurrounding: 'Divides the paragraph text above from the preformatted block below.',
        examRelevance: '<hr> is also a void / empty tag with no closing pair in standard HTML.'
      },
      {
        stepNumber: 14,
        lineNumberRange: 'Lines 27-30',
        title: 'Render Preformatted Text Block (<pre>)',
        codeSnippet: `<pre>
 This is preformatted text.
 It preserves spaces and line breaks.
</pre>`,
        whatItDoes: 'Displays text in a fixed-width monospace font while preserving all spaces and line returns verbatim.',
        whyUsed: 'Normally HTML collapses multiple consecutive spaces into a single space; <pre> preserves raw layout.',
        howItWorks: 'Sets white-space: pre and font-family: monospace in the rendering engine.',
        connectionToSurrounding: 'Showcases specialized textual display before page termination.',
        examRelevance: 'Viva question: How does browser treat spaces inside <p> vs <pre>? <p> collapses them; <pre> preserves them.'
      },
      {
        stepNumber: 15,
        lineNumberRange: 'Lines 31-32',
        title: 'Close Document Body and Root HTML',
        codeSnippet: `</body>
</html>`,
        whatItDoes: 'Formally terminates the visible content canvas and closes the HTML document.',
        whyUsed: 'Ensures DOM tree is properly closed without dangling nodes.',
        howItWorks: 'Browser parser finalizes layout calculations and triggers page load event.',
        connectionToSurrounding: 'Closes elements opened on Lines 4 and 1.',
        examRelevance: 'Proper tag nesting and clean closure are graded rigorously in practical exams.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 2: HTML Lists and Image Example
  // --------------------------------------------------------------------------
  2: {
    objectiveEnrichment: {
      problemSolved: 'Students need to understand how to present structured sequential, non-sequential, and hierarchical data, as well as embedding visual media into HTML pages.',
      overallMechanism: 'The browser renders list containers (<ol>, <ul>, <dl>) by computing automatic markers (numbers, letters, roman numerals, bullets) and left indents for each child item (<li>, <dt>, <dd>), while fetching and rendering images via <img>.',
      prerequisitesToUnderstand: 'Basic HTML document structure (html, head, body) and differences between block vs inline media.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'Document Root, Head, and Title Initialization',
        codeSnippet: `<html>
<head>
<title>HTML Lists and Image Example</title>
</head>`,
        whatItDoes: 'Opens HTML document, establishes metadata container, and sets browser tab title to "HTML Lists and Image Example".',
        whyUsed: 'Provides the required valid document envelope.',
        howItWorks: 'Browser creates the document root and window header.',
        connectionToSurrounding: 'Precedes the visible <body> section.',
        examRelevance: 'Every lab document must start with proper root and head sections.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 5',
        title: 'Open Document Body',
        codeSnippet: `<body>`,
        whatItDoes: 'Opens the canvas for visible elements including headings, lists, and images.',
        whyUsed: 'Container for all page layout elements.',
        howItWorks: 'Initializes the default user-agent flow container.',
        connectionToSurrounding: 'Contains all ordered lists, unordered lists, definition lists, and images.',
        examRelevance: 'Always matches with closing </body> at end of file.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 6-12',
        title: 'Ordered List with Default Numbers (1, 2, 3)',
        codeSnippet: `<h2>Ordered List (Default - Numbers)</h2>
<ol>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ol>`,
        whatItDoes: 'Renders an ordered numbered list starting at 1 with items Apple, Banana, Cherry.',
        whyUsed: 'Demonstrates default numerical sequencing in HTML.',
        howItWorks: '<ol> defaults to type="1"; increments an internal counter for each <li>.',
        connectionToSurrounding: 'Introduces the first list type requested in syllabus.',
        examRelevance: 'Default type for <ol> is arabic numerals ("1").'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 13-19',
        title: 'Ordered List with Capital Letters (A, B, C)',
        codeSnippet: `<h2>Ordered List (Uppercase Letters)</h2>
<ol type="A">
  <li>Red</li>
  <li>Green</li>
  <li>Blue</li>
</ol>`,
        whatItDoes: 'Renders an ordered sequence using capital alphabetic letters (A. Red, B. Green, C. Blue).',
        whyUsed: 'Demonstrates modifying list counter numbering system using type="A".',
        howItWorks: 'Browser calculates alphabetical indices A, B, C... for list markers.',
        connectionToSurrounding: 'Follows numeric list to show alternative ordering attributes.',
        examRelevance: 'Valid type values for <ol>: "1", "A", "a", "I", "i".'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 20-26',
        title: 'Ordered List with Lowercase Roman Numerals (i, ii, iii)',
        codeSnippet: `<h2>Ordered List (Lowercase Roman Numerals)</h2>
<ol type="i">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>`,
        whatItDoes: 'Renders an ordered sequence using lowercase roman numerals (i, ii, iii).',
        whyUsed: 'Demonstrates roman numeral numbering frequently used in academic outlines.',
        howItWorks: 'Browser formats the ordinal number of each <li> into lowercase Roman format.',
        connectionToSurrounding: 'Completes the ordered list demonstrations.',
        examRelevance: 'Uppercase Roman uses type="I", lowercase Roman uses type="i".'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 27-33',
        title: 'Unordered List with Default Disc Bullets',
        codeSnippet: `<h2>Unordered List (Default - Disc)</h2>
<ul>
  <li>Dog</li>
  <li>Cat</li>
  <li>Elephant</li>
</ul>`,
        whatItDoes: 'Renders an unordered list using solid black filled circular bullets (disc).',
        whyUsed: 'Used for collections of items where order does not convey precedence or chronology.',
        howItWorks: 'Browser renders filled circle glyph (•) and indents item text.',
        connectionToSurrounding: 'Transitions from ordered to unordered list styling.',
        examRelevance: 'Default bullet type for <ul> is "disc".'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 34-40',
        title: 'Unordered List with Square Bullets',
        codeSnippet: `<h2>Unordered List (Square Bullets)</h2>
<ul type="square">
  <li>Car</li>
  <li>Bus</li>
  <li>Train</li>
</ul>`,
        whatItDoes: 'Renders an unordered list with filled square bullets (■).',
        whyUsed: 'Demonstrates the type="square" attribute on <ul>.',
        howItWorks: 'Changes bullet marker rendering from circular disc to square.',
        connectionToSurrounding: 'Contrasts with default disc styling.',
        examRelevance: 'Valid type values for <ul>: "disc", "circle", "square".'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 41-47',
        title: 'Unordered List with Hollow Circle Bullets',
        codeSnippet: `<h2>Unordered List (Circle Bullets)</h2>
<ul type="circle">
  <li>Tea</li>
  <li>Coffee</li>
  <li>Milk</li>
</ul>`,
        whatItDoes: 'Renders an unordered list using hollow circular outline bullets (○).',
        whyUsed: 'Demonstrates the type="circle" bullet style.',
        howItWorks: 'Browser renders an unfilled stroke circle marker before each item.',
        connectionToSurrounding: 'Completes the three native bullet styles of HTML.',
        examRelevance: 'CSS equivalent: list-style-type: circle.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Lines 48-60',
        title: 'Nested List (Hierarchical Menu)',
        codeSnippet: `<h2>Nested List</h2>
<ol>
  <li>Fruits
    <ul>
      <li>Mango</li>
      <li>Orange</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Potato</li>
      <li>Tomato</li>
    </ul>
  </li>
</ol>`,
        whatItDoes: 'Creates a hierarchical two-level outline with an outer ordered list containing inner unordered sublists.',
        whyUsed: 'Essential for representing categories and sub-items, breadcrumbs, and sitemaps.',
        howItWorks: 'The inner <ul> is nested strictly inside the parent <li> before closing </li>.',
        connectionToSurrounding: 'Combines ordered and unordered concepts together.',
        examRelevance: 'Examiner trap: Inner list MUST be inside the parent <li> tag, never directly between <li> tags.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 61-72',
        title: 'Definition List (<dl>, <dt>, <dd>)',
        codeSnippet: `<h2>Definition List</h2>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
        whatItDoes: 'Creates a glossary list mapping terms (<dt>) to their descriptions (<dd>).',
        whyUsed: 'Ideal for dictionaries, metadata lists, and FAQ sections.',
        howItWorks: 'Browser indents <dd> automatically beneath <dt> without bullet markers.',
        connectionToSurrounding: 'Demonstrates the third major HTML list type alongside <ol> and <ul>.',
        examRelevance: '<dl> = Definition List, <dt> = Definition Term, <dd> = Definition Description.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Lines 73-77',
        title: 'Image Embedding with Attributes',
        codeSnippet: `<h2>Image Example</h2>
<img src="flower.jpg" alt="Flower Image" width="200" height="150">`,
        whatItDoes: 'Embeds an external graphic file "flower.jpg" with fallback description and dimensions 200x150 pixels.',
        whyUsed: 'Satisfies syllabus requirement for image display alongside lists.',
        howItWorks: 'Browser sends HTTP request for flower.jpg, reserves a 200x150px box, and paints bitmap.',
        connectionToSurrounding: 'Placed after all lists as a standalone visual element.',
        examRelevance: 'Examiners always ask: What does the "alt" attribute do? Displays text if image fails to load and assists screen readers.'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Lines 78-79',
        title: 'Close Document Body and HTML Root',
        codeSnippet: `</body>
</html>`,
        whatItDoes: 'Closes the body canvas and terminates the HTML file.',
        whyUsed: 'Completes proper well-formed document structure.',
        howItWorks: 'Finalizes document rendering pipeline.',
        connectionToSurrounding: 'Closes tags opened on lines 5 and 1.',
        examRelevance: 'Ensures DOM validator passes.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 3: HTML Table with Four Rows, Five Columns, and an Image
  // --------------------------------------------------------------------------
  3: {
    objectiveEnrichment: {
      problemSolved: 'Tabular data requires strict row-and-column alignment. This program demonstrates constructing a multi-row, multi-column grid containing text headers, data cells, and embedded media.',
      overallMechanism: 'The HTML table model organizes data into a <table> wrapper with child <tr> (table row) elements containing <th> (header cell) and <td> (data cell) nodes, calculating row heights and column widths automatically.',
      prerequisitesToUnderstand: 'Understanding 2D grid structures (rows x columns) and HTML element nesting.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'Document Root, Head, and Title',
        codeSnippet: `<html>
<head>
<title>HTML Table with Image</title>`,
        whatItDoes: 'Initializes the HTML document and sets the page title.',
        whyUsed: 'Standard document envelope.',
        howItWorks: 'Browser loads the head container.',
        connectionToSurrounding: 'Encloses embedded styles and document title.',
        examRelevance: 'Always include meaningful titles in lab submissions.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-18',
        title: 'Internal CSS Table Styling Rules',
        codeSnippet: `<style>
table {
  border-collapse: collapse;
  width: 80%;
  margin: 20px auto;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #f2f2f2;
}
</style>
</head>`,
        whatItDoes: 'Applies CSS table formatting: borders collapsed into a single grid, centered 80% width, 8px cell padding, centered text alignment, and light gray header background.',
        whyUsed: 'Eliminates ugly default double borders and provides readable spacing.',
        howItWorks: 'border-collapse: collapse unites adjacent cell borders into single lines.',
        connectionToSurrounding: 'Styles all table tags rendered inside the body below.',
        examRelevance: 'Viva question: What does border-collapse: collapse do? It merges double cell borders into a single clean border.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 19-22',
        title: 'Open Body and Table Header',
        codeSnippet: `<body>
<h2 align="center">Four Rows by Five Columns Table</h2>
<table>`,
        whatItDoes: 'Opens body, outputs centered heading, and opens the <table> container.',
        whyUsed: 'Initializes the 2D grid structure.',
        howItWorks: 'Browser creates an HTMLTableElement DOM node.',
        connectionToSurrounding: 'Wraps all subsequent rows and cells.',
        examRelevance: '<table> is the master parent tag for tabular data.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 23-32',
        title: 'Row 1: Header Row (5 Columns with <th>)',
        codeSnippet: `<tr>
  <th>Header 1</th>
  <th>Header 2</th>
  <th>Header 3</th>
  <th>Header 4</th>
  <th>Header 5</th>
</tr>`,
        whatItDoes: 'Defines the first row containing five bold, centered column headings.',
        whyUsed: 'Identifies the data purpose for each vertical column.',
        howItWorks: '<tr> creates a row; <th> renders bold centered header cells.',
        connectionToSurrounding: 'Establishes the 5-column grid dimension.',
        examRelevance: 'Difference between <th> and <td>: <th> is bold and centered by default; <td> is normal and left-aligned.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 33-39',
        title: 'Row 2: Data Row with Embedded Image in Col 5',
        codeSnippet: `<tr>
  <td>Row 1, Col 1</td>
  <td>Row 1, Col 2</td>
  <td>Row 1, Col 3</td>
  <td>Row 1, Col 4</td>
  <td><img src="URL" alt="Sample Image" width="50" height="50"></td>
</tr>`,
        whatItDoes: 'Renders second row with four text cells and an embedded 50x50 pixel image in the fifth column.',
        whyUsed: 'Fulfills the specific lab question requirement: "an image inside one cell".',
        howItWorks: '<td> allows any block or inline HTML element, including <img>, to be nested inside.',
        connectionToSurrounding: 'First data row beneath headers.',
        examRelevance: 'Examiners check if image dimensions are constrained so the table does not stretch distort.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 40-46',
        title: 'Row 3: Data Row (5 Columns)',
        codeSnippet: `<tr>
  <td>Row 2, Col 1</td>
  <td>Row 2, Col 2</td>
  <td>Row 2, Col 3</td>
  <td>Row 2, Col 4</td>
  <td>Row 2, Col 5</td>
</tr>`,
        whatItDoes: 'Creates the third table row containing five textual data cells.',
        whyUsed: 'Satisfies 4-row grid requirement.',
        howItWorks: 'Browser aligns cell contents beneath corresponding headers.',
        connectionToSurrounding: 'Middle row in data grid.',
        examRelevance: 'All rows in standard tables should match the column count to prevent jagged layouts.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 47-53',
        title: 'Row 4: Data Row (5 Columns)',
        codeSnippet: `<tr>
  <td>Row 3, Col 1</td>
  <td>Row 3, Col 2</td>
  <td>Row 3, Col 3</td>
  <td>Row 3, Col 4</td>
  <td>Row 3, Col 5</td>
</tr>`,
        whatItDoes: 'Creates the fourth and final row containing five data cells.',
        whyUsed: 'Completes the 4 rows x 5 columns requirement.',
        howItWorks: 'Browser finishes grid layout calculation.',
        connectionToSurrounding: 'Final row before table closure.',
        examRelevance: 'Total grid cells: 4 rows * 5 columns = 20 cells.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 54-56',
        title: 'Close Table, Body, and HTML Root',
        codeSnippet: `</table>
</body>
</html>`,
        whatItDoes: 'Closes table container, body, and HTML document.',
        whyUsed: 'Clean structural termination.',
        howItWorks: 'Finalizes rendering.',
        connectionToSurrounding: 'Closes tags opened on lines 22, 19, and 1.',
        examRelevance: 'Ensure every <table> has a closing </table>.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 4: Aligning Images Using the HTML Table Tag
  // --------------------------------------------------------------------------
  4: {
    objectiveEnrichment: {
      problemSolved: 'Before modern CSS Grid and Flexbox existed, web developers relied on borderless HTML tables to align multiple images into consistent galleries and matrices.',
      overallMechanism: 'The browser arranges images into an invisible rectangular table grid using cellpadding for internal cell buffer and cellspacing for gutters between image cells.',
      prerequisitesToUnderstand: 'Basic table structure (table, tr, td) and image tags (img src).'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-5',
        title: 'Document Shell and Body Initialization',
        codeSnippet: `<html>
<head>
<title>p4</title>
</head>
<body>`,
        whatItDoes: 'Initializes HTML document structure with title "p4" and opens body canvas.',
        whyUsed: 'Base template for rendering browser markup.',
        howItWorks: 'Sets up DOM environment.',
        connectionToSurrounding: 'Precedes the layout table.',
        examRelevance: 'Standard HTML skeleton.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 6',
        title: 'Table Tag with Cellspacing and Cellpadding',
        codeSnippet: `<table cellspacing=6 cellpadding=6 align="center">`,
        whatItDoes: 'Creates a centered table with 6px gap between cells (cellspacing) and 6px internal padding inside each cell (cellpadding).',
        whyUsed: 'Prevents adjacent images from touching and centers the photo gallery on screen.',
        howItWorks: 'cellspacing defines space between cell walls; cellpadding defines space between cell wall and cell contents.',
        connectionToSurrounding: 'Grid container enclosing all 3 rows of images.',
        examRelevance: 'Crucial viva distinction: cellpadding = interior padding; cellspacing = exterior spacing between cells.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 7-11',
        title: 'Row 1: Top Gallery Row (4 Images)',
        codeSnippet: `<tr>
<td><img src="pic1.jpg" width="100" height="100"></td>
<td><img src="pic2.jpg" width="100" height="100"></td>
<td><img src="pic3.jpg" width="100" height="100"></td>
<td><img src="pic4.jpg" width="100" height="100"></td>`,
        whatItDoes: 'Renders the first horizontal row containing four thumbnail images aligned side-by-side.',
        whyUsed: 'Demonstrates horizontal photo gallery row.',
        howItWorks: 'Each <td> positions an image into its own column cell.',
        connectionToSurrounding: 'First row of the multi-row image collage.',
        examRelevance: 'Hardcoded local absolute paths (e.g. C:\\Documents...) in original PDF fail on other computers; use relative paths.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 12-14',
        title: 'Row 2: Middle Gallery Row (2 Images)',
        codeSnippet: `<tr>
<td><img src="pic5.jpg" width="100" height="100"></td>
<td><img src="pic6.jpg" width="100" height="100"></td>`,
        whatItDoes: 'Opens second table row and aligns two images horizontally.',
        whyUsed: 'Demonstrates multi-row table layout.',
        howItWorks: '<tr> drops to next vertical row level; cells fill columns 1 and 2.',
        connectionToSurrounding: 'Middle row in image grid.',
        examRelevance: 'PDF original omits </tr> closing tags; modern HTML automatically closes tr on next tr.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 15-18',
        title: 'Row 3: Bottom Gallery Row (3 Images)',
        codeSnippet: `<tr>
<td><img src="pic7.jpg" width="100" height="100"></td>
<td><img src="pic8.jpg" width="100" height="100"></td>
<td><img src="pic9.jpg" width="100" height="100"></td>`,
        whatItDoes: 'Defines third table row aligning three images.',
        whyUsed: 'Completes 3-row photo matrix.',
        howItWorks: 'Populates cells across columns 1, 2, and 3.',
        connectionToSurrounding: 'Final image group in gallery.',
        examRelevance: 'Table layout keeps images aligned without complex CSS floats.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 19-21',
        title: 'Close Table, Body, and HTML Root',
        codeSnippet: `</table>
</body>
</html>`,
        whatItDoes: 'Closes image table, body container, and HTML document.',
        whyUsed: 'Proper DOM closure.',
        howItWorks: 'Finishes document parsing.',
        connectionToSurrounding: 'Ends the document.',
        examRelevance: 'Always ensure table tag is balanced.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 5: Creating a Menu Form Using HTML
  // --------------------------------------------------------------------------
  5: {
    objectiveEnrichment: {
      problemSolved: 'Websites require interactive inputs to capture user selections. This program creates an online restaurant menu order form demonstrating radio buttons, checkboxes, dropdown select menus, and submit triggers.',
      overallMechanism: 'The HTML <form> element packages various input widgets (radio, checkbox, select) into named parameters that can be submitted to a server or processed by client scripts.',
      prerequisitesToUnderstand: 'Differences between single-select (radio), multi-select (checkbox), and dropdown (select) form controls.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'Document Root, Head, and Title',
        codeSnippet: `<html>
<head>
<title>Menu Order Form</title>
</head>`,
        whatItDoes: 'Opens document and sets window title to "Menu Order Form".',
        whyUsed: 'Provides page identity in browser tab.',
        howItWorks: 'Standard HTML header setup.',
        connectionToSurrounding: 'Precedes colored body.',
        examRelevance: 'Required head section.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 5',
        title: 'Body with Background and Text Color',
        codeSnippet: `<body bgcolor="skyblue" text="black">`,
        whatItDoes: 'Sets canvas background to skyblue and foreground text color to black.',
        whyUsed: 'Provides thematic contrast for restaurant menu.',
        howItWorks: 'Applies legacy presentation attributes to body node.',
        connectionToSurrounding: 'Wraps all headings and form elements.',
        examRelevance: 'Note that "text" attribute sets the default font color for all body text.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 6-8',
        title: 'Restaurant Header Banner and Form Open',
        codeSnippet: `<h1>
<center>Taj Palace Restaurant<br><br><br>
WELCOME</center><br><br> Restaurant Menu</h1> <h3> <form>`,
        whatItDoes: 'Renders centered restaurant welcome title and opens the interactive <form> tag.',
        whyUsed: 'Brand header and starts interactive form container.',
        howItWorks: 'Browser renders large header and instantiates an HTMLFormElement.',
        connectionToSurrounding: 'Contains all menu selection controls.',
        examRelevance: 'The <form> element is mandatory for grouping and submitting input controls.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 9-15',
        title: 'Radio Buttons for Main Course Selection',
        codeSnippet: `<font color="purple">Main Course Selection:</font><br>
<input type="radio" name="main_course" value="pizza"> Pizza<br>
<input type="radio" name="main_course" value="pasta"> Pasta<br>
<input type="radio" name="main_course" value="salad"> Salad<br><br><br><br>`,
        whatItDoes: 'Renders three mutually exclusive circular radio buttons for Pizza, Pasta, and Salad.',
        whyUsed: 'Users can only choose ONE main course; radio buttons enforce mutual exclusion.',
        howItWorks: 'Because all three share the exact same name="main_course", selecting one automatically unchecks the others.',
        connectionToSurrounding: 'First interactive section of menu.',
        examRelevance: 'Vital viva question: How do radio buttons achieve mutual exclusion? By sharing the exact same "name" attribute value.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 16-23',
        title: 'Checkboxes for Multiple Add-ons',
        codeSnippet: `<font color="purple"> Add-ons:</font><br>
<input type="checkbox" name="add_ons" value="extra_cheese"> Extra Cheese<br>
<input type="checkbox" name="add_ons" value="garlic_bread"> Garlic Bread<br>
<input type="checkbox" name="add_ons" value="soda"> Soda<br><br><br>`,
        whatItDoes: 'Renders three independent square checkboxes allowing zero, one, or multiple add-on selections.',
        whyUsed: 'Add-ons are non-exclusive; a customer may order extra cheese, garlic bread, AND soda together.',
        howItWorks: 'Checkboxes operate independently; each can be checked or unchecked without altering other checkboxes.',
        connectionToSurrounding: 'Second category in order form.',
        examRelevance: 'Viva comparison: Radio buttons allow 1 choice from N; Checkboxes allow 0 to N choices simultaneously.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 24-30',
        title: 'Dropdown Selection Menu (<select> and <option>)',
        codeSnippet: `<font color="purple">Choose a drink:</font><br>
<select name="drink">
<option value="water">Water</option>
<option value="juice">Juice</option>
<option value="coffee">Coffee</option>
<option value="tea">Tea</option>
</select><br><br><br><br>`,
        whatItDoes: 'Renders a compact drop-down selection box offering Water, Juice, Coffee, and Tea.',
        whyUsed: 'Saves vertical page space compared to a long list of radio buttons.',
        howItWorks: '<select> creates the popup menu; <option> defines each selectable choice with its submission value.',
        connectionToSurrounding: 'Third selection input before ordering.',
        examRelevance: 'To make an option selected by default, add the "selected" attribute (e.g. <option selected>).'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 32',
        title: 'Submit Button Input',
        codeSnippet: `<input type="submit" value="Place Order">`,
        whatItDoes: 'Renders a clickable button displaying "Place Order" that submits the form data.',
        whyUsed: 'Triggers form submission action to package all user choices.',
        howItWorks: 'When clicked, the browser gathers all successful form controls and sends an HTTP request.',
        connectionToSurrounding: 'Action trigger concluding the form inputs.',
        examRelevance: 'type="submit" sends form data; type="reset" resets all inputs back to their initial default values.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 33-35',
        title: 'Close Form, Body, and HTML Root',
        codeSnippet: `</form>
</body>
</html>`,
        whatItDoes: 'Closes form, body, and HTML document.',
        whyUsed: 'Valid document completion.',
        howItWorks: 'Finishes form scope.',
        connectionToSurrounding: 'Terminates all tags.',
        examRelevance: 'Never place inputs outside <form> if they need to be submitted together.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 6: Demonstrating Mathematical Functions in JavaScript Using HTML
  // --------------------------------------------------------------------------
  6: {
    objectiveEnrichment: {
      problemSolved: 'Web pages need dynamic numerical computing capabilities. This program demonstrates JavaScript\'s built-in Math object methods for rounding, powers, roots, trigonometry, and pseudo-random numbers.',
      overallMechanism: 'The JavaScript engine executes built-in static Math functions and injects the formatted HTML string results dynamically into a target DOM paragraph element via innerHTML.',
      prerequisitesToUnderstand: 'Basic JavaScript syntax, functions, numbers, and DOM manipulation via document.getElementById().'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-5',
        title: 'Document Root, Head, and Title',
        codeSnippet: `<html>
<head>
<title> JavaScript Math Object</title>
</head>
<body>`,
        whatItDoes: 'Sets up HTML skeleton and opens body.',
        whyUsed: 'Container for JavaScript execution and output display.',
        howItWorks: 'Standard DOM setup.',
        connectionToSurrounding: 'Precedes DOM container and script block.',
        examRelevance: 'Standard HTML wrapper.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 6-7',
        title: 'Output Header and Target DOM Container',
        codeSnippet: `<h2>JavaScript Math Methods</h2>
<p id="demo"></p>`,
        whatItDoes: 'Renders an H2 heading and creates an empty paragraph with id="demo" to receive script results.',
        whyUsed: 'Serves as the output target hook for JavaScript DOM manipulation.',
        howItWorks: 'Browser creates an empty p node that JavaScript accesses by its unique ID.',
        connectionToSurrounding: 'Referenced directly in line 10 by document.getElementById("demo").',
        examRelevance: 'id attributes must be unique across the document.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 8-9',
        title: 'Open JavaScript Script Tag',
        codeSnippet: `<!-- Script to use math object method -->
<script>`,
        whatItDoes: 'Switches the browser parser from HTML markup parsing to JavaScript script execution.',
        whyUsed: 'Embeds client-side programming logic inside an HTML document.',
        howItWorks: 'Invokes browser V8/SpiderMonkey JavaScript runtime engine.',
        connectionToSurrounding: 'Encloses all mathematical expressions.',
        examRelevance: 'In HTML5, type="text/javascript" is optional because JavaScript is the default scripting language.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 10',
        title: 'Select DOM Element and Assign innerHTML',
        codeSnippet: `document.getElementById("demo").innerHTML =`,
        whatItDoes: 'Finds the element with id="demo" and prepares to replace its HTML content with concatenated strings.',
        whyUsed: 'Dynamic client-side DOM manipulation without page reload.',
        howItWorks: 'document.getElementById searches the DOM tree; .innerHTML assigns new HTML markup.',
        connectionToSurrounding: 'Assigns the multi-line string containing all Math calculations below.',
        examRelevance: 'innerHTML parses HTML tags; textContent inserts plain text without tag parsing.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 11',
        title: 'Math.abs(-4.7) — Absolute Value',
        codeSnippet: `"<p><b>Math.abs(-4.7):</b> " + Math.abs(-4.7) + "</p>" +`,
        whatItDoes: 'Calculates the absolute (non-negative magnitude) value of -4.7, returning 4.7.',
        whyUsed: 'Removes negative signs from distances, differences, or magnitudes.',
        howItWorks: 'Returns |x|; negative numbers become positive, positive remain unchanged.',
        connectionToSurrounding: 'First mathematical function demonstrated.',
        examRelevance: 'Math.abs(-5) returns 5; Math.abs(5) returns 5.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 12-13',
        title: 'Math.min(...) — Minimum Value in Arguments',
        codeSnippet: `"<p><b>Math.min(0, 150, 30, 20, -8, -200):</b> " +
Math.min(0, 150, 30, 20, -8, -200) + "</p>" +`,
        whatItDoes: 'Finds the lowest numerical value among the passed arguments, returning -200.',
        whyUsed: 'Locates minimum threshold or lowest score.',
        howItWorks: 'Iterates through argument list comparing numerical values to return lowest.',
        connectionToSurrounding: 'Paired with Math.max below.',
        examRelevance: 'Math.min() can take any number of comma-separated numeric arguments.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 14-15',
        title: 'Math.max(...) — Maximum Value in Arguments',
        codeSnippet: `"<p><b>Math.max(0, 150, 30, 20, -8, -200):</b> " +
Math.max(0, 150, 30, 20, -8, -200) + "</p>" +`,
        whatItDoes: 'Finds the highest numerical value among arguments, returning 150.',
        whyUsed: 'Determines highest score or upper bound.',
        howItWorks: 'Returns largest number in the argument list.',
        connectionToSurrounding: 'Direct complement to Math.min.',
        examRelevance: 'Common viva trap: Math.min() with no arguments returns Infinity; Math.max() returns -Infinity.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Line 16',
        title: 'Math.pow(7, 2) — Exponentiation',
        codeSnippet: `"<p><b>Math.pow(7, 2):</b>" + Math.pow(7, 2) + "</p>" +`,
        whatItDoes: 'Raises base 7 to exponent 2 (7 squared), returning 49.',
        whyUsed: 'Performs powers and polynomial computations.',
        howItWorks: 'Computes base ** exponent (7 * 7 = 49).',
        connectionToSurrounding: 'Power function before exponential e^x.',
        examRelevance: 'In modern JS (ES6+), 7 ** 2 is the exponentiation operator equivalent to Math.pow(7, 2).'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Lines 17-19',
        title: 'Math.exp(), Math.sqrt(), Math.log() — Scientific Functions',
        codeSnippet: `"<p><b>Math.exp(30):</b>" + Math.exp(90) + "</p>" +
"<p><b>Math.sqrt(0.5):</b>" + Math.sqrt(90) + "</p>" +
"<p><b>Math.log(10):</b>" + Math.log(10) + "</p>" +`,
        whatItDoes: 'Calculates e^90 (exponential), square root of 90 (approx 9.4868), and natural logarithm ln(10) (approx 2.3025).',
        whyUsed: 'Essential for scientific, financial, and physics calculations.',
        howItWorks: 'Invokes standard IEEE 754 floating point scientific algorithms.',
        connectionToSurrounding: 'Advanced mathematical methods block.',
        examRelevance: 'Math.sqrt(-1) returns NaN (Not a Number) because square roots of negative real numbers do not exist.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 20-22',
        title: 'Math.ceil(), Math.floor(), Math.round() — Rounding Methods',
        codeSnippet: `"<p><b>Math.ceil(4.4):</b> " + Math.ceil(4.4) + "</p>" +
"<p><b>Math.floor(4.7):</b> " + Math.floor(4.7) + "</p>" +
"<p><b>Math.round(20.7):</b>" + Math.round(20.7) + "</p>" +`,
        whatItDoes: 'Demonstrates three rounding behaviors: ceil(4.4)=5 (up to ceiling), floor(4.7)=4 (down to floor), and round(20.7)=21 (nearest integer).',
        whyUsed: 'Crucial for financial rounding, pagination, and game coordinates.',
        howItWorks: 'ceil rounds up to next higher integer; floor rounds down to next lower integer; round rounds to nearest integer (.5 rounds up).',
        connectionToSurrounding: 'Demonstrates the three fundamental rounding strategies.',
        examRelevance: 'Examiner favorite: ceil(4.1) is 5; floor(4.9) is 4; round(4.5) is 5.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Lines 23-24',
        title: 'Math.random() and Math.trunc()',
        codeSnippet: `"<p><b>Math.random():</b>" + Math.random() + "</p>" +
"<p><b>Math.trunc(2.77):</b>" + Math.trunc(2.77);`,
        whatItDoes: 'Math.random() generates a pseudo-random floating point number in range [0, 1), and Math.trunc(2.77) truncates fractional digits returning integer 2.',
        whyUsed: 'Random number generation and quick integer conversion.',
        howItWorks: 'random() seeds from PRNG; trunc() simply discards digits after the decimal point.',
        connectionToSurrounding: 'Final methods concatenated into innerHTML.',
        examRelevance: 'How to generate random integer 1 to 10? Math.floor(Math.random() * 10) + 1.'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Lines 25-27',
        title: 'Close Script, Body, and Document',
        codeSnippet: `</script>
</body>
</html>`,
        whatItDoes: 'Closes JavaScript script block, document body, and HTML root.',
        whyUsed: 'Completes execution and closes tags.',
        howItWorks: 'DOM finishes painting with generated content.',
        connectionToSurrounding: 'Concludes document.',
        examRelevance: 'Ensure script tags are correctly closed.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 7: Demonstrating Regular Expressions in JavaScript Using HTML
  // --------------------------------------------------------------------------
  7: {
    objectiveEnrichment: {
      problemSolved: 'User input must be strictly validated on the client side before submission to prevent bad data and security risks. This program demonstrates regular expressions (RegExp) to validate username formats.',
      overallMechanism: 'A JavaScript function is triggered by a button click, retrieves the input text, tests it against a compiled RegExp pattern using .test(), and updates the DOM with colored feedback.',
      prerequisitesToUnderstand: 'Basic JavaScript functions, event handling (onclick), DOM value reading, and regular expression syntax (/^...$/).'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-3',
        title: 'Document Root, Head, and Title',
        codeSnippet: `<html>
<head>
<title>Regular Expression Demo</title>`,
        whatItDoes: 'Initializes document and sets title to "Regular Expression Demo".',
        whyUsed: 'Provides page identity.',
        howItWorks: 'Standard HTML header setup.',
        connectionToSurrounding: 'Precedes CSS styles.',
        examRelevance: 'Standard HTML header.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-13',
        title: 'Embedded CSS Styles for Form and Feedback States',
        codeSnippet: `<style>
body { font-family: Arial, sans-serif; margin: 20px; }
input[type="text"] { padding: 8px; width: 200px; }
button { padding: 10px 15px; background-color: #007bff; color: white; border: none; cursor: pointer; }
#result { margin-top: 15px; font-weight: bold; }
.valid { color: green; }
.invalid { color: red; }
</style>
</head>`,
        whatItDoes: 'Defines styling for the input box, primary blue button, and .valid (green) vs .invalid (red) status classes.',
        whyUsed: 'Provides visual cue to user on validation success or failure.',
        howItWorks: 'JavaScript dynamically assigns className="valid" or "invalid" to toggle green/red color.',
        connectionToSurrounding: 'Styles the form elements and result container below.',
        examRelevance: 'Separation of presentation (CSS classes) from business logic (JavaScript).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 14-17',
        title: 'Open Body, Header, and Instruction Text',
        codeSnippet: `<body>
<h1>Regular Expression Validator</h1>
<p>Enter a username (must start with a letter, contain only letters,
numbers, or underscores, and be 5-15 characters long):</p>`,
        whatItDoes: 'Renders the validator page title and user instructions detailing the 3 validation rules.',
        whyUsed: 'Informs user of requirements: starts with letter, only alphanumeric/underscore, length 5-15.',
        howItWorks: 'Standard block text rendering.',
        connectionToSurrounding: 'Sets expectations for the input field below.',
        examRelevance: 'Good UI/UX always clearly communicates validation constraints to users.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 18-20',
        title: 'Text Input, Validate Button, and Result Container',
        codeSnippet: `<input type="text" id="usernameInput" placeholder="Enter username">
<button onclick="validateUsername()">Validate</button>
<div id="result"></div>`,
        whatItDoes: 'Renders the input text box, an event button triggering validateUsername(), and an empty result div.',
        whyUsed: 'Forms the interactive validation user interface.',
        howItWorks: 'Clicking button fires the onclick event handler calling the JavaScript function.',
        connectionToSurrounding: 'Directly interacted with by the validateUsername() function.',
        examRelevance: 'onclick="functionName()" binds HTML button click event to JavaScript function.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 21-22',
        title: 'Open Script and Declare validateUsername()',
        codeSnippet: `<script>
function validateUsername() {`,
        whatItDoes: 'Opens script tag and declares the validation handler function.',
        whyUsed: 'Encapsulates validation logic into a callable routine.',
        howItWorks: 'Stored in browser memory and executed whenever Validate button is clicked.',
        connectionToSurrounding: 'Contains DOM lookups, regex testing, and UI feedback branches.',
        examRelevance: 'Functions in JavaScript are declared using the "function" keyword.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 23-25',
        title: 'Fetch DOM Elements and Read Input Value',
        codeSnippet: `const usernameInput = document.getElementById('usernameInput');
const resultDiv = document.getElementById('result');
const username = usernameInput.value;`,
        whatItDoes: 'Retrieves input and result DOM element references, and extracts the string typed by user into variable "username".',
        whyUsed: 'Supplies the raw string to be tested by regular expression.',
        howItWorks: 'document.getElementById queries DOM; .value retrieves the current text inside <input>.',
        connectionToSurrounding: 'Supplies target string to regex in Line 27.',
        examRelevance: 'input elements use .value to read text; div/p elements use .textContent or .innerHTML.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 26',
        title: 'Define Regular Expression Pattern',
        codeSnippet: `const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/;`,
        whatItDoes: 'Creates RegExp object requiring 1 letter at start (^ [a-zA-Z]), followed by 4 to 14 letters, numbers, or underscores ([a-zA-Z0-9_]{4,14}), anchored to end ($). Total length: 1 + (4..14) = 5 to 15 characters.',
        whyUsed: 'Precisely implements the 3 username requirements.',
        howItWorks: '^ asserts start of string; $ asserts end; character classes match permitted symbols.',
        connectionToSurrounding: 'Evaluated against user string in line 27.',
        examRelevance: 'Crucial viva question: Breakdown of regex: ^ = start, [a-zA-Z] = 1st char must be letter, {4,14} = 4 to 14 more chars, $ = end.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 27-30',
        title: 'Test Match and Apply Valid Status',
        codeSnippet: `if (usernameRegex.test(username)) {
  resultDiv.textContent = \`"\${username}" is a VALID username.\`;
  resultDiv.className = 'valid';
}`,
        whatItDoes: 'If .test() returns true, sets result text to VALID and adds CSS class "valid" (green color).',
        whyUsed: 'Provides immediate affirmative feedback.',
        howItWorks: 'regex.test(str) returns boolean true if string matches pattern; DOM classes update styling.',
        connectionToSurrounding: 'Success branch of conditional check.',
        examRelevance: '.test() returns boolean (true/false); .exec() returns match array or null.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Lines 31-35',
        title: 'Else Branch: Apply Invalid Status',
        codeSnippet: `else {
  resultDiv.textContent = \`"\${username}" is an INVALID username.\`;
  resultDiv.className = 'invalid';
}`,
        whatItDoes: 'If .test() returns false, sets result text to INVALID and adds CSS class "invalid" (red color).',
        whyUsed: 'Alerts user that username fails one or more format rules.',
        howItWorks: 'Assigns red text color via .invalid CSS class.',
        connectionToSurrounding: 'Failure branch of validation.',
        examRelevance: 'Template literals (\`...\`) allow embedded expressions (\${username}).'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 36-39',
        title: 'Close Function, Script, Body, and HTML',
        codeSnippet: `}
</script>
</body>
</html>`,
        whatItDoes: 'Closes validateUsername function, script tag, body, and HTML document.',
        whyUsed: 'Clean structural closure.',
        howItWorks: 'Finalizes document lifecycle.',
        connectionToSurrounding: 'Concludes the application.',
        examRelevance: 'Closing brackets must balance.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 8: Demonstrating Internal Cascading Style Sheets Using HTML
  // --------------------------------------------------------------------------
  8: {
    objectiveEnrichment: {
      problemSolved: 'Inline styling violates separation of concerns. This program demonstrates Internal CSS using a <style> block inside <head> to format element selectors, class selectors, ID selectors, and pseudo-classes across an entire document.',
      overallMechanism: 'The browser\'s CSS parser evaluates the <style> block in the <head>, constructs a CSS Object Model (CSSOM), and cascades styles onto matching HTML elements throughout the page.',
      prerequisitesToUnderstand: 'Understanding CSS syntax: selector { property: value; }, classes (.), IDs (#), and element tags.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'Document Root, Head, and Title',
        codeSnippet: `<html>
<head>
<title>Internal CSS Demonstration</title>`,
        whatItDoes: 'Initializes document and sets title.',
        whyUsed: 'Standard HTML header setup.',
        howItWorks: 'Browser loads the head container.',
        connectionToSurrounding: 'Encloses the internal <style> block.',
        examRelevance: 'Internal CSS must always reside inside <head> within <style> tags.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 5',
        title: 'Open Internal Style Block',
        codeSnippet: `<style>
/* Internal CSS starts here */`,
        whatItDoes: 'Opens the internal CSS stylesheet container.',
        whyUsed: 'Enables writing pure CSS rules without needing an external .css file.',
        howItWorks: 'Tells browser parser to interpret contents as CSS stylesheet.',
        connectionToSurrounding: 'Encloses all rules for body, h1, p, .highlight, ul, and li.',
        examRelevance: 'Viva question: Three ways to include CSS: Inline (style attribute), Internal (<style> in head), External (<link>).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 6-12',
        title: 'Body Element Selector Rule',
        codeSnippet: `body
{
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 20px;
}`,
        whatItDoes: 'Sets global document typography to Arial, background to light gray (#f4f4f4), text to dark gray (#333), and adds 20px outer margin.',
        whyUsed: 'Establishes clean global page baseline styling.',
        howItWorks: 'Inherited by child elements unless overridden by more specific selectors.',
        connectionToSurrounding: 'Sets default properties for all content in body.',
        examRelevance: 'font-family specifies fallbacks: if Arial is missing, sans-serif generic font is used.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 13-20',
        title: 'Heading 1 (h1) Element Rule',
        codeSnippet: `h1
{
  color: #007bff;
  text-align: center;
  font-size: 2.5em;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}`,
        whatItDoes: 'Styles all H1 headings: blue color (#007bff), centered text, large 2.5em font size, and an attractive blue underline border.',
        whyUsed: 'Creates a distinctive, polished section title.',
        howItWorks: 'Targets all <h1> tags on the page automatically.',
        connectionToSurrounding: 'Styles the title on line 46.',
        examRelevance: 'border-bottom with padding-bottom creates an underline separated from text descenders.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 21-26',
        title: 'Paragraph (p) Element Rule',
        codeSnippet: `p
{
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
}`,
        whatItDoes: 'Sets paragraph font size to 1.1em, comfortable line spacing to 1.6, and 15px bottom spacing between paragraphs.',
        whyUsed: 'Greatly enhances reading comfort and typographical rhythm.',
        howItWorks: 'line-height: 1.6 adds breathing room between lines of text.',
        connectionToSurrounding: 'Formats all <p> elements on lines 47-53 and 63-66.',
        examRelevance: 'Relative units: 1.1em is 1.1 times the inherited base font size.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 27-33',
        title: 'Class Selector: .highlight',
        codeSnippet: `.highlight
{
  background-color: #ffe0b2;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}`,
        whatItDoes: 'Creates a reusable class selector (.highlight) with warm orange background (#ffe0b2), padding, rounded corners, and bold text.',
        whyUsed: 'Can be applied to any HTML element via class="highlight" to highlight key phrases.',
        howItWorks: 'The dot (.) prefix identifies a class selector that matches any element with class="highlight".',
        connectionToSurrounding: 'Used in multiple <span> elements throughout the body text.',
        examRelevance: 'Crucial viva question: Classes (.) can be used multiple times on a page; IDs (#) must be unique.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 34-42',
        title: 'List Styling Rules: ul and li',
        codeSnippet: `ul
{
  list-style-type: square;
  margin-left: 20px;
}
li
{
  margin-bottom: 5px;
}`,
        whatItDoes: 'Sets unordered list bullets to square, adds 20px left indentation, and adds 5px vertical separation between list items.',
        whyUsed: 'Demonstrates styling list elements via CSS instead of HTML attributes.',
        howItWorks: 'list-style-type: square overrides default disc bullets.',
        connectionToSurrounding: 'Formats the <ul> list on lines 55-62.',
        examRelevance: 'Modern web standards require styling lists via CSS rather than legacy HTML type attributes.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 43-45',
        title: 'Close Style Block and Open Body',
        codeSnippet: `</style>
</head>
<body>`,
        whatItDoes: 'Closes internal stylesheet, terminates head, and opens document body canvas.',
        whyUsed: 'Separates style declarations from HTML content elements.',
        howItWorks: 'Browser activates CSSOM and begins HTML painting.',
        connectionToSurrounding: 'Transitions from CSS declarations to rendered HTML markup.',
        examRelevance: 'Always ensure <style> is closed before </head>.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Lines 46-53',
        title: 'Styled Heading and Paragraphs with Highlight Class',
        codeSnippet: `<h1>Understanding Internal CSS</h1>
<p>This paragraph demonstrates how <span class="highlight">internal
CSS</span> is applied directly within the HTML document's
<code>&lt;head&gt;</code> section using the <code>&lt;style&gt;</code>
tag.</p>
<p>It is useful for styling a single HTML page when the styles are unique to
that page and are not intended to be reused across multiple
documents.</p>`,
        whatItDoes: 'Renders the styled H1 heading and two informational paragraphs, utilizing the .highlight class on the words "internal CSS".',
        whyUsed: 'Demonstrates in-place application of element and class CSS rules.',
        howItWorks: '<span> inline tag groups text without breaking line flow; class="highlight" applies styling.',
        connectionToSurrounding: 'Renders the content styled by CSS rules declared above.',
        examRelevance: '<span> is an inline element used to style specific words; <div> is a block-level container.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 54-62',
        title: 'Section Subheading and Styled Bulleted List',
        codeSnippet: `<h2>Key Features of Internal CSS:</h2>
<ul>
  <li>Defined within the <code>&lt;style&gt;</code> tags in the
<code>&lt;head&gt;</code> section.</li>
  <li>Styles apply only to the HTML elements within that specific
document.</li>
  <li>Suitable for single-page styling or when styles are not meant for
external reuse.</li>
</ul>`,
        whatItDoes: 'Renders an H2 subheading and an unordered list styled with square bullets.',
        whyUsed: 'Provides structured educational content on internal CSS characteristics.',
        howItWorks: '<ul> inherits square bullets and indentation defined in CSS lines 34-42.',
        connectionToSurrounding: 'Second content section in page.',
        examRelevance: '<code> tag renders text in monospace font, ideal for displaying code tags.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Lines 63-68',
        title: 'Closing Paragraph with Multiple Classes and Page Closure',
        codeSnippet: `<p>This example showcases various CSS properties like <span
class="highlight">color</span>, <span class="highlight">font-size</span>,
<span class="highlight">background-color</span>, and <span
class="highlight">text-align</span>, all defined internally.</p>
</body>
</html>`,
        whatItDoes: 'Demonstrates reusability of the .highlight class across four separate span tags, then closes body and HTML.',
        whyUsed: 'Proves classes can be applied repeatedly to multiple elements across a document.',
        howItWorks: 'Each <span class="highlight"> independently receives orange background and padding.',
        connectionToSurrounding: 'Final paragraph concluding the demonstration.',
        examRelevance: 'A single class can style dozens or hundreds of elements; IDs can style only one.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 9: Demonstrating External Cascading Style Sheets Using HTML
  // --------------------------------------------------------------------------
  9: {
    objectiveEnrichment: {
      problemSolved: 'Internal CSS must be duplicated across every page of a website. External CSS solves this by centralizing all design rules into an independent .css file, allowing entire websites to be styled from a single source.',
      overallMechanism: 'The HTML <link rel="stylesheet" href="styles.css"> tag directs the browser to asynchronously fetch an external stylesheet, cache it, and cascade its rules over the document elements.',
      prerequisitesToUnderstand: 'Differences between HTML and CSS files, link tag syntax, and browser caching.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-3',
        title: 'Document Root, Head, and Title',
        codeSnippet: `<html>
<head>
<title>External CSS Demo</title>`,
        whatItDoes: 'Initializes HTML document structure and sets title to "External CSS Demo".',
        whyUsed: 'Standard document envelope.',
        howItWorks: 'Browser loads the head container.',
        connectionToSurrounding: 'Precedes external stylesheet link.',
        examRelevance: 'Standard HTML skeleton.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-5',
        title: 'Link External Stylesheet via <link> Tag',
        codeSnippet: `<!-- Link to the external CSS file -->
<link rel="stylesheet" href="styles.css">`,
        whatItDoes: 'Links the external stylesheet file "styles.css" to this HTML document.',
        whyUsed: 'Industry standard method for web styling: separates structure (HTML) completely from presentation (CSS).',
        howItWorks: 'rel="stylesheet" informs browser of relationship type; href="styles.css" specifies URL path to file.',
        connectionToSurrounding: 'Loads styling rules applied to elements in the body below.',
        examRelevance: 'Viva question: Why prefer external CSS? 1) Reusable across 100s of pages, 2) Cached by browser for faster loads, 3) Complete separation of concerns.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 6-7',
        title: 'Close Head and Open Document Body',
        codeSnippet: `</head>
<body>`,
        whatItDoes: 'Closes metadata header and opens the visible canvas.',
        whyUsed: 'Transitions from resource linking to visual content.',
        howItWorks: 'Browser begins rendering page canvas using styles loaded from styles.css.',
        connectionToSurrounding: 'Encloses all styled headings, paragraphs, and containers.',
        examRelevance: '<link> tag must always be inside <head>, never in <body>.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 8',
        title: 'Render Heading Styled Externally',
        codeSnippet: `<h1>Welcome to the External CSS Demo</h1>`,
        whatItDoes: 'Renders primary level 1 heading, styled by the "h1" rule defined in styles.css.',
        whyUsed: 'Main title demonstrating external element selector.',
        howItWorks: 'Browser looks up "h1" in the external CSSOM and applies specified color, font, and alignment.',
        connectionToSurrounding: 'First visible content element.',
        examRelevance: 'Element selector targets all <h1> tags across the site.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 9-10',
        title: 'Class Selector Target (.highlight)',
        codeSnippet: `<p class="highlight">This paragraph is styled using a class from the
external stylesheet.</p>`,
        whatItDoes: 'Renders paragraph element formatted using the .highlight class declared in styles.css.',
        whyUsed: 'Demonstrates that class definitions in external stylesheets apply seamlessly to HTML elements.',
        howItWorks: 'Matches .highlight class in external stylesheet and renders highlight background.',
        connectionToSurrounding: 'Demonstrates class selector usage.',
        examRelevance: 'Classes are prefixed with a dot (.) in CSS, but written without a dot in HTML class="highlight".'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 11-12',
        title: 'ID Selector Target (#unique-text)',
        codeSnippet: `<p id="unique-text">This paragraph has a unique ID and is also styled
externally.</p>`,
        whatItDoes: 'Renders a paragraph with id="unique-text", styled by the \`#unique-text\` selector in styles.css.',
        whyUsed: 'Demonstrates external styling targeted at one specific, unique element on the page.',
        howItWorks: 'ID selector (#) has higher CSS specificity than class (.) or element selectors.',
        connectionToSurrounding: 'Follows class demonstration with ID demonstration.',
        examRelevance: 'Examiner favorite: Specificity hierarchy: Inline Style > ID Selector > Class Selector > Element Selector.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 13-15',
        title: 'Div Container with Descendant Paragraph',
        codeSnippet: `<div>
<p>This is a paragraph inside a div, demonstrating element styling.</p>
</div>`,
        whatItDoes: 'Encloses a paragraph inside a generic <div> block container.',
        whyUsed: 'Demonstrates contextual/descendant selectors (e.g. div p) commonly defined in external stylesheets.',
        howItWorks: '<div> acts as an unstyled section wrapper; <p> inherits or matches descendant rules.',
        connectionToSurrounding: 'Shows container layout techniques.',
        examRelevance: '<div> is a block-level generic container; <span> is an inline generic container.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 16-17',
        title: 'Close Document Body and HTML Root',
        codeSnippet: `</body>
</html>`,
        whatItDoes: 'Closes body and HTML document.',
        whyUsed: 'Completes proper well-formed document structure.',
        howItWorks: 'Finalizes document rendering pipeline.',
        connectionToSurrounding: 'Closes tags opened on lines 7 and 1.',
        examRelevance: 'Ensures DOM validator passes.'
      }
    ]
  }
};

// Apply enrichments
const updatedPrograms: ProgramData[] = LAB_PROGRAMS.map(program => {
  const enrichment = major12Enrichments[program.programNumber];
  if (!enrichment) return program;

  return {
    ...program,
    objective: {
      ...program.objective,
      problemSolved: enrichment.objectiveEnrichment.problemSolved,
      overallMechanism: enrichment.objectiveEnrichment.overallMechanism,
      prerequisitesToUnderstand: enrichment.objectiveEnrichment.prerequisitesToUnderstand
    },
    steps: enrichment.granularSteps
  };
});

// Format as TypeScript output
const fileHeader = `import { ProgramData } from '../types';

export const LAB_PROGRAMS: ProgramData[] = `;

const tsContent = fileHeader + JSON.stringify(updatedPrograms, null, 2) + ';\n';

fs.writeFileSync('src/data/labPrograms.ts', tsContent, 'utf-8');
console.log('Successfully upgraded Major 12: all 9 programs enriched with granular line steps and objectives!');
