import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onExploreTemplates: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreTemplates,
  onStartProject,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#090A0E] border-b border-white/[0.08]"
      aria-label="HAVEN Studio Hero"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Subtle Archival Studio Header Bar */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 10px, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-white/[0.08] text-[11px] font-body tracking-[0.14em] text-slate-400 uppercase"
        >
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent)] font-semibold">HAVEN STUDIO</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span>BESPOKE DIGITAL EXPERIENCES</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>ARCHITECTURAL CODE & ART DIRECTION</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span>2026 ARCHIVE</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Main Editorial Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <h1
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 120ms',
              }}
              className="type-h1 font-bold text-white max-w-4xl text-balance mb-8"
            >
              We craft digital flagships for brands that refuse the ordinary.
            </h1>

            <p
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 220ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 220ms',
              }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-10 font-body"
            >
              HAVEN is an independent digital experience studio. We partner with ambitious organizations, gastronomy icons, gaming brands, and industry leaders to design and engineer bespoke web presences with uncompromising craft.
            </p>

            {/* Restrained CTAs: Single Primary Button + Editorial Text Link */}
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 320ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 320ms',
              }}
              className="flex flex-wrap items-center gap-6 mb-16"
            >
              <MagneticButton
                strength={0.2}
                maxOffset={5}
                onClick={onStartProject}
                className="btn-editorial inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold font-body text-[#090A0E] bg-[var(--accent)] rounded hover:brightness-105 transition-all shadow-sm"
              >
                <span>Initiate a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>

              <button
                onClick={onExploreTemplates}
                className="group inline-flex items-center gap-2 text-xs font-medium font-body text-slate-300 hover:text-white transition-colors cursor-pointer py-2"
              >
                <span>Explore Selected Flagships</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[var(--accent)]" />
              </button>
            </div>

            {/* Studio Principles Adjacency */}
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms',
              }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]"
            >
              <div>
                <div className="text-xl font-bold font-display text-white">0%</div>
                <div className="text-xs text-slate-400 mt-1">Generic Templates</div>
              </div>
              <div>
                <div className="text-xl font-bold font-display text-white">&lt; 80ms</div>
                <div className="text-xs text-slate-400 mt-1">Core Web Vitals</div>
              </div>
              <div>
                <div className="text-xl font-bold font-display text-white">100%</div>
                <div className="text-xs text-slate-400 mt-1">Client Code Ownership</div>
              </div>
            </div>
          </div>

          {/* Right Column: The HAVEN Emblem as Authentic Brand Identity (5 cols) */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(15px, 0, 0)',
              transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 200ms',
            }}
            className="lg:col-span-5"
          >
            {/* Architectural System Specification */}
            <div className="border border-white/[0.12] bg-[#111319] p-6 rounded-sm">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-white font-medium uppercase tracking-wider">HAVEN ARCHITECTURE</span>
                </div>
                <span>REF. SPEC-2026</span>
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">FRAME BUDGET</span>
                  <span className="text-white font-medium">60 FPS HARDWARE ACCEL.</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">TYPOGRAPHIC SCALE</span>
                  <span className="text-white font-medium">INSTRUMENT SANS & INTER</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">CODE ARCHITECTURE</span>
                  <span className="text-white font-medium">ZERO-BOILERPLATE BESPOKE</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/[0.05]">
                  <span className="text-slate-400">CLIENT SOVEREIGNTY</span>
                  <span className="text-[var(--accent)] font-medium">100% ASSET OWNERSHIP</span>
                </div>
              </div>

              <p className="mt-4 pt-3 border-t border-white/[0.08] text-xs text-slate-400 leading-relaxed">
                Every digital flagship is engineered from first principles with bespoke art direction, responsive precision, and zero bloated third-party frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
