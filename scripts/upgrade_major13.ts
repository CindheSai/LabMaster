import fs from 'fs';
import { PHP_LAB_PROGRAMS } from '../src/data/phpPrograms';
import { ProgramData, StepExplanation } from '../src/types';

// ============================================================================
// MAJOR 13: Granular Line-by-Line Steps & Enriched Objectives for Programs 1-10
// ============================================================================

const major13Enrichments: Record<number, {
  objectiveEnrichment: {
    problemSolved: string;
    overallMechanism: string;
    prerequisitesToUnderstand: string;
  };
  granularSteps: StepExplanation[];
}> = {
  // --------------------------------------------------------------------------
  // PROGRAM 1: Fibonacci Series
  // --------------------------------------------------------------------------
  1: {
    objectiveEnrichment: {
      problemSolved: 'Generates a mathematical recurrence relation sequence where each number is the sum of the two preceding numbers, demonstrating basic PHP arithmetic, iterative loops, and variable state updates.',
      overallMechanism: 'Seeds two variables with 0 and 1, then runs a for-loop that computes the next term as ($n1 + $n2), echoes it with a delimiter, and shifts variable states ($n1 = $n2, $n2 = $n3) on each iteration.',
      prerequisitesToUnderstand: 'PHP tags (<?php ... ?>), integer variable declaration with $, echo statement, and for-loop syntax.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Open PHP Parsing Block',
        codeSnippet: `<?php`,
        whatItDoes: 'Informs the web server\'s Zend Engine to begin interpreting subsequent lines as PHP server-side code.',
        whyUsed: 'Required tag to transition from raw output mode to executable scripting mode.',
        howItWorks: 'Switches the PHP lexer from inline HTML streaming into bytecode compilation mode.',
        connectionToSurrounding: 'Must precede any PHP declarations or statements.',
        examRelevance: 'Short tags (<?) can be disabled in php.ini; standard <?php is universally portable.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Initialize First Fibonacci Seed ($num1 = 0)',
        codeSnippet: `$num1 = 0;`,
        whatItDoes: 'Declares variable $num1 and assigns integer 0 as the first seed term.',
        whyUsed: 'The Fibonacci sequence mathematically begins with 0.',
        howItWorks: 'Allocates memory in the PHP variable symbol table for an integer zval with value 0.',
        connectionToSurrounding: 'Acts as term (n - 2) in the addition recurrence relation.',
        examRelevance: 'All PHP variables must begin with a dollar sign ($).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 3',
        title: 'Initialize Second Fibonacci Seed ($num2 = 1)',
        codeSnippet: `$num2 = 1;`,
        whatItDoes: 'Declares variable $num2 and assigns integer 1 as the second seed term.',
        whyUsed: 'The second fundamental boundary condition needed to calculate future terms.',
        howItWorks: 'Creates integer zval in memory with value 1.',
        connectionToSurrounding: 'Acts as term (n - 1) in the addition formula.',
        examRelevance: 'Variables in PHP are dynamically typed; no int keyword is needed.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 4',
        title: 'Output Series Title and Initial Seed Values',
        codeSnippet: `echo "<h3>Fibonacci series for first 12 numbers: </h3>";
echo "\n";
echo $num1.' '.$num2.' ';`,
        whatItDoes: 'Sends an HTML heading and the first two numbers ("0 1 ") to the HTTP output stream.',
        whyUsed: 'Prints the seeds before loop calculation begins.',
        howItWorks: 'Uses string concatenation operator (.) to join numbers with spaces.',
        connectionToSurrounding: 'Supplies the visual start of the printed series.',
        examRelevance: 'The dot (.) is PHP\'s string concatenation operator, unlike JavaScript which uses (+).'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 7',
        title: 'For Loop Header ($i = 2; $i < 10; $i++)',
        codeSnippet: `for ($i = 2; $i < 10; $i++) {`,
        whatItDoes: 'Initializes counter $i to 2 and iterates as long as $i < 10 (executes 8 times).',
        whyUsed: 'Controls exact iteration count to generate the remaining terms up to 10 total numbers.',
        howItWorks: 'Evaluates condition before each iteration; increments $i by 1 at the end of each pass.',
        connectionToSurrounding: 'Drives the calculation of terms 3 through 10.',
        examRelevance: 'Starts at $i = 2 because terms 0 and 1 have already been printed.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Line 8',
        title: 'Compute Next Term ($num3 = $num1 + $num2)',
        codeSnippet: `$num3 = $num1 + $num2;`,
        whatItDoes: 'Adds the previous two terms together and stores the sum in $num3.',
        whyUsed: 'Applies the definition of the Fibonacci recurrence relation: F(n) = F(n-1) + F(n-2).',
        howItWorks: 'Evaluates right-hand addition expression and stores result into variable $num3.',
        connectionToSurrounding: 'Calculates the value to be printed on Line 9 and shifted on Line 11.',
        examRelevance: 'Core algorithmic step; examiners look for correct addition of previous two terms.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 9',
        title: 'Echo Current Term ($num3)',
        codeSnippet: `echo $num3.' ';`,
        whatItDoes: 'Outputs the newly computed number followed by a separating space.',
        whyUsed: 'Appends each successive term to the rendered output in real time.',
        howItWorks: 'Writes string representation of $num3 followed by space to HTTP response buffer.',
        connectionToSurrounding: 'Displays current term immediately after calculation.',
        examRelevance: 'Without spaces, the output would run together as one unreadable large number.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Line 10',
        title: 'Shift Term Window ($num1 = $num2)',
        codeSnippet: `$num1 = $num2;`,
        whatItDoes: 'Copies the value of $num2 into $num1, sliding the left boundary of the window forward.',
        whyUsed: 'Discards the oldest term and promotes the second term to become the new first term.',
        howItWorks: 'Overwrites $num1 with the current value of $num2.',
        connectionToSurrounding: 'Must be done before $num2 is overwritten on Line 11.',
        examRelevance: 'Critical mistake: Reversing the order of lines 10 and 11 causes an infinite duplication bug.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Line 11',
        title: 'Shift Term Window ($num2 = $num3)',
        codeSnippet: `$num2 = $num3;`,
        whatItDoes: 'Copies newly calculated $num3 into $num2, sliding the right boundary of the window forward.',
        whyUsed: 'Prepares both variables for the next loop iteration\'s addition.',
        howItWorks: 'Updates $num2 to hold the latest term.',
        connectionToSurrounding: 'Completes state transition before loop counter increments.',
        examRelevance: 'Together with line 10, implements the 2-variable sliding window algorithm.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 12-13',
        title: 'Close Loop and Terminate PHP Tag',
        codeSnippet: `}
?>`,
        whatItDoes: 'Closes the for-loop block and closes the PHP script execution tag.',
        whyUsed: 'Concludes execution and marks end of server-side script.',
        howItWorks: 'Zend engine flushes output buffer to client and frees request memory.',
        connectionToSurrounding: 'Ends the program.',
        examRelevance: 'In pure PHP files with no following HTML, omitting ?> is standard practice to prevent accidental whitespace.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 2: Swapping Numbers (Pass by Value vs Pass by Reference)
  // --------------------------------------------------------------------------
  2: {
    objectiveEnrichment: {
      problemSolved: 'Students must understand how arguments are passed into functions: pass-by-value copies the data into a local scope, while pass-by-reference (&) passes memory aliases allowing modifications to persist in the caller scope.',
      overallMechanism: 'Defines swapValue($a, $b) without ampersand (operates on local copies; caller unchanged) and swapReference(&$a, &$b) with ampersand & prefix (operates on original memory cells; caller values swapped).',
      prerequisitesToUnderstand: 'PHP function definitions, local vs global scope, parameters vs arguments, and the ampersand (&) reference symbol.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-3',
        title: 'Open PHP Tag and Define Pass-by-Value Function',
        codeSnippet: `<?php
// Pass by value
function swapValue($a, $b) {`,
        whatItDoes: 'Opens PHP script and defines function swapValue accepting two parameters $a and $b by value.',
        whyUsed: 'Demonstrates standard default function parameter passing behavior in PHP.',
        howItWorks: 'When called, PHP copies the argument values into new isolated local variables $a and $b.',
        connectionToSurrounding: 'Encloses the temporary swap mechanism on Line 4.',
        examRelevance: 'Default in PHP is pass-by-value for all primitives (integers, strings, floats, arrays).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-5',
        title: 'Local Swap Using Temporary Variable',
        codeSnippet: `  $temp = $a; $a = $b; $b = $temp;
}`,
        whatItDoes: 'Swaps values of local variables $a and $b using temporary container $temp, then exits function.',
        whyUsed: 'Standard 3-step swap algorithm.',
        howItWorks: '$temp holds $a; $a gets $b; $b gets $temp. However, all three are discarded when function returns.',
        connectionToSurrounding: 'Because parameters were passed by value, this swap only affects local variables.',
        examRelevance: 'Viva point: Does swapValue alter the caller variables? No, because it swapped copies only.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 6-10',
        title: 'Test Pass-by-Value Behavior',
        codeSnippet: `$x = 10; $y = 20;
echo "Before pass by value: x=$x, y=$y<br>";
swapValue($x, $y);
echo "After pass by value: x=$x, y=$y<br><br>";`,
        whatItDoes: 'Initializes $x=10, $y=20, prints values, invokes swapValue($x, $y), and prints values again (still x=10, y=20).',
        whyUsed: 'Empirically proves that pass-by-value does NOT modify the caller\'s original variables.',
        howItWorks: '$x and $y values are copied onto stack; original variables remain untouched.',
        connectionToSurrounding: 'Contrasts with pass-by-reference section below.',
        examRelevance: 'Output verification: Before: x=10, y=20 -> After: x=10, y=20 (unchanged).'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 11-14',
        title: 'Define Pass-by-Reference Function with Ampersand (&)',
        codeSnippet: `// Pass by reference
function swapReference(&$a, &$b) {
  $temp = $a; $a = $b; $b = $temp;
}`,
        whatItDoes: 'Defines swapReference with ampersand prefixes (&$a, &$b) allowing direct mutation of caller memory.',
        whyUsed: 'Demonstrates pass-by-reference mechanism.',
        howItWorks: 'The & symbol passes the memory address/reference rather than creating duplicate copies.',
        connectionToSurrounding: 'Operating on $a and $b directly modifies the variables passed into the call.',
        examRelevance: 'Critical viva question: What does the "&" before parameter mean? It indicates pass-by-reference.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 15-18',
        title: 'Test Pass-by-Reference Behavior',
        codeSnippet: `$x = 10; $y = 20;
echo "Before pass by reference: x=$x, y=$y<br>";
swapReference($x, $y);
echo "After pass by reference: x=$x, y=$y";`,
        whatItDoes: 'Re-initializes $x=10, $y=20, calls swapReference($x, $y), and prints result (now x=20, y=10).',
        whyUsed: 'Proves that pass-by-reference successfully mutates the caller\'s variables.',
        howItWorks: 'The memory cells of $x and $y are swapped in place by the function.',
        connectionToSurrounding: 'Demonstrates the desired swap outcome.',
        examRelevance: 'Output verification: Before: x=10, y=20 -> After: x=20, y=10 (swapped).'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Line 19',
        title: 'Close PHP Script Tag',
        codeSnippet: `?>`,
        whatItDoes: 'Terminates PHP execution.',
        whyUsed: 'Marks end of script.',
        howItWorks: 'Finalizes server-side response.',
        connectionToSurrounding: 'Concludes program.',
        examRelevance: 'Standard script closure.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 3: Array Functions
  // --------------------------------------------------------------------------
  3: {
    objectiveEnrichment: {
      problemSolved: 'PHP programs heavily manipulate collections. This program demonstrates core built-in array manipulation functions: adding and removing elements from both ends (push, pop, shift, unshift), merging, reversing, and counting elements.',
      overallMechanism: 'Initializes an indexed array, performs stack and queue mutations using array_push/pop and array_shift/unshift, merges with a second array, and inspects structures using print_r() and count().',
      prerequisitesToUnderstand: 'Indexed arrays, print_r() debugging output, stack (LIFO) and queue (FIFO) data structures.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-3',
        title: 'Initialize Array and Print Original Elements',
        codeSnippet: `<?php
$fruits = array("Apple", "Banana", "Cherry");
echo "Original array: "; print_r($fruits);`,
        whatItDoes: 'Creates an indexed array with 3 string items and outputs its internal structure using print_r().',
        whyUsed: 'Establishes baseline array before modifications.',
        howItWorks: 'array() constructor creates indexed zend array with keys 0, 1, 2; print_r() displays key-value pairs.',
        connectionToSurrounding: 'Serves as data input for subsequent array functions.',
        examRelevance: 'print_r() prints human-readable array structure; echo cannot print arrays directly.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-5',
        title: 'array_push() — Append Elements to End',
        codeSnippet: `array_push($fruits, "Date", "Elderberry");
echo "<br>After array_push: "; print_r($fruits);`,
        whatItDoes: 'Pushes "Date" and "Elderberry" onto the end of $fruits array, expanding size to 5 elements.',
        whyUsed: 'Adds elements to the tail (stack push operation).',
        howItWorks: 'Appends elements to highest numeric indices and returns new total element count.',
        connectionToSurrounding: 'Expands the array before popping.',
        examRelevance: 'array_push($arr, $val) is equivalent to $arr[] = $val, but can add multiple values at once.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 6-7',
        title: 'array_pop() — Remove Element from End',
        codeSnippet: `$removed = array_pop($fruits);
echo "<br>After array_pop (removed $removed): "; print_r($fruits);`,
        whatItDoes: 'Removes the last element ("Elderberry") from the array and returns it into variable $removed.',
        whyUsed: 'Implements stack LIFO (Last In First Out) removal.',
        howItWorks: 'Shortens array by 1 and returns the removed element value.',
        connectionToSurrounding: 'Reduces array size back from 5 to 4 elements.',
        examRelevance: 'If array is empty, array_pop() returns null.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 8-9',
        title: 'array_shift() — Remove Element from Beginning',
        codeSnippet: `$removed = array_shift($fruits);
echo "<br>After array_shift (removed $removed): "; print_r($fruits);`,
        whatItDoes: 'Removes the first element ("Apple") from the front of the array and re-indexes remaining elements from 0.',
        whyUsed: 'Implements queue FIFO (First In First Out) dequeue operation.',
        howItWorks: 'Extracts index 0, shifts all remaining keys down by 1 so new head is at index 0.',
        connectionToSurrounding: 'Alters the front of the array.',
        examRelevance: 'Key viva point: array_shift() automatically re-indexes all numeric keys to start from 0.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 10-11',
        title: 'array_unshift() — Prepend Element to Beginning',
        codeSnippet: `array_unshift($fruits, "Apricot");
echo "<br>After array_unshift: "; print_r($fruits);`,
        whatItDoes: 'Prepends "Apricot" to the beginning of the array as the new index 0.',
        whyUsed: 'Adds element to the head of a list.',
        howItWorks: 'Shifts all existing elements up to higher indices and inserts new item at index 0.',
        connectionToSurrounding: 'Replaces the head removed by array_shift.',
        examRelevance: 'Returns new count of elements in array.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 12-13',
        title: 'array_merge() — Combine Two Arrays',
        codeSnippet: `$combined = array_merge($fruits, array("Carrot", "Beetroot"));
echo "<br>After array_merge: "; print_r($combined);`,
        whatItDoes: 'Merges $fruits with a new array ("Carrot", "Beetroot") to create a combined 6-item array stored in $combined.',
        whyUsed: 'Combines multiple datasets into a single unified collection.',
        howItWorks: 'Appends elements of second array to end of first, renumbering integer keys sequentially.',
        connectionToSurrounding: 'Produces the enlarged array used for reversal and counting.',
        examRelevance: 'For numeric keys, array_merge re-indexes sequentially without overwriting duplicate numbers.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 14-16',
        title: 'array_reverse() and count()',
        codeSnippet: `echo "<br>After array_reverse: "; print_r(array_reverse($combined));
echo "<br>Total elements: " . count($combined);
?>`,
        whatItDoes: 'Outputs the array in reverse order, then prints total number of elements (6) using count().',
        whyUsed: 'Demonstrates order inversion and length calculation.',
        howItWorks: 'array_reverse() returns a new reversed array; count() returns integer length.',
        connectionToSurrounding: 'Concludes array demonstrations and terminates script.',
        examRelevance: 'count($arr) and sizeof($arr) are aliases in PHP.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 4: Count Vowels and Consonants in a String
  // --------------------------------------------------------------------------
  4: {
    objectiveEnrichment: {
      problemSolved: 'Text analysis requires inspecting characters individually. This program parses a sentence to count vowels (a, e, i, o, u), whitespace characters, and consonants.',
      overallMechanism: 'Converts input string to lowercase via strtolower(), iterates character-by-character using string index syntax ($str[$i]), and classifies characters using strpos("aeiou", $ch) and ctype_alpha($ch).',
      prerequisitesToUnderstand: 'String indexing ($str[$i]), strlen(), strpos() strict inequality (!== false), and ctype character classification functions.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-3',
        title: 'Initialize String and Counter Variables',
        codeSnippet: `<?php
$str = "The future belongs to those who prepare for its today!";
$vowels = 0; $consonants = 0; $spaces = 0;`,
        whatItDoes: 'Sets sample sentence and initializes three integer counters ($vowels, $consonants, $spaces) to 0.',
        whyUsed: 'Prepares accumulators before scanning text.',
        howItWorks: 'Allocates integer zvals initialized to zero.',
        connectionToSurrounding: 'Counters are incremented within the loop on lines 8, 10, and 12.',
        examRelevance: 'Always initialize counters to 0 to prevent PHP notices or uninitialized state bugs.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 4',
        title: 'Normalize String to Lowercase (strtolower)',
        codeSnippet: `$str = strtolower($str);`,
        whatItDoes: 'Converts all uppercase letters in $str to lowercase letters in place.',
        whyUsed: 'Simplifies comparison: checking "aeiou" handles both uppercase and lowercase automatically.',
        howItWorks: 'ASCII uppercase codes (65-90) are converted to lowercase codes (97-122).',
        connectionToSurrounding: 'Ensures uniform character checking in the conditional ladder below.',
        examRelevance: 'Viva tip: Case normalization reduces conditional complexity by 50%.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 5-6',
        title: 'For Loop Header and Character Extraction',
        codeSnippet: `for ($i = 0; $i < strlen($str); $i++) {
  $ch = $str[$i];`,
        whatItDoes: 'Iterates index $i from 0 up to string length minus 1, extracting each single character into $ch.',
        whyUsed: 'Visits every character in the string sequentially.',
        howItWorks: 'strlen() returns total byte length; $str[$i] accesses character at byte offset $i.',
        connectionToSurrounding: 'Supplies character $ch to the classification checks below.',
        examRelevance: 'Strings in PHP can be accessed as zero-indexed character arrays ($str[0]).'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 7-8',
        title: 'Check for Vowels using strpos() !== false',
        codeSnippet: `  if (strpos("aeiou", $ch) !== false) {
    $vowels++;`,
        whatItDoes: 'Checks if character $ch exists inside vowel string "aeiou"; if found, increments $vowels counter.',
        whyUsed: 'Efficiently tests membership among the five vowel characters.',
        howItWorks: 'strpos returns numeric position (0-4) if found, or boolean false if not found. Strict !== false avoids false-negative at index 0.',
        connectionToSurrounding: 'First branch in classification ladder.',
        examRelevance: 'Critical examiner trap: Why use !== false instead of != false? If $ch is "a", strpos returns 0. In PHP, 0 == false is true! Strict !== false is mandatory.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 9-10',
        title: 'Check for Whitespace ($ch == " ")',
        codeSnippet: `  } elseif ($ch == " ") {
    $spaces++;`,
        whatItDoes: 'Checks if current character is a space; if so, increments $spaces counter.',
        whyUsed: 'Prevents spaces from being counted as consonants.',
        howItWorks: 'Compares ASCII character equality with space " ".',
        connectionToSurrounding: 'Middle branch of conditional ladder.',
        examRelevance: 'Distinguishes space delimiters from letters and punctuation.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 11-13',
        title: 'Check for Consonants using ctype_alpha($ch)',
        codeSnippet: `  } elseif (ctype_alpha($ch)) {
    $consonants++;
  }`,
        whatItDoes: 'If character is not a vowel and not a space, tests if it is an alphabetic letter (a-z). If true, increments $consonants.',
        whyUsed: 'Ensures punctuation like "!", ".", and commas are NOT counted as consonants.',
        howItWorks: 'ctype_alpha() returns true only for characters in range [a-zA-Z].',
        connectionToSurrounding: 'Final branch inside character classification loop.',
        examRelevance: 'Crucial distinction: Punctuation like "!" is ignored, ensuring accurate count.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 14-19',
        title: 'Print Results and Conclude Script',
        codeSnippet: `}
echo "Input: $str<br>";
echo "Vowels: $vowels<br>";
echo "Consonants: $consonants<br>";
echo "Spaces: $spaces";
?>`,
        whatItDoes: 'Outputs the input string along with the final tallies for vowels, consonants, and spaces.',
        whyUsed: 'Presents final analytical results to user.',
        howItWorks: 'Interpolates variable values inside double-quoted strings.',
        connectionToSurrounding: 'Displays computed accumulators after loop termination.',
        examRelevance: 'Double quotes in PHP automatically interpolate variable names ($vowels); single quotes do not.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 5: Read Employee Details and Display Them Using a Form
  // --------------------------------------------------------------------------
  5: {
    objectiveEnrichment: {
      problemSolved: 'Web applications require processing form data submitted by users. This program demonstrates single-page form submission (self-posting form) using POST method and safely echoing inputs with htmlspecialchars().',
      overallMechanism: 'An HTML form collects employee fields. When submitted, PHP checks isset($_POST["submit"]), sanitizes user inputs with htmlspecialchars() to prevent Cross-Site Scripting (XSS), and displays the captured record.',
      prerequisitesToUnderstand: 'HTTP POST method, superglobal $_POST array, form action="" self-submission, and XSS sanitization.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-3',
        title: 'HTML Document Envelope and Form Title',
        codeSnippet: `<!DOCTYPE html>
<html><body>
<h2>Enter Employee Details</h2>`,
        whatItDoes: 'Sets up HTML5 document structure and renders page title.',
        whyUsed: 'Provides web interface layout.',
        howItWorks: 'Standard DOM setup.',
        connectionToSurrounding: 'Precedes HTML form definition.',
        examRelevance: 'HTML and PHP can coexist seamlessly in the same file.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-10',
        title: 'Self-Posting HTML Form with POST Method',
        codeSnippet: `<form method="post" action="">
Name: <input type="text" name="emp_name" required><br><br>
Employee ID: <input type="text" name="emp_id" required><br><br>
Department: <input type="text" name="emp_department" required><br><br>
Email: <input type="email" name="email" required><br><br>
<input type="submit" name="submit" value="Submit">
</form>`,
        whatItDoes: 'Renders an input form with fields for name, ID, department, email, and submit button, posting back to itself (action="").',
        whyUsed: 'Captures structured employee details securely in HTTP request body.',
        howItWorks: 'method="post" encodes data in HTTP request payload without exposing sensitive parameters in URL query string.',
        connectionToSurrounding: 'Supplies data populated into $_POST upon submission.',
        examRelevance: 'Viva distinction: GET appends form data to URL (visible in address bar, max ~2048 chars); POST sends data in HTTP request body (invisible in URL, no size limit).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 11-12',
        title: 'PHP Block and Submission Detection (isset($_POST["submit"]))',
        codeSnippet: `<?php
if (isset($_POST['submit'])) {`,
        whatItDoes: 'Opens PHP block and checks if the submit button was clicked in the incoming POST request.',
        whyUsed: 'Prevents PHP from running or throwing "undefined index" warnings on initial page load before form submission.',
        howItWorks: 'isset() returns true only if the specified key exists in the $_POST superglobal array.',
        connectionToSurrounding: 'Encloses the display logic on lines 13-17.',
        examRelevance: 'Crucial best practice: Always check isset($_POST[...]) before accessing form fields.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 13-17',
        title: 'Sanitized Output with htmlspecialchars()',
        codeSnippet: `  echo "<h2>Employee Details Entered:</h2>";
  echo "Name: " . htmlspecialchars($_POST['emp_name']) . "<br>";
  echo "Employee ID: " . htmlspecialchars($_POST['emp_id']) . "<br>";
  echo "Department: " . htmlspecialchars($_POST['emp_department']) . "<br>";
  echo "Email: " . htmlspecialchars($_POST['email']) . "<br>";`,
        whatItDoes: 'Retrieves each submitted field from $_POST, escapes HTML special characters, and prints the details.',
        whyUsed: 'Security: htmlspecialchars() prevents Cross-Site Scripting (XSS) attacks by converting < and > into safe entities (&lt; &gt;).',
        howItWorks: 'Converts reserved HTML characters (&, ", \', <, >) into harmless HTML entities.',
        connectionToSurrounding: 'Renders the employee record right below the form.',
        examRelevance: 'Top viva question: Why use htmlspecialchars()? To protect against XSS injection attacks.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 18-20',
        title: 'Close Conditional Block, PHP Tag, and HTML Document',
        codeSnippet: `}
?>
</body></html>`,
        whatItDoes: 'Closes if statement, closes PHP block, and terminates HTML document.',
        whyUsed: 'Clean structural termination.',
        howItWorks: 'Finalizes server-side response.',
        connectionToSurrounding: 'Concludes page.',
        examRelevance: 'Braces must match accurately.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 6: Student Registration Multi-Widget Form (student.php & display.php)
  // --------------------------------------------------------------------------
  6: {
    objectiveEnrichment: {
      problemSolved: 'Real-world registration workflows capture diverse widget data (text, date, radio, checkbox arrays, select dropdowns) across multi-page architectures.',
      overallMechanism: 'student.php collects inputs and submits to display.php via POST. display.php checks $_SERVER["REQUEST_METHOD"], extracts fields with null-coalescing defaults (?? ""), and iterates checkbox array items via foreach.',
      prerequisitesToUnderstand: 'Multi-file web architectures, checkbox array naming convention (course[]), and PHP foreach loops.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'student.php: Form Header and Action Route',
        codeSnippet: `<!-- Save as student.php -->
<!DOCTYPE html><html><body>
<h2>Student Registration</h2>
<form method="post" action="display.php">`,
        whatItDoes: 'Creates the student registration form that sends submitted data to a separate file named display.php.',
        whyUsed: 'Demonstrates multi-page client-server routing.',
        howItWorks: 'action="display.php" routes the HTTP POST request to that specific server endpoint.',
        connectionToSurrounding: 'Wraps all registration widgets.',
        examRelevance: 'action specifies target processing script; method specifies HTTP transmission protocol.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 5-7',
        title: 'Text, Date, and Email Inputs',
        codeSnippet: `Name: <input type="text" name="name" required><br>
DOB: <input type="date" name="dob"><br>
Email: <input type="email" name="email"><br>`,
        whatItDoes: 'Renders text field for name, date-picker calendar for date of birth, and validated email field.',
        whyUsed: 'Collects primary biographical student data with native HTML5 validation.',
        howItWorks: 'Browser renders native OS calendar picker for date and validates email pattern.',
        connectionToSurrounding: 'First group of registration fields.',
        examRelevance: 'type="date" automatically formats values as YYYY-MM-DD.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 8-9',
        title: 'Radio Buttons for Gender Selection',
        codeSnippet: `Gender: <input type="radio" name="gender" value="Male"> Male
<input type="radio" name="gender" value="Female"> Female<br>`,
        whatItDoes: 'Renders two mutually exclusive radio buttons for selecting gender.',
        whyUsed: 'Enforces selection of a single gender option.',
        howItWorks: 'Both inputs share identical name="gender", allowing only one to be checked at any time.',
        connectionToSurrounding: 'Single-select choice group.',
        examRelevance: 'When submitted, $_POST["gender"] holds "Male" or "Female".'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 10-13',
        title: 'Checkbox Array for Course Selection (course[])',
        codeSnippet: `Courses:<br>
<input type="checkbox" name="course[]" value="Maths"> Maths<br>
<input type="checkbox" name="course[]" value="Science"> Science<br>
<input type="checkbox" name="course[]" value="English"> English<br>`,
        whatItDoes: 'Renders three checkboxes using square brackets in the name (name="course[]").',
        whyUsed: 'Allows multiple subjects to be checked and bundled into a single PHP array.',
        howItWorks: 'Square brackets tell PHP to parse submitted values as an indexed array in $_POST["course"].',
        connectionToSurrounding: 'Critical viva concept for handling multiple choices in PHP.',
        examRelevance: 'Examiner favorite: Why use name="course[]" with brackets? Without brackets, each checked box overwrites the previous one; with [], PHP creates an array.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 14-18',
        title: 'Department Select Dropdown and Submit Button',
        codeSnippet: `Department: <select name="department">
<option>Computer Science</option><option>Electronics</option><option>Mechanical</option>
</select><br>
<input type="submit" value="Register">
</form></body></html>`,
        whatItDoes: 'Renders dropdown menu for department and submit button to trigger registration.',
        whyUsed: 'Completes student registration form widgets.',
        howItWorks: 'Submits all fields to display.php on click.',
        connectionToSurrounding: 'Concludes student.php page.',
        examRelevance: 'Selected option value is sent under $_POST["department"].'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 19-21',
        title: 'display.php: Check Request Method ($_SERVER["REQUEST_METHOD"])',
        codeSnippet: `<!-- Save as display.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {`,
        whatItDoes: 'In the separate file display.php, verifies that page was accessed via an HTTP POST request.',
        whyUsed: 'Prevents direct URL access errors when someone navigates to display.php directly in browser.',
        howItWorks: 'Inspects $_SERVER superglobal containing HTTP environment variables.',
        connectionToSurrounding: 'Guards the display routine on lines 22-31.',
        examRelevance: 'Robust alternative or complement to checking isset($_POST["submit"]).'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 22-27',
        title: 'Display Sanitized Scalar Fields with Null Coalescing (??)',
        codeSnippet: `  echo "Student Details Submitted<br>";
  echo "Name: " . htmlspecialchars($_POST["name"] ?? "") . "<br>";
  echo "DOB: " . htmlspecialchars($_POST["dob"] ?? "") . "<br>";
  echo "Email: " . htmlspecialchars($_POST["email"] ?? "") . "<br>";
  echo "Gender: " . htmlspecialchars($_POST["gender"] ?? "") . "<br>";
  echo "Department: " . htmlspecialchars($_POST["department"] ?? "") . "<br>";`,
        whatItDoes: 'Outputs name, DOB, email, gender, and department safely using htmlspecialchars() and default fallback (?? "").',
        whyUsed: 'Safely prints all scalar registration fields without triggering undefined index warnings if an optional field was omitted.',
        howItWorks: 'Null-coalescing operator (??) provides empty string "" if the key is missing.',
        connectionToSurrounding: 'Precedes course array iteration below.',
        examRelevance: 'Null coalescing operator (??) was introduced in PHP 7 to eliminate isset() boilerplate.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 28-31',
        title: 'Iterate Checkbox Array via foreach Loop',
        codeSnippet: `  echo "Selected courses:<br>";
  foreach ($_POST["course"] ?? array() as $course) {
    echo htmlspecialchars($course) . "<br>";
  }`,
        whatItDoes: 'Loops through every selected course checkbox in the $_POST["course"] array and displays it.',
        whyUsed: 'Handles dynamic number of selected checkboxes (0, 1, 2, or 3 courses).',
        howItWorks: 'foreach iterates through array elements one by one; ?? array() prevents error if zero boxes checked.',
        connectionToSurrounding: 'Displays all multi-select choices.',
        examRelevance: 'Critical viva pattern: Iterating arrays in PHP is most cleanly done using foreach ($array as $value).'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Lines 32-35',
        title: 'Else Branch and File Closure',
        codeSnippet: `} else {
  echo "Form not submitted";
}
?>`,
        whatItDoes: 'Outputs error notice if display.php is requested directly without submitting the form, and closes script.',
        whyUsed: 'Provides clear diagnostic message for invalid navigation.',
        howItWorks: 'Executes if request method is GET.',
        connectionToSurrounding: 'Concludes display.php.',
        examRelevance: 'Always handle invalid or unauthorized direct access.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 7: File Upload Script
  // --------------------------------------------------------------------------
  7: {
    objectiveEnrichment: {
      problemSolved: 'Web forms need to accept binary file uploads (documents, photos) from client computers and save them securely on the web server filesystem.',
      overallMechanism: 'HTML form uses enctype="multipart/form-data" to encode binary streams. Server receives file metadata into $_FILES["uploaded_file"], validates upload status (UPLOAD_ERR_OK), and saves file via move_uploaded_file().',
      prerequisitesToUnderstand: 'Form encoding types (enctype="multipart/form-data"), $_FILES 2D array, and temporary upload directory mechanics.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-6',
        title: 'index.html: Form with enctype="multipart/form-data"',
        codeSnippet: `<!-- Save as index.html -->
<!DOCTYPE html><html><body>
<form enctype="multipart/form-data" action="upload.php" method="post">
Select file: <input type="file" name="uploaded_file" required>
<input type="submit" value="Upload">
</form></body></html>`,
        whatItDoes: 'Creates an HTML upload form with enctype="multipart/form-data" pointing to upload.php.',
        whyUsed: 'Standard application/x-www-form-urlencoded cannot transmit binary file bytes; multipart/form-data is mandatory.',
        howItWorks: 'Packages file content in MIME multipart boundaries in the HTTP POST body.',
        connectionToSurrounding: 'Transmits file to upload.php on submission.',
        examRelevance: 'Number one viva question: What attribute is MANDATORY in the <form> tag for file uploads? enctype="multipart/form-data".'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 7-10',
        title: 'upload.php: Verify Upload Integrity ($_FILES & UPLOAD_ERR_OK)',
        codeSnippet: `<!-- Save as upload.php -->
<?php
if (isset($_FILES["uploaded_file"]) &&
    $_FILES["uploaded_file"]["error"] === UPLOAD_ERR_OK) {`,
        whatItDoes: 'Verifies that the file was received and that its error code is UPLOAD_ERR_OK (value 0).',
        whyUsed: 'Confirms upload succeeded without exceeding max file size or partial upload failures.',
        howItWorks: '$_FILES is a 2D associative array containing [name], [type], [tmp_name], [error], and [size].',
        connectionToSurrounding: 'Guards the file-saving code on lines 11-16.',
        examRelevance: 'Always inspect $_FILES["file"]["error"] before accessing temporary upload files.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 11-12',
        title: 'Establish Destination Directory (__DIR__ . "/uploads/")',
        codeSnippet: `  $uploadDir = __DIR__ . "/uploads/";
  if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);`,
        whatItDoes: 'Constructs directory path relative to current script (__DIR__) and creates directory with 0755 permissions if missing.',
        whyUsed: 'Ensures target storage folder exists before attempting to write file.',
        howItWorks: '__DIR__ returns absolute path of current folder; mkdir() creates directory recursively.',
        connectionToSurrounding: 'Provides storage folder for line 14.',
        examRelevance: '__DIR__ is a PHP magic constant representing the current directory path.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 13-14',
        title: 'Sanitize Filename (basename) and Construct Destination Path',
        codeSnippet: `  $fileName = basename($_FILES["uploaded_file"]["name"]);
  $destination = $uploadDir . $fileName;`,
        whatItDoes: 'Extracts filename using basename() to strip directory traversal exploits (e.g. "../../") and joins with folder path.',
        whyUsed: 'Security protection against path traversal attacks.',
        howItWorks: 'basename() strips leading path components leaving only the plain filename.',
        connectionToSurrounding: 'Supplies target destination path to move_uploaded_file on line 15.',
        examRelevance: 'Security viva question: Why use basename()? To prevent attackers from overwriting system files via path traversal.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 15-19',
        title: 'move_uploaded_file() from Temporary Location to Permanent Destination',
        codeSnippet: `  if (move_uploaded_file($_FILES["uploaded_file"]["tmp_name"], $destination)) {
    echo "The file " . htmlspecialchars($fileName) . " has been uploaded.";
  } else {
    echo "There was an error uploading the file.";
  }`,
        whatItDoes: 'Moves file from server temporary storage (tmp_name) to destination folder and prints confirmation.',
        whyUsed: 'Uploaded files are automatically deleted after script execution unless moved via move_uploaded_file().',
        howItWorks: 'Validates that tmp_name was an authentic uploaded file, then performs atomic move.',
        connectionToSurrounding: 'Completes file upload pipeline.',
        examRelevance: 'Crucial viva question: Why use move_uploaded_file() instead of rename() or copy()? move_uploaded_file() validates that the file was genuinely uploaded via HTTP POST, preventing local file inclusion exploits.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 20-23',
        title: 'Fallback Error Handler and Script Closure',
        codeSnippet: `} else {
  echo "Please select a file to upload.";
}
?>`,
        whatItDoes: 'Displays guidance if form was submitted without choosing a file, and closes PHP script.',
        whyUsed: 'Handles validation failure gracefully.',
        howItWorks: 'Catches empty or invalid file submission.',
        connectionToSurrounding: 'Concludes upload.php.',
        examRelevance: 'Always provide user feedback on upload failure.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 8: Passing Variables with Cookies (setcookie.php & get-cookie.php)
  // --------------------------------------------------------------------------
  8: {
    objectiveEnrichment: {
      problemSolved: 'HTTP is a stateless protocol; servers forget clients between requests. Cookies solve this by storing small key-value data on the client browser with an expiration timestamp.',
      overallMechanism: 'setcookie.php sends a Set-Cookie HTTP header to store "username"="Sai" expiring in 1 hour. On future requests, browser attaches Cookie header, allowing get-cookie.php to read $_COOKIE["username"].',
      prerequisitesToUnderstand: 'Stateless nature of HTTP, client-side cookie storage, and setcookie() header restrictions.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-4',
        title: 'setcookie.php: Set Cookie Before Output',
        codeSnippet: `<!-- Save as setcookie.php -->
<?php
// setcookie() must be called before output.
setcookie("username", "Sai", time() + 3600, "/");
?>`,
        whatItDoes: 'Transmits a Set-Cookie header creating cookie "username" with value "Sai", expiring in 3600 seconds (1 hour), valid across whole domain ("/").',
        whyUsed: 'Persists user state across different pages on the user\'s machine.',
        howItWorks: 'Writes Set-Cookie HTTP response header. time() + 3600 computes Unix epoch expiration.',
        connectionToSurrounding: 'Must be placed at the very top of the file before any HTML output.',
        examRelevance: 'Top viva question: Why must setcookie() be called BEFORE any HTML output? Because cookies are sent in HTTP response headers; once HTML is sent, headers cannot be modified ("Headers already sent" error).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 6-8',
        title: 'HTML Link to Read Cookie Page',
        codeSnippet: `<!DOCTYPE html><html><body>
<a href="get-cookie.php">Click here</a>
</body></html>`,
        whatItDoes: 'Renders a clickable link navigating the user to get-cookie.php.',
        whyUsed: 'Provides transition to the second page that will inspect the newly created cookie.',
        howItWorks: 'Clicking anchor tag sends a new HTTP GET request to get-cookie.php with cookie attached.',
        connectionToSurrounding: 'Bridges setcookie.php to get-cookie.php.',
        examRelevance: 'Browser automatically sends stored cookies back to the server on every request.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 9-16',
        title: 'get-cookie.php: Retrieve Cookie from $_COOKIE Superglobal',
        codeSnippet: `<!-- Save as get-cookie.php -->
<?php
if (isset($_COOKIE["username"])) {
  $user = $_COOKIE["username"];
  echo "Welcome back, " . htmlspecialchars($user) . "!";
} else {
  echo "Cookie 'username' is not set.";
}`,
        whatItDoes: 'Checks if cookie "username" exists in $_COOKIE array; if found, welcomes user by name.',
        whyUsed: 'Demonstrates reading persisted client data on a completely different page/request.',
        howItWorks: 'PHP parses incoming HTTP Cookie request header into associative array $_COOKIE.',
        connectionToSurrounding: 'Reads the value set in setcookie.php.',
        examRelevance: 'Cookies are stored on client browser (max ~4KB); sensitive data should not be stored in plain cookies.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 17',
        title: 'Close PHP Tag',
        codeSnippet: `?>`,
        whatItDoes: 'Terminates PHP execution in get-cookie.php.',
        whyUsed: 'Clean file closure.',
        howItWorks: 'Concludes response.',
        connectionToSurrounding: 'End of program.',
        examRelevance: 'Standard script termination.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 9: Visitor Counter Using Sessions
  // --------------------------------------------------------------------------
  9: {
    objectiveEnrichment: {
      problemSolved: 'Cookies can be manipulated by users. Server-side Sessions store sensitive state directly on the server, identifying the client via an opaque session ID token.',
      overallMechanism: 'session_start() initializes session handling. If $_SESSION["count"] exists, it increments the integer count; otherwise, it sets it to 1. State persists across page reloads until the browser closes or session expires.',
      prerequisitesToUnderstand: 'Sessions vs Cookies, session_start() initialization, and $_SESSION superglobal.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-2',
        title: 'session_start() — Initialize or Resume Server Session',
        codeSnippet: `<?php
session_start();`,
        whatItDoes: 'Initializes session environment or resumes existing session based on PHPSESSID cookie.',
        whyUsed: 'Mandatory first step before reading or writing any session data in $_SESSION.',
        howItWorks: 'Checks for PHPSESSID cookie. If found, deserializes session data file from /tmp; if not, generates new session ID.',
        connectionToSurrounding: 'Must be invoked before accessing $_SESSION on lines 3-8.',
        examRelevance: 'Viva question: Where must session_start() be called? At the absolute beginning of script before any output.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 3-6',
        title: 'Check and Increment Session Counter',
        codeSnippet: `if (isset($_SESSION["count"])) {
  echo "Your session count: ";
  echo $_SESSION["count"] . "<br>";
  $_SESSION["count"]++;`,
        whatItDoes: 'If counter exists, displays current count and increments it by 1 for the next reload.',
        whyUsed: 'Tracks number of times the visitor has reloaded this page in the current browsing session.',
        howItWorks: '$_SESSION["count"] value increments in server memory and is saved to session file on disk.',
        connectionToSurrounding: 'Handles returning visitors.',
        examRelevance: 'State is preserved on the server, not on the client.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 7-10',
        title: 'Else Branch: Initialize Counter to 1',
        codeSnippet: `} else {
  $_SESSION["count"] = 1;
  echo "Session does not exist";
}`,
        whatItDoes: 'If visitor visits for the first time, creates $_SESSION["count"] = 1 and prints notice.',
        whyUsed: 'Bootstraps session variable for new visitors.',
        howItWorks: 'Assigns integer 1 to key "count" in session array.',
        connectionToSurrounding: 'Initial run condition.',
        examRelevance: 'Next page refresh will trigger the if-branch instead.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 11',
        title: 'Close PHP Script Tag',
        codeSnippet: `?>`,
        whatItDoes: 'Terminates PHP script.',
        whyUsed: 'Concludes execution.',
        howItWorks: 'PHP automatically writes session data to storage and closes session lock.',
        connectionToSurrounding: 'Ends visitor counter program.',
        examRelevance: 'To destroy a session completely: session_unset(); session_destroy();.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 10: MySQL Database CRUD Operations Using PHP
  // --------------------------------------------------------------------------
  10: {
    objectiveEnrichment: {
      problemSolved: 'Web apps require persistent relational databases. This program demonstrates complete database lifecycle: connecting to MySQL with mysqli_connect(), inserting records (INSERT), reading records (SELECT/fetch_assoc), and deleting records (DELETE).',
      overallMechanism: 'Establishes a MySQL TCP socket connection via mysqli_connect, sends SQL query strings through mysqli_query(), iterates result sets using while($row = mysqli_fetch_assoc()), and closes connection with mysqli_close().',
      prerequisitesToUnderstand: 'Relational database concepts (databases, tables, rows, columns, primary keys), SQL syntax, and the PHP mysqli procedural extension.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-8',
        title: 'SQL DDL: Create Database and Table Schema',
        codeSnippet: `-- Run these SQL commands first in MySQL:
CREATE DATABASE college;
USE college;
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  marks INT
);`,
        whatItDoes: 'Creates database "college" and table "students" with auto-incrementing primary key ID, student name, and marks.',
        whyUsed: 'Establishes relational database schema required before PHP script execution.',
        howItWorks: 'MySQL allocates table space with B-Tree index on primary key "id".',
        connectionToSurrounding: 'Prerequisite schema executed in MySQL console or phpMyAdmin.',
        examRelevance: 'Examiners check SQL knowledge: AUTO_INCREMENT automatically generates sequential IDs (1, 2, 3...).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 11-15',
        title: 'Step 1: Connect to Database (mysqli_connect)',
        codeSnippet: `<?php
// Step 1: Connect to the database
$conn = mysqli_connect("localhost", "root", "", "college");
if (!$conn) die("Connection failed: " . mysqli_connect_error());
echo "Database connected successfully<br><br>";`,
        whatItDoes: 'Opens a connection to MySQL on localhost as user root with empty password and selects database "college".',
        whyUsed: 'Initializes database connection link identifier $conn.',
        howItWorks: 'mysqli_connect establishes TCP socket; if failed, die() terminates execution displaying error message.',
        connectionToSurrounding: '$conn handle is passed into all subsequent mysqli functions.',
        examRelevance: 'Parameters order: hostname ("localhost"), username ("root"), password (""), database ("college").'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 16-22',
        title: 'Step 2: Create Record (INSERT INTO)',
        codeSnippet: `// Step 2: Create/insert a record
$sql = "INSERT INTO students (name, marks) VALUES ('Ravi', 85)";
if (mysqli_query($conn, $sql)) {
  echo "Record created successfully<br><br>";
} else {
  echo "Error creating record: " . mysqli_error($conn) . "<br>";
}`,
        whatItDoes: 'Inserts a new student row (\'Ravi\', 85) into the students table.',
        whyUsed: 'Demonstrates SQL Data Manipulation Language (DML) insert operation.',
        howItWorks: 'mysqli_query sends SQL string to MySQL engine; returns true on success or false on failure.',
        connectionToSurrounding: 'Populates table with data to be viewed in Step 3.',
        examRelevance: 'mysqli_error($conn) returns diagnostic string explaining why query failed.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 23-30',
        title: 'Step 3: View Records (SELECT & mysqli_fetch_assoc)',
        codeSnippet: `// Step 3: View records
echo "<h3>Student Records</h3>";
$result = mysqli_query($conn, "SELECT * FROM students");
while ($row = mysqli_fetch_assoc($result)) {
  echo "ID: " . $row['id'] . "<br>";
  echo "Name: " . htmlspecialchars($row['name']) . "<br>";
  echo "Marks: " . $row['marks'] . "<br><br>";
}`,
        whatItDoes: 'Queries all student rows and iterates through the result set, echoing ID, Name, and Marks for each student.',
        whyUsed: 'Demonstrates reading and displaying database records.',
        howItWorks: 'mysqli_fetch_assoc() fetches next row as an associative array; returns null when rows are exhausted, terminating the while loop.',
        connectionToSurrounding: 'Displays records before deletion.',
        examRelevance: 'Crucial viva question: How does while($row = mysqli_fetch_assoc($result)) work? Each call returns the next row array until no rows remain, when it returns null/false.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 31-38',
        title: 'Step 4: Delete Record (DELETE FROM)',
        codeSnippet: `// Step 4: Delete record with ID 1
$id = 1;
$sql = "DELETE FROM students WHERE id = $id";
if (mysqli_query($conn, $sql)) {
  echo "Record deleted successfully<br>";
} else {
  echo "Error deleting record: " . mysqli_error($conn);
}`,
        whatItDoes: 'Executes DELETE query targeting the student record where primary key id = 1.',
        whyUsed: 'Demonstrates record deletion in database lifecycle.',
        howItWorks: 'MySQL locates row with id=1 and removes it from table storage.',
        connectionToSurrounding: 'Completes CRUD operations (Create, Read, Delete).',
        examRelevance: 'Always use a WHERE clause in DELETE queries; omitting WHERE deletes ALL rows in the table!'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 39-41',
        title: 'Step 5: Close Database Connection (mysqli_close)',
        codeSnippet: `// Step 5: Close the connection
mysqli_close($conn);
?>`,
        whatItDoes: 'Terminates database socket connection and frees resources on the MySQL server.',
        whyUsed: 'Prevents database connection leaks and conserves server connection pool.',
        howItWorks: 'Sends disconnect packet to MySQL and closes TCP socket.',
        connectionToSurrounding: 'Final cleanup step in database script.',
        examRelevance: 'Good programming discipline requires explicitly closing database connections.'
      }
    ]
  }
};

// Apply enrichments
const updatedPrograms: ProgramData[] = PHP_LAB_PROGRAMS.map(program => {
  const enrichment = major13Enrichments[program.programNumber];
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

export const PHP_LAB_PROGRAMS: ProgramData[] = `;

const tsContent = fileHeader + JSON.stringify(updatedPrograms, null, 2) + ';\n';

fs.writeFileSync('src/data/phpPrograms.ts', tsContent, 'utf-8');
console.log('Successfully upgraded Major 13: all 10 programs enriched with granular line steps and objectives!');
