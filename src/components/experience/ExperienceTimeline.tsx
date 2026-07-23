import { motion } from 'framer-motion';
import { useSectionReveal } from '@/hooks';
import { fadeLeft, fadeRight } from '@/lib';
import { cn } from '@/utils';
import type { TimelineEntry } from '@/types';
import { TimelineCard } from './TimelineCard';

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

function TimelineItem({ entry, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const { ref, inView } = useSectionReveal({ threshold: 0.2 });

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={isEven ? fadeLeft : fadeRight}
      className={cn(
        'relative pb-12 last:pb-0',
        'lg:grid lg:grid-cols-2 lg:gap-x-12',
      )}
    >
      <div
        className={cn(
          'timeline-dot absolute top-8 z-10',
          'left-4 md:left-1/2 lg:left-1/2',
        )}
        aria-hidden="true"
      />

      {isEven && <div className="hidden lg:block" aria-hidden="true" />}

      <div
        className={cn(
          'relative ml-10 md:ml-0 md:mx-auto md:max-w-lg',
          'lg:mx-0 lg:max-w-none',
          isEven ? 'lg:col-start-2' : 'lg:col-start-1',
        )}
      >
        <TimelineCard entry={entry} align={isEven ? 'left' : 'right'} />
      </div>

      {!isEven && <div className="hidden lg:block" aria-hidden="true" />}
    </motion.li>
  );
}

interface ExperienceTimelineProps {
  items: TimelineEntry[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const { ref, inView } = useSectionReveal({ threshold: 0.05 });

  return (
    <div className="relative mx-auto max-w-5xl" ref={ref}>
      <motion.div
        className={cn(
          'timeline-line absolute top-0 bottom-0 w-px',
          'left-4 md:left-1/2 lg:left-1/2',
        )}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top' }}
        aria-hidden="true"
      />

      <ul className="relative" role="list" aria-label="Experience timeline">
        {items.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} index={index} />
        ))}
      </ul>
    </div>
  );
}
