'use client';

import React from 'react';

export default function ProdukPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        {/*  Top Navigation & Header Contextual Section  */}
        <section className="w-full px-gutter-lg py-space-lg bg-surface-container-lowest shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
            {/*  Breadcrumb  */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"
            >
              <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                <span className="material-symbols-outlined text-[16px]">home</span>
                Beranda
              </a>
              <span className="material-symbols-outlined text-[14px] text-tertiary">chevron_right</span>
              <span className="text-on-surface font-semibold">Produk &amp; Spesifikasi Teknis Laboratorium</span>
            </nav>
            {/*  Regulatory Badge & Headline Group  */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-4xl">
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high text-secondary w-fit">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span className="font-label-sm text-label-sm tracking-wide uppercase">
                    SK Dirjen Migas No. 75.K/MG.06/DJM | ASTM International Standard Compliant
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-surface font-bold">
                  Katalog Produk &amp; Spesifikasi Uji Laboratorium Energi Industri
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Standar mutu absolut bahan bakar minyak industri dan bioenergi terakreditasi Ditjen Migas. Setiap
                  ritase pengiriman terjamin orisinalitasnya dan selalu dilengkapi salinan sah Certificate of Analysis
                  (CoA) dari kilang resmi.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-space-md">
                <a
                  className="px-space-lg py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md hover:bg-primary transition-all flex items-center gap-space-xs"
                  href="#rfq-section"
                >
                  <span className="material-symbols-outlined text-[20px]">request_quote</span>
                  Minta Penawaran Resmi
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*  Interactive Product Tabs  */}
        <section className="w-full px-gutter-lg pt-space-lg pb-space-sm bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto pb-space-xs" id="product-tab-container">
              <button className="product-tab-btn active px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-inverse-surface text-on-primary shadow-sm flex items-center gap-2 transition-all">
                <span className="material-symbols-outlined text-[18px]">energy_savings_leaf</span>
                Biosolar B40 / B50 Industri
              </button>
              <button className="product-tab-btn px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">directions_boat</span>
                Marine Fuel Oil (MFO 180 cSt)
              </button>
              <button className="product-tab-btn px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">local_gas_station</span>
                Euro 5 Diesel &amp; Pertamax Turbo
              </button>
              <button className="product-tab-btn px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">opacity</span>
                Kerosene (Minyak Tanah)
              </button>
              <button className="product-tab-btn px-space-md py-space-sm rounded-xl font-label-lg text-label-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">storage</span>
                Penyewaan Tangki &amp; Storage Darat
              </button>
            </div>
          </div>
        </section>
        {/*  Technical Lab Sheet & Quality Verification Details  */}
        <section className="w-full px-gutter-lg py-space-lg bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            {/*  Tab Header Context Banner  */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md relative overflow-hidden">
              <div className="flex flex-col gap-1 z-10">
                <div className="flex items-center gap-space-xs">
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase">
                    Formula B40/B50 Mandatori
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                    Akreditasi KAN ISO/IEC 17025
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-1" id="active-tab-title">
                  Spesifikasi Laboratorium: Minyak Solar Industri 48 (B40 / B50 FAME Blend)
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                  Sesuai Keputusan Direktur Jenderal Minyak dan Gas Bumi Kementerian ESDM tentang Standar dan Mutu
                  (Spesifikasi) Bahan Bakar Minyak Jenis Minyak Solar yang Dipasarkan di Dalam Negeri.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm z-10 shrink-0">
                <a
                  className="px-space-md py-space-sm rounded-xl bg-surface-container-low text-secondary font-label-lg text-label-lg hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2 shadow-sm"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  Unduh CoA &amp; MSDS (PDF)
                </a>
              </div>
            </div>
            {/*  Laboratory Metrics Table  */}
            <div className="w-full rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
              <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">science</span>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface block">
                      Lembar Verifikasi Mutu Laboratorium ASTM
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Batch Terakhir Sampel Kilang Pertamina &amp; Intertek Laboratory Testing
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Metode ASTM D Series
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-md text-body-md">
                  <thead>
                    <tr className="bg-surface-container text-on-surface text-label-md font-label-md uppercase tracking-wider">
                      <th className="px-space-md py-space-sm w-12 text-center">No</th>
                      <th className="px-space-md py-space-sm">Parameter Uji (Characteristic)</th>
                      <th className="px-space-md py-space-sm">Metode Uji ASTM</th>
                      <th className="px-space-md py-space-sm">Batasan Regulasi ESDM (Limits)</th>
                      <th className="px-space-md py-space-sm">Realisasi PT Serena Energy</th>
                      <th className="px-space-md py-space-sm text-center">Hasil Uji</th>
                    </tr>
                  </thead>
                  <tbody className="divide-none text-on-surface" id="lab-table-body">
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">01</td>
                      <td className="px-space-md py-3.5 font-medium">Appearance (Kenampakan Visual)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">
                        Visual Inspection
                      </td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">
                        Clear &amp; Bright (Jernih &amp; Terang)
                      </td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">
                        Clear &amp; Bright, Bebas Endapan
                      </td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS (Grade A)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">02</td>
                      <td className="px-space-md py-3.5 font-medium">Density at 15°C (Massa Jenis)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">
                        ASTM D-1298 / D-4052
                      </td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">815 - 880 kg/m³</td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">835 kg/m³ (Optimal)</td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">03</td>
                      <td className="px-space-md py-3.5 font-medium">ASTM Color (Warna Visual)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-1500</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Maks. 3,0</td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">1,5 (Transparan Bersih)</td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">04</td>
                      <td className="px-space-md py-3.5 font-medium">Viscosity Kinematic at 40°C</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-445</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">2,0 - 5,0 mm²/s (cSt)</td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">3,25 mm²/s</td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">05</td>
                      <td className="px-space-md py-3.5 font-medium">Flash Point (Titik Nyala)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-93 (PMCC)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Min. 52 °C</td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">64 °C (Sangat Aman)</td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">06</td>
                      <td className="px-space-md py-3.5 font-medium">Sulfur Content (Kandungan Belerang)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">
                        ASTM D-4294 / D-2622
                      </td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Maks. 0,20 %m/m (2000 ppm)</td>
                      <td className="px-space-md py-3.5 font-semibold text-primary">0,04 %m/m (Ultra Rendah Emisi)</td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant font-bold">
                          EXCEEDS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">07</td>
                      <td className="px-space-md py-3.5 font-medium">Water Content by Karl Fischer</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-6304</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Maks. 380 mg/kg (ppm)</td>
                      <td className="px-space-md py-3.5 font-semibold text-primary">
                        110 mg/kg (Bebas Korosi &amp; Sludge)
                      </td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant font-bold">
                          EXCEEDS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">08</td>
                      <td className="px-space-md py-3.5 font-medium">Calculated Cetane Index (Angka Setana)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-4737</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Min. 48</td>
                      <td className="px-space-md py-3.5 font-semibold text-primary">
                        52,4 CN (Efisiensi Mesin Tinggi)
                      </td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant font-bold">
                          EXCEEDS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">09</td>
                      <td className="px-space-md py-3.5 font-medium">Pour Point (Titik Tuang)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-97</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Maks. 15 °C</td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">9 °C (Fluiditas Sempurna)</td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">10</td>
                      <td className="px-space-md py-3.5 font-medium">Distillation (Recovery 90% Vol)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-86</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Maks. 370 °C</td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">338 °C</td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                      <td className="px-space-md py-3.5 text-center font-semibold text-tertiary">11</td>
                      <td className="px-space-md py-3.5 font-medium">Copper Strip Corrosion (3 hrs @ 50°C)</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant font-mono text-xs">ASTM D-130</td>
                      <td className="px-space-md py-3.5 text-on-surface-variant">Kelas 1 (Max No. 1)</td>
                      <td className="px-space-md py-3.5 font-semibold text-on-surface">
                        Kelas 1A (Non-Korosif Terhadap Injektor)
                      </td>
                      <td className="px-space-md py-3.5 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">
                          PASS
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*  Table Footer Info  */}
              <div className="p-space-md bg-surface-container-high/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">info</span>
                  <span className="">
                    Catatan Teknis: Seluruh batch Biosolar B40/B50 telah diverifikasi bebas dari kontaminasi mikroba
                    &amp; suspensi gliserol bebas.
                  </span>
                </div>
                <span className="text-tertiary">Pembaruan Berkas: Kuartal Berjalan 2025</span>
              </div>
            </div>
          </div>
        </section>
        {/*  Distribution Fleet & Modality Infrastructure  */}
        <section className="w-full px-gutter-lg py-margin-lg bg-surface-container-low">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            {/*  Section Header  */}
            <div className="flex flex-col gap-space-xs">
              <div className="inline-flex items-center gap-1 text-primary-container font-label-sm text-label-sm uppercase font-bold">
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                Distribusi Terintegrasi Multi-Moda
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                Spesifikasi Armada Logistik &amp; Solusi Penyimpanan
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                Didukung moda transportasi berizin Dirjen Hubdat dan Hubla. Setiap ritase dikawal segel tera barcode
                metrologi legal dengan pelacakan satelit GPS telemetri 24 jam.
              </p>
            </div>
            {/*  Fleet Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
              {/*  Moda 1: Truk Tangki Darat  */}
              <div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div
                  className="h-48 w-full bg-cover bg-center relative"
                  data-alt="Modern clean industrial fuel tanker truck parked at a high-tech Indonesian petroleum logistics depot with blue and red branding accents under bright daytime sunlight."
                  style={{ backgroundImage: "url(\'/images/stitch/f90a057987579f429cc3724f2b51b46f.jpg\')" }}
                >
                  <div className="absolute top-space-sm left-space-sm px-2.5 py-1 rounded bg-inverse-surface/80 text-on-primary font-label-sm text-label-sm backdrop-blur-md">
                    Moda Darat Multi-Kompartemen
                  </div>
                </div>
                <div className="p-space-lg flex flex-col flex-1 gap-space-md">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Armada Truk Tangki Darat
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase mt-0.5">
                      Fuso &amp; Tronton Heavy-Duty
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="font-medium text-on-surface">Kapasitas Tangki:</span>
                      <span className="font-bold text-on-surface">5.000 L, 8.000 L, 16.000 L, 32.000 L</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-2">
                      <span className="font-medium text-on-surface">Minimal Pemesanan (MOQ):</span>
                      <span className="font-bold text-primary-container">5.000 Liter (1 Rit)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="font-medium text-on-surface">Sistem Tera:</span>
                      <span className="font-bold text-on-surface">Tera Metrologi Legalitas Sah</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Keunggulan &amp; Fitur Proteksi:
                    </span>
                    <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">Segel Barcode Numerik Anti-Kontaminasi dan Oplosan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">GPS Tracking Real-Time dengan Pantauan Geofence Dispatcher</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">Flowmeter Digital Terkalibrasi &amp; Kelengkapan Standar CSMS K3LL</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto pt-space-sm">
                    <a
                      className="w-full py-space-sm bg-surface-container text-secondary hover:bg-secondary-fixed rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors"
                      href="#rfq-section"
                    >
                      Jadwalkan Pengiriman Darat
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
              {/*  Moda 2: Kapal Tangker Laut (SPOB / STS)  */}
              <div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div
                  className="h-48 w-full bg-cover bg-center relative"
                  data-alt="Industrial ocean oil tanker vessel and SPOB barge operating near a deep sea port terminal with serene blue ocean waves and calm horizon."
                  style={{ backgroundImage: "url(\'/images/stitch/80e3087b740b2921fec62b44e1be810b.jpg\')" }}
                >
                  <div className="absolute top-space-sm left-space-sm px-2.5 py-1 rounded bg-inverse-surface/80 text-on-primary font-label-sm text-label-sm backdrop-blur-md">
                    Moda Maritim &amp; STS Bunkering
                  </div>
                </div>
                <div className="p-space-lg flex flex-col flex-1 gap-space-md">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Kapal Tangker SPOB Laut
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase mt-0.5">
                      Self Propelled Oil Barge &amp; Tongkang
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="font-medium text-on-surface">Kapasitas Muat:</span>
                      <span className="font-bold text-on-surface">30.000 Liter s/d 2.500 KL</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-2">
                      <span className="font-medium text-on-surface">Minimal Pemesanan (MOQ):</span>
                      <span className="font-bold text-primary-container">30.000 Liter (Marine)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="font-medium text-on-surface">Sertifikasi Armada:</span>
                      <span className="font-bold text-on-surface">Izin Syahbandar &amp; BKI Kelas</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Keunggulan Operasi Perairan:
                    </span>
                    <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">
                          Bunkering Lepas Pantai (Ship-to-Ship Transfer) Tugboat &amp; Mother Vessel
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">
                          Pelayanan sandar Jetty Khusus PLTU, Smelter Tambang &amp; Pabrik Pesisir
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">Pompa discharge high-flow hingga 200 m³/jam untuk efisiensi laytime</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto pt-space-sm">
                    <a
                      className="w-full py-space-sm bg-surface-container text-secondary hover:bg-secondary-fixed rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors"
                      href="#rfq-section"
                    >
                      Konsultasi Bunkering Maritim
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
              {/*  Moda 3: Penyewaan Tangki & Storage Darat  */}
              <div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div
                  className="h-48 w-full bg-cover bg-center relative"
                  data-alt="Industrial fuel storage skid tank installation in a remote civil engineering construction site and mining field equipped with automated digital fuel dispenser."
                  style={{ backgroundImage: "url(\'/images/stitch/bb1101b2038f9d2512c5b81df9090010.jpg\')" }}
                >
                  <div className="absolute top-space-sm left-space-sm px-2.5 py-1 rounded bg-inverse-surface/80 text-on-primary font-label-sm text-label-sm backdrop-blur-md">
                    Fasilitas Onsite Storage &amp; Dispenser
                  </div>
                </div>
                <div className="p-space-lg flex flex-col flex-1 gap-space-md">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Penyewaan Tangki Darat (Skid Tank)
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary uppercase mt-0.5">
                      Solusi Buffer Stock Proyek Terpencil
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="font-medium text-on-surface">Ukuran Tangki:</span>
                      <span className="font-bold text-on-surface">5.000 L s/d 100.000 L</span>
                    </div>
                    <div className="flex items-center justify-between py-1 px-2">
                      <span className="font-medium text-on-surface">Tipe Unit:</span>
                      <span className="font-bold text-primary-container">Skid Tank Duduk &amp; Kontainer</span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                      <span className="font-medium text-on-surface">Dispenser:</span>
                      <span className="font-bold text-on-surface">Nozzle Digital &amp; Pompa Eksplosion-Proof</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Integrasi Onsite Industri:
                    </span>
                    <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">
                          Solusi bahan bakar non-stop di area tambang, batching plant, &amp; smelter
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">Pencatatan konsumsi BBM otomatis menggunakan tag RFID &amp; Log Harian</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span className="">Bebas biaya pemeliharaan berkala dan inspeksi tangki berkala</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto pt-space-sm">
                    <a
                      className="w-full py-space-sm bg-surface-container text-secondary hover:bg-secondary-fixed rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors"
                      href="#rfq-section"
                    >
                      Ajukan Sewa Tangki Proyek
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Jaminan 3 Pasti Pas & Value Chain PT Serena Energy  */}
        <section className="w-full px-gutter-lg py-margin-lg bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              {/*  Text & Core Pillars  */}
              <div className="lg:col-span-7 flex flex-col gap-space-md" data-parallax-speed="0.04">
                <div className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm uppercase font-bold">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  Integritas Operasional Serena Energy
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                  Komitmen 3 Prinsip Mutlak: Pasti Mutu, Pasti Volume &amp; Pasti Waktu
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Dalam sektor energi industri, deviasi kecil pada kualitas atau volume dapat mengganggu operasional
                  bernilai miliaran rupiah. PT Serena Energy memegang lisensi Izin Niaga Umum Dirjen Migas ESDM No.
                  05.NW.03.18.00.124 dengan sertifikasi manajemen mutu bertaraf internasional.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-sm">
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-primary-container flex items-center justify-center shadow-sm mb-1">
                      <span className="material-symbols-outlined text-[24px]">grade</span>
                    </div>
                    <span className="font-title-md text-title-md font-bold text-on-surface">Pasti Mutu</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Setiap droping diuji densitas, flash point, &amp; water content di hadapan perwakilan klien
                      sebelum transfer.
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-secondary flex items-center justify-center shadow-sm mb-1">
                      <span className="material-symbols-outlined text-[24px]">scale</span>
                    </div>
                    <span className="font-title-md text-title-md font-bold text-on-surface">Pasti Volume</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Kalibrasi rutin Badan Metrologi Legal dengan segel kawat timah barcode utuh pada seluruh
                      kompartemen.
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-inverse-surface flex items-center justify-center shadow-sm mb-1">
                      <span className="material-symbols-outlined text-[24px]">alarm_on</span>
                    </div>
                    <span className="font-title-md text-title-md font-bold text-on-surface">Pasti Waktu</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Dispatching armada 24 jam nonstop dengan estimasi ketepatan jadwal tiba (ETA) akurat dan
                      terpantau.
                    </p>
                  </div>
                </div>
              </div>
              {/*  Infographic Card & Licensing Block  */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="p-space-lg rounded-xl bg-inverse-surface text-inverse-on-surface shadow-lg flex flex-col gap-space-md relative overflow-hidden">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 flex items-center justify-center text-primary-fixed shrink-0">
                      <span className="material-symbols-outlined text-[28px]">policy</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface">
                        Legalitas Sah &amp; Berizin
                      </span>
                      <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase">
                        Kementerian ESDM Republik Indonesia
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2 text-inverse-on-surface/90 font-body-sm text-body-sm">
                    <div className="flex justify-between py-1 border-none bg-surface-container-lowest/5 px-3 rounded">
                      <span className="text-tertiary-fixed">Nomor Izin Niaga Umum:</span>
                      <span className="font-mono font-bold text-inverse-on-surface">05.NW.03.18.00.124</span>
                    </div>
                    <div className="flex justify-between py-1 px-3">
                      <span className="text-tertiary-fixed">Pengawasan Mutu:</span>
                      <span className="font-semibold text-inverse-on-surface">PPPTMGB LEMIGAS Jakarta</span>
                    </div>
                    <div className="flex justify-between py-1 border-none bg-surface-container-lowest/5 px-3 rounded">
                      <span className="text-tertiary-fixed">Standar K3LL:</span>
                      <span className="font-semibold text-inverse-on-surface">
                        SMK3 PP 50/2012 &amp; CSMS Pertamina
                      </span>
                    </div>
                    <div className="flex justify-between py-1 px-3">
                      <span className="text-tertiary-fixed">Status Pajak:</span>
                      <span className="font-semibold text-inverse-on-surface">
                        PKP Resmi (Faktur Pajak PPN &amp; PBBKB)
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-lowest/10 flex items-center gap-space-sm mt-2">
                    <span className="material-symbols-outlined text-[24px] text-primary-fixed shrink-0">
                      support_agent
                    </span>
                    <p className="font-body-sm text-body-sm text-inverse-on-surface">
                      Didukung call center dan tim teknisi bahan bakar siap uji lapangan (on-site testing kit) bilamana
                      diperlukan saat proses serah terima BBM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Interactive RFQ Form (Formulir Pemesanan & Spesifikasi Cepat)  */}
        <section className="w-full px-gutter-lg py-margin-lg bg-surface" id="rfq-section">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col lg:flex-row gap-space-xl">
              {/*  Left: RFQ Introduction & Quick WhatsApp Call  */}
              <div className="lg:w-5/12 flex flex-col justify-between gap-space-lg">
                <div className="flex flex-col gap-space-sm">
                  <span className="text-primary-container font-label-md text-label-md uppercase font-bold tracking-wider">
                    Fast Quotation System
                  </span>
                  <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                    Minta Surat Penawaran Resmi &amp; Jadwal Suplai
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Silakan lengkapi formulir spesifikasi teknis kebutuhan industri Anda. Tim Dispatcher Serena Energy
                    akan menerbitkan Surat Penawaran Harga (SPH) resmi lengkap dengan Certificate of Analysis terkini
                    dalam waktu maksimal 30 menit.
                  </p>
                  <div className="flex flex-col gap-space-sm mt-space-md">
                    <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                      <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Harga transparan kompetitif sudah termasuk PPN &amp; PBBKB.
                      </span>
                    </div>
                    <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                      <span className="material-symbols-outlined text-secondary text-[24px]">local_shipping</span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Jaminan pasokan kontinyu untuk kontrak bulanan &amp; tahunan.
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Direct Hotline Card  */}
                <div className="p-space-md rounded-xl bg-surface-container-high/60 flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase">
                    Hotline Penjualan &amp; Bunkering Siaga:
                  </span>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">
                        phone_in_talk
                      </span>
                      <span className="font-title-lg text-title-lg font-bold text-on-surface">+62 811-842-595</span>
                    </div>
                    <a
                      className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-colors flex items-center gap-1"
                      href="https://wa.me/62811842595"
                      rel="noopener"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px]">chat</span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              {/*  Right: RFQ Interactive Input Form  */}
              <div className="lg:w-7/12 flex flex-col">
                <form className="flex flex-col gap-space-md" id="rfq-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/*  Nama Pemohon & Perusahaan  */}
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="company_name"
                      >
                        Nama Perusahaan / PT *
                      </label>
                      <input
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="company_name"
                        placeholder="Contoh: PT Bangun Mandiri Perkasa"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="contact_name"
                      >
                        Nama PIC &amp; Jabatan *
                      </label>
                      <input
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="contact_name"
                        placeholder="Contoh: Hendra Wijaya (Procurement Manager)"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/*  Kontak WhatsApp & Email  */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="contact_wa">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="contact_wa"
                        placeholder="Contoh: 081234567890"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="contact_email"
                      >
                        Email Perusahaan *
                      </label>
                      <input
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="contact_email"
                        placeholder="procurement@perusahaan.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/*  Pilihan Produk  */}
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="product_select"
                      >
                        Jenis Produk Energi *
                      </label>
                      <select
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="product_select"
                      >
                        <option value="Biosolar B40 / B50 Industri">Biosolar B40 / B50 Industri</option>
                        <option value="Marine Fuel Oil (MFO 180 cSt)">Marine Fuel Oil (MFO 180 cSt)</option>
                        <option value="Euro 5 Diesel (Sulfit &lt; 10 ppm)">Euro 5 Diesel (Rendah Emisi)</option>
                        <option value="Pertamax Turbo Industri">Pertamax Turbo RON 98 Industri</option>
                        <option value="Kerosene / Minyak Tanah">Kerosene (Minyak Tanah Industri)</option>
                        <option value="Sewa Tangki &amp; Dispenser">Paket Sewa Tangki + Suplai BBM Rutin</option>
                      </select>
                    </div>
                    {/*  Pilihan Moda Distribusi  */}
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="delivery_mode"
                      >
                        Moda Pengiriman *
                      </label>
                      <select
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="delivery_mode"
                      >
                        <option value="Truk Tangki Darat (5.000 L - 32.000 L)">
                          Truk Tangki Darat (5.000 L - 32.000 L)
                        </option>
                        <option value="Kapal SPOB / Tongkang Laut (30 KL - 2.500 KL)">
                          Kapal SPOB / Tongkang Laut (30 KL - 2.500 KL)
                        </option>
                        <option value="Penyewaan Tangki Skid Tank Lapangan">
                          Penyewaan Skid Tank Lapangan + Suplai BBM
                        </option>
                        <option value="Pengambilan Sendiri (Loco Depot Jakarta)">
                          Pengambilan Sendiri (Loco Depot Serena)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {/*  Estimasi Kebutuhan & Skema Titik Serah  */}
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="order_volume"
                      >
                        Estimasi Volume (Liter / Bulan) *
                      </label>
                      <input
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="order_volume"
                        placeholder="Contoh: 16.000 Liter (Rutin tiap minggu)"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="incoterm">
                        Titik Serah (Incoterm) *
                      </label>
                      <select
                        className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md"
                        id="incoterm"
                      >
                        <option value="Franco (Diantar ke Gudang/Proyek Klien)">
                          Franco (Diantar Tiba di Proyek / Pabrik)
                        </option>
                        <option value="Loco (Diambil di Depot Kalideres Jakarta)">
                          Loco (Diambil Sendiri di Depot Serena)
                        </option>
                        <option value="STS (Ship-to-Ship Laut Lepas / Pelabuhan)">
                          Ship to Ship (Bunkering Dermaga / Jetty)
                        </option>
                      </select>
                    </div>
                  </div>
                  {/*  Alamat & Catatan Teknis  */}
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-md text-label-md font-semibold text-on-surface"
                      htmlFor="delivery_address"
                    >
                      Lokasi Proyek / Alamat Pengiriman &amp; Catatan Khusus
                    </label>
                    <textarea
                      className="w-full px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm font-body-md text-body-md resize-none"
                      id="delivery_address"
                      placeholder="Sebutkan lokasi spesifik titik serah (Kabupaten/Kota), estimasi tanggal mulai suplai, atau spesifikasi pengisian khusus..."
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                    <div className="flex items-center gap-2">
                      <input
                        defaultChecked
                        className="w-4 h-4 rounded text-primary-container focus:ring-secondary"
                        id="agree_terms"
                        required
                        type="checkbox"
                      />
                      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="agree_terms">
                        Kirimkan salinan dokumen Certificate of Analysis (CoA) &amp; lembar MSDS terbaru bersama
                        penawaran harga.
                      </label>
                    </div>
                    <button
                      className="w-full sm:w-auto px-space-xl py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md hover:bg-primary transition-all flex items-center justify-center gap-space-xs shrink-0"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Kirim Permintaan SPH
                    </button>
                  </div>
                </form>
                <div
                  className="hidden mt-space-md p-space-md rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center gap-space-sm"
                  id="form-success-banner"
                >
                  <span className="material-symbols-outlined text-[24px]">task_alt</span>
                  <div>
                    <span className="font-title-md text-title-md block">Permintaan Penawaran Berhasil Terkirim!</span>
                    <span className="font-body-sm text-body-sm">
                      Dispatcher Serena Energy sedang menyiapkan Surat Penawaran Resmi dan akan menghubungi Anda via
                      WhatsApp/Email dalam 15-30 menit.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Interactive Script for Tabs and RFQ  */}
      </div>
    </div>
  );
}
