import React, { useState } from 'react';
import { 
  ChevronLeft, 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  BookOpen, 
  Code, 
  Play, 
  Split, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { ProgramData } from '../types';
import { CodeViewer } from './CodeViewer';
import { LivePreview } from './LivePreview';
import { PhpSimulationPreview } from './PhpSimulationPreview';
import { PythonSimulationPreview } from './PythonSimulationPreview';
import { PythonAppDevSimulationPreview } from './PythonAppDevSimulationPreview';

interface ProgramDetailViewProps {
  program: ProgramData;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (id: number) => void;
  onToggleBookmark: (id: number) => void;
  onViewExplanation: () => void;
  onBackToSubject: () => void;
}

export const ProgramDetailView: React.FC<ProgramDetailViewProps> = ({
  program,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onViewExplanation,
  onBackToSubject
}) => {
  const [viewMode, setViewMode] = useState<'split' | 'code' | 'preview'>('split');
  const [codeVersion, setCodeVersion] = useState<'original' | 'corrected'>('original');

  const isPythonApp = program.subjectId === 'major-15';
  const isDataScience = program.subjectId === 'major-14';
  const isPhp = program.subjectId === 'major-13' || program.technologies.includes('PHP');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Program Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <button
              onClick={onBackToSubject}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              {isPythonApp
                ? 'Back to Major 15 — Application Development using Python'
                : isDataScience 
                ? 'Back to Major 14 — Foundation of Data Science' 
                : isPhp 
                ? 'Back to Major 13 — PHP & MySQL' 
                : 'Back to Major 12 Programs'}
            </button>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                Program #{program.programNumber}
              </span>
              <div className="flex items-center gap-1.5 text-xs">
                {program.technologies.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              {program.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
              {program.shortDescription}
            </p>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2 self-stretch lg:self-auto shrink-0">
            <button
              onClick={() => onToggleBookmark(program.id)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                isBookmarked 
                  ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onToggleComplete(program.id)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all ${
                isCompleted 
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 text-slate-400" />}
              <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>

            <button
              onClick={onViewExplanation}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>View Step-by-Step Explanation</span>
            </button>
          </div>
        </div>

        {/* View Mode & Version Selector Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 mt-4 border-t border-slate-100">
          {/* Layout controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
            <button
              onClick={() => setViewMode('split')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                viewMode === 'split' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>Split View</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                viewMode === 'code' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Code Only</span>
            </button>
            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                viewMode === 'preview' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Output Preview</span>
            </button>
          </div>

          {/* Original vs Modern Version Selector */}
          {program.correctedCode && (
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
              <button
                onClick={() => setCodeVersion('original')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  codeVersion === 'original' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Exact PDF Code
              </button>
              <button
                onClick={() => setCodeVersion('corrected')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  codeVersion === 'corrected' ? 'bg-white text-blue-700 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Modern / Corrected Version
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Coding Environment Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
      }`}>
        {/* Code Column */}
        {(viewMode === 'split' || viewMode === 'code') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Code className="w-4 h-4 text-blue-600" />
                <span>Source Code ({codeVersion === 'original' ? 'As Written in PDF' : 'Standard Web Version'})</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">Editable / Copy-ready</span>
            </div>

            {program.codeFiles && program.codeFiles.length > 0 ? (
              <CodeViewer 
                files={program.codeFiles}
                maxHeight={viewMode === 'code' ? 'max-h-[700px]' : 'max-h-[600px]'}
              />
            ) : program.id === 9 && codeVersion === 'original' && program.cssCode ? (
              <div className="space-y-4">
                <CodeViewer code={program.cssCode} language="css" fileName="styles.css" maxHeight="max-h-[340px]" />
                <CodeViewer code={program.originalCode} language="html" fileName="external.html" maxHeight="max-h-[340px]" />
              </div>
            ) : (
              <CodeViewer 
                code={codeVersion === 'corrected' && program.correctedCode ? program.correctedCode : program.originalCode} 
                language={isPythonApp || isDataScience ? 'python' : isPhp ? 'php' : 'html'}
                fileName={isPythonApp || isDataScience ? 'program.py' : isPhp ? 'program.php' : codeVersion === 'corrected' ? 'index.html (modern)' : 'index.html'}
                maxHeight={viewMode === 'code' ? 'max-h-[700px]' : 'max-h-[600px]'}
              />
            )}

            {/* Quick Helper Callout */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong>Need line-by-line understanding?</strong> Click on the{' '}
                <button onClick={onViewExplanation} className="text-blue-600 underline font-medium hover:text-blue-800">
                  Step-by-Step Explanation
                </button>{' '}
                to see what every single line, variable, function, and parameter does, plus viva examination questions.
              </div>
            </div>
          </div>
        )}

        {/* Live Preview Column */}
        {(viewMode === 'split' || viewMode === 'preview') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Play className="w-4 h-4 text-emerald-600" />
                <span>
                  {isPythonApp 
                    ? 'Interactive Python App Simulation' 
                    : isDataScience 
                    ? 'Interactive Python Simulation' 
                    : isPhp 
                    ? 'PHP Server Output & Simulation' 
                    : 'Live Browser Output'}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                {isPythonApp ? 'Tkinter & Python GUI' : isDataScience ? 'Data Science Model' : isPhp ? 'Server Environment' : 'Live Sandbox'}
              </span>
            </div>

            {program.previewType === 'python-app-simulation' ? (
              <PythonAppDevSimulationPreview program={program} />
            ) : program.previewType === 'python-simulation' ? (
              <PythonSimulationPreview program={program} />
            ) : program.previewType === 'php-simulation' ? (
              <PhpSimulationPreview program={program} />
            ) : (
              <LivePreview program={program} useCorrected={codeVersion === 'corrected'} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
