import type { ProjectsContent, Project, ProjectFilter } from '@/types/projects';

export const PROJECTS_DATA: ProjectsContent = {
  title: 'Featured Work',
  subtitle: 'Products built with purpose, precision, and security in mind.',
  description:
    'A curated selection of projects — from an early HTML/CSS coffee shop site to AI-powered transport, secure messaging, inventory systems, and cybersecurity tooling.',
  featuredProjectId: 'cybersecurity-dashboard',
  filters: ['All', 'Frontend', 'Backend', 'Full Stack', 'Cybersecurity'],
  projects: [
    {
      id: 'tripalert',
      title: 'TripAlert',
      description:
        'An AI-powered smart transport assistant helping travelers navigate unfamiliar routes and manage journeys confidently — built for Rwanda\'s real-world transport challenges.',
      longDescription:
        'TripAlert is an AI-powered transportation assistant designed to help travelers navigate unfamiliar routes and manage their journeys more confidently. The system addresses real-world transportation challenges in Rwanda, where passengers traveling to new locations may struggle with route awareness, travel timing, and knowing whether they are approaching their destination. By combining AI assistance with location-based services, TripAlert aims to improve travel safety, reduce uncertainty, and provide a smarter commuting experience.',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'Express.js', 'AI APIs', 'Maps & Location Services', 'Database'],
      category: 'Full Stack',
      image: 'placeholder:tripalert',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'AI-powered travel assistance for unfamiliar destinations',
        'Destination tracking and real-time journey progress monitoring',
        'Estimated arrival time prediction and trip notifications',
        'Location-based updates to keep travelers informed throughout the trip',
        'User-friendly interface designed for everyday commuters',
      ],
      challenges: [
        'Integrating AI APIs with real-time location data for accurate journey predictions',
        'Designing an intuitive mobile experience for users with varying tech literacy',
        'Handling unreliable network conditions common in transit environments',
      ],
      status: 'In Progress',
    },
    {
      id: 'inventory-management',
      title: 'Zuba House Stock Management System',
      description:
        'Real-time inventory tracking with stock alerts, supplier management, and reporting.',
      longDescription:
        'An inventory management solution built for Zuba House that need real-time visibility into stock levels. The system tracks products across warehouses, automates low-stock alerts, and provides detailed reporting for procurement decisions.',
      technologies: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'Chart.js'],
      category: 'Full Stack',
      image: 'placeholder:inventory',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Real-time stock level tracking across locations',
        'Automated low-stock and reorder notifications',
        'Supplier and purchase order management',
        'Interactive charts and inventory reports',
        'Barcode-ready product catalog structure',
      ],
      challenges: [
        'Handling concurrent stock updates without race conditions',
        'Building responsive dashboards that remain performant with large datasets',
        'Designing intuitive UX for non-technical warehouse staff',
      ],
      status: 'Completed',
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description:
        'A premium developer portfolio showcasing projects, skills, and professional experience.',
      longDescription:
        'A modern single-page portfolio built with React and TypeScript, featuring smooth scroll navigation, glassmorphism design, animated sections, and a fully responsive layout optimized for performance and accessibility.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'Frontend',
      image: 'placeholder:portfolio',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Single-page architecture with smooth scroll navigation',
        'Reusable design system with glassmorphism styling',
        'Framer Motion animations with scroll-triggered reveals',
        'Fully responsive from mobile to desktop',
        'Accessible navigation with keyboard support',
      ],
      challenges: [
        'Balancing rich animations with performance on lower-end devices',
        'Creating a scalable component architecture for future sections',
        'Maintaining consistent visual hierarchy across varied content types',
      ],
      status: 'In Progress',
      featured: true,
    },
    {
      id: 'whisperbox',
      title: 'Whisper Box',
      description:
        'A Java-based console application for secure anonymous messaging, built with OOP principles and robust data validation.',
      longDescription:
        'Whisper Box is a Java-based console application designed to provide a secure environment where users can send and receive anonymous messages. Developed to strengthen object-oriented programming skills by applying software engineering principles to a real-world communication system while maintaining user privacy.',
      technologies: ['Java', 'OOP', 'Java Collections', 'File I/O', 'Exception Handling'],
      category: 'Full Stack',
      image: 'placeholder:whisperbox',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Anonymous message sending and receiving with user privacy by design',
        'Structured user management with authentication and data validation',
        'Modular architecture using encapsulation, inheritance, abstraction, and polymorphism',
        'File-based persistence for users and messages across sessions',
        'Comprehensive exception handling to prevent runtime failures',
        'Clean, reusable class structure with clear separation of responsibilities',
      ],
      challenges: [
        'Designing a modular OOP architecture that remains extensible as features grow',
        'Implementing anonymous messaging while preserving message integrity and delivery',
        'Applying robust input validation and exception handling throughout the system',
      ],
      status: 'Completed',
    },
    {
      id: 'coffee-shop',
      title: 'Coffee Shop Website',
      description:
        'A multi-page coffee shop website built with plain HTML and CSS — one of my first web projects that started the journey.',
      longDescription:
        'A multi-page static website for a coffee shop, built entirely with plain HTML and CSS without any frameworks or libraries. This was one of my earliest web development projects and marks the beginning of my frontend journey. It covers all the essential pages a real business website needs and reflects the foundational skills that everything since has been built on.',
      technologies: ['HTML', 'CSS'],
      category: 'Frontend',
      image: 'placeholder:coffee',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Multi-page layout including Home, Menu, About, and Contact pages',
        'Structured semantic HTML for clear content hierarchy',
        'Custom CSS styling with consistent typography and colour scheme',
        'Responsive layout principles applied across pages',
        'Navigation bar linking all pages for smooth site browsing',
      ],
      challenges: [
        'Learning to structure multi-page sites without a framework or build tool',
        'Achieving consistent styling across pages using only vanilla CSS',
        'Understanding the fundamentals of layout, spacing, and visual hierarchy from scratch',
      ],
      status: 'Completed',
    },
    {
      id: 'cybersecurity-dashboard',
      title: 'Cybersecurity Monitoring Dashboard',
      description:
        'A real-time security dashboard for monitoring threats, vulnerabilities, and system health.',
      longDescription:
        'A cybersecurity-focused monitoring dashboard that aggregates security events, visualizes threat patterns, and surfaces vulnerability alerts. Designed to give developers and security teams a clear operational picture of application security posture.',
      technologies: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Chart.js'],
      category: 'Cybersecurity',
      image: 'placeholder:security',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Real-time security event streaming via WebSockets',
        'Threat severity classification and alerting',
        'Vulnerability scan results visualization',
        'OWASP Top 10 compliance tracking dashboard',
        'Exportable security reports in PDF format',
      ],
      challenges: [
        'Processing high-volume event streams without UI lag',
        'Designing intuitive visualizations for non-security stakeholders',
        'Balancing detailed logs with actionable summary views',
      ],
      status: 'In Progress',
      featured: true,
    },
  ],
};

export function getFeaturedProject(data: ProjectsContent): Project {
  const featured = data.projects.find((p) => p.id === data.featuredProjectId);
  if (!featured) {
    throw new Error(`Featured project not found: ${data.featuredProjectId}`);
  }
  return featured;
}

export function filterProjectsByCategory(
  projects: Project[],
  filter: ProjectFilter,
): Project[] {
  if (filter === 'All') return projects;
  return projects.filter((project) => project.category === filter);
}
