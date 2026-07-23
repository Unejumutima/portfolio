import { useInView } from 'react-intersection-observer';
import type { IntersectionOptions } from 'react-intersection-observer';

interface UseSectionRevealOptions extends IntersectionOptions {
  triggerOnce?: boolean;
}

export function useSectionReveal(options?: UseSectionRevealOptions) {
  const { triggerOnce = true, threshold = 0.15, ...rest } = options ?? {};

  return useInView({
    triggerOnce,
    threshold,
    ...rest,
  });
}
