import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react';
import { GitHubIcon } from '@/components/common/BrandIcons';
import { modalBackdrop, modalContent } from '@/lib';
import { useFocusTrap } from '@/hooks';
import { TechnologyBadge } from '@/components/ui/TechnologyBadge';
import { ProjectImage } from './ProjectImage';
import { cn } from '@/utils';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(isOpen, dialogRef);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
          <motion.button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-label="Close project details"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'glass-card relative z-10 flex max-h-[92vh] w-full flex-col overflow-hidden',
              'rounded-t-2xl md:max-h-[85vh] md:max-w-3xl md:rounded-2xl',
              'border-b-0 md:border',
              'shadow-[0_0_80px_rgba(249,115,22,0.15)]',
            )}
          >
            <div className="relative aspect-video shrink-0 overflow-hidden md:aspect-[21/9]">
              <ProjectImage
                projectId={project.id}
                category={project.category}
                title={project.title}
                className="h-full w-full"
              />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-glass-border bg-glass/80 text-text backdrop-blur-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Close modal"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="space-y-6">
                <header className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-caption text-primary">
                      {project.category}
                    </span>
                    <span
                      className={cn(
                        'rounded-full px-3 py-1 text-caption',
                        project.status === 'Completed'
                          ? 'bg-secondary/15 text-secondary'
                          : 'bg-amber-500/15 text-amber-400',
                      )}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h2 id="project-modal-title" className="text-heading-lg">
                    {project.title}
                  </h2>
                  <p className="text-body-md text-text-secondary">
                    {project.longDescription}
                  </p>
                </header>

                <section aria-labelledby="features-heading">
                  <h3
                    id="features-heading"
                    className="mb-3 flex items-center gap-2 text-heading-sm"
                  >
                    <CheckCircle2 size={18} className="text-secondary" aria-hidden />
                    Key Features
                  </h3>
                  <ul className="space-y-2" role="list">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-body-sm text-text-secondary"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-labelledby="challenges-heading">
                  <h3
                    id="challenges-heading"
                    className="mb-3 flex items-center gap-2 text-heading-sm"
                  >
                    <AlertTriangle size={18} className="text-amber-400" aria-hidden />
                    Challenges & Solutions
                  </h3>
                  <ul className="space-y-2" role="list">
                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex items-start gap-2 text-body-sm text-text-secondary"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                          aria-hidden="true"
                        />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-labelledby="technologies-heading">
                  <h3 id="technologies-heading" className="mb-3 text-heading-sm">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2" role="list">
                    {project.technologies.map((tech) => (
                      <span key={tech} role="listitem">
                        <TechnologyBadge name={tech} />
                      </span>
                    ))}
                  </div>
                </section>

                <div className="flex flex-wrap gap-3 border-t border-glass-border pt-6">
                  <a
                    href={project.githubUrl}
                    className="btn-animated-secondary inline-flex items-center gap-2 px-5 py-2.5 text-body-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="btn-animated-primary inline-flex items-center gap-2 px-5 py-2.5 text-body-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} aria-hidden />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
