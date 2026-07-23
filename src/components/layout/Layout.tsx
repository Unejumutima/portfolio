import type { ReactNode } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { NoiseOverlay } from './NoiseOverlay';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollProgressBar } from './ScrollProgressBar';
import { CustomCursor } from './CustomCursor';
import { MouseSpotlight } from './MouseSpotlight';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-text">
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-text"
      >
        Skip to main content
      </a>

      {/* Global ambient layer */}
      <AnimatedBackground />
      <NoiseOverlay />
      <MouseSpotlight />

      {/* Top of page chrome */}
      <ScrollProgressBar />
      <Navigation />

      {/* Page content */}
      {children}
      <Footer />

      {/* Cursor — rendered last so it sits above everything */}
      <CustomCursor />
    </div>
  );
}
