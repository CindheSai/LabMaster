import React from 'react';
import { 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  Clock, 
  HelpCircle, 
  Code2, 
  ShieldCheck, 
  Award,
  Sparkles
} from 'lucide-react';
import { ProgramData, SubjectData } from '../types';
import { HeroSection } from './HeroSection';
import { SubjectDashboard } from './SubjectDashboard';

interface HomeDashboardProps {
  subjects: SubjectData[];
  programs: ProgramData[];
  completedIds: number[];
  bookmarkedIds: number[];
  recentlyViewedIds: number[];
  onExploreSubject: (subjectId: string) => void;
  getSubjectCompletedCount: (subjectId: string) => number;
  onViewProgram: (id: number) => void;
  onViewExplanation: (id: number) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  subjects,
  programs,
  completedIds,
  bookmarkedIds,
  recentlyViewedIds,
  onExploreSubject,
  getSubjectCompletedCount,
  onViewProgram,
  onViewExplanation
}) => {
  const completedCount = completedIds.filter(id => programs.some(p => p.id === id)).length;
  const recentPrograms = recentlyViewedIds
    .map(id => programs.find(p => p.id === id))
    .filter((p): p is ProgramData => Boolean(p));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <HeroSection
        completedCount={completedCount}
        totalCount={programs.length}
        onExploreSubjects={() => onExploreSubject('major-12')}
        onContinueLearning={() => {
          const firstUnfinished = programs.find(p => !completedIds.includes(p.id)) || programs[0];
          onViewExplanation(firstUnfinished.id);
        }}
      />

      {/* Subject Dashboard (Major 12 + Major 13 + 2 placeholders) */}
      <SubjectDashboard
        subjects={subjects}
        getSubjectCompletedCount={getSubjectCompletedCount}
        onExploreSubject={onExploreSubject}
      />

      {/* Recently Studied Programs */}
      {recentPrograms.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                Recently Studied Programs
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">Last opened in your session</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPrograms.slice(0, 3).map(p => {
              const isCompleted = completedIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {p.subjectId === 'major-15' ? 'Major 15' : p.subjectId === 'major-14' ? 'Major 14' : p.subjectId === 'major-13' ? 'Major 13' : 'Major 12'}
                        </span>
                        <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          P#{p.programNumber}
                        </span>
                      </div>
                      {isCompleted ? (
                        <span className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">In Progress</span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onViewProgram(p.id)}
                      className="text-xs text-slate-600 hover:text-slate-900 font-medium"
                    >
                      View Code
                    </button>
                    <button
                      onClick={() => onViewExplanation(p.id)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>Study Explanation</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Practical Lab Examination Strategy Section */}
      <section className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 font-mono">
            <Award className="w-4 h-4" />
            <span>Practical Examination Preparation Advice</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            How to Score Full Marks in Your Web Lab Practical Exam
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Practical examiners evaluate both your executable code output on the lab PC and your conceptual clarity during the viva voce. Here is the structured strategy:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-slate-900 block">1. Write &amp; Test Code</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Type the program without missing closing tags like <code>&lt;/html&gt;</code>, <code>&lt;/table&gt;</code> or <code>&lt;/script&gt;</code>.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-slate-900 block">2. Understand Execution Flow</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Know which line generates which output (e.g. how <code>colspan=2</code> or RegExp quantifier works).
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-slate-900 block">3. Prepare Viva Questions</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Review the 50+ viva answers provided across all 9 programs in LabMaster.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
