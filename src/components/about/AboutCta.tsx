import type { AboutContent } from '@/types';
import { SectionCta } from '@/components/common/SectionCta';

interface AboutCtaProps {
  cta: AboutContent['cta'];
}

export function AboutCta({ cta }: AboutCtaProps) {
  return <SectionCta label={cta.label} targetSection={cta.targetSection} />;
}
