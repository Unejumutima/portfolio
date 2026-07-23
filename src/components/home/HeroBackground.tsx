import { motion, type TargetAndTransition } from 'framer-motion';
import { useReducedMotion } from '@/hooks';

export function HeroBackground() {
  const reduced = useReducedMotion();

  const drift1: TargetAndTransition = reduced
    ? {}
    : {
        x: [0, 35, -25, 10, 0],
        y: [0, -30, 20, -10, 0],
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
      };

  const drift2: TargetAndTransition = reduced
    ? {}
    : {
        x: [0, -25, 30, -10, 0],
        y: [0, 25, -18, 12, 0],
        transition: { duration: 26, repeat: Infinity, ease: 'easeInOut' },
      };

  const drift3: TargetAndTransition = reduced
    ? {}
    : {
        x: [0, 20, -30, 15, 0],
        y: [0, -20, 28, -12, 0],
        transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
      };

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Radial light */}
      <div className="hero-radial-light absolute inset-0" />

      {/* Subtle grid */}
      <div className="hero-grid absolute inset-0 opacity-40" />

      {/* Orb 1 — primary orange, left */}
      <motion.div
        className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/12 blur-[110px]"
        animate={drift1}
      />

      {/* Orb 2 — secondary orange, right */}
      <motion.div
        className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-secondary/8 blur-[100px]"
        animate={drift2}
      />

      {/* Orb 3 — accent, bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-primary/6 blur-[90px]"
        animate={drift3}
      />

      {/* Depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/70" />

      {/* Decorative floating glass panes */}
      <div className="absolute left-[8%] top-[18%] h-32 w-32 rotate-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm lg:h-44 lg:w-44" />
      <div className="absolute right-[6%] top-[28%] h-24 w-24 -rotate-6 rounded-xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-sm lg:h-36 lg:w-36" />
      <div className="absolute bottom-[20%] left-[14%] h-20 w-20 rotate-3 rounded-xl border border-primary/10 bg-primary/[0.03] backdrop-blur-sm" />
    </div>
  );
}
