import React, { useState } from 'react';
import { 
  Search, 
  Bookmark, 
  CheckCircle2, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  User,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  completedCount: number;
  totalCount: number;
  bookmarkedCount: number;
  onNavigate: (view: 'dashboard' | 'subject' | 'progress' | 'bookmarks') => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  completedCount,
  totalCount,
  bookmarkedCount,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => onNavigate('dashboard')} 
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-2xs group-hover:bg-blue-700 transition-colors">
              LM
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                LabMaster
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate('subject')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'subject' || currentView === 'program' || currentView === 'explanation' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'hover:text-slate-900'
            }`}
          >
            My Subjects
          </button>
          <button
            onClick={() => onNavigate('progress')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'progress' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            My Progress
          </button>
          <button
            onClick={() => onNavigate('bookmarks')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 flex items-center gap-1.5 ${
              currentView === 'bookmarks' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-slate-900'
            }`}
          >
            <span>Bookmarks</span>
            {bookmarkedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[10px] flex items-center justify-center font-bold font-mono">
                {bookmarkedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Search & Student Profile */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200"
            title="Search programs (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search programs...</span>
            <kbd className="hidden sm:inline text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Student Profile Pill */}
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 text-xs">
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-semibold font-mono text-[11px]">
              CS
            </div>
            <div className="text-left hidden lg:block leading-tight">
              <span className="font-semibold text-slate-900 block text-[11px]">B.Sc. Student</span>
              <span className="text-[10px] text-slate-500 font-mono">{completedCount}/{totalCount} Completed</span>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2">
          <button
            onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg ${
              currentView === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => { onNavigate('subject'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg ${
              currentView === 'subject' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            My Subjects (M12, M13, M14)
          </button>
          <button
            onClick={() => { onNavigate('progress'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg ${
              currentView === 'progress' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            My Progress ({completedCount}/{totalCount})
          </button>
          <button
            onClick={() => { onNavigate('bookmarks'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg ${
              currentView === 'bookmarks' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Bookmarks ({bookmarkedCount})
          </button>
        </div>
      )}
    </header>
  );
};
