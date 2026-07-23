import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/constants';
import { useScrollToSection, useReducedMotion } from '@/hooks';
import { fadeIn } from '@/lib';

export function HeroScrollIndicator() {
  const { scrollTo } = useScrollToSection();
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <button
        type="button"
        onClick={() => scrollTo(SECTION_IDS.ABOUT)}
        className="group flex flex-col items-center gap-3 p-2 text-text-secondary transition-colors hover:text-text focus-visible:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-lg"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/60 transition-colors group-hover:text-text-secondary">
          scroll
        </span>

        {/* Animated scroll indicator — pill with travelling dot */}
        <div className="relative flex h-10 w-6 items-start justify-center rounded-full border border-glass-border bg-glass/40 pt-1.5 backdrop-blur-sm overflow-hidden">
          <motion.span
            className="h-2 w-1 rounded-full bg-primary/80"
            animate={
              reduced
                ? {}
                : {
                    y: [0, 16, 0],
                    opacity: [1, 0.3, 1],
                  }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />
        </div>
      </button>
    </motion.div>
  );
}
