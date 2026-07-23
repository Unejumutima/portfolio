import {
  useState,
  useEffect,
  useCallback,
  useRef,
  memo,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils';
import type { Recommendation } from '@/types/recommendations';
import { RecommendationCard } from './RecommendationCard';

interface RecommendationsCarouselProps {
  recommendations: Recommendation[];
}

const SLIDE_INTERVAL = 5000;

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: EASE,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.35,
      ease: EASE,
    },
  }),
};

export const RecommendationsCarousel = memo(function RecommendationsCarousel({
  recommendations,
}: RecommendationsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStart = useRef<number | null>(null);
  const total = recommendations.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) => (prev + newDirection + total) % total);
    },
    [total],
  );

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => paginate(1), SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, paginate]);

  // Swipe support
  const handleDragStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    const clientX =
      'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    dragStart.current = clientX;
  }, []);

  const handleDragEnd = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (dragStart.current === null) return;
      const clientX =
        'changedTouches' in e
          ? e.changedTouches[0].clientX
          : (e as React.MouseEvent).clientX;
      const diff = dragStart.current - clientX;
      if (Math.abs(diff) > 40) {
        paginate(diff > 0 ? 1 : -1);
      }
      dragStart.current = null;
    },
    [paginate],
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel container */}
      <div
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        role="region"
        aria-label="Testimonials carousel"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 60) {
                paginate(info.offset.x < 0 ? 1 : -1);
              }
            }}
          >
            <RecommendationCard recommendation={recommendations[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous recommendation"
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full',
            'glass-card border-glass-border text-text-secondary',
            'transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          )}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Carousel navigation">
          {recommendations.map((rec, i) => (
            <button
              key={rec.id}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to recommendation ${i + 1}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={cn(
                'rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                i === current
                  ? 'h-2.5 w-8 bg-primary shadow-[0_0_12px_rgba(249,115,22,0.5)]'
                  : 'h-2.5 w-2.5 bg-glass-border hover:bg-text-secondary',
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next recommendation"
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full',
            'glass-card border-glass-border text-text-secondary',
            'transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          )}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
});
