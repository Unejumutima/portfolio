import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'minimal' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  default: 'btn-animated',
  primary: 'btn-animated btn-animated-primary',
  secondary: 'btn-animated-secondary',
  minimal: 'btn-animated-minimal',
  ghost:
    'inline-flex items-center justify-center gap-2 px-4 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:text-text focus-visible:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
};

export function Button({
  children,
  variant = 'default',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
