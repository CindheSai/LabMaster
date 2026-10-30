# scripts/build_major12.py
# Generates src/data/labPrograms.ts with exhaustive line-by-line explanations for all 9 programs.

import json

prog1_steps = [
    {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Open Root HTML Document Element",
        "codeSnippet": "<html>",
        "whatItDoes": "Marks the beginning of the entire hypertext document tree.",
        "whyUsed": "Instructs the browser rendering engine that the document contains standard HTML markup.",
        "howItWorks": "The browser parser instantiates the root HTMLHtmlElement DOM node.",
        "connectionToSurrounding": "Must encompass the entire file; matches closing </html> on Line 25.",
        "examRelevance": "Every HTML document must begin with <html>."
    },
    {
        "stepNumber": 2,
        "lineNumberRange": "Line 2",
        "title": "Open Head Metadata Container",
        "codeSnippet": "<head>",
        "whatItDoes": "Opens the container for document metadata that is not displayed directly in the viewport.",
        "whyUsed": "Groups title, stylesheets, scripts, and meta tags.",
        "howItWorks": "Creates the HTMLHeadElement in memory.",
        "connectionToSurrounding": "Immediately follows <html> and encloses <title> on Line 3.",
        "examRelevance": "Never place visible markup like <h1> or <p> inside <head>."
    },
    {
        "stepNumber": 3,
        "lineNumberRange": "Line 3",
        "title": "Specify Document Window Title",
        "codeSnippet": "<title>HTML Formatting Example</title>",
        "whatItDoes": "Defines the text shown on the browser tab and search engine results.",
        "whyUsed": "Identifies the page when bookmarked or open in browser tabs.",
        "howItWorks": "The browser updates its OS title bar and tab header with this string.",
        "connectionToSurrounding": "Nested directly inside <head>; closed before </head> on Line 4.",
        "examRelevance": "A missing </title> tag causes the entire page to appear completely blank."
    },
    {
        "stepNumber": 4,
        "lineNumberRange": "Line 4",
        "title": "Close Head Metadata Container",
        "codeSnippet": "</head>",
        "whatItDoes": "Closes the metadata section of the webpage.",
        "whyUsed": "Separates configuration metadata from visible body content.",
        "howItWorks": "Finalizes the head node in the browser's DOM parser.",
        "connectionToSurrounding": "Closes <head> and immediately precedes <body> on Line 5.",
        "examRelevance": "Always close </head> before opening <body>."
    },
    {
        "stepNumber": 5,
        "lineNumberRange": "Line 5",
        "title": "Open Body Element with Background Color",
        "codeSnippet": "<body bgcolor=\"blue\">",
        "whatItDoes": "Opens the visible canvas container and sets its background color to solid blue.",
        "whyUsed": "Fulfills syllabus requirement (f): Background formatting.",
        "howItWorks": "The layout engine fills the viewport background buffer with blue (#0000FF).",
        "connectionToSurrounding": "Encloses all visual text elements down to Line 24.",
        "examRelevance": "bgcolor is deprecated in HTML5 in favor of CSS background-color."
    },
    {
        "stepNumber": 6,
        "lineNumberRange": "Line 7",
        "title": "Level 1 Primary Heading (<h1>)",
        "codeSnippet": "<h1>Heading 1</h1>",
        "whatItDoes": "Renders the largest and most significant heading style on the page.",
        "whyUsed": "Satisfies syllabus requirement (d): Heading styles.",
        "howItWorks": "Block element rendered in bold weight with ~32px default font size and vertical margin.",
        "connectionToSurrounding": "First visible element inside the body; precedes H2 on Line 8.",
        "examRelevance": "<h1> is the highest semantic heading; used once per page in modern SEO."
    },
    {
        "stepNumber": 7,
        "lineNumberRange": "Line 8",
        "title": "Level 2 Subheading (<h2>)",
        "codeSnippet": "<h2>Heading 2</h2>",
        "whatItDoes": "Renders a second-tier heading style (~24px default).",
        "whyUsed": "Demonstrates heading hierarchy.",
        "howItWorks": "Block element with bold styling, smaller than H1 but larger than H3.",
        "connectionToSurrounding": "Follows H1 on Line 7 and precedes H3 on Line 9.",
        "examRelevance": "Headings must descend in logical hierarchy (H1 -> H2 -> H3)."
    },
    {
        "stepNumber": 8,
        "lineNumberRange": "Line 9",
        "title": "Level 3 Section Heading (<h3>)",
        "codeSnippet": "<h3>Heading 3</h3>",
        "whatItDoes": "Renders a third-tier section heading (~18.7px default).",
        "whyUsed": "Demonstrates heading levels in descending order.",
        "howItWorks": "Block element with automatic line breaks before and after.",
        "connectionToSurrounding": "Follows H2 and precedes H4.",
        "examRelevance": "H1 to H6 provide 6 distinct default heading tiers."
    },
    {
        "stepNumber": 9,
        "lineNumberRange": "Line 10",
        "title": "Level 4 Subsection Heading (<h4>)",
        "codeSnippet": "<h4>Heading 4</h4>",
        "whatItDoes": "Renders a fourth-tier subsection heading (~16px default, bold).",
        "whyUsed": "Shows intermediate heading sizing.",
        "howItWorks": "Block element equal in size to standard text but rendered in bold.",
        "connectionToSurrounding": "Follows H3 and precedes H5.",
        "examRelevance": "Notice H4 default size matches standard paragraph text size but bolded."
    },
    {
        "stepNumber": 10,
        "lineNumberRange": "Line 11",
        "title": "Level 5 Minor Heading (<h5>)",
        "codeSnippet": "<h5>Heading 5</h5>",
        "whatItDoes": "Renders a fifth-tier minor heading (~13.3px default).",
        "whyUsed": "Demonstrates minor subheading levels.",
        "howItWorks": "Block element with font size smaller than standard text.",
        "connectionToSurrounding": "Follows H4 and precedes H6.",
        "examRelevance": "H5 is smaller than standard body text."
    },
    {
        "stepNumber": 11,
        "lineNumberRange": "Line 12",
        "title": "Level 6 Smallest Heading (<h6>)",
        "codeSnippet": "<h6>Heading 6</h6>",
        "whatItDoes": "Renders the smallest heading available in HTML (~10.7px default).",
        "whyUsed": "Completes syllabus requirement (d): H1 to H6 heading styles.",
        "howItWorks": "Block element rendered in the smallest default font size among headings.",
        "connectionToSurrounding": "Concludes the heading section; precedes paragraph on Line 14.",
        "examRelevance": "Viva question: Which heading is smallest? H6 is the smallest."
    },
    {
        "stepNumber": 12,
        "lineNumberRange": "Line 14",
        "title": "Standard Paragraph (<p>)",
        "codeSnippet": "<p>This is a paragraph demonstrating text formatting in HTML.</p>",
        "whatItDoes": "Defines a standard block of text with top and bottom paragraph margins.",
        "whyUsed": "Satisfies syllabus requirement (g): Paragraph tag.",
        "howItWorks": "Creates a block-level formatting context with standard paragraph spacing.",
        "connectionToSurrounding": "Follows headings and precedes formatted text paragraphs.",
        "examRelevance": "<p> automatically creates a line break before and after itself."
    },
    {
        "stepNumber": 13,
        "lineNumberRange": "Line 16",
        "title": "Bold Inline Formatting (<b>)",
        "codeSnippet": "<p><b>This text is bold.</b></p>",
        "whatItDoes": "Applies heavy font weight (bold) to the enclosed text characters.",
        "whyUsed": "Satisfies syllabus requirement (a): Bold formatting.",
        "howItWorks": "Switches the character font weight to 700 without breaking to a new line.",
        "connectionToSurrounding": "Wrapped inside <p> to form an independent line.",
        "examRelevance": "<b> is visual styling; <strong> is semantic emphasis."
    },
    {
        "stepNumber": 14,
        "lineNumberRange": "Line 18",
        "title": "Italics Inline Formatting (<i>)",
        "codeSnippet": "<p><i>This text is italic.</i></p>",
        "whatItDoes": "Renders the characters in a slanted, italicized font style.",
        "whyUsed": "Satisfies syllabus requirement (b): Italics formatting.",
        "howItWorks": "Applies font-style: italic to the character glyphs.",
        "connectionToSurrounding": "Follows bold text and precedes underlined text.",
        "examRelevance": "<i> is physical italics; <em> provides semantic emphasis."
    },
    {
        "stepNumber": 15,
        "lineNumberRange": "Line 20",
        "title": "Underline Inline Formatting (<u>)",
        "codeSnippet": "<p><u>This text is underlined.</u></p>",
        "whatItDoes": "Draws a continuous horizontal line beneath the enclosed text characters.",
        "whyUsed": "Satisfies syllabus requirement (c): Underline formatting.",
        "howItWorks": "Applies text-decoration: underline to the inline text.",
        "connectionToSurrounding": "Concludes the 3 primary inline styling tags (b, i, u).",
        "examRelevance": "In modern websites, avoid underlining text that is not a clickable link."
    },
    {
        "stepNumber": 16,
        "lineNumberRange": "Lines 22-23",
        "title": "Custom Font Face, Size, and Color (<font>)",
        "codeSnippet": "<font face=\"monotype corsiva\" size=13 color=\"blue\">This text uses a custom font, size, and \\ncolor.</font>",
        "whatItDoes": "Applies custom font face ('monotype corsiva'), size (13), and text color (blue).",
        "whyUsed": "Satisfies syllabus requirement (e): Font (Type, Size and Color).",
        "howItWorks": "Instructs legacy browser engines to render text using the specified font face, size index, and color tint.",
        "connectionToSurrounding": "Appears between the underline paragraph and the line break demo.",
        "examRelevance": "Crucial: <font> is deprecated in HTML5. Use CSS font-family, font-size, and color."
    },
    {
        "stepNumber": 17,
        "lineNumberRange": "Line 25",
        "title": "Forced Line Break (<br>)",
        "codeSnippet": "<p>This is the first line.<br>This is the second line after a line break.</p>",
        "whatItDoes": "Forces text onto a new line within the same paragraph container.",
        "whyUsed": "Satisfies syllabus requirement (h): Line Break.",
        "howItWorks": "Inserts a carriage return without adding paragraph margin spacing.",
        "connectionToSurrounding": "Splits a single paragraph into two vertical lines of text.",
        "examRelevance": "<br> is an empty / void tag; it does NOT have a closing </br> tag."
    },
    {
        "stepNumber": 18,
        "lineNumberRange": "Line 27",
        "title": "Horizontal Rule Divider (<hr>)",
        "codeSnippet": "<hr>",
        "whatItDoes": "Draws a thematic horizontal dividing line across the full container width.",
        "whyUsed": "Satisfies syllabus requirement (i): Horizontal Rule.",
        "howItWorks": "Renders a 1px or 2px inset rule border separating sections.",
        "connectionToSurrounding": "Separates the formatted paragraphs above from the preformatted block below.",
        "examRelevance": "<hr> is also a void element; no closing </hr> is permitted."
    },
    {
        "stepNumber": 19,
        "lineNumberRange": "Lines 29-31",
        "title": "Preformatted Text Block (<pre>)",
        "codeSnippet": "<pre> This is preformatted text. \\nIt preserves spaces and line breaks. \\n</pre>",
        "whatItDoes": "Renders text in fixed-width monospace font while preserving all spaces and raw line breaks exactly as typed.",
        "whyUsed": "Satisfies syllabus requirement (j): Pre tag.",
        "howItWorks": "Disables normal HTML whitespace collapsing, displaying literal spacing.",
        "connectionToSurrounding": "Last content element before closing the body.",
        "examRelevance": "HTML normally collapses multiple spaces into one. <pre> prevents this."
    },
    {
        "stepNumber": 20,
        "lineNumberRange": "Lines 32-33",
        "title": "Close Body and Root HTML Elements",
        "codeSnippet": "</body> \\n</html>",
        "whatItDoes": "Closes the visible content body and the HTML root element.",
        "whyUsed": "Ensures well-formed document structure and terminates the DOM parsing tree.",
        "howItWorks": "Finalizes DOM construction and triggers window load events.",
        "connectionToSurrounding": "Closes <body> (opened on Line 5) and <html> (opened on Line 1).",
        "examRelevance": "Always close tags in reverse order of opening (LIFO: Last-In, First-Out)."
    }
]

print("Program 1 has", len(prog1_steps), "granular steps")
