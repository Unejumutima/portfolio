import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks';

/**
 * Subtle radial gradient spotlight that follows the mouse cursor.
 * Desktop-only. Very low opacity — purely atmospheric.
 * Uses RAF for smooth updates without React re-renders.
 */
export function MouseSpotlight() {
  const reducedMotion = useReducedMotion();
  const spotRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const pos = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });

  useEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.07);
      current.current.y = lerp(current.current.y, pos.current.y, 0.07);

      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(600px circle at ${current.current.x}px ${current.current.y}px, rgba(249,115,22,0.045), transparent 55%)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] hidden lg:block"
    />
  );
}
