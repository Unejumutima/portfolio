import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import type { ReactNode } from 'react';
import { SOCIAL_LINKS } from '@/constants';
import { useReducedMotion } from '@/hooks';
import { GitHubIcon, LinkedInIcon } from '@/components/common/BrandIcons';
import { cn } from '@/utils';

const ICON_MAP: Record<string, ReactNode> = {
  github: <GitHubIcon className="h-[18px] w-[18px]" />,
  linkedin: <LinkedInIcon className="h-[18px] w-[18px]" />,
  mail: <Mail size={18} aria-hidden />,
};

export function HeroSocialLinks() {
  const reduced = useReducedMotion();

  return (
    <div className="flex items-center gap-4" aria-label="Social media links">
      {/* Separator */}
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-glass-border" aria-hidden="true" />

      <div className="flex items-center gap-2.5" role="list">
        {SOCIAL_LINKS.map((link, i) => {
          const icon = ICON_MAP[link.icon];
          if (!icon) return null;

          return (
            <motion.a
              key={link.id}
              href={link.href}
              role="listitem"
              className={cn(
                'social-glass relative',
                'hover:text-primary hover:border-primary/40',
                'hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]',
              )}
              aria-label={link.label}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduced ? 0 : 0.8 + i * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduced ? {} : { scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          );
        })}
      </div>

      <span className="h-px w-8 bg-gradient-to-l from-transparent to-glass-border" aria-hidden="true" />
    </div>
  );
}
