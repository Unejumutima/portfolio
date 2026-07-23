import { motion } from 'framer-motion';
import { scaleIn } from '@/lib';
import { cn } from '@/utils';

interface TechnologyBadgeProps {
  name: string;
  className?: string;
}

export function TechnologyBadge({ name, className }: TechnologyBadgeProps) {
  return (
    <motion.span
      variants={scaleIn}
      className={cn('tech-badge', className)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
    >
      {name}
    </motion.span>
  );
}
