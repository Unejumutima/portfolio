import { motion, type TargetAndTransition } from 'framer-motion';
import { useReducedMotion } from '@/hooks';

interface OrbAnimation {
  x: number[];
  y: number[];
  duration: number;
}

const ORB_ANIMATIONS: OrbAnimation[] = [
  { x: [0, 40, -20, 15, 0], y: [0, -30, 20, -10, 0], duration: 22 },
  { x: [0, -30, 25, -15, 0], y: [0, 25, -20, 15, 0], duration: 28 },
  { x: [0, 20, -35, 10, 0], y: [0, -15, 30, -20, 0], duration: 25 },
  { x: [0, -15, 20, -30, 0], y: [0, 30, -10, 25, 0], duration: 32 },
];

function orbAnimate(orb: OrbAnimation): TargetAndTransition {
  return {
    x: orb.x,
    y: orb.y,
    transition: {
      duration: orb.duration,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };
}

export function AnimatedBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary orb — top left */}
      {reduced ? (
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
      ) : (
        <motion.div
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]"
          animate={orbAnimate(ORB_ANIMATIONS[0])}
        />
      )}

      {/* Secondary orb — top right */}
      {reduced ? (
        <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-secondary/6 blur-[100px]" />
      ) : (
        <motion.div
          className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-secondary/8 blur-[100px]"
          animate={orbAnimate(ORB_ANIMATIONS[1])}
        />
      )}

      {/* Accent orb — bottom centre */}
      {reduced ? (
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />
      ) : (
        <motion.div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]"
          animate={orbAnimate(ORB_ANIMATIONS[2])}
        />
      )}

      {/* Extra accent — centre-right */}
      {!reduced && (
        <motion.div
          className="absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-secondary/4 blur-[90px]"
          animate={orbAnimate(ORB_ANIMATIONS[3])}
        />
      )}

      {/* Vertical fade — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
}
