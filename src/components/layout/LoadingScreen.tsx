import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks';

interface LoadingScreenProps {
  onComplete: () => void;
}

const DURATION_MS = 1600;

/**
 * First-visit loading screen.
 * Shows an animated logo + progress bar, then fades out.
 * Respects prefers-reduced-motion (skips animation, exits immediately).
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    // Animate progress from 0 → 100 over DURATION_MS
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / DURATION_MS, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(eased);

      if (pct < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(onComplete, 500);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete, reducedMotion]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          aria-label="Loading portfolio"
          role="status"
          aria-live="polite"
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12 flex flex-col items-center gap-4"
          >
            {/* Monogram */}
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-2xl font-bold text-primary"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(249,115,22,0.2)',
                  '0 0 40px rgba(249,115,22,0.4)',
                  '0 0 20px rgba(249,115,22,0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              IH
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-label tracking-widest text-text-secondary"
            >
              Ikirezi Honorine
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-caption text-primary/70"
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-48"
            aria-hidden="true"
          >
            <div className="h-px w-full overflow-hidden rounded-full bg-glass-border">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                style={{
                  width: `${progress * 100}%`,
                  transition: 'none',
                  boxShadow: '0 0 8px rgba(249,115,22,0.5)',
                }}
              />
            </div>
            <p className="mt-3 text-center text-caption text-text-secondary/50">
              {Math.round(progress * 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
