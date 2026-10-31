import React from 'react';
import Header from '@/components/serena/Header';
import Footer from '@/components/serena/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#060A11] text-[#F8FAFC] flex flex-col font-inter">
      <Header />
      <main className="flex-1 w-full pt-20">{children}</main>
      <Footer />
    </div>
  );
}
