import { useEffect, useState } from 'react';
import { NAV_ITEMS, SECTION_IDS, type SectionId } from '@/constants';

const DEFAULT_ROOT_MARGIN = '-45% 0px -45% 0px';
const DEFAULT_SECTION_IDS = NAV_ITEMS.map((item) => item.id as SectionId);

export function useActiveSection(
  sectionIds: SectionId[] = DEFAULT_SECTION_IDS,
): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(SECTION_IDS.HOME);

  useEffect(() => {
    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size === 0) return;

        const sorted = [...visibleSections.values()].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        );

        const topEntry = sorted[0];
        if (topEntry?.target.id) {
          setActiveSection(topEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: DEFAULT_ROOT_MARGIN,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
