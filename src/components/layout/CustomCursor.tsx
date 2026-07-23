import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from '@/hooks';

type CursorVariant = 'default' | 'hover' | 'click';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

/**
 * Premium custom cursor — desktop only.
 * Inner dot follows the pointer precisely; outer ring lags slightly for elegance.
 * Expands on interactive elements. Hidden on touch devices and when
 * prefers-reduced-motion is set.
 */
export function CustomCursor() {
  const reducedMotion = useReducedMotion();

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [variant, setVariant] = useState<CursorVariant>('default');
  const [visible, setVisible] = useState(false);

  // Smooth ring position using lerp
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
    ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Don't mount on touch devices
    if (window.matchMedia('(hover: none)').matches) return;
    if (reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnterInteractive = () => setVariant('hover');
    const onLeaveInteractive = () => setVariant('default');
    const onMouseDown = () => setVariant('click');
    const onMouseUp = () => setVariant('default');
    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    // Delegate interactive detection via bubbling
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE_SELECTOR)) {
        onEnterInteractive();
      } else {
        onLeaveInteractive();
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onLeaveWindow);
    document.documentElement.addEventListener('mouseenter', onEnterWindow);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
      document.documentElement.removeEventListener('mouseenter', onEnterWindow);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [animate, reducedMotion, visible]);

  // Don't render on touch devices (detected server-safe)
  if (reducedMotion) return null;

  const isHover = variant === 'hover';
  const isClick = variant === 'click';

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <div
          style={{
            width: isHover ? 10 : isClick ? 6 : 8,
            height: isHover ? 10 : isClick ? 6 : 8,
            background: isHover
              ? 'var(--color-secondary)'
              : 'var(--color-primary)',
            borderRadius: '50%',
            transition: 'width 0.2s, height 0.2s, background 0.2s',
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <div
          style={{
            width: isHover ? 48 : isClick ? 32 : 40,
            height: isHover ? 48 : isClick ? 32 : 40,
            border: `1.5px solid ${isHover ? 'rgba(251,146,60,0.6)' : 'rgba(249,115,22,0.5)'}`,
            borderRadius: '50%',
            transition: 'width 0.25s, height 0.25s, border-color 0.25s',
          }}
        />
      </div>
    </>
  );
}
