import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useParallax } from '@/hooks/useParallax';

describe('useParallax Hook', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('runs parallax calculations on scroll with elements in viewport', () => {
    const el = document.createElement('div');
    el.setAttribute('data-parallax-speed', '0.2');
    el.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 100,
      bottom: 300,
      height: 200,
    });
    document.body.appendChild(el);

    const { unmount } = renderHook(() => useParallax());

    // Trigger scroll
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('resize'));

    expect(el.style.transform).toContain('translate3d');

    unmount();
  });

  it('handles default speed fallback when data-parallax-speed attribute is missing or empty', () => {
    const el = document.createElement('div');
    el.setAttribute('data-parallax-speed', '');
    el.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 50,
      bottom: 250,
      height: 200,
    });
    document.body.appendChild(el);

    const { unmount } = renderHook(() => useParallax());
    expect(el.style.transform).toContain('translate3d(0,');
    unmount();
  });

  it('bypasses calculation when element is outside viewport bounds', () => {
    const el = document.createElement('div');
    el.setAttribute('data-parallax-speed', '0.5');
    el.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 2000,
      bottom: 2500,
      height: 500,
    });
    document.body.appendChild(el);

    const { unmount } = renderHook(() => useParallax());
    expect(el.style.transform).toBe('');
    unmount();
  });

  it('respects prefers-reduced-motion media query', () => {
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
    el.setAttribute('data-parallax-speed', '0.2');
    document.body.appendChild(el);

    const { unmount } = renderHook(() => useParallax());
    expect(el.style.transform).toBe('');
    unmount();
  });
});
