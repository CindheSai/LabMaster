import os

content = '''import { ProgramData } from '../types';

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
      whatItDoes: 'Presents an interactive numeric menu to the user, reads their selection, and performs mathematical temperature conversion using either Celsius to Fahrenheit (F = 9*C/5 + 32) or Fahrenheit to Celsius (C = 5*(F - 32)/9).',
      whyWritten: 'To demonstrate basic console input/output, conditional branching with if-elif-else, string-to-numeric type casting (int and float), and arithmetic expressions in Python.',
      problemSolved: 'Eliminates manual temperature conversion errors by automating scientific physics formulas in a user-friendly console application.',
      overallMechanism: 'Executes sequentially: prints menu options, waits for keyboard input, parses choice into an integer, branches to the corresponding formula, and outputs the result.',
      prerequisitesToUnderstand: 'Understanding of standard I/O (print and input), data types (str, int, float), and boolean comparison operators (==).',
      conceptsDemonstrated: 'Menu-driven logic, input(), int() and float() type conversion, if-elif-else conditionals, floating-point arithmetic.',
      expectedOutputSummary: 'Displays menu options, prompts for user selection, takes temperature input, and prints the precisely converted temperature scale value.'
    },
    conceptsUsed: [
      { name: 'Menu-Driven Architecture', description: 'Listing distinct user actions labeled with numeric options so the user directs program execution flow.' },
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
        whatItDoes: 'Outputs the first menu item string to standard console output followed by an automatic newline.',
        whyUsed: 'Informs the user that typing 1 will convert a Celsius temperature into Fahrenheit.',
        howItWorks: 'The built-in print() function writes the string bytes to sys.stdout and emits \\n.',
        connectionToSurrounding: 'Acts as the opening statement of the program; sets up the menu choices before the second print statement on line 2.',
        examRelevance: 'Clear console prompts demonstrate good UX design in practical examinations.'
      },
      {
        stepNumber: 2,
        lineNumberRange: 'Line 2',
        title: 'Display Second Menu Choice (Fahrenheit to Celsius)',
        codeSnippet: `print('2. Fahrenheit to Celsius.')`,
        whatItDoes: 'Outputs the second menu item string to the console on a new line.',
        whyUsed: 'Informs the user that typing 2 will convert a Fahrenheit temperature into Celsius.',
        howItWorks: 'Standard print() call writing text to stdout.',
        connectionToSurrounding: 'Completes the visual menu list started in line 1, preparing the user for the prompt in line 3.',
        examRelevance: 'Always ensure both menu options are displayed before prompting for input.'
      },
      {
        stepNumber: 3,
        lineNumberRange: 'Line 3',
        title: 'Prompt for Choice and Convert to Integer',
        codeSnippet: `choice = int(input('Enter your choice: '))`,
        whatItDoes: 'Prompts the user with "Enter your choice: ", pauses execution until Enter is pressed, and converts the string input into an integer stored in variable choice.',
        whyUsed: 'input() returns a string (str). Comparing a string "1" with integer 1 would fail because types differ. int() guarantees numeric equality.',
        howItWorks: 'input() blocks the thread until keyboard submission. int() converts the ASCII characters to a base-10 integer object in RAM.',
        connectionToSurrounding: 'Stores the user decision in choice, which controls all conditional evaluation in lines 4, 8, and 12.',
        examRelevance: 'Examiners frequently ask: "What happens if we omit int()?" Answer: The if conditions (choice == 1) evaluate to False because "1" != 1.'
      },
      {
        stepNumber: 4,
        lineNumberRange: 'Line 4',
        title: 'Evaluate First Condition (if choice == 1)',
        codeSnippet: `if choice == 1:`,
        whatItDoes: 'Compares the value stored in variable choice with the literal integer 1 using the equality operator ==.',
        whyUsed: 'Directs execution into the Celsius-to-Fahrenheit branch if the user selected option 1.',
        howItWorks: 'If choice equals 1, evaluates to True and enters the indented block (lines 5-7). Otherwise, jumps directly to elif on line 8.',
        connectionToSurrounding: 'Acts as the primary decision gate following choice input on line 3.',
        examRelevance: 'Remember that == is the comparison operator; a single = is the assignment operator.'
      },
      {
        stepNumber: 5,
        lineNumberRange: 'Line 5',
        title: 'Input Celsius Temperature as Float',
        codeSnippet: `    c = float(input('Enter temperature in celsius: '))`,
        whatItDoes: 'Prompts the user for temperature in Celsius and converts the string into a floating-point number stored in variable c.',
        whyUsed: 'Temperatures frequently include decimal values (e.g. 36.6°C). Using int() would drop fractional precision.',
        howItWorks: 'float() converts string digits with optional decimal point to IEEE 754 double-precision float.',
        connectionToSurrounding: 'Supplies the input operand c required by the mathematical formula on line 6.',
        examRelevance: 'Explain why float() is chosen over int() for physical measurements.'
      },
      {
        stepNumber: 6,
        lineNumberRange: 'Line 6',
        title: 'Apply Celsius to Fahrenheit Conversion Formula',
        codeSnippet: `    f = 9 * c / 5 + 32`,
        whatItDoes: 'Multiplies Celsius c by 9, divides by 5, and adds 32, assigning the result to variable f.',
        whyUsed: 'Implements the standard thermodynamic conversion formula F = (9/5)C + 32.',
        howItWorks: 'Operator precedence: multiplication (*) and division (/) have higher precedence than addition (+) and evaluate left-to-right before + 32.',
        connectionToSurrounding: 'Uses c from line 5 and produces the Fahrenheit value f printed on line 7.',
        examRelevance: 'Operator precedence question: 9 * c / 5 + 32 does NOT need parentheses because * and / bind tighter than +.'
      },
      {
        stepNumber: 7,
        lineNumberRange: 'Line 7',
        title: 'Print Calculated Fahrenheit Result',
        codeSnippet: `    print('Temperature in fahrenheit scale:', f)`,
        whatItDoes: 'Prints the descriptive text along with the calculated float value of f.',
        whyUsed: 'Displays the final answer to the user.',
        howItWorks: 'print() joins multiple arguments with a default space character.',
        connectionToSurrounding: 'Completes the execution of Branch 1. Execution then skips all subsequent elif and else branches.',
        examRelevance: 'Notice how comma-separated arguments in print() automatically insert a single space.'
      },
      {
        stepNumber: 8,
        lineNumberRange: 'Line 8',
        title: 'Evaluate Alternative Condition (elif choice == 2)',
        codeSnippet: `elif choice == 2:`,
        whatItDoes: 'Tests if the user entered 2 when the first if condition was False.',
        whyUsed: 'Directs execution into the Fahrenheit-to-Celsius branch.',
        howItWorks: 'Evaluated only if choice == 1 was False. If choice is 2, enters the indented block (lines 9-11).',
        connectionToSurrounding: 'Branches from line 4 when choice != 1; if False, passes control to else on line 12.',
        examRelevance: 'elif is short for "else if" and prevents excessive rightward indentation.'
      },
      {
        stepNumber: 9,
        lineNumberRange: 'Line 9',
        title: 'Input Fahrenheit Temperature as Float',
        codeSnippet: `    f = float(input('Enter temperature in fahrenheit: '))`,
        whatItDoes: 'Prompts the user for Fahrenheit temperature and converts the string into a float stored in variable f.',
        whyUsed: 'Captures the input for reverse temperature calculation.',
        howItWorks: 'float(input()) reads keyboard input and parses into decimal float representation.',
        connectionToSurrounding: 'Supplies variable f to the formula on line 10.',
        examRelevance: 'Ensure students understand that input is only requested if choice 2 was actually selected.'
      },
      {
        stepNumber: 10,
        lineNumberRange: 'Line 10',
        title: 'Apply Fahrenheit to Celsius Conversion Formula',
        codeSnippet: `    c = 5 * (f - 32) / 9`,
        whatItDoes: 'Subtracts 32 from fahrenheit f inside parentheses, multiplies by 5, and divides by 9, storing the result in variable c.',
        whyUsed: 'Implements the reverse conversion formula C = (5/9)(F - 32).',
        howItWorks: 'Parentheses (f - 32) explicitly override default precedence, forcing subtraction to happen before multiplication and division.',
        connectionToSurrounding: 'Produces value c printed on line 11.',
        examRelevance: 'CRITICAL TRAP: Without parentheses, 5 * f - 32 / 9 would evaluate (5*f) - (32/9) = (5*f) - 3.555 due to BODMAS rules!'
      },
      {
        stepNumber: 11,
        lineNumberRange: 'Line 11',
        title: 'Print Calculated Celsius Result',
        codeSnippet: `    print('Temperature in celsius scale:', c)`,
        whatItDoes: 'Displays the result message with the computed Celsius value c.',
        whyUsed: 'Presents the calculated temperature scale to the user.',
        howItWorks: 'Writes string and float value to stdout.',
        connectionToSurrounding: 'Completes Branch 2. Execution then terminates.',
        examRelevance: 'Standard clean output statement.'
      },
      {
        stepNumber: 12,
        lineNumberRange: 'Line 12',
        title: 'Fallback Branch Header (else:)',
        codeSnippet: `else:`,
        whatItDoes: 'Catches any choice value that is neither 1 nor 2 (e.g. 0, 3, 99, or -1).',
        whyUsed: 'Provides defensive error handling against out-of-range user inputs.',
        howItWorks: 'Executes unconditionally if both line 4 (choice == 1) and line 8 (choice == 2) evaluate to False.',
        connectionToSurrounding: 'Follows all if/elif options; guards the invalid choice notification on line 13.',
        examRelevance: 'Always write the else block in menu-driven practical exam programs to demonstrate robust coding.'
      },
      {
        stepNumber: 13,
        lineNumberRange: 'Line 13',
        title: 'Print Invalid Choice Warning',
        codeSnippet: `    print('Invalid choice.')`,
        whatItDoes: 'Informs the user that their numeric selection was unrecognized.',
        whyUsed: 'Provides clear diagnostic feedback to the user.',
        howItWorks: 'Outputs string to standard output and terminates.',
        connectionToSurrounding: 'Concludes the entire script.',
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
'''

print("Major 15 template loaded")
