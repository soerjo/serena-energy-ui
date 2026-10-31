'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Produk & Spesifikasi', href: '/produk' },
  { label: 'Harga BBM', href: '/harga' },
  { label: 'Proyek Strategis', href: '/proyek' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-high shadow-sm">
      <div className="h-20 w-full px-gutter-lg flex items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-space-md">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/images/serena-logo.png"
              alt="Logo PT Serena Energy"
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-bold">
                SERENA<span className="text-primary-container">ENERGY</span>
              </span>
              <span className="font-label-sm text-label-sm text-secondary uppercase -mt-1">
                PT Serena Energi Unggul
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "relative py-space-sm font-label-lg text-label-lg text-primary-container font-bold transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary-container"
                      : 'py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors'
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-space-md">
            <a
              href="https://wa.me/62811842595?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20meminta%20penawaran%20resmi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-space-md py-space-xs h-10 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary transition-all"
            >
              Minta Penawaran
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
