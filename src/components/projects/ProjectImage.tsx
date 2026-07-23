import { memo, useMemo } from 'react';
import { cn } from '@/utils';
import type { ProjectCategory } from '@/types';

const CATEGORY_STYLES: Record<
  ProjectCategory,
  { gradient: string; accent: string; pattern: string }
> = {
  'Full Stack': {
    gradient: 'from-primary/30 via-primary/10 to-background',
    accent: 'text-primary',
    pattern: 'M0 80 L40 40 L80 60 L120 20 L160 50 L200 30',
  },
  Frontend: {
    gradient: 'from-violet-500/25 via-primary/10 to-background',
    accent: 'text-violet-400',
    pattern: 'M0 60 L50 30 L100 70 L150 25 L200 55',
  },
  Backend: {
    gradient: 'from-amber-500/20 via-primary/10 to-background',
    accent: 'text-amber-400',
    pattern: 'M0 50 L60 70 L120 35 L180 60 L200 40',
  },
  Cybersecurity: {
    gradient: 'from-secondary/25 via-primary/10 to-background',
    accent: 'text-secondary',
    pattern: 'M0 70 L45 25 L90 65 L135 30 L180 55 L200 45',
  },
};

interface ProjectImageProps {
  projectId: string;
  category: ProjectCategory;
  title: string;
  className?: string;
}

export const ProjectImage = memo(function ProjectImage({
  projectId,
  category,
  title,
  className,
}: ProjectImageProps) {
  const styles = CATEGORY_STYLES[category];

  const patternId = useMemo(() => `pattern-${projectId}`, [projectId]);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-background',
        `bg-gradient-to-br ${styles.gradient}`,
        className,
      )}
      role="img"
      aria-label={`${title} preview`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 200 100"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={patternId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(249,115,22,0.6)" />
            <stop offset="100%" stopColor="rgba(251,146,60,0.4)" />
          </linearGradient>
        </defs>
        <path
          d={styles.pattern}
          fill="none"
          stroke={`url(#${patternId})`}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-card px-4 py-2">
          <span className={cn('text-caption font-medium', styles.accent)}>
            {category}
          </span>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
});
