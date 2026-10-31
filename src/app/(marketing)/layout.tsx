import React from 'react';
import Header from '@/components/serena/Header';
import Footer from '@/components/serena/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col">
      <Header />
      <div className="flex-1 w-full pt-20">{children}</div>
      <Footer />
    </div>
  );
}
