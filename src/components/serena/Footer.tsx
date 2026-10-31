'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface">
      <div className="w-full px-gutter-lg py-margin-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-lg">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-lowest text-primary-container shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
                <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">SERENA</span>
                  <span className="font-headline-sm text-headline-sm tracking-tight text-primary-container">
                    ENERGY
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary uppercase">PT Serena Energi Unggul</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Penyedia pasokan dan armada logistik bahan bakar minyak (BBM) industri resmi terpercaya untuk sektor
              manufaktur, maritim, dan pertambangan di seluruh Indonesia.
            </p>
            <div className="flex items-center gap-space-sm">
              <span className="flex items-center gap-1.5 py-1 px-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px] text-primary-container">verified</span>
                Mitra Resmi Pertamina
              </span>
              <span className="flex items-center gap-1.5 py-1 px-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px] text-secondary">security</span>
                Izin Migas Lengkap
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wider mb-2">
              Navigasi
            </span>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="/"
            >
              Beranda
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="/tentang"
            >
              Tentang Kami
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="/produk"
            >
              Produk &amp; Spesifikasi
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="/harga"
            >
              Harga BBM
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              href="/proyek"
            >
              Proyek Strategis
            </Link>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wider mb-2">
              Layanan &amp; Produk
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">Biosolar B35 / B40 Industri</span>
            <span className="font-body-md text-body-md text-on-surface-variant">High Speed Diesel (HSD) Industri</span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              Marine Fuel Oil (MFO 180 / 380 CST)
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">Bunkering Kapal Laut (SPOB)</span>
            <span className="font-body-md text-body-md text-on-surface-variant">Armada Tangki Darat 5kL - 32kL</span>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wider mb-2">
              Kontak Pusat
            </span>
            <div className="flex items-start gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px] text-primary-container shrink-0">location_on</span>
              <span>Menara Kadin Indonesia Lt. 22, Jl. H.R. Rasuna Said Kav. 2-3, Kuningan, Jakarta Selatan 12950</span>
            </div>
            <div className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">call</span>
              <span>+62 21 527 8899 / +62 811 1928 277</span>
            </div>
            <div className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">mail</span>
              <span>marketing@serenaenergy.co.id</span>
            </div>
          </div>
        </div>

        <div className="w-full mt-margin-lg pt-space-lg border-t border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} PT Serena Energi Unggul. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-space-lg">
            <span>Standar Mutu Dirjen Migas &amp; ASTM D975</span>
            <span>Segel Metrologi Resmi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
