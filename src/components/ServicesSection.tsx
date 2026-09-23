import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface ServicesSectionProps {
  onSelectServiceForProject: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForProject,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services-section" className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-3">
                <span>STUDIO DISCIPLINES</span>
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-slate-500">EXPERTISE</span>
              </div>
              <h2 className="type-h2 font-bold font-display text-white tracking-tight">
                We build what brands are missing.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-body">
              We do not build generic websites. Every engagement is a custom digital flagship engineered around your market positioning and commercial ambitions.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Studio Discipline Breakdown (5 cols list, 7 cols active flagship deep-dive) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Numbered Discipline Index (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-[11px] font-body text-slate-500 uppercase tracking-[0.14em] pb-3 mb-2 border-b border-white/[0.08]">
              Select Discipline
            </div>

            {SERVICES_DATA.map((service: ServiceItem, idx: number) => {
              const isActive = activeServiceId === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 sm:p-5 transition-all duration-300 border-l-2 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'border-[var(--accent)] bg-[#111319] text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#111319]/50'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-slate-500 group-hover:text-[var(--accent)] transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold font-display group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-xs text-slate-500 font-body mt-0.5">
                        {service.category} · {service.timeline}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive
                        ? 'text-[var(--accent)] translate-x-1 opacity-100'
                        : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Discipline Deep Dive (7 cols) — Editorial, Unboxed, Generous Spacing */}
          <div className="lg:col-span-7 bg-[#111319] border border-white/[0.10] p-8 sm:p-10 rounded-sm">
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
              <div>
                <span className="text-[10px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold">
                  DISCIPLINE OVERVIEW
                </span>
                <h4 className="type-h3 font-bold font-display text-white mt-1">
                  {activeService.title}
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400 border border-white/10 px-2.5 py-1">
                {activeService.timeline}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-body">
              {activeService.description}
            </p>

            {/* Scope / Deliverables List */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                Architectural Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-[var(--accent)] font-mono text-sm leading-none mt-0.5">
                      —
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For & Action Footnote */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  Target Positioning
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {activeService.idealFor}
                </p>
              </div>

              <div>
                <MagneticButton
                  strength={0.2}
                  maxOffset={5}
                  onClick={() => onSelectServiceForProject(activeService.title)}
                  className="btn-editorial inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-[#090A0E] bg-[var(--accent)] rounded hover:brightness-105 transition-all whitespace-nowrap"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
