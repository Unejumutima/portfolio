import type { ReactNode } from 'react';
import { cn } from '@/utils';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('relative z-10 flex min-h-screen flex-col', className)}>
      {children}
    </div>
  );
}
