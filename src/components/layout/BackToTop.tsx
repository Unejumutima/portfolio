import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollToElement } from '@/lib/lenis';
import { cn } from '@/utils';

const SHOW_THRESHOLD = 400;

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SHOW_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const hero = document.getElementById('home');
    if (hero) {
      scrollToElement(hero, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -4, 0],
            transition: {
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              y: { delay: 0.3, duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
            },
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.25 } }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 30px rgba(249,115,22,0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'fixed bottom-8 right-6 z-50 sm:right-8',
            'flex h-12 w-12 items-center justify-center rounded-full',
            'glass-card border-primary/30',
            'text-text-secondary hover:text-primary',
            'shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
            'transition-colors duration-200',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          )}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
