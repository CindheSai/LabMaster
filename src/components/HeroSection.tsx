import React from 'react';
import { BookOpen, ArrowRight, CheckCircle2, Play, Award, Terminal } from 'lucide-react';

interface HeroSectionProps {
  completedCount: number;
  totalCount: number;
  onExploreSubjects: () => void;
  onContinueLearning: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  completedCount,
  totalCount,
  onExploreSubjects,
  onContinueLearning,
}) => {
  const percent = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="relative overflow-hidden bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 shadow-xs">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>B.Sc. Computer Science Practical Examination Guide</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Your Lab Preparation, Simplified.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          Explore programs, understand every line of code, and prepare confidently for your practical examinations.
        </p>

        {/* CTAs and Progress indicator */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={onExploreSubjects}
            className="flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all active:scale-[0.98]"
          >
            <span>Explore Subjects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContinueLearning}
            className="flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all"
          >
            <Play className="w-4 h-4 text-blue-600" />
            <span>Continue Learning</span>
          </button>
        </div>

        {/* Mini Preparation Progress Indicator */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>
              <strong className="text-slate-900 font-mono">{completedCount}/{totalCount}</strong> Programs Mastered
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-300">·</span>
            <Terminal className="w-4 h-4 text-blue-600" />
            <span>Exact Practical Manual Source Code</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-300">·</span>
            <Award className="w-4 h-4 text-indigo-600" />
            <span>Verified Viva Examination Q&amp;A</span>
          </div>
        </div>
      </div>
    </section>
  );
};
