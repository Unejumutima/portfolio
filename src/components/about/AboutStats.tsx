import { useSectionReveal, useCountUp } from '@/hooks';
import { cn } from '@/utils';
import type { AboutStatistic } from '@/types';

interface StatCardProps {
  stat: AboutStatistic;
}

export function StatCard({ stat }: StatCardProps) {
  const { ref, inView } = useSectionReveal({ threshold: 0.5 });
  const count = useCountUp(stat.value, inView);

  return (
    <div
      ref={ref}
      className="glass-card gradient-border group flex flex-col items-center gap-2 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(249,115,22,0.12)]"
      aria-label={`${stat.label}: ${stat.prefix ?? ''}${stat.value}${stat.suffix ?? ''}`}
    >
      <p className="text-display-md font-bold tabular-nums text-text">
        <span className="gradient-text-primary">
          {stat.prefix}
          {count}
          {stat.suffix}
        </span>
      </p>
      <p className="text-body-sm text-text-secondary">{stat.label}</p>
    </div>
  );
}

interface AboutStatsProps {
  statistics: AboutStatistic[];
  className?: string;
}

export function AboutStats({ statistics, className }: AboutStatsProps) {
  return (
    <div
      className={cn('grid grid-cols-1 gap-4 sm:grid-cols-3', className)}
      role="list"
      aria-label="Statistics"
    >
      {statistics.map((stat) => (
        <div key={stat.id} role="listitem">
          <StatCard stat={stat} />
        </div>
      ))}
    </div>
  );
}
