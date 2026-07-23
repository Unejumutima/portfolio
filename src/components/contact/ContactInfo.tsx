import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { fadeUp, staggerChildren } from '@/lib';
import { cn } from '@/utils';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/common/BrandIcons';
import type { ContactInfo as ContactInfoType, ContactSocialLink } from '@/types/contact';

const ICON_MAP: Record<string, LucideIcon> = {
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
};

// ─── Contact Info Items ───────────────────────────────────────────────────────

interface ContactInfoItemProps {
  item: ContactInfoType;
}

function ContactInfoItem({ item }: ContactInfoItemProps) {
  const Icon = ICON_MAP[item.icon] ?? Mail;
  const isExternal = item.href.startsWith('http');
  const isLink = item.href !== '#';

  const content = (
    <div className="flex items-start gap-4">
      <div
        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 text-primary"
        aria-hidden="true"
      >
        <Icon size={18} />
      </div>
      <div className="min-w-0 space-y-0.5">
        <p className="text-caption text-text-secondary/70 uppercase tracking-wider">{item.label}</p>
        <p className="text-body-sm font-medium text-text break-all">{item.value}</p>
      </div>
    </div>
  );

  if (!isLink) {
    return <div>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={`${item.label}: ${item.value}`}
      className="group block rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:opacity-80"
    >
      {content}
    </a>
  );
}

// ─── Social Links ─────────────────────────────────────────────────────────────

type SocialIconKey = 'github' | 'linkedin' | 'mail' | 'email-social' | 'twitter';

function SocialIconComponent({ icon, size = 18 }: { icon: string; size?: number }) {
  switch (icon as SocialIconKey) {
    case 'github':
      return <GitHubIcon className="h-[18px] w-[18px]" />;
    case 'linkedin':
      return <LinkedInIcon className="h-[18px] w-[18px]" />;
    case 'twitter':
      return <XIcon className="h-[18px] w-[18px]" />;
    default:
      return <Mail size={size} aria-hidden="true" />;
  }
}

interface SocialLinksProps {
  links: ContactSocialLink[];
}

function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3" role="list" aria-label="Social media links">
      {links.map((link) => (
        <motion.a
          key={link.id}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={link.label}
          role="listitem"
          whileHover={{ scale: 1.12, rotate: 6 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'social-glass',
            'hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]',
          )}
        >
          <SocialIconComponent icon={link.icon} />
        </motion.a>
      ))}
    </div>
  );
}

// ─── Availability Card ────────────────────────────────────────────────────────

interface AvailabilityCardProps {
  label: string;
}

function AvailabilityCard({ label }: AvailabilityCardProps) {
  return (
    <div
      className="glass-card flex items-center gap-3 px-5 py-4 border-secondary/20 shadow-[0_0_30px_rgba(251,146,60,0.08)]"
      role="status"
      aria-label={label}
    >
      <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary" />
      </span>
      <span className="text-body-sm font-medium text-secondary">{label}</span>
    </div>
  );
}

// ─── Main ContactInfo Component ───────────────────────────────────────────────

interface ContactInfoProps {
  title: string;
  description: string;
  contactInfo: ContactInfoType[];
  socialLinks: ContactSocialLink[];
  availability: { label: string };
}

export const ContactInfo = memo(function ContactInfo({
  title,
  description,
  contactInfo,
  socialLinks,
  availability,
}: ContactInfoProps) {
  return (
    <motion.div className="space-y-8" variants={staggerChildren}>
      <motion.div className="space-y-4" variants={fadeUp}>
        <h2 className="text-display-md">
          <span className="gradient-text">{title}</span>
        </h2>
        <p className="max-w-md text-body-md text-text-secondary">{description}</p>
      </motion.div>

      {/* Availability */}
      <motion.div variants={fadeUp}>
        <AvailabilityCard label={availability.label} />
      </motion.div>

      {/* Contact info items */}
      <motion.div
        className="space-y-5"
        variants={staggerChildren}
        role="list"
        aria-label="Contact information"
      >
        {contactInfo.map((item) => (
          <motion.div key={item.id} variants={fadeUp} role="listitem">
            <ContactInfoItem item={item} />
          </motion.div>
        ))}
      </motion.div>

      {/* Social links */}
      <motion.div className="space-y-3" variants={fadeUp}>
        <p className="text-caption text-text-secondary">Find me online</p>
        <SocialLinks links={socialLinks} />
      </motion.div>
    </motion.div>
  );
});
