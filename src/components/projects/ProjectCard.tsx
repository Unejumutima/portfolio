import { memo } from 'react';
import { ExternalLink, Eye, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TechnologyBadge } from '@/components/ui/TechnologyBadge';
import { ProjectImage } from './ProjectImage';
import { cn } from '@/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  className?: string;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  onSelect,
  className,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      variants={{
        hidden: { opacity: 0, scale: 0.92, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.92 },
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'project-card gradient-border group glass-card relative flex h-full cursor-pointer flex-col overflow-hidden',
        className,
      )}
      onClick={() => onSelect(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <ProjectImage
          projectId={project.id}
          category={project.category}
          title={project.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        >
          <span className="btn-animated-secondary pointer-events-none px-4 py-2 text-body-sm">
            <Eye size={16} aria-hidden />
            View Details
          </span>
        </div>
        <span
          className={cn(
            'absolute right-3 top-3 rounded-full px-2.5 py-1 text-caption',
            project.status === 'Completed'
              ? 'bg-secondary/20 text-secondary'
              : 'bg-primary/20 text-primary',
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-heading-sm transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-body-sm text-text-secondary">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2" role="list" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} role="listitem">
              <TechnologyBadge name={tech} />
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-badge">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
});

export function ProjectCardLinks({
  githubUrl,
  liveUrl,
  onViewDetails,
}: {
  githubUrl: string;
  liveUrl: string;
  onViewDetails?: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={githubUrl}
        className="btn-animated-secondary inline-flex items-center gap-2 px-4 py-2 text-body-sm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source code on GitHub"
        onClick={(e) => e.stopPropagation()}
      >
        <Code2 size={16} aria-hidden />
        View Code
      </a>
      <a
        href={liveUrl}
        className="btn-animated-primary inline-flex items-center gap-2 px-4 py-2 text-body-sm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View live demo"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink size={16} aria-hidden />
        Live Demo
      </a>
      {onViewDetails && (
        <button
          type="button"
          className="btn-animated-minimal inline-flex items-center gap-2 px-4 py-2 text-body-sm"
          onClick={onViewDetails}
          aria-label="View project details"
        >
          <Eye size={16} aria-hidden />
          View Details
        </button>
      )}
    </div>
  );
}
