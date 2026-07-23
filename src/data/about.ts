import type { AboutContent } from '@/types/about';
import { SECTION_IDS } from '@/constants';

export const ABOUT_DATA: AboutContent = {
  title: 'About Me',
  subtitle:
    'Passionate about building secure, scalable, and user-centered digital experiences.',
  introduction:
    'I am a Full Stack Developer who enjoys turning complex problems into elegant, reliable software solutions.',
  paragraphs: [
    'My journey in software engineering began with a curiosity about how things work behind the screen. That curiosity evolved into a deep passion for building applications that are not only functional, but thoughtfully designed and maintainable.',
    'I have a strong interest in backend systems — designing APIs, modeling data, and architecting services that scale. I enjoy the challenge of making systems efficient, secure, and resilient under real-world conditions.',
    'Learning is at the core of who I am. I constantly explore new technologies, refine my craft, and seek out better ways to write code. This mindset keeps my work fresh and my skills evolving.',
    'Currently, I am expanding my expertise into cybersecurity — studying secure coding practices, threat modeling, and defensive strategies. I believe the best developers understand not just how to build software, but how to protect it.',
    'Looking ahead, my goal is to bridge full stack development with security engineering — building applications that are robust, user-friendly, and secure by design.',
  ],
  cta: {
    label: 'Explore My Skills',
    targetSection: SECTION_IDS.SKILLS,
  },
  quickFacts: [
    {
      id: 'location',
      label: 'Location',
      value: 'Gicumbi, Rwanda',
      icon: 'map-pin',
    },
    {
      id: 'education',
      label: 'Education',
      value: 'Software programming and Embedded Systems',
      icon: 'graduation-cap',
    },
    {
      id: 'experience',
      label: 'Experience',
      value: '2+ Years',
      icon: 'briefcase',
    },
    {
      id: 'availability',
      label: 'Availability',
      value: 'Open to Opportunities',
      icon: 'circle-check',
    },
    {
      id: 'languages',
      label: 'Languages',
      value: 'English, Kinyarwanda, French',
      icon: 'languages',
    },
  ],
  statistics: [
    {
      id: 'projects',
      label: 'Projects Completed',
      value: 10,
      suffix: '+',
    },
    {
      id: 'technologies',
      label: 'Technologies Learned',
      value: 20,
      suffix: '+',
    },
    {
      id: 'years',
      label: 'Years Learning',
      value: 2,
      suffix: '+',
    },
  ],
};
