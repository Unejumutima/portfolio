import { motion, type TargetAndTransition } from 'framer-motion';
import { useReducedMotion } from '@/hooks';
import { fadeRight } from '@/lib';
import { cn } from '@/utils';

// Floating tech chips that orbit the card
const TECH_CHIPS = [
  { label: 'React', color: 'from-[#f97316]/20 to-[#f97316]/5', border: 'border-[#f97316]/30', pos: 'top-[8%] -right-6 lg:-right-10', delay: 0 },
  { label: 'TypeScript', color: 'from-[#ea580c]/20 to-[#ea580c]/5', border: 'border-[#ea580c]/30', pos: 'top-[30%] -left-6 lg:-left-12', delay: 0.4 },
  { label: 'Node.js', color: 'from-[#fb923c]/20 to-[#fb923c]/5', border: 'border-[#fb923c]/30', pos: 'bottom-[28%] -right-4 lg:-right-12', delay: 0.8 },
  { label: 'Security', color: 'from-secondary/20 to-secondary/5', border: 'border-secondary/30', pos: 'bottom-[8%] -left-4 lg:-left-10', delay: 1.2 },
] as const;

interface FloatChipProps {
  label: string;
  color: string;
  border: string;
  pos: string;
  delay: number;
  reduced: boolean;
}

function FloatChip({ label, color, border, pos, delay, reduced }: FloatChipProps) {
  const floatAnim: TargetAndTransition = reduced
    ? {}
    : {
        y: [0, -8, 0],
        transition: { duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay },
      };

  return (
    <motion.div
      className={cn('absolute z-20', pos)}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay * 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={floatAnim}
        className={cn(
          'flex items-center gap-1.5 rounded-full border px-3 py-1.5',
          'backdrop-blur-md bg-gradient-to-r',
          color,
          border,
        )}
      >
        <span className={cn('h-1.5 w-1.5 rounded-full bg-gradient-to-r', color.replace('/20', '/80').replace('/5', '/40'))} aria-hidden="true" />
        <span className="whitespace-nowrap text-[11px] font-medium text-text">{label}</span>
      </motion.div>
    </motion.div>
  );
}

// Animated code lines inside the card
const CODE_LINES = [
  { width: 'w-28', color: 'bg-[#f97316]/60', label: 'import React' },
  { width: 'w-44', color: 'bg-white/15', label: '' },
  { width: 'w-36', color: 'bg-white/10', label: '' },
  { width: 'w-48', color: 'bg-[#fb923c]/45', label: 'function Hero' },
  { width: 'w-32', color: 'bg-white/12', label: '' },
  { width: 'w-24', color: 'bg-[#ea580c]/50', label: 'const data' },
  { width: 'w-40', color: 'bg-white/08', label: '' },
  { width: 'w-36', color: 'bg-white/10', label: '' },
  { width: 'w-20', color: 'bg-secondary/50', label: 'return' },
];

export function HeroIllustration() {
  const reduced = useReducedMotion();

  const mainFloat: TargetAndTransition = reduced
    ? {}
    : {
        y: [0, -10, 0],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      initial="hidden"
      animate="visible"
      variants={fadeRight}
    >
      {/* Floating tech chips */}
      {TECH_CHIPS.map((chip) => (
        <FloatChip key={chip.label} {...chip} reduced={reduced} />
      ))}

      {/* Main card */}
      <motion.div animate={mainFloat}>
        <div
          className={cn(
            'glass-card relative overflow-hidden',
            'shadow-[0_0_80px_rgba(249,115,22,0.1),0_0_40px_rgba(251,146,60,0.05)]',
          )}
        >
          {/* Gradient overlay inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" aria-hidden="true" />

          {/* Card top bar — macOS style */}
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[11px] font-mono text-text-secondary/50">portfolio.tsx</span>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] text-secondary/80 font-mono">running</span>
            </div>
          </div>

          {/* Code editor body */}
          <div className="p-6 font-mono" aria-hidden="true">
            {/* Line numbers + code bars */}
            <div className="space-y-3">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="w-4 shrink-0 text-right text-[11px] text-white/20 select-none">{i + 1}</span>
                  <div className={cn('h-2 rounded-sm', line.width, line.color)} />
                </motion.div>
              ))}
            </div>

            {/* Blinking cursor line */}
            <motion.div
              className="mt-3 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="w-4 shrink-0 text-right text-[11px] text-white/20">{CODE_LINES.length + 1}</span>
              <div
                className="h-4 w-2 rounded-sm bg-primary/80"
                style={{ animation: 'blink-cursor 1s step-end infinite' }}
              />
            </motion.div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-2.5">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-primary/70">TypeScript</span>
              <span className="text-[10px] font-mono text-text-secondary/40">UTF-8</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-secondary/70">✓ No errors</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ambient glow beneath the card */}
      <div
        className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-primary/15 blur-2xl"
        aria-hidden="true"
      />
    </motion.div>
  );
}
