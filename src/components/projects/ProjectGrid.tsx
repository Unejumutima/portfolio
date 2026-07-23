import { AnimatePresence, motion } from 'framer-motion';
import { staggerChildren } from '@/lib';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/types';

interface ProjectGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export function ProjectGrid({ projects, onSelect }: ProjectGridProps) {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      role="list"
      aria-label="Projects grid"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.92 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            role="listitem"
          >
            <ProjectCard project={project} onSelect={onSelect} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
