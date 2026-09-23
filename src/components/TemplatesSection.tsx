import React, { useState } from 'react';
import { TEMPLATES_DATA, TemplateItem } from '../data/templatesData';
import { Eye, ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface TemplatesSectionProps {
  onViewWebsite: (template: TemplateItem) => void;
  onGetWebsite: (templateName: string) => void;
}

export const TemplatesSection: React.FC<TemplatesSectionProps> = ({
  onViewWebsite,
  onGetWebsite,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [marqueeTemplateId, setMarqueeTemplateId] = useState<string>('nexus');

  const marqueeTemplate =
    TEMPLATES_DATA.find((t) => t.id === marqueeTemplateId) || TEMPLATES_DATA[0];

  const secondaryTemplates = TEMPLATES_DATA.filter((t) => t.id !== marqueeTemplate.id);

  const categories = ['All', 'Business', 'Restaurant', 'Creative', 'Gaming', 'Agency', 'Portfolio'];

  const filteredSecondary =
    activeCategory === 'All'
      ? secondaryTemplates
      : secondaryTemplates.filter((t) => t.category === activeCategory);

  return (
    <section id="templates-section" className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-3">
                <span>PORTFOLIO & FLAGSHIPS</span>
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-slate-500">SELECTED RELEASES</span>
              </div>
              <h2 className="type-h2 font-bold font-display text-white tracking-tight">
                Designed to be remembered.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-body">
              Curated digital flagships ready for bespoke customization. Each archetype is engineered with domain-specific architecture and zero boilerplate code.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Marquee Dominant Flagship Showcase */}
        <ScrollReveal direction="up" distance={25} className="mb-20">
          <div className="border border-white/[0.12] bg-[#111319] p-6 sm:p-8 rounded-sm">
            {/* Minimal Browser Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-3 text-slate-500 hidden sm:inline font-mono">
                  haven://flagship/{marqueeTemplate.id}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-body uppercase tracking-[0.12em]">
                <span className="text-[var(--accent)] font-semibold">MARQUEE RELEASE</span>
                <span aria-hidden="true">·</span>
                <span>{marqueeTemplate.palette}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Marquee Preview Image (7 cols) */}
              <div
                className="lg:col-span-7 relative group cursor-pointer overflow-hidden border border-white/[0.08] bg-[#0A0C10]"
                onClick={() => onViewWebsite(marqueeTemplate)}
                data-cursor="explore"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={marqueeTemplate.image}
                    alt={`${marqueeTemplate.name} Flagship Preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.04] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-[#090A0E]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="btn-editorial inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold font-body text-white bg-[#090A0E]/90 border border-white/20 rounded-sm">
                    <Eye className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Launch Interactive Simulator</span>
                  </span>
                </div>
              </div>

              {/* Marquee Editorial Detail (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-3xl sm:text-4xl font-bold font-display text-white">
                      {marqueeTemplate.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      [{marqueeTemplate.category}]
                    </span>
                  </div>

                  <div className="text-xs font-medium font-body text-slate-300 mb-4">
                    {marqueeTemplate.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-body">
                    {marqueeTemplate.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/[0.08]">
                    <div className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
                      Flagship Highlights
                    </div>
                    {marqueeTemplate.mockContent.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-[var(--accent)] font-mono text-sm leading-none mt-0.5">—</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08]">
                  <MagneticButton
                    strength={0.2}
                    maxOffset={5}
                    onClick={() => onViewWebsite(marqueeTemplate)}
                    className="btn-editorial inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-sm"
                  >
                    <Eye className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Explore Demo</span>
                  </MagneticButton>

                  <button
                    onClick={() => onGetWebsite(marqueeTemplate.name)}
                    className="btn-editorial inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-[#090A0E] bg-[var(--accent)] rounded-sm hover:brightness-105 transition-all cursor-pointer"
                  >
                    <span>Adopt This Flagship</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Curated Secondary Flagships with Asymmetric Composition */}
        <div>
          {/* Unboxed Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-white/[0.08]">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-widest">
              Additional Flagships Archive
            </div>

            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto text-xs font-mono">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pb-1 transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'text-[var(--accent)] border-b border-[var(--accent)] font-semibold'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Varied Project Grid (Asymmetric 2-column & horizontal layouts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSecondary.map((template, idx) => (
              <ScrollReveal
                key={template.id}
                direction="up"
                distance={20}
                delayMs={idx * 60}
                className="group flex flex-col justify-between border border-white/[0.08] hover:border-white/[0.18] bg-[#111319] p-5 rounded-sm transition-all duration-300"
              >
                <div>
                  {/* Image container */}
                  <div
                    onClick={() => onViewWebsite(template)}
                    className="aspect-[16/10] overflow-hidden bg-[#0A0C10] mb-4 cursor-pointer relative"
                    data-cursor="explore"
                  >
                    <img
                      src={template.image}
                      alt={template.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-[1.04] group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 text-[10px] font-mono uppercase bg-[#090A0E]/80 px-2 py-0.5 text-slate-300 border border-white/10">
                      {template.category}
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="text-xl font-bold font-display text-white group-hover:text-[var(--accent)] transition-colors">
                      {template.name}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-500">
                      {template.palette}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-medium mb-2">
                    {template.tagline}
                  </p>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {template.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <button
                    onClick={() => onViewWebsite(template)}
                    className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                  >
                    <Eye className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>View Flagship</span>
                  </button>

                  <button
                    onClick={() => onGetWebsite(template.name)}
                    className="text-[var(--accent)] hover:underline flex items-center gap-1 font-semibold cursor-pointer py-1"
                  >
                    <span>Adopt Foundation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
