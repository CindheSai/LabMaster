export interface StepExplanation {
  stepNumber: number;
  lineNumberRange?: string; // e.g. "Line 1" or "Lines 4-6"
  title: string;
  codeSnippet: string;
  whatItDoes: string;
  whyUsed: string;
  howItWorks: string;
  connectionToSurrounding?: string; // How this line connects to the previous and next lines
  examRelevance: string;
}

export interface VivaQuestion {
  question: string;
  answer: string;
  examinerTip?: string;
}

export interface ExamNote {
  category: 'important_tags' | 'attributes' | 'functions' | 'common_mistakes' | 'pro_tips' | 'security' | 'server_setup' | 'library_syntax';
  title: string;
  description: string;
}

export interface CodeFile {
  fileName: string;
  language: 'php' | 'html' | 'sql' | 'css' | 'javascript' | 'python' | 'csv';
  code: string;
  label?: string;
  description?: string;
}

export interface RunLocallyGuide {
  fileName: string;
  localhostUrl?: string;
  xamppSteps?: string[];
  pythonSteps?: string[];
  pipInstall?: string;
  notes?: string;
}

export interface DatasetInfo {
  fileName: string;
  csvContent: string;
  description: string;
  columns: string[];
  rows: Record<string, any>[];
}

export interface ProgramData {
  id: number;
  subjectId?: string;
  programNumber: number;
  title: string;
  pdfQuestion: string;
  shortDescription: string;
  technologies: ('HTML' | 'CSS' | 'JavaScript' | 'PHP' | 'MySQL' | 'Python' | 'NumPy' | 'Pandas' | 'Matplotlib' | 'Seaborn' | 'Tkinter' | 'SQLite' | 'Multithreading' | 'Exception Handling' | 'File Handling')[];
  originalCode: string;
  correctedCode?: string;
  correctionExplanation?: string;
  cssCode?: string; // For programs with external files like Major 12 P9
  codeFiles?: CodeFile[]; // For multi-file programs (e.g. P6, P7, P8, P10, or Python + CSV)
  dataset?: DatasetInfo; // For CSV dataset exploration (Programs 5, 6, 7)
  sampleOutputText?: string;
  runLocallyGuide?: RunLocallyGuide;

  // Explanation Sections
  objective: {
    whatItDoes: string;
    whyWritten: string;
    problemSolved?: string;
    overallMechanism?: string;
    prerequisitesToUnderstand?: string;
    conceptsDemonstrated: string;
    expectedOutputSummary: string;
  };
  conceptsUsed: {
    name: string;
    description: string;
  }[];
  steps: StepExplanation[];
  executionFlow: string[];
  outputExplanation: {
    description: string;
    elementsBreakdown: { element: string; sourceLine: string; explanation: string }[];
  };
  examNotes: ExamNote[];
  vivaQuestions: VivaQuestion[];

  // Interactive preview helper
  previewType: 'html' | 'form' | 'javascript' | 'table-images' | 'external-css' | 'php-simulation' | 'python-simulation' | 'python-app-simulation';
  simulationType?: 
    | 'fibonacci' 
    | 'swap' 
    | 'array-funcs' 
    | 'vowels-consonants' 
    | 'employee-form' 
    | 'student-registration' 
    | 'file-upload' 
    | 'cookies' 
    | 'sessions' 
    | 'mysql-crud'
    | 'numpy-creation'
    | 'numpy-manipulation'
    | 'numpy-ufuncs'
    | 'pandas-series-df'
    | 'pandas-csv-analysis'
    | 'pandas-missing-data'
    | 'pandas-transformation'
    | 'matplotlib-plots'
    | 'histogram-boxplot'
    | 'density-scatterplot'
    | 'temp-converter'
    | 'student-grade'
    | 'sequence-types'
    | 'fibonacci-while'
    | 'file-last-lines'
    | 'matrix-ops'
    | 'exception-handling'
    | 'multithreading'
    | 'tkinter-calc'
    | 'tkinter-db';
}

export interface SubjectData {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  isAvailable: boolean;
  totalPrograms: number;
  semester?: string;
  badge?: string;
  description: string;
}
