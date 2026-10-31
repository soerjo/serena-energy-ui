import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useScrollReveal } from '@/hooks/useScrollReveal';

describe('useScrollReveal Hook', () => {
  it('executes safely without error', () => {
    const { result } = renderHook(() => useScrollReveal());
    expect(result.current).toBeUndefined();
  });
});
