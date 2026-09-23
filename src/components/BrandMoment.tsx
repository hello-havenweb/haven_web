import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface BrandMomentProps {
  onStartProject: () => void;
}

export const BrandMoment: React.FC<BrandMomentProps> = ({ onStartProject }) => {
  return (
    <section className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal direction="up" distance={20}>
              <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-4">
                <span>ARCHITECTURAL PROMISE</span>
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-slate-500">HAVEN STANDARD</span>
              </div>
              <h2 className="type-h1 font-bold font-display text-white text-balance">
                Your vision.<br />
                Engineered with conviction.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <ScrollReveal direction="up" distance={20} delayMs={120}>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6 lg:text-right font-body">
                The difference between a website people bounce from and an experience they remember is relentless craft. We do not stop until your digital flagship feels extraordinary.
              </p>
              <MagneticButton
                strength={0.2}
                maxOffset={5}
                onClick={onStartProject}
                className="btn-editorial inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold font-body text-[#090A0E] bg-[var(--accent)] rounded hover:brightness-105 transition-all"
              >
                <span>Initiate Your Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
