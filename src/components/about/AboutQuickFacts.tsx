import {
  Briefcase,
  CircleCheck,
  GraduationCap,
  Languages,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib';
import { cn } from '@/utils';
import type { QuickFact } from '@/types';

const ICON_MAP: Record<string, LucideIcon> = {
  'map-pin': MapPin,
  'graduation-cap': GraduationCap,
  briefcase: Briefcase,
  'circle-check': CircleCheck,
  languages: Languages,
};

interface QuickFactCardProps {
  fact: QuickFact;
}

function QuickFactCard({ fact }: QuickFactCardProps) {
  const Icon = ICON_MAP[fact.icon];

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card gradient-border group flex items-start gap-4 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(249,115,22,0.1)]"
    >
      {Icon && (
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20"
          aria-hidden="true"
        >
          <Icon size={18} />
        </div>
      )}
      <div className="min-w-0 space-y-1">
        <p className="text-caption text-text-secondary">{fact.label}</p>
        <p className="text-label truncate">{fact.value}</p>
      </div>
    </motion.div>
  );
}

interface AboutQuickFactsProps {
  facts: QuickFact[];
  className?: string;
}

export function AboutQuickFacts({ facts, className }: AboutQuickFactsProps) {
  return (
    <div
      className={cn('grid gap-3 sm:grid-cols-2', className)}
      role="list"
      aria-label="Quick facts"
    >
      {facts.map((fact) => (
        <div key={fact.id} role="listitem">
          <QuickFactCard fact={fact} />
        </div>
      ))}
    </div>
  );
}
