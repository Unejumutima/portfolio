import {
  Database,
  Layout,
  Server,
  Shield,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerChildren } from '@/lib';
import { TechnologyBadge } from '@/components/ui/TechnologyBadge';
import { cn } from '@/utils';
import type { SkillCategoryData } from '@/types';

const ICON_MAP: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
  shield: Shield,
  smartphone: Smartphone,
};

interface SkillCategoryCardProps {
  category: SkillCategoryData;
  className?: string;
}

export function SkillCategoryCard({ category, className }: SkillCategoryCardProps) {
  const Icon = ICON_MAP[category.icon];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'glass-card gradient-border group relative overflow-hidden p-6',
        'transition-all duration-300',
        'hover:border-primary/30 hover:shadow-[0_12px_48px_rgba(249,115,22,0.12)]',
        className,
      )}
    >
      {/* Top shimmer line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/8 blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative space-y-4">
        <div className="flex items-start gap-4">
          {Icon && (
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6"
              aria-hidden="true"
            >
              <Icon size={20} />
            </div>
          )}
          <div className="space-y-1">
            <h3 className="text-heading-sm">{category.title}</h3>
            <p className="text-body-sm text-text-secondary">{category.description}</p>
          </div>
        </div>

        <motion.div
          className="flex flex-wrap gap-2"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {category.technologies.map((tech) => (
            <TechnologyBadge key={tech.id} name={tech.name} />
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}
