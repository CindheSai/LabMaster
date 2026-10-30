import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Award, 
  BookOpen, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  BarChart2,
  Database,
  Server,
  Code2,
  PieChart,
  Binary
} from 'lucide-react';
import { ProgramData } from '../types';

interface ProgressViewProps {
  programs: ProgramData[];
  completedIds: number[];
  onToggleComplete: (id: number) => void;
  onViewExplanation: (id: number) => void;
  onResetProgress: () => void;
  onBackToDashboard: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  programs,
  completedIds,
  onToggleComplete,
  onViewExplanation,
  onResetProgress,
  onBackToDashboard
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'major-12' | 'major-13' | 'major-14' | 'major-15'>('all');

  const filteredPrograms = programs.filter(p => {
    if (selectedSubject === 'all') return true;
    return (p.subjectId || 'major-12') === selectedSubject;
  });

  const total = filteredPrograms.length;
  const completed = completedIds.filter(id => filteredPrograms.some(p => p.id === id)).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Breakdown lists across all programs
  const htmlProgs = programs.filter(p => p.technologies.includes('HTML') && (p.subjectId || 'major-12') === 'major-12');
  const jsProgs = programs.filter(p => p.technologies.includes('JavaScript'));
  const phpProgs = programs.filter(p => p.technologies.includes('PHP'));
  const mysqlProgs = programs.filter(p => p.technologies.includes('MySQL'));
  const numpyProgs = programs.filter(p => p.technologies.includes('NumPy'));
  const pandasProgs = programs.filter(p => p.technologies.includes('Pandas') || p.technologies.includes('Matplotlib'));
  const pythonAppProgs = programs.filter(p => (p.subjectId || 'major-12') === 'major-15');
  const tkinterProgs = programs.filter(p => p.technologies.includes('Tkinter') || p.technologies.includes('SQLite'));

  const getCompletedForList = (list: ProgramData[]) => 
    list.filter(p => completedIds.includes(p.id)).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <button
            onClick={onBackToDashboard}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            My Lab Preparation Progress
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track your mastery of B.Sc. Computer Science practical laboratory syllabi across all three major courses.
          </p>
        </div>

        <button
          onClick={onResetProgress}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Progress</span>
        </button>
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 rounded-xl max-w-fit">
        <button
          onClick={() => setSelectedSubject('all')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            selectedSubject === 'all' 
              ? 'bg-white text-slate-900 shadow-2xs' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          All Subjects ({programs.length})
        </button>
        <button
          onClick={() => setSelectedSubject('major-12')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            selectedSubject === 'major-12' 
              ? 'bg-white text-slate-900 shadow-2xs' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Major 12: Web Tech (9)
        </button>
        <button
          onClick={() => setSelectedSubject('major-13')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            selectedSubject === 'major-13' 
              ? 'bg-white text-slate-900 shadow-2xs' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Major 13: PHP &amp; MySQL (10)
        </button>
        <button
          onClick={() => setSelectedSubject('major-14')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            selectedSubject === 'major-14' 
              ? 'bg-white text-slate-900 shadow-2xs' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Major 14: Data Science (10)
        </button>
        <button
          onClick={() => setSelectedSubject('major-15')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            selectedSubject === 'major-15' 
              ? 'bg-white text-slate-900 shadow-2xs' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Major 15: Python App Dev (10)
        </button>
      </div>

      {/* Main Overall Progress Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
              {selectedSubject === 'all' 
                ? `All Practical Syllabi (${programs.length} Programs)` 
                : selectedSubject === 'major-12' 
                ? 'Major 12: Web Interface Designing' 
                : selectedSubject === 'major-13' 
                ? 'Major 13: PHP & MySQL' 
                : selectedSubject === 'major-14'
                ? 'Major 14: Foundation of Data Science'
                : 'Major 15: Application Development using Python'}
            </span>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
                {percent}%
              </span>
              <span className="text-sm text-slate-500 font-medium">
                ({completed} of {total} programs verified)
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {percent === 100 
                ? '🎉 Outstanding! You have prepared all programs in this selection.' 
                : `${total - completed} programs remaining before your university practical lab examination.`}
            </p>
          </div>

          {/* Radial or bar visual */}
          <div className="w-full md:w-64 space-y-2">
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>0% Start</span>
              <span>100% Exam Ready</span>
            </div>
          </div>
        </div>

        {/* Technology Breakdown Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-900">
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              <span>HTML &amp; CSS (Major 12)</span>
            </div>
            <div className="text-xl font-bold text-blue-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(htmlProgs)} / {htmlProgs.length}
            </div>
            <div className="text-[11px] text-blue-800 mt-0.5">
              {htmlProgs.length > 0 ? Math.round((getCompletedForList(htmlProgs) / htmlProgs.length) * 100) : 0}% Verified
            </div>
          </div>

          <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
              <Code2 className="w-3.5 h-3.5 text-amber-600" />
              <span>JavaScript Math &amp; RegEx</span>
            </div>
            <div className="text-xl font-bold text-amber-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(jsProgs)} / {jsProgs.length}
            </div>
            <div className="text-[11px] text-amber-800 mt-0.5">
              {jsProgs.length > 0 ? Math.round((getCompletedForList(jsProgs) / jsProgs.length) * 100) : 0}% Verified
            </div>
          </div>

          <div className="p-4 rounded-lg bg-indigo-50/50 border border-indigo-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-900">
              <Server className="w-3.5 h-3.5 text-indigo-600" />
              <span>PHP Server-Side (Major 13)</span>
            </div>
            <div className="text-xl font-bold text-indigo-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(phpProgs)} / {phpProgs.length}
            </div>
            <div className="text-[11px] text-indigo-800 mt-0.5">
              {phpProgs.length > 0 ? Math.round((getCompletedForList(phpProgs) / phpProgs.length) * 100) : 0}% Verified
            </div>
          </div>

          <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-900">
              <Database className="w-3.5 h-3.5 text-emerald-600" />
              <span>MySQL Database (Major 13)</span>
            </div>
            <div className="text-xl font-bold text-emerald-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(mysqlProgs)} / {mysqlProgs.length}
            </div>
            <div className="text-[11px] text-emerald-800 mt-0.5">
              {mysqlProgs.length > 0 ? Math.round((getCompletedForList(mysqlProgs) / mysqlProgs.length) * 100) : 0}% Verified
            </div>
          </div>

          <div className="p-4 rounded-lg bg-purple-50/50 border border-purple-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-900">
              <Binary className="w-3.5 h-3.5 text-purple-600" />
              <span>Python &amp; NumPy (Major 14)</span>
            </div>
            <div className="text-xl font-bold text-purple-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(numpyProgs)} / {numpyProgs.length}
            </div>
            <div className="text-[11px] text-purple-800 mt-0.5">
              {numpyProgs.length > 0 ? Math.round((getCompletedForList(numpyProgs) / numpyProgs.length) * 100) : 0}% Verified
            </div>
          </div>

          <div className="p-4 rounded-lg bg-rose-50/50 border border-rose-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-900">
              <PieChart className="w-3.5 h-3.5 text-rose-600" />
              <span>Pandas &amp; Plots (Major 14)</span>
            </div>
            <div className="text-xl font-bold text-rose-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(pandasProgs)} / {pandasProgs.length}
            </div>
            <div className="text-[11px] text-rose-800 mt-0.5">
              {pandasProgs.length > 0 ? Math.round((getCompletedForList(pandasProgs) / pandasProgs.length) * 100) : 0}% Verified
            </div>
          </div>

          <div className="p-4 rounded-lg bg-teal-50/50 border border-teal-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-900">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Python App Dev (Major 15)</span>
            </div>
            <div className="text-xl font-bold text-teal-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(pythonAppProgs)} / {pythonAppProgs.length}
            </div>
            <div className="text-[11px] text-teal-800 mt-0.5">
              {pythonAppProgs.length > 0 ? Math.round((getCompletedForList(pythonAppProgs) / pythonAppProgs.length) * 100) : 0}% Verified
            </div>
          </div>

          <div className="p-4 rounded-lg bg-sky-50/50 border border-sky-200/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-900">
              <Database className="w-3.5 h-3.5 text-sky-600" />
              <span>Tkinter &amp; SQLite (Major 15)</span>
            </div>
            <div className="text-xl font-bold text-sky-700 mt-1 tabular-nums font-mono">
              {getCompletedForList(tkinterProgs)} / {tkinterProgs.length}
            </div>
            <div className="text-[11px] text-sky-800 mt-0.5">
              {tkinterProgs.length > 0 ? Math.round((getCompletedForList(tkinterProgs) / tkinterProgs.length) * 100) : 0}% Verified
            </div>
          </div>
        </div>
      </div>

      {/* Program Checklist Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
          <span>Syllabus Verification Checklist</span>
          <span className="text-slate-500 font-mono text-[11px]">{total} Tasks in Current View</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredPrograms.map(prog => {
            const done = completedIds.includes(prog.id);
            return (
              <div 
                key={prog.id}
                className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onToggleComplete(prog.id)}
                    className="shrink-0 p-1 rounded hover:bg-slate-100"
                  >
                    {done ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                        {prog.subjectId === 'major-15' ? 'Major 15' : prog.subjectId === 'major-14' ? 'Major 14' : prog.subjectId === 'major-13' ? 'Major 13' : 'Major 12'}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">P{prog.programNumber}</span>
                      <h3 className={`text-sm font-semibold ${done ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {prog.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {prog.shortDescription}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onViewExplanation(prog.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50/60 hover:bg-blue-100/60 rounded-md transition-colors shrink-0"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Review</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
