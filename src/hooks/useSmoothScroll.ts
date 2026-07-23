import { useEffect } from 'react';
import { createLenis, destroyLenis } from '@/lib/lenis';

export function useSmoothScroll(): void {
  useEffect(() => {
    const lenis = createLenis();
    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      destroyLenis();
    };
  }, []);
}
