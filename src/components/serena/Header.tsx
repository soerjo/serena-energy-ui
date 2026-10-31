'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Harga BBM', href: '/harga' },
  { label: 'Katalog Produk & Lab', href: '/produk' },
  { label: 'Rekam Jejak Proyek', href: '/proyek' },
  { label: 'Tentang Kami', href: '/tentang' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060A11]/90 backdrop-blur-md border-b border-[#38BDF8]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-[#0E7490] to-[#DC2626] flex items-center justify-center font-syne font-extrabold text-white text-xl tracking-wider shadow-lg shadow-[#0E7490]/20">
            SE
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-bold text-lg text-white tracking-wide group-hover:text-[#81D1F0] transition-colors">
              PT SERENA ENERGY
            </span>
            <span className="text-[10px] font-space tracking-widest text-[#94A3B8] uppercase">
              Mitra Resmi BBM Pertamina
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#81D1F0] bg-[#0E7490]/20 border border-[#0E7490]/40 font-semibold'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/628111928277?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20meminta%20penawaran%20resmi%20BBM%20Industri"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white text-xs font-space font-bold uppercase tracking-wider shadow-md shadow-[#DC2626]/30 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">request_quote</span>
            Minta Penawaran
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-[#94A3B8] hover:text-white hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#38BDF8]/15 bg-[#0D1320] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded text-base font-medium ${
                  isActive
                    ? 'text-[#81D1F0] bg-[#0E7490]/25 font-bold'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://wa.me/628111928277?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20meminta%20penawaran%20resmi%20BBM%20Industri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center block px-4 py-3 rounded bg-[#DC2626] text-white font-space font-bold text-xs uppercase tracking-wider"
            >
              Minta Penawaran Resmi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
