import type { RecommendationsContent } from '@/types/recommendations';

export const RECOMMENDATIONS_DATA: RecommendationsContent = {
  title: 'Recommendations',
  subtitle: 'What colleagues, mentors, and clients say.',
  recommendations: [
    {
      id: 'rec-01',
      name: 'Emmanuel BYIRINGIRO',
      role: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      relationship: 'Internship Supervisor',
      rating: 5,
      content:
        'Honorine is a motivated and curious young developer who demonstrated professionalism, teamwork, and a strong willingness to learn. She was committed to the project we worked on together, and I am confident she will continue to grow and achieve great things.',
    },
    {
      id: 'rec-02',
      name: 'Nora INEZA MUGISHA',
      role: 'Full Stack Developer',
      company: 'Freelance / Independent',
      relationship: 'Colleague',
      rating: 5,
      content:
        "I had the pleasure of collaborating on a client project and was genuinely impressed by the quality of work and communication throughout. They brought strong frontend skills, thoughtful architecture decisions, and a real commitment to accessibility and performance. What stood out most was their ability to translate design concepts into pixel-perfect, responsive implementations. A reliable and talented partner — I'd work with them again without hesitation.",
    },
    {
      id: 'rec-03',
      name: 'Dr. Casey Nguyen',
      role: 'Associate Professor, Computer Science',
      company: 'University of Technology',
      relationship: 'Academic Mentor',
      rating: 5,
      content:
        'As an academic mentor, I have had the privilege of watching this student grow into a highly capable developer. Their approach to problem-solving is analytical and methodical, and they bring a genuine curiosity to everything they work on. Their final project — a full-stack web application with a focus on security — was among the best I have reviewed. With their combination of technical skill, work ethic, and professional attitude, I am confident they will excel in any engineering role.',
    },
  ],
};
