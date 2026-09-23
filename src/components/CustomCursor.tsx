import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Accessibility & Touch Detection: strictly desktop pointer: fine & no reduced motion
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Lightweight element inspection without full reflows
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'explore') {
          setLabel('EXPLORE');
          setIsInteractive(true);
        } else if (type === 'view') {
          setLabel('VIEW');
          setIsInteractive(true);
        } else {
          setLabel(null);
          setIsInteractive(true);
        }
      } else {
        const isClickable = Boolean(
          target.closest('button, a, [role="button"], input, select, textarea')
        );
        setLabel(null);
        setIsInteractive(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // 2. High-performance RAF with zero perceptible lag (0.85 snap factor or near 1:1)
    const updatePosition = () => {
      // Immediate responsive follow with subtle micro-smoothing (no elastic/spring lag)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.85;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.85;

      const x = currentPos.current.x;
      const y = currentPos.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${x + 14}px, ${y + 14}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updatePosition);
    };

    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Subtle, minimal precision micro-dot (4px) — follows mouse immediately */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 pointer-events-none will-change-transform"
      >
        <div
          className={`w-2 h-2 rounded-full bg-[var(--accent)] transition-all duration-150 ease-out ${
            label
              ? 'opacity-0 scale-50'
              : isInteractive
              ? 'opacity-80 scale-125'
              : 'opacity-40 scale-100'
          }`}
        />
      </div>

      {/* Tiny editorial badge for project/template previews: VIEW / EXPLORE */}
      <div
        ref={labelRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`transition-all duration-150 ease-out origin-top-left ${
            label
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <span className="inline-flex items-center px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.18em] font-semibold text-[var(--accent)] bg-[#090A0E]/95 border border-[var(--accent)]/40 rounded-[2px] shadow-sm backdrop-blur-sm">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};
