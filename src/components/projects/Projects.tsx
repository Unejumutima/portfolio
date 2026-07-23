import { useCallback, useMemo, useState } from 'react';
import { SECTION_IDS } from '@/constants';
import {
  PROJECTS_DATA,
  getFeaturedProject,
  filterProjectsByCategory,
} from '@/data';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/lib';
import { SectionWrapper, MaxWidthContainer } from '@/components/layout';
import { SectionHeader, SectionBackground } from '@/components/common';
import { FeaturedProject } from './FeaturedProject';
import { ProjectFilters } from './ProjectFilters';
import { ProjectGrid } from './ProjectGrid';
import { ProjectModal } from './ProjectModal';
import type { Project, ProjectFilter } from '@/types';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProject = useMemo(
    () => getFeaturedProject(PROJECTS_DATA),
    [],
  );

  const filteredProjects = useMemo(
    () => filterProjectsByCategory(PROJECTS_DATA.projects, activeFilter),
    [activeFilter],
  );

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);

  return (
    <>
      <SectionWrapper
        id={SECTION_IDS.PROJECTS}
        ariaLabel="Projects"
        className="relative"
      >
        <SectionBackground variant="projects" />

        <MaxWidthContainer className="relative z-10">
          <motion.div
            className="space-y-12 lg:space-y-16"
            variants={staggerChildren}
          >
            <SectionHeader
              title={PROJECTS_DATA.title}
              subtitle={PROJECTS_DATA.subtitle}
              description={PROJECTS_DATA.description}
              align="center"
            />

            <FeaturedProject
              project={featuredProject}
              onViewDetails={handleSelectProject}
            />

            <motion.div variants={fadeUp} className="space-y-8">
              <ProjectFilters
                filters={PROJECTS_DATA.filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />

              <ProjectGrid
                projects={filteredProjects}
                onSelect={handleSelectProject}
              />
            </motion.div>
          </motion.div>
        </MaxWidthContainer>
      </SectionWrapper>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
