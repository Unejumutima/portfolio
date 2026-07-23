import { useState, useCallback, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { fadeUp } from '@/lib';
import { cn } from '@/utils';
import type { ContactFormData } from '@/types/contact';
import { ContactInput } from './ContactInput';

// ─── Validation ──────────────────────────────────────────────────────────────

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required.';
  } else if (data.subject.trim().length < 4) {
    errors.subject = 'Subject must be at least 4 characters.';
  } else if (data.subject.length > 120) {
    errors.subject = 'Subject must be 120 characters or fewer.';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  } else if (data.message.length > 2000) {
    errors.message = 'Message must be 2000 characters or fewer.';
  }

  return errors;
}

// ─── Simulated submission ─────────────────────────────────────────────────────
// Replace this function body with EmailJS / Formspree integration when ready.
async function submitContactForm(_data: ContactFormData): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 1800));
}

// ─── Component ───────────────────────────────────────────────────────────────

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const ContactForm = memo(function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      // Clear field error on change
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validation = validateForm(form);
      if (Object.keys(validation).length > 0) {
        setErrors(validation);
        return;
      }
      setErrors({});
      setIsSubmitting(true);
      try {
        await submitContactForm(form);
        setIsSuccess(true);
        setForm(INITIAL_FORM);
      } catch {
        setErrors({ message: 'Something went wrong. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    },
    [form],
  );

  if (isSuccess) {
    return (
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card flex flex-col items-center gap-6 p-8 text-center lg:p-12"
        role="status"
        aria-live="polite"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary"
        >
          <CheckCircle size={32} aria-hidden="true" />
        </motion.div>
        <div className="space-y-2">
          <h3 className="text-heading-md text-text">Message Sent!</h3>
          <p className="text-body-sm text-text-secondary">
            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="text-body-sm text-primary underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeUp} className="glass-card p-6 lg:p-8">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
        aria-label="Contact form"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <ContactInput
            as="input"
            id="contact-name"
            name="name"
            label="Full Name"
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            required
            maxLength={80}
            autoComplete="name"
          />
          <ContactInput
            as="input"
            id="contact-email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
            maxLength={120}
            autoComplete="email"
          />
        </div>

        <ContactInput
          as="input"
          id="contact-subject"
          name="subject"
          label="Subject"
          type="text"
          placeholder="Project Inquiry / Collaboration / Hiring"
          value={form.subject}
          onChange={handleChange}
          error={errors.subject}
          required
          maxLength={120}
        />

        <ContactInput
          as="textarea"
          id="contact-message"
          name="message"
          label="Message"
          placeholder="Tell me about your project, idea, or opportunity..."
          value={form.message}
          onChange={handleChange}
          error={errors.message}
          required
          rows={5}
          maxLength={2000}
        />

        {/* Character count for message */}
        <AnimatePresence>
          {form.message.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                'text-right text-caption',
                form.message.length > 1800 ? 'text-amber-400' : 'text-text-secondary/60',
              )}
              aria-live="polite"
            >
              {form.message.length} / 2000
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          transition={{ duration: 0.2 }}
          className={cn(
            'btn-animated btn-animated-primary w-full py-3.5',
            isSubmitting && 'cursor-not-allowed opacity-80',
          )}
          aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
        >
          <span className="relative z-10 inline-flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} aria-hidden="true" />
                Send Message
              </>
            )}
          </span>
        </motion.button>
      </form>
    </motion.div>
  );
});
