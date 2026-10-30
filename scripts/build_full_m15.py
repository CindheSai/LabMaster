# scripts/build_full_m15.py
import json

def get_m15_programs():
    return """import { ProgramData } from '../types';

export const PYTHON_APP_DEV_LAB_PROGRAMS: ProgramData[] = [
  // ==========================================
  // PROGRAM 1
  // ==========================================
  {
    id: 301,
    subjectId: 'major-15',
    programNumber: 1,
    title: 'Menu-Driven Temperature Conversion (Celsius & Fahrenheit)',
    pdfQuestion: '1. Write a menu driven program to convert the given temperature from Fahrenheit to Celsius and Celsius to Fahrenheit.',
    shortDescription: 'Menu-driven console application to convert temperatures between Celsius and Fahrenheit scales with input validation.',
    technologies: ['Python'],
    originalCode: `print('1. Celsius to Fahrenheit.')
print('2. Fahrenheit to Celsius.')
choice = int(input('Enter your choice: '))
if choice == 1:
    c = float(input('Enter temperature in celsius: '))
    f = 9 * c / 5 + 32
    print('Temperature in fahrenheit scale:', f)
elif choice == 2:
    f = float(input('Enter temperature in fahrenheit: '))
    c = 5 * (f - 32) / 9
    print('Temperature in celsius scale:', c)
else:
    print('Invalid choice.')`,
    sampleOutputText: `1. Celsius to Fahrenheit.
2. Fahrenheit to Celsius.
Enter your choice: 1
Enter temperature in celsius: 37
Temperature in fahrenheit scale: 98.6

--- Second Run ---
1. Celsius to Fahrenheit.
2. Fahrenheit to Celsius.
Enter your choice: 2
Enter temperature in fahrenheit: 98.6
Temperature in celsius scale: 37.0`,
    runLocallyGuide: {
      fileName: 'program1_temp_converter.py',
      pythonSteps: [
        'Open terminal or command prompt in your working folder.',
        'Create a file named program1_temp_converter.py and paste the source code.',
        'Run: python program1_temp_converter.py',
        'Enter choice 1 or 2, then input the temperature value.'
      ],
      notes: 'Standard built-in Python — no external packages required.'
    },
    objective: {
      whatItDoes: 'Presents a two-option interactive menu to the user, reads their numeric selection, and performs mathematical temperature conversion using either Celsius to Fahrenheit (F = 9*C/5 + 32) or Fahrenheit to Celsius (C = 5*(F - 32)/9).',
      whyWritten: 'To demonstrate basic console input/output, conditional branching with if-elif-else, string-to-numeric type casting (int and float), and arithmetic expressions in Python.',
      problemSolved: 'Automates manual scientific temperature conversions while guarding against invalid choices.',
      overallMechanism: 'Displays console menu, accepts user choice, branches using relational equality, requests scale input, evaluates physics formula, and prints result.',
      prerequisitesToUnderstand: 'Python print() and input() functions, int() and float() type conversions, and if-elif-else branching.',
      conceptsDemonstrated: 'Menu-driven logic, input(), int() and float() type conversion, if-elif-else conditionals, floating-point arithmetic.',
      expectedOutputSummary: 'Displays menu options, prompts for user selection, takes temperature input, and prints the precisely converted temperature scale value.'
    },
    conceptsUsed: [
      { name: 'Menu-Driven Architecture', description: 'Listing distinct user actions labeled with numeric options so the user directs program flow.' },
      { name: 'Type Casting (int & float)', description: 'input() returns strings; int() converts the menu choice to integer, and float() converts temperature inputs to real numbers with decimals.' },
      { name: 'Conditional Branching (if-elif-else)', description: 'Executes mutually exclusive code blocks based on truth values of relational comparisons (choice == 1 or 2).' },
      { name: 'Arithmetic Formulas', description: 'Standard physics formulas for temperature conversion: F = (9/5)*C + 32 and C = (5/9)*(F - 32).' }
    ],
    steps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Display First Menu Choice (Celsius to Fahrenheit)',
        codeSnippet: `print('1. Celsius to Fahrenheit.')`,
        whatItDoes: 'Prints the first menu option string to standard console output.',
        whyUsed: 'Provides user-facing guidance on available operations.',
        howItWorks: 'The built-in print() writes characters to sys.stdout and emits \\n.',
        connectionToSurrounding: 'First line of execution; precedes option 2 on Line 2.',
        examRelevance: 'Always write clear prompt strings so external examiners understand options.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Display Second Menu Choice (Fahrenheit to Celsius)',
        codeSnippet: `print('2. Fahrenheit to Celsius.')`,
        whatItDoes: 'Outputs the second menu option string on a new line.',
        whyUsed: 'Informs the user that option 2 converts Fahrenheit to Celsius.',
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
        howItWorks: 'float() parses numbers with optional fractional component into IEEE 754 float.',
        connectionToSurrounding: 'Supplies variable c to the conversion formula on Line 6.',
        examRelevance: 'Explain why float() is chosen over int() for physical scientific units.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Line 6',
        title: 'Calculate Fahrenheit Temperature',
        codeSnippet: `    f = 9 * c / 5 + 32`,
        whatItDoes: 'Multiplies c by 9, divides by 5, and adds 32, storing the result in variable f.',
        whyUsed: 'Implements the Celsius-to-Fahrenheit physical formula F = (9/5)C + 32.',
        howItWorks: 'Multiplication and division have higher precedence than addition and evaluate left to right before adding 32.',
        connectionToSurrounding: 'Calculates f from c on Line 5; feeds result to print() on Line 7.',
        examRelevance: 'Operator precedence question: multiplication and division bind tighter than addition.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 7',
        title: 'Print Fahrenheit Output',
        codeSnippet: `    print('Temperature in fahrenheit scale:', f)`,
        whatItDoes: 'Displays the result message with the calculated Fahrenheit temperature.',
        whyUsed: 'Communicates the computed answer to the user.',
        howItWorks: 'print() joins text and numeric float with a default space character.',
        connectionToSurrounding: 'Completes Branch 1. Python then skips all remaining elif and else blocks.',
        examRelevance: 'Demonstrates clean output formatting.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Line 8',
        title: 'Check for Option 2 (elif choice == 2)',
        codeSnippet: `elif choice == 2:`,
        whatItDoes: 'Evaluates whether choice equals 2 if the first condition was False.',
        whyUsed: 'Branches into the Fahrenheit-to-Celsius conversion code block.',
        howItWorks: 'If True, enters indented lines 9-11. If False, jumps to else on Line 12.',
        connectionToSurrounding: 'Alternative branch for option 2.',
        examRelevance: 'elif prevents deep nested if-else indentation.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Line 9',
        title: 'Input Fahrenheit Value as Float',
        codeSnippet: `    f = float(input('Enter temperature in fahrenheit: '))`,
        whatItDoes: 'Prompts for Fahrenheit degrees and stores as float in variable f.',
        whyUsed: 'Captures the input for reverse temperature calculation.',
        howItWorks: 'Reads keyboard input and converts to float.',
        connectionToSurrounding: 'Supplies variable f to the formula on Line 10.',
        examRelevance: 'Only executes if choice 2 was selected.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Line 10',
        title: 'Calculate Celsius Temperature',
        codeSnippet: `    c = 5 * (f - 32) / 9`,
        whatItDoes: 'Subtracts 32 from f inside parentheses, multiplies by 5, and divides by 9, storing in c.',
        whyUsed: 'Implements the reverse conversion formula C = (5/9)(F - 32).',
        howItWorks: 'Parentheses force subtraction before multiplication and division.',
        connectionToSurrounding: 'Calculates c from f on Line 9; feeds result to print() on Line 11.',
        examRelevance: 'CRITICAL TRAP: Without parentheses, 5 * f - 32 / 9 would calculate (5*f) - 3.555 due to BODMAS rules!'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Line 11',
        title: 'Print Celsius Output',
        codeSnippet: `    print('Temperature in celsius scale:', c)`,
        whatItDoes: 'Outputs the result message with the computed Celsius value.',
        whyUsed: 'Presents the reverse converted result to the user.',
        howItWorks: 'Outputs string and float to console.',
        connectionToSurrounding: 'Completes Branch 2. Execution then terminates.',
        examRelevance: 'Displays the final converted scale.'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Line 12',
        title: 'Handle Invalid Choice (else:)',
        codeSnippet: `else:`,
        whatItDoes: 'Catches any choice other than 1 or 2 (e.g. 0, 3, or negative numbers).',
        whyUsed: 'Provides defensive programming and user guidance when input is out of range.',
        howItWorks: 'Executes unconditionally when preceding if and elif conditions evaluate to False.',
        connectionToSurrounding: 'Guards the warning on Line 13.',
        examRelevance: 'Always write the else block in menu-driven practical exam programs.'
      },
      {
        stepNumber: 13,
        lineNumberRange: 'Line 13',
        title: 'Print Invalid Choice Warning',
        codeSnippet: `    print('Invalid choice.')`,
        whatItDoes: 'Prints "Invalid choice." notification to the console.',
        whyUsed: 'Informs the user that their numeric selection was unrecognized.',
        howItWorks: 'Outputs string to standard output.',
        connectionToSurrounding: 'Final statement of the program.',
        examRelevance: 'Demonstrates graceful termination upon erroneous user input.'
      }
    ],
    executionFlow: [
      '1. Program begins sequential execution at line 1.',
      '2. Displays menu: 1. Celsius to Fahrenheit, 2. Fahrenheit to Celsius.',
      '3. Pauses on input(), user types selection and presses Enter.',
      '4. int() converts string to integer, stored in variable choice.',
      '5. Conditional branch evaluation: if choice == 1, prompts for Celsius float c, computes f = 9*c/5 + 32, prints Fahrenheit.',
      '6. If choice == 2, prompts for Fahrenheit float f, computes c = 5*(f-32)/9, prints Celsius.',
      '7. If choice is neither 1 nor 2, executes the else block and prints "Invalid choice."',
      '8. Script reaches end of file and exits cleanly.'
    ],
    outputExplanation: {
      description: 'The output cleanly maps user menu selection to the exact temperature calculation and unit label.',
      elementsBreakdown: [
        { element: '1. Celsius to Fahrenheit.', sourceLine: 'print(\\'1. Celsius to Fahrenheit.\\')', explanation: 'First menu option banner.' },
        { element: 'Enter your choice: 1', sourceLine: 'choice = int(input(...))', explanation: 'Interactive user input capture.' },
        { element: 'Temperature in fahrenheit scale: 98.6', sourceLine: 'print(\\'Temperature in fahrenheit scale:\\', f)', explanation: 'Computed floating-point result for body temperature 37°C.' }
      ]
    },
    examNotes: [
      { category: 'library_syntax', title: 'Why float() is Essential', description: 'Temperatures frequently have fractional values (e.g. 98.6°F, 36.5°C). Using int() for temperature would truncate fractional parts, losing crucial precision.' },
      { category: 'common_mistakes', title: 'Missing Parentheses Trap', description: 'In Fahrenheit to Celsius conversion, failing to wrap (f - 32) in parentheses causes 5 * f - 32 / 9, which evaluates (5*f) - (3.555) due to BODMAS rules.' },
      { category: 'pro_tips', title: 'String Equality Gotcha', description: 'If you omit int() and write choice = input(), you must test if choice == "1": with quotes. In the PDF code, int() is used so choice == 1 with numbers.' }
    ],
    vivaQuestions: [
      { question: 'What is the return type of Python\\'s built-in input() function?', answer: 'The input() function in Python 3 always returns a string (str), regardless of whether the user typed numbers or letters.', examinerTip: 'Mention that in Python 2 it was raw_input(), but in Python 3 it is input().' },
      { question: 'What will happen if the user enters "hello" when prompted for choice?', answer: 'Python raises a ValueError: invalid literal for int() with base 10: \\'hello\\', terminating the program unless wrapped in a try-except block.', examinerTip: 'Examiners appreciate candidates who mention exception handling.' },
      { question: 'Explain the difference between / and // operators in Python.', answer: '/ is the true division operator which always returns a float (e.g. 5 / 2 is 2.5). // is floor division which returns the quotient truncated to the nearest whole number (e.g. 5 // 2 is 2).', examinerTip: 'Both temperature formulas require true division /.' },
      { question: 'At what temperature are Celsius and Fahrenheit scales identical?', answer: 'At -40 degrees (-40°C = -40°F). Proof: -40 * 9 / 5 + 32 = -72 + 32 = -40.', examinerTip: 'A classic favorite trivia question asked by physics and computer science external examiners.' }
    ],
    previewType: 'python-app-simulation',
    simulationType: 'temp-converter'
  },

  // ==========================================
  // PROGRAM 2
  // ==========================================
  {
    id: 302,
    subjectId: 'major-15',
    programNumber: 2,
    title: 'Student Marks, Percentage and Grade Calculation',
    pdfQuestion: '2. Write a program to calculate the total marks, percentage and grade of a student for 3 subjects. (Take marks of 3 subjects as input)',
    shortDescription: 'Calculate total marks, percentage, and assigned letter grade using nested conditional elif ladders (Notes PDF code discrepancy).',
    technologies: ['Python'],
    originalCode: `subject_1 = int(input("Enter Subject1 Marks:"))
subject_2 = int(input("Enter Subject2 Marks:"))
subject_3 = int(input("Enter Subject3 Marks:"))
subject_4 = int(input("Enter Subject4 Marks:"))
subject_5 = int(input("Enter Subject5 Marks:"))

total, average, percentage, grade = None, None, None, None

total = subject_1 + subject_2 + subject_3 + subject_4 + subject_5
average = total / 5.0
percentage = (total / 500.0) * 100

if average >= 80:
    grade = 'A'
elif average >= 70 and average < 80:
    grade = 'B'
elif average >= 60 and average < 70:
    grade = 'C'
elif average >= 40 and average < 60:
    grade = 'D'
else:
    grade = 'E'

print("The Total marks is:", total)
print("The Percentage is:", percentage)
print("The Grade is:", grade)`,
    correctedCode: `# Exact 3-Subject Implementation matching the PDF Question Statement
subject_1 = int(input("Enter Subject 1 Marks (out of 100): "))
subject_2 = int(input("Enter Subject 2 Marks (out of 100): "))
subject_3 = int(input("Enter Subject 3 Marks (out of 100): "))

total = subject_1 + subject_2 + subject_3
average = total / 3.0
percentage = (total / 300.0) * 100

if average >= 80:
    grade = 'A'
elif average >= 70:
    grade = 'B'
elif average >= 60:
    grade = 'C'
elif average >= 40:
    grade = 'D'
else:
    grade = 'E'

print("The Total marks is:", total)
print("The Percentage is:", round(percentage, 2))
print("The Grade is:", grade)`,
    correctionExplanation: 'Important PDF Discrepancy: The question statement in the PDF explicitly specifies 3 subjects ("for 3 subjects. Take marks of 3 subjects as input"), but the source code provided immediately beneath it prompts for 5 subjects (subject_1 to subject_5) and divides by 500.0. In LabMaster, the exact 5-subject code from the PDF is preserved verbatim as primary, and a dedicated 3-subject version is provided in the Modern/Corrected tab.',
    sampleOutputText: `Enter Subject1 Marks: 85
Enter Subject2 Marks: 78
Enter Subject3 Marks: 92
Enter Subject4 Marks: 65
Enter Subject5 Marks: 88
The Total marks is: 408
The Percentage is: 81.6
The Grade is: A`,
    runLocallyGuide: {
      fileName: 'program2_student_grade.py',
      pythonSteps: [
        'Save code as program2_student_grade.py.',
        'Run: python program2_student_grade.py',
        'Enter marks (e.g. 85, 78, 92, 65, 88).',
        'Inspect total, percentage, and calculated grade output.'
      ],
      notes: 'Ensure marks are entered as integers between 0 and 100.'
    },
    objective: {
      whatItDoes: 'Takes individual subject marks as input, calculates the aggregate total, computes the percentage over the maximum possible score, and assigns a qualitative grade (A, B, C, D, or E) using an elif conditional grading ladder.',
      whyWritten: 'To teach multi-variable initialization, compound arithmetic expressions, logical AND operators (and), and multi-way branching using elif ladders.',
      problemSolved: 'Automates academic evaluation by converting raw scores into cumulative totals, percentages, and official letter grades.',
      overallMechanism: 'Collects five numerical subject marks, initializes accumulator variables, computes total and percentage using floating-point division, evaluates the threshold conditional ladder, and outputs results.',
      prerequisitesToUnderstand: 'Integer input casting, arithmetic operators (+, /, *), logical and operators, and descending threshold conditional statements.',
      conceptsDemonstrated: 'Multiple variable assignment (tuple unpacking with None), input casting, arithmetic operators (+, /, *), relational operators (>=, <), logical operator (and), chained conditionals.',
      expectedOutputSummary: 'Displays the sum of all subject marks, percentage score, and final grade category.'
    },
    conceptsUsed: [
      { name: 'Multiple Variable Initialization', description: 'total, average, percentage, grade = None, None, None, None sets up variables before assignment.' },
      { name: 'Accumulation / Summation', description: 'Adding multiple inputs together to form an aggregate total score.' },
      { name: 'Percentage Formula', description: 'percentage = (obtained_marks / maximum_marks) * 100.' },
      { name: 'Logical and Operator', description: 'Combines two boolean expressions, evaluating to True only if both conditions are satisfied.' },
      { name: 'Grading Ladder', description: 'A sequential cascade of thresholds: >= 80 (A), 70-79 (B), 60-69 (C), 40-59 (D), below 40 (E).' }
    ],
    steps: [
      {
        stepNumber: 1,
        lineNumberRange: 'Line 1',
        title: 'Input Subject 1 Marks',
        codeSnippet: `subject_1 = int(input("Enter Subject1 Marks:"))`,
        whatItDoes: 'Prompts for Subject 1 score, reads input, and casts to integer variable subject_1.',
        whyUsed: 'Captures the first academic score component.',
        howItWorks: 'input() blocks for user entry; int() converts string characters to integer.',
        connectionToSurrounding: 'First input statement; followed by Subject 2 on Line 2.',
        examRelevance: 'Be ready to explain why the PDF inputs 5 subjects while the question specifies 3.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Input Subject 2 Marks',
        codeSnippet: `subject_2 = int(input("Enter Subject2 Marks:"))`,
        whatItDoes: 'Prompts for Subject 2 score and stores as integer in subject_2.',
        whyUsed: 'Captures second mark component.',
        howItWorks: 'Reads keystrokes and stores parsed integer in memory.',
        connectionToSurrounding: 'Follows Subject 1 and precedes Subject 3.',
        examRelevance: 'Ensures each subject has an isolated variable.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 3',
        title: 'Input Subject 3 Marks',
        codeSnippet: `subject_3 = int(input("Enter Subject3 Marks:"))`,
        whatItDoes: 'Prompts for Subject 3 score and stores as integer in subject_3.',
        whyUsed: 'Captures third mark component.',
        howItWorks: 'Stores integer in variable subject_3.',
        connectionToSurrounding: 'Follows Subject 2 and precedes Subject 4.',
        examRelevance: 'In the 3-subject question variant, input collection stops here.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 4',
        title: 'Input Subject 4 Marks',
        codeSnippet: `subject_4 = int(input("Enter Subject4 Marks:"))`,
        whatItDoes: 'Prompts for Subject 4 score and stores as integer in subject_4.',
        whyUsed: 'Captures fourth mark component for 5-subject code in PDF.',
        howItWorks: 'Reads keystrokes and stores integer.',
        connectionToSurrounding: 'Follows Subject 3 and precedes Subject 5.',
        examRelevance: 'Present in the PDF code.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 5',
        title: 'Input Subject 5 Marks',
        codeSnippet: `subject_5 = int(input("Enter Subject5 Marks:"))`,
        whatItDoes: 'Prompts for Subject 5 score and stores as integer in subject_5.',
        whyUsed: 'Completes mark collection for all five subjects.',
        howItWorks: 'Stores final subject mark in variable subject_5.',
        connectionToSurrounding: 'Concludes input phase; precedes variable initialization on Line 7.',
        examRelevance: 'Marks collection phase is now complete.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Line 7',
        title: 'Initialize Metrics to None using Tuple Unpacking',
        codeSnippet: `total, average, percentage, grade = None, None, None, None`,
        whatItDoes: 'Initializes four variables simultaneously to None in a single statement.',
        whyUsed: 'Explicitly defines variable names in the local scope before computation, preventing NameError bugs.',
        howItWorks: 'Creates a 4-element tuple (None, None, None, None) and unpacks it sequentially.',
        connectionToSurrounding: 'Sets up memory slots for calculations on Lines 9-11.',
        examRelevance: 'Viva question: What is None in Python? Answer: A singleton object of NoneType representing absence of value.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 9',
        title: 'Calculate Total Marks Sum',
        codeSnippet: `total = subject_1 + subject_2 + subject_3 + subject_4 + subject_5`,
        whatItDoes: 'Adds all 5 subject scores together and assigns the sum to variable total.',
        whyUsed: 'Forms the aggregate mark required for average and percentage.',
        howItWorks: 'Evaluates addition operators from left to right.',
        connectionToSurrounding: 'Uses inputs from Lines 1-5; supplies total to Lines 10 and 11.',
        examRelevance: 'Simple accumulator statement.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Line 10',
        title: 'Calculate Floating-Point Average',
        codeSnippet: `average = total / 5.0`,
        whatItDoes: 'Divides total marks by 5.0 to calculate mean score per subject.',
        whyUsed: 'Determines the baseline metric used for grade bracket testing.',
        howItWorks: 'Using literal float 5.0 explicitly enforces floating-point true division.',
        connectionToSurrounding: 'Feeds average to the conditional ladder starting on Line 13.',
        examRelevance: 'In Python 3, / is always true division; using 5.0 emphasizes float fidelity.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Line 11',
        title: 'Calculate Percentage over 500',
        codeSnippet: `percentage = (total / 500.0) * 100`,
        whatItDoes: 'Divides total by 500.0 maximum possible marks and multiplies by 100.',
        whyUsed: 'Converts aggregate score to a 0-100 percentage scale.',
        howItWorks: 'Parentheses evaluate (total / 500.0) first, then multiply by 100.',
        connectionToSurrounding: 'Stores percentage printed on Line 26.',
        examRelevance: 'Because 500 / 5 = 100, the percentage and average are numerically identical.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Lines 13-14',
        title: 'Evaluate Grade A Condition',
        codeSnippet: `if average >= 80:\\n    grade = 'A'`,
        whatItDoes: 'Tests if average is 80 or higher; if True, assigns string \\'A\\' to grade.',
        whyUsed: 'Assigns top honors grade.',
        howItWorks: 'If average >= 80 is True, executes grade = \\'A\\' and skips all subsequent elif/else blocks.',
        connectionToSurrounding: 'First threshold in the grading cascade.',
        examRelevance: 'Relational operator >= means greater than or equal to.'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Lines 15-16',
        title: 'Evaluate Grade B Condition with Logical AND',
        codeSnippet: `elif average >= 70 and average < 80:\\n    grade = 'B'`,
        whatItDoes: 'Checks if average is in the bracket [70, 80); if True, assigns \\'B\\'.',
        whyUsed: 'Assigns second-tier grade.',
        howItWorks: 'Evaluates logical and operator: both sub-conditions must be True.',
        connectionToSurrounding: 'Follows Grade A test; precedes Grade C test on Line 17.',
        examRelevance: 'Note: Python also supports chained syntax: 70 <= average < 80.'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Lines 17-18',
        title: 'Evaluate Grade C Condition',
        codeSnippet: `elif average >= 60 and average < 70:\\n    grade = 'C'`,
        whatItDoes: 'Checks if average is between 60 and 69.99; assigns \\'C\\'.',
        whyUsed: 'Assigns third-tier grade.',
        howItWorks: 'Tested only if average < 70.',
        connectionToSurrounding: 'Follows Grade B test; precedes Grade D test on Line 19.',
        examRelevance: 'Demonstrates cascading conditional logic.'
      },
      {
        stepNumber: 13,
        lineNumberRange: 'Lines 19-20',
        title: 'Evaluate Grade D Condition',
        codeSnippet: `elif average >= 40 and average < 60:\\n    grade = 'D'`,
        whatItDoes: 'Checks if average is between 40 and 59.99; assigns \\'D\\'.',
        whyUsed: 'Assigns passing threshold grade.',
        howItWorks: 'Executes if average >= 40 but less than 60.',
        connectionToSurrounding: 'Follows Grade C test; precedes failing grade else on Line 21.',
        examRelevance: '40 is the traditional passing threshold in university exams.'
      },
      {
        stepNumber: 14,
        lineNumberRange: 'Lines 21-22',
        title: 'Default Grade E (Failing Tier)',
        codeSnippet: `else:\\n    grade = 'E'`,
        whatItDoes: 'Assigns grade \\'E\\' to any student with average below 40.',
        whyUsed: 'Handles failing performance.',
        howItWorks: 'Executes unconditionally if all preceding brackets were False.',
        connectionToSurrounding: 'Concludes the grading ladder.',
        examRelevance: 'Guarantees grade variable always has a valid string value.'
      },
      {
        stepNumber: 15,
        lineNumberRange: 'Lines 24-26',
        title: 'Print Total, Percentage, and Grade Output',
        codeSnippet: `print("The Total marks is:", total)\\nprint("The Percentage is:", percentage)\\nprint("The Grade is:", grade)`,
        whatItDoes: 'Outputs the final total marks, percentage, and letter grade to the console.',
        whyUsed: 'Presents the computed academic summary.',
        howItWorks: 'Three sequential print() statements each print label and value on separate lines.',
        connectionToSurrounding: 'Final output phase concluding the program.',
        examRelevance: 'Display labels match the PDF expected output format.'
      }
    ],
    executionFlow: [
      '1. Program inputs 5 subject marks in sequence: subject_1 to subject_5.',
      '2. Variables total, average, percentage, grade are initialized to None.',
      '3. Calculates total as subject_1 + subject_2 + subject_3 + subject_4 + subject_5.',
      '4. Calculates average as total / 5.0.',
      '5. Calculates percentage as (total / 500.0) * 100.',
      '6. Evaluates conditional ladder: checks >= 80 for grade A, 70-79 for B, 60-69 for C, 40-59 for D, otherwise E.',
      '7. Prints total marks, percentage, and assigned grade.'
    ],
    outputExplanation: {
      description: 'Summarizes student marks, percentage, and assigned academic grade.',
      elementsBreakdown: [
        { element: 'The Total marks is: 408', sourceLine: 'print("The Total marks is:", total)', explanation: 'Sum of 85 + 78 + 92 + 65 + 88.' },
        { element: 'The Percentage is: 81.6', sourceLine: 'print("The Percentage is:", percentage)', explanation: '408 / 500.0 * 100.' },
        { element: 'The Grade is: A', sourceLine: 'print("The Grade is:", grade)', explanation: 'Satisfies average >= 80 criterion.' }
      ]
    },
    examNotes: [
      { category: 'common_mistakes', title: 'PDF Question vs Code Mismatch', description: 'Crucial: The question mentions 3 subjects, but the PDF source code inputs 5 subjects. If an examiner asks why 5 subjects are present, explain that you implemented the exact code from the syllabus manual while also understanding the 3-subject variation.' },
      { category: 'library_syntax', title: 'Redundant Condition in elif', description: 'In `elif average >= 70 and average < 80:`, the `and average < 80` clause is technically redundant because if average was >= 80, the first `if` would have already executed. However, writing it explicitly is great for clarity.' },
      { category: 'pro_tips', title: 'Chained Comparison Syntax', description: 'Python uniquely supports mathematical chained comparison syntax like `70 <= average < 80`, which is more concise and readable than using `and`.' }
    ],
    vivaQuestions: [
      { question: 'What is the purpose of initializing variables to None before use?', answer: 'It defines the variable names in the local namespace and makes their intended presence explicit, preventing NameError exceptions if referenced before assignment.', examinerTip: 'Mention that None is Python\\'s null equivalent.' },
      { question: 'How can you format percentage to 2 decimal places in Python?', answer: 'Using formatted string literals: f"{percentage:.2f}" or using round(percentage, 2).', examinerTip: 'External examiners frequently ask for f-string formatting.' },
      { question: 'What is short-circuit evaluation in Python logical operators?', answer: 'With the and operator, if the left-hand operand evaluates to False, Python immediately stops and returns False without evaluating the right-hand operand, saving CPU cycles.', examinerTip: 'Give an example: False and (x / 0 == 0) will not crash because the division is never evaluated.' },
      { question: 'Can grade evaluation be done using a match-case statement in modern Python?', answer: 'Yes! Python 3.10 introduced structural pattern matching with match-case and guard conditions (e.g. case avg if avg >= 80:).', examinerTip: 'Shows you know modern Python 3.10+ language features.' }
    ],
    previewType: 'python-app-simulation',
    simulationType: 'student-grade'
  }
];
"""
"""
