import React from 'react';
import { Bookmark, BookOpen, Code2, ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { ProgramData } from '../types';

interface BookmarksViewProps {
  programs: ProgramData[];
  bookmarkedIds: number[];
  completedIds: number[];
  onToggleComplete: (id: number) => void;
  onToggleBookmark: (id: number) => void;
  onViewProgram: (id: number) => void;
  onViewExplanation: (id: number) => void;
  onBackToDashboard: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  programs,
  bookmarkedIds,
  completedIds,
  onToggleComplete,
  onToggleBookmark,
  onViewProgram,
  onViewExplanation,
  onBackToDashboard
}) => {
  const bookmarkedPrograms = programs.filter(p => bookmarkedIds.includes(p.id));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-slate-200">
        <button
          onClick={onBackToDashboard}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-2 inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Bookmarked Programs for Exam Revision
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Quickly review important or challenging lab programs before entering your practical exam hall.
        </p>
      </div>

      {bookmarkedPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookmarkedPrograms.map(p => {
            const isCompleted = completedIds.includes(p.id);
            return (
              <div 
                key={p.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {p.subjectId === 'major-15' ? 'Major 15 · Python' : p.subjectId === 'major-14' ? 'Major 14 · Data Science' : p.subjectId === 'major-13' ? 'Major 13 · PHP' : 'Major 12 · Web'}
                        </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        Program #{p.programNumber}
                      </span>
                    </div>
                    <button
                      onClick={() => onToggleBookmark(p.id)}
                      className="p-1 text-amber-500 hover:text-slate-400"
                      title="Remove Bookmark"
                    >
                      <Bookmark className="w-4 h-4 fill-amber-500" />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                    {p.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{p.vivaQuestions.length} Viva Questions</span>
                    <button
                      onClick={() => onToggleComplete(p.id)}
                      className="flex items-center gap-1 hover:text-slate-900 font-medium"
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Completed</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-3.5 h-3.5 text-slate-400" />
                          <span>Mark Done</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onViewProgram(p.id)}
                    className="flex-1 py-1.5 px-3 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-center"
                  >
                    View Code
                  </button>
                  <button
                    onClick={() => onViewExplanation(p.id)}
                    className="flex-1 py-1.5 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center shadow-2xs"
                  >
                    View Explanation
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-xl p-8">
          <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No bookmarked programs yet</h3>
          <p className="text-xs text-slate-500 mt-1">
            Click the bookmark icon on any program card or explanation page to save it here for fast revision.
          </p>
        </div>
      )}
    </div>
  );
};
