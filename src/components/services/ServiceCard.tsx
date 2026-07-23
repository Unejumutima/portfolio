import {
  Database,
  Layout,
  Server,
  ShieldCheck,
  Smartphone,
  TabletSmartphone,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib';
import { cn } from '@/utils';
import type { ServiceItem } from '@/types';

const ICON_MAP: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  workflow: Workflow,
  database: Database,
  smartphone: Smartphone,
  'tablet-smartphone': TabletSmartphone,
  'shield-check': ShieldCheck,
};

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'glass-card gradient-border group relative overflow-hidden p-6',
        'transition-all duration-300',
        'hover:border-primary/30 hover:shadow-[0_12px_48px_rgba(249,115,22,0.12)]',
        className,
      )}
      aria-label={service.title}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-2xl opacity-50 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative space-y-4">
        {Icon && (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:from-primary/20 group-hover:to-secondary/15"
            aria-hidden="true"
          >
            <Icon size={22} />
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-heading-sm">{service.title}</h3>
          <p className="text-body-sm text-text-secondary">{service.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
