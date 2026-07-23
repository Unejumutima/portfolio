import { useEffect, useRef, useState } from 'react';

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks the mouse position using requestAnimationFrame for smoothness.
 * Returns { x: 0, y: 0 } until the first mouse event fires.
 * Automatically cleans up on unmount.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const latest = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      latest.current = { x: e.clientX, y: e.clientY };

      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        setPosition({ ...latest.current });
        rafId.current = null;
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return position;
}
