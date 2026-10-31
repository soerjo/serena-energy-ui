import React from 'react';

export const metadata = {
  title: 'Tentang Kami & Profil Korporat - PT Serena Energy',
  description:
    'Profil korporat PT Serena Energy, izin niaga umum migas, legalitas, visi misi, dan jaringan terminal distribusi bahan bakar industri.',
};

export default function TentangPage() {
  const values = [
    {
      title: 'Jaminan Mutu “Pasti Pas”',
      desc: 'Setiap liter bahan bakar diambil langsung dari depot resmi Pertamina dengan pemeriksaan densitas, temperatur, dan segel ganda.',
      icon: 'verified_user',
    },
    {
      title: 'Dispatching Tepat Waktu',
      desc: 'Sistem monitoring rute armada secara live berbasis IoT telematics untuk memastikan ketepatan jadwal tiba di lokasi penyerahan.',
      icon: 'alarm_on',
    },
    {
      title: 'Integritas Volume Anti-Tamper',
      desc: 'Segel resmi berbarkode dan tera Metrologi yang diperbarui berkala untuk mencegah kebocoran maupun manipulasi takaran.',
      icon: 'lock',
    },
    {
      title: 'HSSE & K3 Migas Unggul',
      desc: 'Standar keselamatan operasional tanpa kompromi (Zero Fatality & Zero Spill) sesuai protokol Pertamina Patra Niaga.',
      icon: 'health_and_safety',
    },
    {
      title: 'Tata Kelola Transparan',
      desc: 'Faktur pajak resmi, dokumen izin niaga lengkap, serta kepatuhan regulasi perpindahan bahan bakar lintas wilayah.',
      icon: 'gavel',
    },
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E7490]/20 border border-[#81D1F0]/30 text-xs font-space font-semibold text-[#81D1F0]">
          <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
          PROFIL KORPORASI &amp; INTEGRITAS OPERASIONAL
        </div>
        <h1 className="text-3xl sm:text-5xl font-syne font-extrabold text-white leading-tight">
          Pilar Distribusi Energi Terpercaya, Menggerakkan Arteri Industri Nasional
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          PT Serena Energy didirikan dengan visi menjadi garda terdepan rantai pasok bahan bakar minyak industri di
          Indonesia melalui keandalan armada, integritas takaran, dan kepatuhan penuh terhadap standar keselamatan
          energi.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl bg-[#0F172A]/80 border border-[#38BDF8]/20 space-y-4 backdrop-blur-md">
          <div className="w-12 h-12 rounded bg-[#0E7490]/20 border border-[#0E7490]/40 flex items-center justify-center text-[#81D1F0]">
            <span className="material-symbols-outlined">visibility</span>
          </div>
          <h2 className="text-2xl font-syne font-bold text-white">Visi Strategis</h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Menjadi mitra distribusi BBM industri terkemuka pilihan utama pelaku industri nasional yang diakui atas
            keunggulan layanan logistik, integritas pengujian laboratorium, dan kontribusi nyata dalam ketahanan energi
            berkelanjutan.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-[#0F172A]/80 border border-[#38BDF8]/20 space-y-4 backdrop-blur-md">
          <div className="w-12 h-12 rounded bg-[#DC2626]/20 border border-[#DC2626]/40 flex items-center justify-center text-[#DC2626]">
            <span className="material-symbols-outlined">flag</span>
          </div>
          <h2 className="text-2xl font-syne font-bold text-white">Misi Perusahaan</h2>
          <ul className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-[#10B981] mt-0.5">check_circle</span>
              Menjamin ketersediaan bahan bakar berkualitas tinggi tanpa jeda bagi sektor-sektor esensial.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-[#10B981] mt-0.5">check_circle</span>
              Menerapkan teknologi telemetri armada terkini demi transparansi status pasokan pelanggan.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-[#10B981] mt-0.5">check_circle</span>
              Mendukung implementasi bahan bakar transisi ramah lingkungan (Biosolar B35 / B40 blend).
            </li>
          </ul>
        </div>
      </div>

      {/* 5 Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-space font-bold uppercase tracking-widest text-[#81D1F0]">
            NILAI-NILAI UTAMA
          </span>
          <h2 className="text-3xl font-syne font-bold text-white">5 Pilar Keunggulan Nilai Operasional</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0F172A]/60 border border-[#38BDF8]/15 hover:border-[#81D1F0]/40 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded bg-[#0E7490]/20 flex items-center justify-center text-[#81D1F0]">
                <span className="material-symbols-outlined">{val.icon}</span>
              </div>
              <h3 className="text-sm font-syne font-bold text-white">{val.title}</h3>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal & Licenses */}
      <div className="p-8 rounded-2xl bg-[#0F172A]/80 border border-[#38BDF8]/20 space-y-6 backdrop-blur-md">
        <h2 className="text-2xl font-syne font-bold text-white flex items-center gap-3">
          <span className="material-symbols-outlined text-[#81D1F0]">verified</span>
          Legalitas Perusahaan &amp; Izin Resmi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-space">
          <div className="p-4 rounded bg-[#0D1320] border border-white/5 space-y-1">
            <span className="text-[#94A3B8] uppercase text-[10px]">Izin Usaha Niaga Umum (INU)</span>
            <p className="font-bold text-white">Kementerian ESDM Dirjen Migas</p>
            <p className="text-[#81D1F0] text-[11px]">No. 05.NW.03.22.00.041</p>
          </div>
          <div className="p-4 rounded bg-[#0D1320] border border-white/5 space-y-1">
            <span className="text-[#94A3B8] uppercase text-[10px]">Penunjukan Agen Resmi</span>
            <p className="font-bold text-white">PT Pertamina Patra Niaga</p>
            <p className="text-[#81D1F0] text-[11px]">Mitra Resmi Pemasaran Industri</p>
          </div>
          <div className="p-4 rounded bg-[#0D1320] border border-white/5 space-y-1">
            <span className="text-[#94A3B8] uppercase text-[10px]">Sertifikasi Manajemen Mutu</span>
            <p className="font-bold text-white">ISO 9001:2015 &amp; ISO 45001:2018</p>
            <p className="text-[#81D1F0] text-[11px]">Sistem Manajemen Mutu &amp; K3</p>
          </div>
        </div>
      </div>

      {/* Offices and Dispatch Hubs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-syne font-bold text-white">Jaringan Kantor &amp; Terminal Dispatch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-2">
            <span className="text-xs font-space font-bold text-[#DC2626]">HEADQUARTERS</span>
            <h3 className="text-lg font-syne font-bold text-white">Kantor Pusat Jakarta</h3>
            <p className="text-xs text-[#94A3B8]">
              Menara Kadin Indonesia Lt. 22, Jl. H.R. Rasuna Said Kav. 2-3, Kuningan, Jakarta Selatan 12950
            </p>
            <p className="text-xs font-space text-[#81D1F0] pt-2">Tel: +62 21 527 8899</p>
          </div>
          <div className="p-6 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-2">
            <span className="text-xs font-space font-bold text-[#0E7490]">LOGISTICS HUB KALIMANTAN</span>
            <h3 className="text-lg font-syne font-bold text-white">Depot &amp; Kantor Balikpapan</h3>
            <p className="text-xs text-[#94A3B8]">
              Kawasan Industri Kariangau (KIK) KM 13, Balikpapan Barat, Kalimantan Timur 76134
            </p>
            <p className="text-xs font-space text-[#81D1F0] pt-2">Tel: +62 542 780 112</p>
          </div>
          <div className="p-6 rounded-xl bg-[#0F172A]/70 border border-[#38BDF8]/15 space-y-2">
            <span className="text-xs font-space font-bold text-[#0E7490]">MARINE BUNKERING TERMINAL</span>
            <h3 className="text-lg font-syne font-bold text-white">Hub Maritim Batam</h3>
            <p className="text-xs text-[#94A3B8]">
              Pelabuhan Batu Ampar, Komplek Terminal Maritim Blok B-4, Kota Batam, Kepulauan Riau 29432
            </p>
            <p className="text-xs font-space text-[#81D1F0] pt-2">Tel: +62 778 412 880</p>
          </div>
        </div>
      </div>
    </div>
  );
}
