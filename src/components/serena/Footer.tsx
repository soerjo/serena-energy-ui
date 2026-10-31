import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#080E1B] border-t border-[#38BDF8]/15 text-[#94A3B8] font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-gradient-to-br from-[#0E7490] to-[#DC2626] flex items-center justify-center font-syne font-extrabold text-white text-lg">
                SE
              </div>
              <span className="font-syne font-bold text-white text-lg">PT SERENA ENERGY</span>
            </div>
            <p className="text-xs leading-relaxed text-[#94A3B8]">
              Mitra Agen Resmi BBM Industri Pertamina Patra Niaga. Berpengalaman melayani kebutuhan bahan bakar solar
              B35/B40, HSD, dan MFO untuk sektor pertambangan, maritim, manufaktur, dan proyek infrastruktur nasional.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E7490]/15 border border-[#0E7490]/30 text-[11px] font-space text-[#81D1F0]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Penyalur Resmi Berizin Dirjen Migas
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space font-bold text-white text-xs tracking-wider uppercase mb-4 text-[#81D1F0]">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/harga" className="hover:text-white transition-colors">
                  Transparansi Indeks Harga BBM
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:text-white transition-colors">
                  Katalog Produk & Hasil Uji Lab ASTM
                </Link>
              </li>
              <li>
                <Link href="/proyek" className="hover:text-white transition-colors">
                  Rekam Jejak Proyek & Studi Kasus
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white transition-colors">
                  Tentang Kami & Izin Usaha
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Specs */}
          <div>
            <h4 className="font-space font-bold text-white text-xs tracking-wider uppercase mb-4 text-[#81D1F0]">
              Komoditas Energi
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#DC2626]">local_gas_station</span>
                Biosolar Industri B35 / B40
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#DC2626]">oil_barrel</span>
                High Speed Diesel (HSD) Industri
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#DC2626]">directions_boat</span>
                Marine Fuel Oil (MFO 180 / 380 CST)
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#DC2626]">speed</span>
                Pertamina Dex Industri High Cetane
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-space font-bold text-white text-xs tracking-wider uppercase mb-4 text-[#81D1F0]">
              Kantor Pusat & Dispatch
            </h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#81D1F0] shrink-0">location_on</span>
                <span>
                  Menara Kadin Indonesia Lt. 22, Jl. H.R. Rasuna Said Kav. 2-3, Kuningan, Jakarta Selatan 12950
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#81D1F0] shrink-0">call</span>
                <span>+62 21 527 8899 / +62 811 1928 277</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#81D1F0] shrink-0">mail</span>
                <span>marketing@serenaenergy.co.id</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} PT Serena Energy. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#64748B]">ASTM D975 • ISO 9001:2015 • SK Dirjen Migas No. 04.K/MG/2021</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
