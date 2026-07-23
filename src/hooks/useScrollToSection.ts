import { useCallback } from 'react';
import type { SectionId } from '@/constants';
import { scrollToElement } from '@/lib/lenis';
import { scrollToSection } from '@/utils';

interface ScrollToSectionOptions {
  offset?: number;
  duration?: number;
}

export function useScrollToSection() {
  const scrollTo = useCallback(
    (sectionId: SectionId | string, options?: ScrollToSectionOptions) => {
      const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
      const element = document.getElementById(id);

      if (element) {
        scrollToElement(element, options);
        return;
      }

      scrollToSection(id, { behavior: 'smooth', block: 'start' });
    },
    [],
  );

  return { scrollTo };
}
