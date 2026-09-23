import React, { useEffect, useState } from 'react';

interface PageIntroLoaderProps {
  onComplete: () => void;
}

export const PageIntroLoader: React.FC<PageIntroLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'intro' | 'wipe' | 'done'>('intro');

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      setPhase('done');
      return;
    }

    // Phase 1: Logo animation (750ms)
    const t1 = setTimeout(() => {
      setPhase('wipe');
    }, 750);

    // Phase 2: Wipe transition ends (1200ms total)
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 1250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] pointer-events-none flex flex-col items-center justify-center bg-[#07090D] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === 'wipe' ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden="true"
    >
      {/* Central Brand Lockup */}
      <div className="relative flex flex-col items-center">
        {/* Subtle Geometric Emblem */}
        <div className="w-12 h-12 rounded-xl bg-[#121622] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] shadow-2xl mb-4 animate-in fade-in zoom-in-90 duration-500">
          <svg
            className="w-6 h-6 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 20 8 20 18 12 22 4 18 4 8 12 2" />
            <polyline points="12 8 12 16" />
            <polyline points="8 12 16 12" />
          </svg>
        </div>

        {/* Wordmark with Expanding Tracking */}
        <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-[0.25em] text-white transition-all duration-700 ease-out">
          HAVEN
        </h1>

        <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400 mt-2 opacity-80">
          Digital Experiences
        </div>

        {/* Hairline Loading Bar */}
        <div className="w-36 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-[var(--accent)] rounded-full w-full animate-in slide-in-from-left duration-700 ease-out" />
        </div>
      </div>
    </div>
  );
};
