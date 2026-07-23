import { SECTION_IDS, type SectionId } from '@/constants';

export function scrollToSection(
  sectionId: SectionId | string,
  options?: ScrollIntoViewOptions,
): void {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
  const element = document.getElementById(id);

  if (!element) {
    if (import.meta.env.DEV) {
      console.warn(`[scrollToSection] Section not found: ${id}`);
    }
    return;
  }

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    ...options,
  });
}

export function getSectionHref(sectionId: SectionId): string {
  return `#${sectionId}`;
}

export function isValidSectionId(id: string): id is SectionId {
  return Object.values(SECTION_IDS).includes(id as SectionId);
}
