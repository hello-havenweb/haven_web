import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'FOUNDATION',
      subtitle: 'Archetype Selection or Clean Slate',
      desc: 'Select from our architectural demonstration flagships as an accelerated baseline, or commission a completely bespoke identity engineered from zero.',
      deliverable: 'Scope of Work & Creative Direction Specification',
      timeframe: 'Day 1 – 3',
    },
    {
      num: '02',
      title: 'STRATEGY',
      subtitle: 'Information Architecture & Narrative',
      desc: 'We map user psychology, commercial conversion points, domain-specific requirements, and typography hierarchies before writing a single line of layout code.',
      deliverable: 'Content Map & System Architecture Wireframe',
      timeframe: 'Week 1',
    },
    {
      num: '03',
      title: 'ENGINEERING',
      subtitle: 'Component Craft & Kinetic Choreography',
      desc: 'Senior design-engineering in modern TypeScript and Tailwind CSS. You receive a private staging URL to test real-device responsiveness, micro-interactions, and load speeds.',
      deliverable: 'Interactive Private Staging Preview',
      timeframe: 'Week 2 – 3',
    },
    {
      num: '04',
      title: 'DEPLOYMENT',
      subtitle: 'Edge Routing & Intellectual Property Handover',
      desc: 'Zero-downtime production deployment with global CDN edge routing, full SSL certification, search engine indexing, and 100% intellectual property source code transfer.',
      deliverable: 'Production Deployment & Git Repository Transfer',
      timeframe: 'Launch Day',
    },
  ];

  return (
    <section id="process-section" className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-3">
                <span>METHODOLOGY</span>
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-slate-500">EXECUTION</span>
              </div>
              <h2 className="type-h2 font-bold font-display text-white tracking-tight">
                From proposition to production.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-body">
              Four disciplined milestones designed to eliminate guesswork, respect your schedule, and deliver an unforgettable web presence.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Architectural Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;

            return (
              <ScrollReveal
                key={step.num}
                direction="up"
                distance={20}
                delayMs={idx * 80}
              >
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-7 border transition-all duration-300 rounded-sm cursor-pointer flex flex-col justify-between h-full ${
                    isCurrent
                      ? 'border-[var(--accent)] bg-[#111319]'
                      : 'border-white/[0.08] bg-[#0E1016] hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08] text-xs font-mono">
                      <span className="text-[var(--accent)] font-semibold">
                        PHASE {step.num}
                      </span>
                      <span className="text-slate-500">{step.timeframe}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-white mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs text-slate-300 font-medium mb-3">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08]">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                      Deliverable Handover
                    </span>
                    <div className="text-xs text-slate-200 font-mono">
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
