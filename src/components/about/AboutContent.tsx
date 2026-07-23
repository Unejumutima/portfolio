import { motion } from 'framer-motion';
import { fadeUp } from '@/lib';
import { cn } from '@/utils';
import type { AboutContent } from '@/types';

interface AboutContentBlockProps {
  introduction: string;
  paragraphs: string[];
  className?: string;
}

export function AboutContentBlock({
  introduction,
  paragraphs,
  className,
}: AboutContentBlockProps) {
  return (
    <div className={cn('space-y-5', className)}>
      <motion.p
        className="text-body-lg font-medium text-text"
        variants={fadeUp}
      >
        {introduction}
      </motion.p>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-body-md text-text-secondary"
            variants={fadeUp}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

interface AboutIntroProps {
  content: Pick<AboutContent, 'introduction' | 'paragraphs'>;
}

export function AboutIntro({ content }: AboutIntroProps) {
  return (
    <AboutContentBlock
      introduction={content.introduction}
      paragraphs={content.paragraphs}
    />
  );
}
