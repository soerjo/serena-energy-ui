'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ParallaxProvider({ children }: { children: React.ReactNode }) {
  useParallax();
  useScrollReveal();
  return <>{children}</>;
}
