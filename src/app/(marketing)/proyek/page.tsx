'use client';

import React from 'react';

export default function ProyekPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        {/*  SECTION 1: EDITORIAL HEADER & NAVIGATION  */}
        <section className="w-full bg-surface-container-lowest px-gutter-lg py-space-xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            {/*  Breadcrumb  */}
            <nav className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <a className="hover:text-primary transition-colors" href="#">
                Beranda
              </a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <a className="hover:text-primary transition-colors" href="#">
                Proyek Strategis
              </a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Rekam Jejak &amp; Studi Kasus Distribusi</span>
            </nav>
            {/*  Editorial Badge & Title Block  */}
            <div className="flex flex-col gap-space-md max-w-4xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm w-fit shadow-sm">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span className="">PORTFOLIO &amp; FIELD CASE STUDIES - 18+ TAHUN DISTRIBUSI TANPA HENTI</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Rekam Jejak Suplai Energi &amp; Studi Kasus Distribusi Proyek Strategis Nasional
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Eksplorasi mendalam keandalan rantai pasok PT Serena Energy dalam pengadaan Biosolar B40/B50 industri
                dan Marine Fuel: dari koridor mega infrastruktur darat IKN dan Trans-Jawa hingga operasi Ship-to-Ship
                (STS) lepas pantai dan kawasan manufaktur berat.
              </p>
            </div>
            {/*  Category Filter Tabs  */}
            <div className="flex flex-wrap items-center gap-space-xs pt-space-md" id="case-filters">
              <button className="filter-tab px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-primary text-on-primary transition-all shadow-sm">
                Semua Studi Kasus
              </button>
              <button className="filter-tab px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-all">
                Infrastruktur Jalan Tol &amp; Konstruksi
              </button>
              <button className="filter-tab px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-all">
                Maritim &amp; Lepas Pantai (STS)
              </button>
              <button className="filter-tab px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-all">
                Manufaktur &amp; Batching Plant
              </button>
            </div>
          </div>
        </section>
        {/*  SECTION 2: EXECUTIVE HIGHLIGHTS BAR  */}
        <section className="w-full bg-surface px-gutter-lg py-space-lg">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-sm">
              <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-secondary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Volume Terdistribusi
                  </span>
                  <span className="material-symbols-outlined text-[20px]">oil_barrel</span>
                </div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  120.000.000+
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Liter Bahan Bakar Resmi Industri
                </div>
              </div>
              <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-primary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    On-Time Dispatch SLA
                  </span>
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">99.8%</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Ketepatan Tiba di Titik Serah Franco
                </div>
              </div>
              <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-secondary">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Jangkauan Logistik
                  </span>
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                </div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Lintas Pulau
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Jawa, Kalimantan, Sulawesi, &amp; Kepulauan
                </div>
              </div>
              <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-primary-container">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Purity &amp; Integrity
                  </span>
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">100%</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Segel Tera Digital Utuh &amp; Zero Residue
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  SECTION 3: FEATURED CASE STUDY IN-DEPTH  */}
        <section className="w-full bg-surface-container-low px-gutter-lg py-space-xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                <span className="material-symbols-outlined text-[18px]">star</span>
                <span className="font-bold uppercase tracking-wider">Laporan Lapangan Utama • Featured Editorial</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Diterbitkan: Tim Operasi Darat Serena Energy
              </span>
            </div>
            {/*  Main Layout: 2 Columns (Narrative & Sidebar)  */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
              {/*  Main Column (8 Cols)  */}
              <article className="lg:col-span-8 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                    Kategori: Infrastruktur Jalan Tol
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Studi Kasus 01: Arteri Energi Koridor Mega Proyek Jalan Tol Yogyakarta - Bawen (Seksi 1 Sleman -
                    Banyurejo)
                  </h2>
                  <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-space-xs">
                    <span className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>Seyegan, Kab. Sleman
                    </span>
                    <span className="">•</span>
                    <span className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px]">local_shipping</span>Rotasi 24 Jam Armada
                    </span>
                    <span className="">•</span>
                    <span className="text-primary font-medium">80.000 L / Pekan</span>
                  </div>
                </div>
                {/*  Hero Image  */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Modern heavy industrial fuel tanker truck dispensing clean diesel at a sprawling highway bridge construction site in Sleman Yogyakarta Indonesia. Tower cranes, excavators, and civil engineers with safety gear in high visibility vests against clear blue daytime sky. Industrial photography, clean, highly detailed, photorealistic."
                    src="/images/stitch/6b46bdd765149ab5697d92c7d93d2561.jpg"
                  />
                  <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-xs rounded-lg font-label-sm text-label-sm text-on-surface">
                    Franco Site: Batching Plant Jl. Ps. Ngino Papringan, Seyegan
                  </div>
                </div>
                {/*  Narrative Breakdown  */}
                <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface">
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">warning</span>
                      Tantangan Operasional
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      Pengerjaan struktur layang (elevated) dan tanah dasar Tol Solo-Yogya-NYIA Seksi 1 menuntut
                      pengoperasian puluhan alat berat berat secara simultan—termasuk crawler crane, rig pengeboran
                      bored pile, dan batching plant utama. Fluktuasi suplai sedikit pun berpotensi mengakibatkan
                      kegagalan setting coran semen bernilai miliaran rupiah. Konsorsium BUMN Karya mensyaratkan pasokan
                      bahan bakar kontinu <strong>80.000 Liter per pekan</strong> dengan toleransi keterlambatan nol
                      (zero downtime), sementara rute masuk menuju Seyegan memiliki koridor jalan sub-urban padat dengan
                      batasan tonase ketat.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        precision_manufacturing
                      </span>
                      Solusi &amp; Rantai Pasok Terintegrasi Serena Energy
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      PT Serena Energy menerapkan skema <em>Rolling Supply Buffer</em>. Alih-alih pengiriman tunggal
                      berkapasitas raksasa yang rentan memacetkan akses warga, tim logistik mengerahkan armada{' '}
                      <strong>Fuso &amp; Tronton Multi-Kompartemen (16.000 L &amp; 24.000 L)</strong> yang dirotasi
                      secara presisi 24 jam sehari. Setiap kompartemen tangki dilengkapi segel digital bernomor seri
                      ganda dan pemancar GPS telemetri aktif yang terhubung langsung ke dashboard dispatcher konsorsium.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-space-xs flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                      Hasil Lapangan &amp; Integritas Komoditas
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      Hingga pencapaian milestone cor akhir seksi ini, tercatat{' '}
                      <strong>0 insiden deviasi pengiriman</strong> (100% on-time record). Kualitas Biosolar B40 yang
                      disalurkan terbukti memenuhi ambang batas mutu Pertamina &amp; Lemigas dengan kadar air terkontrol
                      ketat di bawah 110 ppm, mengeliminasi penyumbatan injector pada mesin-mesin canggih berstandar
                      emisi Euro 4 dan Euro 5.
                    </p>
                  </div>
                </div>
                {/*  Field Quote / Metric Callout  */}
                <div className="p-space-lg bg-surface-container rounded-xl flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-primary text-[32px] shrink-0">format_quote</span>
                  <div className="flex flex-col gap-space-xs">
                    <p className="font-title-md text-title-md text-on-surface italic">
                      &quot;Keandalan Serena Energy dalam menjaga kestabilan densitas Biosolar B40 langsung ke mulut
                      tangki alat kami membuat generator dan batching plant berjalan tanpa pernah ada kendala filter
                      solar mogok di lapangan.&quot;
                    </p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">
                      — Superintendent Alat Berat &amp; Logistik Konsorsium
                    </span>
                  </div>
                </div>
              </article>
              {/*  Sidebar Specs (4 Cols)  */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                {/*  Specification Sheet  */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs text-on-surface pb-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <span className="material-symbols-outlined text-secondary text-[20px]">description</span>
                    <span className="font-title-md text-title-md font-bold">Ringkasan Spesifikasi</span>
                  </div>
                  <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">KLIEN / KONSORSIUM</span>
                      <span className="font-title-md text-title-md text-on-surface">
                        Konsorsium Kontraktor BUMN Karya
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">JENIS KOMODITAS</span>
                      <span className="font-title-md text-title-md text-on-surface">
                        Biosolar B40 Standar SK Dirjen Migas
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">MODA DISTRIBUSI</span>
                      <span className="font-title-md text-title-md text-on-surface">
                        Armada Tangki Multi-Kompartemen (16K - 32K L)
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">LOKASI SERAH TERIMA</span>
                      <span className="font-title-md text-title-md text-on-surface">
                        Franco Site Sleman, D.I. Yogyakarta
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">DOKUMEN INTEGRITAS</span>
                      <span className="font-title-md text-title-md text-on-surface">
                        CoA Kilang, Tera Metrologi Legal, BAST
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-sm p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                      <span className="font-label-sm text-label-sm text-on-surface">Sertifikat Lemigas: Lolos Uji</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-bold">VERIFIED</span>
                  </div>
                </div>
                {/*  Live Fleet Telemetry Snapshot Card  */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">
                      Status Armada Terpasang
                    </span>
                    <span className="inline-flex items-center gap-space-xs px-space-xs py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      ACTIVE GPS
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                    <div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-on-surface-variant">ID Tangki</span>
                      <span className="font-semibold">SRN-TK-0842 (24 KL)</span>
                    </div>
                    <div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-on-surface-variant">Rute Pengiriman</span>
                      <span className="font-semibold">Depot Pengandonan → Site Sleman</span>
                    </div>
                    <div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="text-on-surface-variant">Suhu &amp; Densitas Saat Muat</span>
                      <span className="font-semibold">29.4°C | 836.2 kg/m³</span>
                    </div>
                  </div>
                  {/*  Mini Sparkline Telemetry Graphic  */}
                  <div className="flex flex-col gap-space-xs mt-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Stabilitas Flow Rate Pompa Bongkar (LPM)
                    </span>
                    <svg className="w-full h-12 text-secondary" fill="none" viewBox="0 0 200 40">
                      <path
                        d="M 0 30 Q 25 15 50 20 T 100 12 T 150 18 T 200 10"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                      ></path>
                      <path
                        d="M 0 30 Q 25 15 50 20 T 100 12 T 150 18 T 200 10 L 200 40 L 0 40 Z"
                        fill="currentColor"
                        fill-opacity="0.08"
                      ></path>
                    </svg>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        {/*  SECTION 4: CATALOG OF OTHER CASE STUDIES (2x2 GRID)  */}
        <section className="w-full bg-surface px-gutter-lg py-space-xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                Portofolio Multi-Sektor
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Katalog Artikel Studi Kasus Proyek Lapangan
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Bukti nyata ketangguhan armada Serena Energy di berbagai medan ekstrim: koridor konstruksi all-terrain,
                transfer bahan bakar di perairan laut lepas, hingga kawasan industri presisi tinggi.
              </p>
            </div>
            {/*  2x2 Grid Layout  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg" id="case-study-cards">
              {/*  Card 1: IKN Kariangau  */}
              <div
                className="case-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all"
                data-category="infra"
              >
                <div className="relative w-full h-56">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Heavy all-terrain diesel tanker truck driving through red dirt clay road in Ibu Kota Nusantara Kalimantan Timur IKN forest infrastructure project. Construction machinery and high-density tropical trees background under daytime light."
                    src="/images/stitch/8af5b1209c2cc1454dc9bd8db3576583.jpg"
                  />
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-space-sm py-space-xs rounded-lg font-label-sm text-label-sm text-primary font-bold">
                    PROYEK STRATEGIS NASIONAL
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                      Logistik All-Terrain • Kalimantan Timur
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Logistik Koridor Tol IKN Kariangau - Karangjuang Sekmen 3B
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Penetrasi armada truk 4x4 tangki 32.000 L menembus jalan tanah merah pedalaman IKN (Jl.
                      Soekarno-Hatta KM.13). Suplai langsung ke mixing plant beton dan tangki genset tambang/konstruksi
                      tanpa terhambat cuaca hujan tropis ekstrem.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Komoditas Utama</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Biosolar B40 Industri Resmi
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                  </div>
                </div>
              </div>
              {/*  Card 2: Batang STS Offshore  */}
              <div
                className="case-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all"
                data-category="maritime"
              >
                <div className="relative w-full h-56">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Ship-to-ship bunkering operation at sea with a specialized fuel tanker barge vessel alongside a tugboat towing a massive coal barge near Batang power plant in Java Sea. Deep blue ocean water, overcast daylight, safety buoys and heavy fueling hoses."
                    src="/images/stitch/b36592ee05b797d1843efde0d7be0e80.jpg"
                  />
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-space-sm py-space-xs rounded-lg font-label-sm text-label-sm text-secondary font-bold">
                    OPERASI BUNKERING OFFSHORE
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                      Ship-to-Ship (STS) • Laut Jawa
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Bunkering Lepas Pantai Kapal Tugboat PLTU Batang
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Manuver transfer bahan bakar laut langsung via kapal SPOB (Self Propelled Oil Barge) 2.500 KL ke
                      kapal penarik tongkang batubara PLTU 2x1.000 MW di perairan Ujungnegoro dengan kepatuhan protokol
                      CSMS K3LL kelautan tertinggi.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Komoditas Utama</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Biosolar B40 &amp; MFO 180 cSt
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">anchor</span>
                  </div>
                </div>
              </div>
              {/*  Card 3: Jababeka II Manufacturing  */}
              <div
                className="case-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all"
                data-category="manufacture"
              >
                <div className="relative w-full h-56">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Large-scale chemical manufacturing facility with glistening stainless steel chemical storage tanks and piping in Jababeka industrial area Cikarang Indonesia under bright morning light with delivery fuel tanker safely unloading at terminal."
                    src="/images/stitch/9510f237e1d6512c23fe4c3c69445fa8.jpg"
                  />
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-space-sm py-space-xs rounded-lg font-label-sm text-label-sm text-primary-container font-bold">
                    MANUFAKTUR PRESISI
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                      Kawasan Industri Jababeka II • Bekasi
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Suplai Non-Stop Starborn Chemical Cikarang
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Penyaluran berkala solar boiler dan pembangkit genset cadangan untuk industri kimia berpresisi
                      tinggi. Menjamin spesifikasi ketat dengan batas sulfur rendah dan titik tuang stabil bebas
                      sedimentasi mikro.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Komoditas Utama</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        High Cetane Biosolar B40 Low Sulfur
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[24px]">factory</span>
                  </div>
                </div>
              </div>
              {/*  Card 4: Tegal Shipyard Docking  */}
              <div
                className="case-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all"
                data-category="maritime"
              >
                <div className="relative w-full h-56">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Commercial fishing port and shipyard dock in Tegal Central Java Indonesia with large trawler fishing vessels and tugboats undergoing maintenance. Industrial fuel hoses and Serena Energy certified transport tankers on pier edge."
                    src="/images/stitch/555ad4291b92454b98a325f932be2948.jpg"
                  />
                  <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-space-sm py-space-xs rounded-lg font-label-sm text-label-sm text-secondary font-bold">
                    GALANGAN &amp; PERIKANAN
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                      Pelabuhan &amp; Galangan • Tegal
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Armada Kapal Docking Galangan Kapal Tegal
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Bunkering kombinasi truk tangki darat ke dermaga langsung melayani kapal penangkap ikan skala
                      besar (purse seine) dan tugboat saat masa docking perawatan berkala di Jl. Jawa, Mintaragen.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Komoditas Utama</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        MGO (Marine Gas Oil) &amp; Biosolar B40
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">directions_boat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  SECTION 5: SOP FLOW INFOGRAPHIC  */}
        <section className="w-full bg-surface-container-low px-gutter-lg py-space-xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col items-center text-center gap-space-xs max-w-3xl mx-auto">
              <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                Quality Assurance &amp; Metrology Standard
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Alur 4 Langkah Protokol &quot;Pasti Pas &amp; Segel Utuh&quot;
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Setiap liter bahan bakar yang disalurkan melalui PT Serena Energy melewati sistem pengawasan berlapis
                tanpa kompromi sejak pengisian kilang hingga tangki klien.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-sm mt-space-md">
              {/*  Step 1  */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary font-headline-sm text-headline-sm font-bold">
                  01
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Verifikasi Kilang &amp; Uji CoA
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Pengambilan muatan resmi langsung dari Depot Pertamina. Verifikasi Certificate of Analysis (CoA)
                    laboratorium independen dan uji densitas awal sebelum keluar gerbang.
                  </p>
                </div>
                <div className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">science</span>
                  Density &amp; Water Content Check
                </div>
              </div>
              {/*  Step 2  */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary font-headline-sm text-headline-sm font-bold">
                  02
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Segel Numerik Barcode Tera</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Pemasangan segel plastik tamper-evident bernomor seri unik pada manhole dan valve pipa buang. Status
                    lokasi dan kecepatan truk diawasi via Live GPS Dispatch Control.
                  </p>
                </div>
                <div className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">qr_code</span>
                  Tamper-Proof Barcode System
                </div>
              </div>
              {/*  Step 3  */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container font-headline-sm text-headline-sm font-bold">
                  03
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">On-Site Joint Quality Test</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Sebelum pemompaan dilakukan, teknisi kami bersama tim penerima klien melakukan sampling hidrometer
                    densitas, flash point lapangan, dan water-paste detector.
                  </p>
                </div>
                <div className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">thermostat</span>
                  Hydrometer &amp; Paste Test
                </div>
              </div>
              {/*  Step 4  */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-headline-sm text-headline-sm font-bold">
                  04
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    BAST &amp; Faktur Pajak Resmi
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Pencetakan Berita Acara Serah Terima (BAST) fisik dan digital ditandatangani bersama. Dokumen
                    legalitas PBBKB dan e-Faktur Pajak lengkap diterbitkan tepat waktu.
                  </p>
                </div>
                <div className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px]">task_alt</span>
                  100% Legal &amp; Compliant
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  SECTION 6: CTA & PROJECT INQUIRY FORM  */}
        <section className="w-full bg-surface px-gutter-lg py-space-xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg bg-surface-container-lowest p-space-xl rounded-xl shadow-sm">
              {/*  CTA Details (5 Cols)  */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
                <div className="flex flex-col gap-space-md">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-primary font-label-sm text-label-sm w-fit">
                    <span className="material-symbols-outlined text-[16px]">support_agent</span>
                    <span className="">LAYANAN TENDER &amp; DISPATCHER 24 JAM</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Memiliki Proyek Strategis yang Membutuhkan Pasokan Energi Tanpa Henti?
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Konsultasikan kebutuhan volume Biosolar B40 industri, Marine Fuel, atau tangki penyimpanan darurat
                    proyek Anda bersama tim spesialis logistik PT Serena Energy. Kami siap mendukung survei rute Franco
                    dan perhitungan harga transparan.
                  </p>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container">
                    <span className="material-symbols-outlined text-primary text-[28px]">phone_in_talk</span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Hotline Dispatcher Cepat
                      </span>
                      <span className="font-title-lg text-title-lg text-on-surface font-bold">+62 822-6988-4913</span>
                    </div>
                  </div>
                  <a
                    className="flex items-center justify-center gap-space-sm w-full py-space-md rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:opacity-95 transition-all"
                    href="https://wa.me/6282269884913"
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    Hubungi Tim Proyek via WhatsApp
                  </a>
                </div>
              </div>
              {/*  RFQ Form (7 Cols)  */}
              <div className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Formulir Permintaan Penawaran Resmi (SPH)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Lengkapi rincian proyek Anda untuk menerima Surat Penawaran Harga resmi bertanda tangan direksi
                    dalam 1x24 jam.
                  </p>
                </div>
                <form className="flex flex-col gap-space-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-sm">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Nama PIC Proyek *
                      </label>
                      <input
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none shadow-sm"
                        placeholder="Contoh: Ir. Bambang Prakoso"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Nama Perusahaan / Konsorsium *
                      </label>
                      <input
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none shadow-sm"
                        placeholder="PT / CV / BUMN Kontraktor"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-sm">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Lokasi Site / Proyek *
                      </label>
                      <input
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none shadow-sm"
                        placeholder="Kota / Kabupaten &amp; Titik Serah"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Estimasi Kebutuhan (Liter / Bulan) *
                      </label>
                      <input
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none shadow-sm"
                        placeholder="Misal: 50.000 L / bulan"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-sm">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Pilihan Moda Pengiriman
                      </label>
                      <select className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none shadow-sm">
                        <option>Truk Tangki Darat (8.000 - 32.000 L)</option>
                        <option>Bunkering Kapal Tongkang / SPOB (Laut/STS)</option>
                        <option>Penempatan Tangki Duduk &amp; Dispenser Site</option>
                        <option>Kombinasi Multimoda Darat &amp; Maritim</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Nomor WhatsApp / Kontak Kerja *
                      </label>
                      <input
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none shadow-sm"
                        placeholder="0812-XXXX-XXXX"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Catatan Kebutuhan Teknis Khusus
                    </label>
                    <textarea
                      className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none shadow-sm"
                      placeholder="Rincian tipe genset, alat berat yang digunakan, kendala akses jalan, atau jadwal mulainya proyek..."
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px] text-secondary">security</span>
                      <span className="">Data proyek terlindungi kerahasiaannya.</span>
                    </div>
                    <button
                      className="px-space-lg py-space-sm rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:opacity-95 transition-all"
                      type="submit"
                    >
                      Kirim Permintaan Penawaran
                    </button>
                  </div>
                </form>
                {/*  Alert Success Box (Hidden by default)  */}
                <div
                  className="hidden p-space-md rounded-xl bg-surface-container text-on-surface flex items-center gap-space-sm"
                  id="form-success"
                >
                  <span className="material-symbols-outlined text-secondary text-[24px]">task_alt</span>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md font-bold">Permintaan Penawaran Terkirim!</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Dispatcher proyek kami akan menghubungi nomor kontak Anda dalam tempo 1-2 jam ke depan.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
