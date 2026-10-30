import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  Code2, 
  BookOpen, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ProgramData } from '../types';

interface ProgramCardProps {
  program: ProgramData;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (id: number) => void;
  onToggleBookmark: (id: number) => void;
  onViewProgram: (id: number) => void;
  onViewExplanation: (id: number) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onViewProgram,
  onViewExplanation,
}) => {
  return (
    <div className={`relative bg-white border rounded-xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between hover:shadow-md ${
      isCompleted 
        ? 'border-emerald-200 bg-emerald-50/20' 
        : 'border-slate-200 hover:border-blue-300'
    }`}>
      {/* Top Card Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
              P{program.programNumber}
            </span>
            <div className="flex items-center gap-1">
              {program.technologies.map(tech => (
                <span 
                  key={tech} 
                  className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    tech === 'JavaScript' 
                      ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                      : tech === 'CSS' 
                        ? 'bg-indigo-50 text-indigo-800 border border-indigo-200' 
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleBookmark(program.id)}
              className="p-1.5 rounded-md text-slate-400 hover:text-amber-500 hover:bg-slate-50 transition-colors"
              title={isBookmarked ? "Remove Bookmark" : "Bookmark Program"}
              aria-label={isBookmarked ? "Remove Bookmark" : "Bookmark Program"}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
            <button
              onClick={() => onToggleComplete(program.id)}
              className="p-1.5 rounded-md text-slate-400 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
              title={isCompleted ? "Mark Incomplete" : "Mark Completed"}
              aria-label={isCompleted ? "Mark Incomplete" : "Mark Completed"}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <Circle className="w-5 h-5 text-slate-300 hover:text-slate-500" />
              )}
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {program.title}
        </h3>
        
        <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
          {program.shortDescription}
        </p>

        {/* Viva & Steps Summary Tags */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
          <span>{program.steps.length} Steps</span>
          <span>·</span>
          <span>{program.vivaQuestions.length} Viva Questions</span>
          <span>·</span>
          <span>{program.examNotes.length} Exam Notes</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <button
          onClick={() => onViewProgram(program.id)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
        >
          <Code2 className="w-3.5 h-3.5 text-slate-500" />
          <span>View Program</span>
        </button>

        <button
          onClick={() => onViewExplanation(program.id)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>View Explanation</span>
        </button>
      </div>
    </div>
  );
};
