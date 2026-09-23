import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Palette } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  currentTheme,
  onThemeChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteDropdownOpen, setPaletteDropdownOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'services', label: 'Disciplines' },
    { id: 'templates', label: 'Flagships' },
    { id: 'process', label: 'Methodology' },
    { id: 'pricing', label: 'Engagements' },
    { id: 'about', label: 'Studio' },
    { id: 'contact', label: 'Inquire' },
  ];

  const themeOptions = [
    { id: 'bronze', label: 'Studio Bronze', color: '#D4A359' },
    { id: 'emerald', label: 'Emerald Jade', color: '#2EB875' },
    { id: 'cyan', label: 'Electric Cyan', color: '#2BA4D9' },
    { id: 'silver', label: 'Titanium Silver', color: '#D8DCE3' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'bg-[#090A0E]/94 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Zone 1: Distinctive Architectural Wordmark */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(-15px, 0, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-baseline gap-2.5 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] bg-transparent border-none p-0 cursor-pointer"
            aria-label="HAVEN Studio Home"
          >
            <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-200">
              HAVEN
            </span>
            <span className="text-[10px] font-body tracking-[0.15em] uppercase text-slate-500 hidden sm:inline">
              / STUDIO
            </span>
          </button>
        </div>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium font-body text-slate-300">
          {navLinks.map((link, index) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(0, -6px, 0)',
                  transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
                    80 + index * 40
                  }ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
                    80 + index * 40
                  }ms`,
                }}
                className={`relative py-1 transition-colors duration-200 whitespace-nowrap cursor-pointer font-body ${
                  isActive
                    ? 'text-[var(--accent)] font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[var(--accent)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Palette Switcher + Architectural CTA */}
        <div
          className="flex items-center gap-3.5"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translate3d(0, 0, 0)' : 'translate3d(15px, 0, 0)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 300ms',
          }}
        >
          {/* Subtle Tone Switcher */}
          <div className="relative">
            <button
              onClick={() => setPaletteDropdownOpen(!paletteDropdownOpen)}
              className="p-1.5 text-slate-400 hover:text-white rounded border border-white/10 hover:border-white/20 transition-colors flex items-center gap-1.5 text-[11px] font-mono cursor-pointer"
              title="Select Studio Hue"
              aria-label="Select accent theme"
            >
              <Palette className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="hidden sm:inline uppercase text-[10px] text-slate-400">Tone</span>
            </button>

            {paletteDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-44 bg-[#111319] border border-white/15 rounded p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setPaletteDropdownOpen(false)}
              >
                <div className="px-2 py-1 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Studio Palette
                </div>
                {themeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      onThemeChange(opt.id);
                      setPaletteDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded transition-colors text-left cursor-pointer ${
                      currentTheme === opt.id
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: opt.color }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Action Button — Architectural, Proportional, No Giant Pill */}
          <MagneticButton
            strength={0.2}
            maxOffset={5}
            onClick={() => handleLinkClick('contact')}
            className="btn-editorial hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#090A0E] bg-[var(--accent)] rounded hover:brightness-105 transition-all whitespace-nowrap shadow-sm group"
          >
            <span>Initiate Brief</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-300 hover:text-white rounded border border-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bg-[#090A0E]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 px-2 text-sm rounded transition-colors cursor-pointer ${
                  currentView === link.id
                    ? 'text-[var(--accent)] font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="text-[11px] font-mono uppercase text-slate-400">Palette Tone:</div>
              <div className="flex items-center gap-2">
                {themeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => onThemeChange(opt.id)}
                    className={`w-6 h-6 rounded-full border transition-transform cursor-pointer ${
                      currentTheme === opt.id
                        ? 'border-white scale-110'
                        : 'border-transparent opacity-60'
                    }`}
                    style={{ backgroundColor: opt.color }}
                    title={opt.label}
                  />
                ))}
              </div>

              <button
                onClick={() => handleLinkClick('contact')}
                className="mt-3 w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-[#090A0E] bg-[var(--accent)] rounded cursor-pointer"
              >
                <span>Initiate Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
