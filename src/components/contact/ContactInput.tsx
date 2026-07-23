import { memo, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils';

interface BaseFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
}

type InputFieldProps = BaseFieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: 'input';
  };

type TextareaFieldProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: 'textarea';
    rows?: number;
  };

type ContactInputProps = InputFieldProps | TextareaFieldProps;

const fieldBase = cn(
  'w-full rounded-xl border border-glass-border bg-white/[0.05] px-4 py-3.5',
  'text-body-sm text-text placeholder:text-text-secondary/50',
  'backdrop-blur-sm',
  'transition-all duration-300',
  'focus:outline-none focus:border-primary/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.12)]',
  'disabled:opacity-50 disabled:cursor-not-allowed',
);

const errorBase = 'border-red-500/60 focus:border-red-500/80 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]';

export const ContactInput = memo(function ContactInput(props: ContactInputProps) {
  const { id, label, error, className, as, ...rest } = props;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className="text-label text-text-secondary"
      >
        {label}
        {rest.required && (
          <span className="ml-1 text-primary" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          className={cn(fieldBase, error && errorBase, 'resize-none')}
          rows={(rest as TextareaHTMLAttributes<HTMLTextAreaElement>).rows ?? 5}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={cn(fieldBase, error && errorBase)}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-caption text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});
