import { SECTION_IDS } from '@/constants';
import { MaxWidthContainer } from '@/components/layout';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroIllustration } from './HeroIllustration';
import { HeroScrollIndicator } from './HeroScrollIndicator';

export function Hero() {
  return (
    <section
      id={SECTION_IDS.HOME}
      aria-label="Home"
      className="relative flex min-h-screen flex-col scroll-mt-24"
    >
      <HeroBackground />

      <MaxWidthContainer className="relative z-10 flex flex-1 items-center pb-32 pt-28 lg:pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20 xl:gap-28">
          <HeroContent />
          <HeroIllustration />
        </div>
      </MaxWidthContainer>

      <HeroScrollIndicator />

      {/* Bottom gradient fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
