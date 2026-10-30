import { useState, useEffect } from 'react';

const STORAGE_KEY_COMPLETED = 'labmaster_completed_programs';
const STORAGE_KEY_BOOKMARKS = 'labmaster_bookmarked_programs';
const STORAGE_KEY_RECENT = 'labmaster_recent_programs';

export function useLabStorage() {
  const [completedIds, setCompletedIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_COMPLETED);
      const parsed = stored ? JSON.parse(stored) : null;
      return Array.isArray(parsed) ? parsed : [1];
    } catch {
      return [1];
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      const parsed = stored ? JSON.parse(stored) : null;
      return Array.isArray(parsed) ? parsed : [6, 7];
    } catch {
      return [6, 7];
    }
  });

  const [recentlyViewedIds, setRecentlyViewedIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_RECENT);
      const parsed = stored ? JSON.parse(stored) : null;
      return Array.isArray(parsed) ? parsed : [1, 5, 7];
    } catch {
      return [1, 5, 7];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedIds));
    } catch (e) {
      console.warn('Failed to save completed programs to localStorage', e);
    }
  }, [completedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(recentlyViewedIds));
    } catch (e) {
      console.warn('Failed to save recent to localStorage', e);
    }
  }, [recentlyViewedIds]);

  const toggleComplete = (id: number) => {
    setCompletedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addRecentlyViewed = (id: number) => {
    setRecentlyViewedIds(prev => {
      const filtered = prev.filter(item => item !== id);
      return [id, ...filtered].slice(0, 6);
    });
  };

  const resetAllProgress = () => {
    setCompletedIds([]);
    setBookmarkedIds([]);
    setRecentlyViewedIds([]);
  };

  return {
    completedIds,
    bookmarkedIds,
    recentlyViewedIds,
    toggleComplete,
    toggleBookmark,
    addRecentlyViewed,
    resetAllProgress,
  };
}
