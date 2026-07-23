import { useState } from 'react';

const SESSION_KEY = 'portfolio_visited';

/**
 * Returns whether this is the first visit in the current browser session.
 * On first render: isFirstVisit = true. After calling markVisited(), it stays false.
 */
export function useHasVisited(): { isFirstVisit: boolean; markVisited: () => void } {
  const [isFirstVisit] = useState<boolean>(() => {
    if (typeof sessionStorage === 'undefined') return false;
    return !sessionStorage.getItem(SESSION_KEY);
  });

  const markVisited = () => {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(SESSION_KEY, '1');
    }
  };

  return { isFirstVisit, markVisited };
}
