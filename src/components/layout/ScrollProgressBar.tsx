import { useScrollProgress, useReducedMotion } from '@/hooks';

/**
 * Thin gradient progress bar fixed at the very top of the viewport.
 * Tracks page scroll progress in real time.
 */
export function ScrollProgressBar() {
  const progress = useScrollProgress();
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-primary/80 to-secondary"
        style={{
          width: `${progress * 100}%`,
          transition: reducedMotion ? 'none' : 'width 80ms linear',
          transformOrigin: 'left',
          boxShadow: progress > 0.01 ? '0 0 8px rgba(249,115,22,0.6)' : 'none',
        }}
      />
    </div>
  );
}
