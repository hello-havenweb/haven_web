import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Introduction: React.FC = () => {
  const principles = [
    {
      index: '01',
      title: 'Architectural Restraint',
      summary: 'Deliberate whitespace, controlled typographic scale, and intentional pacing that guides visitors toward commercial action without visual clutter.',
    },
    {
      index: '02',
      title: 'Engineered Performance',
      summary: 'Zero bloated site-builder scripts. Every line is written in modern TypeScript and CSS for instant loading, sub-80ms interactions, and flawless Core Web Vitals.',
    },
    {
      index: '03',
      title: 'Domain-Native Art Direction',
      summary: 'Whether crafting for a Michelin-starred dining cellar, an esports franchise, or an enterprise SaaS platform, the aesthetic language is conceived from zero for your audience.',
    },
    {
      index: '04',
      title: 'Direct Senior Craft',
      summary: 'You collaborate directly with the senior design engineer building your flagship. No account managers, no ticket delays, and zero algorithmic templates.',
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Grand Editorial Manifesto Statement */}
        <ScrollReveal direction="up" distance={20} className="mb-20">
          <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-6">
            <span>STUDIO MANIFESTO</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-slate-500">PHILOSOPHY</span>
          </div>

          <p className="type-h2 font-bold font-display text-white max-w-4xl text-balance">
            "The modern web has grown monotonous. We design the departure from boilerplate templates."
          </p>
        </ScrollReveal>

        {/* Minimal Unboxed Editorial Principles Grid — Hairline Rules & Whitespace, No Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-12 border-t border-white/[0.08]">
          {principles.map((p, idx) => (
            <ScrollReveal
              key={p.index}
              direction="up"
              distance={20}
              delayMs={idx * 70}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[var(--accent)] mb-3 font-semibold">
                  [{p.index}]
                </div>
                <h3 className="text-lg sm:text-xl font-semibold font-display text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-body">
                  {p.summary}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
