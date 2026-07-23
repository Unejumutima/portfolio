export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type {
  QuickFact,
  AboutStatistic,
  AboutContent,
  TechnologyItem,
  SkillCategoryData,
  SkillsContent,
} from './about';

export type { TimelineEntry, ExperienceContent } from './experience';
export type { ServiceItem, ServicesContent } from './services';
export type {
  Project,
  ProjectCategory,
  ProjectStatus,
  ProjectFilter,
  ProjectsContent,
} from './projects';
export type {
  Recommendation,
  RecommendationsContent,
} from './recommendations';
export type {
  ContactInfo,
  ContactSocialLink,
  FooterLink,
  ContactFormData,
  ContactContent,
  FooterContent,
} from './contact';
