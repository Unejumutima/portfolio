import { motion } from 'framer-motion';
import { HERO_CONTENT } from '@/constants';
import { useTypewriter, useReducedMotion } from '@/hooks';
import { fadeUp, staggerChildren } from '@/lib';
import { HeroButtons } from './HeroButtons';
import { HeroSocialLinks } from './HeroSocialLinks';

const ROLES = [
  'Full Stack Developer',
  'Frontend Engineer',
  'Backend Engineer',
  'Security-Minded Builder',
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Staggered letter reveal for the name
const NAME_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const LETTER = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

function AnimatedName({ name }: { name: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className="gradient-text block text-display-xl font-bold tracking-tight lg:text-[clamp(3.5rem,6vw,5.5rem)]">
        {name}
      </span>
    );
  }

  return (
    <motion.span
      className="block overflow-hidden"
      variants={NAME_CONTAINER}
      aria-label={name}
    >
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={LETTER}
          aria-hidden="true"
          className="inline-block gradient-text font-bold tracking-tight"
          style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function TypewriterRole() {
  const { text, isTyping } = useTypewriter({ words: ROLES });

  return (
    <span className="inline-flex items-center gap-1">
      <span className="gradient-text-primary font-semibold">{text}</span>
      <span
        className="inline-block h-[1em] w-[2px] rounded-full bg-primary align-middle"
        style={{
          animation: isTyping ? 'none' : 'blink-cursor 0.85s step-end infinite',
          opacity: isTyping ? 1 : undefined,
        }}
        aria-hidden="true"
      />
    </span>
  );
}

export function HeroContent() {
  return (
    <motion.div
      className="flex flex-col gap-5 md:gap-7"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      {/* Greeting badge */}
      <motion.div variants={fadeUp}>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-secondary"
            aria-hidden="true"
            style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
          <span className="text-caption font-medium tracking-widest text-text-secondary uppercase">
            {HERO_CONTENT.greeting}
          </span>
        </span>
      </motion.div>

      {/* Name — large typographic reveal */}
      <div className="space-y-1">
        <motion.div variants={fadeUp}>
          <AnimatedName name={HERO_CONTENT.name} />
        </motion.div>

        {/* Last name / surname line with decorative accent */}
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span
            className="text-[clamp(1.4rem,2.8vw,2.4rem)] font-semibold tracking-tight text-text/70"
          >
            Ikirezi
          </span>
          <span
            className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-primary/50 to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Role typewriter */}
      <motion.p
        variants={fadeUp}
        className="text-[clamp(1rem,2vw,1.25rem)] text-text-secondary"
        aria-live="polite"
        aria-label={`Role: ${ROLES[0]}`}
      >
        <TypewriterRole />
      </motion.p>

      {/* Subtitle */}
      <motion.p
        className="max-w-xl text-body-lg text-text-secondary leading-relaxed"
        variants={fadeUp}
      >
        {HERO_CONTENT.subtitle}
      </motion.p>

      {/* Description with subtle left accent */}
      <motion.div variants={fadeUp} className="flex items-start gap-3">
        <span
          className="mt-1.5 h-full w-px min-h-[40px] shrink-0 rounded-full bg-gradient-to-b from-primary/60 to-transparent"
          aria-hidden="true"
        />
        <p className="text-body-sm text-text-secondary/80 leading-relaxed">
          {HERO_CONTENT.description}
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={fadeUp}>
        <HeroButtons />
      </motion.div>

      {/* Social links */}
      <motion.div variants={fadeUp}>
        <HeroSocialLinks />
      </motion.div>
    </motion.div>
  );
}
