/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { LAB_PROGRAMS } from './data/labPrograms';
import { PHP_LAB_PROGRAMS } from './data/phpPrograms';
import { DATA_SCIENCE_LAB_PROGRAMS } from './data/dataSciencePrograms';
import { PYTHON_APP_DEV_LAB_PROGRAMS } from './data/pythonAppDevPrograms';
import { MAJOR_SUBJECTS } from './data/subjects';
import { ProgramData } from './types';
import { useLabStorage } from './hooks/useLabStorage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeDashboard } from './components/HomeDashboard';
import { SubjectView } from './components/SubjectView';
import { ProgramDetailView } from './components/ProgramDetailView';
import { ExplanationView } from './components/ExplanationView';
import { ProgressView } from './components/ProgressView';
import { BookmarksView } from './components/BookmarksView';
import { QuickSearchModal } from './components/QuickSearchModal';

type ActiveView = 'dashboard' | 'subject' | 'program' | 'explanation' | 'progress' | 'bookmarks';

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('major-12');
  const [selectedProgramId, setSelectedProgramId] = useState<number>(1);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const {
    completedIds,
    bookmarkedIds,
    recentlyViewedIds,
    toggleComplete,
    toggleBookmark,
    addRecentlyViewed,
    resetAllProgress,
  } = useLabStorage();

  // Combine Major 12, Major 13, Major 14, and Major 15 programs
  const allPrograms = useMemo<ProgramData[]>(() => {
    return [
      ...LAB_PROGRAMS, 
      ...PHP_LAB_PROGRAMS, 
      ...DATA_SCIENCE_LAB_PROGRAMS, 
      ...PYTHON_APP_DEV_LAB_PROGRAMS
    ];
  }, []);

  const currentSubject = useMemo(() => {
    return MAJOR_SUBJECTS.find(s => s.id === selectedSubjectId) || MAJOR_SUBJECTS[0];
  }, [selectedSubjectId]);

  const currentSubjectPrograms = useMemo(() => {
    return allPrograms.filter(p => (p.subjectId || 'major-12') === selectedSubjectId);
  }, [allPrograms, selectedSubjectId]);

  const activeProgram = useMemo(() => {
    return allPrograms.find(p => p.id === selectedProgramId) || allPrograms[0];
  }, [allPrograms, selectedProgramId]);

  const activeProgramSubjectPrograms = useMemo(() => {
    const subId = activeProgram.subjectId || 'major-12';
    return allPrograms.filter(p => (p.subjectId || 'major-12') === subId);
  }, [allPrograms, activeProgram]);

  const handleOpenProgram = (id: number) => {
    const prog = allPrograms.find(p => p.id === id);
    if (prog?.subjectId) {
      setSelectedSubjectId(prog.subjectId);
    }
    setSelectedProgramId(id);
    addRecentlyViewed(id);
    setCurrentView('program');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenExplanation = (id: number) => {
    const prog = allPrograms.find(p => p.id === id);
    if (prog?.subjectId) {
      setSelectedSubjectId(prog.subjectId);
    }
    setSelectedProgramId(id);
    addRecentlyViewed(id);
    setCurrentView('explanation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFromSearch = (id: number, view: 'program' | 'explanation') => {
    const prog = allPrograms.find(p => p.id === id);
    if (prog?.subjectId) {
      setSelectedSubjectId(prog.subjectId);
    }
    setSelectedProgramId(id);
    addRecentlyViewed(id);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setCurrentView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSubjectCompletedCount = (subjectId: string) => {
    return completedIds.filter(cId => 
      allPrograms.some(p => p.id === cId && (p.subjectId || 'major-12') === subjectId)
    ).length;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Header with Top Bar Contract */}
      <Header
        currentView={currentView}
        completedCount={completedIds.filter(id => allPrograms.some(p => p.id === id)).length}
        totalCount={allPrograms.length}
        bookmarkedCount={bookmarkedIds.filter(id => allPrograms.some(p => p.id === id)).length}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Render Area */}
      <main className="flex-1">
        {currentView === 'dashboard' && (
          <HomeDashboard
            subjects={MAJOR_SUBJECTS}
            programs={allPrograms}
            completedIds={completedIds}
            bookmarkedIds={bookmarkedIds}
            recentlyViewedIds={recentlyViewedIds}
            onExploreSubject={handleExploreSubject}
            getSubjectCompletedCount={getSubjectCompletedCount}
            onViewProgram={handleOpenProgram}
            onViewExplanation={handleOpenExplanation}
          />
        )}

        {currentView === 'subject' && (
          <SubjectView
            subject={currentSubject}
            programs={currentSubjectPrograms}
            completedIds={completedIds}
            bookmarkedIds={bookmarkedIds}
            onToggleComplete={toggleComplete}
            onToggleBookmark={toggleBookmark}
            onViewProgram={handleOpenProgram}
            onViewExplanation={handleOpenExplanation}
            onBackToDashboard={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'program' && (
          <ProgramDetailView
            program={activeProgram}
            isCompleted={completedIds.includes(activeProgram.id)}
            isBookmarked={bookmarkedIds.includes(activeProgram.id)}
            onToggleComplete={toggleComplete}
            onToggleBookmark={toggleBookmark}
            onViewExplanation={() => handleOpenExplanation(activeProgram.id)}
            onBackToSubject={() => setCurrentView('subject')}
          />
        )}

        {currentView === 'explanation' && (
          <ExplanationView
            program={activeProgram}
            allPrograms={activeProgramSubjectPrograms}
            isCompleted={completedIds.includes(activeProgram.id)}
            isBookmarked={bookmarkedIds.includes(activeProgram.id)}
            onToggleComplete={toggleComplete}
            onToggleBookmark={toggleBookmark}
            onSelectProgram={(id) => handleOpenExplanation(id)}
            onBackToSubject={() => setCurrentView('subject')}
            onViewProgram={() => handleOpenProgram(activeProgram.id)}
          />
        )}

        {currentView === 'progress' && (
          <ProgressView
            programs={allPrograms}
            completedIds={completedIds}
            onToggleComplete={toggleComplete}
            onViewExplanation={handleOpenExplanation}
            onResetProgress={resetAllProgress}
            onBackToDashboard={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'bookmarks' && (
          <BookmarksView
            programs={allPrograms}
            bookmarkedIds={bookmarkedIds}
            completedIds={completedIds}
            onToggleComplete={toggleComplete}
            onToggleBookmark={toggleBookmark}
            onViewProgram={handleOpenProgram}
            onViewExplanation={handleOpenExplanation}
            onBackToDashboard={() => setCurrentView('dashboard')}
          />
        )}
      </main>

      {/* Global Quick Search Modal (Cmd+K / Ctrl+K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        programs={allPrograms}
        onSelectProgram={handleSelectFromSearch}
      />

      {/* Quiet, clean Footer */}
      <Footer
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
