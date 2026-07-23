import { motion } from 'framer-motion';
import { cn } from '@/utils';
import type { ProjectFilter } from '@/types';

interface ProjectFiltersProps {
  filters: ProjectFilter[];
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
  className?: string;
}

export function ProjectFilters({
  filters,
  activeFilter,
  onFilterChange,
  className,
}: ProjectFiltersProps) {
  return (
    <div
      className={cn('flex flex-wrap justify-center gap-2', className)}
      role="tablist"
      aria-label="Filter projects by category"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(filter)}
            className={cn(
              'project-filter relative rounded-lg px-4 py-2 text-body-sm font-medium transition-colors',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              isActive
                ? 'text-text'
                : 'text-text-secondary hover:text-text',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-active"
                className="absolute inset-0 rounded-lg border border-primary/30 bg-primary/10 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        );
      })}
    </div>
  );
}
