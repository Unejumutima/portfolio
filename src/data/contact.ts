import type { ContactContent, FooterContent } from '@/types/contact';
import { SECTION_IDS } from '@/constants';

export const CONTACT_DATA: ContactContent = {
  title: "Let's Build Something Great Together",
  subtitle: "Get in touch",
  description:
    "I'm always open to discussing new opportunities, exciting projects, and collaborations. Whether you have a project in mind or just want to connect, my inbox is open.",
  availability: {
    status: 'available',
    label: 'Available for Opportunities',
  },
  contactInfo: [
    {
      id: 'email',
      label: 'Email',
      value: 'hello@ikirezidev.com',
      href: 'mailto:hello@ikirezidev.com',
      icon: 'mail',
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+250 792 510 612',
      href: 'tel:+250792510612',
      icon: 'phone',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Gicumbi, Rwanda',
      href: '#',
      icon: 'map-pin',
    },
  ],
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      id: 'email-social',
      label: 'Email',
      href: 'mailto:hello@ikirezidev.com',
      icon: 'mail',
    },
    {
      id: 'twitter',
      label: 'X (Twitter)',
      href: 'https://x.com',
      icon: 'twitter',
    },
  ],
};

export const FOOTER_DATA: FooterContent = {
  name: 'Ikirezi Honorine',
  tagline: 'Full Stack Developer',
  description:
    'Building clean, performant, and secure web applications. Expanding into cybersecurity.',
  copyright: 'Ikirezi Honorine. All rights reserved.',
  quickLinks: [
    { id: 'home', label: 'Home', sectionId: SECTION_IDS.HOME },
    { id: 'about', label: 'About', sectionId: SECTION_IDS.ABOUT },
    { id: 'skills', label: 'Skills', sectionId: SECTION_IDS.SKILLS },
    { id: 'experience', label: 'Experience', sectionId: SECTION_IDS.EXPERIENCE },
    { id: 'projects', label: 'Projects', sectionId: SECTION_IDS.PROJECTS },
    { id: 'services', label: 'Services', sectionId: SECTION_IDS.SERVICES },
    {
      id: 'recommendations',
      label: 'Recommendations',
      sectionId: SECTION_IDS.RECOMMENDATIONS,
    },
    { id: 'contact', label: 'Contact', sectionId: SECTION_IDS.CONTACT },
  ],
};
