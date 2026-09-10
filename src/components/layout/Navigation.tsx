import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SECTION_IDS } from '@/constants';
import { useScrollToSection, useIsMobile, useActiveSection } from '@/hooks';
import { slideInFromRight, navLinkHover } from '@/lib';
import { cn } from '@/utils';
import { MaxWidthContainer } from './MaxWidthContainer';
import { Button } from '@/components/ui/Button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollTo } = useScrollToSection();
  const isMobile = useIsMobile();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (sectionId: string) => {
      scrollTo(sectionId);
      setIsOpen(false);
    },
    [scrollTo],
  );

  const getNavLinkClass = (sectionId: string, isMobileLink = false) =>
    cn(
      'relative font-medium transition-colors focus-visible:outline-none',
      isMobileLink
        ? 'w-full rounded-lg px-4 py-3 text-left text-body-md'
        : 'text-body-sm',
      activeSection === sectionId
        ? 'text-text nav-link-active'
        : 'text-text-secondary hover:text-text',
      isMobileLink && activeSection === sectionId && 'bg-glass',
      isMobileLink && 'hover:bg-glass focus-visible:bg-glass',
    );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        isScrolled
          ? 'border-b border-glass-border bg-background/70 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <MaxWidthContainer>
        <nav
          className="flex h-16 items-center justify-between lg:h-20"
          aria-label="Main navigation"
        >
          <motion.button
            type="button"
            onClick={() => handleNavClick(SECTION_IDS.HOME)}
            className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Go to home section"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">
              IH
            </span>
            <span className="hidden text-label sm:inline">Ikirezi Honorine</span>
          </motion.button>

          <ul className="hidden items-center gap-8 lg:flex" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <motion.button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={getNavLinkClass(item.id)}
                  variants={navLinkHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </motion.button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              variant="primary"
              onClick={() => handleNavClick(SECTION_IDS.CONTACT)}
            >
              Let&apos;s Talk
            </Button>
          </div>

          <motion.button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <X size={22} aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <Menu size={22} aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </MaxWidthContainer>

      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideInFromRight}
              className="fixed inset-0 z-50 flex w-full flex-col glass-card border-0 p-6 lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-heading-sm">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Close menu"
                >
                  <X size={22} aria-hidden />
                </button>
              </div>

              <ul className="flex flex-col gap-2" role="list">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={getNavLinkClass(item.id, true)}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => handleNavClick(SECTION_IDS.CONTACT)}
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
