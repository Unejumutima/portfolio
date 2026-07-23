import type { ExperienceContent } from '@/types/experience';

export const EXPERIENCE_DATA: ExperienceContent = {
  title: 'Experience & Journey',
  subtitle: 'A path shaped by education, hands-on practice, and continuous growth.',
  description:
    'From academic foundations to real-world skills — every phase has built on the last, shaping a developer who thinks about design, performance, security, and reach.',
  items: [
    {
      id: 'university',
      date: 'Sep 2024 — Present',
      title: 'Software programming and Embedded Systems',
      organization: 'Rwanda Coding Academy',
      description:
        'Pursuing a degree in Computer Science with a focus on software engineering, data structures, algorithms, and system design. Applying classroom knowledge through personal and collaborative projects throughout the programme.',
      technologies: ['Java', 'Python', 'Data Structures', 'Algorithms'],
    },
    {
      id: 'uiux-frontend',
      date: 'Sep 2024 — Sep 2025',
      title: 'UI/UX Design & Frontend Development',
      organization: 'Self-Directed',
      description:
        'Dedicated a full year to mastering user interface design and frontend engineering. Studied UX principles, component architecture, accessibility, and modern design systems. Built multiple responsive web applications using React, TypeScript, and Tailwind CSS while developing a strong eye for visual detail.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Accessibility'],
    },
    {
      id: 'backend',
      date: '2025 — 2026',
      title: 'Backend Development',
      organization: 'Self-Directed',
      description:
        'Expanded into server-side engineering — designing RESTful APIs, implementing authentication systems, and working with relational and non-relational databases. Focused on building reliable, well-structured backend services with Node.js, Express, Java, PostgreSQL, MySQL, and MongoDB.',
      technologies: ['Node.js', 'Express', 'Java', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs'],
    },
    {
      id: 'mobile',
      date: '2025 — Present',
      title: 'Mobile Development',
      organization: 'Self-Directed',
      description:
        'Began building cross-platform mobile applications with React Native, leveraging existing JavaScript and TypeScript knowledge to create native iOS and Android experiences. Exploring navigation patterns, device APIs, and mobile-first UX design principles.',
      technologies: ['React Native', 'iOS', 'Android', 'TypeScript'],
    },
    {
      id: 'cybersecurity',
      date: 'Mid 2026 — Present',
      title: 'Cybersecurity',
      organization: 'Self-Directed',
      description:
        'Actively deepening knowledge in cybersecurity — studying secure coding practices, OWASP principles, network security, and ethical hacking fundamentals. Goal is to bridge full stack development with security engineering, building applications that are secure by design from the ground up.',
      technologies: ['Linux', 'OWASP', 'Web Security', 'Networking', 'Penetration Testing'],
    },
    {
      id: 'softwaredevelopment-intern',
      date: 'Mar 2026 — Present',
      title: ' Full-Stack Developer Intern ',
      organization: 'Self-Directed',
      description:
        'Contributed to the maintenance of an existing web application before designing, developing, and deploying a full-stack Stock Management System. Gained hands-on experience building responsive user interfaces, developing REST APIs, managing PostgreSQL databases, and deploying applications to production.',

      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'REST APIs',
        'Vercel',
        'Render'
      ],
    },
  ],
};
