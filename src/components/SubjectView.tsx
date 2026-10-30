import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  ArrowLeft, 
  BookOpen, 
  Sparkles,
  Info,
  Clock,
  Layers,
  Play
} from 'lucide-react';
import { ProgramData, SubjectData } from '../types';
import { ProgramCard } from './ProgramCard';

interface SubjectViewProps {
  subject: SubjectData;
  programs: ProgramData[];
  completedIds: number[];
  bookmarkedIds: number[];
  onToggleComplete: (id: number) => void;
  onToggleBookmark: (id: number) => void;
  onViewProgram: (id: number) => void;
  onViewExplanation: (id: number) => void;
  onBackToDashboard: () => void;
}

export const SubjectView: React.FC<SubjectViewProps> = ({
  subject,
  programs,
  completedIds,
  bookmarkedIds,
  onToggleComplete,
  onToggleBookmark,
  onViewProgram,
  onViewExplanation,
  onBackToDashboard
}) => {
  const availableTechs = useMemo(() => {
    const set = new Set<string>();
    programs.forEach(p => p.technologies.forEach(t => set.add(t)));
    return ['all', ...Array.from(set)];
  }, [programs]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending' | 'bookmarked'>('all');
  const [techFilter, setTechFilter] = useState<string>('all');

  // Filtered programs
  const filteredPrograms = useMemo(() => {
    return programs.filter(prog => {
      // Search matching
      const matchesSearch = 
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.programNumber.toString() === searchQuery.trim() ||
        prog.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Status matching
      const isCompleted = completedIds.includes(prog.id);
      const isBookmarked = bookmarkedIds.includes(prog.id);
      const matchesStatus = 
        statusFilter === 'all' ||
        (statusFilter === 'completed' && isCompleted) ||
        (statusFilter === 'pending' && !isCompleted) ||
        (statusFilter === 'bookmarked' && isBookmarked);

      // Tech matching
      const matchesTech = 
        techFilter === 'all' || 
        prog.technologies.includes(techFilter as any);

      return matchesSearch && matchesStatus && matchesTech;
    });
  }, [programs, searchQuery, statusFilter, techFilter, completedIds, bookmarkedIds]);

  const completedCount = completedIds.filter(id => programs.some(p => p.id === id)).length;
  const progressPercent = Math.round((completedCount / programs.length) * 100);

  // Next pending program
  const nextPendingProgram = programs.find(p => !completedIds.includes(p.id)) || programs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="relative z-10">
          <button
            onClick={onBackToDashboard}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wider">
                  {subject.code}
                </span>
                <span className="text-xs text-slate-500">
                  {subject.semester}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2">
                {subject.title}
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                {subject.subtitle || 'Explore the lab programs, study the code, and understand how each program works.'}
              </p>
            </div>

            {/* Preparation Statistics Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full lg:w-80 shrink-0">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-1.5">
                <span>Lab Preparation Progress</span>
                <span className="font-mono font-bold text-slate-900">{completedCount} / {programs.length} Completed</span>
              </div>
              
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                <span className="font-semibold text-blue-700">{progressPercent}% Ready</span>
                <span>{programs.length - completedCount} programs remaining</span>
              </div>

              {nextPendingProgram && (
                <button
                  onClick={() => onViewExplanation(nextPendingProgram.id)}
                  className="w-full mt-3 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Resume Program {nextPendingProgram.programNumber}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Program 10 Reserved Notice (Only for Major 12 where syllabus has 9 verified programs) */}
      {subject.id === 'major-12' && (
        <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Curriculum Accuracy Note:</strong> The attached college practical manual PDF contains exactly <strong>9 verified lab programs</strong>. Program slot 10 is reserved in our schema and ready to be automatically populated as soon as the tenth practical question is provided.
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programs by title, number, keyword or tag..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              statusFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({programs.length})
          </button>
          <button
            onClick={() => setStatusFilter('completed')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              statusFilter === 'completed' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Completed ({completedCount})
          </button>
          <button
            onClick={() => setStatusFilter('pending')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              statusFilter === 'pending' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pending ({programs.length - completedCount})
          </button>
          <button
            onClick={() => setStatusFilter('bookmarked')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${
              statusFilter === 'bookmarked' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bookmarked ({bookmarkedIds.length})
          </button>
        </div>

        {/* Technology Filter */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs overflow-x-auto">
          {availableTechs.map(t => (
            <button
              key={t}
              onClick={() => setTechFilter(t)}
              className={`px-2.5 py-1.5 rounded-md font-medium transition-all whitespace-nowrap ${
                techFilter === t ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t === 'all' ? 'All Tech' : t}
            </button>
          ))}
        </div>
      </div>

      {/* Program Cards Grid */}
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map(program => (
            <ProgramCard
              key={program.id}
              program={program}
              isCompleted={completedIds.includes(program.id)}
              isBookmarked={bookmarkedIds.includes(program.id)}
              onToggleComplete={onToggleComplete}
              onToggleBookmark={onToggleBookmark}
              onViewProgram={onViewProgram}
              onViewExplanation={onViewExplanation}
            />
          ))}

          {/* Reserved Slot 10 Card (only for Major 12 where syllabus has 9 verified programs) */}
          {subject.id === 'major-12' && (
            <div className="border border-dashed border-slate-300 rounded-xl p-6 bg-slate-50/50 flex flex-col justify-between text-slate-500">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-600">
                    P10
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Reserved Syllabus Slot</span>
                </div>
                <h3 className="text-base font-bold text-slate-700">
                  10. Supplementary Lab Program
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Reserved placeholder slot adhering to the 10-program syllabus architecture. Ready to be populated when additional practical manual sheets are attached.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 text-xs text-slate-400">
                Awaiting practical source text
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-xl p-8">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No matching lab programs found</h3>
          <p className="text-xs text-slate-500 mt-1">Try adjusting your search keywords or resetting filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('all');
              setTechFilter('all');
            }}
            className="mt-4 px-4 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
