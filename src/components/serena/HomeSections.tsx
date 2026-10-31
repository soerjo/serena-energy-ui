'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#38BDF8]/10 bg-gradient-to-b from-[#060A11] via-[#0D1320] to-[#060A11]">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0E7490] blur-[140px] rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#DC2626] blur-[160px] rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E7490]/20 border border-[#81D1F0]/30 text-xs font-space font-semibold text-[#81D1F0]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              AGEN RESMI BBM INDUSTRI PERTAMINA PATRA NIAGA
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold tracking-tight text-white leading-tight">
              ENERGIZING YOUR FUTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81D1F0] via-white to-[#DC2626]">
                DENGAN KEANDALAN PASTI.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              Solusi pasokan bahan bakar minyak (BBM) industri skala enterprise: Biosolar B35/B40, HSD, dan MFO.
              Didukung sertifikasi standar laboratorium ASTM, armada tangki darat &amp; SPOB mandiri berlisensi Migas.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-space font-bold text-white">99.8%</p>
                <p className="text-xs font-space text-[#94A3B8]">On-Time Delivery Rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-space font-bold text-[#81D1F0]">5,000+ kL</p>
                <p className="text-xs font-space text-[#94A3B8]">Kapasitas Buffer Bulanan</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-space font-bold text-[#DC2626]">0 Toleransi</p>
                <p className="text-xs font-space text-[#94A3B8]">Segel Tera &amp; Uji Lab</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/harga"
                className="px-6 py-3.5 rounded bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-space font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#DC2626]/30 flex items-center gap-2"
              >
                <span>Lihat Indeks Harga Resmi</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/produk"
                className="px-6 py-3.5 rounded bg-[#0F172A]/80 hover:bg-[#0E7490]/30 border border-[#38BDF8]/30 text-[#81D1F0] font-space font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">science</span>
                <span>Spesifikasi Lab ASTM</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#38BDF8]/20 bg-[#0F172A]/70 shadow-2xl p-2 backdrop-blur-md">
              <div className="relative h-[360px] sm:h-[420px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/stitch/e9aede9543f0a825239a3f02b9bc11a9.jpg"
                  alt="Industrial Fuel Tanker & Terminal Serena Energy"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A11] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#0D1320]/80 border border-white/10 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-space text-[#81D1F0] uppercase tracking-wider">
                      Live Telemetry Fleet
                    </span>
                    <p className="text-sm font-syne font-bold text-white">SPOB Serena Perkasa 02</p>
                    <p className="text-xs text-[#94A3B8]">Bunkering Operation • Selat Malaka Corridor</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] font-space text-xs font-bold">
                    ACTIVE VOYAGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PillarsSection() {
  const pillars = [
    {
      icon: 'verified',
      title: 'Tepat Mutu & Volume',
      desc: 'Setiap pengiriman disertai Certificate of Analysis (CoA) resmi dan segel tera Metrologi berstandar Dirjen Migas tanpa kompromi.',
    },
    {
      icon: 'schedule',
      title: 'Siaga Pasokan 24/7',
      desc: 'Jadwal pengiriman terjadwal dan emergency buffer stock untuk mencegah downtime turbin, alat berat tambang, maupun pabrik.',
    },
    {
      icon: 'local_shipping',
      title: 'Penetrasi Medan Ekstrem',
      desc: 'Armada darat 4x4, tangki high-grade 5kL - 32kL, serta armada laut SPOB yang mampu merapat di jetty terpencil pulau terluar.',
    },
    {
      icon: 'eco',
      title: 'Transisi Bersih B35 / B40',
      desc: 'Mendukung penuh mandatori biofuel nasional dengan kontrol kualitas water content dan kestabilan oksidasi FAME.',
    },
  ];

  return (
    <section className="py-20 bg-[#080E1B] border-b border-[#38BDF8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-space font-bold uppercase tracking-widest text-[#81D1F0]">
            FONDASI OPERASIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white">
            FONDASI KEANDALAN DISTRIBUSI ENERGI NASIONAL
          </h2>
          <p className="text-sm text-[#94A3B8]">
            Kami memahami bahwa keterlambatan bahan bakar berarti kerugian operasional jutaan rupiah per jam. Serena
            Energy hadir memberikan rasa aman total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#0F172A]/70 border border-[#38BDF8]/15 hover:border-[#81D1F0]/40 transition-all group backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded bg-[#0E7490]/20 border border-[#0E7490]/40 flex items-center justify-center text-[#81D1F0] group-hover:scale-110 transition-transform mb-4">
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <h3 className="text-lg font-syne font-bold text-white mb-2 group-hover:text-[#81D1F0] transition-colors">
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#94A3B8]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FuelCalculator() {
  const [liters, setLiters] = useState<number>(10000);
  const [product, setProduct] = useState<'b35' | 'hsd' | 'dex'>('b35');
  const [zone, setZone] = useState<number>(1);

  const basePrices: Record<string, number> = {
    b35: 18500,
    hsd: 19800,
    dex: 21500,
  };

  const zoneFactors: Record<number, number> = {
    1: 1.0,
    2: 1.025,
    3: 1.05,
    4: 1.08,
  };

  const unitPrice = Math.round(basePrices[product] * zoneFactors[zone]);
  const subtotal = unitPrice * liters;
  const ppn = Math.round(subtotal * 0.11);
  const total = subtotal + ppn;

  return (
    <section className="py-20 bg-[#060A11] border-b border-[#38BDF8]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Info */}
          <div className="flex-1 space-y-6">
            <span className="text-xs font-space font-bold uppercase tracking-widest text-[#DC2626]">
              INTERACTIVE COST CALCULATOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-syne font-bold text-white">
              Simulasi Estimasi Pengadaan BBM Industri Proyek Anda
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Dapatkan perkiraan anggaran pengadaan BBM industri secara instan berdasarkan volume kebutuhan, jenis bahan
              bakar, dan zona operasional logistik Pertamina Patra Niaga.
            </p>
            <div className="p-4 rounded bg-[#0D1320] border border-[#38BDF8]/20 space-y-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="material-symbols-outlined text-[#81D1F0] text-sm">info</span>
                Transparansi Formula Harga
              </div>
              <p>
                Harga resmi mengacu pada formula: (Harga Dasar Pertamina Periode Berjalan + PPN 11% + PBBKB daerah
                sesuai Perda + Biaya Distribusi Franco).
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 rounded-xl bg-[#0F172A]/90 border border-[#38BDF8]/25 shadow-2xl backdrop-blur-md">
            <h3 className="text-lg font-syne font-bold text-white mb-6 flex items-center justify-between">
              <span>Kalkulator Estimasi Anggaran</span>
              <span className="text-xs font-space text-[#81D1F0] font-normal">Periode Berjalan</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-space font-semibold text-[#94A3B8] mb-1.5 uppercase">
                  Pilih Jenis BBM Industri
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setProduct('b35')}
                    className={`py-2 px-3 rounded text-xs font-space font-bold transition-all ${
                      product === 'b35'
                        ? 'bg-[#0E7490] text-white border border-[#81D1F0]'
                        : 'bg-[#0D1320] text-[#94A3B8] border border-white/5 hover:bg-white/5'
                    }`}
                  >
                    Biosolar B35
                  </button>
                  <button
                    type="button"
                    onClick={() => setProduct('hsd')}
                    className={`py-2 px-3 rounded text-xs font-space font-bold transition-all ${
                      product === 'hsd'
                        ? 'bg-[#0E7490] text-white border border-[#81D1F0]'
                        : 'bg-[#0D1320] text-[#94A3B8] border border-white/5 hover:bg-white/5'
                    }`}
                  >
                    HSD Industri
                  </button>
                  <button
                    type="button"
                    onClick={() => setProduct('dex')}
                    className={`py-2 px-3 rounded text-xs font-space font-bold transition-all ${
                      product === 'dex'
                        ? 'bg-[#0E7490] text-white border border-[#81D1F0]'
                        : 'bg-[#0D1320] text-[#94A3B8] border border-white/5 hover:bg-white/5'
                    }`}
                  >
                    Pertamina Dex
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-space font-semibold text-[#94A3B8] mb-1.5 uppercase">
                  Zona Wilayah Pengiriman Pertamina
                </label>
                <select
                  value={zone}
                  onChange={(e) => setZone(Number(e.target.value))}
                  className="w-full bg-[#0D1320] border border-[#38BDF8]/20 rounded p-2.5 text-xs text-white focus:outline-none focus:border-[#81D1F0]"
                >
                  <option value={1}>Wilayah 1 (Sumatera, Jawa, Bali, Madura)</option>
                  <option value={2}>Wilayah 2 (Kalimantan)</option>
                  <option value={3}>Wilayah 3 (Sulawesi &amp; NTB/NTT)</option>
                  <option value={4}>Wilayah 4 (Maluku &amp; Papua)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-space text-[#94A3B8] mb-1.5">
                  <span className="uppercase font-semibold">Volume Pasokan</span>
                  <span className="text-white font-bold">
                    {liters.toLocaleString('id-ID')} Liter ({liters / 1000} kL)
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={liters}
                  onChange={(e) => setLiters(Number(e.target.value))}
                  className="w-full accent-[#DC2626] cursor-pointer"
                />
              </div>

              {/* Estimation result */}
              <div className="p-4 rounded bg-[#0D1320]/80 border border-white/10 space-y-2 pt-3">
                <div className="flex justify-between text-xs text-[#94A3B8]">
                  <span>Estimasi Harga Satuan / Ltr</span>
                  <span className="font-space font-bold text-white">Rp {unitPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-xs text-[#94A3B8]">
                  <span>Subtotal Dasar</span>
                  <span className="font-space font-semibold text-white">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-xs text-[#94A3B8]">
                  <span>PPN 11%</span>
                  <span className="font-space font-semibold text-white">Rp {ppn.toLocaleString('id-ID')}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-syne font-bold text-[#81D1F0]">Estimasi Total Anggaran</span>
                  <span className="text-lg font-space font-extrabold text-[#DC2626]">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/628111928277?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20meminta%20penawaran%20resmi%20untuk%20volume%20${liters}%20liter%20${product.toUpperCase()}%20di%20Wilayah%20${zone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block py-3 rounded bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-space font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#DC2626]/20 transition-all"
              >
                Minta Surat Penawaran Resmi (RFQ)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
