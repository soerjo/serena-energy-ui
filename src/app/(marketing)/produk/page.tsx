import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Katalog Produk & Spesifikasi Uji Laboratorium ASTM - PT Serena Energy',
  description:
    'Spesifikasi laboratorium lengkap BBM Industri: Biosolar B35/B40, HSD, Pertamina Dex, dan MFO. Standar mutu ASTM dan Dirjen Migas.',
};

export default function ProdukPage() {
  const labSpecs = [
    {
      property: 'Angka Setana (Cetane Number) / Indeks Setana',
      method: 'ASTM D613 / D4737',
      unit: '-',
      min: '48',
      max: '-',
    },
    { property: 'Massa Jenis pada 15 °C', method: 'ASTM D1298 / D4052', unit: 'kg/m³', min: '815', max: '860' },
    { property: 'Viskositas Kinematik pada 40 °C', method: 'ASTM D445', unit: 'mm²/s (cSt)', min: '2.0', max: '4.5' },
    { property: 'Titik Nyala (Flash Point PMCC)', method: 'ASTM D93', unit: '°C', min: '52', max: '-' },
    { property: 'Titik Tuang (Pour Point)', method: 'ASTM D97', unit: '°C', min: '-', max: '18' },
    {
      property: 'Kandungan Belerang (Sulphur)',
      method: 'ASTM D2622 / D4294',
      unit: 'mg/kg (ppm)',
      min: '-',
      max: '500',
    },
    { property: 'Kandungan Air (Water Content)', method: 'ASTM D6304', unit: 'mg/kg (ppm)', min: '-', max: '400' },
    {
      property: 'Kandungan FAME (Biodiesel Blend)',
      method: 'ASTM D7371 / EN 14078',
      unit: '%-v/v',
      min: '34.0',
      max: '41.0',
    },
    { property: 'Stabilitas Oksidasi', method: 'EN 15751 (Rancimat)', unit: 'jam', min: '35', max: '-' },
    { property: 'Korosi Bilah Tembaga (3 jam @ 50 °C)', method: 'ASTM D130', unit: 'merit', min: '-', max: 'Kelas 1' },
    { property: 'Residu Karbon (pada 10% bottom)', method: 'ASTM D4530', unit: '%-m/m', min: '-', max: '0.1' },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E7490]/20 border border-[#81D1F0]/30 text-xs font-space font-semibold text-[#81D1F0]">
          <span className="material-symbols-outlined text-[16px]">biotech</span>
          AKREDITASI STANDAR MUTU DITJEN MIGAS &amp; ASTM INTERNASIONAL
        </div>
        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white leading-tight">
          Katalog Produk &amp; Spesifikasi Uji Laboratorium Energi Industri
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Setiap liter bahan bakar yang disalurkan oleh PT Serena Energy dilengkapi dengan Certificate of Analysis (CoA)
          terverifikasi, menjamin efisiensi termal mesin dan perlindungan jangka panjang sistem injeksi.
        </p>
      </div>

      {/* Lab Spec Table */}
      <div className="rounded-xl border border-[#38BDF8]/20 bg-[#0F172A]/80 shadow-2xl overflow-hidden backdrop-blur-md">
        <div className="p-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-syne font-bold text-white">
              Spesifikasi Laboratorium: Minyak Solar Industri 48 (B35 / B40 FAME Blend)
            </h2>
            <p className="text-xs text-[#94A3B8]">
              Mengacu pada Keputusan Direktur Jenderal Minyak dan Gas Bumi No. 146.K/10/DJM/2020.
            </p>
          </div>
          <a
            href="https://wa.me/628111928277?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20meminta%20salinan%20Certificate%20of%20Analysis%20(CoA)%20resmi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-[#0E7490]/20 hover:bg-[#0E7490]/40 border border-[#81D1F0]/30 text-[#81D1F0] font-space text-xs font-bold transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Unduh CoA Resmi (PDF)
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0D1320] text-[#81D1F0] font-space font-bold border-b border-white/10 uppercase tracking-wider">
                <th className="py-4 px-6">Karakteristik &amp; Sifat Uji</th>
                <th className="py-4 px-6">Metode Uji Standar</th>
                <th className="py-4 px-4">Satuan</th>
                <th className="py-4 px-4 text-center">Batas Minimum</th>
                <th className="py-4 px-4 text-center">Batas Maksimum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-space">
              {labSpecs.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-6 font-syne font-semibold text-white">{item.property}</td>
                  <td className="py-3.5 px-6 text-[#81D1F0]">{item.method}</td>
                  <td className="py-3.5 px-4 text-[#94A3B8]">{item.unit}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-white">{item.min}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-white">{item.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fleet & Logistics Specs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-syne font-bold text-white">
          Spesifikasi Armada Logistik &amp; Solusi Penyimpanan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-4">
            <div className="relative h-44 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/stitch/b36592ee05b797d1843efde0d7be0e80.jpg"
                alt="Armada Truk Tangki Darat Serena Energy"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-syne font-bold text-white">Armada Truk Tangki Darat</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Kapasitas kompartemen 5.000 L, 8.000 L, 16.000 L, hingga 32.000 L. Dilengkapi bottom-loading system,
              ground earthing, GPS live telemetry, dan segel tera Metrologi berbarkode.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-4">
            <div className="relative h-44 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/stitch/9510f237e1d6512c23fe4c3c69445fa8.jpg"
                alt="Armada Tongkang SPOB Bunkering"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-syne font-bold text-white">Self-Propelled Oil Barge (SPOB)</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Kapasitas 500 kL s/d 2.500 kL untuk bunkering offshore dan distribusi antar-pulau. Memiliki flow meter
              Coriolis presisi tinggi dan sertifikasi BKI (Biro Klasifikasi Indonesia).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-4">
            <div className="relative h-44 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/stitch/555ad4291b92454b98a325f932be2948.jpg"
                alt="Tangki Timbun & Terminal Bahan Bakar"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-syne font-bold text-white">Temporary Storage &amp; IBC Tank</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Penyediaan sewa tangki timbun di lokasi proyek konstruksi (modular skid fuel tank) kapasitas 10kL - 50kL
              dengan sistem dispenser pompa flow meter otomatis dan bunding wall anti-tumpah.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Commitment Banner */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0E7490]/20 via-[#0D1320] to-[#DC2626]/20 border border-[#38BDF8]/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-syne font-bold text-white">Minta Surat Penawaran Resmi &amp; Jadwal Suplai</h3>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Tim pengadaan kami siap memberikan rekomendasi jenis komoditas yang paling sesuai dengan spesifikasi mesin
            pabrik dan kebutuhan proyek Anda.
          </p>
        </div>
        <a
          href="https://wa.me/628111928277?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20meminta%20penawaran%20resmi%20dan%20jadwal%20suplai%20BBM"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-space font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#DC2626]/30 whitespace-nowrap"
        >
          Hubungi Tim Penjualan &rarr;
        </a>
      </div>
    </div>
  );
}
