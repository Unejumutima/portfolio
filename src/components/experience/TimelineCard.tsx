import { TechnologyBadge } from '@/components/ui/TechnologyBadge';
import { cn } from '@/utils';
import type { TimelineEntry } from '@/types';

interface TimelineCardProps {
  entry: TimelineEntry;
  align?: 'left' | 'right';
}

export function TimelineCard({ entry, align = 'left' }: TimelineCardProps) {
  const isRight = align === 'right';

  return (
    <article
      className={cn(
        'glass-card gradient-border group relative overflow-hidden p-6 transition-all duration-300',
        'hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_12px_48px_rgba(249,115,22,0.12)]',
        isRight && 'lg:text-right',
      )}
      aria-label={`${entry.title} at ${entry.organization}`}
    >
      {/* Shimmer top line */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          'bg-gradient-to-r from-transparent via-primary/60 to-transparent',
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          'pointer-events-none absolute -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-100',
          isRight ? '-right-8' : '-left-8',
        )}
        aria-hidden="true"
      />

      <div className="relative space-y-4">
        <div className={cn('space-y-1', isRight && 'lg:items-end lg:flex lg:flex-col')}>
          <time className="text-caption font-medium text-primary" dateTime={entry.date}>
            {entry.date}
          </time>
          <h3 className="text-heading-sm transition-colors duration-200 group-hover:text-primary">{entry.title}</h3>
          <p className="text-body-sm font-medium text-text-secondary">
            {entry.organization}
          </p>
        </div>

        <p className="text-body-md text-text-secondary">{entry.description}</p>

        <div
          className={cn(
            'flex flex-wrap gap-2',
            isRight && 'lg:justify-end',
          )}
          role="list"
          aria-label="Technologies used"
        >
          {entry.technologies.map((tech) => (
            <span key={tech} role="listitem">
              <TechnologyBadge name={tech} />
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
