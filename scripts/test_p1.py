import os

ts_content = """import { ProgramData } from '../types';

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
        'Open terminal or command prompt in your practical working folder.',
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
  }
];
"""

with open('src/data/pythonAppDevPrograms.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Updated Program 1 in pythonAppDevPrograms.ts successfully")
"""
