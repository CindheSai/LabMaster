import React, { useState, useMemo } from 'react';
import { 
  Target, 
  Layers, 
  Code2, 
  ListOrdered, 
  Activity, 
  MonitorPlay, 
  HelpCircle, 
  AlertTriangle,
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Circle, 
  ChevronLeft, 
  ChevronRight,
  Bookmark, 
  Share2, 
  FileCheck, 
  Sparkles, 
  BookOpen, 
  Server, 
  Terminal, 
  ExternalLink,
  Code,
  ArrowLeft,
  ArrowRight,
  Search,
  Eye,
  Info
} from 'lucide-react';
import { ProgramData } from '../types';
import { CodeViewer } from './CodeViewer';
import { LivePreview } from './LivePreview';
import { PhpSimulationPreview } from './PhpSimulationPreview';
import { PythonSimulationPreview } from './PythonSimulationPreview';
import { PythonAppDevSimulationPreview } from './PythonAppDevSimulationPreview';

interface ExplanationViewProps {
  program: ProgramData;
  allPrograms: ProgramData[];
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (id: number) => void;
  onToggleBookmark: (id: number) => void;
  onSelectProgram: (id: number) => void;
  onBackToSubject: () => void;
  onViewProgram?: (id: number) => void;
}

export const ExplanationView: React.FC<ExplanationViewProps> = ({
  program,
  allPrograms,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onSelectProgram,
  onBackToSubject,
  onViewProgram
}) => {
  // Collapsible section states
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true });
  const [codeVersionTab, setCodeVersionTab] = useState<'original' | 'corrected'>('original');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  
  // Interactive Step Walkthrough Mode
  const [stepViewMode, setStepViewMode] = useState<'walkthrough' | 'all'>('walkthrough');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [stepSearchQuery, setStepSearchQuery] = useState<string>('');

  const isPythonApp = program.subjectId === 'major-15';
  const isPhp = program.subjectId === 'major-13' || program.technologies.includes('PHP');
  const isDataScience = program.subjectId === 'major-14' || program.technologies.includes('Python');

  const toggleSection = (sectionKey: string) => {
    setCollapsedSections(prev => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

  const toggleStep = (stepNumber: number) => {
    setExpandedSteps(prev => ({ ...prev, [stepNumber]: !prev[stepNumber] }));
  };

  const expandAllSteps = () => {
    const allExpanded = program.steps.reduce((acc, step) => {
      acc[step.stepNumber] = true;
      return acc;
    }, {} as Record<number, boolean>);
    setExpandedSteps(allExpanded);
  };

  const collapseAllSteps = () => {
    setExpandedSteps({});
  };

  const toggleAnswer = (idx: number) => {
    setRevealedAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Filtered steps in "all" mode
  const filteredSteps = useMemo(() => {
    if (!stepSearchQuery.trim()) return program.steps;
    const q = stepSearchQuery.toLowerCase();
    return program.steps.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.codeSnippet.toLowerCase().includes(q) ||
      s.whatItDoes.toLowerCase().includes(q) ||
      s.whyUsed.toLowerCase().includes(q) ||
      (s.lineNumberRange && s.lineNumberRange.toLowerCase().includes(q))
    );
  }, [program.steps, stepSearchQuery]);

  // Previous & Next navigation across programs
  const currentIndex = allPrograms.findIndex(p => p.id === program.id);
  const prevProgram = currentIndex > 0 ? allPrograms[currentIndex - 1] : null;
  const nextProgram = currentIndex < allPrograms.length - 1 ? allPrograms[currentIndex + 1] : null;

  // Active step in walkthrough mode
  const currentStep = program.steps[activeStepIndex] || program.steps[0];

  const handleNextStep = () => {
    if (activeStepIndex < program.steps.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        {/* Left Column: Desktop Navigation & Section Outline */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 space-y-6">
          {/* Back & Switch Buttons */}
          <div className="space-y-2">
            <button
              onClick={onBackToSubject}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors w-full"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>
                {isPythonApp
                  ? 'Back to Major 15 (Python App Dev)'
                  : isDataScience 
                  ? 'Back to Major 14 (Data Science)' 
                  : isPhp 
                  ? 'Back to Major 13 (PHP & MySQL)' 
                  : 'Back to Major 12 Syllabus'}
              </span>
            </button>

            {onViewProgram && (
              <button
                onClick={() => onViewProgram(program.id)}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors border border-slate-200"
              >
                <Code className="w-3.5 h-3.5 text-blue-600" />
                <span>Open in Live Code Viewer</span>
              </button>
            )}
          </div>

          {/* Section Outline Quick Jump */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2.5 text-xs">
            <span className="font-bold text-slate-900 block pb-2 border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500">
              Explanation Sections
            </span>
            <nav className="space-y-1 text-slate-600">
              <a href="#section-objective" className="block py-1 hover:text-blue-600 truncate transition-colors">
                A. Program Details &amp; Objective
              </a>
              <a href="#section-concepts" className="block py-1 hover:text-blue-600 truncate transition-colors">
                B. Key Concepts Used ({program.conceptsUsed.length})
              </a>
              <a href="#section-code" className="block py-1 hover:text-blue-600 truncate transition-colors">
                C. Complete Source Code
              </a>
              <a href="#section-steps" className="block py-1 hover:text-blue-600 truncate transition-colors font-semibold text-blue-600">
                D. Step-by-Step Line Breakdown ({program.steps.length} lines)
              </a>
              <a href="#section-flow" className="block py-1 hover:text-blue-600 truncate transition-colors">
                E. Program Execution Flow
              </a>
              <a href="#section-output" className="block py-1 hover:text-blue-600 truncate transition-colors">
                F. Expected Output &amp; Simulation
              </a>
              <a href="#section-notes" className="block py-1 hover:text-blue-600 truncate transition-colors">
                G. Lab Exam Notes &amp; Traps
              </a>
              <a href="#section-viva" className="block py-1 hover:text-blue-600 truncate transition-colors">
                H. Viva Voce Questions ({program.vivaQuestions.length})
              </a>
              {isPhp && (
                <a href="#section-xampp" className="block py-1 text-emerald-700 font-medium hover:text-emerald-900 truncate transition-colors">
                  Run Locally (XAMPP Guide)
                </a>
              )}
              {(isDataScience || isPythonApp) && (
                <a href="#section-python-env" className="block py-1 text-blue-700 font-medium hover:text-blue-900 truncate transition-colors">
                  Run Locally (Terminal Setup)
                </a>
              )}
            </nav>
          </div>

          {/* Program Switcher for this subject */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-bold text-[11px] uppercase tracking-wider text-slate-500">
                Programs in Course
              </span>
              <span className="font-mono text-slate-400">{allPrograms.length} total</span>
            </div>
            <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
              {allPrograms.map(p => {
                const isSelected = p.id === program.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onSelectProgram(p.id)}
                    className={`w-full text-left p-1.5 rounded text-[11px] truncate flex items-center gap-2 transition-colors ${
                      isSelected 
                        ? 'bg-blue-50 text-blue-800 font-bold border border-blue-200' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-mono w-6 shrink-0">P{p.programNumber}</span>
                    <span className="truncate">{p.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Main Column: Full Educational Content */}
        <main className="lg:col-span-9 space-y-8">
          {/* Header Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {program.subjectId === 'major-15' 
                      ? 'Major 15 · Python App Dev' 
                      : isDataScience 
                      ? 'Major 14 · Data Science' 
                      : isPhp 
                      ? 'Major 13 · PHP & MySQL' 
                      : 'Major 12 · Web Tech'}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    Program #{program.programNumber}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {program.steps.length} Line-by-Line Steps
                  </span>
                  {program.correctedCode && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                      Includes PDF Bug Explanation
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {program.title}
                </h1>
                <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                  {program.shortDescription}
                </p>
              </div>

              {/* Action Toolbar */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                <button
                  onClick={() => onToggleBookmark(program.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    isBookmarked 
                      ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold' 
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                  <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                </button>

                <button
                  onClick={() => onToggleComplete(program.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isCompleted 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{isCompleted ? 'Completed' : 'Mark Verified'}</span>
                </button>

                {onViewProgram && (
                  <button
                    onClick={() => onViewProgram(program.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-2xs"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>View Code &amp; Preview</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Line Steps</span>
                <span className="text-lg font-bold font-mono text-slate-800">{program.steps.length}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Core Concepts</span>
                <span className="text-lg font-bold font-mono text-slate-800">{program.conceptsUsed.length}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Viva Questions</span>
                <span className="text-lg font-bold font-mono text-slate-800">{program.vivaQuestions.length}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Technologies</span>
                <span className="text-xs font-bold font-mono text-blue-600 truncate block mt-1">
                  {program.technologies.join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* SECTION A: Program Details & Objective */}
          <section id="section-objective" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">A. Program Details &amp; Objective</h2>
                  <p className="text-xs text-slate-500">Exact question, aim, prerequisites, and program purpose</p>
                </div>
              </div>
            </div>

            {/* Original Lab Syllabus Question Box */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
              <span className="text-[11px] font-bold font-mono uppercase text-blue-800 tracking-wider block mb-1.5">
                Original Question as Given in College Practical Manual:
              </span>
              <p className="text-sm font-semibold text-blue-950 whitespace-pre-line leading-relaxed">
                {program.pdfQuestion}
              </p>
            </div>

            {/* Structured Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80 space-y-1">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">1. What the Program Does</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{program.objective.whatItDoes}</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80 space-y-1">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">2. Why It Is Written / Used</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{program.objective.whyWritten}</p>
              </div>

              {program.objective.problemSolved && (
                <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80 space-y-1">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">3. Problem It Solves</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{program.objective.problemSolved}</p>
                </div>
              )}

              {program.objective.overallMechanism && (
                <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80 space-y-1">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">4. How It Works Overall</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{program.objective.overallMechanism}</p>
                </div>
              )}

              <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80 space-y-1">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">Concepts Demonstrated</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{program.objective.conceptsDemonstrated}</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/80 space-y-1">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">Expected Output Summary</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{program.objective.expectedOutputSummary}</p>
              </div>
            </div>

            {program.objective.prerequisitesToUnderstand && (
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Prerequisites before studying this code:</strong> {program.objective.prerequisitesToUnderstand}
                </div>
              </div>
            )}
          </section>

          {/* SECTION B: Concepts Used */}
          <section id="section-concepts" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">B. Key Concepts Used</h2>
                  <p className="text-xs text-slate-500">Core programming constructs, libraries, and principles</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.conceptsUsed.map((concept, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-slate-200/90 bg-white hover:border-blue-300 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {concept.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{concept.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION C: Complete Program Code */}
          <section id="section-code" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-6 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">C. Complete Program Code</h2>
                  <p className="text-xs text-slate-500">Exact source code from the official practical manual</p>
                </div>
              </div>

              {/* Toggle between Original and Corrected if applicable */}
              {program.correctedCode && (
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
                  <button
                    onClick={() => setCodeVersionTab('original')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      codeVersionTab === 'original'
                        ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Original (PDF Manual)
                  </button>
                  <button
                    onClick={() => setCodeVersionTab('corrected')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      codeVersionTab === 'corrected'
                        ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Modern / Corrected Version
                  </button>
                </div>
              )}
            </div>

            {/* Multi-file programs or single file */}
            {program.codeFiles && program.codeFiles.length > 0 ? (
              <CodeViewer files={program.codeFiles} />
            ) : program.id === 9 && codeVersionTab === 'original' && program.cssCode ? (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>File 1: styles.css (External Stylesheet)</span>
                  </div>
                  <CodeViewer code={program.cssCode} language="css" fileName="styles.css" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    <span>File 2: external.html (HTML Markup)</span>
                  </div>
                  <CodeViewer code={program.originalCode} language="html" fileName="external.html" />
                </div>
              </div>
            ) : (
              <CodeViewer 
                code={codeVersionTab === 'corrected' && program.correctedCode ? program.correctedCode : program.originalCode} 
                language={isPythonApp || isDataScience ? 'python' : isPhp ? 'php' : 'html'}
                fileName={isPythonApp || isDataScience ? 'program.py' : isPhp ? 'program.php' : 'index.html'}
              />
            )}
          </section>

          {/* SECTION D: Step-by-Step, Line-by-Line Explanation */}
          <section id="section-steps" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                  <ListOrdered className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">D. Step-by-Step, Line-by-Line Explanation</h2>
                  <p className="text-xs text-slate-500">Every single meaningful line examined with purpose, execution, and connections</p>
                </div>
              </div>

              {/* View Mode Switcher: Guided Walkthrough vs Show All */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
                  <button
                    onClick={() => setStepViewMode('walkthrough')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      stepViewMode === 'walkthrough' 
                        ? 'bg-white text-blue-700 shadow-2xs font-bold' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Interactive Walkthrough
                  </button>
                  <button
                    onClick={() => {
                      setStepViewMode('all');
                      expandAllSteps();
                    }}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      stepViewMode === 'all' 
                        ? 'bg-white text-blue-700 shadow-2xs font-bold' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Show All Lines ({program.steps.length})
                  </button>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* MODE 1: INTERACTIVE GUIDED WALKTHROUGH                   */}
            {/* ======================================================== */}
            {stepViewMode === 'walkthrough' && (
              <div className="space-y-6">
                {/* Walkthrough Navigation Bar */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-mono text-sm shadow-xs">
                      {currentStep.stepNumber}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                          Step {currentStep.stepNumber} of {program.steps.length}
                        </span>
                        {currentStep.lineNumberRange && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                            {currentStep.lineNumberRange}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>

                  {/* Previous / Next Controls */}
                  <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                    <button
                      onClick={handlePrevStep}
                      disabled={activeStepIndex === 0}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white text-slate-700 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={activeStepIndex === program.steps.length - 1}
                      className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white shadow-2xs transition-colors"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Progress Scrubber */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-slate-500">
                    <span>Navigation Bar: Click any step to jump</span>
                    <span>{Math.round(((activeStepIndex + 1) / program.steps.length) * 100)}% complete</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {program.steps.map((st, idx) => (
                      <button
                        key={st.stepNumber}
                        onClick={() => setActiveStepIndex(idx)}
                        className={`h-7 px-2.5 rounded text-xs font-mono font-semibold transition-all ${
                          idx === activeStepIndex
                            ? 'bg-blue-600 text-white shadow-xs scale-105'
                            : idx < activeStepIndex
                            ? 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                        title={st.title}
                      >
                        {st.stepNumber}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Focused Active Step Card */}
                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-white space-y-4 p-5 sm:p-6">
                  {/* Code snippet block */}
                  <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900 text-slate-100 p-4 font-mono text-xs sm:text-sm leading-relaxed shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-sans font-semibold pb-2 mb-2 border-b border-slate-800">
                      <span>Exact Code for {currentStep.lineNumberRange || `Step ${currentStep.stepNumber}`}:</span>
                      <span className="text-emerald-400 font-mono">Verified Source Line</span>
                    </div>
                    <pre className="whitespace-pre-wrap text-emerald-300 font-mono">{currentStep.codeSnippet}</pre>
                  </div>

                  {/* 5-part detailed breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    {/* 1. What this line does */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wide text-xs block text-blue-700">
                        1. What This Line Means
                      </span>
                      <p className="text-slate-700 leading-relaxed">{currentStep.whatItDoes}</p>
                    </div>

                    {/* 2. Why it is needed */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wide text-xs block text-indigo-700">
                        2. Why It Is Needed
                      </span>
                      <p className="text-slate-700 leading-relaxed">{currentStep.whyUsed}</p>
                    </div>

                    {/* 3. How it works internally */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wide text-xs block text-purple-700">
                        3. What Happens When Executed
                      </span>
                      <p className="text-slate-700 leading-relaxed">{currentStep.howItWorks}</p>
                    </div>

                    {/* 4. Connection to surrounding code */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wide text-xs block text-teal-700">
                        4. Connection to Previous &amp; Next Lines
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {currentStep.connectionToSurrounding || 
                          `Seamlessly receives data flow from preceding statements and establishes state needed for following operations.`}
                      </p>
                    </div>
                  </div>

                  {/* 5. Examiner Note / Lab Tip */}
                  <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 text-xs sm:text-sm">
                    <span className="font-bold text-blue-900 uppercase tracking-wide text-xs block mb-1">
                      5. Practical Exam Note &amp; Examiner Tip:
                    </span>
                    <p className="text-blue-800 leading-relaxed">{currentStep.examRelevance}</p>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* MODE 2: SHOW ALL LINE STEPS (COMPREHENSIVE EXPANDED)     */}
            {/* ======================================================== */}
            {stepViewMode === 'all' && (
              <div className="space-y-4">
                {/* Search / Filter Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={stepSearchQuery}
                      onChange={(e) => setStepSearchQuery(e.target.value)}
                      placeholder="Filter lines (e.g. while, input, font)..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={expandAllSteps}
                      className="text-xs text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded border border-slate-200 hover:bg-slate-100 bg-white transition-colors"
                    >
                      Expand All
                    </button>
                    <button
                      onClick={collapseAllSteps}
                      className="text-xs text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded border border-slate-200 hover:bg-slate-100 bg-white transition-colors"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* Steps Accordion List */}
                <div className="space-y-3">
                  {filteredSteps.map(step => {
                    const isStepExpanded = expandedSteps[step.stepNumber] ?? false;
                    return (
                      <div 
                        key={step.stepNumber}
                        className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
                      >
                        {/* Step Header Accordion Toggle */}
                        <button
                          onClick={() => toggleStep(step.stepNumber)}
                          className="w-full flex items-center justify-between p-4 bg-slate-50/70 hover:bg-slate-100/70 text-left transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold font-mono shrink-0">
                              {step.stepNumber}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                                {step.lineNumberRange && (
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                                    {step.lineNumberRange}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          {isStepExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                        </button>

                        {/* Step Content */}
                        {isStepExpanded && (
                          <div className="p-4 sm:p-5 border-t border-slate-200 space-y-4 bg-white">
                            {/* Code snippet for this step */}
                            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900 text-slate-100 p-3.5 font-mono text-xs leading-relaxed">
                              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-sans font-semibold">
                                Code for {step.lineNumberRange || `Step ${step.stepNumber}`}:
                              </div>
                              <pre className="whitespace-pre-wrap text-emerald-300 font-mono">{step.codeSnippet}</pre>
                            </div>

                            {/* Breakdown */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70">
                                <span className="font-bold text-slate-900 block mb-1 text-blue-700">1. What this line means:</span>
                                <p className="text-slate-600 leading-relaxed">{step.whatItDoes}</p>
                              </div>

                              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70">
                                <span className="font-bold text-slate-900 block mb-1 text-indigo-700">2. Why it is needed:</span>
                                <p className="text-slate-600 leading-relaxed">{step.whyUsed}</p>
                              </div>

                              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70">
                                <span className="font-bold text-slate-900 block mb-1 text-purple-700">3. What happens when executed:</span>
                                <p className="text-slate-600 leading-relaxed">{step.howItWorks}</p>
                              </div>

                              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70">
                                <span className="font-bold text-slate-900 block mb-1 text-teal-700">4. Connection to surrounding code:</span>
                                <p className="text-slate-600 leading-relaxed">
                                  {step.connectionToSurrounding || `Integrates with surrounding program context.`}
                                </p>
                              </div>
                            </div>

                            <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-200/70 text-xs">
                              <span className="font-bold text-blue-900 block mb-1">5. Examiner Viva Tip:</span>
                              <p className="text-blue-800 leading-relaxed">{step.examRelevance}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* SECTION E: Program Execution Flow */}
          <section id="section-flow" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-50 text-amber-700 rounded-lg">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">E. Program Execution Flow</h2>
                  <p className="text-xs text-slate-500">Step-by-step chronological execution sequence</p>
                </div>
              </div>
            </div>

            <ol className="relative border-l border-blue-200 ml-4 space-y-4 text-xs sm:text-sm">
              {program.executionFlow.map((flowItem, idx) => (
                <li key={idx} className="ml-6 group">
                  <span className="absolute -left-2.5 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-2xs font-mono">
                    {idx + 1}
                  </span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 leading-relaxed group-hover:bg-blue-50/40 group-hover:border-blue-200 transition-colors">
                    {flowItem}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* SECTION F: Output Explanation & Interactive Demonstration */}
          <section id="section-output" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-rose-50 text-rose-700 rounded-lg">
                  <MonitorPlay className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">F. Expected Output &amp; Interactive Demonstration</h2>
                  <p className="text-xs text-slate-500">Visual mapping of code blocks to output elements</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {program.outputExplanation.description}
            </p>

            {/* Live Interactive Sandbox Render */}
            <div>
              <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center justify-between">
                <span>
                  {isPythonApp 
                    ? 'Interactive Python App Simulation:' 
                    : isDataScience 
                    ? 'Interactive Python Simulation:' 
                    : isPhp 
                    ? 'Interactive Demonstration & Output Environment:' 
                    : 'Rendered Live Output:'}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {isPythonApp ? 'Tkinter & Python GUI' : isDataScience ? 'Data Science Model' : isPhp ? 'Server Simulation' : 'Live Sandbox'}
                </span>
              </div>
              {program.previewType === 'python-app-simulation' ? (
                <PythonAppDevSimulationPreview program={program} />
              ) : program.previewType === 'python-simulation' ? (
                <PythonSimulationPreview program={program} />
              ) : program.previewType === 'php-simulation' ? (
                <PhpSimulationPreview program={program} />
              ) : (
                <LivePreview program={program} useCorrected={codeVersionTab === 'corrected'} />
              )}
            </div>

            {/* Element by Element Breakdown Table */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 font-semibold text-xs text-slate-700">
                Element-to-Source Mapping Breakdown
              </div>
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-600">
                  <tr>
                    <th className="py-2 px-3 font-semibold">Output Element</th>
                    <th className="py-2 px-3 font-semibold">Responsible Source Code</th>
                    <th className="py-2 px-3 font-semibold">Execution Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {program.outputExplanation.elementsBreakdown.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3 font-medium text-slate-900">{item.element}</td>
                      <td className="py-2.5 px-3 font-mono text-blue-700 bg-slate-50/50">{item.sourceLine}</td>
                      <td className="py-2.5 px-3 text-slate-600">{item.explanation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION G: Important Lab Exam Notes & Traps */}
          <section id="section-notes" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-purple-50 text-purple-700 rounded-lg">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">G. Important Lab Exam Notes &amp; Common Mistakes</h2>
                  <p className="text-xs text-slate-500">High-yield revision points, syntax traps, and common student errors</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.examNotes.map((note, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-lg border transition-all ${
                    note.category === 'common_mistakes' 
                      ? 'bg-rose-50/50 border-rose-200' 
                      : note.category === 'pro_tips' 
                        ? 'bg-amber-50/50 border-amber-200' 
                        : note.category === 'security'
                          ? 'bg-purple-50/50 border-purple-200'
                          : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded font-mono ${
                      note.category === 'common_mistakes' 
                        ? 'bg-rose-100 text-rose-800' 
                        : note.category === 'pro_tips' 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {note.category.replace('_', ' ')}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">{note.title}</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">{note.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION H: Practical Exam Viva Questions & Answers */}
          <section id="section-viva" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-6 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">H. Practical Exam Viva Questions ({program.vivaQuestions.length})</h2>
                  <p className="text-xs text-slate-500">Targeted questions asked by college external lab examiners</p>
                </div>
              </div>

              <button
                onClick={() => {
                  if (Object.keys(revealedAnswers).length === program.vivaQuestions.length) {
                    setRevealedAnswers({});
                  } else {
                    const allRevealed = program.vivaQuestions.reduce((acc, _, i) => {
                      acc[i] = true;
                      return acc;
                    }, {} as Record<number, boolean>);
                    setRevealedAnswers(allRevealed);
                  }
                }}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold self-start sm:self-auto"
              >
                {Object.keys(revealedAnswers).length === program.vivaQuestions.length ? 'Hide All Answers' : 'Reveal All Answers'}
              </button>
            </div>

            <div className="space-y-3">
              {program.vivaQuestions.map((viva, idx) => {
                const isRevealed = revealedAnswers[idx] ?? false;
                return (
                  <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-white transition-all hover:border-slate-300">
                    <button
                      onClick={() => toggleAnswer(idx)}
                      className="w-full flex items-start justify-between text-left gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono font-bold text-xs text-blue-600 mt-0.5">Q{idx + 1}.</span>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">{viva.question}</h3>
                      </div>
                      <span className="text-xs text-slate-400 font-medium shrink-0 mt-0.5">
                        {isRevealed ? 'Hide' : 'Answer'}
                      </span>
                    </button>

                    {isRevealed && (
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm space-y-2">
                        <p className="text-slate-700 leading-relaxed font-normal">{viva.answer}</p>
                        {viva.examinerTip && (
                          <div className="p-2.5 rounded bg-blue-50/50 border border-blue-100 text-blue-900 text-xs flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-semibold">Examiner Tip:</strong> {viva.examinerTip}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Local Run Guide (if available) */}
          {program.runLocallyGuide && (
            <section id="section-xampp" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Run Locally on Your Machine</h2>
                  <p className="text-xs text-slate-500">Step-by-step instructions for testing in lab or at home</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                {program.runLocallyGuide.pythonSteps && (
                  <ol className="list-decimal list-inside space-y-1.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    {program.runLocallyGuide.pythonSteps.map((step, idx) => (
                      <li key={idx} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                )}
                {program.runLocallyGuide.xamppSteps && (
                  <ol className="list-decimal list-inside space-y-1.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    {program.runLocallyGuide.xamppSteps.map((step, idx) => (
                      <li key={idx} className="leading-relaxed">{step}</li>
                    ))}
                  </ol>
                )}
                {program.runLocallyGuide.notes && (
                  <p className="text-xs text-slate-500 italic mt-2">
                    Note: {program.runLocallyGuide.notes}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Bottom Program Switcher Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            {prevProgram ? (
              <button
                onClick={() => onSelectProgram(prevProgram.id)}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous: Program #{prevProgram.programNumber}</span>
              </button>
            ) : <div />}

            {onViewProgram && (
              <button
                onClick={() => onViewProgram(program.id)}
                className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Code className="w-4 h-4" />
                <span>Back to Full Program Code &amp; Preview</span>
              </button>
            )}

            {nextProgram ? (
              <button
                onClick={() => onSelectProgram(nextProgram.id)}
                className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <span>Next: Program #{nextProgram.programNumber}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </div>
        </main>
      </div>
    </div>
  );
};
