import type { ReactNode } from 'react';
import { cn, SPACING } from '@/utils';

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function MaxWidthContainer({
  children,
  className,
  as: Component = 'div',
}: MaxWidthContainerProps) {
  return (
    <Component
      className={cn(
        'container-responsive',
        SPACING.container.maxWidth,
        SPACING.container.paddingX,
        'mx-auto w-full',
        className,
      )}
    >
      {children}
    </Component>
  );
}
