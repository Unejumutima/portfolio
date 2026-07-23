import { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FOOTER_DATA, CONTACT_DATA } from '@/data';
import { useScrollToSection } from '@/hooks';
import { fadeUp, staggerChildren } from '@/lib';
import { useSectionReveal } from '@/hooks';
import { cn } from '@/utils';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/common/BrandIcons';
import { MaxWidthContainer } from './MaxWidthContainer';
import { BackToTop } from './BackToTop';

type SocialIconKey = 'github' | 'linkedin' | 'mail' | 'email-social' | 'twitter';

function FooterSocialIcon({ icon, size = 16 }: { icon: string; size?: number }) {
  switch (icon as SocialIconKey) {
    case 'github':
      return <GitHubIcon className="h-4 w-4" />;
    case 'linkedin':
      return <LinkedInIcon className="h-4 w-4" />;
    case 'twitter':
      return <XIcon className="h-4 w-4" />;
    default:
      return <Mail size={size} aria-hidden="true" />;
  }
}

export const Footer = memo(function Footer() {
  const { scrollTo } = useScrollToSection();
  const { ref, inView } = useSectionReveal({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();
  const { name, tagline, description, quickLinks, copyright } = FOOTER_DATA;
  const { socialLinks } = CONTACT_DATA;

  return (
    <>
      <BackToTop />

      <motion.footer
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerChildren}
        className="relative z-10 overflow-hidden border-t border-glass-border bg-background/60 backdrop-blur-xl"
        aria-label="Site footer"
      >
        {/* Subtle top glow */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          aria-hidden="true"
        />

        {/* Background name watermark */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
          aria-hidden="true"
        >
          <span
            className="whitespace-nowrap font-display font-bold leading-none tracking-tighter"
            style={{
              fontSize: 'clamp(4.5rem, 16vw, 13rem)',
              background: 'linear-gradient(135deg, rgba(249,115,22,0.07) 0%, rgba(255,255,255,0.04) 50%, rgba(249,115,22,0.06) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Ikirezi Honorine
          </span>
        </div>

        <MaxWidthContainer>
          <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Brand column */}
            <motion.div
              variants={fadeUp}
              className="space-y-4 lg:col-span-2"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">
                  IH
                </span>
                <span className="text-heading-sm">{name}</span>
              </div>
              <p className="text-caption text-primary/80 uppercase tracking-wider">{tagline}</p>
              <p className="max-w-xs text-body-sm text-text-secondary leading-relaxed">
                {description}
              </p>

              {/* Social icons */}
              <nav aria-label="Social media links">
                <ul className="flex items-center gap-3 pt-1" role="list">
                  {socialLinks.map((link) => {
                    return (
                      <li key={link.id}>
                        <motion.a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={
                            link.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          aria-label={link.label}
                          whileHover={{ scale: 1.12, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={cn(
                            'social-glass',
                            'hover:text-primary hover:border-primary/40 hover:shadow-[0_0_16px_rgba(249,115,22,0.25)]',
                          )}
                        >
                          <FooterSocialIcon icon={link.icon} />
                        </motion.a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="text-label text-text">Quick Links</h3>
              <nav aria-label="Footer quick links">
                <ul className="space-y-2.5" role="list">
                  {quickLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(link.sectionId)}
                        className={cn(
                          'group relative text-body-sm text-text-secondary',
                          'transition-colors duration-200 hover:text-text',
                          'focus-visible:text-text focus-visible:outline-none',
                          'inline-flex items-center gap-1',
                        )}
                      >
                        <span
                          className="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"
                          aria-hidden="true"
                        />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Contact snippet */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="text-label text-text">Get in Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:hello@ikirezidev.com"
                  className="block text-body-sm text-text-secondary transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                  aria-label="Send email"
                >
                  hello@ikirezidev.com
                </a>
                <p className="text-body-sm text-text-secondary">Gicumbi, Rwanda</p>

                {/* Availability badge */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                  </span>
                  <span className="text-caption text-secondary">Available for work</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-between gap-4 border-t border-glass-border py-6 sm:flex-row"
          >
            <p className="text-caption text-text-secondary">
              &copy; {currentYear} {copyright}
            </p>
            <p className="text-caption text-text-secondary/60">
              Designed &amp; built with care.
            </p>
          </motion.div>
        </MaxWidthContainer>
      </motion.footer>
    </>
  );
});
