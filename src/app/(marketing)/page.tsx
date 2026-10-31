'use client';
import React from 'react';
export default function HomePage() {
  return (
    <div className="w-full">
      {' '}
      <div className="flex flex-col w-full">
        {' '}
        {/* Top Parallax & Hero Section */}{' '}
        <section className="animate-fade-in-up relative w-full overflow-hidden bg-surface text-on-surface">
          {' '}
          {/* Background Image & Atmospheric Industrial Scrim Overlay */}{' '}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            data-parallax-speed="-0.15"
            data-alt="Bendera Merah Putih Indonesia berkibar di langit biru - Simbol Kedaulatan Energi Nasional"
            style={{ backgroundImage: "url('/images/hero-flag-bg.jpg')" }}
          >
            {' '}
            {/* Multi-layered overlay to preserve contrast with text while highlighting the national flag */}{' '}
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/70 to-on-background/40"></div>{' '}
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-on-background/30"></div>{' '}
          </div>{' '}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-gutter-lg pb-20 md:pb-24 pt-20">
            {' '}
            {/* Authority Subhead Badge */} {/* Main Hero Grid */}{' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-end mb-16">
              {' '}
              <div className="lg:col-span-12 flex flex-col gap-space-md max-w-4xl" data-parallax-speed="0.04">
                {' '}
                <h1 className="font-headline-xl text-headline-xl tracking-tighter text-inverse-on-surface font-bold uppercase leading-none">
                  {' '}
                  ENERGIZING <br /> <span className="text-primary-container">YOUR FUTURE</span>{' '}
                </h1>{' '}
                <p className="font-headline-md text-headline-md font-semibold text-secondary-fixed max-w-3xl leading-snug">
                  {' '}
                  Mitra Terpercaya Pengadaan &amp; Distribusi Bahan Bakar Minyak Industri Skala Nasional{' '}
                </p>{' '}
                <div className="inline-flex items-center gap-space-sm pl-space-md border-l-2 border-primary-container py-1 text-inverse-on-surface">
                  {' '}
                  <span className="font-title-md text-title-md font-medium text-inverse-on-surface italic">
                    {' '}
                    “Standar Pasti Pas Pertamina: Tepat mutu, tepat waktu, tepat kuantitas.”{' '}
                  </span>{' '}
                </div>{' '}
                <p className="font-body-lg text-body-lg text-inverse-on-surface/80 max-w-2xl leading-relaxed">
                  {' '}
                  Infrastruktur penyaluran energi terintegrasi mencakup terminal utama, depo darat rekanan, armada
                  tangki multi-kompartemen, serta kapal bunker laut (SPOB / STS) di seluruh penjuru Indonesia.{' '}
                </p>{' '}
                <div className="flex flex-wrap items-center gap-space-md pt-2">
                  {' '}
                  <a
                    className="inline-flex items-center justify-center px-space-lg py-space-sm h-11 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all"
                    href="#rfq-section"
                  >
                    {' '}
                    Minta Penawaran Resmi{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            {/* 3 Key Metrics Strip (Refined Translucent Overlay Cards) */}{' '}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg pt-space-lg border-t border-surface-container-high/30"
              data-parallax-speed="0.06"
            >
              {' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-headline-md text-headline-md font-bold text-inverse-on-surface">
                  {' '}
                  18+ Tahun Dedikasi{' '}
                </span>{' '}
                <p className="font-body-md text-body-md text-inverse-on-surface/80">
                  {' '}
                  Melayani pasokan energi strategis nasional tanpa henti sejak berdiri resmi pada 31 Agustus 2006.{' '}
                </p>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-xs md:border-l md:border-surface-container-high/30 md:pl-space-lg">
                {' '}
                <span className="font-headline-md text-headline-md font-bold text-inverse-on-surface">
                  {' '}
                  Pelosok Nusantara{' '}
                </span>{' '}
                <p className="font-body-md text-body-md text-inverse-on-surface/80">
                  {' '}
                  Dukungan terminal utama, depo rekanan, armada darat terpadu, dan kapal bunker laut (SPOB/STS).{' '}
                </p>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-xs md:border-l md:border-surface-container-high/30 md:pl-space-lg">
                {' '}
                <span className="font-headline-md text-headline-md font-bold text-inverse-on-surface">
                  {' '}
                  Standar Pasti Pas{' '}
                </span>{' '}
                <p className="font-body-md text-body-md text-inverse-on-surface/80">
                  {' '}
                  100% On-Spec dengan sertifikasi Certificate of Analysis (CoA) resmi dari Kilang Pertamina &amp;
                  Lemigas.{' '}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Section 2: Ringkasan Eksekutif & 5 Pilar Keunggulan */}{' '}
        <section className="animate-fade-in-up w-full bg-surface-container-low py-margin-lg" id="ekosistem-energi">
          {' '}
          <div className="w-full max-w-[1440px] mx-auto px-gutter-lg">
            {' '}
            {/* Section Label & Headline */}{' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-16">
              {' '}
              <div>
                {' '}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold block mb-space-xs">
                  {' '}
                  ARSITEKTUR OPERASIONAL{' '}
                </span>{' '}
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">
                  {' '}
                  FONDASI KEANDALAN DISTRIBUSI ENERGI NASIONAL{' '}
                </h2>{' '}
              </div>{' '}
              <a
                className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary-container hover:text-primary transition-colors"
                href="/tentang"
              >
                {' '}
                <span className="">Pelajari Profil Lengkap &amp; Legalitas Kami</span>{' '}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{' '}
              </a>{' '}
            </div>{' '}
            {/* Narrative Row */}{' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg mb-16 items-start">
              {' '}
              <div className="lg:col-span-8">
                {' '}
                <p className="font-title-lg text-title-lg font-normal text-on-surface leading-relaxed">
                  {' '}
                  Agregator dan penyalur resmi BBM industri berlisensi nasional. Menghubungkan kilang minyak terkemuka
                  langsung ke sektor pertambangan, maritim, manufaktur, dan proyek strategis nusantara.{' '}
                </p>{' '}
              </div>{' '}
              <div className="lg:col-span-4 flex lg:justify-end items-center">
                {' '}
                <div className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-surface-container text-secondary">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>{' '}
                  <span className="font-label-md text-label-md">Izin Niaga Dirjen Migas Resmi</span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            {/* 5 Operational Pillars (Clean Editorial Row) */}{' '}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter pt-8 border-t border-surface-container-high">
              {' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container">01</span>{' '}
                <h3 className="font-title-md text-title-md font-bold text-on-surface">Tepat Mutu &amp; Volume</h3>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {' '}
                  Segel tera metrologi &amp; Certificate of Analysis resmi.{' '}
                </p>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container">02</span>{' '}
                <h3 className="font-title-md text-title-md font-bold text-on-surface">Siaga 24/7</h3>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {' '}
                  Monitoring dispatcher tanpa jeda operasional.{' '}
                </p>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container">03</span>{' '}
                <h3 className="font-title-md text-title-md font-bold text-on-surface">Penetrasi Medan</h3>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {' '}
                  Armada 4x4 tangki siap akses pelosok dan remote site.{' '}
                </p>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container">04</span>{' '}
                <h3 className="font-title-md text-title-md font-bold text-on-surface">Transisi Bersih</h3>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {' '}
                  Formulasi Biosolar B40/B50 dan PLTS Atap industri.{' '}
                </p>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container">05</span>{' '}
                <h3 className="font-title-md text-title-md font-bold text-on-surface">Harga Transparan</h3>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {' '}
                  Indeks resmi Pertamina &amp; fleksibilitas tempo pembayaran.{' '}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Section 3: Portofolio Energi & Logistik Terpadu */}{' '}
        <section className="animate-fade-in-up w-full bg-surface py-margin-lg">
          {' '}
          <div className="w-full max-w-[1440px] mx-auto px-gutter-lg">
            {' '}
            {/* Section Header */}{' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
              {' '}
              <div>
                {' '}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
                  {' '}
                  SPESIFIKASI INDUSTRI &amp; LOGISTIK{' '}
                </span>{' '}
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">
                  {' '}
                  PORTOFOLIO ENERGI &amp; LOGISTIK TERPADU{' '}
                </h2>{' '}
              </div>{' '}
              <a
                className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary-container hover:text-primary transition-colors"
                href="/produk"
              >
                {' '}
                <span className="">Lihat Spesifikasi Teknis Laboratorium &amp; Standar ASTM Biosolar Lengkap</span>{' '}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{' '}
              </a>{' '}
            </div>{' '}
            {/* Core Fuel Categories (Pure Editorial Layout) */}{' '}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg mb-16">
              {' '}
              <div className="flex flex-col gap-space-sm pb-space-md border-b border-surface-container-high interactive-card">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-sm text-label-sm font-bold text-primary-container uppercase">
                    {' '}
                    Darat &amp; Tambang{' '}
                  </span>{' '}
                  <span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>{' '}
                </div>{' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {' '}
                  Biosolar B40 / B50 Industri{' '}
                </h3>{' '}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {' '}
                  BBM diesel nabati murni untuk armada alat berat dan genset industri manufaktur.{' '}
                </p>{' '}
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {' '}
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                    {' '}
                    CN 48-51{' '}
                  </span>{' '}
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                    {' '}
                    Sulfur ≤ 500 ppm{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-sm pb-space-md border-b border-surface-container-high interactive-card">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                    Bunkering Laut
                  </span>{' '}
                  <span className="material-symbols-outlined text-secondary text-[20px]">directions_boat</span>{' '}
                </div>{' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {' '}
                  Marine Fuel Oil &amp; MDO{' '}
                </h3>{' '}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {' '}
                  Bahan bakar maritim andal untuk kapal kargo, tugboat batubara, dan genset pesisir.{' '}
                </p>{' '}
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {' '}
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                    {' '}
                    ISO 8217{' '}
                  </span>{' '}
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                    {' '}
                    MFO 180 / 380 cSt{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              <div className="flex flex-col gap-space-sm pb-space-md border-b border-surface-container-high interactive-card">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase">
                    {' '}
                    Rendah Emisi{' '}
                  </span>{' '}
                  <span className="material-symbols-outlined text-secondary text-[20px]">eco</span>{' '}
                </div>{' '}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {' '}
                  Euro 5 Diesel &amp; Solar Panel{' '}
                </h3>{' '}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {' '}
                  Diesel ultra-rendah sulfur (10 ppm) dan solusi dekarbonisasi PLTS atap industri.{' '}
                </p>{' '}
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {' '}
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                    {' '}
                    Sulfur ≤ 10 ppm{' '}
                  </span>{' '}
                  <span className="px-2 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                    {' '}
                    EPC On-Grid PLTS{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            {/* Fleet & Transport Capacity Bar */}{' '}
            <div className="bg-surface-container p-space-lg rounded-2xl interactive-card">
              {' '}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-6">
                {' '}
                <div>
                  {' '}
                  <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                    {' '}
                    KAPASITAS ARMADA KONTINU{' '}
                  </span>{' '}
                  <h4 className="font-title-lg text-title-lg font-bold text-on-surface">
                    {' '}
                    Infrastruktur Penyaluran Darat &amp; Bunkering Lepas Pantai{' '}
                  </h4>{' '}
                </div>{' '}
                <span className="font-label-md text-label-md text-on-surface-variant">
                  {' '}
                  Dilengkapi GPS Tracking, Flowmeter Tera &amp; Perlengkapan K3LL Mandiri{' '}
                </span>{' '}
              </div>{' '}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {' '}
                <div className="flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0 shadow-sm">
                    {' '}
                    <span className="material-symbols-outlined text-[22px]">local_shipping</span>{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface block">
                      {' '}
                      5.000 – 32.000 L{' '}
                    </span>{' '}
                    <span className="font-label-md text-label-md font-semibold text-secondary">
                      {' '}
                      Truk Tangki Darat (Multi-Kompartemen){' '}
                    </span>{' '}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {' '}
                      Armada Hino &amp; Mitsubishi Fuso siap antar wilayah Jawa, Bali, Sumatera, dan Kalimantan.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0 shadow-sm">
                    {' '}
                    <span className="material-symbols-outlined text-[22px]">directions_boat</span>{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface block">
                      {' '}
                      Min. 30.000 L – 2.500 KL{' '}
                    </span>{' '}
                    <span className="font-label-md text-label-md font-semibold text-secondary">
                      {' '}
                      SPOB / STS Bunkering Maritim{' '}
                    </span>{' '}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {' '}
                      Armada tanker laut tersertifikasi Syahbandar melayani Ship-to-Ship di dermaga &amp; offshore.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-on-surface shrink-0 shadow-sm">
                    {' '}
                    <span className="material-symbols-outlined text-[22px]">propane_tank</span>{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface block">
                      {' '}
                      10.000 – 100.000 L{' '}
                    </span>{' '}
                    <span className="font-label-md text-label-md font-semibold text-secondary">
                      {' '}
                      Tangki Storage &amp; Skid Tank Site{' '}
                    </span>{' '}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {' '}
                      Fasilitas peminjaman tangki penyimpanan BBM langsung di lokasi proyek konstruksi dan tambang.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Section 4: Snapshot Harga BBM Industri Pertamina Terkini */}{' '}
        <section className="animate-fade-in-up w-full bg-surface-container-low py-margin-lg">
          {' '}
          <div className="w-full max-w-[1440px] mx-auto px-gutter-lg">
            {' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
              {' '}
              <div>
                {' '}
                <div className="flex items-center gap-space-xs mb-space-xs">
                  {' '}
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>{' '}
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold">
                    {' '}
                    UPDATE RESMI PERTAMINA PATRA NIAGA{' '}
                  </span>{' '}
                </div>{' '}
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">
                  {' '}
                  TRANSPARANSI HARGA KEEKONOMIAN BBM INDUSTRI{' '}
                </h2>{' '}
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  {' '}
                  Daftar indeks harga resmi Pertamina terkini periode berjalan Juni 2025 (Wilayah I / Franco Pelabuhan
                  Utama).{' '}
                </p>{' '}
              </div>{' '}
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm h-11 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all"
                href="/harga"
              >
                {' '}
                <span className="">Buka Tabel Harga Lengkap 4 Wilayah &amp; Unduh SK Resmi PDF</span>{' '}
                <span className="material-symbols-outlined text-[18px] text-primary-container">open_in_new</span>{' '}
              </a>{' '}
            </div>{' '}
            {/* Ticker Row (Cards without Heavy Borders) */}{' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-8">
              {' '}
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div>
                  {' '}
                  <div className="flex items-center justify-between mb-space-sm">
                    {' '}
                    <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">Diesel</span>{' '}
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed-variant">
                      {' '}
                      B40{' '}
                    </span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md font-bold text-on-surface">Biosolar Industri</h3>{' '}
                  <span className="font-headline-md text-headline-md font-bold text-primary-container mt-2 block">
                    {' '}
                    Rp 16.250{' '}
                    <span className="font-label-sm text-label-sm font-normal text-on-surface-variant">
                      / Liter
                    </span>{' '}
                  </span>{' '}
                </div>{' '}
                <div className="mt-4 pt-3 border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
                  {' '}
                  Loco Depo Pertamina{' '}
                </div>{' '}
              </div>{' '}
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div>
                  {' '}
                  <div className="flex items-center justify-between mb-space-sm">
                    {' '}
                    <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                      Gasoline
                    </span>{' '}
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary-fixed text-on-primary-fixed-variant">
                      {' '}
                      RON 98{' '}
                    </span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md font-bold text-on-surface">Pertamax Turbo</h3>{' '}
                  <span className="font-headline-md text-headline-md font-bold text-on-surface mt-2 block">
                    {' '}
                    Rp 18.900{' '}
                    <span className="font-label-sm text-label-sm font-normal text-on-surface-variant">
                      / Liter
                    </span>{' '}
                  </span>{' '}
                </div>{' '}
                <div className="mt-4 pt-3 border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
                  {' '}
                  High Performance Fleet{' '}
                </div>{' '}
              </div>{' '}
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div>
                  {' '}
                  <div className="flex items-center justify-between mb-space-sm">
                    {' '}
                    <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">Maritim</span>{' '}
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed-variant">
                      {' '}
                      Bunker{' '}
                    </span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md font-bold text-on-surface">Marine Fuel Oil 180</h3>{' '}
                  <span className="font-headline-md text-headline-md font-bold text-on-surface mt-2 block">
                    {' '}
                    Rp 13.800{' '}
                    <span className="font-label-sm text-label-sm font-normal text-on-surface-variant">
                      / Liter
                    </span>{' '}
                  </span>{' '}
                </div>{' '}
                <div className="mt-4 pt-3 border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
                  {' '}
                  Min. 30.000 Liter{' '}
                </div>{' '}
              </div>{' '}
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div>
                  {' '}
                  <div className="flex items-center justify-between mb-space-sm">
                    {' '}
                    <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                      Minyak Tanah
                    </span>{' '}
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">
                      {' '}
                      Kerosene{' '}
                    </span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md font-bold text-on-surface">Kerosene Industri</h3>{' '}
                  <span className="font-headline-md text-headline-md font-bold text-on-surface mt-2 block">
                    {' '}
                    Rp 17.100{' '}
                    <span className="font-label-sm text-label-sm font-normal text-on-surface-variant">
                      / Liter
                    </span>{' '}
                  </span>{' '}
                </div>{' '}
                <div className="mt-4 pt-3 border-t border-surface-container text-on-surface-variant font-body-sm text-body-sm">
                  {' '}
                  Khusus Manufaktur{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="flex items-center justify-between flex-wrap gap-space-sm px-space-md py-space-sm bg-surface-container rounded-xl text-on-surface-variant font-body-sm text-body-sm">
              {' '}
              <span className="">
                {' '}
                *Catatan: Harga belum termasuk PBBKB daerah pengiriman dan ongkos angkut (Franco). Silakan konsultasikan
                untuk penawaran Franco on site.{' '}
              </span>{' '}
              <a className="text-primary-container font-label-md text-label-md hover:underline" href="#rfq-section">
                {' '}
                Kalkulasi Ongkos Kirim Franco →{' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Section 5: Showcase Proyek Strategis Terpilih */}{' '}
        <section className="animate-fade-in-up w-full bg-surface py-margin-lg">
          {' '}
          <div className="w-full max-w-[1440px] mx-auto px-gutter-lg">
            {' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-16">
              {' '}
              <div>
                {' '}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold block mb-space-xs">
                  {' '}
                  BUKTI KAPABILITAS NASIONAL{' '}
                </span>{' '}
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">
                  {' '}
                  REKAM JEJAK PROYEK STRATEGIS NASIONAL{' '}
                </h2>{' '}
              </div>{' '}
              <a
                className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary-container hover:text-primary transition-colors"
                href="/proyek"
              >
                {' '}
                <span className="">Lihat Seluruh Portofolio Proyek &amp; Studi Kasus Logistik</span>{' '}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{' '}
              </a>{' '}
            </div>{' '}
            {/* 3 Featured Projects (Card-free Editorial Row) */}{' '}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-lg">
              {' '}
              {/* Project 1 */}{' '}
              <div className="flex flex-col gap-space-md group interactive-card">
                {' '}
                <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                  {' '}
                  <div
                    className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-parallax-speed="0.05"
                    data-alt="Heavy construction earthmovers and asphalt pavers working on high-priority highway bridge infrastructure in Central Java Indonesia, sunny afternoon lighting, industrial engineering aesthetic."
                    style={{ backgroundImage: "url(\'/images/stitch/dfadaf4b9e1f185b60e6d4af3888be68.jpg\')" }}
                  ></div>{' '}
                  <div className="absolute top-4 left-4">
                    {' '}
                    <span className="px-space-sm py-1 rounded bg-on-background/80 text-on-primary font-label-sm text-label-sm backdrop-blur">
                      {' '}
                      Infrastruktur Tol Trans Jawa{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <div>
                  {' '}
                  <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                    {' '}
                    Suplai Solar Industri Darat{' '}
                  </span>{' '}
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">
                    {' '}
                    Proyek Tol Yogyakarta – Bawen{' '}
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {' '}
                    Suplai rutin 80.000 L/minggu untuk alat berat konsorsium BUMN Karya dengan on-time delivery
                    99.8%.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="flex items-center gap-space-sm pt-2 text-on-surface font-label-md text-label-md">
                  {' '}
                  <span className="material-symbols-outlined text-secondary text-[18px]">pin_drop</span>{' '}
                  <span className="">Seksi 1 Sleman – Banyurejo</span>{' '}
                </div>{' '}
              </div>{' '}
              {/* Project 2 */}{' '}
              <div className="flex flex-col gap-space-md group interactive-card">
                {' '}
                <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                  {' '}
                  <div
                    className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-parallax-speed="0.05"
                    data-alt="Mega infrastructure development in East Kalimantan showing massive earthworks, industrial trucks, and modern construction zone under vibrant blue sky with tropical greenery."
                    style={{ backgroundImage: "url(\'/images/stitch/7d131aba1b081167764eab4832995aba.jpg\')" }}
                  ></div>{' '}
                  <div className="absolute top-4 left-4">
                    {' '}
                    <span className="px-space-sm py-1 rounded bg-on-background/80 text-on-primary font-label-sm text-label-sm backdrop-blur">
                      {' '}
                      Mega Proyek Ibu Kota Nusantara{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <div>
                  {' '}
                  <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                    {' '}
                    Logistik All-Terrain Kalimantan{' '}
                  </span>{' '}
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">
                    {' '}
                    Koridor Tol IKN Kariangau – Karangjuang{' '}
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {' '}
                    Penyediaan tangki mobile 32.000 L dan armada 4x4 menembus jalur tanah merah IKN Segmen 3B.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="flex items-center gap-space-sm pt-2 text-on-surface font-label-md text-label-md">
                  {' '}
                  <span className="material-symbols-outlined text-secondary text-[18px]">pin_drop</span>{' '}
                  <span className="">Balikpapan – Sepaku, Kaltim</span>{' '}
                </div>{' '}
              </div>{' '}
              {/* Project 3 */}{' '}
              <div className="flex flex-col gap-space-md group interactive-card">
                {' '}
                <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                  {' '}
                  <div
                    className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-parallax-speed="0.05"
                    data-alt="Bunkering vessel performing ship to ship fuel transfer to a large coal barge tug boat in deep blue coastal waters of Java Sea Indonesia, aerial telephoto angle with sea mist."
                    style={{ backgroundImage: "url(\'/images/stitch/17fd4ef1061b40df0d35e96ca5d295e0.jpg\')" }}
                  ></div>{' '}
                  <div className="absolute top-4 left-4">
                    {' '}
                    <span className="px-space-sm py-1 rounded bg-on-background/80 text-on-primary font-label-sm text-label-sm backdrop-blur">
                      {' '}
                      Operasi STS Maritim{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <div>
                  {' '}
                  <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                    {' '}
                    Bunkering Kapal Laut Energi{' '}
                  </span>{' '}
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">
                    {' '}
                    STS Bunkering Tugboat Tongkang PLTU Batang{' '}
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {' '}
                    Bunkering Ship-to-Ship (STS) kontinu untuk armada logistik batubara PLTU berkapasitas 2 x 1.000
                    MW.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="flex items-center gap-space-sm pt-2 text-on-surface font-label-md text-label-md">
                  {' '}
                  <span className="material-symbols-outlined text-secondary text-[18px]">pin_drop</span>{' '}
                  <span className="">Laut Jawa – Perairan Batang</span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Section 6: Quick Consultation / RFQ Form Section */}{' '}
        <section className="animate-fade-in-up w-full bg-surface-container-low pb-space-lg" id="rfq-section">
          {' '}
          <div className="w-full max-w-[1440px] mx-auto px-gutter-lg">
            {' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
              {' '}
              {/* Contact & Value Proposition */}{' '}
              <div className="lg:col-span-5 flex flex-col gap-space-lg">
                {' '}
                <div>
                  {' '}
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold block mb-space-xs">
                    {' '}
                    LAYANAN KORPORAT LANGSUNG{' '}
                  </span>{' '}
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">
                    {' '}
                    KONSULTASIKAN KEBUTUHAN ENERGI INDUSTRI ANDA{' '}
                  </h2>{' '}
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
                    {' '}
                    Dapatkan penawaran harga resmi (Quotation Letter) dan kepastian alokasi volume langsung dari tim
                    dispatcher kami.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="flex flex-col gap-space-md">
                  {' '}
                  <div className="flex items-start gap-space-md p-space-md rounded-2xl bg-surface-container-lowest shadow-sm">
                    {' '}
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      {' '}
                      <span className="material-symbols-outlined text-[24px]">call</span>{' '}
                    </div>{' '}
                    <div>
                      {' '}
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        {' '}
                        Hotline Dispatcher &amp; Tender{' '}
                      </span>{' '}
                      <span className="font-headline-sm text-headline-sm font-bold text-on-surface block">
                        {' '}
                        +62 811-842-595{' '}
                      </span>{' '}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {' '}
                        Layanan Cepat via WhatsApp 24 Jam / 7 Hari{' '}
                      </span>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className="flex items-start gap-space-md p-space-md rounded-2xl bg-surface-container-lowest shadow-sm">
                    {' '}
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      {' '}
                      <span className="material-symbols-outlined text-[24px]">mail</span>{' '}
                    </div>{' '}
                    <div>
                      {' '}
                      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        {' '}
                        Email Penawaran Resmi (RFQ){' '}
                      </span>{' '}
                      <span className="font-title-lg text-title-lg font-bold text-on-surface block">
                        {' '}
                        admin@ptserenaenergy.com{' '}
                      </span>{' '}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {' '}
                        Kirim dokumen Purchase Order / Tender korporat{' '}
                      </span>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="p-space-md rounded-xl bg-surface-container text-on-surface-variant font-body-sm text-body-sm">
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface font-bold block mb-1">
                    {' '}
                    Standar Tata Kelola:{' '}
                  </span>{' '}
                  Seluruh transaksi dilengkapi Faktur Pajak resmi, Surat Jalan bermaterai, CoA Pertamina, dan
                  sertifikasi tera Metrologi yang sah.{' '}
                </div>{' '}
              </div>{' '}
              {/* RFQ Form Panel */}{' '}
              <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg md:p-margin rounded-2xl shadow-md">
                {' '}
                <form className="flex flex-col gap-space-md" id="consultation-form">
                  {' '}
                  <div>
                    {' '}
                    <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                      {' '}
                      Formulir Permintaan Penawaran Cepat{' '}
                    </h3>{' '}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {' '}
                      Estimasi respons penawaran resmi dalam waktu ≤ 60 menit.{' '}
                    </p>{' '}
                  </div>{' '}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {' '}
                    <div className="flex flex-col gap-1">
                      {' '}
                      <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="rfq-nama">
                        {' '}
                        Nama Lengkap PIC{' '}
                      </label>{' '}
                      <input
                        className="h-11 space-md px-3 rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-secondary transition-colors"
                        id="rfq-nama"
                        placeholder="Contoh: Bpk. Bambang Sutrisno"
                        required
                        type="text"
                      />{' '}
                    </div>{' '}
                    <div className="flex flex-col gap-1">
                      {' '}
                      <label
                        className="font-label-md text-label-md font-semibold text-on-surface"
                        htmlFor="rfq-perusahaan"
                      >
                        {' '}
                        Nama Perusahaan / PT{' '}
                      </label>{' '}
                      <input
                        className="h-11 px-3 rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-secondary transition-colors"
                        id="rfq-perusahaan"
                        placeholder="Contoh: PT Bangun Persada Energi"
                        required
                        type="text"
                      />{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {' '}
                    <div className="flex flex-col gap-1">
                      {' '}
                      <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="rfq-produk">
                        {' '}
                        Jenis Bahan Bakar{' '}
                      </label>{' '}
                      <select
                        className="h-11 px-3 rounded-lg bg-surface border border-outline-variant text-on-surface text-body-md focus:outline-none focus:border-secondary transition-colors"
                        id="rfq-produk"
                      >
                        {' '}
                        <option value="Biosolar B40 Industri">Biosolar Industri B40 (HSD)</option>{' '}
                        <option value="Biosolar B50 Industri">Biosolar B50 / B35 Spek Khusus</option>{' '}
                        <option value="Marine Fuel Oil (MFO)">Marine Fuel Oil (MFO 180 / 380)</option>{' '}
                        <option value="Pertamax Turbo Industri">Pertamax Turbo Industri (RON 98)</option>{' '}
                        <option value="Minyak Tanah (Kerosene)">Minyak Tanah (Kerosene Industri)</option>{' '}
                        <option value="Solar Panel PLTS">Solusi Hijau: Solar Panel PLTS</option>{' '}
                      </select>{' '}
                    </div>{' '}
                    <div className="flex flex-col gap-1">
                      {' '}
                      <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="rfq-volume">
                        {' '}
                        Estimasi Volume (Liter){' '}
                      </label>{' '}
                      <input
                        className="h-11 px-3 rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-secondary transition-colors"
                        id="rfq-volume"
                        placeholder="Min. 5.000 Liter (1 Tangki)"
                        required
                        type="text"
                      />{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    {' '}
                    <div className="flex flex-col gap-1">
                      {' '}
                      <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="rfq-lokasi">
                        {' '}
                        Wilayah &amp; Lokasi Pengiriman{' '}
                      </label>{' '}
                      <input
                        className="h-11 px-3 rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-secondary transition-colors"
                        id="rfq-lokasi"
                        placeholder="Contoh: Proyek Tol Bawen / Balikpapan"
                        required
                        type="text"
                      />{' '}
                    </div>{' '}
                    <div className="flex flex-col gap-1">
                      {' '}
                      <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="rfq-kontak">
                        {' '}
                        No. WhatsApp / Telepon Aktif{' '}
                      </label>{' '}
                      <input
                        className="h-11 px-3 rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-secondary transition-colors"
                        id="rfq-kontak"
                        placeholder="0812-xxxx-xxxx"
                        required
                        type="tel"
                      />{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-1">
                    {' '}
                    <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="rfq-catatan">
                      {' '}
                      Catatan Khusus / Permintaan Skema Pembayaran (Opsional){' '}
                    </label>{' '}
                    <textarea
                      className="p-3 rounded-lg bg-surface border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-secondary transition-colors"
                      id="rfq-catatan"
                      placeholder="Sebutkan jadwal delivery, kebutuhan tangki storage, atau TOP khusus..."
                      rows={3}
                    ></textarea>{' '}
                  </div>{' '}
                  <div className="pt-2">
                    {' '}
                    <button
                      className="w-full inline-flex items-center justify-center gap-space-xs h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all"
                      type="submit"
                    >
                      {' '}
                      <span className="">Kirim Permintaan Penawaran Resmi Sekarang</span>{' '}
                      <span className="material-symbols-outlined text-[20px]">send</span>{' '}
                    </button>{' '}
                    <div className="hidden text-center mt-3 font-label-md text-label-md text-secondary" id="rfq-status">
                      {' '}
                      Permintaan terkirim. Dispatcher kami segera menghubungi Anda melalui WhatsApp.{' '}
                    </div>{' '}
                  </div>{' '}
                </form>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Inline Micro-interaction Script */}{' '}
      </div>{' '}
    </div>
  );
}
