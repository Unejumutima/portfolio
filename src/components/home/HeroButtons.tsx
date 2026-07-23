import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { SECTION_IDS } from '@/constants';
import { useScrollToSection, useReducedMotion } from '@/hooks';
import { fadeUp } from '@/lib';
import { Button } from '@/components/ui/Button';

export function HeroButtons() {
  const { scrollTo } = useScrollToSection();
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="flex flex-wrap items-center gap-3 sm:gap-4"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <Button
          variant="primary"
          onClick={() => scrollTo(SECTION_IDS.PROJECTS)}
          aria-label="View my projects"
        >
          View Projects
          <motion.span
            aria-hidden="true"
            animate={reduced ? {} : { x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight size={15} />
          </motion.span>
        </Button>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button
          variant="secondary"
          onClick={() => scrollTo(SECTION_IDS.CONTACT)}
          aria-label="Contact me"
        >
          <Mail size={15} aria-hidden="true" />
          Contact Me
        </Button>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button
          variant="minimal"
          onClick={() => {
            /* CV download — wire up when asset is available */
          }}
          aria-label="Download CV"
        >
          <Download size={15} aria-hidden="true" />
          Download CV
        </Button>
      </motion.div>
    </motion.div>
  );
}
