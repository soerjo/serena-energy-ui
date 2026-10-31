'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';

export default function ParallaxProvider({ children }: { children: React.ReactNode }) {
  useParallax();
  return <>{children}</>;
}
