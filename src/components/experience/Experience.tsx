import { SECTION_IDS } from '@/constants';
import { EXPERIENCE_DATA } from '@/data';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/lib';
import { SectionWrapper, MaxWidthContainer } from '@/components/layout';
import { SectionHeader, SectionBackground } from '@/components/common';
import { ExperienceTimeline } from './ExperienceTimeline';

export function Experience() {
  return (
    <SectionWrapper
      id={SECTION_IDS.EXPERIENCE}
      ariaLabel="Experience"
      className="relative"
      animationVariant="fadeRight"
    >
      <SectionBackground variant="experience" />

      <MaxWidthContainer className="relative z-10">
        <motion.div
          className="space-y-12 lg:space-y-16"
          variants={staggerChildren}
        >
          <SectionHeader
            title={EXPERIENCE_DATA.title}
            subtitle={EXPERIENCE_DATA.subtitle}
            description={EXPERIENCE_DATA.description}
          />

          <motion.div variants={fadeUp}>
            <ExperienceTimeline items={EXPERIENCE_DATA.items} />
          </motion.div>
        </motion.div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
