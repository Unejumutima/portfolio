import { motion } from 'framer-motion';
import { fadeUp } from '@/lib';
import { cn } from '@/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.header
      className={cn('space-y-4', isCenter && 'text-center', className)}
      variants={fadeUp}
    >
      <h2 className="text-display-md">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-body-lg text-text',
            isCenter && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className={cn(
            'max-w-2xl text-body-md text-text-secondary',
            isCenter && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
