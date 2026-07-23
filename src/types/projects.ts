export type ProjectCategory =
  | 'Frontend'
  | 'Backend'
  | 'Full Stack'
  | 'Cybersecurity';

export type ProjectStatus = 'Completed' | 'In Progress';

export type ProjectFilter = ProjectCategory | 'All';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: ProjectCategory;
  image: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  challenges: string[];
  status: ProjectStatus;
  featured?: boolean;
}

export interface ProjectsContent {
  title: string;
  subtitle: string;
  description: string;
  featuredProjectId: string;
  filters: ProjectFilter[];
  projects: Project[];
}
