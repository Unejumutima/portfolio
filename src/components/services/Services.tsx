import { SECTION_IDS } from '@/constants';
import { SERVICES_DATA } from '@/data';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/lib';
import { SectionWrapper, MaxWidthContainer } from '@/components/layout';
import { SectionHeader, SectionBackground, SectionCta } from '@/components/common';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <SectionWrapper
      id={SECTION_IDS.SERVICES}
      ariaLabel="Services"
      className="relative"
      animationVariant="fadeUp"
    >
      <SectionBackground variant="services" />

      <MaxWidthContainer className="relative z-10">
        <motion.div
          className="space-y-12 lg:space-y-16"
          variants={staggerChildren}
        >
          <SectionHeader
            title={SERVICES_DATA.title}
            subtitle={SERVICES_DATA.subtitle}
            description={SERVICES_DATA.description}
            align="center"
          />

          <motion.div
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            role="list"
            aria-label="Services offered"
          >
            {SERVICES_DATA.services.map((service) => (
              <div key={service.id} role="listitem">
                <ServiceCard service={service} />
              </div>
            ))}
          </motion.div>

          <SectionCta
            label={SERVICES_DATA.cta.label}
            targetSection={SERVICES_DATA.cta.targetSection}
            align="center"
          />
        </motion.div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
