import { ProgramData } from '../types';

export const PHP_LAB_PROGRAMS: ProgramData[] = [
  {
    "id": 101,
    "subjectId": "major-13",
    "programNumber": 1,
    "title": "Write a PHP program to generate the Fibonacci series.",
    "pdfQuestion": "Program 1\nQuestion: Write a PHP program to generate the Fibonacci series.",
    "shortDescription": "Generates the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, 21, 34) using iterative variable reassignment and a for loop in PHP.",
    "technologies": [
      "PHP"
    ],
    "previewType": "php-simulation",
    "simulationType": "fibonacci",
    "runLocallyGuide": {
      "fileName": "fibonacci.php",
      "localhostUrl": "http://localhost/fibonacci.php",
      "xamppSteps": [
        "Open XAMPP Control Panel and click \"Start\" next to Apache.",
        "Navigate to C:\\xampp\\htdocs\\ and create a folder named \"phplab\".",
        "Save this file as \"fibonacci.php\" inside C:\\xampp\\htdocs\\phplab\\.",
        "Open your web browser and navigate to http://localhost/phplab/fibonacci.php."
      ],
      "notes": "PHP is executed on the Apache server before the resulting HTML is sent to your browser. You cannot view PHP output by double-clicking the file (file:// protocol)."
    },
    "originalCode": "<?php\n$a = 0;\n$b = 1;\necho \"Fibonacci Series:<br>\";\necho $a . \"<br>\" . $b . \"<br>\";\nfor ($i = 1; $i <= 8; $i++) {\n $c = $a + $b;\n echo $c . \"<br>\";\n $a = $b;\n $b = $c;\n}\n?>",
    "sampleOutputText": "Fibonacci Series:\n0\n1\n1\n2\n3\n5\n8\n13\n21\n34",
    "objective": {
      "whatItDoes": "Computes and displays the first 10 terms of the Fibonacci sequence starting from 0 and 1.",
      "whyWritten": "To test understanding of basic PHP variable syntax, arithmetic operators, string concatenation using the dot (.) operator, and iterative for-loops.",
      "conceptsDemonstrated": "PHP variables ($), for loop control flow, variable reassignment ($a = $b; $b = $c;), echo statement, string concatenation with HTML break tags (<br>).",
      "expectedOutputSummary": "The text \"Fibonacci Series:\" followed by 10 numbers printed on separate lines: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.",
      "problemSolved": "Generates a mathematical recurrence relation sequence where each number is the sum of the two preceding numbers, demonstrating basic PHP arithmetic, iterative loops, and variable state updates.",
      "overallMechanism": "Seeds two variables with 0 and 1, then runs a for-loop that computes the next term as ($n1 + $n2), echoes it with a delimiter, and shifts variable states ($n1 = $n2, $n2 = $n3) on each iteration.",
      "prerequisitesToUnderstand": "PHP tags (<?php ... ?>), integer variable declaration with $, echo statement, and for-loop syntax."
    },
    "conceptsUsed": [
      {
        "name": "PHP Variables ($)",
        "description": "All PHP variables must start with a dollar sign ($), followed by a letter or underscore. PHP is loosely typed."
      },
      {
        "name": "String Concatenation (.)",
        "description": "In PHP, the period (.) operator is used to concatenate strings and numbers together, unlike the plus (+) operator in JavaScript."
      },
      {
        "name": "Iterative For Loop",
        "description": "Executes a block of code a specified number of times: for ($init; $condition; $increment)."
      },
      {
        "name": "Fibonacci Recurrence",
        "description": "Each number is the sum of the preceding two numbers: F(n) = F(n-1) + F(n-2)."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Open PHP Parsing Block",
        "codeSnippet": "<?php",
        "whatItDoes": "Informs the web server's Zend Engine to begin interpreting subsequent lines as PHP server-side code.",
        "whyUsed": "Required tag to transition from raw output mode to executable scripting mode.",
        "howItWorks": "Switches the PHP lexer from inline HTML streaming into bytecode compilation mode.",
        "connectionToSurrounding": "Must precede any PHP declarations or statements.",
        "examRelevance": "Short tags (<?) can be disabled in php.ini; standard <?php is universally portable."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 2",
        "title": "Initialize First Fibonacci Seed ($num1 = 0)",
        "codeSnippet": "$num1 = 0;",
        "whatItDoes": "Declares variable $num1 and assigns integer 0 as the first seed term.",
        "whyUsed": "The Fibonacci sequence mathematically begins with 0.",
        "howItWorks": "Allocates memory in the PHP variable symbol table for an integer zval with value 0.",
        "connectionToSurrounding": "Acts as term (n - 2) in the addition recurrence relation.",
        "examRelevance": "All PHP variables must begin with a dollar sign ($)."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Line 3",
        "title": "Initialize Second Fibonacci Seed ($num2 = 1)",
        "codeSnippet": "$num2 = 1;",
        "whatItDoes": "Declares variable $num2 and assigns integer 1 as the second seed term.",
        "whyUsed": "The second fundamental boundary condition needed to calculate future terms.",
        "howItWorks": "Creates integer zval in memory with value 1.",
        "connectionToSurrounding": "Acts as term (n - 1) in the addition formula.",
        "examRelevance": "Variables in PHP are dynamically typed; no int keyword is needed."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 4",
        "title": "Output Series Title and Initial Seed Values",
        "codeSnippet": "echo \"<h3>Fibonacci series for first 12 numbers: </h3>\";\necho \"\n\";\necho $num1.' '.$num2.' ';",
        "whatItDoes": "Sends an HTML heading and the first two numbers (\"0 1 \") to the HTTP output stream.",
        "whyUsed": "Prints the seeds before loop calculation begins.",
        "howItWorks": "Uses string concatenation operator (.) to join numbers with spaces.",
        "connectionToSurrounding": "Supplies the visual start of the printed series.",
        "examRelevance": "The dot (.) is PHP's string concatenation operator, unlike JavaScript which uses (+)."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Line 7",
        "title": "For Loop Header ($i = 2; $i < 10; $i++)",
        "codeSnippet": "for ($i = 2; $i < 10; $i++) {",
        "whatItDoes": "Initializes counter $i to 2 and iterates as long as $i < 10 (executes 8 times).",
        "whyUsed": "Controls exact iteration count to generate the remaining terms up to 10 total numbers.",
        "howItWorks": "Evaluates condition before each iteration; increments $i by 1 at the end of each pass.",
        "connectionToSurrounding": "Drives the calculation of terms 3 through 10.",
        "examRelevance": "Starts at $i = 2 because terms 0 and 1 have already been printed."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Line 8",
        "title": "Compute Next Term ($num3 = $num1 + $num2)",
        "codeSnippet": "$num3 = $num1 + $num2;",
        "whatItDoes": "Adds the previous two terms together and stores the sum in $num3.",
        "whyUsed": "Applies the definition of the Fibonacci recurrence relation: F(n) = F(n-1) + F(n-2).",
        "howItWorks": "Evaluates right-hand addition expression and stores result into variable $num3.",
        "connectionToSurrounding": "Calculates the value to be printed on Line 9 and shifted on Line 11.",
        "examRelevance": "Core algorithmic step; examiners look for correct addition of previous two terms."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Line 9",
        "title": "Echo Current Term ($num3)",
        "codeSnippet": "echo $num3.' ';",
        "whatItDoes": "Outputs the newly computed number followed by a separating space.",
        "whyUsed": "Appends each successive term to the rendered output in real time.",
        "howItWorks": "Writes string representation of $num3 followed by space to HTTP response buffer.",
        "connectionToSurrounding": "Displays current term immediately after calculation.",
        "examRelevance": "Without spaces, the output would run together as one unreadable large number."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Line 10",
        "title": "Shift Term Window ($num1 = $num2)",
        "codeSnippet": "$num1 = $num2;",
        "whatItDoes": "Copies the value of $num2 into $num1, sliding the left boundary of the window forward.",
        "whyUsed": "Discards the oldest term and promotes the second term to become the new first term.",
        "howItWorks": "Overwrites $num1 with the current value of $num2.",
        "connectionToSurrounding": "Must be done before $num2 is overwritten on Line 11.",
        "examRelevance": "Critical mistake: Reversing the order of lines 10 and 11 causes an infinite duplication bug."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Line 11",
        "title": "Shift Term Window ($num2 = $num3)",
        "codeSnippet": "$num2 = $num3;",
        "whatItDoes": "Copies newly calculated $num3 into $num2, sliding the right boundary of the window forward.",
        "whyUsed": "Prepares both variables for the next loop iteration's addition.",
        "howItWorks": "Updates $num2 to hold the latest term.",
        "connectionToSurrounding": "Completes state transition before loop counter increments.",
        "examRelevance": "Together with line 10, implements the 2-variable sliding window algorithm."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Lines 12-13",
        "title": "Close Loop and Terminate PHP Tag",
        "codeSnippet": "}\n?>",
        "whatItDoes": "Closes the for-loop block and closes the PHP script execution tag.",
        "whyUsed": "Concludes execution and marks end of server-side script.",
        "howItWorks": "Zend engine flushes output buffer to client and frees request memory.",
        "connectionToSurrounding": "Ends the program.",
        "examRelevance": "In pure PHP files with no following HTML, omitting ?> is standard practice to prevent accidental whitespace."
      }
    ],
    "executionFlow": [
      "1. Apache web server receives HTTP GET request for fibonacci.php.",
      "2. Apache delegates the file to the PHP interpreter engine.",
      "3. $a is assigned 0, $b is assigned 1.",
      "4. \"Fibonacci Series:<br>0<br>1<br>\" is sent to the HTTP response buffer.",
      "5. Loop runs 8 times: calculates $c = $a + $b, prints $c, slides $a and $b.",
      "6. Server sends the generated HTML payload to the client browser.",
      "7. Browser parses HTML tags (<br>) and renders the numbers vertically."
    ],
    "outputExplanation": {
      "description": "A vertical list starting with \"Fibonacci Series:\" and displaying 10 sequential numbers separated by HTML line breaks.",
      "elementsBreakdown": [
        {
          "element": "Header",
          "sourceLine": "echo \"Fibonacci Series:<br>\";",
          "explanation": "Renders the section title."
        },
        {
          "element": "Seeds (0, 1)",
          "sourceLine": "echo $a . \"<br>\" . $b . \"<br>\";",
          "explanation": "Prints first two Fibonacci seeds."
        },
        {
          "element": "Generated sequence (1 to 34)",
          "sourceLine": "echo $c . \"<br>\";",
          "explanation": "Loop generates 1, 2, 3, 5, 8, 13, 21, 34."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "PHP Opening Tag",
        "description": "Always use <?php. Do not use short tags (<?) as they are disabled by default in modern php.ini configurations."
      },
      {
        "category": "functions",
        "title": "String Concatenation Operator",
        "description": "PHP uses the period (.) for concatenation. Writing $a + \"<br>\" will trigger a TypeError or warning in PHP 8."
      },
      {
        "category": "common_mistakes",
        "title": "Incorrect Variable Shift Order",
        "description": "Writing $b = $c before $a = $b overwrites $b prematurely. The correct order is always: $a = $b; $b = $c;"
      },
      {
        "category": "server_setup",
        "title": "XAMPP Execution",
        "description": "Must run through http://localhost/phplab/fibonacci.php via Apache, not through local file explorer."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the significance of the $ symbol in PHP?",
        "answer": "In PHP, every variable name must be prefixed with a dollar sign ($). It indicates to the lexical parser that the identifier represents a variable."
      },
      {
        "question": "What operator is used for string concatenation in PHP?",
        "answer": "The dot (.) operator is used for string concatenation in PHP."
      },
      {
        "question": "Why is PHP called a loosely typed language?",
        "answer": "Because variables do not require an explicit data type declaration. PHP automatically determines and converts the type based on the value assigned."
      },
      {
        "question": "How many terms are printed by this program and why?",
        "answer": "10 terms: 2 seed terms ($a=0, $b=1) are printed before the loop, and the for loop ($i=1 to 8) calculates and prints 8 additional terms."
      },
      {
        "question": "Can Fibonacci series also be generated recursively in PHP?",
        "answer": "Yes, using a recursive function that returns fib($n-1) + fib($n-2) with base cases for $n=0 and $n=1, although iteration is more memory-efficient."
      }
    ]
  },
  {
    "id": 102,
    "subjectId": "major-13",
    "programNumber": 2,
    "title": "Write a PHP program to swap two numbers using (a) pass by value and (b) pass by reference.",
    "pdfQuestion": "Program 2\nQuestion: Write a PHP program to swap two numbers using (a) pass by value and (b) pass by reference.",
    "shortDescription": "Demonstrates function parameter passing mechanisms in PHP: Pass by Value (isolated local copies) vs Pass by Reference using the ampersand (&) operator (direct memory modification).",
    "technologies": [
      "PHP"
    ],
    "previewType": "php-simulation",
    "simulationType": "swap",
    "runLocallyGuide": {
      "fileName": "swap.php",
      "localhostUrl": "http://localhost/swap.php",
      "xamppSteps": [
        "Open XAMPP Control Panel and start Apache.",
        "Save the script as \"swap.php\" in C:\\xampp\\htdocs\\phplab\\.",
        "Access via your browser at http://localhost/phplab/swap.php."
      ]
    },
    "originalCode": "<?php\n// Pass by value\nfunction swapValue($a, $b) {\n $temp = $a; $a = $b; $b = $temp;\n echo \"Inside function: a=$a, b=$b<br>\";\n}\n$x = 10; $y = 20;\necho \"Before pass by value: x=$x, y=$y<br>\";\nswapValue($x, $y);\necho \"After pass by value: x=$x, y=$y<br><br>\";\n// Pass by reference\nfunction swapReference(&$a, &$b) {\n $temp = $a; $a = $b; $b = $temp;\n}\n$x = 10; $y = 20;\necho \"Before pass by reference: x=$x, y=$y<br>\";\nswapReference($x, $y);\necho \"After pass by reference: x=$x, y=$y\";\n?>",
    "sampleOutputText": "Before pass by value: x=10, y=20\nInside function: a=20, b=10\nAfter pass by value: x=10, y=20\n\nBefore pass by reference: x=10, y=20\nAfter pass by reference: x=20, y=10",
    "objective": {
      "whatItDoes": "Demonstrates the fundamental difference between passing function parameters by value (creating independent copies) versus passing by reference (aliasing the original caller variables).",
      "whyWritten": "To test understanding of PHP variable scope, function parameter mechanisms, the reference operator (&), and side-effects on caller arguments.",
      "conceptsDemonstrated": "User-defined functions, Pass by Value, Pass by Reference (&$param), temporary swap algorithm, local variable scope vs global/caller scope.",
      "expectedOutputSummary": "In pass by value, $x and $y remain 10 and 20 after function execution. In pass by reference, $x and $y are mutated to 20 and 10.",
      "problemSolved": "Students must understand how arguments are passed into functions: pass-by-value copies the data into a local scope, while pass-by-reference (&) passes memory aliases allowing modifications to persist in the caller scope.",
      "overallMechanism": "Defines swapValue($a, $b) without ampersand (operates on local copies; caller unchanged) and swapReference(&$a, &$b) with ampersand & prefix (operates on original memory cells; caller values swapped).",
      "prerequisitesToUnderstand": "PHP function definitions, local vs global scope, parameters vs arguments, and the ampersand (&) reference symbol."
    },
    "conceptsUsed": [
      {
        "name": "Pass by Value",
        "description": "The function receives copies of the argument values. Changes made inside the function do not affect the original variables outside."
      },
      {
        "name": "Pass by Reference (&$)",
        "description": "The ampersand (&) in the parameter list makes the parameter an alias/reference to the original caller variable. Any modification inside changes the caller variable directly."
      },
      {
        "name": "Temporary Variable Swap",
        "description": "Classical 3-step swap using $temp: $temp = $a; $a = $b; $b = $temp;"
      },
      {
        "name": "Variable Scope",
        "description": "Variables created inside a function are local to that function and destroyed upon return."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-3",
        "title": "Open PHP Tag and Define Pass-by-Value Function",
        "codeSnippet": "<?php\n// Pass by value\nfunction swapValue($a, $b) {",
        "whatItDoes": "Opens PHP script and defines function swapValue accepting two parameters $a and $b by value.",
        "whyUsed": "Demonstrates standard default function parameter passing behavior in PHP.",
        "howItWorks": "When called, PHP copies the argument values into new isolated local variables $a and $b.",
        "connectionToSurrounding": "Encloses the temporary swap mechanism on Line 4.",
        "examRelevance": "Default in PHP is pass-by-value for all primitives (integers, strings, floats, arrays)."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 4-5",
        "title": "Local Swap Using Temporary Variable",
        "codeSnippet": "  $temp = $a; $a = $b; $b = $temp;\n}",
        "whatItDoes": "Swaps values of local variables $a and $b using temporary container $temp, then exits function.",
        "whyUsed": "Standard 3-step swap algorithm.",
        "howItWorks": "$temp holds $a; $a gets $b; $b gets $temp. However, all three are discarded when function returns.",
        "connectionToSurrounding": "Because parameters were passed by value, this swap only affects local variables.",
        "examRelevance": "Viva point: Does swapValue alter the caller variables? No, because it swapped copies only."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 6-10",
        "title": "Test Pass-by-Value Behavior",
        "codeSnippet": "$x = 10; $y = 20;\necho \"Before pass by value: x=$x, y=$y<br>\";\nswapValue($x, $y);\necho \"After pass by value: x=$x, y=$y<br><br>\";",
        "whatItDoes": "Initializes $x=10, $y=20, prints values, invokes swapValue($x, $y), and prints values again (still x=10, y=20).",
        "whyUsed": "Empirically proves that pass-by-value does NOT modify the caller's original variables.",
        "howItWorks": "$x and $y values are copied onto stack; original variables remain untouched.",
        "connectionToSurrounding": "Contrasts with pass-by-reference section below.",
        "examRelevance": "Output verification: Before: x=10, y=20 -> After: x=10, y=20 (unchanged)."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 11-14",
        "title": "Define Pass-by-Reference Function with Ampersand (&)",
        "codeSnippet": "// Pass by reference\nfunction swapReference(&$a, &$b) {\n  $temp = $a; $a = $b; $b = $temp;\n}",
        "whatItDoes": "Defines swapReference with ampersand prefixes (&$a, &$b) allowing direct mutation of caller memory.",
        "whyUsed": "Demonstrates pass-by-reference mechanism.",
        "howItWorks": "The & symbol passes the memory address/reference rather than creating duplicate copies.",
        "connectionToSurrounding": "Operating on $a and $b directly modifies the variables passed into the call.",
        "examRelevance": "Critical viva question: What does the \"&\" before parameter mean? It indicates pass-by-reference."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 15-18",
        "title": "Test Pass-by-Reference Behavior",
        "codeSnippet": "$x = 10; $y = 20;\necho \"Before pass by reference: x=$x, y=$y<br>\";\nswapReference($x, $y);\necho \"After pass by reference: x=$x, y=$y\";",
        "whatItDoes": "Re-initializes $x=10, $y=20, calls swapReference($x, $y), and prints result (now x=20, y=10).",
        "whyUsed": "Proves that pass-by-reference successfully mutates the caller's variables.",
        "howItWorks": "The memory cells of $x and $y are swapped in place by the function.",
        "connectionToSurrounding": "Demonstrates the desired swap outcome.",
        "examRelevance": "Output verification: Before: x=10, y=20 -> After: x=20, y=10 (swapped)."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Line 19",
        "title": "Close PHP Script Tag",
        "codeSnippet": "?>",
        "whatItDoes": "Terminates PHP execution.",
        "whyUsed": "Marks end of script.",
        "howItWorks": "Finalizes server-side response.",
        "connectionToSurrounding": "Concludes program.",
        "examRelevance": "Standard script closure."
      }
    ],
    "executionFlow": [
      "1. Global variables $x=10, $y=20 are allocated.",
      "2. Script prints \"Before pass by value: x=10, y=20\".",
      "3. swapValue($x, $y) is invoked. Local copies $a=10 and $b=20 are created.",
      "4. Inside swapValue, $a becomes 20 and $b becomes 10. Output: \"Inside function: a=20, b=10\".",
      "5. swapValue terminates and its stack frame is discarded.",
      "6. Script prints \"After pass by value: x=10, y=20\" (unchanged).",
      "7. Variables are reset to $x=10, $y=20.",
      "8. Script prints \"Before pass by reference: x=10, y=20\".",
      "9. swapReference(&$a, &$b) is called. $a and $b point directly to $x and $y.",
      "10. $temp swaps values at those memory locations.",
      "11. After swapReference, script prints \"After pass by reference: x=20, y=10\" (swapped!)."
    ],
    "outputExplanation": {
      "description": "The output clearly contrasts the two mechanisms: under pass by value, the outside variables remain unchanged (x=10, y=20). Under pass by reference, the outside variables are swapped (x=20, y=10).",
      "elementsBreakdown": [
        {
          "element": "Pass by Value Output",
          "sourceLine": "echo \"After pass by value: x=$x, y=$y\";",
          "explanation": "Outputs x=10, y=20 (original values preserved)."
        },
        {
          "element": "Inside Function Output",
          "sourceLine": "echo \"Inside function: a=$a, b=$b\";",
          "explanation": "Outputs a=20, b=10 (local swap only)."
        },
        {
          "element": "Pass by Reference Output",
          "sourceLine": "echo \"After pass by reference: x=$x, y=$y\";",
          "explanation": "Outputs x=20, y=10 (actual caller variables mutated)."
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Ampersand (&) Placement",
        "description": "The ampersand (&) must be placed in the function signature: function swapReference(&$a, &$b). Do not put it at call time."
      },
      {
        "category": "common_mistakes",
        "title": "Call-Time Pass-By-Reference Deprecation",
        "description": "In ancient PHP, people wrote swap(&$x, &$y). This is deprecated and causes a fatal error in modern PHP. Always declare & in the function definition."
      },
      {
        "category": "pro_tips",
        "title": "Memory Considerations",
        "description": "PHP uses Copy-on-Write (COW). Passing large arrays by value does not duplicate memory until you write to the array, but pass by reference avoids the copy entirely."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the main difference between pass by value and pass by reference in PHP?",
        "answer": "Pass by value passes a copy of the variable so modifications inside the function do not affect the original variable. Pass by reference passes the memory address alias using &, so modifications directly affect the original variable."
      },
      {
        "question": "What symbol is used in PHP to indicate pass by reference?",
        "answer": "The ampersand (&) symbol placed before the parameter name in the function definition header."
      },
      {
        "question": "Can you pass a literal value (like 10) to a pass by reference parameter?",
        "answer": "No. Calling swapReference(10, 20) results in a fatal error (\"Only variables can be passed by reference\")."
      },
      {
        "question": "What is variable scope in PHP?",
        "answer": "Scope determines where a variable can be accessed. PHP has local scope (inside functions), global scope (outside functions), and superglobals (accessible everywhere)."
      },
      {
        "question": "How can a function access a global variable in PHP without passing it as an argument?",
        "answer": "Using the global keyword (e.g., global $x;) or via the $GLOBALS superglobal array ($GLOBALS['x'])."
      }
    ]
  },
  {
    "id": 103,
    "subjectId": "major-13",
    "programNumber": 3,
    "title": "Write a PHP program to demonstrate array-related functions.",
    "pdfQuestion": "Program 3\nQuestion: Write a PHP program to demonstrate array-related functions.\nNote: print_r() displays array indexes and formatting in the browser.",
    "shortDescription": "Demonstrates 7 built-in PHP array manipulation functions: array_push(), array_pop(), array_shift(), array_unshift(), array_merge(), array_reverse(), and count().",
    "technologies": [
      "PHP"
    ],
    "previewType": "php-simulation",
    "simulationType": "array-funcs",
    "runLocallyGuide": {
      "fileName": "arrays.php",
      "localhostUrl": "http://localhost/arrays.php",
      "xamppSteps": [
        "Open XAMPP and start Apache.",
        "Save as \"arrays.php\" in C:\\xampp\\htdocs\\phplab\\.",
        "Open http://localhost/phplab/arrays.php in your browser."
      ],
      "notes": "print_r() is a built-in debugging function that prints human-readable information about an array."
    },
    "originalCode": "<?php\n$fruits = array(\"Apple\", \"Banana\", \"Cherry\");\necho \"Original array: \"; print_r($fruits);\narray_push($fruits, \"Date\", \"Elderberry\");\necho \"<br>After array_push: \"; print_r($fruits);\n$removed = array_pop($fruits);\necho \"<br>After array_pop (removed $removed): \"; print_r($fruits);\n$removed = array_shift($fruits);\necho \"<br>After array_shift (removed $removed): \"; print_r($fruits);\narray_unshift($fruits, \"Apricot\");\necho \"<br>After array_unshift: \"; print_r($fruits);\n$combined = array_merge($fruits, array(\"Carrot\", \"Beetroot\"));\necho \"<br>After array_merge: \"; print_r($combined);\necho \"<br>After array_reverse: \"; print_r(array_reverse($combined));\necho \"<br>Total elements: \" . count($combined);\n?>",
    "sampleOutputText": "Original array: Apple, Banana, Cherry\nAfter array_push: Apple, Banana, Cherry, Date, Elderberry\nAfter array_pop (removed Elderberry): Apple, Banana, Cherry, Date\nAfter array_shift (removed Apple): Banana, Cherry, Date\nAfter array_unshift: Apricot, Banana, Cherry, Date\nAfter array_merge: Apricot, Banana, Cherry, Date, Carrot, Beetroot\nAfter array_reverse: Beetroot, Carrot, Date, Cherry, Banana, Apricot\nTotal elements: 6",
    "objective": {
      "whatItDoes": "Manipulates an indexed array of fruit names by pushing, popping, shifting, unshifting, merging with vegetables, reversing order, and counting elements.",
      "whyWritten": "To test familiarity with PHP's core array data structure and standard stack/queue array library functions.",
      "conceptsDemonstrated": "array(), print_r(), array_push(), array_pop(), array_shift(), array_unshift(), array_merge(), array_reverse(), count().",
      "expectedOutputSummary": "Displays the state of the array at each mutation step, detailing elements added or removed from both ends, combined arrays, and total item count.",
      "problemSolved": "PHP programs heavily manipulate collections. This program demonstrates core built-in array manipulation functions: adding and removing elements from both ends (push, pop, shift, unshift), merging, reversing, and counting elements.",
      "overallMechanism": "Initializes an indexed array, performs stack and queue mutations using array_push/pop and array_shift/unshift, merges with a second array, and inspects structures using print_r() and count().",
      "prerequisitesToUnderstand": "Indexed arrays, print_r() debugging output, stack (LIFO) and queue (FIFO) data structures."
    },
    "conceptsUsed": [
      {
        "name": "Indexed Arrays",
        "description": "Zero-indexed lists where elements are accessed via integer keys [0], [1], [2]."
      },
      {
        "name": "Stack Operations (End)",
        "description": "array_push() adds to the end; array_pop() removes and returns the last element."
      },
      {
        "name": "Queue Operations (Beginning)",
        "description": "array_unshift() prepends to the beginning; array_shift() removes and returns the first element."
      },
      {
        "name": "Array Transformation",
        "description": "array_merge() combines multiple arrays; array_reverse() returns an array in reverse order; count() returns total length."
      },
      {
        "name": "print_r()",
        "description": "Prints human-readable representation of array structures."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-3",
        "title": "Initialize Array and Print Original Elements",
        "codeSnippet": "<?php\n$fruits = array(\"Apple\", \"Banana\", \"Cherry\");\necho \"Original array: \"; print_r($fruits);",
        "whatItDoes": "Creates an indexed array with 3 string items and outputs its internal structure using print_r().",
        "whyUsed": "Establishes baseline array before modifications.",
        "howItWorks": "array() constructor creates indexed zend array with keys 0, 1, 2; print_r() displays key-value pairs.",
        "connectionToSurrounding": "Serves as data input for subsequent array functions.",
        "examRelevance": "print_r() prints human-readable array structure; echo cannot print arrays directly."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 4-5",
        "title": "array_push() — Append Elements to End",
        "codeSnippet": "array_push($fruits, \"Date\", \"Elderberry\");\necho \"<br>After array_push: \"; print_r($fruits);",
        "whatItDoes": "Pushes \"Date\" and \"Elderberry\" onto the end of $fruits array, expanding size to 5 elements.",
        "whyUsed": "Adds elements to the tail (stack push operation).",
        "howItWorks": "Appends elements to highest numeric indices and returns new total element count.",
        "connectionToSurrounding": "Expands the array before popping.",
        "examRelevance": "array_push($arr, $val) is equivalent to $arr[] = $val, but can add multiple values at once."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 6-7",
        "title": "array_pop() — Remove Element from End",
        "codeSnippet": "$removed = array_pop($fruits);\necho \"<br>After array_pop (removed $removed): \"; print_r($fruits);",
        "whatItDoes": "Removes the last element (\"Elderberry\") from the array and returns it into variable $removed.",
        "whyUsed": "Implements stack LIFO (Last In First Out) removal.",
        "howItWorks": "Shortens array by 1 and returns the removed element value.",
        "connectionToSurrounding": "Reduces array size back from 5 to 4 elements.",
        "examRelevance": "If array is empty, array_pop() returns null."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 8-9",
        "title": "array_shift() — Remove Element from Beginning",
        "codeSnippet": "$removed = array_shift($fruits);\necho \"<br>After array_shift (removed $removed): \"; print_r($fruits);",
        "whatItDoes": "Removes the first element (\"Apple\") from the front of the array and re-indexes remaining elements from 0.",
        "whyUsed": "Implements queue FIFO (First In First Out) dequeue operation.",
        "howItWorks": "Extracts index 0, shifts all remaining keys down by 1 so new head is at index 0.",
        "connectionToSurrounding": "Alters the front of the array.",
        "examRelevance": "Key viva point: array_shift() automatically re-indexes all numeric keys to start from 0."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 10-11",
        "title": "array_unshift() — Prepend Element to Beginning",
        "codeSnippet": "array_unshift($fruits, \"Apricot\");\necho \"<br>After array_unshift: \"; print_r($fruits);",
        "whatItDoes": "Prepends \"Apricot\" to the beginning of the array as the new index 0.",
        "whyUsed": "Adds element to the head of a list.",
        "howItWorks": "Shifts all existing elements up to higher indices and inserts new item at index 0.",
        "connectionToSurrounding": "Replaces the head removed by array_shift.",
        "examRelevance": "Returns new count of elements in array."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 12-13",
        "title": "array_merge() — Combine Two Arrays",
        "codeSnippet": "$combined = array_merge($fruits, array(\"Carrot\", \"Beetroot\"));\necho \"<br>After array_merge: \"; print_r($combined);",
        "whatItDoes": "Merges $fruits with a new array (\"Carrot\", \"Beetroot\") to create a combined 6-item array stored in $combined.",
        "whyUsed": "Combines multiple datasets into a single unified collection.",
        "howItWorks": "Appends elements of second array to end of first, renumbering integer keys sequentially.",
        "connectionToSurrounding": "Produces the enlarged array used for reversal and counting.",
        "examRelevance": "For numeric keys, array_merge re-indexes sequentially without overwriting duplicate numbers."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 14-16",
        "title": "array_reverse() and count()",
        "codeSnippet": "echo \"<br>After array_reverse: \"; print_r(array_reverse($combined));\necho \"<br>Total elements: \" . count($combined);\n?>",
        "whatItDoes": "Outputs the array in reverse order, then prints total number of elements (6) using count().",
        "whyUsed": "Demonstrates order inversion and length calculation.",
        "howItWorks": "array_reverse() returns a new reversed array; count() returns integer length.",
        "connectionToSurrounding": "Concludes array demonstrations and terminates script.",
        "examRelevance": "count($arr) and sizeof($arr) are aliases in PHP."
      }
    ],
    "executionFlow": [
      "1. Creates $fruits = [\"Apple\", \"Banana\", \"Cherry\"].",
      "2. array_push adds \"Date\", \"Elderberry\" -> [Apple, Banana, Cherry, Date, Elderberry].",
      "3. array_pop removes \"Elderberry\" -> [Apple, Banana, Cherry, Date].",
      "4. array_shift removes \"Apple\" -> [Banana, Cherry, Date].",
      "5. array_unshift prepends \"Apricot\" -> [Apricot, Banana, Cherry, Date].",
      "6. array_merge joins with [\"Carrot\", \"Beetroot\"] -> 6 elements total.",
      "7. array_reverse reverses the sequence.",
      "8. count() counts the 6 elements and prints the final output."
    ],
    "outputExplanation": {
      "description": "Step-by-step printout of array states showing the effects of each manipulation function, ending with the reverse array and total count 6.",
      "elementsBreakdown": [
        {
          "element": "Original Array",
          "sourceLine": "print_r($fruits);",
          "explanation": "Apple, Banana, Cherry"
        },
        {
          "element": "After push & pop",
          "sourceLine": "array_push(), array_pop()",
          "explanation": "Elderberry pushed then popped"
        },
        {
          "element": "After shift & unshift",
          "sourceLine": "array_shift(), array_unshift()",
          "explanation": "Apple removed, Apricot prepended"
        },
        {
          "element": "Merged & Reversed",
          "sourceLine": "array_merge(), array_reverse()",
          "explanation": "Combined with veggies, displayed backwards"
        },
        {
          "element": "Count",
          "sourceLine": "count($combined)",
          "explanation": "Total elements: 6"
        }
      ]
    },
    "examNotes": [
      {
        "category": "functions",
        "title": "print_r() vs var_dump()",
        "description": "print_r() displays key-value pairs in a readable format. var_dump() also includes data types and string lengths."
      },
      {
        "category": "common_mistakes",
        "title": "In-Place vs Return Value",
        "description": "array_push, array_pop, array_shift, and array_unshift modify the array in place. array_reverse and array_merge return a new array!"
      },
      {
        "category": "pro_tips",
        "title": "count() vs sizeof()",
        "description": "In PHP, sizeof() is an exact alias for count()."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the difference between array_pop() and array_shift()?",
        "answer": "array_pop() removes and returns the last element of an array, while array_shift() removes and returns the first element and re-indexes numerical keys."
      },
      {
        "question": "What does array_unshift() do in PHP?",
        "answer": "array_unshift() prepends one or more elements to the beginning of an array, shifting existing elements forward."
      },
      {
        "question": "Does array_reverse() modify the original array?",
        "answer": "No, array_reverse() returns a new reversed copy of the array; it does not mutate the original variable."
      },
      {
        "question": "What are the three types of arrays in PHP?",
        "answer": "1. Indexed arrays (numeric indexes), 2. Associative arrays (named keys), 3. Multidimensional arrays (arrays containing arrays)."
      },
      {
        "question": "What is the difference between print_r() and echo for arrays?",
        "answer": "echo on an array outputs \"Array\" with a Notice warning, while print_r() formats and prints all elements with their keys."
      }
    ]
  },
  {
    "id": 104,
    "subjectId": "major-13",
    "programNumber": 4,
    "title": "Write a PHP program to count vowels and consonants in a given string.",
    "pdfQuestion": "Program 4\nQuestion: Write a PHP program to count vowels and consonants in a given string.",
    "shortDescription": "Iterates through each character of a string to count vowels (a, e, i, o, u), consonants, and spaces using strlen(), strtolower(), strpos(), and ctype_alpha().",
    "technologies": [
      "PHP"
    ],
    "previewType": "php-simulation",
    "simulationType": "vowels-consonants",
    "runLocallyGuide": {
      "fileName": "vowels_consonants.php",
      "localhostUrl": "http://localhost/vowels_consonants.php",
      "xamppSteps": [
        "Start Apache in XAMPP.",
        "Save as \"vowels_consonants.php\" in C:\\xampp\\htdocs\\phplab\\.",
        "View at http://localhost/phplab/vowels_consonants.php."
      ]
    },
    "originalCode": "<?php\n$str = \"The future belongs to those who prepare for its today!\";\n$vowels = 0; $consonants = 0; $spaces = 0;\n$str = strtolower($str);\nfor ($i = 0; $i < strlen($str); $i++) {\n $ch = $str[$i];\n if (strpos(\"aeiou\", $ch) !== false) {\n $vowels++;\n } elseif ($ch == \" \") {\n $spaces++;\n } elseif (ctype_alpha($ch)) {\n $consonants++;\n }\n}\necho \"Input: $str<br>\";\necho \"Vowels: $vowels<br>\";\necho \"Consonants: $consonants<br>\";\necho \"Spaces: $spaces\";\n?>",
    "sampleOutputText": "Input: the future belongs to those who prepare for its today!\nVowels: 17\nConsonants: 31\nSpaces: 8",
    "objective": {
      "whatItDoes": "Analyzes an inspirational sentence to tally the exact count of vowels, consonants, and whitespace characters.",
      "whyWritten": "To test string manipulation in PHP, string indexing ($str[$i]), string length calculation, case conversion, and character classification functions.",
      "conceptsDemonstrated": "strlen(), strtolower(), strpos() strict comparison (!== false), ctype_alpha(), string traversal as character array.",
      "expectedOutputSummary": "Displays the lowercased input sentence followed by counts: Vowels: 17, Consonants: 31, Spaces: 8.",
      "problemSolved": "Text analysis requires inspecting characters individually. This program parses a sentence to count vowels (a, e, i, o, u), whitespace characters, and consonants.",
      "overallMechanism": "Converts input string to lowercase via strtolower(), iterates character-by-character using string index syntax ($str[$i]), and classifies characters using strpos(\"aeiou\", $ch) and ctype_alpha($ch).",
      "prerequisitesToUnderstand": "String indexing ($str[$i]), strlen(), strpos() strict inequality (!== false), and ctype character classification functions."
    },
    "conceptsUsed": [
      {
        "name": "strlen($str)",
        "description": "Returns the length (number of bytes/characters) of the given string."
      },
      {
        "name": "strtolower($str)",
        "description": "Converts all uppercase ASCII characters in the string to lowercase so vowel checks need only test \"aeiou\"."
      },
      {
        "name": "strpos(\"aeiou\", $ch) !== false",
        "description": "Searches for $ch within \"aeiou\". Requires strict inequality !== because index 0 is truthy in position but evaluates to false in loose comparison."
      },
      {
        "name": "ctype_alpha($ch)",
        "description": "Checks whether character $ch is an alphabetic letter (a-z), ensuring punctuation marks like \"!\" are not counted as consonants."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-3",
        "title": "Initialize String and Counter Variables",
        "codeSnippet": "<?php\n$str = \"The future belongs to those who prepare for its today!\";\n$vowels = 0; $consonants = 0; $spaces = 0;",
        "whatItDoes": "Sets sample sentence and initializes three integer counters ($vowels, $consonants, $spaces) to 0.",
        "whyUsed": "Prepares accumulators before scanning text.",
        "howItWorks": "Allocates integer zvals initialized to zero.",
        "connectionToSurrounding": "Counters are incremented within the loop on lines 8, 10, and 12.",
        "examRelevance": "Always initialize counters to 0 to prevent PHP notices or uninitialized state bugs."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 4",
        "title": "Normalize String to Lowercase (strtolower)",
        "codeSnippet": "$str = strtolower($str);",
        "whatItDoes": "Converts all uppercase letters in $str to lowercase letters in place.",
        "whyUsed": "Simplifies comparison: checking \"aeiou\" handles both uppercase and lowercase automatically.",
        "howItWorks": "ASCII uppercase codes (65-90) are converted to lowercase codes (97-122).",
        "connectionToSurrounding": "Ensures uniform character checking in the conditional ladder below.",
        "examRelevance": "Viva tip: Case normalization reduces conditional complexity by 50%."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 5-6",
        "title": "For Loop Header and Character Extraction",
        "codeSnippet": "for ($i = 0; $i < strlen($str); $i++) {\n  $ch = $str[$i];",
        "whatItDoes": "Iterates index $i from 0 up to string length minus 1, extracting each single character into $ch.",
        "whyUsed": "Visits every character in the string sequentially.",
        "howItWorks": "strlen() returns total byte length; $str[$i] accesses character at byte offset $i.",
        "connectionToSurrounding": "Supplies character $ch to the classification checks below.",
        "examRelevance": "Strings in PHP can be accessed as zero-indexed character arrays ($str[0])."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 7-8",
        "title": "Check for Vowels using strpos() !== false",
        "codeSnippet": "  if (strpos(\"aeiou\", $ch) !== false) {\n    $vowels++;",
        "whatItDoes": "Checks if character $ch exists inside vowel string \"aeiou\"; if found, increments $vowels counter.",
        "whyUsed": "Efficiently tests membership among the five vowel characters.",
        "howItWorks": "strpos returns numeric position (0-4) if found, or boolean false if not found. Strict !== false avoids false-negative at index 0.",
        "connectionToSurrounding": "First branch in classification ladder.",
        "examRelevance": "Critical examiner trap: Why use !== false instead of != false? If $ch is \"a\", strpos returns 0. In PHP, 0 == false is true! Strict !== false is mandatory."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 9-10",
        "title": "Check for Whitespace ($ch == \" \")",
        "codeSnippet": "  } elseif ($ch == \" \") {\n    $spaces++;",
        "whatItDoes": "Checks if current character is a space; if so, increments $spaces counter.",
        "whyUsed": "Prevents spaces from being counted as consonants.",
        "howItWorks": "Compares ASCII character equality with space \" \".",
        "connectionToSurrounding": "Middle branch of conditional ladder.",
        "examRelevance": "Distinguishes space delimiters from letters and punctuation."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 11-13",
        "title": "Check for Consonants using ctype_alpha($ch)",
        "codeSnippet": "  } elseif (ctype_alpha($ch)) {\n    $consonants++;\n  }",
        "whatItDoes": "If character is not a vowel and not a space, tests if it is an alphabetic letter (a-z). If true, increments $consonants.",
        "whyUsed": "Ensures punctuation like \"!\", \".\", and commas are NOT counted as consonants.",
        "howItWorks": "ctype_alpha() returns true only for characters in range [a-zA-Z].",
        "connectionToSurrounding": "Final branch inside character classification loop.",
        "examRelevance": "Crucial distinction: Punctuation like \"!\" is ignored, ensuring accurate count."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 14-19",
        "title": "Print Results and Conclude Script",
        "codeSnippet": "}\necho \"Input: $str<br>\";\necho \"Vowels: $vowels<br>\";\necho \"Consonants: $consonants<br>\";\necho \"Spaces: $spaces\";\n?>",
        "whatItDoes": "Outputs the input string along with the final tallies for vowels, consonants, and spaces.",
        "whyUsed": "Presents final analytical results to user.",
        "howItWorks": "Interpolates variable values inside double-quoted strings.",
        "connectionToSurrounding": "Displays computed accumulators after loop termination.",
        "examRelevance": "Double quotes in PHP automatically interpolate variable names ($vowels); single quotes do not."
      }
    ],
    "executionFlow": [
      "1. String is defined and converted to lowercase.",
      "2. $vowels, $consonants, and $spaces counters are set to 0.",
      "3. strlen($str) calculates 57 characters.",
      "4. Loop iterates 57 times through every character.",
      "5. 't' -> ctype_alpha true -> $consonants increases.",
      "6. 'h' -> consonant.",
      "7. 'e' -> strpos(\"aeiou\", 'e') !== false -> $vowels increases.",
      "8. ' ' -> $spaces increases.",
      "9. '!' matches none of the conditions and is skipped.",
      "10. Outputs Vowels: 17, Consonants: 31, Spaces: 8."
    ],
    "outputExplanation": {
      "description": "The output displays the analyzed sentence followed by the count for each category: 17 vowels, 31 consonants, and 8 spaces.",
      "elementsBreakdown": [
        {
          "element": "Input String",
          "sourceLine": "echo \"Input: $str<br>\";",
          "explanation": "Lowarcased original sentence"
        },
        {
          "element": "Vowels (17)",
          "sourceLine": "$vowels++",
          "explanation": "Counts a, e, i, o, u occurrences"
        },
        {
          "element": "Consonants (31)",
          "sourceLine": "$consonants++",
          "explanation": "Counts letters that are not vowels"
        },
        {
          "element": "Spaces (8)",
          "sourceLine": "$spaces++",
          "explanation": "Counts whitespace characters"
        }
      ]
    },
    "examNotes": [
      {
        "category": "functions",
        "title": "strpos() Strict Comparison",
        "description": "Always check strpos(...) !== false with three characters (!==). A loose check != false will fail for the letter \"a\" because index 0 is loosely equal to false."
      },
      {
        "category": "functions",
        "title": "ctype_alpha() vs is_string()",
        "description": "ctype_alpha() checks if every character is an alphabetic letter. is_string() only checks variable data type."
      },
      {
        "category": "common_mistakes",
        "title": "Forgetting Non-Alpha Characters",
        "description": "If you use else { $consonants++; } without checking ctype_alpha(), punctuation marks like \".\", \",\", \"!\" will be wrongly counted as consonants."
      }
    ],
    "vivaQuestions": [
      {
        "question": "Why is strpos() checked with !== false instead of != false?",
        "answer": "strpos() returns the 0-based position of the character. If the character is at position 0 (like \"a\" in \"aeiou\"), it returns 0. In PHP, 0 == false evaluates to true, causing a false negative. Using !== false ensures strict type and value checking."
      },
      {
        "question": "What does the function ctype_alpha() do?",
        "answer": "ctype_alpha() checks if all characters in the provided string are alphabetic letters (A-Z, a-z). It returns true if alphabetic, false otherwise."
      },
      {
        "question": "How do you access an individual character in a PHP string?",
        "answer": "Using array subscript notation, such as $str[$i] or curly braces $str{$i} (braces deprecated in modern PHP)."
      },
      {
        "question": "What is the purpose of strtolower() in this program?",
        "answer": "It converts the entire string to lowercase so the vowel comparison only needs to check \"aeiou\", avoiding duplicate checks for \"AEIOU\"."
      },
      {
        "question": "What function counts the number of characters in a string in PHP?",
        "answer": "strlen() returns the byte length. For multibyte Unicode strings (like UTF-8 emojis or accented letters), mb_strlen() is used."
      }
    ]
  },
  {
    "id": 105,
    "subjectId": "major-13",
    "programNumber": 5,
    "title": "Write a PHP program to read employee details and display them using a form.",
    "pdfQuestion": "Program 5\nQuestion: Write a PHP program to read employee details and display them using a form.\nNote: Save as employee.php and run through localhost. The output shown is after sample form submission.",
    "shortDescription": "Implements a self-processing HTML form with PHP POST handling to read and display Employee Name, Employee ID, Department, and Email with XSS protection using htmlspecialchars().",
    "technologies": [
      "PHP",
      "HTML"
    ],
    "previewType": "php-simulation",
    "simulationType": "employee-form",
    "runLocallyGuide": {
      "fileName": "employee.php",
      "localhostUrl": "http://localhost/phplab/employee.php",
      "xamppSteps": [
        "Open XAMPP Control Panel and start Apache.",
        "Save the script as \"employee.php\" in C:\\xampp\\htdocs\\phplab\\.",
        "Open http://localhost/phplab/employee.php in your browser.",
        "Fill in the form fields and click Submit."
      ],
      "notes": "This is a self-processing form: both the HTML input form and the PHP POST handling script live inside the single employee.php file."
    },
    "originalCode": "<!DOCTYPE html>\n<html><body>\n<h2>Enter Employee Details</h2>\n<form method=\"post\" action=\"\">\nName: <input type=\"text\" name=\"emp_name\" required><br><br>\nEmployee ID: <input type=\"text\" name=\"emp_id\" required><br><br>\nDepartment: <input type=\"text\" name=\"emp_department\" required><br><br>\nEmail: <input type=\"email\" name=\"email\" required><br><br>\n<input type=\"submit\" name=\"submit\" value=\"Submit\">\n</form>\n<?php\nif (isset($_POST['submit'])) {\n echo \"<h2>Employee Details Entered:</h2>\";\n echo \"Name: \" . htmlspecialchars($_POST['emp_name']) . \"<br>\";\n echo \"Employee ID: \" . htmlspecialchars($_POST['emp_id']) . \"<br>\";\n echo \"Department: \" . htmlspecialchars($_POST['emp_department']) . \"<br>\";\n echo \"Email: \" . htmlspecialchars($_POST['email']) . \"<br>\";\n}\n?>\n</body></html>",
    "sampleOutputText": "Employee Details Entered:\nName: Sai Mukesh\nEmployee ID: EMP101\nDepartment: Computer Science\nEmail: sai@example.com",
    "objective": {
      "whatItDoes": "Presents an HTML form requesting employee details and upon form submission, reads values from the $_POST superglobal and displays them securely.",
      "whyWritten": "To test understanding of form-to-server data transmission, self-submitting forms (action=\"\"), POST method handling, isset() check, and XSS sanitization using htmlspecialchars().",
      "conceptsDemonstrated": "HTML <form method=\"post\">, superglobal $_POST, isset($_POST['submit']), htmlspecialchars() sanitization, self-processing PHP script.",
      "expectedOutputSummary": "Displays input fields for Name, ID, Department, and Email. Clicking Submit renders an \"Employee Details Entered:\" card with the submitted values.",
      "problemSolved": "Web applications require processing form data submitted by users. This program demonstrates single-page form submission (self-posting form) using POST method and safely echoing inputs with htmlspecialchars().",
      "overallMechanism": "An HTML form collects employee fields. When submitted, PHP checks isset($_POST[\"submit\"]), sanitizes user inputs with htmlspecialchars() to prevent Cross-Site Scripting (XSS), and displays the captured record.",
      "prerequisitesToUnderstand": "HTTP POST method, superglobal $_POST array, form action=\"\" self-submission, and XSS sanitization."
    },
    "conceptsUsed": [
      {
        "name": "Self-Processing Form",
        "description": "When action=\"\" is empty, the form submits back to the same PHP file, combining presentation and handler in one file."
      },
      {
        "name": "POST Method",
        "description": "Transmits data in the HTTP request body rather than query parameters in the URL, suitable for forms."
      },
      {
        "name": "$_POST Superglobal",
        "description": "An associative array of variables passed to the current script via the HTTP POST method."
      },
      {
        "name": "isset() Function",
        "description": "Checks whether a variable or array key is declared and is not NULL."
      },
      {
        "name": "htmlspecialchars()",
        "description": "Converts special HTML characters (&, \", ', <, >) into HTML entities to prevent Cross-Site Scripting (XSS) attacks."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-3",
        "title": "HTML Document Envelope and Form Title",
        "codeSnippet": "<!DOCTYPE html>\n<html><body>\n<h2>Enter Employee Details</h2>",
        "whatItDoes": "Sets up HTML5 document structure and renders page title.",
        "whyUsed": "Provides web interface layout.",
        "howItWorks": "Standard DOM setup.",
        "connectionToSurrounding": "Precedes HTML form definition.",
        "examRelevance": "HTML and PHP can coexist seamlessly in the same file."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 4-10",
        "title": "Self-Posting HTML Form with POST Method",
        "codeSnippet": "<form method=\"post\" action=\"\">\nName: <input type=\"text\" name=\"emp_name\" required><br><br>\nEmployee ID: <input type=\"text\" name=\"emp_id\" required><br><br>\nDepartment: <input type=\"text\" name=\"emp_department\" required><br><br>\nEmail: <input type=\"email\" name=\"email\" required><br><br>\n<input type=\"submit\" name=\"submit\" value=\"Submit\">\n</form>",
        "whatItDoes": "Renders an input form with fields for name, ID, department, email, and submit button, posting back to itself (action=\"\").",
        "whyUsed": "Captures structured employee details securely in HTTP request body.",
        "howItWorks": "method=\"post\" encodes data in HTTP request payload without exposing sensitive parameters in URL query string.",
        "connectionToSurrounding": "Supplies data populated into $_POST upon submission.",
        "examRelevance": "Viva distinction: GET appends form data to URL (visible in address bar, max ~2048 chars); POST sends data in HTTP request body (invisible in URL, no size limit)."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 11-12",
        "title": "PHP Block and Submission Detection (isset($_POST[\"submit\"]))",
        "codeSnippet": "<?php\nif (isset($_POST['submit'])) {",
        "whatItDoes": "Opens PHP block and checks if the submit button was clicked in the incoming POST request.",
        "whyUsed": "Prevents PHP from running or throwing \"undefined index\" warnings on initial page load before form submission.",
        "howItWorks": "isset() returns true only if the specified key exists in the $_POST superglobal array.",
        "connectionToSurrounding": "Encloses the display logic on lines 13-17.",
        "examRelevance": "Crucial best practice: Always check isset($_POST[...]) before accessing form fields."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 13-17",
        "title": "Sanitized Output with htmlspecialchars()",
        "codeSnippet": "  echo \"<h2>Employee Details Entered:</h2>\";\n  echo \"Name: \" . htmlspecialchars($_POST['emp_name']) . \"<br>\";\n  echo \"Employee ID: \" . htmlspecialchars($_POST['emp_id']) . \"<br>\";\n  echo \"Department: \" . htmlspecialchars($_POST['emp_department']) . \"<br>\";\n  echo \"Email: \" . htmlspecialchars($_POST['email']) . \"<br>\";",
        "whatItDoes": "Retrieves each submitted field from $_POST, escapes HTML special characters, and prints the details.",
        "whyUsed": "Security: htmlspecialchars() prevents Cross-Site Scripting (XSS) attacks by converting < and > into safe entities (&lt; &gt;).",
        "howItWorks": "Converts reserved HTML characters (&, \", ', <, >) into harmless HTML entities.",
        "connectionToSurrounding": "Renders the employee record right below the form.",
        "examRelevance": "Top viva question: Why use htmlspecialchars()? To protect against XSS injection attacks."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 18-20",
        "title": "Close Conditional Block, PHP Tag, and HTML Document",
        "codeSnippet": "}\n?>\n</body></html>",
        "whatItDoes": "Closes if statement, closes PHP block, and terminates HTML document.",
        "whyUsed": "Clean structural termination.",
        "howItWorks": "Finalizes server-side response.",
        "connectionToSurrounding": "Concludes page.",
        "examRelevance": "Braces must match accurately."
      }
    ],
    "executionFlow": [
      "1. User visits http://localhost/employee.php via HTTP GET.",
      "2. PHP parses file: isset($_POST['submit']) evaluates to false. Form is rendered empty.",
      "3. User fills in \"Sai Mukesh\", \"EMP101\", \"Computer Science\", \"sai@example.com\" and clicks Submit.",
      "4. Browser issues HTTP POST to employee.php containing form field pairs in request body.",
      "5. Server populates $_POST array.",
      "6. isset($_POST['submit']) evaluates to true.",
      "7. htmlspecialchars() sanitizes the inputs.",
      "8. Outputs the formatted employee card directly below the form."
    ],
    "outputExplanation": {
      "description": "After the user fills in the form and clicks Submit, the PHP script extracts the values and prints \"Employee Details Entered:\" followed by Name, Employee ID, Department, and Email.",
      "elementsBreakdown": [
        {
          "element": "Form Interface",
          "sourceLine": "<form method=\"post\" action=\"\">",
          "explanation": "Input text boxes and Submit button"
        },
        {
          "element": "Employee Name",
          "sourceLine": "htmlspecialchars($_POST['emp_name'])",
          "explanation": "Renders \"Sai Mukesh\""
        },
        {
          "element": "Employee ID",
          "sourceLine": "htmlspecialchars($_POST['emp_id'])",
          "explanation": "Renders \"EMP101\""
        },
        {
          "element": "Department",
          "sourceLine": "htmlspecialchars($_POST['emp_department'])",
          "explanation": "Renders \"Computer Science\""
        },
        {
          "element": "Email",
          "sourceLine": "htmlspecialchars($_POST['email'])",
          "explanation": "Renders \"sai@example.com\""
        }
      ]
    },
    "examNotes": [
      {
        "category": "security",
        "title": "XSS Prevention with htmlspecialchars()",
        "description": "Never directly echo unescaped $_POST data. htmlspecialchars() is mandatory in good web programming to neutralize injected script tags."
      },
      {
        "category": "important_tags",
        "title": "name vs id Attributes",
        "description": "id is used for CSS and JavaScript DOM access; name is required for PHP form submission."
      },
      {
        "category": "common_mistakes",
        "title": "Action attribute",
        "description": "action=\"\" or action=\"<?php echo $_SERVER['PHP_SELF']; ?>\" submits to the same file. In exams, action=\"\" is shortest and cleanest."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is a self-processing form in PHP?",
        "answer": "A form that submits back to the same page where it is defined (action=\"\" or action=\"current_file.php\"), containing both the HTML input markup and the PHP submission handling code."
      },
      {
        "question": "Why is htmlspecialchars() used when echoing user input?",
        "answer": "To prevent Cross-Site Scripting (XSS) attacks by converting special characters like <, >, and & into HTML entities so malicious scripts cannot execute in the browser."
      },
      {
        "question": "What is the $_POST superglobal in PHP?",
        "answer": "An automatically created associative array that contains all data sent to the current script via the HTTP POST method."
      },
      {
        "question": "What is the difference between $_GET and $_POST?",
        "answer": "$_GET sends data visible in the URL query string (limited length, cacheable, not secure for passwords). $_POST sends data inside the HTTP request body (invisible in URL, no size limit, secure for sensitive data)."
      },
      {
        "question": "What does the isset() function do?",
        "answer": "isset() determines if a variable is declared and is different than null. In forms, it is used to check if the submit button was clicked."
      }
    ]
  },
  {
    "id": 106,
    "subjectId": "major-13",
    "programNumber": 6,
    "title": "Create a student registration form using text box, radio button, checkbox, select and submit button, and display the user input values in a new PHP page.",
    "pdfQuestion": "Program 6\nQuestion: Create a student registration form using text box, radio button, checkbox, select and submit button, and display the user input values in a new PHP page.\nNote: Create student.php and display.php in the same folder and run through localhost.",
    "shortDescription": "Constructs a multi-file student registration application with student.php (rendering text, date, radio, array checkbox course[], and select inputs) submitting to display.php for extraction and rendering.",
    "technologies": [
      "PHP",
      "HTML"
    ],
    "previewType": "php-simulation",
    "simulationType": "student-registration",
    "runLocallyGuide": {
      "fileName": "student.php & display.php",
      "localhostUrl": "http://localhost/phplab/student.php",
      "xamppSteps": [
        "Open XAMPP and start Apache.",
        "Create C:\\xampp\\htdocs\\phplab\\.",
        "Save the first file as \"student.php\" and the second file as \"display.php\" in the same folder.",
        "Open http://localhost/phplab/student.php in your browser, fill in the details, and click \"Register\".",
        "The browser will submit to display.php and show your registered details."
      ],
      "notes": "Ensure both student.php and display.php are in the exact same directory so action=\"display.php\" finds the target handler."
    },
    "codeFiles": [
      {
        "fileName": "student.php",
        "language": "html",
        "label": "File 1: student.php (Registration Form)",
        "description": "Contains the HTML registration form with action=\"display.php\"",
        "code": "<!-- Save as student.php -->\n<!DOCTYPE html><html><body>\n<h2>Student Registration</h2>\n<form method=\"post\" action=\"display.php\">\nName: <input type=\"text\" name=\"name\" required><br>\nDOB: <input type=\"date\" name=\"dob\"><br>\nEmail: <input type=\"email\" name=\"email\"><br>\nGender: <input type=\"radio\" name=\"gender\" value=\"Male\"> Male\n<input type=\"radio\" name=\"gender\" value=\"Female\"> Female<br>\nCourses:<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"Maths\"> Maths<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"Science\"> Science<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"English\"> English<br>\nDepartment: <select name=\"department\">\n<option>Computer Science</option><option>Electronics</option><option>Mechanical</option>\n</select><br>\n<input type=\"submit\" value=\"Register\">\n</form></body></html>"
      },
      {
        "fileName": "display.php",
        "language": "php",
        "label": "File 2: display.php (Data Handler)",
        "description": "Processes POST data, iterates over the course[] checkbox array, and outputs details",
        "code": "<!-- Save as display.php -->\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n echo \"Student Details Submitted<br>\";\n echo \"Name: \" . htmlspecialchars($_POST[\"name\"] ?? \"\") . \"<br>\";\n echo \"DOB: \" . htmlspecialchars($_POST[\"dob\"] ?? \"\") . \"<br>\";\n echo \"Email: \" . htmlspecialchars($_POST[\"email\"] ?? \"\") . \"<br>\";\n echo \"Gender: \" . htmlspecialchars($_POST[\"gender\"] ?? \"\") . \"<br>\";\n echo \"Department: \" . htmlspecialchars($_POST[\"department\"] ?? \"\") . \"<br>\";\n echo \"Selected courses:<br>\";\n foreach ($_POST[\"course\"] ?? array() as $course) {\n echo htmlspecialchars($course) . \"<br>\";\n }\n} else {\n echo \"Form not submitted\";\n}\n?>"
      }
    ],
    "originalCode": "<!-- Save as student.php -->\n<!DOCTYPE html><html><body>\n<h2>Student Registration</h2>\n<form method=\"post\" action=\"display.php\">\nName: <input type=\"text\" name=\"name\" required><br>\nDOB: <input type=\"date\" name=\"dob\"><br>\nEmail: <input type=\"email\" name=\"email\"><br>\nGender: <input type=\"radio\" name=\"gender\" value=\"Male\"> Male\n<input type=\"radio\" name=\"gender\" value=\"Female\"> Female<br>\nCourses:<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"Maths\"> Maths<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"Science\"> Science<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"English\"> English<br>\nDepartment: <select name=\"department\">\n<option>Computer Science</option><option>Electronics</option><option>Mechanical</option>\n</select><br>\n<input type=\"submit\" value=\"Register\">\n</form></body></html>\n<!-- Save as display.php -->\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n echo \"Student Details Submitted<br>\";\n echo \"Name: \" . htmlspecialchars($_POST[\"name\"] ?? \"\") . \"<br>\";\n echo \"DOB: \" . htmlspecialchars($_POST[\"dob\"] ?? \"\") . \"<br>\";\n echo \"Email: \" . htmlspecialchars($_POST[\"email\"] ?? \"\") . \"<br>\";\n echo \"Gender: \" . htmlspecialchars($_POST[\"gender\"] ?? \"\") . \"<br>\";\n echo \"Department: \" . htmlspecialchars($_POST[\"department\"] ?? \"\") . \"<br>\";\n echo \"Selected courses:<br>\";\n foreach ($_POST[\"course\"] ?? array() as $course) {\n echo htmlspecialchars($course) . \"<br>\";\n }\n} else {\n echo \"Form not submitted\";\n}\n?>",
    "sampleOutputText": "Student Details Submitted\nName: Sai Mukesh\nDOB: 2005-06-15\nEmail: sai@example.com\nGender: Male\nDepartment: Computer Science\nSelected courses:\nMaths\nScience",
    "objective": {
      "whatItDoes": "Gathers multi-type student input on student.php (text, date, radio, array checkbox, select) and routes it to display.php via POST to display the submitted registration summary.",
      "whyWritten": "To test cross-page form data passing, checkbox array naming convention (course[]), null coalescing operator (??), and foreach array looping in PHP.",
      "conceptsDemonstrated": "Two-tier form routing (action=\"display.php\"), $_SERVER[\"REQUEST_METHOD\"], array checkboxes (name=\"course[]\"), foreach loop, htmlspecialchars().",
      "expectedOutputSummary": "Submitting \"Sai Mukesh\", \"2005-06-15\", \"sai@example.com\", \"Male\", checkboxes Maths & Science, and \"Computer Science\" prints the formatted student summary.",
      "problemSolved": "Real-world registration workflows capture diverse widget data (text, date, radio, checkbox arrays, select dropdowns) across multi-page architectures.",
      "overallMechanism": "student.php collects inputs and submits to display.php via POST. display.php checks $_SERVER[\"REQUEST_METHOD\"], extracts fields with null-coalescing defaults (?? \"\"), and iterates checkbox array items via foreach.",
      "prerequisitesToUnderstand": "Multi-file web architectures, checkbox array naming convention (course[]), and PHP foreach loops."
    },
    "conceptsUsed": [
      {
        "name": "Multi-Page Architecture",
        "description": "Separation of concerns: student.php contains the UI form; display.php handles server processing."
      },
      {
        "name": "Array Checkboxes (name=\"course[]\")",
        "description": "Adding brackets [] tells PHP to collect all checked checkboxes into a indexed array in $_POST['course']."
      },
      {
        "name": "$_SERVER[\"REQUEST_METHOD\"]",
        "description": "Checks whether the request arrived via POST or direct GET access."
      },
      {
        "name": "Null Coalescing (??)",
        "description": "Returns the left operand if it exists and is not null; otherwise returns the right fallback operand."
      },
      {
        "name": "foreach Loop",
        "description": "Iterates sequentially through all elements of an array without needing an integer index counter."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-4",
        "title": "student.php: Form Header and Action Route",
        "codeSnippet": "<!-- Save as student.php -->\n<!DOCTYPE html><html><body>\n<h2>Student Registration</h2>\n<form method=\"post\" action=\"display.php\">",
        "whatItDoes": "Creates the student registration form that sends submitted data to a separate file named display.php.",
        "whyUsed": "Demonstrates multi-page client-server routing.",
        "howItWorks": "action=\"display.php\" routes the HTTP POST request to that specific server endpoint.",
        "connectionToSurrounding": "Wraps all registration widgets.",
        "examRelevance": "action specifies target processing script; method specifies HTTP transmission protocol."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 5-7",
        "title": "Text, Date, and Email Inputs",
        "codeSnippet": "Name: <input type=\"text\" name=\"name\" required><br>\nDOB: <input type=\"date\" name=\"dob\"><br>\nEmail: <input type=\"email\" name=\"email\"><br>",
        "whatItDoes": "Renders text field for name, date-picker calendar for date of birth, and validated email field.",
        "whyUsed": "Collects primary biographical student data with native HTML5 validation.",
        "howItWorks": "Browser renders native OS calendar picker for date and validates email pattern.",
        "connectionToSurrounding": "First group of registration fields.",
        "examRelevance": "type=\"date\" automatically formats values as YYYY-MM-DD."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 8-9",
        "title": "Radio Buttons for Gender Selection",
        "codeSnippet": "Gender: <input type=\"radio\" name=\"gender\" value=\"Male\"> Male\n<input type=\"radio\" name=\"gender\" value=\"Female\"> Female<br>",
        "whatItDoes": "Renders two mutually exclusive radio buttons for selecting gender.",
        "whyUsed": "Enforces selection of a single gender option.",
        "howItWorks": "Both inputs share identical name=\"gender\", allowing only one to be checked at any time.",
        "connectionToSurrounding": "Single-select choice group.",
        "examRelevance": "When submitted, $_POST[\"gender\"] holds \"Male\" or \"Female\"."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 10-13",
        "title": "Checkbox Array for Course Selection (course[])",
        "codeSnippet": "Courses:<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"Maths\"> Maths<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"Science\"> Science<br>\n<input type=\"checkbox\" name=\"course[]\" value=\"English\"> English<br>",
        "whatItDoes": "Renders three checkboxes using square brackets in the name (name=\"course[]\").",
        "whyUsed": "Allows multiple subjects to be checked and bundled into a single PHP array.",
        "howItWorks": "Square brackets tell PHP to parse submitted values as an indexed array in $_POST[\"course\"].",
        "connectionToSurrounding": "Critical viva concept for handling multiple choices in PHP.",
        "examRelevance": "Examiner favorite: Why use name=\"course[]\" with brackets? Without brackets, each checked box overwrites the previous one; with [], PHP creates an array."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 14-18",
        "title": "Department Select Dropdown and Submit Button",
        "codeSnippet": "Department: <select name=\"department\">\n<option>Computer Science</option><option>Electronics</option><option>Mechanical</option>\n</select><br>\n<input type=\"submit\" value=\"Register\">\n</form></body></html>",
        "whatItDoes": "Renders dropdown menu for department and submit button to trigger registration.",
        "whyUsed": "Completes student registration form widgets.",
        "howItWorks": "Submits all fields to display.php on click.",
        "connectionToSurrounding": "Concludes student.php page.",
        "examRelevance": "Selected option value is sent under $_POST[\"department\"]."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 19-21",
        "title": "display.php: Check Request Method ($_SERVER[\"REQUEST_METHOD\"])",
        "codeSnippet": "<!-- Save as display.php -->\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {",
        "whatItDoes": "In the separate file display.php, verifies that page was accessed via an HTTP POST request.",
        "whyUsed": "Prevents direct URL access errors when someone navigates to display.php directly in browser.",
        "howItWorks": "Inspects $_SERVER superglobal containing HTTP environment variables.",
        "connectionToSurrounding": "Guards the display routine on lines 22-31.",
        "examRelevance": "Robust alternative or complement to checking isset($_POST[\"submit\"])."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 22-27",
        "title": "Display Sanitized Scalar Fields with Null Coalescing (??)",
        "codeSnippet": "  echo \"Student Details Submitted<br>\";\n  echo \"Name: \" . htmlspecialchars($_POST[\"name\"] ?? \"\") . \"<br>\";\n  echo \"DOB: \" . htmlspecialchars($_POST[\"dob\"] ?? \"\") . \"<br>\";\n  echo \"Email: \" . htmlspecialchars($_POST[\"email\"] ?? \"\") . \"<br>\";\n  echo \"Gender: \" . htmlspecialchars($_POST[\"gender\"] ?? \"\") . \"<br>\";\n  echo \"Department: \" . htmlspecialchars($_POST[\"department\"] ?? \"\") . \"<br>\";",
        "whatItDoes": "Outputs name, DOB, email, gender, and department safely using htmlspecialchars() and default fallback (?? \"\").",
        "whyUsed": "Safely prints all scalar registration fields without triggering undefined index warnings if an optional field was omitted.",
        "howItWorks": "Null-coalescing operator (??) provides empty string \"\" if the key is missing.",
        "connectionToSurrounding": "Precedes course array iteration below.",
        "examRelevance": "Null coalescing operator (??) was introduced in PHP 7 to eliminate isset() boilerplate."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 28-31",
        "title": "Iterate Checkbox Array via foreach Loop",
        "codeSnippet": "  echo \"Selected courses:<br>\";\n  foreach ($_POST[\"course\"] ?? array() as $course) {\n    echo htmlspecialchars($course) . \"<br>\";\n  }",
        "whatItDoes": "Loops through every selected course checkbox in the $_POST[\"course\"] array and displays it.",
        "whyUsed": "Handles dynamic number of selected checkboxes (0, 1, 2, or 3 courses).",
        "howItWorks": "foreach iterates through array elements one by one; ?? array() prevents error if zero boxes checked.",
        "connectionToSurrounding": "Displays all multi-select choices.",
        "examRelevance": "Critical viva pattern: Iterating arrays in PHP is most cleanly done using foreach ($array as $value)."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Lines 32-35",
        "title": "Else Branch and File Closure",
        "codeSnippet": "} else {\n  echo \"Form not submitted\";\n}\n?>",
        "whatItDoes": "Outputs error notice if display.php is requested directly without submitting the form, and closes script.",
        "whyUsed": "Provides clear diagnostic message for invalid navigation.",
        "howItWorks": "Executes if request method is GET.",
        "connectionToSurrounding": "Concludes display.php.",
        "examRelevance": "Always handle invalid or unauthorized direct access."
      }
    ],
    "executionFlow": [
      "1. User visits student.php and sees the registration form.",
      "2. User enters name \"Sai Mukesh\", selects Male, checks \"Maths\" and \"Science\", selects \"Computer Science\".",
      "3. Clicking \"Register\" dispatches a POST request to display.php.",
      "4. Web server receives POST and executes display.php.",
      "5. $_SERVER[\"REQUEST_METHOD\"] evaluates to \"POST\".",
      "6. Simple scalar fields (name, dob, email, gender, department) are echoed.",
      "7. foreach loop traverses the array [\"Maths\", \"Science\"] and prints each line.",
      "8. Result page renders the completed student profile."
    ],
    "outputExplanation": {
      "description": "The output is rendered on display.php after submission, displaying \"Student Details Submitted\" followed by all captured values and a bulleted/listed breakdown of selected courses.",
      "elementsBreakdown": [
        {
          "element": "Student Header",
          "sourceLine": "echo \"Student Details Submitted\";",
          "explanation": "Confirmation banner"
        },
        {
          "element": "Personal Details",
          "sourceLine": "htmlspecialchars($_POST[\"name\"]) ...",
          "explanation": "Name, DOB, Email, Gender"
        },
        {
          "element": "Department",
          "sourceLine": "htmlspecialchars($_POST[\"department\"])",
          "explanation": "Selected dropdown value"
        },
        {
          "element": "Course List",
          "sourceLine": "foreach ($_POST[\"course\"] ...)",
          "explanation": "Maths and Science printed on separate lines"
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Square Brackets in Checkbox Names",
        "description": "Crucial for multi-select: name=\"course[]\" tells PHP to construct an array. Without brackets, subsequent checkboxes overwrite prior ones."
      },
      {
        "category": "security",
        "title": "Null Coalescing Operator (??)",
        "description": "Use $_POST['key'] ?? '' to safely access variables without triggering PHP E_WARNING notices."
      },
      {
        "category": "server_setup",
        "title": "File Placement",
        "description": "Both student.php and display.php must be in the exact same directory (e.g. C:\\xampp\\htdocs\\phplab\\)."
      }
    ],
    "vivaQuestions": [
      {
        "question": "Why do checkboxes have brackets in their name attribute (name=\"course[]\") in PHP?",
        "answer": "Brackets instruct PHP to treat the submitted values as an indexed array. If brackets are omitted, selecting multiple checkboxes will only transmit the last checked item."
      },
      {
        "question": "What does $_SERVER[\"REQUEST_METHOD\"] return?",
        "answer": "It returns the request method used to access the page (such as \"GET\", \"POST\", \"HEAD\", or \"PUT\")."
      },
      {
        "question": "What happens if a user submits student.php without checking any course checkbox?",
        "answer": "The browser does not include \"course\" in the POST payload. Without null coalescing (?? array()), accessing $_POST[\"course\"] would trigger an \"Undefined array key\" warning."
      },
      {
        "question": "How does foreach work with associative or indexed arrays in PHP?",
        "answer": "foreach ($array as $value) iterates through each element value. foreach ($array as $key => $value) exposes both the key and the value."
      },
      {
        "question": "What is the purpose of the action attribute in the <form> tag?",
        "answer": "The action attribute specifies the destination URL or script where the form data will be sent for processing upon submission."
      }
    ]
  },
  {
    "id": 107,
    "subjectId": "major-13",
    "programNumber": 7,
    "title": "Write a PHP script to upload a file.",
    "pdfQuestion": "Program 7\nQuestion: Write a PHP script to upload a file.\nNote: Save index.html and upload.php in one folder. This introductory example does not include production-grade file type/size validation.",
    "shortDescription": "Demonstrates file uploading in PHP using enctype=\"multipart/form-data\" on index.html, handling the $_FILES superglobal, creating directories with mkdir(), and moving the temporary file with move_uploaded_file() in upload.php.",
    "technologies": [
      "PHP",
      "HTML"
    ],
    "previewType": "php-simulation",
    "simulationType": "file-upload",
    "runLocallyGuide": {
      "fileName": "index.html & upload.php",
      "localhostUrl": "http://localhost/phplab/index.html",
      "xamppSteps": [
        "Open XAMPP Control Panel and start Apache.",
        "In C:\\xampp\\htdocs\\phplab\\, save the first file as \"index.html\" and the second file as \"upload.php\".",
        "Open http://localhost/phplab/index.html in your browser.",
        "Choose a file (e.g. photo.jpg) and click \"Upload\".",
        "The script creates an \"uploads\" folder in your directory and stores the file."
      ],
      "notes": "File uploading strictly requires enctype=\"multipart/form-data\" on the <form> tag. Without this attribute, the file data will NOT be transmitted."
    },
    "codeFiles": [
      {
        "fileName": "index.html",
        "language": "html",
        "label": "File 1: index.html (File Upload Form)",
        "description": "Contains file input with enctype=\"multipart/form-data\"",
        "code": "<!-- Save as index.html -->\n<!DOCTYPE html><html><body>\n<form enctype=\"multipart/form-data\" action=\"upload.php\" method=\"post\">\nSelect file: <input type=\"file\" name=\"uploaded_file\" required>\n<input type=\"submit\" value=\"Upload\">\n</form></body></html>"
      },
      {
        "fileName": "upload.php",
        "language": "php",
        "label": "File 2: upload.php (Upload Processing Script)",
        "description": "Processes $_FILES, checks UPLOAD_ERR_OK, creates uploads directory, and moves file",
        "code": "<!-- Save as upload.php -->\n<?php\nif (isset($_FILES[\"uploaded_file\"]) &&\n $_FILES[\"uploaded_file\"][\"error\"] === UPLOAD_ERR_OK) {\n $uploadDir = __DIR__ . \"/uploads/\";\n if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);\n $fileName = basename($_FILES[\"uploaded_file\"][\"name\"]);\n $destination = $uploadDir . $fileName;\n if (move_uploaded_file($_FILES[\"uploaded_file\"][\"tmp_name\"], $destination)) {\n echo \"The file \" . htmlspecialchars($fileName) . \" has been uploaded.\";\n } else {\n echo \"There was an error uploading the file.\";\n }\n} else {\n echo \"Please select a file to upload.\";\n}\n?>"
      }
    ],
    "originalCode": "<!-- Save as index.html -->\n<!DOCTYPE html><html><body>\n<form enctype=\"multipart/form-data\" action=\"upload.php\" method=\"post\">\nSelect file: <input type=\"file\" name=\"uploaded_file\" required>\n<input type=\"submit\" value=\"Upload\">\n</form></body></html>\n<!-- Save as upload.php -->\n<?php\nif (isset($_FILES[\"uploaded_file\"]) &&\n $_FILES[\"uploaded_file\"][\"error\"] === UPLOAD_ERR_OK) {\n $uploadDir = __DIR__ . \"/uploads/\";\n if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);\n $fileName = basename($_FILES[\"uploaded_file\"][\"name\"]);\n $destination = $uploadDir . $fileName;\n if (move_uploaded_file($_FILES[\"uploaded_file\"][\"tmp_name\"], $destination)) {\n echo \"The file \" . htmlspecialchars($fileName) . \" has been uploaded.\";\n } else {\n echo \"There was an error uploading the file.\";\n }\n} else {\n echo \"Please select a file to upload.\";\n}\n?>",
    "sampleOutputText": "The file photo.jpg has been uploaded.",
    "objective": {
      "whatItDoes": "Provides an interface to select a file from the user's local disk, transmit it via multipart POST, and securely save it to a server-side directory.",
      "whyWritten": "To teach server-side file handling, understanding temporary upload staging, the $_FILES array structure, error checking, and moving uploaded files.",
      "conceptsDemonstrated": "enctype=\"multipart/form-data\", $_FILES superglobal, UPLOAD_ERR_OK, __DIR__, is_dir(), mkdir(), basename(), move_uploaded_file().",
      "expectedOutputSummary": "When \"photo.jpg\" is uploaded, displays: \"The file photo.jpg has been uploaded.\"",
      "problemSolved": "Web forms need to accept binary file uploads (documents, photos) from client computers and save them securely on the web server filesystem.",
      "overallMechanism": "HTML form uses enctype=\"multipart/form-data\" to encode binary streams. Server receives file metadata into $_FILES[\"uploaded_file\"], validates upload status (UPLOAD_ERR_OK), and saves file via move_uploaded_file().",
      "prerequisitesToUnderstand": "Form encoding types (enctype=\"multipart/form-data\"), $_FILES 2D array, and temporary upload directory mechanics."
    },
    "conceptsUsed": [
      {
        "name": "enctype=\"multipart/form-data\"",
        "description": "MIME encoding required when submitting binary file data in an HTML form."
      },
      {
        "name": "$_FILES Superglobal",
        "description": "Two-dimensional associative array containing metadata for each uploaded file: name, type, size, tmp_name, error."
      },
      {
        "name": "Temporary Staging (tmp_name)",
        "description": "PHP automatically stores uploaded files in a temporary system directory (e.g. /tmp or C:\\xampp\\tmp). It is deleted when the script terminates unless moved."
      },
      {
        "name": "move_uploaded_file()",
        "description": "Safely moves the temporary file to a permanent target location only after verifying it was uploaded via HTTP POST."
      },
      {
        "name": "basename()",
        "description": "Strips out directory traversal characters (like ../) from the client-supplied filename for security."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-6",
        "title": "index.html: Form with enctype=\"multipart/form-data\"",
        "codeSnippet": "<!-- Save as index.html -->\n<!DOCTYPE html><html><body>\n<form enctype=\"multipart/form-data\" action=\"upload.php\" method=\"post\">\nSelect file: <input type=\"file\" name=\"uploaded_file\" required>\n<input type=\"submit\" value=\"Upload\">\n</form></body></html>",
        "whatItDoes": "Creates an HTML upload form with enctype=\"multipart/form-data\" pointing to upload.php.",
        "whyUsed": "Standard application/x-www-form-urlencoded cannot transmit binary file bytes; multipart/form-data is mandatory.",
        "howItWorks": "Packages file content in MIME multipart boundaries in the HTTP POST body.",
        "connectionToSurrounding": "Transmits file to upload.php on submission.",
        "examRelevance": "Number one viva question: What attribute is MANDATORY in the <form> tag for file uploads? enctype=\"multipart/form-data\"."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 7-10",
        "title": "upload.php: Verify Upload Integrity ($_FILES & UPLOAD_ERR_OK)",
        "codeSnippet": "<!-- Save as upload.php -->\n<?php\nif (isset($_FILES[\"uploaded_file\"]) &&\n    $_FILES[\"uploaded_file\"][\"error\"] === UPLOAD_ERR_OK) {",
        "whatItDoes": "Verifies that the file was received and that its error code is UPLOAD_ERR_OK (value 0).",
        "whyUsed": "Confirms upload succeeded without exceeding max file size or partial upload failures.",
        "howItWorks": "$_FILES is a 2D associative array containing [name], [type], [tmp_name], [error], and [size].",
        "connectionToSurrounding": "Guards the file-saving code on lines 11-16.",
        "examRelevance": "Always inspect $_FILES[\"file\"][\"error\"] before accessing temporary upload files."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 11-12",
        "title": "Establish Destination Directory (__DIR__ . \"/uploads/\")",
        "codeSnippet": "  $uploadDir = __DIR__ . \"/uploads/\";\n  if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);",
        "whatItDoes": "Constructs directory path relative to current script (__DIR__) and creates directory with 0755 permissions if missing.",
        "whyUsed": "Ensures target storage folder exists before attempting to write file.",
        "howItWorks": "__DIR__ returns absolute path of current folder; mkdir() creates directory recursively.",
        "connectionToSurrounding": "Provides storage folder for line 14.",
        "examRelevance": "__DIR__ is a PHP magic constant representing the current directory path."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 13-14",
        "title": "Sanitize Filename (basename) and Construct Destination Path",
        "codeSnippet": "  $fileName = basename($_FILES[\"uploaded_file\"][\"name\"]);\n  $destination = $uploadDir . $fileName;",
        "whatItDoes": "Extracts filename using basename() to strip directory traversal exploits (e.g. \"../../\") and joins with folder path.",
        "whyUsed": "Security protection against path traversal attacks.",
        "howItWorks": "basename() strips leading path components leaving only the plain filename.",
        "connectionToSurrounding": "Supplies target destination path to move_uploaded_file on line 15.",
        "examRelevance": "Security viva question: Why use basename()? To prevent attackers from overwriting system files via path traversal."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 15-19",
        "title": "move_uploaded_file() from Temporary Location to Permanent Destination",
        "codeSnippet": "  if (move_uploaded_file($_FILES[\"uploaded_file\"][\"tmp_name\"], $destination)) {\n    echo \"The file \" . htmlspecialchars($fileName) . \" has been uploaded.\";\n  } else {\n    echo \"There was an error uploading the file.\";\n  }",
        "whatItDoes": "Moves file from server temporary storage (tmp_name) to destination folder and prints confirmation.",
        "whyUsed": "Uploaded files are automatically deleted after script execution unless moved via move_uploaded_file().",
        "howItWorks": "Validates that tmp_name was an authentic uploaded file, then performs atomic move.",
        "connectionToSurrounding": "Completes file upload pipeline.",
        "examRelevance": "Crucial viva question: Why use move_uploaded_file() instead of rename() or copy()? move_uploaded_file() validates that the file was genuinely uploaded via HTTP POST, preventing local file inclusion exploits."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 20-23",
        "title": "Fallback Error Handler and Script Closure",
        "codeSnippet": "} else {\n  echo \"Please select a file to upload.\";\n}\n?>",
        "whatItDoes": "Displays guidance if form was submitted without choosing a file, and closes PHP script.",
        "whyUsed": "Handles validation failure gracefully.",
        "howItWorks": "Catches empty or invalid file submission.",
        "connectionToSurrounding": "Concludes upload.php.",
        "examRelevance": "Always provide user feedback on upload failure."
      }
    ],
    "executionFlow": [
      "1. User clicks \"Choose File\" on index.html, selects \"photo.jpg\", and clicks \"Upload\".",
      "2. Browser sends a multipart POST request containing the binary stream.",
      "3. PHP server saves the file into a temporary directory (e.g. C:\\xampp\\tmp\\php1A2B.tmp).",
      "4. Server populates $_FILES[\"uploaded_file\"] with name, tmp_name, size, error.",
      "5. upload.php checks $_FILES[\"uploaded_file\"][\"error\"] === UPLOAD_ERR_OK.",
      "6. Checks if /uploads/ directory exists; creates it with mkdir() if missing.",
      "7. Calls move_uploaded_file() to relocate the file to /uploads/photo.jpg.",
      "8. Outputs: \"The file photo.jpg has been uploaded.\""
    ],
    "outputExplanation": {
      "description": "Upon successful upload, upload.php outputs a confirmation message indicating that the named file was written to the server upload directory.",
      "elementsBreakdown": [
        {
          "element": "Confirmation Message",
          "sourceLine": "echo \"The file ... has been uploaded.\";",
          "explanation": "Renders \"The file photo.jpg has been uploaded.\""
        },
        {
          "element": "Error Condition",
          "sourceLine": "echo \"Please select a file to upload.\";",
          "explanation": "Displayed if no file was selected or upload failed"
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "The Mandatory enctype Attribute",
        "description": "You MUST write enctype=\"multipart/form-data\" on the form. This is the #1 question asked in viva examinations."
      },
      {
        "category": "functions",
        "title": "5 Keys in the $_FILES Array",
        "description": "1. [\"name\"]: original client filename\n2. [\"type\"]: MIME type (e.g. image/jpeg)\n3. [\"tmp_name\"]: temporary server location\n4. [\"error\"]: error code (0 = success)\n5. [\"size\"]: size in bytes."
      },
      {
        "category": "security",
        "title": "Production File Validation",
        "description": "In production, always validate file extension against an allowlist, check MIME type with finfo, and limit max file size."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What attribute must be included in an HTML form to allow file uploading in PHP?",
        "answer": "enctype=\"multipart/form-data\" must be added to the <form> tag, alongside method=\"post\"."
      },
      {
        "question": "What are the five elements present in the $_FILES superglobal array?",
        "answer": "1. [\"name\"] (original filename), 2. [\"type\"] (MIME type), 3. [\"tmp_name\"] (temporary storage path), 4. [\"error\"] (error code), and 5. [\"size\"] (file size in bytes)."
      },
      {
        "question": "Why must move_uploaded_file() be used instead of copy() or rename()?",
        "answer": "move_uploaded_file() includes built-in security checks to verify that the file being moved was actually uploaded via an HTTP POST request, preventing unauthorized local file manipulation."
      },
      {
        "question": "What does UPLOAD_ERR_OK signify in PHP?",
        "answer": "It is a PHP constant equal to 0, signifying that the file was uploaded successfully without any error."
      },
      {
        "question": "Where does PHP temporarily store uploaded files before they are moved?",
        "answer": "In the system temporary directory defined by the upload_tmp_dir directive in the php.ini configuration file."
      }
    ]
  },
  {
    "id": 108,
    "subjectId": "major-13",
    "programNumber": 8,
    "title": "Write a PHP script to demonstrate passing variables with cookies.",
    "pdfQuestion": "Program 8\nQuestion: Write a PHP script to demonstrate passing variables with cookies.\nNote: Create setcookie.php and get-cookie.php in the same folder. Cookie values become available on a subsequent browser request.",
    "shortDescription": "Demonstrates client-side persistence and state management using setcookie() in setcookie.php and retrieving the value via the $_COOKIE superglobal in get-cookie.php.",
    "technologies": [
      "PHP",
      "HTML"
    ],
    "previewType": "php-simulation",
    "simulationType": "cookies",
    "runLocallyGuide": {
      "fileName": "setcookie.php & get-cookie.php",
      "localhostUrl": "http://localhost/phplab/setcookie.php",
      "xamppSteps": [
        "Open XAMPP and start Apache.",
        "In C:\\xampp\\htdocs\\phplab\\, save the first file as \"setcookie.php\" and the second as \"get-cookie.php\".",
        "Open http://localhost/phplab/setcookie.php in your browser.",
        "The page sets the cookie and shows a link \"Click here\".",
        "Click the link to navigate to get-cookie.php. The browser sends the cookie back, displaying \"Welcome back, Sai!\"."
      ],
      "notes": "setcookie() defines an HTTP header. It MUST be called before ANY HTML output or echo statement, or PHP will throw a \"Headers already sent\" warning."
    },
    "codeFiles": [
      {
        "fileName": "setcookie.php",
        "language": "php",
        "label": "File 1: setcookie.php (Sets Cookie)",
        "description": "Calls setcookie() before any HTML output and renders link to get-cookie.php",
        "code": "<!-- Save as setcookie.php -->\n<?php\n// setcookie() must be called before output.\nsetcookie(\"username\", \"Sai\", time() + 3600, \"/\");\n?>\n<!DOCTYPE html><html><body>\n<a href=\"get-cookie.php\">Click here</a>\n</body></html>"
      },
      {
        "fileName": "get-cookie.php",
        "language": "php",
        "label": "File 2: get-cookie.php (Reads Cookie)",
        "description": "Reads $_COOKIE[\"username\"] and welcomes the user",
        "code": "<!-- Save as get-cookie.php -->\n<?php\nif (isset($_COOKIE[\"username\"])) {\n $user = $_COOKIE[\"username\"];\n echo \"Welcome back, \" . htmlspecialchars($user) . \"!\";\n} else {\n echo \"Cookie 'username' is not set.\";\n}\n?>"
      }
    ],
    "originalCode": "<!-- Save as setcookie.php -->\n<?php\n// setcookie() must be called before output.\nsetcookie(\"username\", \"Sai\", time() + 3600, \"/\");\n?>\n<!DOCTYPE html><html><body>\n<a href=\"get-cookie.php\">Click here</a>\n</body></html>\n<!-- Save as get-cookie.php -->\n<?php\nif (isset($_COOKIE[\"username\"])) {\n $user = $_COOKIE[\"username\"];\n echo \"Welcome back, \" . htmlspecialchars($user) . \"!\";\n} else {\n echo \"Cookie 'username' is not set.\";\n}\n?>",
    "sampleOutputText": "setcookie.php page:\nClick here\n\nAfter clicking the link (subsequent request):\nWelcome back, Sai!",
    "objective": {
      "whatItDoes": "Creates an HTTP cookie named \"username\" with value \"Sai\" expiring in 1 hour on setcookie.php, and reads it back via $_COOKIE on get-cookie.php.",
      "whyWritten": "To test understanding of stateless HTTP protocols, cookie creation using setcookie(), the header-before-output rule, cookie expiration calculation, and the $_COOKIE superglobal.",
      "conceptsDemonstrated": "setcookie(name, value, expire, path), time() function, $_COOKIE superglobal, HTTP Set-Cookie header, subsequent request lifecycle.",
      "expectedOutputSummary": "setcookie.php renders \"Click here\". Clicking the link opens get-cookie.php, which displays \"Welcome back, Sai!\".",
      "problemSolved": "HTTP is a stateless protocol; servers forget clients between requests. Cookies solve this by storing small key-value data on the client browser with an expiration timestamp.",
      "overallMechanism": "setcookie.php sends a Set-Cookie HTTP header to store \"username\"=\"Sai\" expiring in 1 hour. On future requests, browser attaches Cookie header, allowing get-cookie.php to read $_COOKIE[\"username\"].",
      "prerequisitesToUnderstand": "Stateless nature of HTTP, client-side cookie storage, and setcookie() header restrictions."
    },
    "conceptsUsed": [
      {
        "name": "What is a Cookie?",
        "description": "A small key-value text file stored on the client's browser that is automatically sent back to the server in the Cookie HTTP header on subsequent requests."
      },
      {
        "name": "setcookie() Rule",
        "description": "setcookie() transmits an HTTP Set-Cookie header. Because HTTP headers must precede response body content, it must be called before any echo or HTML."
      },
      {
        "name": "Cookie Expiration: time() + 3600",
        "description": "time() returns current UNIX timestamp in seconds. Adding 3600 sets the expiration to exactly 1 hour in the future."
      },
      {
        "name": "Path Scope (\"/\")",
        "description": "The \"/\" parameter ensures the cookie is available across all paths on the domain."
      },
      {
        "name": "$_COOKIE Superglobal",
        "description": "Associative array populated by PHP from the client's incoming Cookie request header."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-4",
        "title": "setcookie.php: Set Cookie Before Output",
        "codeSnippet": "<!-- Save as setcookie.php -->\n<?php\n// setcookie() must be called before output.\nsetcookie(\"username\", \"Sai\", time() + 3600, \"/\");\n?>",
        "whatItDoes": "Transmits a Set-Cookie header creating cookie \"username\" with value \"Sai\", expiring in 3600 seconds (1 hour), valid across whole domain (\"/\").",
        "whyUsed": "Persists user state across different pages on the user's machine.",
        "howItWorks": "Writes Set-Cookie HTTP response header. time() + 3600 computes Unix epoch expiration.",
        "connectionToSurrounding": "Must be placed at the very top of the file before any HTML output.",
        "examRelevance": "Top viva question: Why must setcookie() be called BEFORE any HTML output? Because cookies are sent in HTTP response headers; once HTML is sent, headers cannot be modified (\"Headers already sent\" error)."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 6-8",
        "title": "HTML Link to Read Cookie Page",
        "codeSnippet": "<!DOCTYPE html><html><body>\n<a href=\"get-cookie.php\">Click here</a>\n</body></html>",
        "whatItDoes": "Renders a clickable link navigating the user to get-cookie.php.",
        "whyUsed": "Provides transition to the second page that will inspect the newly created cookie.",
        "howItWorks": "Clicking anchor tag sends a new HTTP GET request to get-cookie.php with cookie attached.",
        "connectionToSurrounding": "Bridges setcookie.php to get-cookie.php.",
        "examRelevance": "Browser automatically sends stored cookies back to the server on every request."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 9-16",
        "title": "get-cookie.php: Retrieve Cookie from $_COOKIE Superglobal",
        "codeSnippet": "<!-- Save as get-cookie.php -->\n<?php\nif (isset($_COOKIE[\"username\"])) {\n  $user = $_COOKIE[\"username\"];\n  echo \"Welcome back, \" . htmlspecialchars($user) . \"!\";\n} else {\n  echo \"Cookie 'username' is not set.\";\n}",
        "whatItDoes": "Checks if cookie \"username\" exists in $_COOKIE array; if found, welcomes user by name.",
        "whyUsed": "Demonstrates reading persisted client data on a completely different page/request.",
        "howItWorks": "PHP parses incoming HTTP Cookie request header into associative array $_COOKIE.",
        "connectionToSurrounding": "Reads the value set in setcookie.php.",
        "examRelevance": "Cookies are stored on client browser (max ~4KB); sensitive data should not be stored in plain cookies."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 17",
        "title": "Close PHP Tag",
        "codeSnippet": "?>",
        "whatItDoes": "Terminates PHP execution in get-cookie.php.",
        "whyUsed": "Clean file closure.",
        "howItWorks": "Concludes response.",
        "connectionToSurrounding": "End of program.",
        "examRelevance": "Standard script termination."
      }
    ],
    "executionFlow": [
      "1. Client sends GET request for setcookie.php.",
      "2. PHP executes setcookie(\"username\", \"Sai\", time() + 3600, \"/\").",
      "3. Server includes \"Set-Cookie: username=Sai; Max-Age=3600; Path=/\" in response header.",
      "4. Browser stores cookie in its local cookie jar.",
      "5. Browser displays \"Click here\".",
      "6. User clicks link to get-cookie.php.",
      "7. Browser automatically adds \"Cookie: username=Sai\" to the new request headers.",
      "8. Server parses request, populates $_COOKIE[\"username\"] = \"Sai\".",
      "9. get-cookie.php executes and displays: \"Welcome back, Sai!\"."
    ],
    "outputExplanation": {
      "description": "On the first page (setcookie.php), a clickable link \"Click here\" is displayed. After following the link to get-cookie.php, the browser displays \"Welcome back, Sai!\".",
      "elementsBreakdown": [
        {
          "element": "Initial Link",
          "sourceLine": "<a href=\"get-cookie.php\">Click here</a>",
          "explanation": "Navigation link on setcookie.php"
        },
        {
          "element": "Cookie Greeting",
          "sourceLine": "echo \"Welcome back, \" . htmlspecialchars($user) . \"!\";",
          "explanation": "Personalized greeting on get-cookie.php"
        },
        {
          "element": "Fallback Message",
          "sourceLine": "echo \"Cookie 'username' is not set.\";",
          "explanation": "Shown if cookie is deleted or disabled"
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "Headers Already Sent Warning",
        "description": "If you place setcookie() after an <html> tag or echo statement, PHP will raise a warning: \"Cannot modify header information - headers already sent\"."
      },
      {
        "category": "functions",
        "title": "How to Delete a Cookie",
        "description": "To delete a cookie, call setcookie() with an expiration date in the past: setcookie(\"username\", \"\", time() - 3600, \"/\");"
      },
      {
        "category": "security",
        "title": "Cookie Security Attributes",
        "description": "In production, use secure (HTTPS only) and httponly (blocks JavaScript document.cookie access) flags: setcookie(..., httponly: true)."
      }
    ],
    "vivaQuestions": [
      {
        "question": "Why must setcookie() be called before any HTML output or echo?",
        "answer": "Cookies are sent in the HTTP response headers. In the HTTP protocol, headers must always be transmitted before the response body. If any output is sent first, headers are closed."
      },
      {
        "question": "How do you delete an existing cookie in PHP?",
        "answer": "By setting its expiration date to a timestamp in the past, e.g.: setcookie(\"username\", \"\", time() - 3600, \"/\");"
      },
      {
        "question": "What is the difference between a cookie and a session in PHP?",
        "answer": "A cookie is stored on the client's browser (limited to ~4KB, visible to user). A session is stored on the web server (unlimited size, secure), with only a small session ID cookie stored on the client."
      },
      {
        "question": "What does time() + 3600 represent in setcookie()?",
        "answer": "time() returns the current Unix epoch in seconds. Adding 3600 sets the cookie expiration to exactly 3600 seconds (1 hour) from the current moment."
      },
      {
        "question": "What is the purpose of the path parameter in setcookie()?",
        "answer": "It defines the URL path where the cookie is valid. Setting it to \"/\" makes the cookie available across the entire domain."
      }
    ]
  },
  {
    "id": 109,
    "subjectId": "major-13",
    "programNumber": 9,
    "title": "Write a PHP program to keep track of how many times a visitor has loaded the page.",
    "pdfQuestion": "Program 9\nQuestion: Write a PHP program to keep track of how many times a visitor has loaded the page.\nNote: Refresh the page within the same session. The counter is session-based.",
    "shortDescription": "Tracks visitor page refreshes within a session using session_start() and incrementing the $_SESSION[\"count\"] superglobal counter.",
    "technologies": [
      "PHP"
    ],
    "previewType": "php-simulation",
    "simulationType": "sessions",
    "runLocallyGuide": {
      "fileName": "session_counter.php",
      "localhostUrl": "http://localhost/phplab/session_counter.php",
      "xamppSteps": [
        "Open XAMPP and start Apache.",
        "Save the script as \"session_counter.php\" in C:\\xampp\\htdocs\\phplab\\.",
        "Open http://localhost/phplab/session_counter.php in your browser.",
        "On first load, you will see \"Session does not exist\".",
        "Press F5 or click Refresh. On second load, you will see \"Your session count: 1\", on third load \"2\", and so on."
      ],
      "notes": "Closing the browser window or clearing browser cookies terminates the session, resetting the counter."
    },
    "originalCode": "<?php\nsession_start();\nif (isset($_SESSION[\"count\"])) {\n echo \"Your session count: \";\n echo $_SESSION[\"count\"] . \"<br>\";\n $_SESSION[\"count\"]++;\n} else {\n $_SESSION[\"count\"] = 1;\n echo \"Session does not exist\";\n}\n?>",
    "sampleOutputText": "First page load:\nSession does not exist\n\nSecond page load:\nYour session count: 1\n\nThird page load:\nYour session count: 2\n\nFourth page load:\nYour session count: 3",
    "objective": {
      "whatItDoes": "Maintains an active server-side counter that increments each time the user refreshes the page within an ongoing browser session.",
      "whyWritten": "To test understanding of PHP session architecture, session initialization (session_start()), the $_SESSION superglobal, and session state persistence across multiple HTTP requests.",
      "conceptsDemonstrated": "session_start(), $_SESSION superglobal array, isset() condition, post-increment operator (++), session lifecycle.",
      "expectedOutputSummary": "First visit displays \"Session does not exist\". Subsequent refreshes display \"Your session count: 1\", \"Your session count: 2\", \"Your session count: 3\", and so on.",
      "problemSolved": "Cookies can be manipulated by users. Server-side Sessions store sensitive state directly on the server, identifying the client via an opaque session ID token.",
      "overallMechanism": "session_start() initializes session handling. If $_SESSION[\"count\"] exists, it increments the integer count; otherwise, it sets it to 1. State persists across page reloads until the browser closes or session expires.",
      "prerequisitesToUnderstand": "Sessions vs Cookies, session_start() initialization, and $_SESSION superglobal."
    },
    "conceptsUsed": [
      {
        "name": "PHP Sessions",
        "description": "A mechanism to persist stateful user data on the server across multiple page requests for a specific visitor."
      },
      {
        "name": "session_start()",
        "description": "Initializes a new session or resumes an existing one based on a session identifier passed via a cookie (PHPSESSID)."
      },
      {
        "name": "$_SESSION Superglobal",
        "description": "An associative array storing session variables accessible across all PHP scripts in the active session."
      },
      {
        "name": "Session Lifecycle",
        "description": "A session starts when session_start() is called and ends when the browser is closed, session_destroy() is called, or timeout occurs."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-2",
        "title": "session_start() — Initialize or Resume Server Session",
        "codeSnippet": "<?php\nsession_start();",
        "whatItDoes": "Initializes session environment or resumes existing session based on PHPSESSID cookie.",
        "whyUsed": "Mandatory first step before reading or writing any session data in $_SESSION.",
        "howItWorks": "Checks for PHPSESSID cookie. If found, deserializes session data file from /tmp; if not, generates new session ID.",
        "connectionToSurrounding": "Must be invoked before accessing $_SESSION on lines 3-8.",
        "examRelevance": "Viva question: Where must session_start() be called? At the absolute beginning of script before any output."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 3-6",
        "title": "Check and Increment Session Counter",
        "codeSnippet": "if (isset($_SESSION[\"count\"])) {\n  echo \"Your session count: \";\n  echo $_SESSION[\"count\"] . \"<br>\";\n  $_SESSION[\"count\"]++;",
        "whatItDoes": "If counter exists, displays current count and increments it by 1 for the next reload.",
        "whyUsed": "Tracks number of times the visitor has reloaded this page in the current browsing session.",
        "howItWorks": "$_SESSION[\"count\"] value increments in server memory and is saved to session file on disk.",
        "connectionToSurrounding": "Handles returning visitors.",
        "examRelevance": "State is preserved on the server, not on the client."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 7-10",
        "title": "Else Branch: Initialize Counter to 1",
        "codeSnippet": "} else {\n  $_SESSION[\"count\"] = 1;\n  echo \"Session does not exist\";\n}",
        "whatItDoes": "If visitor visits for the first time, creates $_SESSION[\"count\"] = 1 and prints notice.",
        "whyUsed": "Bootstraps session variable for new visitors.",
        "howItWorks": "Assigns integer 1 to key \"count\" in session array.",
        "connectionToSurrounding": "Initial run condition.",
        "examRelevance": "Next page refresh will trigger the if-branch instead."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 11",
        "title": "Close PHP Script Tag",
        "codeSnippet": "?>",
        "whatItDoes": "Terminates PHP script.",
        "whyUsed": "Concludes execution.",
        "howItWorks": "PHP automatically writes session data to storage and closes session lock.",
        "connectionToSurrounding": "Ends visitor counter program.",
        "examRelevance": "To destroy a session completely: session_unset(); session_destroy();."
      }
    ],
    "executionFlow": [
      "1. User visits session_counter.php for the first time.",
      "2. session_start() generates a unique PHPSESSID and sends it via HTTP Set-Cookie header.",
      "3. isset($_SESSION[\"count\"]) is false.",
      "4. else block sets $_SESSION[\"count\"] = 1 and echoes \"Session does not exist\".",
      "5. User refreshes the page (Visit 2). Browser sends PHPSESSID cookie.",
      "6. session_start() finds session data and reconstructs $_SESSION[\"count\"] = 1.",
      "7. isset($_SESSION[\"count\"]) is true.",
      "8. Script echoes \"Your session count: 1\", then increments $_SESSION[\"count\"] to 2.",
      "9. Subsequent refreshes output 2, 3, 4, etc."
    ],
    "outputExplanation": {
      "description": "The output changes sequentially with each browser page reload: First visit: \"Session does not exist\"; Second visit: \"Your session count: 1\"; Third visit: \"Your session count: 2\"; Fourth visit: \"Your session count: 3\".",
      "elementsBreakdown": [
        {
          "element": "First Load Output",
          "sourceLine": "echo \"Session does not exist\";",
          "explanation": "Printed on initial visit when session key is first seeded"
        },
        {
          "element": "Subsequent Load Output",
          "sourceLine": "echo \"Your session count: \" . $_SESSION[\"count\"];",
          "explanation": "Prints 1, 2, 3... on subsequent refreshes"
        }
      ]
    },
    "examNotes": [
      {
        "category": "functions",
        "title": "session_start() Placement",
        "description": "Must always be at the very top of your PHP file before any HTML tags or output."
      },
      {
        "category": "functions",
        "title": "Destroying Sessions",
        "description": "To end a session in PHP, call session_unset() to free all session variables, then session_destroy() to delete the session file on the server."
      },
      {
        "category": "common_mistakes",
        "title": "Closing the Browser",
        "description": "By default, session cookies expire when the browser is closed. Reopening the browser starts a brand new session with count reset."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the role of session_start() in PHP?",
        "answer": "session_start() creates a new session or resumes the current one based on a session identifier passed via a GET or POST request, or passed via a cookie."
      },
      {
        "question": "Where is session data stored compared to cookie data?",
        "answer": "Session data is stored securely on the web server (in files or database). Only a small unique session ID (PHPSESSID) is stored on the client browser."
      },
      {
        "question": "What is the difference between session_unset() and session_destroy()?",
        "answer": "session_unset() clears all variables stored in the $_SESSION superglobal array. session_destroy() deletes the actual session data file from the server disk."
      },
      {
        "question": "What is the name of the default cookie used by PHP to track sessions?",
        "answer": "PHPSESSID."
      },
      {
        "question": "Why does the first page load output \"Session does not exist\" instead of 1?",
        "answer": "Because on the first load, $_SESSION[\"count\"] has not been set yet. The else block executes, setting the count to 1 for the next visit while displaying \"Session does not exist\"."
      }
    ]
  },
  {
    "id": 110,
    "subjectId": "major-13",
    "programNumber": 10,
    "title": "Discuss the steps to create, view and delete the records from a MySQL database using PHP.",
    "pdfQuestion": "Program 10\nQuestion: Discuss the steps to create, view and delete the records from a MySQL database using PHP.\nNote: Run the SQL setup first, then students.php through localhost. This sample inserts Ravi and deletes record ID 1. For repeat testing, reset the table or adjust the ID.",
    "shortDescription": "Full database operations guide: Creating MySQL database & table, establishing connection with mysqli_connect(), inserting records with INSERT, viewing records with SELECT & mysqli_fetch_assoc(), and deleting with DELETE.",
    "technologies": [
      "PHP",
      "MySQL",
      "HTML"
    ],
    "previewType": "php-simulation",
    "simulationType": "mysql-crud",
    "runLocallyGuide": {
      "fileName": "students.php & MySQL Database",
      "localhostUrl": "http://localhost/phplab/students.php",
      "xamppSteps": [
        "Open XAMPP Control Panel and start BOTH Apache and MySQL.",
        "Open your browser and navigate to http://localhost/phpmyadmin/.",
        "Click on the \"SQL\" tab and run the SQL setup commands to create the \"college\" database and \"students\" table.",
        "Save the PHP code as \"students.php\" in C:\\xampp\\htdocs\\phplab\\.",
        "Navigate to http://localhost/phplab/students.php in your browser to execute the CRUD operations."
      ],
      "notes": "Make sure MySQL is running in XAMPP (green indicator). The default XAMPP username is \"root\" with an empty password (\"\")."
    },
    "codeFiles": [
      {
        "fileName": "setup.sql",
        "language": "sql",
        "label": "Step 0: SQL Setup Script",
        "description": "Creates college database and students table with AUTO_INCREMENT PRIMARY KEY",
        "code": "-- Run these SQL commands first in MySQL / phpMyAdmin:\nCREATE DATABASE college;\nUSE college;\nCREATE TABLE students (\n id INT AUTO_INCREMENT PRIMARY KEY,\n name VARCHAR(50),\n marks INT\n);"
      },
      {
        "fileName": "students.php",
        "language": "php",
        "label": "students.php (Complete CRUD Script)",
        "description": "Connects to MySQL, inserts record, views records with while loop, deletes record, and closes connection",
        "code": "<?php\n// Step 1: Connect to the database\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"college\");\nif (!$conn) die(\"Connection failed: \" . mysqli_connect_error());\necho \"Database connected successfully<br><br>\";\n\n// Step 2: Create/insert a record\n$sql = \"INSERT INTO students (name, marks) VALUES ('Ravi', 85)\";\nif (mysqli_query($conn, $sql)) {\n echo \"Record created successfully<br><br>\";\n} else {\n echo \"Error creating record: \" . mysqli_error($conn) . \"<br>\";\n}\n\n// Step 3: View records\necho \"<h3>Student Records</h3>\";\n$result = mysqli_query($conn, \"SELECT * FROM students\");\nwhile ($row = mysqli_fetch_assoc($result)) {\n echo \"ID: \" . $row['id'] . \"<br>\";\n echo \"Name: \" . htmlspecialchars($row['name']) . \"<br>\";\n echo \"Marks: \" . $row['marks'] . \"<br><br>\";\n}\n\n// Step 4: Delete record with ID 1\n$id = 1;\n$sql = \"DELETE FROM students WHERE id = $id\";\nif (mysqli_query($conn, $sql)) {\n echo \"Record deleted successfully<br>\";\n} else {\n echo \"Error deleting record: \" . mysqli_error($conn);\n}\n\n// Step 5: Close the connection\nmysqli_close($conn);\n?>"
      }
    ],
    "originalCode": "-- Run these SQL commands first in MySQL:\nCREATE DATABASE college;\nUSE college;\nCREATE TABLE students (\n id INT AUTO_INCREMENT PRIMARY KEY,\n name VARCHAR(50),\n marks INT\n);\n\n-- Save the following PHP code as students.php\n<?php\n// Step 1: Connect to the database\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"college\");\nif (!$conn) die(\"Connection failed: \" . mysqli_connect_error());\necho \"Database connected successfully<br><br>\";\n// Step 2: Create/insert a record\n$sql = \"INSERT INTO students (name, marks) VALUES ('Ravi', 85)\";\nif (mysqli_query($conn, $sql)) {\n echo \"Record created successfully<br><br>\";\n} else {\n echo \"Error creating record: \" . mysqli_error($conn) . \"<br>\";\n}\n// Step 3: View records\necho \"<h3>Student Records</h3>\";\n$result = mysqli_query($conn, \"SELECT * FROM students\");\nwhile ($row = mysqli_fetch_assoc($result)) {\n echo \"ID: \" . $row['id'] . \"<br>\";\n echo \"Name: \" . htmlspecialchars($row['name']) . \"<br>\";\n echo \"Marks: \" . $row['marks'] . \"<br><br>\";\n}\n// Step 4: Delete record with ID 1\n$id = 1;\n$sql = \"DELETE FROM students WHERE id = $id\";\nif (mysqli_query($conn, $sql)) {\n echo \"Record deleted successfully<br>\";\n} else {\n echo \"Error deleting record: \" . mysqli_error($conn);\n}\n// Step 5: Close the connection\nmysqli_close($conn);\n?>",
    "sampleOutputText": "Database connected successfully\n\nRecord created successfully\n\nStudent Records\nID: 1\nName: Ravi\nMarks: 85\n\nRecord deleted successfully",
    "objective": {
      "whatItDoes": "Executes the complete database lifecycle from PHP: connecting to MySQL, inserting a student record, querying and fetching rows using an associative while loop, deleting the record by primary key, and closing the connection.",
      "whyWritten": "To test end-to-end database connectivity and CRUD (Create, Read, Update, Delete) operations using the MySQLi procedural extension.",
      "conceptsDemonstrated": "SQL DDL (CREATE DATABASE, CREATE TABLE), mysqli_connect(), mysqli_connect_error(), mysqli_query(), INSERT query, SELECT query, mysqli_fetch_assoc(), DELETE query, mysqli_close().",
      "expectedOutputSummary": "Confirms database connection, reports record creation, prints all student rows, and confirms record deletion.",
      "problemSolved": "Web apps require persistent relational databases. This program demonstrates complete database lifecycle: connecting to MySQL with mysqli_connect(), inserting records (INSERT), reading records (SELECT/fetch_assoc), and deleting records (DELETE).",
      "overallMechanism": "Establishes a MySQL TCP socket connection via mysqli_connect, sends SQL query strings through mysqli_query(), iterates result sets using while($row = mysqli_fetch_assoc()), and closes connection with mysqli_close().",
      "prerequisitesToUnderstand": "Relational database concepts (databases, tables, rows, columns, primary keys), SQL syntax, and the PHP mysqli procedural extension."
    },
    "conceptsUsed": [
      {
        "name": "mysqli_connect(host, user, pass, db)",
        "description": "Opens a new network connection to the MySQL database server."
      },
      {
        "name": "mysqli_query(conn, sql)",
        "description": "Sends an SQL statement to the active database on the server for execution."
      },
      {
        "name": "mysqli_fetch_assoc(result)",
        "description": "Fetches a result row as an associative array where column names become array keys ($row['name']). Returns null when no more rows exist."
      },
      {
        "name": "AUTO_INCREMENT PRIMARY KEY",
        "description": "SQL column constraint that guarantees unique identification and increments automatically with each new row."
      },
      {
        "name": "mysqli_close(conn)",
        "description": "Closes an open database connection to free server memory and connection pool slots."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-8",
        "title": "SQL DDL: Create Database and Table Schema",
        "codeSnippet": "-- Run these SQL commands first in MySQL:\nCREATE DATABASE college;\nUSE college;\nCREATE TABLE students (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(50),\n  marks INT\n);",
        "whatItDoes": "Creates database \"college\" and table \"students\" with auto-incrementing primary key ID, student name, and marks.",
        "whyUsed": "Establishes relational database schema required before PHP script execution.",
        "howItWorks": "MySQL allocates table space with B-Tree index on primary key \"id\".",
        "connectionToSurrounding": "Prerequisite schema executed in MySQL console or phpMyAdmin.",
        "examRelevance": "Examiners check SQL knowledge: AUTO_INCREMENT automatically generates sequential IDs (1, 2, 3...)."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 11-15",
        "title": "Step 1: Connect to Database (mysqli_connect)",
        "codeSnippet": "<?php\n// Step 1: Connect to the database\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"college\");\nif (!$conn) die(\"Connection failed: \" . mysqli_connect_error());\necho \"Database connected successfully<br><br>\";",
        "whatItDoes": "Opens a connection to MySQL on localhost as user root with empty password and selects database \"college\".",
        "whyUsed": "Initializes database connection link identifier $conn.",
        "howItWorks": "mysqli_connect establishes TCP socket; if failed, die() terminates execution displaying error message.",
        "connectionToSurrounding": "$conn handle is passed into all subsequent mysqli functions.",
        "examRelevance": "Parameters order: hostname (\"localhost\"), username (\"root\"), password (\"\"), database (\"college\")."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 16-22",
        "title": "Step 2: Create Record (INSERT INTO)",
        "codeSnippet": "// Step 2: Create/insert a record\n$sql = \"INSERT INTO students (name, marks) VALUES ('Ravi', 85)\";\nif (mysqli_query($conn, $sql)) {\n  echo \"Record created successfully<br><br>\";\n} else {\n  echo \"Error creating record: \" . mysqli_error($conn) . \"<br>\";\n}",
        "whatItDoes": "Inserts a new student row ('Ravi', 85) into the students table.",
        "whyUsed": "Demonstrates SQL Data Manipulation Language (DML) insert operation.",
        "howItWorks": "mysqli_query sends SQL string to MySQL engine; returns true on success or false on failure.",
        "connectionToSurrounding": "Populates table with data to be viewed in Step 3.",
        "examRelevance": "mysqli_error($conn) returns diagnostic string explaining why query failed."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 23-30",
        "title": "Step 3: View Records (SELECT & mysqli_fetch_assoc)",
        "codeSnippet": "// Step 3: View records\necho \"<h3>Student Records</h3>\";\n$result = mysqli_query($conn, \"SELECT * FROM students\");\nwhile ($row = mysqli_fetch_assoc($result)) {\n  echo \"ID: \" . $row['id'] . \"<br>\";\n  echo \"Name: \" . htmlspecialchars($row['name']) . \"<br>\";\n  echo \"Marks: \" . $row['marks'] . \"<br><br>\";\n}",
        "whatItDoes": "Queries all student rows and iterates through the result set, echoing ID, Name, and Marks for each student.",
        "whyUsed": "Demonstrates reading and displaying database records.",
        "howItWorks": "mysqli_fetch_assoc() fetches next row as an associative array; returns null when rows are exhausted, terminating the while loop.",
        "connectionToSurrounding": "Displays records before deletion.",
        "examRelevance": "Crucial viva question: How does while($row = mysqli_fetch_assoc($result)) work? Each call returns the next row array until no rows remain, when it returns null/false."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 31-38",
        "title": "Step 4: Delete Record (DELETE FROM)",
        "codeSnippet": "// Step 4: Delete record with ID 1\n$id = 1;\n$sql = \"DELETE FROM students WHERE id = $id\";\nif (mysqli_query($conn, $sql)) {\n  echo \"Record deleted successfully<br>\";\n} else {\n  echo \"Error deleting record: \" . mysqli_error($conn);\n}",
        "whatItDoes": "Executes DELETE query targeting the student record where primary key id = 1.",
        "whyUsed": "Demonstrates record deletion in database lifecycle.",
        "howItWorks": "MySQL locates row with id=1 and removes it from table storage.",
        "connectionToSurrounding": "Completes CRUD operations (Create, Read, Delete).",
        "examRelevance": "Always use a WHERE clause in DELETE queries; omitting WHERE deletes ALL rows in the table!"
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 39-41",
        "title": "Step 5: Close Database Connection (mysqli_close)",
        "codeSnippet": "// Step 5: Close the connection\nmysqli_close($conn);\n?>",
        "whatItDoes": "Terminates database socket connection and frees resources on the MySQL server.",
        "whyUsed": "Prevents database connection leaks and conserves server connection pool.",
        "howItWorks": "Sends disconnect packet to MySQL and closes TCP socket.",
        "connectionToSurrounding": "Final cleanup step in database script.",
        "examRelevance": "Good programming discipline requires explicitly closing database connections."
      }
    ],
    "executionFlow": [
      "1. Student executes SQL schema to create \"college\" database and \"students\" table.",
      "2. Browser requests http://localhost/students.php.",
      "3. mysqli_connect() opens TCP socket to MySQL on port 3306.",
      "4. Outputs \"Database connected successfully\".",
      "5. mysqli_query() executes INSERT INTO students ... inserting Ravi (ID: 1, marks: 85).",
      "6. Outputs \"Record created successfully\".",
      "7. Executes SELECT * FROM students. mysqli_fetch_assoc() reads row 1 and displays ID: 1, Name: Ravi, Marks: 85.",
      "8. Executes DELETE FROM students WHERE id = 1.",
      "9. Outputs \"Record deleted successfully\".",
      "10. mysqli_close($conn) closes the MySQL connection."
    ],
    "outputExplanation": {
      "description": "The output displays step-by-step confirmation of all 5 database operations: connection confirmation, insertion confirmation, record listing from SELECT, and deletion confirmation.",
      "elementsBreakdown": [
        {
          "element": "Connection Success",
          "sourceLine": "echo \"Database connected successfully\";",
          "explanation": "Confirms valid database credentials"
        },
        {
          "element": "Insert Confirmation",
          "sourceLine": "echo \"Record created successfully\";",
          "explanation": "Confirms INSERT statement execution"
        },
        {
          "element": "Fetched Record Display",
          "sourceLine": "echo \"ID: \" . $row['id'] ...",
          "explanation": "Renders ID: 1, Name: Ravi, Marks: 85"
        },
        {
          "element": "Deletion Confirmation",
          "sourceLine": "echo \"Record deleted successfully\";",
          "explanation": "Confirms DELETE statement execution"
        }
      ]
    },
    "examNotes": [
      {
        "category": "important_tags",
        "title": "The 5 Standard MySQLi Steps",
        "description": "1. Connect (mysqli_connect)\n2. Query/Insert (mysqli_query)\n3. Fetch/View (mysqli_fetch_assoc)\n4. Delete/Update (mysqli_query)\n5. Close (mysqli_close)."
      },
      {
        "category": "common_mistakes",
        "title": "Missing WHERE in DELETE",
        "description": "DELETE FROM students; deletes every record in the table! Always use WHERE id = $id to target specific records."
      },
      {
        "category": "functions",
        "title": "MySQLi vs PDO",
        "description": "MySQLi is procedural or object-oriented for MySQL only. PDO (PHP Data Objects) works with 12 different database systems and supports prepared statements natively."
      },
      {
        "category": "server_setup",
        "title": "Starting MySQL in XAMPP",
        "description": "Ensure MySQL has a green status in XAMPP Control Panel. If MySQL is stopped, mysqli_connect() will fail."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What are the parameters required by the mysqli_connect() function?",
        "answer": "mysqli_connect(server_host, username, password, database_name, port_optional). For standard XAMPP: (\"localhost\", \"root\", \"\", \"college\")."
      },
      {
        "question": "What is the difference between mysqli_fetch_assoc() and mysqli_fetch_array()?",
        "answer": "mysqli_fetch_assoc() returns an associative array with column names as keys. mysqli_fetch_array() by default returns an array with BOTH associative column names and numerical indices."
      },
      {
        "question": "Why is the WHERE clause essential in an SQL DELETE statement?",
        "answer": "Without a WHERE clause, the DELETE query will delete all records in the table, wiping out the entire dataset."
      },
      {
        "question": "What function is used to check for connection errors in MySQLi?",
        "answer": "mysqli_connect_error() returns a string description of the last connection error."
      },
      {
        "question": "What is SQL Injection and how can it be prevented in PHP?",
        "answer": "SQL Injection occurs when malicious SQL statements are inserted into entry fields. It can be prevented by using Prepared Statements with Parameterized Queries (mysqli_prepare) or mysqli_real_escape_string()."
      }
    ]
  }
];
