import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { fadeUp, float } from '@/lib';
import { ProjectImage } from './ProjectImage';
import { ProjectCardLinks } from './ProjectCard';
import type { Project } from '@/types';

interface FeaturedProjectProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function FeaturedProject({ project, onViewDetails }: FeaturedProjectProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative"
      aria-label="Featured project spotlight"
    >
      <motion.div
        variants={float}
        initial="initial"
        animate="animate"
        className="glass-card group overflow-hidden transition-all duration-500 hover:border-primary/25 hover:shadow-[0_0_60px_rgba(249,115,22,0.12)]"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px]">
            <ProjectImage
              projectId={project.id}
              category={project.category}
              title={project.title}
              className="h-full w-full"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-glass-border bg-glass/80 px-3 py-1.5 backdrop-blur-sm">
              <Sparkles size={14} className="text-primary" aria-hidden />
              <span className="text-caption text-text">Featured Project</span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 p-6 md:p-8 lg:p-10">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-secondary/15 px-3 py-1 text-caption text-secondary">
                  {project.category}
                </span>
                <span
                  className={
                    project.status === 'Completed'
                      ? 'text-caption text-text-secondary'
                      : 'text-caption text-primary'
                  }
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-display-md font-bold">
                <span className="gradient-text">{project.title}</span>
              </h3>
              <p className="text-body-lg text-text-secondary">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2" role="list" aria-label="Key technologies">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-badge"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ProjectCardLinks
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              onViewDetails={() => onViewDetails(project)}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
