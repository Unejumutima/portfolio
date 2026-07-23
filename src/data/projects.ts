import type { ProjectsContent, Project, ProjectFilter } from '@/types/projects';

export const PROJECTS_DATA: ProjectsContent = {
  title: 'Featured Work',
  subtitle: 'Products built with purpose, precision, and security in mind.',
  description:
    'A curated selection of full-stack applications spanning healthcare, commerce, authentication systems, and cybersecurity tooling.',
  featuredProjectId: 'cybersecurity-dashboard',
  filters: ['All', 'Frontend', 'Backend', 'Full Stack', 'Cybersecurity'],
  projects: [
    {
      id: 'hospital-management',
      title: 'Hospital Management System',
      description:
        'A comprehensive platform for managing patient records, appointments, and hospital operations.',
      longDescription:
        'A full-stack hospital management system designed to streamline clinical workflows. The platform enables staff to manage patient admissions, schedule appointments, track medical records, and generate operational reports — all through a secure, role-based interface.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
      category: 'Full Stack',
      image: 'placeholder:hospital',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Role-based access control for doctors, nurses, and administrators',
        'Patient record management with search and filtering',
        'Appointment scheduling with conflict detection',
        'Dashboard analytics for hospital operations',
        'Secure authentication and session management',
      ],
      challenges: [
        'Designing a normalized database schema for complex medical relationships',
        'Implementing granular permissions without over-complicating the UI',
        'Ensuring data validation across multi-step patient intake forms',
      ],
      status: 'Completed',
    },
    {
      id: 'inventory-management',
      title: 'Inventory Management System',
      description:
        'Real-time inventory tracking with stock alerts, supplier management, and reporting.',
      longDescription:
        'An inventory management solution built for businesses that need real-time visibility into stock levels. The system tracks products across warehouses, automates low-stock alerts, and provides detailed reporting for procurement decisions.',
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
      id: 'authentication-api',
      title: 'Authentication API',
      description:
        'A secure REST API with JWT authentication, role management, and rate limiting.',
      longDescription:
        'A production-oriented authentication microservice providing user registration, login, token refresh, and role-based authorization. Built with security best practices including password hashing, rate limiting, and input validation.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt'],
      category: 'Backend',
      image: 'placeholder:auth',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'JWT access and refresh token flow',
        'Bcrypt password hashing with salt rounds',
        'Role-based authorization middleware',
        'Rate limiting on authentication endpoints',
        'Comprehensive input validation and error handling',
      ],
      challenges: [
        'Implementing secure token refresh without exposing vulnerabilities',
        'Designing middleware that composes cleanly across route groups',
        'Writing thorough API documentation for consumer teams',
      ],
      status: 'Completed',
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description:
        'A full-featured online store with product catalog, cart, checkout, and order management.',
      longDescription:
        'An end-to-end e-commerce platform enabling users to browse products, manage shopping carts, complete secure checkouts, and track orders. Admins can manage inventory, process orders, and view sales analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'Full Stack',
      image: 'placeholder:ecommerce',
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Product catalog with categories, search, and filters',
        'Persistent shopping cart with guest and authenticated sessions',
        'Secure checkout flow with payment integration',
        'Order tracking and email notifications',
        'Admin panel for inventory and order management',
      ],
      challenges: [
        'Managing cart state across authentication boundaries',
        'Implementing idempotent payment processing to prevent duplicate charges',
        'Optimizing product listing queries for large catalogs',
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
