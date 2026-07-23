export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  technologies: string[];
}

export interface ExperienceContent {
  title: string;
  subtitle: string;
  description: string;
  items: TimelineEntry[];
}
