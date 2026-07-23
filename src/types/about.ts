export interface QuickFact {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface AboutStatistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  introduction: string;
  paragraphs: string[];
  cta: {
    label: string;
    targetSection: string;
  };
  quickFacts: QuickFact[];
  statistics: AboutStatistic[];
}

export interface TechnologyItem {
  id: string;
  name: string;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: TechnologyItem[];
}

export interface SkillsContent {
  title: string;
  subtitle: string;
  description: string;
  categories: SkillCategoryData[];
}
