import { motion } from 'framer-motion';
import { blobDrift } from '@/lib';
import { cn } from '@/utils';

interface SectionBackgroundProps {
  className?: string;
  variant?: 'default' | 'skills' | 'experience' | 'services' | 'projects';
}

export function SectionBackground({
  className,
  variant = 'default',
}: SectionBackgroundProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <div className="hero-radial-light absolute inset-0 opacity-60" />

      <motion.div
        className={cn(
          'absolute rounded-full blur-[100px]',
          variant === 'default' && 'left-0 top-1/4 h-64 w-64 bg-primary/8 md:h-80 md:w-80',
          variant === 'skills' && 'right-0 top-0 h-72 w-72 bg-secondary/8 md:h-96 md:w-96',
          variant === 'experience' && 'left-1/4 top-0 h-80 w-80 bg-primary/10 md:h-96 md:w-96',
          variant === 'services' && 'right-1/4 bottom-0 h-72 w-72 bg-secondary/10 md:h-80 md:w-80',
          variant === 'projects' && 'left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 bg-primary/8 md:h-[28rem] md:w-[28rem]',
        )}
        animate={blobDrift.animate}
      />
      <motion.div
        className={cn(
          'absolute rounded-full blur-[80px]',
          variant === 'default' && 'bottom-0 right-1/4 h-56 w-56 bg-secondary/6',
          variant === 'skills' && 'bottom-1/4 left-1/4 h-64 w-64 bg-primary/6',
          variant === 'experience' && 'bottom-1/4 right-0 h-56 w-56 bg-secondary/8',
          variant === 'services' && 'left-0 top-1/3 h-64 w-64 bg-primary/6',
          variant === 'projects' && 'bottom-0 right-1/4 h-72 w-72 bg-secondary/8',
        )}
        animate={{
          x: [0, -15, 20, 0],
          y: [0, 20, -10, 0],
          transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60" />
    </div>
  );
}
