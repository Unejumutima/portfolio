import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  duration?: number;
  start?: number;
}

export function useCountUp(
  end: number,
  inView: boolean,
  options?: UseCountUpOptions,
): number {
  const { duration = 2000, start = 0 } = options ?? {};
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!inView) return;

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (end - start) * eased));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, inView, duration, start]);

  return count;
}
