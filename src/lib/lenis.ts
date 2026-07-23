import Lenis from 'lenis';
import { LENIS_OPTIONS } from '@/utils';

let lenisInstance: Lenis | null = null;

export function createLenis(): Lenis {
  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    ...LENIS_OPTIONS,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis(): void {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export function scrollToElement(
  target: string | HTMLElement,
  options?: { offset?: number; duration?: number },
): void {
  const lenis = getLenis();
  if (!lenis) return;

  lenis.scrollTo(target, {
    offset: options?.offset ?? 0,
    duration: options?.duration ?? 1.2,
  });
}
