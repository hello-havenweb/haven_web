import React, { useState } from 'react';
import { Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface PricingSectionProps {
  onRequestQuote: (packageTitle: string, estimatedPrice?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestQuote }) => {
  // Interactive Scope Calculator State
  const [pageCount, setPageCount] = useState<number>(5);
  const [includeEcommerce, setIncludeEcommerce] = useState<boolean>(false);
  const [includeCms, setIncludeCms] = useState<boolean>(true);
  const [includeMotion, setIncludeMotion] = useState<boolean>(true);
  const [prioritySupport, setPrioritySupport] = useState<boolean>(false);

  // Calculate estimated studio quote placeholder
  const basePrice = 2800;
  const pageAddon = (pageCount - 1) * 180;
  const ecomAddon = includeEcommerce ? 1200 : 0;
  const cmsAddon = includeCms ? 450 : 0;
  const motionAddon = includeMotion ? 400 : 0;
  const supportAddon = prioritySupport ? 350 : 0;
  const calculatedTotal = basePrice + pageAddon + ecomAddon + cmsAddon + motionAddon + supportAddon;

  const rateLedger = [
    {
      code: 'TIER-01',
      title: 'Bespoke Digital Flagship',
      scope: 'Core Architectural Build',
      investment: '$2,800',
      timing: '2 – 3 Weeks',
      narrative: 'Complete original visual identity, bespoke frontend engineering, and deployment directly to your infrastructure.',
      deliverables: [
        '100% original visual identity & art direction',
        'Up to 6 custom responsive page templates',
        'Sub-80ms interaction latency & fluid motion',
        'Clean TypeScript codebase with 0% template bloat',
        'Full source code transfer & GitHub repository',
        '30-day post-launch warranty & tuning'
      ]
    },
    {
      code: 'TIER-02',
      title: 'Flagship + Edge Infrastructure',
      scope: 'Turnkey Performance Stack',
      investment: '$3,400',
      timing: '3 Weeks',
      narrative: 'Full bespoke build coupled with enterprise edge cloud deployment, global CDN, automated SSL, and uptime vigilance.',
      deliverables: [
        'Everything in Bespoke Digital Flagship',
        'Global edge CDN routing (< 60ms worldwide latency)',
        'Automated SSL certification & HTTPS configuration',
        'Daily automated cloud backups & rollback snapshots',
        'Continuous security monitoring & DDoS shielding',
        'Monthly software dependency & CMS maintenance'
      ],
      featured: true
    },
    {
      code: 'TIER-03',
      title: 'Digital Sovereignty & Governance',
      scope: 'All-Inclusive Studio Partnership',
      investment: '$4,200',
      timing: '4 Weeks',
      narrative: 'Total white-glove governance. Custom domain acquisition, DNS orchestration, and ongoing monthly design engineering retainers.',
      deliverables: [
        'Everything in Flagship + Edge Infrastructure',
        'Annual domain registration & DNS management',
        'Google Workspace or custom email MX routing',
        'Quarterly Core Web Vitals audit & tuning',
        'Dedicated monthly design & content revisions',
        'Direct communication channel with lead engineer'
      ]
    }
  ];

  return (
    <section id="pricing-section" className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-3">
                <span>ENGAGEMENT RATES</span>
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-slate-500">TRANSPARENT SCOPE</span>
              </div>
              <h2 className="type-h2 font-bold font-display text-white tracking-tight">
                Transparent engagements.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-body">
              No hidden subscriptions or generic SaaS markups. Transparent, fixed studio project fees with complete intellectual property ownership.
            </p>
          </div>
        </ScrollReveal>

        {/* Studio Rate Ledger (Architectural 3-Column Layout with Hairline Rules) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {rateLedger.map((tier, idx) => (
            <ScrollReveal
              key={tier.code}
              direction="up"
              distance={20}
              delayMs={idx * 80}
              className={`p-7 sm:p-8 border flex flex-col justify-between rounded-sm ${
                tier.featured
                  ? 'border-[var(--accent)] bg-[#111319]'
                  : 'border-white/[0.08] bg-[#0E1016]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08] text-[11px] font-mono">
                  <span className="text-slate-400">{tier.code}</span>
                  <span className="text-[var(--accent)]">{tier.timing}</span>
                </div>

                <div className="text-xs font-body uppercase tracking-[0.12em] text-slate-400 mb-1">
                  {tier.scope}
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-4">
                  {tier.title}
                </h3>

                <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-white/[0.08]">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-white">
                    {tier.investment}
                  </span>
                  <span className="text-xs font-mono text-slate-400">USD</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-body">
                  {tier.narrative}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                    Scope of Deliverables
                  </span>
                  {tier.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-[var(--accent)] font-mono text-sm leading-none mt-0.5">—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <MagneticButton
                  strength={0.2}
                  maxOffset={5}
                  onClick={() => onRequestQuote(tier.title, tier.investment)}
                  className={`btn-editorial w-full py-3 px-4 text-xs font-bold rounded-sm flex items-center justify-center gap-2 ${
                    tier.featured
                      ? 'bg-[var(--accent)] text-[#090A0E] hover:brightness-105'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                  }`}
                >
                  <span>Commission {tier.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bespoke Scope Worksheet Calculator */}
        <ScrollReveal direction="up" distance={20}>
          <div className="border border-white/[0.10] bg-[#111319] p-8 sm:p-10 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Controls (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-[11px] font-mono text-[var(--accent)] uppercase tracking-widest mb-2">
                  <span>SCOPE WORKSHEET</span>
                  <span aria-hidden="true" className="text-white/20">/</span>
                  <span className="text-slate-500">CUSTOM ESTIMATION</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                  Configure custom scope.
                </h4>
                <p className="text-xs text-slate-400 mb-6">
                  Select page requirements and technical capabilities to model your expected engagement investment.
                </p>

                <div className="space-y-6">
                  {/* Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                      <span>Unique Architectural Templates:</span>
                      <span className="text-[var(--accent)] font-bold">{pageCount} Templates</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={pageCount}
                      onChange={(e) => setPageCount(parseInt(e.target.value))}
                      className="w-full h-1 bg-white/20 appearance-none cursor-pointer accent-[var(--accent)]"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                      <span>1 Page (Single-Drop)</span>
                      <span>5 Pages (Studio Standard)</span>
                      <span>15 Pages (Enterprise Flagship)</span>
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <label className="flex items-center gap-3 p-3 bg-[#090A0E] border border-white/[0.08] cursor-pointer hover:border-white/20 transition-colors">
                      <input
                        type="checkbox"
                        checked={includeCms}
                        onChange={(e) => setIncludeCms(e.target.checked)}
                        className="w-4 h-4 accent-[var(--accent)]"
                      />
                      <span className="text-xs text-slate-300">Headless CMS Engine (+$450)</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-[#090A0E] border border-white/[0.08] cursor-pointer hover:border-white/20 transition-colors">
                      <input
                        type="checkbox"
                        checked={includeEcommerce}
                        onChange={(e) => setIncludeEcommerce(e.target.checked)}
                        className="w-4 h-4 accent-[var(--accent)]"
                      />
                      <span className="text-xs text-slate-300">Gastronomy / E-Com (+$1,200)</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-[#090A0E] border border-white/[0.08] cursor-pointer hover:border-white/20 transition-colors">
                      <input
                        type="checkbox"
                        checked={includeMotion}
                        onChange={(e) => setIncludeMotion(e.target.checked)}
                        className="w-4 h-4 accent-[var(--accent)]"
                      />
                      <span className="text-xs text-slate-300">Kinetic Motion (+$400)</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-[#090A0E] border border-white/[0.08] cursor-pointer hover:border-white/20 transition-colors">
                      <input
                        type="checkbox"
                        checked={prioritySupport}
                        onChange={(e) => setPrioritySupport(e.target.checked)}
                        className="w-4 h-4 accent-[var(--accent)]"
                      />
                      <span className="text-xs text-slate-300">Express Priority Sprint (+$350)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Summary (5 cols) */}
              <div className="lg:col-span-5 p-7 bg-[#090A0E] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                    Estimated Project Scope Total
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-extrabold font-display text-white">
                      ${calculatedTotal.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-slate-400">USD</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Estimated fee for {pageCount} page templates with selected architectural additions.
                  </p>
                </div>

                <div>
                  <MagneticButton
                    strength={0.2}
                    maxOffset={5}
                    onClick={() =>
                      onRequestQuote(
                        `Custom Scope (${pageCount} Pages, CMS: ${includeCms ? 'Yes' : 'No'}, Commerce: ${includeEcommerce ? 'Yes' : 'No'})`,
                        `$${calculatedTotal.toLocaleString()}`
                      )
                    }
                    className="btn-editorial w-full py-3 px-4 text-xs font-bold text-[#090A0E] bg-[var(--accent)] rounded-sm hover:brightness-105 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry with this Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
