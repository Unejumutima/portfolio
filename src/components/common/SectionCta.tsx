import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib';
import { useScrollToSection } from '@/hooks';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils';

interface SectionCtaProps {
  label: string;
  targetSection: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionCta({
  label,
  targetSection,
  align = 'left',
  className,
}: SectionCtaProps) {
  const { scrollTo } = useScrollToSection();

  return (
    <motion.div
      variants={fadeUp}
      className={cn(align === 'center' && 'flex justify-center', className)}
    >
      <Button variant="primary" onClick={() => scrollTo(targetSection)}>
        {label}
        <ArrowRight size={16} aria-hidden />
      </Button>
    </motion.div>
  );
}
