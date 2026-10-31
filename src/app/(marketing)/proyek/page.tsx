import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Rekam Jejak Proyek & Studi Kasus Distribusi - PT Serena Energy',
  description:
    'Portofolio suplai BBM industri untuk Proyek Strategis Nasional (PSN), tambang batubara, pembangkit captive power, dan pelayaran niaga.',
};

export default function ProyekPage() {
  const caseStudies = [
    {
      title: 'Arteri Energi Mega Proyek Jalan Tol Yogyakarta - Bawen (Seksi 1 Sleman - Banyurejo)',
      category: 'Infrastruktur Jalan Tol & PSN',
      volume: '1.200.000 Liter / Bulan',
      challenge:
        'Mobilisasi alat berat excavator dan batching plant di medan kontur curam dengan kebutuhan pasokan tanpa jeda 24 jam.',
      solution:
        'Penempatan 2 unit tangki skid modular 20kL di site basecamp dan rotasi 4 truk tangki 8.000 L offroad khusus setiap subuh.',
      result:
        '100% Zero-downtime alat berat, deviasi volume < 0.05%, dan penghargaan kepatuhan K3 Migas dari kontraktor utama konsorsium BUMN.',
      image: '/images/stitch/3fb4e6db79f6968a3b911ae1f9aface2.jpg',
    },
    {
      title: 'Pasokan Suplai Bahan Bakar Konsesi Tambang Batubara Kutai Kartanegara',
      category: 'Sektor Pertambangan Mineral & Batubara',
      volume: '3.500.000 Liter / Bulan',
      challenge: 'Jalur distribusi darat berlumpur ekstrem dengan jarak tempuh 180 km dari depot pesisir Balikpapan.',
      solution:
        'Kombinasi barge laut menuju jetty sungai terdekat, disambung armada truk tangki 4x4 penggerak ganda berstandar Mine Safety.',
      result:
        'Ketersediaan bahan bakar terjaga pada level minimum 5 hari cadangan, mendukung target pengupasan overburden tambang 100%.',
      image: '/images/stitch/bf0fd369219f6eafba032b01b91cba5f.jpg',
    },
    {
      title: 'Bunkering Kapal Curah & Kontainer Koridor Selat Malaka - Batam',
      category: 'Maritim & Pelayaran Samudera',
      volume: '850.000 Liter / Call',
      challenge:
        'Waktu sandar (turnaround time) kapal kontainer internasional yang sangat ketat di pelabuhan transshipment.',
      solution:
        'Penyandaran langsung armada SPOB Serena Perkasa dengan pompa debit tinggi 250 kL/jam dan verifikasi sounding bersama surveyor independen.',
      result:
        'Pengisian bunker rampung dalam waktu kurang dari 4 jam tanpa keterlambatan jadwal pelayaran kapal menuju rute internasional.',
      image: '/images/stitch/a3552d20b8d3155cc83e3c6dbdaa0496.jpg',
    },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E7490]/20 border border-[#81D1F0]/30 text-xs font-space font-semibold text-[#81D1F0]">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          PROVEN RECORD OF HIGH-STAKES ENERGY LOGISTICS
        </div>
        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white leading-tight">
          Rekam Jejak Suplai Energi &amp; Studi Kasus Distribusi Proyek Strategis
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Mulai dari proyek infrastruktur strategis nasional hingga operasi tambang remote, PT Serena Energy membuktikan
          dedikasi logistik tanpa henti dengan jaminan mutu dan ketepatan waktu.
        </p>
      </div>

      {/* Metric Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-[#0F172A]/80 border border-[#38BDF8]/20 backdrop-blur-md">
        <div className="space-y-1">
          <p className="text-3xl font-space font-bold text-white">45.000+ kL</p>
          <p className="text-xs text-[#94A3B8]">Total BBM Disalurkan</p>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-space font-bold text-[#81D1F0]">120+ Proyek</p>
          <p className="text-xs text-[#94A3B8]">Mitra Industri Aktif</p>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-space font-bold text-[#DC2626]">0 Spill</p>
          <p className="text-xs text-[#94A3B8]">Insiden Tumpahan Minyak</p>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-space font-bold text-[#10B981]">100% Segel</p>
          <p className="text-xs text-[#94A3B8]">Integritas Tera Metrologi</p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="space-y-12">
        {caseStudies.map((cs, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-[#38BDF8]/20 bg-[#0F172A]/70 overflow-hidden shadow-2xl backdrop-blur-md flex flex-col lg:flex-row"
          >
            <div className="relative w-full lg:w-2/5 min-h-[280px]">
              <Image src={cs.image} alt={cs.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#060A11]/80 border border-white/10 text-[#81D1F0] font-space text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                {cs.category}
              </div>
            </div>

            <div className="p-8 lg:w-3/5 space-y-5">
              <div>
                <span className="text-xs font-space font-bold text-[#DC2626] uppercase">
                  Volume Kontrak: {cs.volume}
                </span>
                <h3 className="text-2xl font-syne font-bold text-white mt-1">{cs.title}</h3>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 rounded bg-[#0D1320] border border-white/5">
                  <span className="font-space font-bold text-[#81D1F0] block mb-0.5">Tantangan Lapangan:</span>
                  <p className="text-[#94A3B8]">{cs.challenge}</p>
                </div>
                <div className="p-3 rounded bg-[#0D1320] border border-white/5">
                  <span className="font-space font-bold text-[#81D1F0] block mb-0.5">
                    Solusi Rekayasa Rantai Pasok:
                  </span>
                  <p className="text-[#94A3B8]">{cs.solution}</p>
                </div>
                <div className="p-3 rounded bg-[#0E7490]/10 border border-[#0E7490]/20">
                  <span className="font-space font-bold text-[#10B981] block mb-0.5">Hasil Operasional:</span>
                  <p className="text-[#F8FAFC]">{cs.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0F172A]/90 border border-[#38BDF8]/25 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-syne font-bold text-white">Punya Proyek di Wilayah Menantang?</h3>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            Tim logistik kami siap melakukan site survey untuk merancang skema pasokan tangki timbun dan armada khusus
            ke lokasi Anda.
          </p>
        </div>
        <a
          href="https://wa.me/628111928277?text=Halo%20PT%20Serena%20Energy,%20kami%20ingin%20jadwalkan%20survei%20lokasi%20proyek%20untuk%20suplai%20BBM"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded bg-[#0E7490] hover:bg-[#0891B2] text-white font-space font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0E7490]/30 whitespace-nowrap"
        >
          Jadwalkan Survei Site &rarr;
        </a>
      </div>
    </div>
  );
}
