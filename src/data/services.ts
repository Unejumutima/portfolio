import type { ServicesContent } from '@/types/services';
import { SECTION_IDS } from '@/constants';

export const SERVICES_DATA: ServicesContent = {
  title: 'Services',
  subtitle: 'What I can help you build.',
  description:
    'I offer end-to-end web development services — from polished interfaces to robust backends and security-conscious architecture.',
  services: [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description:
        'Crafting responsive, accessible, and performant user interfaces with modern frameworks and clean component architecture.',
      icon: 'layout',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description:
        'Building scalable server-side logic, authentication systems, and business logic that powers reliable applications.',
      icon: 'server',
    },
    {
      id: 'rest-api',
      title: 'REST API Development',
      description:
        'Designing and implementing well-structured RESTful APIs with clear documentation, validation, and error handling.',
      icon: 'workflow',
    },
    {
      id: 'database',
      title: 'Database Design',
      description:
        'Modeling efficient database schemas, writing optimized queries, and ensuring data integrity across relational and NoSQL systems.',
      icon: 'database',
    },
    {
      id: 'responsive',
      title: 'Responsive Web Applications',
      description:
        'Delivering seamless experiences across devices with mobile-first design, fluid layouts, and cross-browser compatibility.',
      icon: 'smartphone',
    },
    {
      id: 'secure',
      title: 'Secure Web Applications',
      description:
        'Applying security best practices — input validation, secure authentication, and OWASP-aware development for safer applications.',
      icon: 'shield-check',
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description:
        'Building cross-platform mobile applications with React Native — delivering native iOS and Android experiences from a single, maintainable codebase.',
      icon: 'tablet-smartphone',
    },
  ],
  cta: {
    label: 'View My Projects',
    targetSection: SECTION_IDS.PROJECTS,
  },
};
