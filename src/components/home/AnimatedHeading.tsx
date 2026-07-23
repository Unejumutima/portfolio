import { motion } from 'framer-motion';
import { letterReveal, letterRevealContainer } from '@/lib';
import { cn } from '@/utils';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  gradientFrom?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

export function AnimatedHeading({
  text,
  className,
  gradientFrom,
  as: Component = 'h1',
}: AnimatedHeadingProps) {
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <Component className={className}>
      <motion.span
        className="inline-flex flex-wrap"
        variants={letterRevealContainer}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {words.map((word, wordIndex) => {
          const wordStartIndex = charIndex;
          charIndex += word.length + 1;

          return (
            <span key={`${word}-${wordIndex}`} className="inline-flex whitespace-pre">
              {word.split('').map((char, index) => {
                const globalIndex = wordStartIndex + index;
                const useGradient =
                  gradientFrom !== undefined && globalIndex >= gradientFrom;

                return (
                  <motion.span
                    key={`${char}-${globalIndex}`}
                    variants={letterReveal}
                    className={cn(useGradient && 'gradient-text')}
                    aria-hidden="true"
                  >
                    {char}
                  </motion.span>
                );
              })}
              {wordIndex < words.length - 1 && (
                <motion.span variants={letterReveal} aria-hidden="true">
                  {' '}
                </motion.span>
              )}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
