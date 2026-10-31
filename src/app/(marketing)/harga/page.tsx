import React from 'react';

export const metadata = {
  title: 'Indeks & Transparansi Harga BBM Industri Pertamina - PT Serena Energy',
  description:
    'Daftar harga resmi BBM Industri Pertamina Patra Niaga periode berjalan untuk Wilayah 1, 2, 3, dan 4. Skema Franco & Loco transparan.',
};

export default function HargaPage() {
  const priceMatrix = [
    {
      product: 'Minyak Solar Industri (Biosolar B35 / B40)',
      w1: 'Rp 18.250',
      w2: 'Rp 18.700',
      w3: 'Rp 19.150',
      w4: 'Rp 19.800',
      note: 'FAME Blend Mandatori ESDM',
    },
    {
      product: 'High Speed Diesel (HSD) Industri',
      w1: 'Rp 19.400',
      w2: 'Rp 19.850',
      w3: 'Rp 20.300',
      w4: 'Rp 20.950',
      note: 'Pure Distillate Engine Grade',
    },
    {
      product: 'Pertamina Dex Industri (Cetane 53)',
      w1: 'Rp 21.100',
      w2: 'Rp 21.600',
      w3: 'Rp 22.100',
      w4: 'Rp 22.800',
      note: 'Ultra Low Sulphur ≤ 50 ppm',
    },
    {
      product: 'Minyak Bakar (MFO 180 CST)',
      w1: 'Rp 14.800',
      w2: 'Rp 15.200',
      w3: 'Rp 15.650',
      w4: 'Rp 16.200',
      note: 'Heavy Fuel Oil Boiler & Marine',
    },
    {
      product: 'Minyak Diesel (MDO) Industri',
      w1: 'Rp 17.900',
      w2: 'Rp 18.350',
      w3: 'Rp 18.800',
      w4: 'Rp 19.400',
      note: 'Medium Marine Engine',
    },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E7490]/20 border border-[#81D1F0]/30 text-xs font-space font-semibold text-[#81D1F0]">
          <span className="material-symbols-outlined text-[16px]">price_change</span>
          PERIODE AKTIF: BULAN BERJALAN TAHUN 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white leading-tight">
          Transparansi Indeks Harga BBM Industri &amp; Keekonomian Nasional
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          PT Serena Energy menerapkan tata kelola penetapan harga terbuka yang sepenuhnya mengacu pada rilis resmi PT
          Pertamina Patra Niaga, regulasi BPH Migas, dan Keputusan Menteri ESDM.
        </p>
      </div>

      {/* Pricing Matrix Table */}
      <div className="rounded-xl border border-[#38BDF8]/20 bg-[#0F172A]/80 shadow-2xl overflow-hidden backdrop-blur-md">
        <div className="p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-syne font-bold text-white">
              Tabel Matriks Harga Dasar BBM Industri (Loco Depot Pertamina)
            </h2>
            <p className="text-xs text-[#94A3B8]">
              *Harga per Liter belum termasuk PPN 11%, PBBKB, dan biaya freight/transportasi Franco.
            </p>
          </div>
          <span className="px-3 py-1 rounded bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] font-space text-xs font-semibold self-start md:self-auto">
            STATUS: RESMI TERVERIFIKASI
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0D1320] text-[#81D1F0] font-space font-bold border-b border-white/10 uppercase tracking-wider">
                <th className="py-4 px-6">Jenis Komoditas BBM</th>
                <th className="py-4 px-4">
                  Wilayah 1<br />
                  <span className="text-[10px] text-[#94A3B8] font-normal">Sumatera, Jawa, Bali</span>
                </th>
                <th className="py-4 px-4">
                  Wilayah 2<br />
                  <span className="text-[10px] text-[#94A3B8] font-normal">Kalimantan</span>
                </th>
                <th className="py-4 px-4">
                  Wilayah 3<br />
                  <span className="text-[10px] text-[#94A3B8] font-normal">Sulawesi, NTB/NTT</span>
                </th>
                <th className="py-4 px-4">
                  Wilayah 4<br />
                  <span className="text-[10px] text-[#94A3B8] font-normal">Maluku &amp; Papua</span>
                </th>
                <th className="py-4 px-6">Catatan Spesifikasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-space">
              {priceMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-4 px-6 font-syne font-semibold text-white">{row.product}</td>
                  <td className="py-4 px-4 text-white font-bold">{row.w1}</td>
                  <td className="py-4 px-4 text-white font-bold">{row.w2}</td>
                  <td className="py-4 px-4 text-white font-bold">{row.w3}</td>
                  <td className="py-4 px-4 text-white font-bold">{row.w4}</td>
                  <td className="py-4 px-6 text-[#94A3B8]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Skema Franco vs Loco Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-4">
          <div className="w-12 h-12 rounded bg-[#0E7490]/20 border border-[#0E7490]/40 flex items-center justify-center text-[#81D1F0]">
            <span className="material-symbols-outlined">warehouse</span>
          </div>
          <h3 className="text-xl font-syne font-bold text-white">1. Skema Loco (Pengambilan di Depot Pertamina)</h3>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Pembeli mengambil komoditas bahan bakar secara langsung di terminal/depot suplai Pertamina Patra Niaga
            menggunakan armada tangki darat atau kapal bunker milik pembeli yang telah terakreditasi HSSE Pertamina.
          </p>
          <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#10B981]">check_circle</span>
              Penerbitan Delivery Order (DO) resmi Pertamina
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#10B981]">check_circle</span>
              Pemeriksaan segel tera loading arm di depot asal
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-4">
          <div className="w-12 h-12 rounded bg-[#DC2626]/20 border border-[#DC2626]/40 flex items-center justify-center text-[#DC2626]">
            <span className="material-symbols-outlined">local_shipping</span>
          </div>
          <h3 className="text-xl font-syne font-bold text-white">
            2. Skema Franco (Diantar Sampai Tangki Site / Pabrik)
          </h3>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            PT Serena Energy bertanggung jawab penuh atas seluruh rantai logistik: loading depot, pengawalan,
            transportasi darat/laut berizin B3, hingga sounding dan decanting ke tangki timbun penampungan site pembeli.
          </p>
          <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#10B981]">check_circle</span>
              Jaminan 100% susut/loss selama perjalanan ditanggung agen
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#10B981]">check_circle</span>
              Armada GPS tracking live terintegrasi &amp; segel anti-tamper
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action Quote */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0E7490]/30 via-[#0D1320] to-[#DC2626]/20 border border-[#38BDF8]/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-2xl font-syne font-bold text-white">
            Ingin Simulasi Harga Franco Sampai Lokasi Proyek Anda?
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Konsultasikan rute pengiriman, volume kontrak bulanan, dan skema pembayaran korporasi bersama Sales Engineer
            kami.
          </p>
        </div>
        <a
          href="https://wa.me/628111928277?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20konsultasi%20harga%20Franco%20untuk%20lokasi%20proyek%20kami"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-space font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#DC2626]/30 whitespace-nowrap"
        >
          Konsultasi Harga Franco &rarr;
        </a>
      </div>
    </div>
  );
}
