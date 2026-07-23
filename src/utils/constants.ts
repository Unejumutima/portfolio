export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const SPACING = {
  section: {
    paddingY: 'py-20 md:py-28 lg:py-32',
    gap: 'gap-12 md:gap-16',
  },
  container: {
    paddingX: 'px-4 sm:px-6 lg:px-8',
    maxWidth: 'max-w-7xl',
  },
} as const;

export const LENIS_OPTIONS = {
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 1.5,
} as const;
