import { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeUp } from '@/lib';
import { cn } from '@/utils';
import type { Recommendation } from '@/types/recommendations';

interface RecommendationCardProps {
  recommendation: Recommendation;
  className?: string;
  isActive?: boolean;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          className={cn(
            'transition-colors',
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-transparent text-text-secondary/40',
          )}
        />
      ))}
    </div>
  );
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 text-sm font-semibold text-text ring-2 ring-primary/20"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export const RecommendationCard = memo(function RecommendationCard({
  recommendation,
  className,
  isActive = true,
}: RecommendationCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'glass-card gradient-border group relative flex h-full flex-col overflow-hidden p-6 lg:p-8',
        'transition-all duration-300',
        'hover:border-primary/30 hover:shadow-[0_16px_56px_rgba(249,115,22,0.14)]',
        !isActive && 'pointer-events-none opacity-60',
        className,
      )}
      aria-label={`Recommendation from ${recommendation.name}`}
    >
      {/* Gradient top line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-primary/8 to-secondary/5 blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-5">
        {/* Quote icon + rating */}
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Quote size={18} aria-hidden="true" />
          </div>
          <StarRating rating={recommendation.rating} />
        </div>

        {/* Recommendation text */}
        <blockquote className="flex-1">
          <p className="text-body-sm leading-relaxed text-text-secondary">
            &ldquo;{recommendation.content}&rdquo;
          </p>
        </blockquote>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" aria-hidden="true" />

        {/* Author info */}
        <footer className="flex items-center gap-4">
          <AvatarPlaceholder name={recommendation.name} />
          <div className="min-w-0">
            <p className="truncate text-label font-semibold text-text">
              {recommendation.name}
            </p>
            <p className="truncate text-caption text-text-secondary">
              {recommendation.role}
            </p>
            <p className="truncate text-caption text-primary/80">
              {recommendation.company}
            </p>
          </div>
        </footer>

        {/* Relationship badge */}
        <div className="w-fit rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1">
          <span className="text-caption font-medium text-secondary">
            {recommendation.relationship}
          </span>
        </div>
      </div>
    </motion.article>
  );
});
