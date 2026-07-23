import { motion } from 'framer-motion';
import { staggerChildren } from '@/lib';
import { SECTION_IDS } from '@/constants';
import { RECOMMENDATIONS_DATA } from '@/data';
import { SectionWrapper, MaxWidthContainer } from '@/components/layout';
import { SectionHeader, SectionBackground } from '@/components/common';
import { RecommendationsCarousel } from './RecommendationsCarousel';
import { RecommendationCard } from './RecommendationCard';

export function Recommendations() {
  const { title, subtitle, recommendations } = RECOMMENDATIONS_DATA;

  return (
    <SectionWrapper
      id={SECTION_IDS.RECOMMENDATIONS}
      ariaLabel="Recommendations"
      className="relative"
      animationVariant="scale"
    >
      <SectionBackground variant="default" />

      <MaxWidthContainer className="relative z-10">
        <motion.div
          className="space-y-12 lg:space-y-16"
          variants={staggerChildren}
        >
          <SectionHeader
            title={title}
            subtitle={subtitle}
            align="center"
          />

          {/* Mobile / Tablet: carousel (< lg) */}
          <div className="lg:hidden">
            <RecommendationsCarousel recommendations={recommendations} />
          </div>

          {/* Desktop: static 3-column grid (≥ lg) */}
          <motion.div
            className="hidden gap-6 lg:grid lg:grid-cols-3"
            role="list"
            aria-label="Recommendations"
          >
            {recommendations.map((rec) => (
              <div key={rec.id} role="listitem">
                <RecommendationCard recommendation={rec} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
