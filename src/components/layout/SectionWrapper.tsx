import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useSectionReveal } from '@/hooks';
import { useReducedMotion } from '@/hooks';
import { cn } from '@/utils';

type AnimationVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'default';

interface SectionWrapperProps {
  id: string;
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
  animate?: boolean;
  animationVariant?: AnimationVariant;
}

const VARIANTS: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  },
  default: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  },
};

export function SectionWrapper({
  id,
  children,
  className,
  ariaLabel,
  animate = true,
  animationVariant = 'default',
}: SectionWrapperProps) {
  const { ref, inView } = useSectionReveal({ threshold: 0.1 });
  const reducedMotion = useReducedMotion();

  if (!animate || reducedMotion) {
    return (
      <section
        id={id}
        aria-label={ariaLabel}
        className={cn('section-spacing scroll-mt-24', className)}
      >
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={VARIANTS[animationVariant]}
      className={cn('section-spacing scroll-mt-24', className)}
    >
      {children}
    </motion.section>
  );
}
