import type { SkillsContent } from '@/types/about';

export const SKILLS_DATA: SkillsContent = {
  title: 'Skills & Technologies',
  subtitle: 'A toolkit built through practice, curiosity, and continuous learning.',
  description:
    'From crafting responsive interfaces to architecting backend services and exploring cybersecurity fundamentals — here are the technologies I work with.',
  categories: [
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Building responsive, accessible, and performant user interfaces.',
      icon: 'layout',
      technologies: [
        { id: 'react', name: 'React' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'javascript', name: 'JavaScript' },
        { id: 'html', name: 'HTML' },
        { id: 'css', name: 'CSS' },
        { id: 'tailwind', name: 'Tailwind CSS' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      description: 'Designing APIs and server-side logic that power applications.',
      icon: 'server',
      technologies: [
        { id: 'nodejs', name: 'Node.js' },
        { id: 'express', name: 'Express' },
        { id: 'java', name: 'Java' },
        { id: 'rest', name: 'REST APIs' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases',
      description: 'Storing, querying, and modeling data with reliability in mind.',
      icon: 'database',
      technologies: [
        { id: 'postgresql', name: 'PostgreSQL' },
        { id: 'mongodb', name: 'MongoDB' },
        { id: 'mysql', name: 'MySQL' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      description: 'Everyday tools that streamline development and collaboration.',
      icon: 'wrench',
      technologies: [
        { id: 'git', name: 'Git' },
        { id: 'github', name: 'GitHub' },
        { id: 'postman', name: 'Postman' },
        { id: 'cursor', name: 'Cursor' },
        { id: 'vscode', name: 'VS Code' },
      ],
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'Creating user-friendly interfaces with design principles in mind.',
      icon: 'layout',
      technologies: [
        { id: 'figma', name: 'Figma' },
        { id: 'design-systems', name: 'Design Systems' },
        { id: 'prototyping', name: 'Prototyping' },
        { id: 'wireframing', name: 'Wireframing' },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Building native mobile applications for Android and iOS.',
      icon: 'smartphone',
      technologies: [
        { id: 'react-native', name: 'React Native' },
        { id: 'android', name: 'Android (Learning)' },
        { id: 'ios', name: 'iOS (Learning)' },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Foundational security knowledge I am actively deepening.',
      icon: 'shield',
      technologies: [
        { id: 'linux', name: 'Linux' },
        { id: 'networking', name: 'Networking' },
        { id: 'owasp', name: 'OWASP Basics' },
        { id: 'web-security', name: 'Web Security' },
        { id: 'pentest', name: 'Penetration Testing (Learning)' },
      ],
    },
  ],
};
