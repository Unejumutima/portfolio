import type { RecommendationsContent } from '@/types/recommendations';

export const RECOMMENDATIONS_DATA: RecommendationsContent = {
  title: 'Recommendations',
  subtitle: 'What colleagues, mentors, and clients say.',
  recommendations: [
    {
      id: 'rec-01',
      name: 'Emmanuel BYIRINGIRO',
      role: 'Co-founder & CTO',
      company: 'Blink Technologiz',
      relationship: 'Temporary Employer',
      rating: 5,
      content:
        'Honorine is a motivated and curious young developer who demonstrated professionalism, teamwork, and a strong willingness to learn. She was committed to the project we worked on together, and I am confident she will continue to grow and achieve great things. What stood out most was their ability to translate design concepts into pixel-perfect, responsive implementations. A reliable and talented partner — I would work with them again without hesitation.',
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
      name: 'Olivier NIYONSHIMA',
      role: 'CTO',
      company: 'Zuba House',
      relationship: 'Internship Supervisor',
      rating: 5,
      content:
        'Honorine was a dedicated and hardworking Full-Stack Developer intern. She was eager to learn, responsible with her work, and always open to feedback. I was impressed by her professionalism and how she delivered clean and maintainable codes, and I confidently recommend her for future opportunities.',
    },
  ],
};
