import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const values = [
    {
      roman: 'I',
      title: 'Discipline & Discernment',
      desc: 'We reject transient design gimmicks and artificial visual noise in favor of timeless editorial typography and architectural balance.',
    },
    {
      roman: 'II',
      title: 'Engineering Rigor',
      desc: 'Design and code are one singular discipline. Every layout is handwritten in modern TypeScript with zero bloated site-builder overhead.',
    },
    {
      roman: 'III',
      title: 'Uncompromised Sovereignty',
      desc: 'You receive complete source code ownership and repository control upon launch. No recurring licensing fees or vendor lock-in.',
    },
    {
      roman: 'IV',
      title: 'Direct Senior Craft',
      desc: 'You converse and iterate directly with the senior engineer shaping your flagship. No junior intermediaries or ticket backlogs.',
    },
  ];

  return (
    <section id="about-section" className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-20">
          <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-3">
            <span>STUDIO HERITAGE</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-slate-500">OUR ORIGIN & ETHOS</span>
          </div>
          <h2 className="type-h2 font-bold font-display text-white tracking-tight max-w-4xl text-balance">
            Crafting digital architecture for the ambitious few.
          </h2>
        </ScrollReveal>

        {/* Asymmetrical Monograph Split (7 cols editorial text, 5 cols archival emblem plate) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            <p className="text-white font-medium text-lg sm:text-xl font-display leading-snug">
              HAVEN was founded on a simple realization: the contemporary web has traded aesthetic ambition for cookie-cutter uniformity.
            </p>
            <p className="text-slate-400 font-body">
              Thousands of ambitious brands settle for generic software templates that fail to communicate their true caliber. They struggle against bloated page-builders, sluggish mobile experiences, and impersonal agencies that treat web design like an assembly line.
            </p>
            <p className="text-slate-400 font-body">
              We operate differently. We are an intimate digital studio that treats every web project as a permanent architectural commission. We obsess over proportional rhythm, micro-interaction weight, typography hierarchy, and sub-millisecond response times.
            </p>
            <p className="text-slate-400 font-body">
              When a visitor lands on a HAVEN-crafted site, they immediately sense the difference: clarity, confidence, and uncompromising craftsmanship.
            </p>
          </div>

          <div className="lg:col-span-5 border border-white/[0.10] bg-[#111319] p-6 rounded-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-3 border-b border-white/[0.08]">
              <span className="text-[var(--accent)] font-semibold uppercase">STUDIO MANIFESTO</span>
              <span>EST. 2026</span>
            </div>
            <div className="space-y-4 my-4">
              <div>
                <span className="text-[11px] font-mono text-[var(--accent)] block">01 / STRUCTURAL PURITY</span>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  We strip away digital novelty and superfluous decoration. Every element exists to serve user intent and client equity.
                </p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[var(--accent)] block">02 / CRAFT DISCIPLINE</span>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Responsive precision and uncompromising craftsmanship across all viewport sizes and device classes.
                </p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[var(--accent)] block">03 / SOVEREIGN CODE</span>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  100% clean, unencumbered source code handed directly to clients upon deployment. Zero proprietary lock-in.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.08] text-[11px] font-mono text-slate-500 flex justify-between">
              <span>LOCATION</span>
              <span>NEW YORK · LONDON · GLOBAL</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars — Unboxed Editorial Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/[0.08]">
          {values.map((val) => (
            <div key={val.roman} className="space-y-2">
              <div className="text-xs font-mono text-[var(--accent)] font-semibold">
                [{val.roman}]
              </div>
              <h4 className="text-base font-bold font-display text-white">
                {val.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
