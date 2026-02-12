'use client';

import { useEffect, useCallback, useRef } from 'react';

/**
 * Hook to manage focus trap within a container
 * Useful for modals, dialogs, and dropdowns
 */
export function useFocusTrap(isActive: boolean = true) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  return containerRef;
}

/**
 * Hook to handle escape key press
 */
export function useEscapeKey(callback: () => void, isActive: boolean = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [callback, isActive]);
}

/**
 * Hook to announce messages to screen readers
 */
export function useAnnounce() {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  return announce;
}

/**
 * Hook to manage reduced motion preference
 */
export function useReducedMotion() {
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion.current;
}

/**
 * Hook to handle keyboard navigation within a list
 */
export function useArrowNavigation(
  itemCount: number,
  onSelect: (index: number) => void,
  options: { loop?: boolean; orientation?: 'vertical' | 'horizontal' } = {}
) {
  const { loop = true, orientation = 'vertical' } = options;
  const currentIndex = useRef(0);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

      if (e.key === prevKey) {
        e.preventDefault();
        if (currentIndex.current > 0) {
          currentIndex.current--;
        } else if (loop) {
          currentIndex.current = itemCount - 1;
        }
        onSelect(currentIndex.current);
      } else if (e.key === nextKey) {
        e.preventDefault();
        if (currentIndex.current < itemCount - 1) {
          currentIndex.current++;
        } else if (loop) {
          currentIndex.current = 0;
        }
        onSelect(currentIndex.current);
      } else if (e.key === 'Home') {
        e.preventDefault();
        currentIndex.current = 0;
        onSelect(currentIndex.current);
      } else if (e.key === 'End') {
        e.preventDefault();
        currentIndex.current = itemCount - 1;
        onSelect(currentIndex.current);
      }
    },
    [itemCount, onSelect, loop, orientation]
  );

  return { handleKeyDown, setCurrentIndex: (i: number) => (currentIndex.current = i) };
}

export default useFocusTrap;
