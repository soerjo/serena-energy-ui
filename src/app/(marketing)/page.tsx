import React from 'react';
import { HeroSection, PillarsSection, FuelCalculator } from '@/components/serena/HomeSections';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />

      {/* Ticker / Benchmark Indices */}
      <div className="bg-[#080E1B] border-b border-[#38BDF8]/15 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-6 text-xs font-space whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span className="text-[#94A3B8]">INDEX BBM INDUSTRI:</span>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <span className="text-[#94A3B8]">BIOSOLAR B35: </span>
              <span className="font-bold text-white">Rp 18.250/L</span>
            </div>
            <div>
              <span className="text-[#94A3B8]">HSD INDUSTRI: </span>
              <span className="font-bold text-white">Rp 19.400/L</span>
            </div>
            <div>
              <span className="text-[#94A3B8]">MFO 180 CST: </span>
              <span className="font-bold text-white">Rp 14.800/L</span>
            </div>
            <div>
              <span className="text-[#94A3B8]">PERTAMINA DEX: </span>
              <span className="font-bold text-white">Rp 21.100/L</span>
            </div>
          </div>
          <Link href="/harga" className="text-[#81D1F0] hover:underline flex items-center gap-1">
            <span>Detail Lengkap</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        </div>
      </div>

      <PillarsSection />

      {/* Product Highlight Grid */}
      <section className="py-20 bg-[#060A11] border-b border-[#38BDF8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-space font-bold uppercase tracking-widest text-[#81D1F0]">
                PORTOFOLIO KOMODITAS
              </span>
              <h2 className="text-3xl font-syne font-bold text-white mt-1">Katalog BBM Industri Berstandar ASTM</h2>
            </div>
            <Link
              href="/produk"
              className="text-xs font-space font-bold uppercase tracking-wider text-[#81D1F0] hover:text-white flex items-center gap-1.5"
            >
              <span>Lihat Seluruh Spesifikasi Lab</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-xl bg-[#0F172A]/80 border border-[#38BDF8]/20 overflow-hidden hover:border-[#81D1F0]/50 transition-all group">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/stitch/8c47c62daeeb2b102c513338af1a4a3d.jpg"
                  alt="Biosolar Industri B35"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                <span className="absolute top-3 right-3 px-2 py-1 rounded bg-[#0E7490] text-white font-space text-[10px] font-bold">
                  BEST SELLER
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-syne font-bold text-white group-hover:text-[#81D1F0] transition-colors">
                  Biosolar Industri B35 / B40
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Formula ramah lingkungan pencampuran Fatty Acid Methyl Ester (FAME) berstandar ESDM. Dirancang untuk
                  mesin diesel heavy-duty alat berat pertambangan dan generator industri.
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-space">
                  <span className="text-[#94A3B8]">Cetane Index ≥ 48</span>
                  <Link href="/produk" className="text-[#DC2626] font-bold hover:underline">
                    Uji Lab ASTM &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl bg-[#0F172A]/80 border border-[#38BDF8]/20 overflow-hidden hover:border-[#81D1F0]/50 transition-all group">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/stitch/dfadaf4b9e1f185b60e6d4af3888be68.jpg"
                  alt="High Speed Diesel Industri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                <span className="absolute top-3 right-3 px-2 py-1 rounded bg-[#DC2626] text-white font-space text-[10px] font-bold">
                  HIGH PURITY
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-syne font-bold text-white group-hover:text-[#81D1F0] transition-colors">
                  High Speed Diesel (HSD)
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Bahan bakar diesel distilasi murni dengan viskositas optimal. Sangat ideal untuk kapal motor cepat
                  maritim, boiler pembangkit listrik captive, dan mesin putaran tinggi.
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-space">
                  <span className="text-[#94A3B8]">Density @15°C 815-860</span>
                  <Link href="/produk" className="text-[#DC2626] font-bold hover:underline">
                    Uji Lab ASTM &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl bg-[#0F172A]/80 border border-[#38BDF8]/20 overflow-hidden hover:border-[#81D1F0]/50 transition-all group">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/stitch/7d131aba1b081167764eab4832995aba.jpg"
                  alt="Marine Fuel Oil MFO 180 CST"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                <span className="absolute top-3 right-3 px-2 py-1 rounded bg-[#0E7490] text-white font-space text-[10px] font-bold">
                  MARINE BUNKER
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-syne font-bold text-white group-hover:text-[#81D1F0] transition-colors">
                  Marine Fuel Oil (MFO 180 / 380)
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Bahan bakar residu minyak berat berkualitas tinggi untuk pembakaran boiler industri semen, pabrik
                  peleburan baja, serta mesin penggerak kapal niaga samudera.
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-space">
                  <span className="text-[#94A3B8]">Viscosity Kinematik CST</span>
                  <Link href="/produk" className="text-[#DC2626] font-bold hover:underline">
                    Uji Lab ASTM &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FuelCalculator />
    </div>
  );
}
