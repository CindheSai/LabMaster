import React from 'react';
import { ArrowRight, Lock, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { SubjectData } from '../types';

interface SubjectDashboardProps {
  subjects: SubjectData[];
  getSubjectCompletedCount: (subjectId: string) => number;
  onExploreSubject: (subjectId: string) => void;
}

export const SubjectDashboard: React.FC<SubjectDashboardProps> = ({
  subjects,
  getSubjectCompletedCount,
  onExploreSubject
}) => {
  return (
    <section id="subjects" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Major Subjects Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Access your B.Sc. Computer Science practical laboratory courses and track examination readiness.
          </p>
        </div>
        <span className="text-xs text-slate-400 font-mono">
          4 Active Laboratory Courses · Semester V Syllabus
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((sub) => {
          const isAvailable = sub.isAvailable;
          const completedCount = isAvailable ? getSubjectCompletedCount(sub.id) : 0;
          const progressPercent = isAvailable && sub.totalPrograms > 0
            ? Math.round((completedCount / sub.totalPrograms) * 100) 
            : 0;

          return (
            <div
              key={sub.id}
              className={`relative bg-white border rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 ${
                isAvailable
                  ? 'border-blue-200 shadow-xs hover:shadow-md hover:border-blue-400'
                  : 'border-slate-200/80 bg-slate-50/40 opacity-80'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isAvailable 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {sub.code}
                  </span>

                  <span className="text-[11px] font-mono text-slate-500">
                    {sub.semester}
                  </span>
                </div>

                {/* Subject Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {sub.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {sub.subtitle}
                </p>

                {/* Progress Details */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Total Programs</span>
                    <span className="font-mono font-semibold text-slate-900">
                      {isAvailable ? `${sub.totalPrograms} Lab Tasks` : 'Pending Upload'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Completed</span>
                    <span className="font-mono font-semibold text-slate-900">
                      {isAvailable ? `${completedCount} of ${sub.totalPrograms}` : '—'}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>Progress</span>
                      <span className="font-mono font-semibold text-blue-700">{progressPercent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3">
                {isAvailable ? (
                  <button
                    onClick={() => onExploreSubject(sub.id)}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                  >
                    <span>Explore Subject</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="flex items-center justify-center gap-1.5 py-2 px-4 bg-slate-100 text-slate-400 text-xs font-medium rounded-lg select-none">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Curriculum Placeholder</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
