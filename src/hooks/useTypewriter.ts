import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseTypewriterOptions {
  words: string[];
  /** ms per character when typing */
  typeSpeed?: number;
  /** ms per character when deleting */
  deleteSpeed?: number;
  /** ms to pause at full word before deleting */
  pauseAfterType?: number;
  /** ms to pause at empty string before next word */
  pauseAfterDelete?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseAfterType = 1800,
  pauseAfterDelete = 400,
}: UseTypewriterOptions): { text: string; isTyping: boolean } {
  const reduced = useReducedMotion();
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // With reduced motion just show words statically
    if (reduced) {
      setText(words[0] ?? '');
      return;
    }
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (isPaused) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typeSpeed);
      } else {
        // Finished typing — pause then start deleting
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, pauseAfterType);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting — pause then move to next word
        setIsPaused(true);
        timeout = setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setIsPaused(false);
          setIsTyping(true);
        }, pauseAfterDelete);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isTyping,
    isPaused,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pauseAfterType,
    pauseAfterDelete,
    reduced,
  ]);

  return { text, isTyping };
}
