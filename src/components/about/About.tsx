import { SECTION_IDS } from '@/constants';
import { ABOUT_DATA } from '@/data';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/lib';
import { SectionWrapper, MaxWidthContainer } from '@/components/layout';
import { SectionHeader, SectionBackground } from '@/components/common';
import { AboutIntro } from './AboutContent';
import { AboutQuickFacts } from './AboutQuickFacts';
import { AboutStats } from './AboutStats';
import { AboutCta } from './AboutCta';

export function About() {
  return (
    <SectionWrapper
      id={SECTION_IDS.ABOUT}
      ariaLabel="About"
      className="relative"
      animationVariant="fadeLeft"
    >
      <SectionBackground variant="default" />

      <MaxWidthContainer className="relative z-10">
        <motion.div
          className="space-y-12 lg:space-y-16"
          variants={staggerChildren}
        >
          <SectionHeader
            title={ABOUT_DATA.title}
            subtitle={ABOUT_DATA.subtitle}
          />

          <motion.div
            variants={fadeUp}
            className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className="space-y-8">
              <AboutIntro
                content={{
                  introduction: ABOUT_DATA.introduction,
                  paragraphs: ABOUT_DATA.paragraphs,
                }}
              />
              <AboutCta cta={ABOUT_DATA.cta} />
            </div>

            <AboutQuickFacts facts={ABOUT_DATA.quickFacts} />
          </motion.div>

          <motion.div variants={fadeUp}>
            <AboutStats statistics={ABOUT_DATA.statistics} />
          </motion.div>
        </motion.div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
