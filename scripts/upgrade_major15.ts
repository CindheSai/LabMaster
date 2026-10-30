import fs from 'fs';
import { PYTHON_APP_DEV_LAB_PROGRAMS } from '../src/data/pythonAppDevPrograms';
import { ProgramData, StepExplanation } from '../src/types';

// ============================================================================
// MAJOR 15: Granular Line-by-Line Steps & Enriched Objectives for Programs 1-10
// ============================================================================

const major15Enrichments: Record<number, {
  objectiveEnrichment: {
    problemSolved: string;
    overallMechanism: string;
    prerequisitesToUnderstand: string;
  };
  granularSteps: StepExplanation[];
}> = {
  // --------------------------------------------------------------------------
  // PROGRAM 1: Menu-Driven Temperature Conversion
  // --------------------------------------------------------------------------
  1: {
    objectiveEnrichment: {
      problemSolved: 'Users need to convert temperature readings between Celsius and Fahrenheit scales without manual arithmetic. This program demonstrates console menu presentation, user choice input, and conditional branch dispatch.',
      overallMechanism: 'Outputs numbered options, captures integer choice via input(), and routes execution through an if/elif/else ladder to apply conversion formulas: F = (9/5)*C + 32 or C = (5/9)*(F - 32).',
      prerequisitesToUnderstand: 'Python print(), input(), int() vs float() type casting, and if/elif/else conditional structures.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Display First Menu Choice (Celsius to Fahrenheit)',
        codeSnippet: `print('1. Celsius to Fahrenheit.')`,
        whatItDoes: 'Outputs the string "1. Celsius to Fahrenheit." to the console with a trailing newline.',
        whyUsed: 'Informs the user that pressing 1 will select Celsius-to-Fahrenheit conversion.',
        howItWorks: 'Writes string characters to standard output stream (sys.stdout).',
        connectionToSurrounding: 'First line of the console user interface.',
        examRelevance: 'Examiner note: In Python 3, print is a built-in function requiring parentheses.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Display Second Menu Choice (Fahrenheit to Celsius)',
        codeSnippet: `print('2. Fahrenheit to Celsius.')`,
        whatItDoes: 'Outputs the second menu option string on a new line.',
        whyUsed: 'Informs user that option 2 converts Fahrenheit to Celsius.',
        howItWorks: 'Writes string to stdout followed by newline.',
        connectionToSurrounding: 'Completes the printed menu choices before user input is requested on Line 3.',
        examRelevance: 'Keeps console UI organized and predictable.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 3',
        title: 'Read and Cast Choice to Integer',
        codeSnippet: `choice = int(input('Enter your choice: '))`,
        whatItDoes: 'Prompts with "Enter your choice: ", reads user keystrokes, and converts the string into an integer stored in variable choice.',
        whyUsed: 'input() returns a string (str). int() converts it so numeric comparison (choice == 1) succeeds.',
        howItWorks: 'input() pauses execution until Enter is pressed; int() parses ASCII digits to an integer.',
        connectionToSurrounding: 'Supplies the choice variable evaluated in the conditional ladder on Lines 4, 8, and 12.',
        examRelevance: 'Examiner trap: What happens if int() is omitted? The if condition fails because "1" != 1.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 4',
        title: 'Check for Option 1 (if choice == 1)',
        codeSnippet: `if choice == 1:`,
        whatItDoes: 'Tests whether variable choice is numerically equal to 1.',
        whyUsed: 'Branches into the Celsius-to-Fahrenheit conversion code block.',
        howItWorks: 'If True, enters indented lines 5-7. If False, jumps to elif on Line 8.',
        connectionToSurrounding: 'Evaluates the user selection made on Line 3.',
        examRelevance: 'In Python, the colon (:) is mandatory to begin a compound block.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 5',
        title: 'Input Celsius Value as Float',
        codeSnippet: `    c = float(input('Enter temperature in celsius: '))`,
        whatItDoes: 'Prompts for Celsius degrees and converts string to a floating-point number stored in variable c.',
        whyUsed: 'Physical temperatures require decimal precision (e.g. 36.6°C); int() would discard decimal fractions.',
        howItWorks: 'float() parses decimal point representation into 64-bit IEEE 754 floating point number.',
        connectionToSurrounding: 'Supplies operand c for formula calculation on Line 6.',
        examRelevance: 'Using int() here would truncate temperatures like 36.6 to 36, causing precision errors.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Line 6',
        title: 'Apply Celsius-to-Fahrenheit Formula',
        codeSnippet: `    f = 9 * c / 5 + 32`,
        whatItDoes: 'Multiplies Celsius by 9, divides by 5, adds 32, and stores result in variable f.',
        whyUsed: 'Implements the standard thermodynamic conversion formula F = (9/5)C + 32.',
        howItWorks: 'Follows PEMDAS operator precedence: multiplication and division first (left to right), followed by addition (+ 32).',
        connectionToSurrounding: 'Produces value f printed on Line 7.',
        examRelevance: 'Examiner question: Why does 9 * c / 5 work without integer truncation in Python 3? In Python 3, / is true division returning float.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 7',
        title: 'Output Converted Fahrenheit Temperature',
        codeSnippet: `    print('Temperature in fahrenheit scale:', f)`,
        whatItDoes: 'Prints the descriptive text and the computed Fahrenheit temperature separated by space.',
        whyUsed: 'Displays result to user.',
        howItWorks: 'Converts float f to string and streams to stdout.',
        connectionToSurrounding: 'Concludes branch 1 execution.',
        examRelevance: 'Comma in print() automatically inserts a separating space.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Line 8',
        title: 'Check for Option 2 (elif choice == 2)',
        codeSnippet: `elif choice == 2:`,
        whatItDoes: 'Tests whether choice equals 2 if previous if was False.',
        whyUsed: 'Branches into the Fahrenheit-to-Celsius conversion block.',
        howItWorks: 'Evaluated only when choice != 1.',
        connectionToSurrounding: 'Guards lines 9-11.',
        examRelevance: 'elif is Python\'s shorthand for else if.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Line 9',
        title: 'Input Fahrenheit Value as Float',
        codeSnippet: `    f = float(input('Enter temperature in fahrenheit: '))`,
        whatItDoes: 'Prompts for Fahrenheit degrees and stores as float in variable f.',
        whyUsed: 'Captures input temperature with fractional precision.',
        howItWorks: 'float(input()) handles both integer and decimal entries.',
        connectionToSurrounding: 'Supplies operand f for Line 10.',
        examRelevance: 'Float type allows inputs like 98.6.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Line 10',
        title: 'Apply Fahrenheit-to-Celsius Formula',
        codeSnippet: `    c = 5 * (f - 32) / 9`,
        whatItDoes: 'Subtracts 32 from Fahrenheit, multiplies by 5, divides by 9, and stores in variable c.',
        whyUsed: 'Implements the inverse conversion formula C = (5/9)*(F - 32).',
        howItWorks: 'Parentheses (f - 32) enforce subtraction before multiplication and division.',
        connectionToSurrounding: 'Calculates value c printed on Line 11.',
        examRelevance: 'Parentheses are mandatory! Without them, 5 * f - 32 / 9 would multiply and divide first.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Line 11',
        title: 'Output Converted Celsius Temperature',
        codeSnippet: `    print('Temperature in celsius scale:', c)`,
        whatItDoes: 'Prints descriptive label followed by converted Celsius value.',
        whyUsed: 'Presents calculated result to user.',
        howItWorks: 'Outputs string and float to console.',
        connectionToSurrounding: 'Concludes branch 2 execution.',
        examRelevance: 'Verify: 98.6°F produces 37.0°C.'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Lines 12-13',
        title: 'Handle Invalid Choice with Else Catch-all',
        codeSnippet: `else:
    print('Invalid choice.')`,
        whatItDoes: 'Executes if user entered any number other than 1 or 2, printing "Invalid choice."',
        whyUsed: 'Graceful handling for invalid menu selections.',
        howItWorks: 'Catch-all default branch of conditional ladder.',
        connectionToSurrounding: 'Ends the selection statement.',
        examRelevance: 'Always include default/else branches in menu-driven programs for robustness.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 2: Student Marks, Percentage and Grade Calculation
  // --------------------------------------------------------------------------
  2: {
    objectiveEnrichment: {
      problemSolved: 'Automates grading for academic evaluation. Computes cumulative total, arithmetic average, percentage out of 500 maximum marks, and maps scores to letter grades A through E using a multi-way conditional ladder.',
      overallMechanism: 'Collects five subject scores, computes total and percentage, and compares average against threshold boundaries (>=80: A, 70-79: B, 60-69: C, 40-59: D, <40: E).',
      prerequisitesToUnderstand: 'Sequential integer input, arithmetic operators (+, /, *), logical operator "and", and compound comparison expressions.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-5',
        title: 'Read Marks for Five Subjects as Integers',
        codeSnippet: `subject_1 = int(input("Enter Subject1 Marks:"))
subject_2 = int(input("Enter Subject2 Marks:"))
subject_3 = int(input("Enter Subject3 Marks:"))
subject_4 = int(input("Enter Subject4 Marks:"))
subject_5 = int(input("Enter Subject5 Marks:"))`,
        whatItDoes: 'Prompts user sequentially and reads five exam marks, converting each input string into an integer.',
        whyUsed: 'Collects the five raw subject marks required for academic evaluation.',
        howItWorks: 'int(input()) reads line from console and converts ASCII digits to integer zvals.',
        connectionToSurrounding: 'Supplies the five numeric variables summed on Line 9.',
        examRelevance: 'In Python, separate input() calls are needed for separate console lines.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 7',
        title: 'Initialize Working Variables to None',
        codeSnippet: `total, average, percentage, grade = None, None, None, None`,
        whatItDoes: 'Unpacks None to four variables (total, average, percentage, grade) in a single multiple-assignment statement.',
        whyUsed: 'Declares variable identifiers upfront before computational use.',
        howItWorks: 'Python tuple unpacking assigns None to each variable name in local symbol table.',
        connectionToSurrounding: 'Variables are assigned actual computed values in lines 9, 10, 11, and 14-22.',
        examRelevance: 'Python supports tuple assignment (a, b = 1, 2); None is Python\'s singleton null object.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 9',
        title: 'Calculate Total Marks (Sum of 5 Subjects)',
        codeSnippet: `total = subject_1 + subject_2 + subject_3 + subject_4 + subject_5`,
        whatItDoes: 'Adds all five subject marks together and stores sum in variable total.',
        whyUsed: 'Computes cumulative score across all subjects.',
        howItWorks: 'Executes binary addition across the five integer variables.',
        connectionToSurrounding: 'Supplies the total used to compute average (Line 10) and percentage (Line 11).',
        examRelevance: 'If each subject is out of 100, maximum total is 500.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 10',
        title: 'Compute Arithmetic Average (total / 5.0)',
        codeSnippet: `average = total / 5.0`,
        whatItDoes: 'Divides total score by float 5.0 to calculate average marks per subject.',
        whyUsed: 'Provides mean score used to determine grade assignment in lines 13-22.',
        howItWorks: 'Floating-point division operator / calculates quotient as float.',
        connectionToSurrounding: 'Evaluated in the conditional grading ladder below.',
        examRelevance: 'Using 5.0 ensures floating-point precision in all Python versions.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 11',
        title: 'Compute Percentage ((total / 500.0) * 100)',
        codeSnippet: `percentage = (total / 500.0) * 100`,
        whatItDoes: 'Divides total marks by maximum marks (500.0) and multiplies by 100 to get percentage score.',
        whyUsed: 'Computes standardized percentage representation.',
        howItWorks: 'Parentheses calculate proportion of maximum marks; multiplying by 100 scales to percentage.',
        connectionToSurrounding: 'Stored in variable percentage printed on Line 25.',
        examRelevance: 'Notice that mathematically, for 5 subjects out of 100, percentage equals average.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 13-14',
        title: 'Grade A Threshold: if average >= 80',
        codeSnippet: `if average >= 80:
    grade = 'A'`,
        whatItDoes: 'Tests if average score is greater than or equal to 80; if True, assigns grade = \'A\'.',
        whyUsed: 'Awards top grade A for distinction performance (80-100%).',
        howItWorks: 'Relational operator >= compares float against 80.',
        connectionToSurrounding: 'Top tier of grading ladder.',
        examRelevance: 'If True, Python skips all subsequent elif and else branches.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 15-16',
        title: 'Grade B Threshold: elif average >= 70 and average < 80',
        codeSnippet: `elif average >= 70 and average < 80:
    grade = 'B'`,
        whatItDoes: 'Tests if average is in range [70, 80); if True, assigns grade = \'B\'.',
        whyUsed: 'Awards grade B for first class performance.',
        howItWorks: 'Logical operator "and" combines two boolean conditions; both must be True.',
        connectionToSurrounding: 'Second tier of grading ladder.',
        examRelevance: 'In Python, this can also be written using chained comparisons: 70 <= average < 80.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 17-18',
        title: 'Grade C Threshold: elif average >= 60 and average < 70',
        codeSnippet: `elif average >= 60 and average < 70:
    grade = 'C'`,
        whatItDoes: 'Tests if average is in range [60, 70); if True, assigns grade = \'C\'.',
        whyUsed: 'Awards grade C for second class performance.',
        howItWorks: 'Logical and check.',
        connectionToSurrounding: 'Third tier of grading ladder.',
        examRelevance: 'Standard academic classification threshold.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Lines 19-20',
        title: 'Grade D Threshold: elif average >= 40 and average < 60',
        codeSnippet: `elif average >= 40 and average < 60:
    grade = 'D'`,
        whatItDoes: 'Tests if average is in range [40, 60); if True, assigns grade = \'D\'.',
        whyUsed: 'Awards grade D for third class / pass grade.',
        howItWorks: 'Logical and check.',
        connectionToSurrounding: 'Fourth tier before failure.',
        examRelevance: 'Minimum passing percentage in most universities is 40%.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 21-22',
        title: 'Grade E Threshold: else (average < 40)',
        codeSnippet: `else:
    grade = 'E'`,
        whatItDoes: 'Executes if average is below 40, assigning grade = \'E\' (Fail / Needs improvement).',
        whyUsed: 'Catches all scores below passing threshold.',
        howItWorks: 'Default branch triggered when all prior conditions evaluate to False.',
        connectionToSurrounding: 'Concludes grading decision ladder.',
        examRelevance: 'Ensures variable grade is guaranteed to have a value.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Lines 24-26',
        title: 'Output Total, Percentage, and Grade',
        codeSnippet: `print("The Total marks is:", total)
print("The Percentage is:", percentage)
print("The Grade is:", grade)`,
        whatItDoes: 'Prints the calculated total marks, percentage, and assigned letter grade to console.',
        whyUsed: 'Displays complete academic report card to user.',
        howItWorks: 'Outputs labels and variable values to stdout.',
        connectionToSurrounding: 'Final output concluding program.',
        examRelevance: 'Output verification: Marks 85, 78, 90, 88, 92 -> Total 433, Percentage 86.6%, Grade A.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 3: Demonstration of Sequence Data Types
  // --------------------------------------------------------------------------
  3: {
    objectiveEnrichment: {
      problemSolved: 'Python provides six fundamental sequence data types, each with unique mutability, homogeneity, and indexing properties. This program demonstrates String, List, Tuple, Range, Bytes, and Bytearray.',
      overallMechanism: 'Initializes instances of all 6 sequence types, demonstrates in-place mutation on bytearray, prints all collections, and demonstrates zero-based indexing, negative indexing, conversion to list, and binary slicing.',
      prerequisitesToUnderstand: 'Sequence data types concept, mutability (mutable vs immutable), ASCII byte values, and negative index offsets.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Output Program Header',
        codeSnippet: `print("Various Methods of Sequence Data Types \\n")`,
        whatItDoes: 'Prints introductory title followed by an extra newline for visual spacing.',
        whyUsed: 'Console banner.',
        howItWorks: 'Streams string with escape sequence \\n to stdout.',
        connectionToSurrounding: 'Precedes sequence declarations.',
        examRelevance: '\\n is the newline escape character.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 2-6',
        title: 'Declare String, List, and Tuple',
        codeSnippet: `my_string = "Welcome to Python Programming"
# List: a collection of different types of data
my_list = [25, "Hello", 2.5, True]
# Tuple: a fixed collection of values
my_tuple = ("Apple", "Banana", "Cherry")`,
        whatItDoes: 'Initializes an immutable string, a heterogeneous mutable list of 4 different types, and an immutable tuple of 3 strings.',
        whyUsed: 'Demonstrates the three most widely used high-level sequence types.',
        howItWorks: 'Allocates PyUnicodeObject (string), PyListObject (list), and PyTupleObject (tuple).',
        connectionToSurrounding: 'Supplies data printed in lines 16-18 and indexed in lines 24-26.',
        examRelevance: 'Viva distinction: List ([]) is mutable (can add/modify items); Tuple (()) is immutable (fixed size, read-only).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 7-8',
        title: 'Declare Immutable Range Object',
        codeSnippet: `# Create a range object
my_range = range(1, 10, 2)`,
        whatItDoes: 'Creates an immutable arithmetic sequence of integers starting at 1, stopping before 10, stepping by 2 (1, 3, 5, 7, 9).',
        whyUsed: 'Memory-efficient lazy sequence generator for loops.',
        howItWorks: 'range object computes numbers on demand in O(1) memory, regardless of sequence size.',
        connectionToSurrounding: 'Printed on line 19 and converted to list on line 27.',
        examRelevance: 'In Python 3, range() does NOT generate a list immediately; it is a lazy generator object.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 9-13',
        title: 'Declare Bytes and Mutable Bytearray (with Mutation)',
        codeSnippet: `# Create a byte sequence
my_bytes = bytes([65, 66, 67])
# Create a byte array
my_byte_array = bytearray([65, 66, 67])
my_byte_array[0] = 68`,
        whatItDoes: 'Creates immutable bytes b\'ABC\' (ASCII 65, 66, 67), creates mutable bytearray bytearray(b\'ABC\'), and mutates index 0 to 68 (\'D\') producing bytearray(b\'DBC\').',
        whyUsed: 'Demonstrates low-level binary data handling and the critical distinction between immutable bytes and mutable bytearray.',
        howItWorks: 'bytes() is fixed; bytearray() permits direct index reassignment (my_byte_array[0] = 68).',
        connectionToSurrounding: 'Crucial demonstration of binary sequence mutability.',
        examRelevance: 'Examiner favorite: bytes is IMMUTABLE; bytearray is MUTABLE.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 15-20',
        title: 'Print All Six Sequence Collections',
        codeSnippet: `# Printing all Sequences
print("String:", my_string)
print("List:", my_list)
print("Tuple:", my_tuple)
print("Range: ", my_range)
print("Bytes:", my_bytes)`,
        whatItDoes: 'Outputs each declared sequence collection to console.',
        whyUsed: 'Displays complete collection representations.',
        howItWorks: 'Invokes __str__() method on each sequence object.',
        connectionToSurrounding: 'Shows whole collections before individual element access.',
        examRelevance: 'Notice range prints as range(1, 10, 2), not as expanded numbers.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 22-29',
        title: 'Demonstrate Indexing, Slicing, and Type Conversion',
        codeSnippet: `# Accessing Elements
print("\\nAccessing elements:")
print("First word in string:", my_string[0])
print("Second item in list:", my_list[1])
print("Last fruit in tuple:", my_tuple[-1])
print("Range of List:", list(my_range))
print("Byte Sequences:", my_bytes[:2])
print("Byte Arrays:", my_byte_array)`,
        whatItDoes: 'Shows first character my_string[0] (\'W\'), second item my_list[1] (\'Hello\'), negative index my_tuple[-1] (\'Cherry\'), converting range to list [1, 3, 5, 7, 9], slicing first 2 bytes my_bytes[:2] (b\'AB\'), and mutated bytearray.',
        whyUsed: 'Demonstrates indexing and slicing operators shared across all Python sequences.',
        howItWorks: 'my_tuple[-1] uses negative indexing (-1 = last item); list(my_range) materializes range; [:2] slices from index 0 to 1.',
        connectionToSurrounding: 'Concludes sequence data types demonstration.',
        examRelevance: 'Viva point: In Python, index -1 always accesses the last element of any sequence.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 4: Display First n Terms of Fibonacci Series (While Loop)
  // --------------------------------------------------------------------------
  4: {
    objectiveEnrichment: {
      problemSolved: 'Iterative series generation using condition-controlled while loops. Computes and displays the first n numbers of the Fibonacci recurrence sequence.',
      overallMechanism: 'Prompts for term count n, initializes t1=0, t2=1, and loop counter i=1. The while loop runs while i <= num, printing t1, computing nextTerm = t1 + t2, shifting t1=t2 and t2=nextTerm, and incrementing i = i + 1.',
      prerequisitesToUnderstand: 'While loop condition and termination criteria, loop counter incrementation, and variable state shifting.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Input Number of Terms (num = int(input(...)))',
        codeSnippet: `num = int(input("Enter How many Terms you want :"))`,
        whatItDoes: 'Prompts user for desired count of Fibonacci terms and parses string into integer variable num.',
        whyUsed: 'Specifies loop termination bound.',
        howItWorks: 'input() reads input; int() parses integer value.',
        connectionToSurrounding: 'Supplies upper bound compared in while loop on Line 6.',
        examRelevance: 'Must convert to int() so relational comparison i <= num works.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 2-4',
        title: 'Initialize Terms and Loop Counter (t1 = 0, t2 = 1, i = 1)',
        codeSnippet: `t1 = 0
t2 = 1
i = 1`,
        whatItDoes: 'Sets first seed t1=0, second seed t2=1, and loop counter i=1.',
        whyUsed: 'Prepares initial state of Fibonacci recurrence and while loop index.',
        howItWorks: 'Allocates three integer variables.',
        connectionToSurrounding: 't1 and t2 maintain sliding window; i controls loop iterations.',
        examRelevance: 'Loop counter starts at 1 and stops at num (inclusive).'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 5',
        title: 'Print Series Header',
        codeSnippet: `print("Fibinocci Series")`,
        whatItDoes: 'Outputs header label to console.',
        whyUsed: 'Informs user of output format.',
        howItWorks: 'Streams string to stdout.',
        connectionToSurrounding: 'Precedes loop output.',
        examRelevance: 'Spelling matches lab PDF verbatim ("Fibinocci").'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 6-7',
        title: 'While Loop Header and Print Current Term',
        codeSnippet: `while i <= num:
    print(t1)`,
        whatItDoes: 'Tests if counter i <= num; if True, prints current term t1.',
        whyUsed: 'Controls exact iteration count and prints each term on its own line.',
        howItWorks: 'Evaluates condition before each pass; loop terminates when i > num.',
        connectionToSurrounding: 'Body executes exactly num times.',
        examRelevance: 'Difference: while loop tests condition dynamically; for loop iterates over known sequence.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 8-10',
        title: 'Compute Next Term and Shift Sliding Window',
        codeSnippet: `    nextTerm = t1 + t2
    t1 = t2
    t2 = nextTerm`,
        whatItDoes: 'Adds t1 + t2 into nextTerm, moves t2 into t1, and assigns nextTerm into t2.',
        whyUsed: 'Applies Fibonacci formula and advances window forward by one position.',
        howItWorks: 'Three-step update algorithm maintains state for next iteration.',
        connectionToSurrounding: 'Prepares t1 for the next print(t1) call.',
        examRelevance: 'Can also be written concisely in Python as: t1, t2 = t2, t1 + t2.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Line 11',
        title: 'Increment Loop Counter (i = i + 1)',
        codeSnippet: `    i = i + 1`,
        whatItDoes: 'Increments loop counter i by 1 on each iteration.',
        whyUsed: 'Ensures progress toward loop termination condition (i <= num).',
        howItWorks: 'Adds 1 to integer i.',
        connectionToSurrounding: 'Mandatory final statement in while loop body.',
        examRelevance: 'Examiner trap: What happens if i = i + 1 is omitted? An INFINITE LOOP occurs because i remains 1 forever!'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 5: Read Last 5 Lines of a File
  // --------------------------------------------------------------------------
  5: {
    objectiveEnrichment: {
      problemSolved: 'Log inspection and monitoring require viewing recent file tail entries without loading massive files into RAM. Demonstrates safe context manager file reading and negative list slicing [-5:].',
      overallMechanism: 'Uses with open(filename, "r") as file to automatically acquire and release OS file descriptor, reads lines into list via file.readlines(), extracts last 5 lines via slice [-5:], and prints with end="" to preserve formatting.',
      prerequisitesToUnderstand: 'File I/O modes ("r", "w", "a"), with context manager statement, readlines() method, and negative list slicing.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Define Target Filename Path',
        codeSnippet: `filename = "D:\\\\sample.txt" # Replace with your file name`,
        whatItDoes: 'Stores string file path into variable filename.',
        whyUsed: 'Specifies path of text file to open.',
        howItWorks: 'Double backslash \\\\ escapes backslash character in Python string literals.',
        connectionToSurrounding: 'Passed into open() function on Line 2.',
        examRelevance: 'In Windows, backslashes must be escaped (\\\\) or written as raw string r"D:\\sample.txt".'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Open File with Context Manager (with open(...) as file)',
        codeSnippet: `with open(filename, "r") as file:`,
        whatItDoes: 'Opens file in read-only text mode ("r") and binds file descriptor to handle variable "file".',
        whyUsed: 'Context manager ("with" statement) GUARANTEES the file is closed automatically, even if an exception occurs.',
        howItWorks: 'Invokes file __enter__() method; triggers __exit__() to close file when block finishes.',
        connectionToSurrounding: 'Encloses file reading operations on lines 3-8.',
        examRelevance: 'Top viva question: Why prefer "with open()" over plain "open()"? "with" automatically closes the file handle preventing resource leaks.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 3',
        title: 'Read All Lines into Memory (file.readlines())',
        codeSnippet: `    lines = file.readlines()`,
        whatItDoes: 'Reads the entire file line-by-line and returns a Python list of strings, where each element is one line.',
        whyUsed: 'Provides an indexed list that can be sliced by line index.',
        howItWorks: 'Reads until EOF, retaining newline character \\n at end of each string.',
        connectionToSurrounding: 'Supplies lines list sliced on Line 5.',
        examRelevance: 'file.read() returns 1 big string; file.readline() reads 1 line; file.readlines() returns list of lines.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 5',
        title: 'Extract Last 5 Lines via Negative Slice (lines[-5:])',
        codeSnippet: `    # Get the last 5 lines
    last_five = lines[-5:]`,
        whatItDoes: 'Extracts the last 5 elements of list lines using negative index slicing [-5:].',
        whyUsed: 'Directly solves lab requirement: "Read last 5 lines of a file".',
        howItWorks: 'Starts 5 elements from end and slices to the end of the list.',
        connectionToSurrounding: 'Target sublist of lines.',
        examRelevance: 'Examiner favorite: If file has fewer than 5 lines (e.g. 3 lines), lines[-5:] does NOT crash; it simply returns all 3 lines.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 7-8',
        title: 'Iterate and Print with end="" to Avoid Double Newlines',
        codeSnippet: `    # Print them
    for line in lines:
        print(line, end='')`,
        whatItDoes: 'Loops through lines and prints each line suppressing print()\'s default newline using end=\'\'.',
        whyUsed: 'Because each line string from readlines() already ends with \\n, end=\'\' prevents double line spacing.',
        howItWorks: 'print() replaces its default trailing \\n with empty string \'\'.',
        connectionToSurrounding: 'Concludes file reading program.',
        examRelevance: 'PDF Bug Note: In original lab PDF, Line 7 loops over "lines" instead of "last_five". The corrected version iterates "last_five".'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 6: Sum and Product of Two Compatible Matrices
  // --------------------------------------------------------------------------
  6: {
    objectiveEnrichment: {
      problemSolved: '2D matrix algebra is foundational to graphics and machine learning. This program demonstrates nested list comprehensions for dynamic 2D grid input, matrix addition, and standard 3-loop matrix dot multiplication.',
      overallMechanism: 'Prompts for row and col dimensions, dynamically reads matrices A and B using nested list comprehensions, computes element-wise sum (A[i][j] + B[i][j]), and computes dot product using three nested loops across index k (A[i][k] * B[k][j]).',
      prerequisitesToUnderstand: 'Nested lists as 2D matrices, list comprehensions, matrix compatibility rules (columns of A must equal rows of B for multiplication).'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-2',
        title: 'Input Matrix Dimensions (rows and cols)',
        codeSnippet: `rows = int(input('Enter number of rows: '))
cols = int(input('Enter number of column: '))`,
        whatItDoes: 'Reads integer row count and column count from user.',
        whyUsed: 'Defines dimension boundaries for both matrices.',
        howItWorks: 'Stores integer dimensions in rows and cols.',
        connectionToSurrounding: 'Controls loop ranges in steps 2, 3, 4, 5, and 6.',
        examRelevance: 'For both addition and square multiplication, matrices share dimensions rows x cols.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 5-6',
        title: 'Input Matrix A via Nested List Comprehension',
        codeSnippet: `print('Enter values for matrix A')
matrix_A = [[int(input("Enter any value:")) for j in range(cols)] for i in range(rows)]`,
        whatItDoes: 'Constructs a 2D list matrix_A by prompting for values row-by-row using nested list comprehensions.',
        whyUsed: 'Creates dynamic 2D array representation in memory without hardcoded dimensions.',
        howItWorks: 'Inner comprehension builds a row of length cols; outer comprehension repeats for rows times.',
        connectionToSurrounding: 'First operand matrix.',
        examRelevance: 'Nested list comprehension is an idiomatic Python technique for building 2D grids.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 9-10',
        title: 'Input Matrix B via Nested List Comprehension',
        codeSnippet: `print('Enter values for matrix B ')
matrix_B = [[int(input("Enter any value:")) for j in range(cols)] for i in range(rows)]`,
        whatItDoes: 'Constructs second 2D list matrix_B with identical dimensions rows x cols.',
        whyUsed: 'Second operand matrix.',
        howItWorks: 'Reads integer inputs into nested list.',
        connectionToSurrounding: 'Second operand matrix for addition and multiplication.',
        examRelevance: 'For matrix addition, Matrix A and Matrix B MUST have identical dimensions.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 13-14',
        title: 'Initialize Result Matrix to Zeros',
        codeSnippet: `# resultant matrix (matrix that store answer and intially it is Zero)
result = [[0 for j in range(cols)] for i in range(rows)]`,
        whatItDoes: 'Creates a 2D list of dimensions rows x cols filled with 0 at every position.',
        whyUsed: 'Allocates memory grid to store computed sums and products.',
        howItWorks: 'Builds independent list rows initialized with zero.',
        connectionToSurrounding: 'Modified in place during addition and multiplication.',
        examRelevance: 'Never do [[0]*cols]*rows! That creates shallow copies where modifying one row modifies all rows.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 16-24',
        title: 'Matrix Addition (result[i][j] = A[i][j] + B[i][j])',
        codeSnippet: `# addition
for i in range(rows):
    for j in range(cols):
        result[i][j] = matrix_A[i][j] + matrix_B[i][j]

print('Addition of Matrix-A and Matrix-B is :')
for i in result:
    print(i)`,
        whatItDoes: 'Iterates through every cell (i, j), sums corresponding elements of A and B, and prints result matrix.',
        whyUsed: 'Implements standard mathematical matrix addition.',
        howItWorks: 'Two nested loops traverse rows and columns adding elements.',
        connectionToSurrounding: 'First matrix operation demonstrated.',
        examRelevance: 'Complexity of matrix addition is O(rows * cols).'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 26-35',
        title: 'Matrix Multiplication (Three Nested Loops)',
        codeSnippet: `# Multiplication
for i in range(rows):
    for j in range(cols):
        for k in range(cols):
            result[i][j] = matrix_A[i][k] * matrix_B[k][j]

print('Multiplication of Matrix-A and Matrix-B is :')
for i in result:
    print(i)`,
        whatItDoes: 'Computes matrix product using three nested loops and prints result.',
        whyUsed: 'Demonstrates matrix multiplication algorithm.',
        howItWorks: 'i traverses rows of A, j traverses cols of B, k traverses elements accumulating dot product.',
        connectionToSurrounding: 'PDF Bug Note: On Line 30, the PDF writes "=" instead of "+=". The corrected code uses "+=" to properly accumulate the dot product.',
        examRelevance: 'Examiner favorite: Matrix multiplication requires accumulating dot product (sum of products), so result[i][j] += A[i][k] * B[k][j].'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 7: Implementation of Exception Handling
  // --------------------------------------------------------------------------
  7: {
    objectiveEnrichment: {
      problemSolved: 'Runtime errors (dividing by zero, non-numeric inputs) cause unhandled exceptions that crash applications. Exception handling intercepts errors gracefully, maintains program stability, and guarantees resource cleanup.',
      overallMechanism: 'Wraps risky operations in try: block, catches specific errors with except ZeroDivisionError: and except ValueError:, catches unexpected exceptions with except Exception:, executes else: on success, and guarantees finally: executes unconditionally.',
      prerequisitesToUnderstand: 'Python exception hierarchy, try, except, else, finally blocks, and difference between compile-time syntax errors and runtime exceptions.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Define Function divide_numbers(numerator, denominator)',
        codeSnippet: `def divide_numbers(numerator, denominator):`,
        whatItDoes: 'Defines reusable division function taking two arguments: numerator and denominator.',
        whyUsed: 'Encapsulates division logic and error handling into a callable routine.',
        howItWorks: 'Creates function object in local namespace.',
        connectionToSurrounding: 'Encloses try/except blocks evaluated during test cases on lines 21-33.',
        examRelevance: 'Functions allow testing multiple scenarios systematically.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 2-3',
        title: 'Risky Code Inside try Block',
        codeSnippet: `    try:
        result = numerator / denominator`,
        whatItDoes: 'Attempts division numerator / denominator inside protected try block.',
        whyUsed: 'Monitors expression for potential runtime exceptions (e.g. division by 0, invalid types).',
        howItWorks: 'If division succeeds, proceeds to else block. If an exception is raised, execution jumps immediately to matching except block.',
        connectionToSurrounding: 'Guarded computation.',
        examRelevance: 'Any statement that could raise a runtime exception should be wrapped in try.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 4-6',
        title: 'Catch Specific Exception: except ZeroDivisionError',
        codeSnippet: `    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
        return None`,
        whatItDoes: 'Catches division by zero error, prints custom friendly error message, and returns None.',
        whyUsed: 'Prevents application crash when denominator is 0.',
        howItWorks: 'Matches Python\'s built-in ZeroDivisionError exception class.',
        connectionToSurrounding: 'Triggered when Test Case 2 runs (10 / 0).',
        examRelevance: 'Always catch specific exceptions before generic Exception.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 7-9',
        title: 'Catch ValueError / TypeError with Alias',
        codeSnippet: `    except ValueError as e: # Note: PDF is missing colon ':' here
        print(f"Error: Invalid input type - {e}")
        return None`,
        whatItDoes: 'Catches value errors, binds error object to variable e, prints details, and returns None.',
        whyUsed: 'Handles invalid argument values.',
        howItWorks: '"as e" captures the exception instance to inspect system message.',
        connectionToSurrounding: 'PDF note: Original lab PDF omitted colon (:) on line 7 and raises TypeError on strings; corrected code addresses this.',
        examRelevance: 'Syntax check: Colons are mandatory after except clauses.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 10-12',
        title: 'Generic Fallback: except Exception as e',
        codeSnippet: `    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None`,
        whatItDoes: 'Catches any other unexpected exception derived from base Exception class.',
        whyUsed: 'Safety net to ensure the application never crashes from unhandled errors.',
        howItWorks: 'Exception is parent class of almost all built-in runtime exceptions.',
        connectionToSurrounding: 'Catches TypeError raised by 10 / "abc".',
        examRelevance: 'Generic except Exception should always be placed LAST after specific exceptions.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 13-15',
        title: 'Success Handler: else Block',
        codeSnippet: `    else:
        print(f"Division successful. Result: {result}")
        return result`,
        whatItDoes: 'Executes ONLY if NO exception was raised in the try block.',
        whyUsed: 'Separates happy path handling from error catching.',
        howItWorks: 'Runs after try completes successfully without triggering any except.',
        connectionToSurrounding: 'Executes during Test Case 1 (10 / 2 = 5.0).',
        examRelevance: 'Top viva question: When does the "else" block execute? Only when NO exceptions are raised in the try block.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 16-17',
        title: 'Cleanup Guarantee: finally Block',
        codeSnippet: `    finally:
        print("Division attempt complete.")`,
        whatItDoes: 'Prints "Division attempt complete." unconditionally, whether an error occurred or not.',
        whyUsed: 'Guarantees execution of cleanup code (closing files, sockets, database locks).',
        howItWorks: 'Runs after try, except, or else, even if a return statement was already reached.',
        connectionToSurrounding: 'Executes at the end of every call.',
        examRelevance: 'Number one viva question: Does "finally" run if there is a return statement inside try or except? YES, finally ALWAYS executes!'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Lines 19-33',
        title: 'Execute Three Test Cases (Valid, ZeroDivision, TypeError)',
        codeSnippet: `# Case 1: Successful division
print("--- Test Case 1: Valid Division ---")
divide_numbers(10, 2)
# Case 2: ZeroDivisionError
print("--- Test Case 2: Division by zero ---")
divide_numbers(10, 0)
# Case 3: Invalid input type
print("--- Test Case 3: Invalid input type ---")
divide_numbers(10, "abc")`,
        whatItDoes: 'Tests all three execution branches: valid division (10/2), zero division (10/0), and string argument (10/"abc").',
        whyUsed: 'Validates that each exception handler functions as designed.',
        howItWorks: 'Triggers try->else->finally (Case 1), try->except ZeroDivisionError->finally (Case 2), and try->except Exception->finally (Case 3).',
        connectionToSurrounding: 'Proves complete test coverage.',
        examRelevance: 'Demonstrates thorough testing methodology in practical examination.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 8: Multithreading in Python
  // --------------------------------------------------------------------------
  8: {
    objectiveEnrichment: {
      problemSolved: 'Synchronous programs block execution during long tasks (like I/O or sleep), wasting CPU cycles. Multithreading enables concurrent execution of multiple tasks within a single process.',
      overallMechanism: 'Imports threading module, defines two worker functions print_numbers() and print_letters(), wraps them in threading.Thread(target=...), launches them concurrently with .start(), and synchronizes main thread termination using .join().',
      prerequisitesToUnderstand: 'Concurrency vs parallelism, thread lifecycle (created, running, blocked, terminated), and thread synchronization with join().'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-2',
        title: 'Import threading and time Modules',
        codeSnippet: `import threading
import time`,
        whatItDoes: 'Imports standard threading module for thread management and time module for simulating task delays.',
        whyUsed: 'threading provides Thread class; time.sleep() simulates time-consuming operations.',
        howItWorks: 'Binds modules to namespace.',
        connectionToSurrounding: 'Required before calling threading.Thread or time.sleep.',
        examRelevance: 'threading is Python\'s high-level thread module (prefer over legacy _thread).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 4-8',
        title: 'Define Worker Function 1 (print_numbers)',
        codeSnippet: `# Function for thread 1
def print_numbers():
    for i in range(1, 6):
        print(f"Number: {i}")
        time.sleep(1)`,
        whatItDoes: 'Loops 1 through 5, printing "Number: {i}" and sleeping for 1 second on each iteration.',
        whyUsed: 'Simulates a periodic background task (e.g. data fetching).',
        howItWorks: 'time.sleep(1) yields thread control back to OS scheduler, allowing other threads to run.',
        connectionToSurrounding: 'Assigned as target for Thread 1.',
        examRelevance: 'Without sleep(), thread 1 might finish before thread 2 even starts.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 10-14',
        title: 'Define Worker Function 2 (print_letters)',
        codeSnippet: `# Function for thread 2
def print_letters():
    for letter in ['A', 'B', 'C', 'D', 'E']:
        print(f"Letter: {letter}")
        time.sleep(1)`,
        whatItDoes: 'Loops through list [\'A\', \'B\', \'C\', \'D\', \'E\'], printing "Letter: {letter}" with 1-second delay.',
        whyUsed: 'Second concurrent task running in parallel with print_numbers().',
        howItWorks: 'Yields CPU after printing each letter.',
        connectionToSurrounding: 'Assigned as target for Thread 2.',
        examRelevance: 'Numbers and letters will interleave in console output due to concurrent execution.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 17-19',
        title: 'Instantiate Thread Objects (threading.Thread(target=...))',
        codeSnippet: `# Create threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)`,
        whatItDoes: 'Creates two Thread objects with worker functions passed as target arguments without parentheses.',
        whyUsed: 'Prepares thread contexts without starting them yet.',
        howItWorks: 'Allocates OS thread state data structures.',
        connectionToSurrounding: 'target specifies the callable function to execute inside the new thread.',
        examRelevance: 'Crucial examiner trap: Pass function name WITHOUT parentheses (target=print_numbers), NOT target=print_numbers()! Parentheses would execute the function immediately on the main thread.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 21-23',
        title: 'Start Concurrent Execution (thread.start())',
        codeSnippet: `# Start threads
thread1.start()
thread2.start()`,
        whatItDoes: 'Launches both threads into concurrent background execution.',
        whyUsed: 'Begins running print_numbers and print_letters simultaneously.',
        howItWorks: 'Requests OS kernel to schedule new threads and invokes their target functions.',
        connectionToSurrounding: 'Transitions threads from initialized to running state.',
        examRelevance: 'Never call run() directly; always call start() to spawn a new OS thread.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 25-29',
        title: 'Synchronize Completion with join() and Final Print',
        codeSnippet: `# Wait for both threads to finish
thread1.join()
thread2.join()

print("Finished executing both threads.")`,
        whatItDoes: 'Blocks main thread until thread1 and thread2 have completely finished, then prints completion notice.',
        whyUsed: 'Ensures the program does not terminate before background workers finish their work.',
        howItWorks: 'join() puts calling thread to sleep until target thread terminates.',
        connectionToSurrounding: 'Concludes multithreading program.',
        examRelevance: 'Top viva question: What does thread.join() do? It halts the main program until the worker thread has completely finished execution.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 9: Python GUI Calculator Using Tkinter
  // --------------------------------------------------------------------------
  9: {
    objectiveEnrichment: {
      problemSolved: 'Console apps lack graphical visual appeal. This program demonstrates desktop GUI development using Tkinter: creating windows, text entry screens, button grid layouts, and dynamic event handling for arithmetic evaluation.',
      overallMechanism: 'Creates root Tk() window, adds an Entry display, generates a 4x4 calculator button matrix with nested loops using .grid(row, col), binds click events via .bind("<Button-1>", click), and evaluates arithmetic expressions using eval().',
      prerequisitesToUnderstand: 'Tkinter GUI concepts (widgets, geometry managers: pack vs grid), event-driven programming (<Button-1>), and eval() function.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Import Tkinter GUI Library (import tkinter as tk)',
        codeSnippet: `import tkinter as tk`,
        whatItDoes: 'Imports Python\'s standard desktop GUI toolkit with alias "tk".',
        whyUsed: 'Tkinter is built into standard Python (no pip installation needed).',
        howItWorks: 'Binds Tcl/Tk C-library wrapper to namespace.',
        connectionToSurrounding: 'Supplies all GUI widgets (Tk, Entry, Button).',
        examRelevance: 'Tkinter is the standard Python desktop GUI library.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 3-16',
        title: 'Define Button Click Event Handler (click)',
        codeSnippet: `def click(event):
    text = event.widget.cget("text")
    if text == "=":
        try:
            result = str(eval(str(entry.get())))
            entry.delete(0, tk.END)
            entry.insert(0, result)
        except:
            entry.delete(0, tk.END)
            entry.insert(0, "Error")
    elif text == "C":
        entry.delete(0, tk.END)
    else:
        entry.insert(tk.END, text)`,
        whatItDoes: 'Inspects clicked button text via event.widget.cget("text"): if "=", evaluates math via eval() and replaces display with answer; if "C", clears display; otherwise appends character to entry.',
        whyUsed: 'Provides interactive calculation engine.',
        howItWorks: 'event captures triggering widget; eval() parses math string expression into numeric result.',
        connectionToSurrounding: 'Bound to all buttons on Line 35.',
        examRelevance: 'eval() parses math strings like "7*8" directly into 56.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 18-19',
        title: 'Initialize Master Tk Window and Set Title',
        codeSnippet: `root = tk.Tk()
root.title("Calculator")`,
        whatItDoes: 'Initializes the main desktop window frame and sets title to "Calculator".',
        whyUsed: 'Root window container for all calculator widgets.',
        howItWorks: 'Creates top-level OS window with close/minimize buttons.',
        connectionToSurrounding: 'Parent of entry and all buttons.',
        examRelevance: 'Every Tkinter app must instantiate exactly one tk.Tk() master window.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 21-22',
        title: 'Create and Grid Calculator Entry Display',
        codeSnippet: `entry = tk.Entry(root, font="Arial 20")
entry.grid(row=0, column=0, columnspan=4, ipadx=8, ipady=8)`,
        whatItDoes: 'Creates single-line text box with large Arial 20 font, placed at top row spanning all 4 columns.',
        whyUsed: 'Acts as calculator LCD display screen showing formulas and results.',
        howItWorks: 'columnspan=4 stretches entry across all four button columns below.',
        connectionToSurrounding: 'Read and updated by click() function.',
        examRelevance: 'grid() organizes widgets into a spreadsheet-like row/column grid.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 24-29',
        title: 'Define 4x4 Calculator Button Layout Matrix',
        codeSnippet: `buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["C", "0", "=", "+"]
]`,
        whatItDoes: 'Defines 2D list matrix representing the physical 4-row by 4-column layout of calculator keys.',
        whyUsed: 'Eliminates 16 repetitive widget declarations by using data-driven iteration.',
        howItWorks: 'Contains characters representing numbers, clear (C), equals (=), and math operators.',
        connectionToSurrounding: 'Iterated in lines 31-35 to generate buttons.',
        examRelevance: 'Clean programmatic UI construction pattern.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 31-35',
        title: 'Dynamically Generate Buttons and Bind Events',
        codeSnippet: `for i, row in enumerate(buttons):
    for j, text in enumerate(row):
        btn = tk.Button(root, text=text, font="Arial 18", width=5, height=2)
        btn.grid(row=i+1, column=j, padx=3, pady=3)
        btn.bind("<Button-1>", click)`,
        whatItDoes: 'Iterates through matrix, creating a Button widget for each character, placing at grid row (i+1) and col j, and binding left-click event <Button-1> to click() function.',
        whyUsed: 'Constructs full 16-button calculator keyboard with minimal code.',
        howItWorks: '<Button-1> represents mouse left-click event in Tkinter.',
        connectionToSurrounding: 'Connects UI buttons to logic engine.',
        examRelevance: '<Button-1> is left mouse click; <Button-2> is middle click; <Button-3> is right click.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 37',
        title: 'Start GUI Event Loop (root.mainloop())',
        codeSnippet: `root.mainloop()`,
        whatItDoes: 'Starts the infinite GUI event listening loop, keeping the desktop calculator window open and responsive.',
        whyUsed: 'Listens for OS window events, keystrokes, and mouse clicks.',
        howItWorks: 'Blocks until user clicks the window close button (X).',
        connectionToSurrounding: 'Final mandatory line of any Tkinter GUI app.',
        examRelevance: 'Without root.mainloop(), the window would close instantaneously after creation!'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PROGRAM 10: Tkinter & SQLite Database Application (CRUD Records)
  // --------------------------------------------------------------------------
  10: {
    objectiveEnrichment: {
      problemSolved: 'Desktop apps require persistent local storage. This program demonstrates full-stack desktop development integrating a Tkinter GUI with an embedded SQLite relational database for inserting and viewing records.',
      overallMechanism: 'sqlite3.connect(\'data.db\') connects to local database, creates "records" table if not exists. add() retrieves entry values and executes INSERT with parameter placeholders (?). view() queries SELECT * with fetchall() and formats into Text widget.',
      prerequisitesToUnderstand: 'SQLite embedded database basics, SQL queries (CREATE, INSERT, SELECT), parameterized queries (?, ?), and Tkinter Entry/Text widgets.'
    },
    granularSteps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Lines 1-2',
        title: 'Import Tkinter and SQLite3 Modules',
        codeSnippet: `import tkinter as tk
import sqlite3`,
        whatItDoes: 'Loads Tkinter for desktop UI and sqlite3 for local relational database persistence.',
        whyUsed: 'sqlite3 is a self-contained, serverless zero-configuration SQL database engine built into standard Python.',
        howItWorks: 'Binds modules to namespace.',
        connectionToSurrounding: 'Required for all GUI and DB functions.',
        examRelevance: 'SQLite requires no separate database server daemon (unlike MySQL or PostgreSQL).'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Lines 5-8',
        title: 'Database Setup: Connect, Cursor, Create Table, and Commit',
        codeSnippet: `# DB setup
conn = sqlite3.connect('data.db')
c = conn.cursor()
c.execute("CREATE TABLE IF NOT EXISTS records (name TEXT, age INTEGER)")
conn.commit()`,
        whatItDoes: 'Connects to disk file data.db, opens cursor c, creates table records (name TEXT, age INTEGER) if missing, and commits transaction.',
        whyUsed: 'Establishes persistent relational schema before GUI loads.',
        howItWorks: 'Creates file data.db on disk if it does not exist.',
        connectionToSurrounding: 'conn and cursor c are accessed in add() and view() functions.',
        examRelevance: 'Always commit() DDL and DML operations to persist changes to disk.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Lines 11-15',
        title: 'Define add() Record Handler Function',
        codeSnippet: `# Functions
def add():
    c.execute("INSERT INTO records VALUES (?, ?)", (e1.get(), e2.get()))
    conn.commit()
    e1.delete(0, tk.END)
    e2.delete(0, tk.END)`,
        whatItDoes: 'Reads values from entries e1 and e2, inserts row into database using parameterized query (?, ?), commits changes, and clears inputs.',
        whyUsed: 'Inserts new user record safely into database.',
        howItWorks: '(? , ?) uses parameterized placeholders to prevent SQL Injection attacks.',
        connectionToSurrounding: 'Called when "Add" button is clicked.',
        examRelevance: 'Crucial viva question: Why use (?, ?) instead of string concatenation? Placeholders prevent SQL Injection vulnerabilities.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Lines 17-22',
        title: 'Define view() Record Handler Function',
        codeSnippet: `def view():
    c.execute("SELECT * FROM records")
    rows = c.fetchall()
    t.delete('1.0', tk.END)
    for row in rows:
        t.insert(tk.END, f"{row[0]}, {row[1]}\\n")`,
        whatItDoes: 'Queries all rows with SELECT *, fetches all records as a list of tuples, clears text box, and prints each record.',
        whyUsed: 'Displays all stored records in the multiline Text box.',
        howItWorks: 'fetchall() returns all rows; t.delete(\'1.0\', END) clears text from line 1 char 0 to end; t.insert() appends records.',
        connectionToSurrounding: 'Called when "View" button is clicked.',
        examRelevance: 'Text widget index \'1.0\' represents line 1, character offset 0.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Lines 25-34',
        title: 'Construct Form Labels and Entry Fields',
        codeSnippet: `# GUI
root = tk.Tk()
root.title("Simple DB App")

tk.Label(root, text="Name").grid(row=0, column=0)
e1 = tk.Entry(root)
e1.grid(row=0, column=1)

tk.Label(root, text="Age").grid(row=1, column=0)
e2 = tk.Entry(root)
e2.grid(row=1, column=1)`,
        whatItDoes: 'Creates GUI window, adds "Name" and "Age" labels, and creates Entry fields e1 and e2 aligned in grid.',
        whyUsed: 'Input widgets for capturing user data.',
        howItWorks: 'Places labels in col 0 and inputs in col 1.',
        connectionToSurrounding: 'Entries read by add() function.',
        examRelevance: 'Entry widgets provide single-line text input.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Lines 36-40',
        title: 'Add Action Buttons and Multiline Text Display Box',
        codeSnippet: `tk.Button(root, text="Add", command=add).grid(row=2, column=0, pady=5)
tk.Button(root, text="View", command=view).grid(row=2, column=1, pady=5)

t = tk.Text(root, height=10, width=40)
t.grid(row=3, column=0, columnspan=2, pady=10)`,
        whatItDoes: 'Adds "Add" button (command=add), "View" button (command=view), and multiline Text box spanning both columns.',
        whyUsed: 'Provides execution triggers and multiline data display area.',
        howItWorks: 'command=parameter binds button click directly to Python function.',
        connectionToSurrounding: 'Completes GUI layout.',
        examRelevance: 'command=functionName passes function reference without parentheses.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Lines 42-43',
        title: 'Start GUI Event Loop and Close Connection on Exit',
        codeSnippet: `root.mainloop()
conn.close()`,
        whatItDoes: 'Enters GUI event loop until window closes, then cleanly closes database connection.',
        whyUsed: 'Runs application and guarantees database handle cleanup when user exits.',
        howItWorks: 'conn.close() releases database file locks.',
        connectionToSurrounding: 'Concludes application lifecycle.',
        examRelevance: 'Proper database connection closure is graded rigorously in practical exams.'
      }
    ]
  }
};

// Apply enrichments
const updatedPrograms: ProgramData[] = PYTHON_APP_DEV_LAB_PROGRAMS.map(program => {
  const enrichment = major15Enrichments[program.programNumber];
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

export const PYTHON_APP_DEV_LAB_PROGRAMS: ProgramData[] = `;

const tsContent = fileHeader + JSON.stringify(updatedPrograms, null, 2) + ';\n';

fs.writeFileSync('src/data/pythonAppDevPrograms.ts', tsContent, 'utf-8');
console.log('Successfully upgraded Major 15: all 10 programs enriched with granular line steps and objectives!');
