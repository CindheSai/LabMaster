import React from 'react';
import { BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'dashboard' | 'subject' | 'progress' | 'bookmarks') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-12 px-4 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-sm">LabMaster</span>
            <span>—</span>
            <span className="font-medium text-slate-600">Learn. Understand. Practice. Perform.</span>
          </div>
          <p className="text-slate-400">
            Interactive Practical Laboratory Preparation for B.Sc. Computer Science Students.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('dashboard')} className="hover:text-slate-900 transition-colors">
            Dashboard
          </button>
          <button onClick={() => onNavigate('subject')} className="hover:text-slate-900 transition-colors">
            All Subjects
          </button>
          <button onClick={() => onNavigate('progress')} className="hover:text-slate-900 transition-colors">
            My Progress
          </button>
          <button onClick={() => onNavigate('bookmarks')} className="hover:text-slate-900 transition-colors">
            Bookmarks
          </button>
        </div>

        <div className="text-center md:text-right text-slate-400 font-mono text-[11px]">
          Official Practical Syllabus (39 Verified Programs · 4 Majors)
        </div>
      </div>
    </footer>
  );
};
