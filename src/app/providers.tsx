'use client';

import React, { useEffect } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import { registerServiceWorker } from './service-worker';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return <CartProvider>{children}</CartProvider>;
} 