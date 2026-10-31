import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { useScrollReveal } from '@/hooks/useScrollReveal';

describe('useScrollReveal Hook', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('observes .reveal-init elements and adds .revealed on intersect', () => {
    const el = document.createElement('div');
    el.className = 'reveal-init';
    document.body.appendChild(el);

    const { unmount } = renderHook(() => useScrollReveal());

    expect(el.classList.contains('revealed')).toBe(true);

    unmount();
  });

  it('handles non-intersecting observer branch', () => {
    const el = document.createElement('div');
    el.className = 'reveal-init';
    document.body.appendChild(el);

    const originalDesc = Object.getOwnPropertyDescriptor(window, 'IntersectionObserver');

    class NonIntersectingObserver {
      constructor(private cb: IntersectionObserverCallback) {}
      observe(target: Element) {
        this.cb(
          [{ target, isIntersecting: false } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        );
      }
      unobserve() {}
      disconnect() {}
    }

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: NonIntersectingObserver,
    });

    renderHook(() => useScrollReveal());
    expect(el.classList.contains('revealed')).toBe(false);

    if (originalDesc) {
      Object.defineProperty(window, 'IntersectionObserver', originalDesc);
    }
  });

  it('immediately reveals elements when prefers-reduced-motion is enabled', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const el = document.createElement('div');
    el.className = 'reveal-init';
    document.body.appendChild(el);

    renderHook(() => useScrollReveal());
    expect(el.classList.contains('revealed')).toBe(true);
  });
});
