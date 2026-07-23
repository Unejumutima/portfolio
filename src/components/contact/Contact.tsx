import { motion } from 'framer-motion';
import { staggerChildren } from '@/lib';
import { SECTION_IDS } from '@/constants';
import { CONTACT_DATA } from '@/data';
import { SectionWrapper, MaxWidthContainer } from '@/components/layout';
import { SectionBackground } from '@/components/common';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
  const { title, description, contactInfo, socialLinks, availability } =
    CONTACT_DATA;

  return (
    <SectionWrapper
      id={SECTION_IDS.CONTACT}
      ariaLabel="Contact"
      className="relative"
      animationVariant="fadeLeft"
    >
      <SectionBackground variant="experience" />

      <MaxWidthContainer className="relative z-10">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24"
          variants={staggerChildren}
        >
          {/* Left column — info */}
          <ContactInfo
            title={title}
            description={description}
            contactInfo={contactInfo}
            socialLinks={socialLinks}
            availability={availability}
          />

          {/* Right column — form */}
          <div className="flex flex-col justify-center">
            <ContactForm />
          </div>
        </motion.div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
