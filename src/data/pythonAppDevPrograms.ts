import { ProgramData } from '../types';

export const PYTHON_APP_DEV_LAB_PROGRAMS: ProgramData[] = [
  {
    "id": 301,
    "subjectId": "major-15",
    "programNumber": 1,
    "title": "Menu-Driven Temperature Conversion (Celsius & Fahrenheit)",
    "pdfQuestion": "1. Write a menu driven program to convert the given temperature from Fahrenheit to Celsius and Celsius to Fahrenheit.",
    "shortDescription": "Menu-driven console application to convert temperatures between Celsius and Fahrenheit scales with input validation.",
    "technologies": [
      "Python"
    ],
    "originalCode": "print('1. Celsius to Fahrenheit.')\nprint('2. Fahrenheit to Celsius.')\nchoice = int(input('Enter your choice: '))\nif choice == 1:\n    c = float(input('Enter temperature in celsius: '))\n    f = 9 * c / 5 + 32\n    print('Temperature in fahrenheit scale:', f)\nelif choice == 2:\n    f = float(input('Enter temperature in fahrenheit: '))\n    c = 5 * (f - 32) / 9\n    print('Temperature in celsius scale:', c)\nelse:\n    print('Invalid choice.')",
    "sampleOutputText": "1. Celsius to Fahrenheit.\n2. Fahrenheit to Celsius.\nEnter your choice: 1\nEnter temperature in celsius: 37\nTemperature in fahrenheit scale: 98.6\n\n--- Second Run ---\n1. Celsius to Fahrenheit.\n2. Fahrenheit to Celsius.\nEnter your choice: 2\nEnter temperature in fahrenheit: 98.6\nTemperature in celsius scale: 37.0",
    "runLocallyGuide": {
      "fileName": "program1_temp_converter.py",
      "pythonSteps": [
        "Open terminal or command prompt in your practical working folder.",
        "Create a file named program1_temp_converter.py and paste the source code.",
        "Run: python program1_temp_converter.py",
        "Enter choice 1 or 2, then input the temperature value."
      ],
      "notes": "Standard built-in Python — no external packages required."
    },
    "objective": {
      "whatItDoes": "Presents a two-option interactive menu to the user, reads their numeric selection, and performs mathematical temperature conversion using either Celsius to Fahrenheit (F = 9*C/5 + 32) or Fahrenheit to Celsius (C = 5*(F - 32)/9).",
      "whyWritten": "To demonstrate basic console input/output, conditional branching with if-elif-else, string to numeric type casting (int and float), and arithmetic expressions in Python.",
      "conceptsDemonstrated": "Menu-driven logic, input(), int() and float() type conversion, if-elif-else conditionals, floating-point arithmetic.",
      "expectedOutputSummary": "Displays menu options, prompts for user selection, takes temperature input, and prints the precisely converted temperature scale value.",
      "problemSolved": "Users need to convert temperature readings between Celsius and Fahrenheit scales without manual arithmetic. This program demonstrates console menu presentation, user choice input, and conditional branch dispatch.",
      "overallMechanism": "Outputs numbered options, captures integer choice via input(), and routes execution through an if/elif/else ladder to apply conversion formulas: F = (9/5)*C + 32 or C = (5/9)*(F - 32).",
      "prerequisitesToUnderstand": "Python print(), input(), int() vs float() type casting, and if/elif/else conditional structures."
    },
    "conceptsUsed": [
      {
        "name": "Menu-Driven Architecture",
        "description": "Listing distinct user actions labeled with numeric options so the user directs program flow."
      },
      {
        "name": "Type Casting (int & float)",
        "description": "input() returns strings; int() converts the menu choice to integer, and float() converts temperature inputs to real numbers with decimals."
      },
      {
        "name": "Conditional Branching (if-elif-else)",
        "description": "Executes mutually exclusive code blocks based on truth values of relational comparisons (choice == 1 or 2)."
      },
      {
        "name": "Arithmetic Formulas",
        "description": "Standard physics formulas for temperature conversion: F = (9/5)*C + 32 and C = (5/9)*(F - 32)."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Display First Menu Choice (Celsius to Fahrenheit)",
        "codeSnippet": "print('1. Celsius to Fahrenheit.')",
        "whatItDoes": "Outputs the string \"1. Celsius to Fahrenheit.\" to the console with a trailing newline.",
        "whyUsed": "Informs the user that pressing 1 will select Celsius-to-Fahrenheit conversion.",
        "howItWorks": "Writes string characters to standard output stream (sys.stdout).",
        "connectionToSurrounding": "First line of the console user interface.",
        "examRelevance": "Examiner note: In Python 3, print is a built-in function requiring parentheses."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 2",
        "title": "Display Second Menu Choice (Fahrenheit to Celsius)",
        "codeSnippet": "print('2. Fahrenheit to Celsius.')",
        "whatItDoes": "Outputs the second menu option string on a new line.",
        "whyUsed": "Informs user that option 2 converts Fahrenheit to Celsius.",
        "howItWorks": "Writes string to stdout followed by newline.",
        "connectionToSurrounding": "Completes the printed menu choices before user input is requested on Line 3.",
        "examRelevance": "Keeps console UI organized and predictable."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Line 3",
        "title": "Read and Cast Choice to Integer",
        "codeSnippet": "choice = int(input('Enter your choice: '))",
        "whatItDoes": "Prompts with \"Enter your choice: \", reads user keystrokes, and converts the string into an integer stored in variable choice.",
        "whyUsed": "input() returns a string (str). int() converts it so numeric comparison (choice == 1) succeeds.",
        "howItWorks": "input() pauses execution until Enter is pressed; int() parses ASCII digits to an integer.",
        "connectionToSurrounding": "Supplies the choice variable evaluated in the conditional ladder on Lines 4, 8, and 12.",
        "examRelevance": "Examiner trap: What happens if int() is omitted? The if condition fails because \"1\" != 1."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 4",
        "title": "Check for Option 1 (if choice == 1)",
        "codeSnippet": "if choice == 1:",
        "whatItDoes": "Tests whether variable choice is numerically equal to 1.",
        "whyUsed": "Branches into the Celsius-to-Fahrenheit conversion code block.",
        "howItWorks": "If True, enters indented lines 5-7. If False, jumps to elif on Line 8.",
        "connectionToSurrounding": "Evaluates the user selection made on Line 3.",
        "examRelevance": "In Python, the colon (:) is mandatory to begin a compound block."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Line 5",
        "title": "Input Celsius Value as Float",
        "codeSnippet": "    c = float(input('Enter temperature in celsius: '))",
        "whatItDoes": "Prompts for Celsius degrees and converts string to a floating-point number stored in variable c.",
        "whyUsed": "Physical temperatures require decimal precision (e.g. 36.6°C); int() would discard decimal fractions.",
        "howItWorks": "float() parses decimal point representation into 64-bit IEEE 754 floating point number.",
        "connectionToSurrounding": "Supplies operand c for formula calculation on Line 6.",
        "examRelevance": "Using int() here would truncate temperatures like 36.6 to 36, causing precision errors."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Line 6",
        "title": "Apply Celsius-to-Fahrenheit Formula",
        "codeSnippet": "    f = 9 * c / 5 + 32",
        "whatItDoes": "Multiplies Celsius by 9, divides by 5, adds 32, and stores result in variable f.",
        "whyUsed": "Implements the standard thermodynamic conversion formula F = (9/5)C + 32.",
        "howItWorks": "Follows PEMDAS operator precedence: multiplication and division first (left to right), followed by addition (+ 32).",
        "connectionToSurrounding": "Produces value f printed on Line 7.",
        "examRelevance": "Examiner question: Why does 9 * c / 5 work without integer truncation in Python 3? In Python 3, / is true division returning float."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Line 7",
        "title": "Output Converted Fahrenheit Temperature",
        "codeSnippet": "    print('Temperature in fahrenheit scale:', f)",
        "whatItDoes": "Prints the descriptive text and the computed Fahrenheit temperature separated by space.",
        "whyUsed": "Displays result to user.",
        "howItWorks": "Converts float f to string and streams to stdout.",
        "connectionToSurrounding": "Concludes branch 1 execution.",
        "examRelevance": "Comma in print() automatically inserts a separating space."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Line 8",
        "title": "Check for Option 2 (elif choice == 2)",
        "codeSnippet": "elif choice == 2:",
        "whatItDoes": "Tests whether choice equals 2 if previous if was False.",
        "whyUsed": "Branches into the Fahrenheit-to-Celsius conversion block.",
        "howItWorks": "Evaluated only when choice != 1.",
        "connectionToSurrounding": "Guards lines 9-11.",
        "examRelevance": "elif is Python's shorthand for else if."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Line 9",
        "title": "Input Fahrenheit Value as Float",
        "codeSnippet": "    f = float(input('Enter temperature in fahrenheit: '))",
        "whatItDoes": "Prompts for Fahrenheit degrees and stores as float in variable f.",
        "whyUsed": "Captures input temperature with fractional precision.",
        "howItWorks": "float(input()) handles both integer and decimal entries.",
        "connectionToSurrounding": "Supplies operand f for Line 10.",
        "examRelevance": "Float type allows inputs like 98.6."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Line 10",
        "title": "Apply Fahrenheit-to-Celsius Formula",
        "codeSnippet": "    c = 5 * (f - 32) / 9",
        "whatItDoes": "Subtracts 32 from Fahrenheit, multiplies by 5, divides by 9, and stores in variable c.",
        "whyUsed": "Implements the inverse conversion formula C = (5/9)*(F - 32).",
        "howItWorks": "Parentheses (f - 32) enforce subtraction before multiplication and division.",
        "connectionToSurrounding": "Calculates value c printed on Line 11.",
        "examRelevance": "Parentheses are mandatory! Without them, 5 * f - 32 / 9 would multiply and divide first."
      },
      {
        "stepNumber": 11,
        "lineNumberRange": "Line 11",
        "title": "Output Converted Celsius Temperature",
        "codeSnippet": "    print('Temperature in celsius scale:', c)",
        "whatItDoes": "Prints descriptive label followed by converted Celsius value.",
        "whyUsed": "Presents calculated result to user.",
        "howItWorks": "Outputs string and float to console.",
        "connectionToSurrounding": "Concludes branch 2 execution.",
        "examRelevance": "Verify: 98.6°F produces 37.0°C."
      },
      {
        "stepNumber": 12,
        "lineNumberRange": "Lines 12-13",
        "title": "Handle Invalid Choice with Else Catch-all",
        "codeSnippet": "else:\n    print('Invalid choice.')",
        "whatItDoes": "Executes if user entered any number other than 1 or 2, printing \"Invalid choice.\"",
        "whyUsed": "Graceful handling for invalid menu selections.",
        "howItWorks": "Catch-all default branch of conditional ladder.",
        "connectionToSurrounding": "Ends the selection statement.",
        "examRelevance": "Always include default/else branches in menu-driven programs for robustness."
      }
    ],
    "executionFlow": [
      "1. Program begins execution sequentially from line 1.",
      "2. Displays menu: 1. Celsius to Fahrenheit, 2. Fahrenheit to Celsius.",
      "3. Pauses on input(), user types their option and presses Enter.",
      "4. int() converts input to integer; stored in variable choice.",
      "5. Conditional branch evaluation: if choice == 1, inputs Celsius, computes 9*c/5 + 32, prints Fahrenheit.",
      "6. If choice == 2, inputs Fahrenheit, computes 5*(f-32)/9, prints Celsius.",
      "7. If choice is neither 1 nor 2, executes the else block and prints \"Invalid choice.\"",
      "8. Script reaches end and terminates normally."
    ],
    "outputExplanation": {
      "description": "The output cleanly maps user menu selection to the exact temperature calculation and unit label.",
      "elementsBreakdown": [
        {
          "element": "1. Celsius to Fahrenheit.",
          "sourceLine": "print('1. Celsius to Fahrenheit.')",
          "explanation": "First menu option banner."
        },
        {
          "element": "Enter your choice: 1",
          "sourceLine": "choice = int(input(...))",
          "explanation": "Interactive user input capture."
        },
        {
          "element": "Temperature in fahrenheit scale: 98.6",
          "sourceLine": "print('Temperature in fahrenheit scale:', f)",
          "explanation": "Computed floating-point result for body temperature 37°C."
        }
      ]
    },
    "examNotes": [
      {
        "category": "library_syntax",
        "title": "Why float() is Essential",
        "description": "Temperatures frequently have fractional values (e.g. 98.6°F, 36.5°C). Using int() for temperature would truncate fractional parts, losing crucial precision."
      },
      {
        "category": "common_mistakes",
        "title": "Missing Parentheses Trap",
        "description": "In Fahrenheit to Celsius conversion, failing to wrap (f - 32) in parentheses causes 5 * f - 32 / 9, which evaluates (5*f) - (3.555) due to BODMAS rules."
      },
      {
        "category": "pro_tips",
        "title": "String Equality Gotcha",
        "description": "If you omit int() and write choice = input(), you must test if choice == \"1\": with quotes. In the PDF code, int() is used so choice == 1 with numbers."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the return type of Python's built-in input() function?",
        "answer": "The input() function in Python 3 always returns a string (str), regardless of whether the user typed numbers or letters.",
        "examinerTip": "Mention that in Python 2 it was raw_input(), but in Python 3 it is input()."
      },
      {
        "question": "What will happen if the user enters \"hello\" when prompted for choice?",
        "answer": "Python raises a ValueError: invalid literal for int() with base 10: 'hello', terminating the program unless wrapped in a try-except block.",
        "examinerTip": "Examiners appreciate candidates who mention exception handling."
      },
      {
        "question": "Explain the difference between / and // operators in Python.",
        "answer": "/ is the true division operator which always returns a float (e.g. 5 / 2 is 2.5). // is floor division which returns the quotient truncated to the nearest whole number (e.g. 5 // 2 is 2).",
        "examinerTip": "Both temperature formulas require true division /."
      },
      {
        "question": "At what temperature are Celsius and Fahrenheit scales identical?",
        "answer": "At -40 degrees (-40°C = -40°F). Proof: -40 * 9 / 5 + 32 = -72 + 32 = -40.",
        "examinerTip": "A classic favorite trivia question asked by physics and computer science external examiners."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "temp-converter"
  },
  {
    "id": 302,
    "subjectId": "major-15",
    "programNumber": 2,
    "title": "Student Marks, Percentage and Grade Calculation",
    "pdfQuestion": "2. Write a program to calculate the total marks, percentage and grade of a student for 3 subjects. (Take marks of 3 subjects as input)",
    "shortDescription": "Calculate total marks, percentage, and assigned letter grade using nested conditional elif ladders (Notes PDF code discrepancy).",
    "technologies": [
      "Python"
    ],
    "originalCode": "subject_1 = int(input(\"Enter Subject1 Marks:\"))\nsubject_2 = int(input(\"Enter Subject2 Marks:\"))\nsubject_3 = int(input(\"Enter Subject3 Marks:\"))\nsubject_4 = int(input(\"Enter Subject4 Marks:\"))\nsubject_5 = int(input(\"Enter Subject5 Marks:\"))\n\ntotal, average, percentage, grade = None, None, None, None\n\ntotal = subject_1 + subject_2 + subject_3 + subject_4 + subject_5\naverage = total / 5.0\npercentage = (total / 500.0) * 100\n\nif average >= 80:\n    grade = 'A'\nelif average >= 70 and average < 80:\n    grade = 'B'\nelif average >= 60 and average < 70:\n    grade = 'C'\nelif average >= 40 and average < 60:\n    grade = 'D'\nelse:\n    grade = 'E'\n\nprint(\"The Total marks is:\", total)\nprint(\"The Percentage is:\", percentage)\nprint(\"The Grade is:\", grade)",
    "correctedCode": "# Exact 3-Subject Implementation matching the PDF Question Statement\nsubject_1 = int(input(\"Enter Subject 1 Marks (out of 100): \"))\nsubject_2 = int(input(\"Enter Subject 2 Marks (out of 100): \"))\nsubject_3 = int(input(\"Enter Subject 3 Marks (out of 100): \"))\n\ntotal = subject_1 + subject_2 + subject_3\naverage = total / 3.0\npercentage = (total / 300.0) * 100\n\nif average >= 80:\n    grade = 'A'\nelif average >= 70:\n    grade = 'B'\nelif average >= 60:\n    grade = 'C'\nelif average >= 40:\n    grade = 'D'\nelse:\n    grade = 'E'\n\nprint(\"The Total marks is:\", total)\nprint(\"The Percentage is:\", round(percentage, 2))\nprint(\"The Grade is:\", grade)",
    "correctionExplanation": "Important PDF Discrepancy: The question statement in the PDF explicitly specifies 3 subjects (\"for 3 subjects. Take marks of 3 subjects as input\"), but the source code provided immediately beneath it prompts for 5 subjects (subject_1 to subject_5) and divides by 500.0. In LabMaster, the exact 5-subject code from the PDF is preserved verbatim as primary, and a dedicated 3-subject version is provided in the Modern/Corrected tab.",
    "sampleOutputText": "Enter Subject1 Marks: 85\nEnter Subject2 Marks: 78\nEnter Subject3 Marks: 92\nEnter Subject4 Marks: 65\nEnter Subject5 Marks: 88\nThe Total marks is: 408\nThe Percentage is: 81.6\nThe Grade is: A",
    "runLocallyGuide": {
      "fileName": "program2_student_grade.py",
      "pythonSteps": [
        "Save code as program2_student_grade.py.",
        "Run: python program2_student_grade.py",
        "Enter marks (e.g. 85, 78, 92, 65, 88).",
        "Inspect total, percentage, and calculated grade output."
      ],
      "notes": "Ensure marks are entered as integers between 0 and 100."
    },
    "objective": {
      "whatItDoes": "Takes individual subject marks as input, calculates the aggregate total, computes the percentage over the maximum possible score, and assigns a qualitative grade (A, B, C, D, or E) using an elif conditional grading ladder.",
      "whyWritten": "To teach multi-variable initialization, compound arithmetic expressions, logical AND operators (and), and multi-way branching using elif ladders.",
      "conceptsDemonstrated": "Multiple variable assignment (tuple unpacking with None), input casting, arithmetic operators (+, /, *), relational operators (>=, <), logical operator (and), chained conditionals.",
      "expectedOutputSummary": "Displays the sum of all subject marks, percentage score, and final grade category.",
      "problemSolved": "Automates grading for academic evaluation. Computes cumulative total, arithmetic average, percentage out of 500 maximum marks, and maps scores to letter grades A through E using a multi-way conditional ladder.",
      "overallMechanism": "Collects five subject scores, computes total and percentage, and compares average against threshold boundaries (>=80: A, 70-79: B, 60-69: C, 40-59: D, <40: E).",
      "prerequisitesToUnderstand": "Sequential integer input, arithmetic operators (+, /, *), logical operator \"and\", and compound comparison expressions."
    },
    "conceptsUsed": [
      {
        "name": "Multiple Variable Initialization",
        "description": "total, average, percentage, grade = None, None, None, None sets up variables before assignment."
      },
      {
        "name": "Accumulation / Summation",
        "description": "Adding multiple inputs together to form an aggregate total score."
      },
      {
        "name": "Percentage Formula",
        "description": "percentage = (obtained_marks / maximum_marks) * 100."
      },
      {
        "name": "Logical and Operator",
        "description": "Combines two boolean expressions, evaluating to True only if both conditions are satisfied."
      },
      {
        "name": "Grading Ladder",
        "description": "A sequential cascade of thresholds: >= 80 (A), 70-79 (B), 60-69 (C), 40-59 (D), below 40 (E)."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-5",
        "title": "Read Marks for Five Subjects as Integers",
        "codeSnippet": "subject_1 = int(input(\"Enter Subject1 Marks:\"))\nsubject_2 = int(input(\"Enter Subject2 Marks:\"))\nsubject_3 = int(input(\"Enter Subject3 Marks:\"))\nsubject_4 = int(input(\"Enter Subject4 Marks:\"))\nsubject_5 = int(input(\"Enter Subject5 Marks:\"))",
        "whatItDoes": "Prompts user sequentially and reads five exam marks, converting each input string into an integer.",
        "whyUsed": "Collects the five raw subject marks required for academic evaluation.",
        "howItWorks": "int(input()) reads line from console and converts ASCII digits to integer zvals.",
        "connectionToSurrounding": "Supplies the five numeric variables summed on Line 9.",
        "examRelevance": "In Python, separate input() calls are needed for separate console lines."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 7",
        "title": "Initialize Working Variables to None",
        "codeSnippet": "total, average, percentage, grade = None, None, None, None",
        "whatItDoes": "Unpacks None to four variables (total, average, percentage, grade) in a single multiple-assignment statement.",
        "whyUsed": "Declares variable identifiers upfront before computational use.",
        "howItWorks": "Python tuple unpacking assigns None to each variable name in local symbol table.",
        "connectionToSurrounding": "Variables are assigned actual computed values in lines 9, 10, 11, and 14-22.",
        "examRelevance": "Python supports tuple assignment (a, b = 1, 2); None is Python's singleton null object."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Line 9",
        "title": "Calculate Total Marks (Sum of 5 Subjects)",
        "codeSnippet": "total = subject_1 + subject_2 + subject_3 + subject_4 + subject_5",
        "whatItDoes": "Adds all five subject marks together and stores sum in variable total.",
        "whyUsed": "Computes cumulative score across all subjects.",
        "howItWorks": "Executes binary addition across the five integer variables.",
        "connectionToSurrounding": "Supplies the total used to compute average (Line 10) and percentage (Line 11).",
        "examRelevance": "If each subject is out of 100, maximum total is 500."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 10",
        "title": "Compute Arithmetic Average (total / 5.0)",
        "codeSnippet": "average = total / 5.0",
        "whatItDoes": "Divides total score by float 5.0 to calculate average marks per subject.",
        "whyUsed": "Provides mean score used to determine grade assignment in lines 13-22.",
        "howItWorks": "Floating-point division operator / calculates quotient as float.",
        "connectionToSurrounding": "Evaluated in the conditional grading ladder below.",
        "examRelevance": "Using 5.0 ensures floating-point precision in all Python versions."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Line 11",
        "title": "Compute Percentage ((total / 500.0) * 100)",
        "codeSnippet": "percentage = (total / 500.0) * 100",
        "whatItDoes": "Divides total marks by maximum marks (500.0) and multiplies by 100 to get percentage score.",
        "whyUsed": "Computes standardized percentage representation.",
        "howItWorks": "Parentheses calculate proportion of maximum marks; multiplying by 100 scales to percentage.",
        "connectionToSurrounding": "Stored in variable percentage printed on Line 25.",
        "examRelevance": "Notice that mathematically, for 5 subjects out of 100, percentage equals average."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 13-14",
        "title": "Grade A Threshold: if average >= 80",
        "codeSnippet": "if average >= 80:\n    grade = 'A'",
        "whatItDoes": "Tests if average score is greater than or equal to 80; if True, assigns grade = 'A'.",
        "whyUsed": "Awards top grade A for distinction performance (80-100%).",
        "howItWorks": "Relational operator >= compares float against 80.",
        "connectionToSurrounding": "Top tier of grading ladder.",
        "examRelevance": "If True, Python skips all subsequent elif and else branches."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 15-16",
        "title": "Grade B Threshold: elif average >= 70 and average < 80",
        "codeSnippet": "elif average >= 70 and average < 80:\n    grade = 'B'",
        "whatItDoes": "Tests if average is in range [70, 80); if True, assigns grade = 'B'.",
        "whyUsed": "Awards grade B for first class performance.",
        "howItWorks": "Logical operator \"and\" combines two boolean conditions; both must be True.",
        "connectionToSurrounding": "Second tier of grading ladder.",
        "examRelevance": "In Python, this can also be written using chained comparisons: 70 <= average < 80."
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 17-18",
        "title": "Grade C Threshold: elif average >= 60 and average < 70",
        "codeSnippet": "elif average >= 60 and average < 70:\n    grade = 'C'",
        "whatItDoes": "Tests if average is in range [60, 70); if True, assigns grade = 'C'.",
        "whyUsed": "Awards grade C for second class performance.",
        "howItWorks": "Logical and check.",
        "connectionToSurrounding": "Third tier of grading ladder.",
        "examRelevance": "Standard academic classification threshold."
      },
      {
        "stepNumber": 9,
        "lineNumberRange": "Lines 19-20",
        "title": "Grade D Threshold: elif average >= 40 and average < 60",
        "codeSnippet": "elif average >= 40 and average < 60:\n    grade = 'D'",
        "whatItDoes": "Tests if average is in range [40, 60); if True, assigns grade = 'D'.",
        "whyUsed": "Awards grade D for third class / pass grade.",
        "howItWorks": "Logical and check.",
        "connectionToSurrounding": "Fourth tier before failure.",
        "examRelevance": "Minimum passing percentage in most universities is 40%."
      },
      {
        "stepNumber": 10,
        "lineNumberRange": "Lines 21-22",
        "title": "Grade E Threshold: else (average < 40)",
        "codeSnippet": "else:\n    grade = 'E'",
        "whatItDoes": "Executes if average is below 40, assigning grade = 'E' (Fail / Needs improvement).",
        "whyUsed": "Catches all scores below passing threshold.",
        "howItWorks": "Default branch triggered when all prior conditions evaluate to False.",
        "connectionToSurrounding": "Concludes grading decision ladder.",
        "examRelevance": "Ensures variable grade is guaranteed to have a value."
      },
      {
        "stepNumber": 11,
        "lineNumberRange": "Lines 24-26",
        "title": "Output Total, Percentage, and Grade",
        "codeSnippet": "print(\"The Total marks is:\", total)\nprint(\"The Percentage is:\", percentage)\nprint(\"The Grade is:\", grade)",
        "whatItDoes": "Prints the calculated total marks, percentage, and assigned letter grade to console.",
        "whyUsed": "Displays complete academic report card to user.",
        "howItWorks": "Outputs labels and variable values to stdout.",
        "connectionToSurrounding": "Final output concluding program.",
        "examRelevance": "Output verification: Marks 85, 78, 90, 88, 92 -> Total 433, Percentage 86.6%, Grade A."
      }
    ],
    "executionFlow": [
      "1. Program inputs 5 subject marks in sequence: subject_1 to subject_5.",
      "2. Variables total, average, percentage, grade are initialized to None.",
      "3. Calculates total as subject_1 + subject_2 + subject_3 + subject_4 + subject_5.",
      "4. Calculates average as total / 5.0.",
      "5. Calculates percentage as (total / 500.0) * 100.",
      "6. Evaluates conditional ladder: checks >= 80 for grade A, 70-79 for B, 60-69 for C, 40-59 for D, otherwise E.",
      "7. Prints total marks, percentage, and assigned grade."
    ],
    "outputExplanation": {
      "description": "Summarizes student marks, percentage, and assigned academic grade.",
      "elementsBreakdown": [
        {
          "element": "The Total marks is: 408",
          "sourceLine": "print(\"The Total marks is:\", total)",
          "explanation": "Sum of 85 + 78 + 92 + 65 + 88."
        },
        {
          "element": "The Percentage is: 81.6",
          "sourceLine": "print(\"The Percentage is:\", percentage)",
          "explanation": "408 / 500.0 * 100."
        },
        {
          "element": "The Grade is: A",
          "sourceLine": "print(\"The Grade is:\", grade)",
          "explanation": "Satisfies average >= 80 criterion."
        }
      ]
    },
    "examNotes": [
      {
        "category": "common_mistakes",
        "title": "PDF Question vs Code Mismatch",
        "description": "Crucial: The question mentions 3 subjects, but the PDF source code inputs 5 subjects. If an examiner asks why 5 subjects are present, explain that you implemented the exact code from the syllabus manual while also understanding the 3-subject variation."
      },
      {
        "category": "library_syntax",
        "title": "Redundant Condition in elif",
        "description": "In `elif average >= 70 and average < 80:`, the `and average < 80` clause is technically redundant because if average was >= 80, the first `if` would have already executed. However, writing it explicitly is great for clarity."
      },
      {
        "category": "pro_tips",
        "title": "Chained Comparison Syntax",
        "description": "Python uniquely supports mathematical chained comparison syntax like `70 <= average < 80`, which is more concise and readable than using `and`."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the purpose of initializing variables to None before use?",
        "answer": "It defines the variable names in the local namespace and makes their intended presence explicit, preventing NameError exceptions if referenced before assignment.",
        "examinerTip": "Mention that None is Python's null equivalent."
      },
      {
        "question": "How can you format percentage to 2 decimal places in Python?",
        "answer": "Using formatted string literals: f\"{percentage:.2f}\" or using round(percentage, 2).",
        "examinerTip": "External examiners frequently ask for f-string formatting."
      },
      {
        "question": "What is short-circuit evaluation in Python logical operators?",
        "answer": "With the and operator, if the left-hand operand evaluates to False, Python immediately stops and returns False without evaluating the right-hand operand, saving CPU cycles.",
        "examinerTip": "Give an example: False and (x / 0 == 0) will not crash because the division is never evaluated."
      },
      {
        "question": "Can grade evaluation be done using a match-case statement in modern Python?",
        "answer": "Yes! Python 3.10 introduced structural pattern matching with match-case and guard conditions (e.g. case avg if avg >= 80:).",
        "examinerTip": "Shows you know modern Python 3.10+ language features."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "student-grade"
  },
  {
    "id": 303,
    "subjectId": "major-15",
    "programNumber": 3,
    "title": "Demonstration of Sequence Data Types (String, List, Tuple, Range, Bytes & Bytearray)",
    "pdfQuestion": "3. Demonstrate various methods of Sequence Data Types",
    "shortDescription": "Comprehensive exploration of Python sequence types: strings, lists, tuples, range objects, immutable bytes, and mutable bytearrays with indexing and slicing.",
    "technologies": [
      "Python"
    ],
    "originalCode": "print(\"Various Methods of Sequence Data Types \\n\")\nmy_string = \"Welcome to Python Programming\"\n# List: a collection of different types of data\nmy_list = [25, \"Hello\", 2.5, True]\n# Tuple: a fixed collection of values\nmy_tuple = (\"Apple\", \"Banana\", \"Cherry\")\n# Create a range object\nmy_range = range(1, 10, 2)\n# Create a byte sequence\nmy_bytes = bytes([65, 66, 67])\n# Create a byte array\nmy_byte_array = bytearray([65, 66, 67])\nmy_byte_array[0] = 68\n\n# Printing all Sequences\nprint(\"String:\", my_string)\nprint(\"List:\", my_list)\nprint(\"Tuple:\", my_tuple)\nprint(\"Range: \", my_range)\nprint(\"Bytes:\", my_bytes)\n\n# Accessing Elements\nprint(\"\\nAccessing elements:\")\nprint(\"First word in string:\", my_string[0])\nprint(\"Second item in list:\", my_list[1])\nprint(\"Last fruit in tuple:\", my_tuple[-1])\nprint(\"Range of List:\", list(my_range))\nprint(\"Byte Sequences:\", my_bytes[:2])\nprint(\"Byte Arrays:\", my_byte_array)",
    "sampleOutputText": "Various Methods of Sequence Data Types \n\nString: Welcome to Python Programming\nList: [25, 'Hello', 2.5, True]\nTuple: ('Apple', 'Banana', 'Cherry')\nRange:  range(1, 10, 2)\nBytes: b'ABC'\n\nAccessing elements:\nFirst word in string: W\nSecond item in list: Hello\nLast fruit in tuple: Cherry\nRange of List: [1, 3, 5, 7, 9]\nByte Sequences: b'AB'\nByte Arrays: bytearray(b'DBC')",
    "runLocallyGuide": {
      "fileName": "program3_sequence_types.py",
      "pythonSteps": [
        "Save code as program3_sequence_types.py.",
        "Run: python program3_sequence_types.py",
        "Observe how bytes b\"ABC\" becomes b\"DBC\" when bytearray[0] is modified to ASCII 68 ('D')."
      ],
      "notes": "Demonstrates both immutable (str, tuple, bytes, range) and mutable (list, bytearray) sequence types."
    },
    "objective": {
      "whatItDoes": "Creates, manipulates, and inspects all six built-in Python sequence data types: str (Unicode text), list (heterogeneous mutable array), tuple (immutable record), range (lazy arithmetic progression), bytes (immutable raw binary bytes), and bytearray (mutable raw binary bytes).",
      "whyWritten": "To demonstrate the difference between mutable and immutable sequence types, positive and negative indexing, slicing syntax [start:stop:step], and binary data representations.",
      "conceptsDemonstrated": "Sequence definitions, mutability vs immutability, zero-based indexing, negative indexing, slicing, ASCII encoding in bytes and bytearrays.",
      "expectedOutputSummary": "Outputs all sequence objects, then prints accessed elements including first character, second list item, last tuple item, expanded range, and sliced byte sequences.",
      "problemSolved": "Python provides six fundamental sequence data types, each with unique mutability, homogeneity, and indexing properties. This program demonstrates String, List, Tuple, Range, Bytes, and Bytearray.",
      "overallMechanism": "Initializes instances of all 6 sequence types, demonstrates in-place mutation on bytearray, prints all collections, and demonstrates zero-based indexing, negative indexing, conversion to list, and binary slicing.",
      "prerequisitesToUnderstand": "Sequence data types concept, mutability (mutable vs immutable), ASCII byte values, and negative index offsets."
    },
    "conceptsUsed": [
      {
        "name": "Sequence Data Types",
        "description": "Ordered collections of elements indexed by non-negative integers (str, list, tuple, range, bytes, bytearray)."
      },
      {
        "name": "Mutability vs Immutability",
        "description": "Lists and bytearrays can be modified in-place; strings, tuples, ranges, and bytes cannot be modified once instantiated."
      },
      {
        "name": "Negative Indexing",
        "description": "Index -1 accesses the final element, -2 the penultimate, enabling safe backward traversal."
      },
      {
        "name": "Lazy Evaluation (range)",
        "description": "range(1, 10, 2) generates values on-demand without storing all integers in memory until converted to a list."
      },
      {
        "name": "Binary Sequences (bytes & bytearray)",
        "description": "Sequences of 8-bit integers (0-255). ASCII 65 is 'A', 66 is 'B', 67 is 'C', 68 is 'D'."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Output Program Header",
        "codeSnippet": "print(\"Various Methods of Sequence Data Types \\n\")",
        "whatItDoes": "Prints introductory title followed by an extra newline for visual spacing.",
        "whyUsed": "Console banner.",
        "howItWorks": "Streams string with escape sequence \\n to stdout.",
        "connectionToSurrounding": "Precedes sequence declarations.",
        "examRelevance": "\\n is the newline escape character."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 2-6",
        "title": "Declare String, List, and Tuple",
        "codeSnippet": "my_string = \"Welcome to Python Programming\"\n# List: a collection of different types of data\nmy_list = [25, \"Hello\", 2.5, True]\n# Tuple: a fixed collection of values\nmy_tuple = (\"Apple\", \"Banana\", \"Cherry\")",
        "whatItDoes": "Initializes an immutable string, a heterogeneous mutable list of 4 different types, and an immutable tuple of 3 strings.",
        "whyUsed": "Demonstrates the three most widely used high-level sequence types.",
        "howItWorks": "Allocates PyUnicodeObject (string), PyListObject (list), and PyTupleObject (tuple).",
        "connectionToSurrounding": "Supplies data printed in lines 16-18 and indexed in lines 24-26.",
        "examRelevance": "Viva distinction: List ([]) is mutable (can add/modify items); Tuple (()) is immutable (fixed size, read-only)."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 7-8",
        "title": "Declare Immutable Range Object",
        "codeSnippet": "# Create a range object\nmy_range = range(1, 10, 2)",
        "whatItDoes": "Creates an immutable arithmetic sequence of integers starting at 1, stopping before 10, stepping by 2 (1, 3, 5, 7, 9).",
        "whyUsed": "Memory-efficient lazy sequence generator for loops.",
        "howItWorks": "range object computes numbers on demand in O(1) memory, regardless of sequence size.",
        "connectionToSurrounding": "Printed on line 19 and converted to list on line 27.",
        "examRelevance": "In Python 3, range() does NOT generate a list immediately; it is a lazy generator object."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 9-13",
        "title": "Declare Bytes and Mutable Bytearray (with Mutation)",
        "codeSnippet": "# Create a byte sequence\nmy_bytes = bytes([65, 66, 67])\n# Create a byte array\nmy_byte_array = bytearray([65, 66, 67])\nmy_byte_array[0] = 68",
        "whatItDoes": "Creates immutable bytes b'ABC' (ASCII 65, 66, 67), creates mutable bytearray bytearray(b'ABC'), and mutates index 0 to 68 ('D') producing bytearray(b'DBC').",
        "whyUsed": "Demonstrates low-level binary data handling and the critical distinction between immutable bytes and mutable bytearray.",
        "howItWorks": "bytes() is fixed; bytearray() permits direct index reassignment (my_byte_array[0] = 68).",
        "connectionToSurrounding": "Crucial demonstration of binary sequence mutability.",
        "examRelevance": "Examiner favorite: bytes is IMMUTABLE; bytearray is MUTABLE."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 15-20",
        "title": "Print All Six Sequence Collections",
        "codeSnippet": "# Printing all Sequences\nprint(\"String:\", my_string)\nprint(\"List:\", my_list)\nprint(\"Tuple:\", my_tuple)\nprint(\"Range: \", my_range)\nprint(\"Bytes:\", my_bytes)",
        "whatItDoes": "Outputs each declared sequence collection to console.",
        "whyUsed": "Displays complete collection representations.",
        "howItWorks": "Invokes __str__() method on each sequence object.",
        "connectionToSurrounding": "Shows whole collections before individual element access.",
        "examRelevance": "Notice range prints as range(1, 10, 2), not as expanded numbers."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 22-29",
        "title": "Demonstrate Indexing, Slicing, and Type Conversion",
        "codeSnippet": "# Accessing Elements\nprint(\"\\nAccessing elements:\")\nprint(\"First word in string:\", my_string[0])\nprint(\"Second item in list:\", my_list[1])\nprint(\"Last fruit in tuple:\", my_tuple[-1])\nprint(\"Range of List:\", list(my_range))\nprint(\"Byte Sequences:\", my_bytes[:2])\nprint(\"Byte Arrays:\", my_byte_array)",
        "whatItDoes": "Shows first character my_string[0] ('W'), second item my_list[1] ('Hello'), negative index my_tuple[-1] ('Cherry'), converting range to list [1, 3, 5, 7, 9], slicing first 2 bytes my_bytes[:2] (b'AB'), and mutated bytearray.",
        "whyUsed": "Demonstrates indexing and slicing operators shared across all Python sequences.",
        "howItWorks": "my_tuple[-1] uses negative indexing (-1 = last item); list(my_range) materializes range; [:2] slices from index 0 to 1.",
        "connectionToSurrounding": "Concludes sequence data types demonstration.",
        "examRelevance": "Viva point: In Python, index -1 always accesses the last element of any sequence."
      }
    ],
    "executionFlow": [
      "1. Prints header title.",
      "2. Initializes string my_string, list my_list, tuple my_tuple.",
      "3. Instantiates range object with start=1, stop=10, step=2.",
      "4. Instantiates immutable bytes with ASCII [65, 66, 67] -> b\"ABC\".",
      "5. Instantiates mutable bytearray with [65, 66, 67] and mutates byte 0 to 68 -> b\"DBC\".",
      "6. Prints representations of all 5 sequences.",
      "7. Performs element access: my_string[0], my_list[1], my_tuple[-1], list(my_range), my_bytes[:2], my_byte_array.",
      "8. Outputs results and finishes execution."
    ],
    "outputExplanation": {
      "description": "Displays the constructed sequence objects and the extracted items using positive indexing, negative indexing, and slicing.",
      "elementsBreakdown": [
        {
          "element": "Bytes: b'ABC'",
          "sourceLine": "my_bytes = bytes([65, 66, 67])",
          "explanation": "ASCII values 65, 66, 67 correspond to characters A, B, C."
        },
        {
          "element": "Last fruit in tuple: Cherry",
          "sourceLine": "my_tuple[-1]",
          "explanation": "Negative index -1 extracts the last element in the tuple."
        },
        {
          "element": "Range of List: [1, 3, 5, 7, 9]",
          "sourceLine": "list(my_range)",
          "explanation": "list() forces evaluation of lazy range(1, 10, 2)."
        },
        {
          "element": "Byte Arrays: bytearray(b'DBC')",
          "sourceLine": "my_byte_array[0] = 68",
          "explanation": "Index 0 mutated from 65 ('A') to 68 ('D')."
        }
      ]
    },
    "examNotes": [
      {
        "category": "library_syntax",
        "title": "Mutability Matrix",
        "description": "Immutable Sequences: str, tuple, bytes, range. Mutable Sequences: list, bytearray. Attempting to assign `my_string[0] = \"X\"` raises TypeError: 'str' object does not support item assignment."
      },
      {
        "category": "common_mistakes",
        "title": "PDF Label Note",
        "description": "The print statement in the PDF reads `First word in string:` for `my_string[0]`. In reality, `my_string[0]` returns the first character (\"W\"), not the first word (\"Welcome\"). To get the first word, one would use `my_string.split()[0]`."
      },
      {
        "category": "pro_tips",
        "title": "Slicing Anatomy",
        "description": "Python sequence slicing follows `sequence[start:stop:step]`. Omitted start defaults to 0; omitted stop defaults to len(); negative step reverses the sequence (e.g. `my_string[::-1]`)."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the key difference between bytes and bytearray?",
        "answer": "bytes is an immutable sequence of integers in range 0 <= x < 256, while bytearray is a mutable sequence of integers in the same range that supports in-place modifications.",
        "examinerTip": "Mention that bytearray is useful for buffering binary network packets or file data."
      },
      {
        "question": "What does my_tuple[-1] do, and what would my_tuple[-4] cause?",
        "answer": "my_tuple[-1] accesses the last element. Since the tuple has 3 elements, indices are -1, -2, -3. my_tuple[-4] would raise an IndexError: tuple index out of range.",
        "examinerTip": "IndexError is raised whenever an index is outside valid bounds."
      },
      {
        "question": "Why does print(my_range) not print the numbers 1, 3, 5, 7, 9 directly?",
        "answer": "Because range is a lazy sequence type that computes elements on-demand in O(1) memory. To materialize the integers, it must be explicitly converted using list(my_range) or iterated in a loop.",
        "examinerTip": "Emphasize O(1) memory efficiency."
      },
      {
        "question": "Can a list contain another list or tuple?",
        "answer": "Yes! Python lists can contain elements of any type, including other lists, tuples, dictionaries, and custom objects (nested/multidimensional sequences).",
        "examinerTip": "Heterogeneous data structures are a core Python capability."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "sequence-types"
  },
  {
    "id": 304,
    "subjectId": "major-15",
    "programNumber": 4,
    "title": "Display First n Terms of Fibonacci Series (While Loop)",
    "pdfQuestion": "4. Write a python program to display the first n terms of Fibonacci series",
    "shortDescription": "Generate and display the first n numbers of the Fibonacci mathematical sequence using a while loop with variable state tracing.",
    "technologies": [
      "Python"
    ],
    "originalCode": "num = int(input(\"Enter How many Terms you want :\"))\nt1 = 0\nt2 = 1\ni = 1\nprint(\"Fibinocci Series\")\nwhile i <= num:\n    print(t1)\n    nextTerm = t1 + t2\n    t1 = t2\n    t2 = nextTerm\n    i = i + 1",
    "sampleOutputText": "Enter How many Terms you want : 7\nFibinocci Series\n0\n1\n1\n2\n3\n5\n8",
    "runLocallyGuide": {
      "fileName": "program4_fibonacci_while.py",
      "pythonSteps": [
        "Save code as program4_fibonacci_while.py.",
        "Run: python program4_fibonacci_while.py",
        "Enter number of terms (e.g. 7 or 10).",
        "Observe terms generated sequentially line by line."
      ],
      "notes": "Contains the exact string \"Fibinocci Series\" as written in the college lab manual PDF."
    },
    "objective": {
      "whatItDoes": "Takes the desired term count n from user input, initializes the first two Fibonacci numbers (0 and 1), and uses a while loop to repeatedly print the current term and update pointers for subsequent terms.",
      "whyWritten": "To teach while loop mechanics, loop counter maintenance (i = i + 1), and simultaneous sequence state progression without recursion.",
      "conceptsDemonstrated": "while loop, loop variable iteration, accumulator variables, pointer shifting (t1 = t2, t2 = nextTerm), arithmetic addition.",
      "expectedOutputSummary": "Prints \"Fibinocci Series\" followed by the first n Fibonacci numbers, each on a new line.",
      "problemSolved": "Iterative series generation using condition-controlled while loops. Computes and displays the first n numbers of the Fibonacci recurrence sequence.",
      "overallMechanism": "Prompts for term count n, initializes t1=0, t2=1, and loop counter i=1. The while loop runs while i <= num, printing t1, computing nextTerm = t1 + t2, shifting t1=t2 and t2=nextTerm, and incrementing i = i + 1.",
      "prerequisitesToUnderstand": "While loop condition and termination criteria, loop counter incrementation, and variable state shifting."
    },
    "conceptsUsed": [
      {
        "name": "Fibonacci Sequence",
        "description": "A sequence where each number is the sum of the preceding two numbers: F(0)=0, F(1)=1, F(n) = F(n-1) + F(n-2)."
      },
      {
        "name": "while Loop",
        "description": "Repeatedly executes a block of statements as long as the test condition (i <= num) remains True."
      },
      {
        "name": "Pointer Shifting",
        "description": "Updating t1 to t2, and t2 to the newly computed nextTerm to advance the 2-element sliding window."
      },
      {
        "name": "Counter Increment",
        "description": "Incrementing loop counter i by 1 each iteration to avoid infinite loops."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Input Number of Terms (num = int(input(...)))",
        "codeSnippet": "num = int(input(\"Enter How many Terms you want :\"))",
        "whatItDoes": "Prompts user for desired count of Fibonacci terms and parses string into integer variable num.",
        "whyUsed": "Specifies loop termination bound.",
        "howItWorks": "input() reads input; int() parses integer value.",
        "connectionToSurrounding": "Supplies upper bound compared in while loop on Line 6.",
        "examRelevance": "Must convert to int() so relational comparison i <= num works."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 2-4",
        "title": "Initialize Terms and Loop Counter (t1 = 0, t2 = 1, i = 1)",
        "codeSnippet": "t1 = 0\nt2 = 1\ni = 1",
        "whatItDoes": "Sets first seed t1=0, second seed t2=1, and loop counter i=1.",
        "whyUsed": "Prepares initial state of Fibonacci recurrence and while loop index.",
        "howItWorks": "Allocates three integer variables.",
        "connectionToSurrounding": "t1 and t2 maintain sliding window; i controls loop iterations.",
        "examRelevance": "Loop counter starts at 1 and stops at num (inclusive)."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Line 5",
        "title": "Print Series Header",
        "codeSnippet": "print(\"Fibinocci Series\")",
        "whatItDoes": "Outputs header label to console.",
        "whyUsed": "Informs user of output format.",
        "howItWorks": "Streams string to stdout.",
        "connectionToSurrounding": "Precedes loop output.",
        "examRelevance": "Spelling matches lab PDF verbatim (\"Fibinocci\")."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 6-7",
        "title": "While Loop Header and Print Current Term",
        "codeSnippet": "while i <= num:\n    print(t1)",
        "whatItDoes": "Tests if counter i <= num; if True, prints current term t1.",
        "whyUsed": "Controls exact iteration count and prints each term on its own line.",
        "howItWorks": "Evaluates condition before each pass; loop terminates when i > num.",
        "connectionToSurrounding": "Body executes exactly num times.",
        "examRelevance": "Difference: while loop tests condition dynamically; for loop iterates over known sequence."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 8-10",
        "title": "Compute Next Term and Shift Sliding Window",
        "codeSnippet": "    nextTerm = t1 + t2\n    t1 = t2\n    t2 = nextTerm",
        "whatItDoes": "Adds t1 + t2 into nextTerm, moves t2 into t1, and assigns nextTerm into t2.",
        "whyUsed": "Applies Fibonacci formula and advances window forward by one position.",
        "howItWorks": "Three-step update algorithm maintains state for next iteration.",
        "connectionToSurrounding": "Prepares t1 for the next print(t1) call.",
        "examRelevance": "Can also be written concisely in Python as: t1, t2 = t2, t1 + t2."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Line 11",
        "title": "Increment Loop Counter (i = i + 1)",
        "codeSnippet": "    i = i + 1",
        "whatItDoes": "Increments loop counter i by 1 on each iteration.",
        "whyUsed": "Ensures progress toward loop termination condition (i <= num).",
        "howItWorks": "Adds 1 to integer i.",
        "connectionToSurrounding": "Mandatory final statement in while loop body.",
        "examRelevance": "Examiner trap: What happens if i = i + 1 is omitted? An INFINITE LOOP occurs because i remains 1 forever!"
      }
    ],
    "executionFlow": [
      "1. Prompts for num terms (e.g. 5).",
      "2. Initializes t1=0, t2=1, counter i=1.",
      "3. Prints \"Fibinocci Series\".",
      "4. Iteration 1 (i=1): prints 0. nextTerm=0+1=1. t1=1, t2=1. i becomes 2.",
      "5. Iteration 2 (i=2): prints 1. nextTerm=1+1=2. t1=1, t2=2. i becomes 3.",
      "6. Iteration 3 (i=3): prints 1. nextTerm=1+2=3. t1=2, t2=3. i becomes 4.",
      "7. Iteration 4 (i=4): prints 2. nextTerm=2+3=5. t1=3, t2=5. i becomes 5.",
      "8. Iteration 5 (i=5): prints 3. nextTerm=3+5=8. t1=5, t2=8. i becomes 6.",
      "9. Check condition: i (6) <= num (5) is False. While loop exits.",
      "10. Program finishes."
    ],
    "outputExplanation": {
      "description": "Trace of the while loop showing each variable value per iteration for num = 6.",
      "elementsBreakdown": [
        {
          "element": "Iteration 1",
          "sourceLine": "print(t1)",
          "explanation": "Prints 0. Next term = 0 + 1 = 1. New (t1, t2) = (1, 1)."
        },
        {
          "element": "Iteration 2",
          "sourceLine": "print(t1)",
          "explanation": "Prints 1. Next term = 1 + 1 = 2. New (t1, t2) = (1, 2)."
        },
        {
          "element": "Iteration 3",
          "sourceLine": "print(t1)",
          "explanation": "Prints 1. Next term = 1 + 2 = 3. New (t1, t2) = (2, 3)."
        },
        {
          "element": "Iteration 4",
          "sourceLine": "print(t1)",
          "explanation": "Prints 2. Next term = 2 + 3 = 5. New (t1, t2) = (3, 5)."
        },
        {
          "element": "Iteration 5",
          "sourceLine": "print(t1)",
          "explanation": "Prints 3. Next term = 3 + 5 = 8. New (t1, t2) = (5, 8)."
        }
      ]
    },
    "examNotes": [
      {
        "category": "library_syntax",
        "title": "Python Simultaneous Assignment",
        "description": "In Python, the 3-step shifting (`nextTerm = t1 + t2; t1 = t2; t2 = nextTerm`) can be compressed into a single elegant line: `t1, t2 = t2, t1 + t2`. External examiners love seeing this."
      },
      {
        "category": "common_mistakes",
        "title": "Infinite Loop Trap",
        "description": "Forgetting `i = i + 1` inside the while loop causes an infinite loop because i will permanently remain 1, crashing or freezing the terminal."
      },
      {
        "category": "pro_tips",
        "title": "Recursion vs Iteration",
        "description": "Iterative while loop has O(n) time complexity and O(1) space complexity. A naive recursive Fibonacci algorithm has exponential O(2^n) time complexity and will crash for large n due to maximum recursion depth limit."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the time complexity of this while loop Fibonacci implementation?",
        "answer": "The time complexity is O(n) because it iterates exactly n times. The auxiliary space complexity is O(1) because it uses only a fixed set of scalar variables.",
        "examinerTip": "Contrast this with naive recursion which is O(2^n)."
      },
      {
        "question": "How can you write t1 = t2 and t2 = nextTerm without temporary variable in Python?",
        "answer": "Using tuple packing and unpacking: t1, t2 = t2, t1 + t2. The right-hand expressions are evaluated first, then assigned simultaneously.",
        "examinerTip": "This is the most celebrated Pythonic idiom."
      },
      {
        "question": "What happens if the user enters 0 for num?",
        "answer": "Since i is initialized to 1, the condition i <= num (1 <= 0) is immediately False, so the while loop never executes and 0 terms are printed.",
        "examinerTip": "Demonstrates boundary value analysis."
      },
      {
        "question": "What is the Golden Ratio and how does it relate to Fibonacci numbers?",
        "answer": "The ratio between consecutive Fibonacci numbers F(n+1)/F(n) converges to approximately 1.6180339887 (phi, the Golden Ratio) as n approaches infinity.",
        "examinerTip": "A great bonus point in practical viva examinations."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "fibonacci-while"
  },
  {
    "id": 305,
    "subjectId": "major-15",
    "programNumber": 5,
    "title": "Read Last 5 Lines of a File",
    "pdfQuestion": "5. Write a Python program to read last 5 lines of a file.",
    "shortDescription": "File input/output handling using with open context managers, readlines(), negative sequence slicing, and iteration (Notes PDF code discrepancy).",
    "technologies": [
      "Python",
      "File Handling"
    ],
    "originalCode": "filename = \"D:\\\\sample.txt\" # Replace with your file name\nwith open(filename, \"r\") as file:\n    lines = file.readlines()\n# Get the last 5 lines\nlast_five = lines[-5:]\n# Print them\nfor line in lines:\n    print(line, end='')",
    "correctedCode": "# Corrected Implementation: loops through last_five instead of lines\nfilename = \"sample.txt\" # Uses local file or user-specified path\ntry:\n    with open(filename, \"r\") as file:\n        lines = file.readlines()\n    \n    # Extract the last 5 lines using negative slice [-5:]\n    last_five = lines[-5:]\n    \n    print(f\"Total lines in file: {len(lines)}\")\n    print(\"--- Last 5 lines ---\")\n    for line in last_five:\n        print(line, end='')\nexcept FileNotFoundError:\n    print(f\"Error: The file '{filename}' was not found. Please create it first.\")",
    "correctionExplanation": "Crucial Bug in PDF Code: In the PDF manual, the code defines `last_five = lines[-5:]` on line 5, but on line 7 it mistakenly executes `for line in lines:` instead of `for line in last_five:`. Because it loops over `lines`, the original PDF code actually prints the ENTIRE file rather than only the last 5 lines! Furthermore, `D:\\\\sample.txt` assumes a specific Windows D: drive. In LabMaster, the exact PDF code is preserved verbatim as primary, and the corrected version is provided in the Corrected tab with explanation.",
    "sampleOutputText": "Sample content in sample.txt:\nLine 1: Computer Science\nLine 2: Data Structures\nLine 3: Database Management\nLine 4: Software Engineering\nLine 5: Operating Systems\nLine 6: Computer Networks\nLine 7: Web Technologies\nLine 8: Artificial Intelligence\nLine 9: Machine Learning\nLine 10: Python Application Development\n\nOutput for last 5 lines:\nLine 6: Computer Networks\nLine 7: Web Technologies\nLine 8: Artificial Intelligence\nLine 9: Machine Learning\nLine 10: Python Application Development",
    "runLocallyGuide": {
      "fileName": "program5_file_last_lines.py",
      "pythonSteps": [
        "Create a text file named sample.txt with at least 8 to 10 lines of text in the same directory.",
        "If running original code on Windows, ensure D:\\sample.txt exists or change the path to sample.txt.",
        "Run: python program5_file_last_lines.py",
        "Verify the last 5 lines appear in terminal."
      ],
      "notes": "Remember: In the original code, change \"for line in lines:\" to \"for line in last_five:\" to print only the last 5 lines."
    },
    "objective": {
      "whatItDoes": "Opens a text file in read mode (\"r\") using the `with open()` context manager, reads all lines into a Python list of strings using `readlines()`, slices the list using negative indexing `[-5:]` to isolate the final five lines, and prints them.",
      "whyWritten": "To teach safe file I/O practices in Python, automatic resource cleanup with context managers, file reading methods, and list slicing with negative indices.",
      "conceptsDemonstrated": "Context manager (with open), readlines(), negative slicing ([-5:]), looping over file lines, end='' parameter in print().",
      "expectedOutputSummary": "Reads the target text file and outputs its final 5 lines without adding extraneous empty lines.",
      "problemSolved": "Log inspection and monitoring require viewing recent file tail entries without loading massive files into RAM. Demonstrates safe context manager file reading and negative list slicing [-5:].",
      "overallMechanism": "Uses with open(filename, \"r\") as file to automatically acquire and release OS file descriptor, reads lines into list via file.readlines(), extracts last 5 lines via slice [-5:], and prints with end=\"\" to preserve formatting.",
      "prerequisitesToUnderstand": "File I/O modes (\"r\", \"w\", \"a\"), with context manager statement, readlines() method, and negative list slicing."
    },
    "conceptsUsed": [
      {
        "name": "Context Manager (with open)",
        "description": "Automatically closes the file stream when the block exits, even if an exception occurs."
      },
      {
        "name": "readlines() Method",
        "description": "Reads the entire contents of a file and returns a list where each element is a line of text including trailing \\n."
      },
      {
        "name": "Negative List Slicing ([-5:])",
        "description": "Extracts elements starting 5 positions from the end up to the final element."
      },
      {
        "name": "print(line, end='')",
        "description": "Suppresses print()'s default newline character because readlines() already includes \\n at the end of each line."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Define Target Filename Path",
        "codeSnippet": "filename = \"D:\\\\sample.txt\" # Replace with your file name",
        "whatItDoes": "Stores string file path into variable filename.",
        "whyUsed": "Specifies path of text file to open.",
        "howItWorks": "Double backslash \\\\ escapes backslash character in Python string literals.",
        "connectionToSurrounding": "Passed into open() function on Line 2.",
        "examRelevance": "In Windows, backslashes must be escaped (\\\\) or written as raw string r\"D:\\sample.txt\"."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Line 2",
        "title": "Open File with Context Manager (with open(...) as file)",
        "codeSnippet": "with open(filename, \"r\") as file:",
        "whatItDoes": "Opens file in read-only text mode (\"r\") and binds file descriptor to handle variable \"file\".",
        "whyUsed": "Context manager (\"with\" statement) GUARANTEES the file is closed automatically, even if an exception occurs.",
        "howItWorks": "Invokes file __enter__() method; triggers __exit__() to close file when block finishes.",
        "connectionToSurrounding": "Encloses file reading operations on lines 3-8.",
        "examRelevance": "Top viva question: Why prefer \"with open()\" over plain \"open()\"? \"with\" automatically closes the file handle preventing resource leaks."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Line 3",
        "title": "Read All Lines into Memory (file.readlines())",
        "codeSnippet": "    lines = file.readlines()",
        "whatItDoes": "Reads the entire file line-by-line and returns a Python list of strings, where each element is one line.",
        "whyUsed": "Provides an indexed list that can be sliced by line index.",
        "howItWorks": "Reads until EOF, retaining newline character \\n at end of each string.",
        "connectionToSurrounding": "Supplies lines list sliced on Line 5.",
        "examRelevance": "file.read() returns 1 big string; file.readline() reads 1 line; file.readlines() returns list of lines."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Line 5",
        "title": "Extract Last 5 Lines via Negative Slice (lines[-5:])",
        "codeSnippet": "    # Get the last 5 lines\n    last_five = lines[-5:]",
        "whatItDoes": "Extracts the last 5 elements of list lines using negative index slicing [-5:].",
        "whyUsed": "Directly solves lab requirement: \"Read last 5 lines of a file\".",
        "howItWorks": "Starts 5 elements from end and slices to the end of the list.",
        "connectionToSurrounding": "Target sublist of lines.",
        "examRelevance": "Examiner favorite: If file has fewer than 5 lines (e.g. 3 lines), lines[-5:] does NOT crash; it simply returns all 3 lines."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 7-8",
        "title": "Iterate and Print with end=\"\" to Avoid Double Newlines",
        "codeSnippet": "    # Print them\n    for line in lines:\n        print(line, end='')",
        "whatItDoes": "Loops through lines and prints each line suppressing print()'s default newline using end=''.",
        "whyUsed": "Because each line string from readlines() already ends with \\n, end='' prevents double line spacing.",
        "howItWorks": "print() replaces its default trailing \\n with empty string ''.",
        "connectionToSurrounding": "Concludes file reading program.",
        "examRelevance": "PDF Bug Note: In original lab PDF, Line 7 loops over \"lines\" instead of \"last_five\". The corrected version iterates \"last_five\"."
      }
    ],
    "executionFlow": [
      "1. Assigns target file path to filename.",
      "2. Opens file in read mode using with statement.",
      "3. readlines() reads entire file into list of strings.",
      "4. File is automatically closed upon exiting the with block.",
      "5. Slices list: last_five = lines[-5:].",
      "6. Loops through the lines and outputs each line using print(line, end='').",
      "7. Script completes execution."
    ],
    "outputExplanation": {
      "description": "The output displays the trailing 5 lines of the target text file.",
      "elementsBreakdown": [
        {
          "element": "with open(...)",
          "sourceLine": "with open(filename, \"r\") as file:",
          "explanation": "Opens the file stream and assigns it to alias file."
        },
        {
          "element": "last_five = lines[-5:]",
          "sourceLine": "last_five = lines[-5:]",
          "explanation": "Slices from index len - 5 to end."
        },
        {
          "element": "print(line, end='')",
          "sourceLine": "print(line, end='')",
          "explanation": "Outputs each line verbatim without doubling newlines."
        }
      ]
    },
    "examNotes": [
      {
        "category": "common_mistakes",
        "title": "The Loop Variable Bug",
        "description": "Be sure to mention to the lab examiner: In the PDF syllabus script, `last_five = lines[-5:]` is computed, but the following loop says `for line in lines:`! Pointing out that it should be `for line in last_five:` shows exceptional vigilance and deep understanding."
      },
      {
        "category": "library_syntax",
        "title": "Why end='' is Necessary",
        "description": "In Python, each string returned by readlines() already ends with `\\n`. The print() function also appends an automatic `\\n` by default. Omitting `end=''` would cause an unwanted empty line between every printed line."
      },
      {
        "category": "pro_tips",
        "title": "Memory for Very Large Files",
        "description": "For massive gigabyte-scale log files, readlines() loads the entire file into RAM, which could cause an OutOfMemory error. For huge files, `collections.deque(file, maxlen=5)` is the industry best practice."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the advantage of using \"with open(...)\" over \"open(...)\" followed by \"close()\"?",
        "answer": "The \"with\" statement implements a context manager. It guarantees that the file is closed automatically as soon as execution leaves the block, even if an unhandled exception or crash occurs inside.",
        "examinerTip": "Mention the __enter__ and __exit__ dunder methods."
      },
      {
        "question": "What happens if the file has only 2 lines and we execute lines[-5:]?",
        "answer": "Python slicing is safe and resilient: it does not throw an IndexError. It simply returns all available lines from index 0 to the end (in this case, all 2 lines).",
        "examinerTip": "Examiners test your knowledge of slice boundary safety."
      },
      {
        "question": "What is the difference between read(), readline(), and readlines()?",
        "answer": "read() reads the entire file as a single str. readline() reads one line at a time as a str. readlines() reads all lines and returns them as a list of strings.",
        "examinerTip": "Be very crisp with the return types: str vs list of str."
      },
      {
        "question": "How do you handle the case where the specified file does not exist?",
        "answer": "Wrap the file opening in a try-except block catching FileNotFoundError, e.g. `except FileNotFoundError: print(\"File not found\")`.",
        "examinerTip": "Shows good software engineering practice."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "file-last-lines"
  },
  {
    "id": 306,
    "subjectId": "major-15",
    "programNumber": 6,
    "title": "Sum and Product of Two Compatible Matrices",
    "pdfQuestion": "6. Write a python program to calculate the sum and product of two compatible matrices.",
    "shortDescription": "Matrix addition and multiplication using nested list comprehensions, 2D nested loops, and matrix compatibility rules (Notes PDF code discrepancy).",
    "technologies": [
      "Python"
    ],
    "originalCode": "rows = int(input('Enter number of rows: '))\ncols = int(input('Enter number of column: '))\n\nprint() # for new line\nprint('Enter values for matrix A')\nmatrix_A = [[int(input(\"Enter any value:\")) for j in range(cols)] for i in range(rows)]\n\nprint() # for new line\nprint('Enter values for matrix B ')\nmatrix_B = [[int(input(\"Enter any value:\")) for j in range(cols)] for i in range(rows)]\n\nprint() # for new line\n# resultant matrix (matrix that store answer and intially it is Zero)\nresult = [[0 for j in range(cols)] for i in range(rows)]\n\n# addition\nfor i in range(rows):\n    for j in range(cols):\n        result[i][j] = matrix_A[i][j] + matrix_B[i][j]\n\nprint() # for new line\nprint('Addition of Matrix-A and Matrix-B is :')\nfor i in result:\n    print(i)\n\n# Multiplication\nfor i in range(rows):\n    for j in range(cols):\n        for k in range(cols):\n            result[i][j] = matrix_A[i][k] * matrix_B[k][j]\n\nprint() # for new line\nprint('Multiplication of Matrix-A and Matrix-B is :')\nfor i in result:\n    print(i)",
    "correctedCode": "# Standard Corrected Matrix Multiplication with Accumulator (+=)\nrows = int(input('Enter number of rows: '))\ncols = int(input('Enter number of columns: '))\n\nprint('\\nEnter values for Matrix A:')\nmatrix_A = [[int(input(f\"A[{i}][{j}]: \")) for j in range(cols)] for i in range(rows)]\n\nprint('\\nEnter values for Matrix B:')\nmatrix_B = [[int(input(f\"B[{i}][{j}]: \")) for j in range(cols)] for i in range(rows)]\n\n# 1. Matrix Addition\nadd_result = [[matrix_A[i][j] + matrix_B[i][j] for j in range(cols)] for i in range(rows)]\nprint('\\nAddition of Matrix-A and Matrix-B is :')\nfor r in add_result:\n    print(r)\n\n# 2. Matrix Multiplication (Requires rows == cols for square matrices in this setup)\n# Note: True matrix dot product accumulates sums across k: result[i][j] += A[i][k] * B[k][j]\nmult_result = [[0 for _ in range(cols)] for _ in range(rows)]\nfor i in range(rows):\n    for j in range(cols):\n        mult_result[i][j] = sum(matrix_A[i][k] * matrix_B[k][j] for k in range(cols))\n\nprint('\\nMultiplication of Matrix-A and Matrix-B is :')\nfor r in mult_result:\n    print(r)",
    "correctionExplanation": "Crucial Bug in PDF Multiplication Code: In the PDF manual, the multiplication loop writes `result[i][j] = matrix_A[i][k] * matrix_B[k][j]` with assignment (`=`) instead of accumulation (`+=`). Because it overwrites rather than adds, the inner loop discards all previous terms of the dot product and only keeps the final product `k = cols - 1`! Furthermore, it re-uses the same `result` matrix without zeroing it out between addition and multiplication. In LabMaster, the exact PDF code is preserved verbatim as primary, and the mathematically correct matrix multiplication is provided in the Corrected tab.",
    "sampleOutputText": "Enter number of rows: 2\nEnter number of column: 2\n\nEnter values for matrix A\nEnter any value: 1\nEnter any value: 2\nEnter any value: 3\nEnter any value: 4\n\nEnter values for matrix B \nEnter any value: 5\nEnter any value: 6\nEnter any value: 7\nEnter any value: 8\n\nAddition of Matrix-A and Matrix-B is :\n[6, 8]\n[10, 12]\n\nMultiplication of Matrix-A and Matrix-B is :\n[14, 16]\n[28, 32]",
    "runLocallyGuide": {
      "fileName": "program6_matrices.py",
      "pythonSteps": [
        "Save code as program6_matrices.py.",
        "Run: python program6_matrices.py",
        "Enter rows (e.g. 2) and cols (e.g. 2).",
        "Input matrix values for A and B.",
        "Verify matrix addition and multiplication."
      ],
      "notes": "Notice the difference in multiplication when using corrected += accumulation vs original single assignment."
    },
    "objective": {
      "whatItDoes": "Reads dimensions for two compatible 2D matrices, populates them via nested list comprehensions, performs element-wise addition, and computes the matrix multiplication product using three nested loops.",
      "whyWritten": "To teach multi-dimensional lists (lists of lists), nested list comprehensions, 2D and 3D nested for loops, and matrix arithmetic concepts in pure Python.",
      "conceptsDemonstrated": "2D arrays as lists of lists, nested list comprehensions, nested loops (i, j, k), matrix addition, dot-product multiplication.",
      "expectedOutputSummary": "Displays the resulting matrices for addition and multiplication formatted row by row.",
      "problemSolved": "2D matrix algebra is foundational to graphics and machine learning. This program demonstrates nested list comprehensions for dynamic 2D grid input, matrix addition, and standard 3-loop matrix dot multiplication.",
      "overallMechanism": "Prompts for row and col dimensions, dynamically reads matrices A and B using nested list comprehensions, computes element-wise sum (A[i][j] + B[i][j]), and computes dot product using three nested loops across index k (A[i][k] * B[k][j]).",
      "prerequisitesToUnderstand": "Nested lists as 2D matrices, list comprehensions, matrix compatibility rules (columns of A must equal rows of B for multiplication)."
    },
    "conceptsUsed": [
      {
        "name": "2D Matrix Representation",
        "description": "Representing a matrix as a list of lists, e.g. [[1, 2], [3, 4]] where matrix[row][col] accesses elements."
      },
      {
        "name": "Nested List Comprehension",
        "description": "[[int(input(...)) for j in range(cols)] for i in range(rows)] constructs a 2D matrix in a single expressive statement."
      },
      {
        "name": "Matrix Addition",
        "description": "For compatible matrices of identical dimension, result[i][j] = A[i][j] + B[i][j]."
      },
      {
        "name": "Matrix Multiplication",
        "description": "Row-by-column dot product: result[i][j] = sum over k of (A[i][k] * B[k][j])."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-2",
        "title": "Input Matrix Dimensions (rows and cols)",
        "codeSnippet": "rows = int(input('Enter number of rows: '))\ncols = int(input('Enter number of column: '))",
        "whatItDoes": "Reads integer row count and column count from user.",
        "whyUsed": "Defines dimension boundaries for both matrices.",
        "howItWorks": "Stores integer dimensions in rows and cols.",
        "connectionToSurrounding": "Controls loop ranges in steps 2, 3, 4, 5, and 6.",
        "examRelevance": "For both addition and square multiplication, matrices share dimensions rows x cols."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 5-6",
        "title": "Input Matrix A via Nested List Comprehension",
        "codeSnippet": "print('Enter values for matrix A')\nmatrix_A = [[int(input(\"Enter any value:\")) for j in range(cols)] for i in range(rows)]",
        "whatItDoes": "Constructs a 2D list matrix_A by prompting for values row-by-row using nested list comprehensions.",
        "whyUsed": "Creates dynamic 2D array representation in memory without hardcoded dimensions.",
        "howItWorks": "Inner comprehension builds a row of length cols; outer comprehension repeats for rows times.",
        "connectionToSurrounding": "First operand matrix.",
        "examRelevance": "Nested list comprehension is an idiomatic Python technique for building 2D grids."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 9-10",
        "title": "Input Matrix B via Nested List Comprehension",
        "codeSnippet": "print('Enter values for matrix B ')\nmatrix_B = [[int(input(\"Enter any value:\")) for j in range(cols)] for i in range(rows)]",
        "whatItDoes": "Constructs second 2D list matrix_B with identical dimensions rows x cols.",
        "whyUsed": "Second operand matrix.",
        "howItWorks": "Reads integer inputs into nested list.",
        "connectionToSurrounding": "Second operand matrix for addition and multiplication.",
        "examRelevance": "For matrix addition, Matrix A and Matrix B MUST have identical dimensions."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 13-14",
        "title": "Initialize Result Matrix to Zeros",
        "codeSnippet": "# resultant matrix (matrix that store answer and intially it is Zero)\nresult = [[0 for j in range(cols)] for i in range(rows)]",
        "whatItDoes": "Creates a 2D list of dimensions rows x cols filled with 0 at every position.",
        "whyUsed": "Allocates memory grid to store computed sums and products.",
        "howItWorks": "Builds independent list rows initialized with zero.",
        "connectionToSurrounding": "Modified in place during addition and multiplication.",
        "examRelevance": "Never do [[0]*cols]*rows! That creates shallow copies where modifying one row modifies all rows."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 16-24",
        "title": "Matrix Addition (result[i][j] = A[i][j] + B[i][j])",
        "codeSnippet": "# addition\nfor i in range(rows):\n    for j in range(cols):\n        result[i][j] = matrix_A[i][j] + matrix_B[i][j]\n\nprint('Addition of Matrix-A and Matrix-B is :')\nfor i in result:\n    print(i)",
        "whatItDoes": "Iterates through every cell (i, j), sums corresponding elements of A and B, and prints result matrix.",
        "whyUsed": "Implements standard mathematical matrix addition.",
        "howItWorks": "Two nested loops traverse rows and columns adding elements.",
        "connectionToSurrounding": "First matrix operation demonstrated.",
        "examRelevance": "Complexity of matrix addition is O(rows * cols)."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 26-35",
        "title": "Matrix Multiplication (Three Nested Loops)",
        "codeSnippet": "# Multiplication\nfor i in range(rows):\n    for j in range(cols):\n        for k in range(cols):\n            result[i][j] = matrix_A[i][k] * matrix_B[k][j]\n\nprint('Multiplication of Matrix-A and Matrix-B is :')\nfor i in result:\n    print(i)",
        "whatItDoes": "Computes matrix product using three nested loops and prints result.",
        "whyUsed": "Demonstrates matrix multiplication algorithm.",
        "howItWorks": "i traverses rows of A, j traverses cols of B, k traverses elements accumulating dot product.",
        "connectionToSurrounding": "PDF Bug Note: On Line 30, the PDF writes \"=\" instead of \"+=\". The corrected code uses \"+=\" to properly accumulate the dot product.",
        "examRelevance": "Examiner favorite: Matrix multiplication requires accumulating dot product (sum of products), so result[i][j] += A[i][k] * B[k][j]."
      }
    ],
    "executionFlow": [
      "1. Inputs rows and cols integers.",
      "2. Fills matrix_A via nested list comprehension.",
      "3. Fills matrix_B via nested list comprehension.",
      "4. Allocates result matrix initialized with zeros.",
      "5. Computes matrix addition result[i][j] = A[i][j] + B[i][j].",
      "6. Prints addition result row by row.",
      "7. Computes matrix multiplication using triple nested loop (i, j, k).",
      "8. Prints multiplication result row by row."
    ],
    "outputExplanation": {
      "description": "Outputs the two computed matrices (addition and multiplication).",
      "elementsBreakdown": [
        {
          "element": "[6, 8]\n[10, 12]",
          "sourceLine": "result[i][j] = matrix_A[i][j] + matrix_B[i][j]",
          "explanation": "Element-wise addition: [[1+5, 2+6], [3+7, 4+8]]."
        },
        {
          "element": "Multiplication Output",
          "sourceLine": "result[i][j] = matrix_A[i][k] * matrix_B[k][j]",
          "explanation": "Result of the 3-loop multiplication procedure."
        }
      ]
    },
    "examNotes": [
      {
        "category": "common_mistakes",
        "title": "Assignment vs Accumulation Bug",
        "description": "Be sure to highlight that in true matrix multiplication, `result[i][j] += matrix_A[i][k] * matrix_B[k][j]` must accumulate the sum of products. Mentioning this bug in the manual will instantly prove your mastery to any external examiner!"
      },
      {
        "category": "library_syntax",
        "title": "Matrix Compatibility Condition",
        "description": "For multiplication A x B, the number of columns in A MUST equal the number of rows in B (compatible matrices). If A is m x k and B is k x n, the product matrix has dimensions m x n."
      },
      {
        "category": "pro_tips",
        "title": "Why [[0]*cols]*rows is a Trap",
        "description": "Writing `result = [[0]*cols]*rows` duplicates the exact same list reference in memory. Writing `result[0][0] = 5` would change index 0 in EVERY row. Using list comprehension `[[0 for _ in range(cols)] for _ in range(rows)]` creates genuinely independent sublists."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the condition for two matrices to be compatible for addition vs multiplication?",
        "answer": "For addition, both matrices must have the exact same dimensions (m x n and m x n). For multiplication, the number of columns of matrix A must equal the number of rows of matrix B (m x k and k x n).",
        "examinerTip": "Give a concrete dimension example: (2x3) * (3x4) yields (2x4)."
      },
      {
        "question": "What is the time complexity of naive matrix multiplication?",
        "answer": "O(n^3) for two n x n square matrices, because there are three nested loops each running n times.",
        "examinerTip": "Advanced students can mention Strassen's algorithm which achieves ~O(n^2.81)."
      },
      {
        "question": "How can matrix multiplication be done in one line with NumPy?",
        "answer": "Using `np.dot(matrix_A, matrix_B)` or the matrix multiplication operator `matrix_A @ matrix_B`.",
        "examinerTip": "The @ operator was added in Python 3.5 specifically for matrix multiplication."
      },
      {
        "question": "Why does print(i) in \"for i in result:\" print list format?",
        "answer": "Because result is a list of lists. Each element i in result is itself a list representing one row, so print(i) displays [val1, val2].",
        "examinerTip": "Shows you understand 2D data structure anatomy."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "matrix-ops"
  },
  {
    "id": 307,
    "subjectId": "major-15",
    "programNumber": 7,
    "title": "Implementation of Exception Handling (try, except, else, finally)",
    "pdfQuestion": "7. Write a program to implement exception handling.",
    "shortDescription": "Robust error handling demonstrating try, except ZeroDivisionError, except ValueError/TypeError, except Exception, else, and finally blocks across multiple test cases.",
    "technologies": [
      "Python",
      "Exception Handling"
    ],
    "originalCode": "def divide_numbers(numerator, denominator):\n    try:\n        result = numerator / denominator\n    except ZeroDivisionError:\n        print(\"Error: Cannot divide by zero!\")\n        return None\n    except ValueError as e # Note: PDF is missing colon ':' here\n        print(f\"Error: Invalid input type - {e}\")\n        return None\n    except Exception as e:\n        print(f\"An unexpected error occurred: {e}\")\n        return None\n    else:\n        print(f\"Division successful. Result: {result}\")\n        return result\n    finally:\n        print(\"Division attempt complete.\")\n\n# --- Test Cases ---\n# Case 1: Successful division\nprint(\"--- Test Case 1: Valid Division ---\")\ndivide_numbers(10, 2)\nprint(\"\\n\")\n\n# Case 2: ZeroDivisionError\nprint(\"--- Test Case 2: Division by zero ---\")\ndivide_numbers(10, 0)\nprint(\"\\n\")\n\n# Case 3: ValueError (invalid type for denominator)\nprint(\"--- Test Case 3: Invalid input type ---\")\ndivide_numbers(10, \"abc\")\nprint(\"\\n\")",
    "correctedCode": "# Corrected Implementation: Added missing colon and handles TypeError for \"abc\"\ndef divide_numbers(numerator, denominator):\n    try:\n        result = numerator / denominator\n    except ZeroDivisionError:\n        print(\"Error: Cannot divide by zero!\")\n        return None\n    except (ValueError, TypeError) as e:  # Added missing ':' and included TypeError\n        print(f\"Error: Invalid input type - {e}\")\n        return None\n    except Exception as e:\n        print(f\"An unexpected error occurred: {e}\")\n        return None\n    else:\n        print(f\"Division successful. Result: {result}\")\n        return result\n    finally:\n        print(\"Division attempt complete.\")\n\n# --- Test Cases ---\n# Case 1: Successful division (10 / 2 = 5.0)\nprint(\"--- Test Case 1: Valid Division ---\")\ndivide_numbers(10, 2)\nprint()\n\n# Case 2: Division by zero (10 / 0)\nprint(\"--- Test Case 2: Division by zero ---\")\ndivide_numbers(10, 0)\nprint()\n\n# Case 3: Invalid string type (10 / \"abc\" raises TypeError in Python)\nprint(\"--- Test Case 3: Invalid input type ---\")\ndivide_numbers(10, \"abc\")\nprint()",
    "correctionExplanation": "Two Important Notes regarding the PDF Source Code:\n1. Syntax Error in PDF: On line 8 of the PDF code, `except ValueError as e` is missing the terminating colon `:`. In Python, every compound statement header must end with a colon, otherwise it throws `SyntaxError: expected ':'`.\n2. TypeError vs ValueError: In Test Case 3, passing a string `\"abc\"` into `10 / \"abc\"` actually raises a `TypeError: unsupported operand type(s) for /: 'int' and 'str'` in Python, NOT a `ValueError`. In the original PDF code, because only `ValueError` is caught specifically, the third test case actually falls into the general `except Exception as e:` handler instead of the `ValueError` branch! In the corrected version, we handle `(ValueError, TypeError)` so it catches it properly.",
    "sampleOutputText": "--- Test Case 1: Valid Division ---\nDivision successful. Result: 5.0\nDivision attempt complete.\n\n--- Test Case 2: Division by zero ---\nError: Cannot divide by zero!\nDivision attempt complete.\n\n--- Test Case 3: Invalid input type ---\nAn unexpected error occurred: unsupported operand type(s) for /: 'int' and 'str'\nDivision attempt complete.",
    "runLocallyGuide": {
      "fileName": "program7_exception_handling.py",
      "pythonSteps": [
        "Save the corrected code as program7_exception_handling.py (ensuring line 8 has a colon \":\").",
        "Run: python program7_exception_handling.py",
        "Observe how the finally block executes unconditionally across all 3 test cases."
      ],
      "notes": "Make sure to add the colon on line 8 when testing in Python IDLE or terminal, as missing colons prevent script compilation."
    },
    "objective": {
      "whatItDoes": "Defines a division function safeguarded by Python's complete exception handling framework (`try`, `except`, `else`, and `finally`) and executes three representative test cases: normal division, division by zero, and invalid operand types.",
      "whyWritten": "To demonstrate defensive programming, error interception without abnormal program termination, specific vs generic exception hierarchy, and the guaranteed execution semantics of the finally block.",
      "conceptsDemonstrated": "try block, except ZeroDivisionError, except ValueError/TypeError, general except Exception, else block (executed only on zero errors), finally block (guaranteed cleanup).",
      "expectedOutputSummary": "Demonstrates output for all three cases: successful calculation with result, zero division error notice, and invalid type interception, each followed by \"Division attempt complete.\"",
      "problemSolved": "Runtime errors (dividing by zero, non-numeric inputs) cause unhandled exceptions that crash applications. Exception handling intercepts errors gracefully, maintains program stability, and guarantees resource cleanup.",
      "overallMechanism": "Wraps risky operations in try: block, catches specific errors with except ZeroDivisionError: and except ValueError:, catches unexpected exceptions with except Exception:, executes else: on success, and guarantees finally: executes unconditionally.",
      "prerequisitesToUnderstand": "Python exception hierarchy, try, except, else, finally blocks, and difference between compile-time syntax errors and runtime exceptions."
    },
    "conceptsUsed": [
      {
        "name": "try Block",
        "description": "Encloses code that might potentially raise a runtime exception."
      },
      {
        "name": "except Block",
        "description": "Catches and handles specific exception classes when raised inside the try block."
      },
      {
        "name": "else Clause",
        "description": "Executes ONLY if NO exceptions were raised in the try block."
      },
      {
        "name": "finally Clause",
        "description": "ALWAYS executes before leaving the try/except construct, regardless of whether exceptions were raised or caught, or if return was executed."
      },
      {
        "name": "Exception Hierarchy",
        "description": "Specific exceptions (ZeroDivisionError) must be caught before base exceptions (Exception)."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Define Function divide_numbers(numerator, denominator)",
        "codeSnippet": "def divide_numbers(numerator, denominator):",
        "whatItDoes": "Defines reusable division function taking two arguments: numerator and denominator.",
        "whyUsed": "Encapsulates division logic and error handling into a callable routine.",
        "howItWorks": "Creates function object in local namespace.",
        "connectionToSurrounding": "Encloses try/except blocks evaluated during test cases on lines 21-33.",
        "examRelevance": "Functions allow testing multiple scenarios systematically."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 2-3",
        "title": "Risky Code Inside try Block",
        "codeSnippet": "    try:\n        result = numerator / denominator",
        "whatItDoes": "Attempts division numerator / denominator inside protected try block.",
        "whyUsed": "Monitors expression for potential runtime exceptions (e.g. division by 0, invalid types).",
        "howItWorks": "If division succeeds, proceeds to else block. If an exception is raised, execution jumps immediately to matching except block.",
        "connectionToSurrounding": "Guarded computation.",
        "examRelevance": "Any statement that could raise a runtime exception should be wrapped in try."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 4-6",
        "title": "Catch Specific Exception: except ZeroDivisionError",
        "codeSnippet": "    except ZeroDivisionError:\n        print(\"Error: Cannot divide by zero!\")\n        return None",
        "whatItDoes": "Catches division by zero error, prints custom friendly error message, and returns None.",
        "whyUsed": "Prevents application crash when denominator is 0.",
        "howItWorks": "Matches Python's built-in ZeroDivisionError exception class.",
        "connectionToSurrounding": "Triggered when Test Case 2 runs (10 / 0).",
        "examRelevance": "Always catch specific exceptions before generic Exception."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 7-9",
        "title": "Catch ValueError / TypeError with Alias",
        "codeSnippet": "    except ValueError as e: # Note: PDF is missing colon ':' here\n        print(f\"Error: Invalid input type - {e}\")\n        return None",
        "whatItDoes": "Catches value errors, binds error object to variable e, prints details, and returns None.",
        "whyUsed": "Handles invalid argument values.",
        "howItWorks": "\"as e\" captures the exception instance to inspect system message.",
        "connectionToSurrounding": "PDF note: Original lab PDF omitted colon (:) on line 7 and raises TypeError on strings; corrected code addresses this.",
        "examRelevance": "Syntax check: Colons are mandatory after except clauses."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 10-12",
        "title": "Generic Fallback: except Exception as e",
        "codeSnippet": "    except Exception as e:\n        print(f\"An unexpected error occurred: {e}\")\n        return None",
        "whatItDoes": "Catches any other unexpected exception derived from base Exception class.",
        "whyUsed": "Safety net to ensure the application never crashes from unhandled errors.",
        "howItWorks": "Exception is parent class of almost all built-in runtime exceptions.",
        "connectionToSurrounding": "Catches TypeError raised by 10 / \"abc\".",
        "examRelevance": "Generic except Exception should always be placed LAST after specific exceptions."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 13-15",
        "title": "Success Handler: else Block",
        "codeSnippet": "    else:\n        print(f\"Division successful. Result: {result}\")\n        return result",
        "whatItDoes": "Executes ONLY if NO exception was raised in the try block.",
        "whyUsed": "Separates happy path handling from error catching.",
        "howItWorks": "Runs after try completes successfully without triggering any except.",
        "connectionToSurrounding": "Executes during Test Case 1 (10 / 2 = 5.0).",
        "examRelevance": "Top viva question: When does the \"else\" block execute? Only when NO exceptions are raised in the try block."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 16-17",
        "title": "Cleanup Guarantee: finally Block",
        "codeSnippet": "    finally:\n        print(\"Division attempt complete.\")",
        "whatItDoes": "Prints \"Division attempt complete.\" unconditionally, whether an error occurred or not.",
        "whyUsed": "Guarantees execution of cleanup code (closing files, sockets, database locks).",
        "howItWorks": "Runs after try, except, or else, even if a return statement was already reached.",
        "connectionToSurrounding": "Executes at the end of every call.",
        "examRelevance": "Number one viva question: Does \"finally\" run if there is a return statement inside try or except? YES, finally ALWAYS executes!"
      },
      {
        "stepNumber": 8,
        "lineNumberRange": "Lines 19-33",
        "title": "Execute Three Test Cases (Valid, ZeroDivision, TypeError)",
        "codeSnippet": "# Case 1: Successful division\nprint(\"--- Test Case 1: Valid Division ---\")\ndivide_numbers(10, 2)\n# Case 2: ZeroDivisionError\nprint(\"--- Test Case 2: Division by zero ---\")\ndivide_numbers(10, 0)\n# Case 3: Invalid input type\nprint(\"--- Test Case 3: Invalid input type ---\")\ndivide_numbers(10, \"abc\")",
        "whatItDoes": "Tests all three execution branches: valid division (10/2), zero division (10/0), and string argument (10/\"abc\").",
        "whyUsed": "Validates that each exception handler functions as designed.",
        "howItWorks": "Triggers try->else->finally (Case 1), try->except ZeroDivisionError->finally (Case 2), and try->except Exception->finally (Case 3).",
        "connectionToSurrounding": "Proves complete test coverage.",
        "examRelevance": "Demonstrates thorough testing methodology in practical examination."
      }
    ],
    "executionFlow": [
      "1. Calls divide_numbers(10, 2): 10/2 evaluates to 5.0 without error.",
      "2. Skips all except blocks.",
      "3. Executes else block: prints \"Division successful. Result: 5.0\".",
      "4. Executes finally block: prints \"Division attempt complete.\"",
      "5. Calls divide_numbers(10, 0): raises ZeroDivisionError in try block.",
      "6. Intercepted by except ZeroDivisionError: prints \"Error: Cannot divide by zero!\".",
      "7. Executes finally block: prints \"Division attempt complete.\"",
      "8. Calls divide_numbers(10, \"abc\"): raises TypeError.",
      "9. Falls into except Exception as e: prints \"An unexpected error occurred: unsupported operand type(s)...\"",
      "10. Executes finally block: prints \"Division attempt complete.\"",
      "11. Script terminates normally."
    ],
    "outputExplanation": {
      "description": "Demonstrates the exact execution path and printed output for each of the three test cases.",
      "elementsBreakdown": [
        {
          "element": "Case 1 (10, 2)",
          "sourceLine": "divide_numbers(10, 2)",
          "explanation": "Executes try -> else -> finally."
        },
        {
          "element": "Case 2 (10, 0)",
          "sourceLine": "divide_numbers(10, 0)",
          "explanation": "Executes try -> except ZeroDivisionError -> finally."
        },
        {
          "element": "Case 3 (10, \"abc\")",
          "sourceLine": "divide_numbers(10, \"abc\")",
          "explanation": "Executes try -> except Exception -> finally."
        },
        {
          "element": "Division attempt complete.",
          "sourceLine": "finally: print(...)",
          "explanation": "Appears after every single test case without exception."
        }
      ]
    },
    "examNotes": [
      {
        "category": "common_mistakes",
        "title": "The Missing Colon Syntax Trap",
        "description": "In the lab manual PDF, `except ValueError as e` is missing a colon `:`. If you copy it directly into a Python interpreter without adding the colon, Python will refuse to run the file, reporting `SyntaxError: expected ':'`. Always add the colon in lab exams!"
      },
      {
        "category": "library_syntax",
        "title": "TypeError vs ValueError",
        "description": "Dividing an int by a string like `10 / \"abc\"` raises a `TypeError` in Python, because the division operator `/` is unsupported between those two types. A `ValueError` would occur if you wrote `int(\"abc\")`."
      },
      {
        "category": "pro_tips",
        "title": "Exception Order Hierarchy",
        "description": "Always place more specific exceptions (ZeroDivisionError) before generic base exceptions (Exception). If `except Exception:` were placed first, it would catch everything, rendering all subsequent except blocks dead code."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the exact execution order of try, except, else, and finally?",
        "answer": "1. The try block runs. 2. If an exception occurs, matching except block runs. 3. If NO exception occurs, else block runs. 4. In ALL cases, finally block runs before leaving.",
        "examinerTip": "Memorize this 4-step sequence verbatim."
      },
      {
        "question": "Does the finally block run if there is a return statement inside the try or except block?",
        "answer": "Yes! Even if try or except contains a \"return\", Python suspends the return, executes the finally block completely, and only then delivers the returned value to the caller.",
        "examinerTip": "This is the #1 favorite viva question asked on exception handling."
      },
      {
        "question": "What is the base class for all built-in exceptions in Python?",
        "answer": "BaseException is the root class, but user-defined and standard non-system-exiting exceptions inherit from the Exception class.",
        "examinerTip": "SystemExit and KeyboardInterrupt inherit directly from BaseException, not Exception."
      },
      {
        "question": "How can you manually raise an exception in Python?",
        "answer": "Using the `raise` keyword, for example: `raise ValueError(\"Number must be positive\")`.",
        "examinerTip": "Shows you know both catching and raising exceptions."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "exception-handling"
  },
  {
    "id": 308,
    "subjectId": "major-15",
    "programNumber": 8,
    "title": "Multithreading in Python (threading Module, start, join & time.sleep)",
    "pdfQuestion": "8. Write a program to implement Multithreading",
    "shortDescription": "Concurrent multi-threaded execution using Python's threading.Thread class, starting worker threads, simulated I/O delay, and synchronization with join().",
    "technologies": [
      "Python",
      "Multithreading"
    ],
    "originalCode": "import threading\nimport time\n\n# Function for thread 1\ndef print_numbers():\n    for i in range(1, 6):\n        print(f\"Number: {i}\")\n        time.sleep(1)\n\n# Function for thread 2\ndef print_letters():\n    for letter in ['A', 'B', 'C', 'D', 'E']:\n        print(f\"Letter: {letter}\")\n        time.sleep(1)\n\nprint()\n# Create threads\nthread1 = threading.Thread(target=print_numbers)\nthread2 = threading.Thread(target=print_letters)\n\n# Start threads\nthread1.start()\nthread2.start()\n\n# Wait for both threads to finish\nthread1.join()\nthread2.join()\n\nprint(\"Finished executing both threads.\")",
    "sampleOutputText": "Number: 1\nLetter: A\nNumber: 2\nLetter: B\nNumber: 3\nLetter: C\nNumber: 4\nLetter: D\nNumber: 5\nLetter: E\nFinished executing both threads.",
    "runLocallyGuide": {
      "fileName": "program8_multithreading.py",
      "pythonSteps": [
        "Save code as program8_multithreading.py.",
        "Run: python program8_multithreading.py",
        "Observe numbers and letters printing concurrently with 1-second intervals.",
        "Notice that the final \"Finished executing both threads.\" only prints after 5 seconds when both threads complete."
      ],
      "notes": "Standard library modules (threading and time) — zero installation required."
    },
    "objective": {
      "whatItDoes": "Creates two independent concurrent threads of execution: thread1 counts numbers 1 through 5, while thread2 iterates through characters 'A' through 'E'. Both run concurrently with 1-second simulated delay and synchronize with the main thread using join().",
      "whyWritten": "To teach multithreading concepts in Python, target function assignment, thread spawning (.start()), thread joining (.join()), concurrency, and non-blocking operations.",
      "conceptsDemonstrated": "import threading, import time, threading.Thread(target=...), thread.start(), thread.join(), time.sleep(1), thread synchronization.",
      "expectedOutputSummary": "Interleaved console output of numbers and letters appearing in parallel every second, followed by a completion confirmation message.",
      "problemSolved": "Synchronous programs block execution during long tasks (like I/O or sleep), wasting CPU cycles. Multithreading enables concurrent execution of multiple tasks within a single process.",
      "overallMechanism": "Imports threading module, defines two worker functions print_numbers() and print_letters(), wraps them in threading.Thread(target=...), launches them concurrently with .start(), and synchronizes main thread termination using .join().",
      "prerequisitesToUnderstand": "Concurrency vs parallelism, thread lifecycle (created, running, blocked, terminated), and thread synchronization with join()."
    },
    "conceptsUsed": [
      {
        "name": "Multithreading",
        "description": "Technique where multiple light-weight processes (threads) within a single process share the same memory space and run concurrently."
      },
      {
        "name": "threading.Thread",
        "description": "Python class used to instantiate a thread object targeting a callable function."
      },
      {
        "name": "thread.start() vs thread.run()",
        "description": ".start() spawns a new operating-system thread and invokes its run() method concurrently. Calling .run() directly would run sequentially on the main thread!"
      },
      {
        "name": "thread.join()",
        "description": "Blocks the calling thread (main thread) until the target thread terminates."
      },
      {
        "name": "Global Interpreter Lock (GIL)",
        "description": "Python CPython mutex that ensures only one native thread executes Python bytecodes at a time, making threading ideal for I/O-bound tasks."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-2",
        "title": "Import threading and time Modules",
        "codeSnippet": "import threading\nimport time",
        "whatItDoes": "Imports standard threading module for thread management and time module for simulating task delays.",
        "whyUsed": "threading provides Thread class; time.sleep() simulates time-consuming operations.",
        "howItWorks": "Binds modules to namespace.",
        "connectionToSurrounding": "Required before calling threading.Thread or time.sleep.",
        "examRelevance": "threading is Python's high-level thread module (prefer over legacy _thread)."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 4-8",
        "title": "Define Worker Function 1 (print_numbers)",
        "codeSnippet": "# Function for thread 1\ndef print_numbers():\n    for i in range(1, 6):\n        print(f\"Number: {i}\")\n        time.sleep(1)",
        "whatItDoes": "Loops 1 through 5, printing \"Number: {i}\" and sleeping for 1 second on each iteration.",
        "whyUsed": "Simulates a periodic background task (e.g. data fetching).",
        "howItWorks": "time.sleep(1) yields thread control back to OS scheduler, allowing other threads to run.",
        "connectionToSurrounding": "Assigned as target for Thread 1.",
        "examRelevance": "Without sleep(), thread 1 might finish before thread 2 even starts."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 10-14",
        "title": "Define Worker Function 2 (print_letters)",
        "codeSnippet": "# Function for thread 2\ndef print_letters():\n    for letter in ['A', 'B', 'C', 'D', 'E']:\n        print(f\"Letter: {letter}\")\n        time.sleep(1)",
        "whatItDoes": "Loops through list ['A', 'B', 'C', 'D', 'E'], printing \"Letter: {letter}\" with 1-second delay.",
        "whyUsed": "Second concurrent task running in parallel with print_numbers().",
        "howItWorks": "Yields CPU after printing each letter.",
        "connectionToSurrounding": "Assigned as target for Thread 2.",
        "examRelevance": "Numbers and letters will interleave in console output due to concurrent execution."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 17-19",
        "title": "Instantiate Thread Objects (threading.Thread(target=...))",
        "codeSnippet": "# Create threads\nthread1 = threading.Thread(target=print_numbers)\nthread2 = threading.Thread(target=print_letters)",
        "whatItDoes": "Creates two Thread objects with worker functions passed as target arguments without parentheses.",
        "whyUsed": "Prepares thread contexts without starting them yet.",
        "howItWorks": "Allocates OS thread state data structures.",
        "connectionToSurrounding": "target specifies the callable function to execute inside the new thread.",
        "examRelevance": "Crucial examiner trap: Pass function name WITHOUT parentheses (target=print_numbers), NOT target=print_numbers()! Parentheses would execute the function immediately on the main thread."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 21-23",
        "title": "Start Concurrent Execution (thread.start())",
        "codeSnippet": "# Start threads\nthread1.start()\nthread2.start()",
        "whatItDoes": "Launches both threads into concurrent background execution.",
        "whyUsed": "Begins running print_numbers and print_letters simultaneously.",
        "howItWorks": "Requests OS kernel to schedule new threads and invokes their target functions.",
        "connectionToSurrounding": "Transitions threads from initialized to running state.",
        "examRelevance": "Never call run() directly; always call start() to spawn a new OS thread."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 25-29",
        "title": "Synchronize Completion with join() and Final Print",
        "codeSnippet": "# Wait for both threads to finish\nthread1.join()\nthread2.join()\n\nprint(\"Finished executing both threads.\")",
        "whatItDoes": "Blocks main thread until thread1 and thread2 have completely finished, then prints completion notice.",
        "whyUsed": "Ensures the program does not terminate before background workers finish their work.",
        "howItWorks": "join() puts calling thread to sleep until target thread terminates.",
        "connectionToSurrounding": "Concludes multithreading program.",
        "examRelevance": "Top viva question: What does thread.join() do? It halts the main program until the worker thread has completely finished execution."
      }
    ],
    "executionFlow": [
      "1. Main thread imports modules and defines functions print_numbers and print_letters.",
      "2. Main thread creates thread1 and thread2 objects.",
      "3. thread1.start() launches worker thread 1.",
      "4. thread2.start() launches worker thread 2.",
      "5. Both threads run concurrently: thread 1 prints \"Number: 1\" and sleeps 1s; thread 2 prints \"Letter: A\" and sleeps 1s.",
      "6. OS thread scheduler alternates between them each second.",
      "7. Main thread waits on thread1.join() and thread2.join().",
      "8. After 5 seconds, both worker loops terminate.",
      "9. Main thread unblocks and prints \"Finished executing both threads.\"",
      "10. Process exits cleanly."
    ],
    "outputExplanation": {
      "description": "Demonstrates interleaving of numbers and letters produced by the two concurrent threads.",
      "elementsBreakdown": [
        {
          "element": "Number: 1 / Letter: A",
          "sourceLine": "thread1.start(); thread2.start()",
          "explanation": "Both threads launch almost simultaneously."
        },
        {
          "element": "1-second delay increments",
          "sourceLine": "time.sleep(1)",
          "explanation": "Simulated I/O latency releasing the GIL."
        },
        {
          "element": "Finished executing both threads.",
          "sourceLine": "thread1.join(); thread2.join()",
          "explanation": "Prints strictly after all 5 iterations of both threads finish."
        }
      ]
    },
    "examNotes": [
      {
        "category": "common_mistakes",
        "title": "target=func vs target=func()",
        "description": "A universal beginner mistake is writing `target=print_numbers()`. Adding parentheses executes the function immediately on the main thread in sequential order, defeating the entire purpose of multithreading. Always pass the function identifier without parentheses: `target=print_numbers`."
      },
      {
        "category": "library_syntax",
        "title": "What is join() for?",
        "description": "`join()` synchronizes threads. If you omit `thread1.join()` and `thread2.join()`, the main thread would rush ahead and print \"Finished executing both threads.\" before the worker threads have even printed their second number or letter!"
      },
      {
        "category": "pro_tips",
        "title": "Python Global Interpreter Lock (GIL)",
        "description": "Python has a Global Interpreter Lock (GIL) ensuring only one thread runs Python bytecode at any instant. Therefore, Python threads are ideal for I/O-bound tasks (file I/O, network requests, database queries). For CPU-bound mathematical operations, Python's `multiprocessing` module is preferred."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the difference between a process and a thread?",
        "answer": "A process is an independent program in execution with its own separate memory address space. A thread is a lightweight unit of execution within a process that shares memory and resources with other threads of that process.",
        "examinerTip": "Mention context switching overhead is much smaller for threads."
      },
      {
        "question": "What is the purpose of thread.join()?",
        "answer": "thread.join() blocks the calling thread (usually the main thread) until the thread whose join() method is called has completely finished its execution.",
        "examinerTip": "Examiners love asking what happens if join() is omitted."
      },
      {
        "question": "What is the Global Interpreter Lock (GIL) in CPython?",
        "answer": "The GIL is a mutex that prevents multiple native threads from executing Python bytecodes simultaneously. It simplifies memory management and C extensions, but means multi-core parallelism for CPU tasks requires multiprocessing rather than threading.",
        "examinerTip": "This is the gold standard question for Python threading."
      },
      {
        "question": "How do you pass arguments to a target function in threading.Thread?",
        "answer": "Using the args parameter as a tuple, e.g.: threading.Thread(target=my_func, args=(arg1, arg2)).",
        "examinerTip": "Remind examiners that for a single argument, the comma is required: args=(val,)."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "multithreading"
  },
  {
    "id": 309,
    "subjectId": "major-15",
    "programNumber": 9,
    "title": "Python GUI Calculator using Tkinter",
    "pdfQuestion": "9. Develop a Python GUI calculator using Tkinter",
    "shortDescription": "Full-featured desktop graphical calculator interface created with Python's standard Tkinter GUI toolkit, grid layout, event binding, and safe evaluation.",
    "technologies": [
      "Python",
      "Tkinter"
    ],
    "originalCode": "import tkinter as tk\n\ndef click(event):\n    text = event.widget.cget(\"text\")\n    if text == \"=\":\n        try:\n            result = str(eval(str(entry.get())))\n            entry.delete(0, tk.END)\n            entry.insert(0, result)\n        except:\n            entry.delete(0, tk.END)\n            entry.insert(0, \"Error\")\n    elif text == \"C\":\n        entry.delete(0, tk.END)\n    else:\n        entry.insert(tk.END, text)\n\nroot = tk.Tk()\nroot.title(\"Calculator\")\n\nentry = tk.Entry(root, font=\"Arial 20\")\nentry.grid(row=0, column=0, columnspan=4, ipadx=8, ipady=8)\n\nbuttons = [\n    [\"7\", \"8\", \"9\", \"/\"],\n    [\"4\", \"5\", \"6\", \"*\"],\n    [\"1\", \"2\", \"3\", \"-\"],\n    [\"C\", \"0\", \"=\", \"+\"]\n]\n\nfor i, row in enumerate(buttons):\n    for j, text in enumerate(row):\n        btn = tk.Button(root, text=text, font=\"Arial 18\", width=5, height=2)\n        btn.grid(row=i+1, column=j, padx=3, pady=3)\n        btn.bind(\"<Button-1>\", click)\n\nroot.mainloop()",
    "sampleOutputText": "[Tkinter Window: Calculator]\n+-------------------------------+\n|                      15 * 4   |  <- Entry Widget\n+-------+-------+-------+-------+\n|   7   |   8   |   9   |   /   |  <- Row 1\n+-------+-------+-------+-------+\n|   4   |   5   |   6   |   *   |  <- Row 2\n+-------+-------+-------+-------+\n|   1   |   2   |   3   |   -   |  <- Row 3\n+-------+-------+-------+-------+\n|   C   |   0   |   =   |   +   |  <- Row 4\n+-------+-------+-------+-------+\nWhen \"=\" is clicked: Entry displays \"60\"\nWhen \"C\" is clicked: Entry clears to blank\nOn invalid syntax (e.g. \"5++\"): Entry displays \"Error\"",
    "runLocallyGuide": {
      "fileName": "program9_tkinter_calculator.py",
      "pythonSteps": [
        "Save the script as program9_tkinter_calculator.py.",
        "Run: python program9_tkinter_calculator.py",
        "A native GUI desktop window titled \"Calculator\" will appear on your screen.",
        "Click numeric buttons, operators, and \"=\" to calculate."
      ],
      "notes": "Tkinter is bundled with standard Python on Windows and macOS. On Ubuntu/Debian Linux, install via: sudo apt-get install python3-tk."
    },
    "objective": {
      "whatItDoes": "Constructs an interactive desktop graphical calculator featuring an Entry display screen and a 4x4 matrix of operation buttons (digits 0-9, arithmetic operators +, -, *, /, clear button C, and equals button =), handling clicks via Tkinter event binding.",
      "whyWritten": "To introduce Graphical User Interface (GUI) development in Python using Tkinter, master the grid geometry manager, handle mouse click events (<Button-1>), and evaluate mathematical expressions dynamically.",
      "conceptsDemonstrated": "tk.Tk() main window, tk.Entry widget, tk.Button widget, grid layout manager with columnspan and padding, widget.bind(\"<Button-1>\"), widget.cget(\"text\"), eval(), root.mainloop().",
      "expectedOutputSummary": "Renders an interactive desktop GUI window with clickable buttons that evaluate expressions or show \"Error\" upon division by zero or malformed syntax.",
      "problemSolved": "Console apps lack graphical visual appeal. This program demonstrates desktop GUI development using Tkinter: creating windows, text entry screens, button grid layouts, and dynamic event handling for arithmetic evaluation.",
      "overallMechanism": "Creates root Tk() window, adds an Entry display, generates a 4x4 calculator button matrix with nested loops using .grid(row, col), binds click events via .bind(\"<Button-1>\", click), and evaluates arithmetic expressions using eval().",
      "prerequisitesToUnderstand": "Tkinter GUI concepts (widgets, geometry managers: pack vs grid), event-driven programming (<Button-1>), and eval() function."
    },
    "conceptsUsed": [
      {
        "name": "Tkinter Framework",
        "description": "Python's standard built-in interface to the Tk GUI toolkit."
      },
      {
        "name": "Grid Geometry Manager",
        "description": "Organizes widgets in a table-like 2D structure of rows and columns with columnspan options."
      },
      {
        "name": "Event-Driven Programming",
        "description": "Flow of the program is determined by user events (mouse clicks, key presses) captured via event bindings."
      },
      {
        "name": "widget.bind(\"<Button-1>\", callback)",
        "description": "Binds left mouse button clicks to the custom event-handler function click(event)."
      },
      {
        "name": "eval() Function",
        "description": "Parses and executes a Python expression passed as a string, returning the computed numerical result."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Line 1",
        "title": "Import Tkinter GUI Library (import tkinter as tk)",
        "codeSnippet": "import tkinter as tk",
        "whatItDoes": "Imports Python's standard desktop GUI toolkit with alias \"tk\".",
        "whyUsed": "Tkinter is built into standard Python (no pip installation needed).",
        "howItWorks": "Binds Tcl/Tk C-library wrapper to namespace.",
        "connectionToSurrounding": "Supplies all GUI widgets (Tk, Entry, Button).",
        "examRelevance": "Tkinter is the standard Python desktop GUI library."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 3-16",
        "title": "Define Button Click Event Handler (click)",
        "codeSnippet": "def click(event):\n    text = event.widget.cget(\"text\")\n    if text == \"=\":\n        try:\n            result = str(eval(str(entry.get())))\n            entry.delete(0, tk.END)\n            entry.insert(0, result)\n        except:\n            entry.delete(0, tk.END)\n            entry.insert(0, \"Error\")\n    elif text == \"C\":\n        entry.delete(0, tk.END)\n    else:\n        entry.insert(tk.END, text)",
        "whatItDoes": "Inspects clicked button text via event.widget.cget(\"text\"): if \"=\", evaluates math via eval() and replaces display with answer; if \"C\", clears display; otherwise appends character to entry.",
        "whyUsed": "Provides interactive calculation engine.",
        "howItWorks": "event captures triggering widget; eval() parses math string expression into numeric result.",
        "connectionToSurrounding": "Bound to all buttons on Line 35.",
        "examRelevance": "eval() parses math strings like \"7*8\" directly into 56."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 18-19",
        "title": "Initialize Master Tk Window and Set Title",
        "codeSnippet": "root = tk.Tk()\nroot.title(\"Calculator\")",
        "whatItDoes": "Initializes the main desktop window frame and sets title to \"Calculator\".",
        "whyUsed": "Root window container for all calculator widgets.",
        "howItWorks": "Creates top-level OS window with close/minimize buttons.",
        "connectionToSurrounding": "Parent of entry and all buttons.",
        "examRelevance": "Every Tkinter app must instantiate exactly one tk.Tk() master window."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 21-22",
        "title": "Create and Grid Calculator Entry Display",
        "codeSnippet": "entry = tk.Entry(root, font=\"Arial 20\")\nentry.grid(row=0, column=0, columnspan=4, ipadx=8, ipady=8)",
        "whatItDoes": "Creates single-line text box with large Arial 20 font, placed at top row spanning all 4 columns.",
        "whyUsed": "Acts as calculator LCD display screen showing formulas and results.",
        "howItWorks": "columnspan=4 stretches entry across all four button columns below.",
        "connectionToSurrounding": "Read and updated by click() function.",
        "examRelevance": "grid() organizes widgets into a spreadsheet-like row/column grid."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 24-29",
        "title": "Define 4x4 Calculator Button Layout Matrix",
        "codeSnippet": "buttons = [\n    [\"7\", \"8\", \"9\", \"/\"],\n    [\"4\", \"5\", \"6\", \"*\"],\n    [\"1\", \"2\", \"3\", \"-\"],\n    [\"C\", \"0\", \"=\", \"+\"]\n]",
        "whatItDoes": "Defines 2D list matrix representing the physical 4-row by 4-column layout of calculator keys.",
        "whyUsed": "Eliminates 16 repetitive widget declarations by using data-driven iteration.",
        "howItWorks": "Contains characters representing numbers, clear (C), equals (=), and math operators.",
        "connectionToSurrounding": "Iterated in lines 31-35 to generate buttons.",
        "examRelevance": "Clean programmatic UI construction pattern."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 31-35",
        "title": "Dynamically Generate Buttons and Bind Events",
        "codeSnippet": "for i, row in enumerate(buttons):\n    for j, text in enumerate(row):\n        btn = tk.Button(root, text=text, font=\"Arial 18\", width=5, height=2)\n        btn.grid(row=i+1, column=j, padx=3, pady=3)\n        btn.bind(\"<Button-1>\", click)",
        "whatItDoes": "Iterates through matrix, creating a Button widget for each character, placing at grid row (i+1) and col j, and binding left-click event <Button-1> to click() function.",
        "whyUsed": "Constructs full 16-button calculator keyboard with minimal code.",
        "howItWorks": "<Button-1> represents mouse left-click event in Tkinter.",
        "connectionToSurrounding": "Connects UI buttons to logic engine.",
        "examRelevance": "<Button-1> is left mouse click; <Button-2> is middle click; <Button-3> is right click."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Line 37",
        "title": "Start GUI Event Loop (root.mainloop())",
        "codeSnippet": "root.mainloop()",
        "whatItDoes": "Starts the infinite GUI event listening loop, keeping the desktop calculator window open and responsive.",
        "whyUsed": "Listens for OS window events, keystrokes, and mouse clicks.",
        "howItWorks": "Blocks until user clicks the window close button (X).",
        "connectionToSurrounding": "Final mandatory line of any Tkinter GUI app.",
        "examRelevance": "Without root.mainloop(), the window would close instantaneously after creation!"
      }
    ],
    "executionFlow": [
      "1. Imports tkinter as tk and declares click(event) handler.",
      "2. Instantiates root = tk.Tk() and titles window \"Calculator\".",
      "3. Places Entry display widget at row 0 spanning 4 columns.",
      "4. Iterates 4x4 matrix of button labels with nested enumerate loops.",
      "5. Creates Button widgets and attaches click listener via btn.bind(\"<Button-1>\", click).",
      "6. Calls root.mainloop(), which draws the window and waits for user events.",
      "7. User clicks a button: OS generates event; click(event) reads text via .cget(\"text\").",
      "8. If text is digit or operator, appends to Entry display.",
      "9. If text is \"=\", evaluates expression and replaces display with answer or \"Error\".",
      "10. If text is \"C\", clears display.",
      "11. Loop continues until user closes the window."
    ],
    "outputExplanation": {
      "description": "Desktop GUI window with 16 buttons and an Entry display screen responding to user clicks.",
      "elementsBreakdown": [
        {
          "element": "Entry Screen",
          "sourceLine": "entry = tk.Entry(...)",
          "explanation": "Single-line text display at the top of the calculator."
        },
        {
          "element": "Keypad Grid",
          "sourceLine": "buttons = [[...], [...]]",
          "explanation": "4x4 matrix of digits, operators, C, and =."
        },
        {
          "element": "Result Display",
          "sourceLine": "eval(str(entry.get()))",
          "explanation": "Evaluates the entered arithmetic expression."
        }
      ]
    },
    "examNotes": [
      {
        "category": "library_syntax",
        "title": "Tkinter Geometry Managers",
        "description": "Tkinter offers 3 geometry managers: `grid()` (tabular rows/columns, best for calculators), `pack()` (stacked boxes, top/bottom/left/right), and `place()` (absolute x,y coordinates in pixels). Never mix pack() and grid() in the same parent window!"
      },
      {
        "category": "security",
        "title": "Why eval() is Risky in Production",
        "description": "In practical lab exams, `eval()` is widely accepted for simple calculators. However, in production, `eval()` can execute arbitrary code (e.g. `__import__('os').system(...)`). In real-world software, `ast.literal_eval` or custom expression parsers are used."
      },
      {
        "category": "pro_tips",
        "title": "Event Binding String",
        "description": "`<Button-1>` represents the left mouse click in Tkinter. `<Button-2>` is middle-click (scroll wheel), and `<Button-3>` is right-click."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is the role of root.mainloop() in a Tkinter application?",
        "answer": "mainloop() starts the Tkinter event loop. It continuously listens for user interactions (mouse clicks, key presses, window resizing) and dispatches them to appropriate event handlers until the window is closed.",
        "examinerTip": "Mention that it is blocking and keeps the GUI alive."
      },
      {
        "question": "What are the three geometry managers provided by Tkinter?",
        "answer": "1. pack(): arranges widgets in blocks. 2. grid(): arranges widgets in a 2-dimensional table of rows and columns. 3. place(): positions widgets using explicit pixel coordinates (x, y).",
        "examinerTip": "Mention you should never mix pack() and grid() in the same container window."
      },
      {
        "question": "How does event.widget.cget(\"text\") work?",
        "answer": "event.widget gives a reference to the exact widget instance that triggered the event. .cget(\"text\") retrieves the value of the widget's \"text\" configuration option.",
        "examinerTip": "Contrast with widget[\"text\"] or widget.config()."
      },
      {
        "question": "What does the columnspan option do in grid()?",
        "answer": "columnspan specifies how many columns a widget should span horizontally across the grid, similar to the HTML colspan attribute in table cells.",
        "examinerTip": "In this program, the Entry widget uses columnspan=4 to stretch across all 4 button columns."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "tkinter-calc"
  },
  {
    "id": 310,
    "subjectId": "major-15",
    "programNumber": 10,
    "title": "Tkinter & SQLite Database Application (CRUD Records)",
    "pdfQuestion": "10. Design a simple database application that stores the records and retrieve the same",
    "shortDescription": "Complete graphical database desktop application combining Tkinter entry widgets and SQLite3 relational database storage with parameterized SQL inserts and record queries.",
    "technologies": [
      "Python",
      "Tkinter",
      "SQLite"
    ],
    "originalCode": "import tkinter as tk\nimport sqlite3\n\n# DB setup\nconn = sqlite3.connect('data.db')\nc = conn.cursor()\nc.execute(\"CREATE TABLE IF NOT EXISTS records (name TEXT, age INTEGER)\")\nconn.commit()\n\n# Functions\ndef add():\n    c.execute(\"INSERT INTO records VALUES (?, ?)\", (e1.get(), e2.get()))\n    conn.commit()\n    e1.delete(0, tk.END)\n    e2.delete(0, tk.END)\n\ndef view():\n    c.execute(\"SELECT * FROM records\")\n    rows = c.fetchall()\n    t.delete('1.0', tk.END)\n    for row in rows:\n        t.insert(tk.END, f\"{row[0]}, {row[1]}\\n\")\n\n# GUI\nroot = tk.Tk()\nroot.title(\"Simple DB App\")\n\ntk.Label(root, text=\"Name\").grid(row=0, column=0)\ne1 = tk.Entry(root)\ne1.grid(row=0, column=1)\n\ntk.Label(root, text=\"Age\").grid(row=1, column=0)\ne2 = tk.Entry(root)\ne2.grid(row=1, column=1)\n\ntk.Button(root, text=\"Add\", command=add).grid(row=2, column=0, pady=5)\ntk.Button(root, text=\"View\", command=view).grid(row=2, column=1, pady=5)\n\nt = tk.Text(root, height=10, width=40)\nt.grid(row=3, column=0, columnspan=2, pady=10)\n\nroot.mainloop()\nconn.close()",
    "sampleOutputText": "Database File: data.db created automatically.\nTable: records (name TEXT, age INTEGER)\n\n[Tkinter Window: Simple DB App]\n+---------------------------------------+\n| Name: [ Alice                  ]      |\n| Age:  [ 21                     ]      |\n|                                       |\n| [ Add Record ]       [ View All ]     |\n|                                       |\n| +-----------------------------------+ |\n| | Alice, 21                         | |\n| | Bob, 22                           | |\n| | Charlie, 20                       | |\n| |                                   | |\n| +-----------------------------------+ |\n+---------------------------------------+",
    "runLocallyGuide": {
      "fileName": "program10_sqlite_app.py",
      "pythonSteps": [
        "Save script as program10_sqlite_app.py.",
        "Run: python program10_sqlite_app.py",
        "Enter Name and Age, click \"Add\".",
        "Click \"View\" to query and display all records in the Text area.",
        "Close and re-open: Notice records persist inside data.db!"
      ],
      "notes": "Both sqlite3 and tkinter are built-in Python standard libraries. SQLite stores data permanently in the local data.db file."
    },
    "objective": {
      "whatItDoes": "Connects to a local SQLite relational database file (data.db), creates a table `records` if it does not exist, provides Tkinter GUI input fields for Name and Age, inserts records safely using parameterized SQL queries, and queries/displays all saved records inside a multiline Text widget upon clicking View.",
      "whyWritten": "To demonstrate building practical full-stack desktop software connecting a GUI frontend (Tkinter) to a persistent SQL database backend (SQLite3).",
      "conceptsDemonstrated": "sqlite3.connect(), conn.cursor(), CREATE TABLE IF NOT EXISTS, INSERT INTO with parameterized placeholders (?, ?), conn.commit(), SELECT *, cursor.fetchall(), tk.Label, tk.Entry, tk.Button, tk.Text, tk.END, conn.close().",
      "expectedOutputSummary": "Interactive desktop form that saves user records to an SQLite disk database file and dynamically retrieves and displays formatted rows.",
      "problemSolved": "Desktop apps require persistent local storage. This program demonstrates full-stack desktop development integrating a Tkinter GUI with an embedded SQLite relational database for inserting and viewing records.",
      "overallMechanism": "sqlite3.connect('data.db') connects to local database, creates \"records\" table if not exists. add() retrieves entry values and executes INSERT with parameter placeholders (?). view() queries SELECT * with fetchall() and formats into Text widget.",
      "prerequisitesToUnderstand": "SQLite embedded database basics, SQL queries (CREATE, INSERT, SELECT), parameterized queries (?, ?), and Tkinter Entry/Text widgets."
    },
    "conceptsUsed": [
      {
        "name": "SQLite3 Database Engine",
        "description": "Serverless, self-contained, zero-configuration SQL database engine built directly into Python's standard library."
      },
      {
        "name": "Database Connection & Cursor",
        "description": "sqlite3.connect() opens the file; conn.cursor() creates a cursor object to execute SQL commands."
      },
      {
        "name": "Parameterized Queries (?, ?)",
        "description": "Safely injects user variables into SQL queries to prevent SQL Injection vulnerabilities."
      },
      {
        "name": "Transaction Management (commit)",
        "description": "conn.commit() writes pending database modifications permanently to the physical disk."
      },
      {
        "name": "Tkinter Text Widget",
        "description": "Multi-line scrollable text display widget. Indices are formatted as \"line.column\" (e.g. \"1.0\" is line 1, char 0)."
      }
    ],
    "steps": [
      {
        "stepNumber": 1,
        "lineNumberRange": "Lines 1-2",
        "title": "Import Tkinter and SQLite3 Modules",
        "codeSnippet": "import tkinter as tk\nimport sqlite3",
        "whatItDoes": "Loads Tkinter for desktop UI and sqlite3 for local relational database persistence.",
        "whyUsed": "sqlite3 is a self-contained, serverless zero-configuration SQL database engine built into standard Python.",
        "howItWorks": "Binds modules to namespace.",
        "connectionToSurrounding": "Required for all GUI and DB functions.",
        "examRelevance": "SQLite requires no separate database server daemon (unlike MySQL or PostgreSQL)."
      },
      {
        "stepNumber": 2,
        "lineNumberRange": "Lines 5-8",
        "title": "Database Setup: Connect, Cursor, Create Table, and Commit",
        "codeSnippet": "# DB setup\nconn = sqlite3.connect('data.db')\nc = conn.cursor()\nc.execute(\"CREATE TABLE IF NOT EXISTS records (name TEXT, age INTEGER)\")\nconn.commit()",
        "whatItDoes": "Connects to disk file data.db, opens cursor c, creates table records (name TEXT, age INTEGER) if missing, and commits transaction.",
        "whyUsed": "Establishes persistent relational schema before GUI loads.",
        "howItWorks": "Creates file data.db on disk if it does not exist.",
        "connectionToSurrounding": "conn and cursor c are accessed in add() and view() functions.",
        "examRelevance": "Always commit() DDL and DML operations to persist changes to disk."
      },
      {
        "stepNumber": 3,
        "lineNumberRange": "Lines 11-15",
        "title": "Define add() Record Handler Function",
        "codeSnippet": "# Functions\ndef add():\n    c.execute(\"INSERT INTO records VALUES (?, ?)\", (e1.get(), e2.get()))\n    conn.commit()\n    e1.delete(0, tk.END)\n    e2.delete(0, tk.END)",
        "whatItDoes": "Reads values from entries e1 and e2, inserts row into database using parameterized query (?, ?), commits changes, and clears inputs.",
        "whyUsed": "Inserts new user record safely into database.",
        "howItWorks": "(? , ?) uses parameterized placeholders to prevent SQL Injection attacks.",
        "connectionToSurrounding": "Called when \"Add\" button is clicked.",
        "examRelevance": "Crucial viva question: Why use (?, ?) instead of string concatenation? Placeholders prevent SQL Injection vulnerabilities."
      },
      {
        "stepNumber": 4,
        "lineNumberRange": "Lines 17-22",
        "title": "Define view() Record Handler Function",
        "codeSnippet": "def view():\n    c.execute(\"SELECT * FROM records\")\n    rows = c.fetchall()\n    t.delete('1.0', tk.END)\n    for row in rows:\n        t.insert(tk.END, f\"{row[0]}, {row[1]}\\n\")",
        "whatItDoes": "Queries all rows with SELECT *, fetches all records as a list of tuples, clears text box, and prints each record.",
        "whyUsed": "Displays all stored records in the multiline Text box.",
        "howItWorks": "fetchall() returns all rows; t.delete('1.0', END) clears text from line 1 char 0 to end; t.insert() appends records.",
        "connectionToSurrounding": "Called when \"View\" button is clicked.",
        "examRelevance": "Text widget index '1.0' represents line 1, character offset 0."
      },
      {
        "stepNumber": 5,
        "lineNumberRange": "Lines 25-34",
        "title": "Construct Form Labels and Entry Fields",
        "codeSnippet": "# GUI\nroot = tk.Tk()\nroot.title(\"Simple DB App\")\n\ntk.Label(root, text=\"Name\").grid(row=0, column=0)\ne1 = tk.Entry(root)\ne1.grid(row=0, column=1)\n\ntk.Label(root, text=\"Age\").grid(row=1, column=0)\ne2 = tk.Entry(root)\ne2.grid(row=1, column=1)",
        "whatItDoes": "Creates GUI window, adds \"Name\" and \"Age\" labels, and creates Entry fields e1 and e2 aligned in grid.",
        "whyUsed": "Input widgets for capturing user data.",
        "howItWorks": "Places labels in col 0 and inputs in col 1.",
        "connectionToSurrounding": "Entries read by add() function.",
        "examRelevance": "Entry widgets provide single-line text input."
      },
      {
        "stepNumber": 6,
        "lineNumberRange": "Lines 36-40",
        "title": "Add Action Buttons and Multiline Text Display Box",
        "codeSnippet": "tk.Button(root, text=\"Add\", command=add).grid(row=2, column=0, pady=5)\ntk.Button(root, text=\"View\", command=view).grid(row=2, column=1, pady=5)\n\nt = tk.Text(root, height=10, width=40)\nt.grid(row=3, column=0, columnspan=2, pady=10)",
        "whatItDoes": "Adds \"Add\" button (command=add), \"View\" button (command=view), and multiline Text box spanning both columns.",
        "whyUsed": "Provides execution triggers and multiline data display area.",
        "howItWorks": "command=parameter binds button click directly to Python function.",
        "connectionToSurrounding": "Completes GUI layout.",
        "examRelevance": "command=functionName passes function reference without parentheses."
      },
      {
        "stepNumber": 7,
        "lineNumberRange": "Lines 42-43",
        "title": "Start GUI Event Loop and Close Connection on Exit",
        "codeSnippet": "root.mainloop()\nconn.close()",
        "whatItDoes": "Enters GUI event loop until window closes, then cleanly closes database connection.",
        "whyUsed": "Runs application and guarantees database handle cleanup when user exits.",
        "howItWorks": "conn.close() releases database file locks.",
        "connectionToSurrounding": "Concludes application lifecycle.",
        "examRelevance": "Proper database connection closure is graded rigorously in practical exams."
      }
    ],
    "executionFlow": [
      "1. Connects to SQLite database data.db and creates cursor c.",
      "2. Executes CREATE TABLE IF NOT EXISTS records (name TEXT, age INTEGER).",
      "3. Commits schema to database file.",
      "4. Defines add() and view() event callbacks.",
      "5. Builds GUI: window title, Name/Age labels, Entry fields e1/e2.",
      "6. Adds \"Add\" and \"View\" Buttons at row 2.",
      "7. Places multiline Text widget t at row 3 spanning 2 columns.",
      "8. Enters root.mainloop() event loop.",
      "9. User types name and age, clicks Add -> add() runs: executes INSERT INTO, commits, clears fields.",
      "10. User clicks View -> view() runs: executes SELECT *, fetchall(), clears Text widget, inserts records.",
      "11. User closes window -> mainloop terminates -> conn.close() safely closes database."
    ],
    "outputExplanation": {
      "description": "Persistent desktop database app that inserts and queries records from an SQLite database file.",
      "elementsBreakdown": [
        {
          "element": "Name & Age Fields",
          "sourceLine": "e1 = tk.Entry(root); e2 = tk.Entry(root)",
          "explanation": "Input text boxes for record data."
        },
        {
          "element": "Add Button",
          "sourceLine": "tk.Button(..., command=add)",
          "explanation": "Triggers database INSERT and transaction commit."
        },
        {
          "element": "View Button",
          "sourceLine": "tk.Button(..., command=view)",
          "explanation": "Queries records via SELECT and populates Text display."
        },
        {
          "element": "Output Text Area",
          "sourceLine": "t = tk.Text(...)",
          "explanation": "Displays all retrieved database rows."
        }
      ]
    },
    "examNotes": [
      {
        "category": "library_syntax",
        "title": "Why Text Widget Uses '1.0'",
        "description": "In Tkinter Entry widgets, position indices are integers (0 to tk.END). However, in multiline Text widgets, position indices are strings in the format `\"line.char\"`. Therefore, `\"1.0\"` refers to line 1, character 0 (the very beginning of the document)."
      },
      {
        "category": "security",
        "title": "Parameterized Queries Prevent SQL Injection",
        "description": "Never use string concatenation like `f\"INSERT INTO records VALUES ('{name}', {age})\"`! An attacker could enter `', 0); DROP TABLE records; --` to wipe your database. Always use placeholders: `c.execute(\"INSERT INTO records VALUES (?, ?)\", (name, age))`."
      },
      {
        "category": "pro_tips",
        "title": "conn.commit() is Essential",
        "description": "In SQLite, any data manipulation (INSERT, UPDATE, DELETE) is buffered in an active transaction. If you forget `conn.commit()`, the changes will NOT be saved to the database file when the script terminates."
      }
    ],
    "vivaQuestions": [
      {
        "question": "What is SQLite and how does it differ from MySQL or PostgreSQL?",
        "answer": "SQLite is an embedded, serverless, file-based relational database engine that runs in the same process space as the application, storing the entire database in a single disk file without needing a separate database server process.",
        "examinerTip": "Mention that it is ACID-compliant and requires zero configuration."
      },
      {
        "question": "Why is conn.commit() required after c.execute(\"INSERT...\")?",
        "answer": "SQLite operations are transactional. Changes are kept in a temporary journal or buffer. conn.commit() flushes and writes the changes permanently to the physical database file.",
        "examinerTip": "Mention that SELECT does not need commit(), only INSERT/UPDATE/DELETE."
      },
      {
        "question": "What does c.fetchall() return?",
        "answer": "fetchall() fetches all remaining rows of a query result set and returns them as a Python list of tuples, where each tuple represents one table row.",
        "examinerTip": "You can also mention fetchone() which retrieves a single tuple, and fetchmany(size)."
      },
      {
        "question": "Why is (\"1.0\", tk.END) used in t.delete() for Tkinter Text widgets?",
        "answer": "The Text widget uses \"line.column\" string indexing. \"1.0\" represents line 1, column 0 (the start of text), and tk.END represents the end. t.delete(\"1.0\", tk.END) clears the entire contents before repopulating.",
        "examinerTip": "Contrast with e1.delete(0, tk.END) for single-line Entry."
      }
    ],
    "previewType": "python-app-simulation",
    "simulationType": "tkinter-db"
  }
];
