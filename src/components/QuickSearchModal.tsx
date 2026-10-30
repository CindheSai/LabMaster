import React, { useState, useEffect } from 'react';
import { Search, X, Code2, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { ProgramData } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  programs: ProgramData[];
  onSelectProgram: (id: number, view: 'program' | 'explanation') => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  programs,
  onSelectProgram
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = programs.filter(p => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.programNumber.toString() === q.trim() ||
      p.technologies.some(t => t.toLowerCase().includes(q)) ||
      p.vivaQuestions.some(v => v.question.toLowerCase().includes(q) || v.answer.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
      <div 
        className="w-full max-w-xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-slate-200 p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, tags, or viva questions..."
            className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-slate-100 p-2">
          {filtered.length > 0 ? (
            filtered.map(p => (
              <div 
                key={p.id}
                className="p-3 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between gap-3 group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {p.subjectId === 'major-15' ? 'Major 15 · Python' : p.subjectId === 'major-14' ? 'Major 14 · Data Science' : p.subjectId === 'major-13' ? 'Major 13 · PHP' : 'Major 12 · Web'}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      P{p.programNumber}
                    </span>
                    <span className="text-xs font-semibold text-slate-900 truncate">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {p.shortDescription}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 opacity-90 group-hover:opacity-100">
                  <button
                    onClick={() => {
                      onSelectProgram(p.id, 'program');
                      onClose();
                    }}
                    className="flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 px-2 py-1 rounded"
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Code</span>
                  </button>

                  <button
                    onClick={() => {
                      onSelectProgram(p.id, 'explanation');
                      onClose();
                    }}
                    className="flex items-center gap-1 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-700 px-2.5 py-1 rounded shadow-2xs"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Explain</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-xs text-slate-500">
              No programs found matching "{query}"
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span><strong>Esc</strong> to close</span>
            <span><strong>↑↓</strong> to navigate</span>
          </div>
          <span>LabMaster Practical Syllabus Search</span>
        </div>
      </div>
    </div>
  );
};
