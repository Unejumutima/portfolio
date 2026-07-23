import { SECTION_IDS } from '@/constants';
import { SKILLS_DATA } from '@/data';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/lib';
import { SectionWrapper, MaxWidthContainer } from '@/components/layout';
import { SectionHeader, SectionBackground } from '@/components/common';
import { SkillCategoryCard } from './SkillCategoryCard';

export function Skills() {
  return (
    <SectionWrapper
      id={SECTION_IDS.SKILLS}
      ariaLabel="Skills"
      className="relative"
      animationVariant="scale"
    >
      <SectionBackground variant="skills" />

      <MaxWidthContainer className="relative z-10">
        <motion.div
          className="space-y-12 lg:space-y-16"
          variants={staggerChildren}
        >
          <SectionHeader
            title={SKILLS_DATA.title}
            subtitle={SKILLS_DATA.subtitle}
            description={SKILLS_DATA.description}
            align="center"
          />

          <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {SKILLS_DATA.categories.map((category) => (
              <SkillCategoryCard
                key={category.id}
                category={category}
              />
            ))}
          </motion.div>
        </motion.div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
