import type { NavigationItem } from '@/types';

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  SERVICES: 'services',
  RECOMMENDATIONS: 'recommendations',
  CONTACT: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_ITEMS: NavigationItem[] = [
  { id: SECTION_IDS.HOME, label: 'Home', href: `#${SECTION_IDS.HOME}` },
  { id: SECTION_IDS.ABOUT, label: 'About', href: `#${SECTION_IDS.ABOUT}` },
  { id: SECTION_IDS.SKILLS, label: 'Skills', href: `#${SECTION_IDS.SKILLS}` },
  {
    id: SECTION_IDS.EXPERIENCE,
    label: 'Experience',
    href: `#${SECTION_IDS.EXPERIENCE}`,
  },
  {
    id: SECTION_IDS.SERVICES,
    label: 'Services',
    href: `#${SECTION_IDS.SERVICES}`,
  },
  {
    id: SECTION_IDS.PROJECTS,
    label: 'Projects',
    href: `#${SECTION_IDS.PROJECTS}`,
  },
  {
    id: SECTION_IDS.RECOMMENDATIONS,
    label: 'Recommendations',
    href: `#${SECTION_IDS.RECOMMENDATIONS}`,
  },
  { id: SECTION_IDS.CONTACT, label: 'Contact', href: `#${SECTION_IDS.CONTACT}` },
];
