'use client';
import React from 'react';
import Link from 'next/link';
export default function TentangPage() {
  return (
    <div className="w-full">
      {' '}
      <div className="flex flex-col w-full">
        {' '}
        {/* Nav State Syncer Script */} {/* BREADCRUMB & METADATA BAR */}{' '}
        <div className="w-full bg-surface-container-low py-space-sm px-gutter-lg">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
            {' '}
            <nav className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              {' '}
              <Link className="hover:text-primary transition-colors" href="/">
                {' '}
                Beranda{' '}
              </Link>{' '}
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>{' '}
              <span className="text-primary font-bold">Tentang Kami</span>{' '}
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>{' '}
              <span className="text-on-surface font-medium">Profil Korporat &amp; Keandalan Suplai</span>{' '}
            </nav>{' '}
            <div className="flex items-center gap-space-sm">
              {' '}
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm font-bold">
                {' '}
                <span className="material-symbols-outlined text-[14px]">verified</span> KBLI 46610: Perdagangan Besar
                BBM{' '}
              </span>{' '}
              <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
                {' '}
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> SK ESDM: 05.NW.03.18.00.124{' '}
              </span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        {/* HERO SECTION: STRATEGIC PROFIL KORPORAT */}{' '}
        <section className="animate-fade-in-up w-full py-margin-lg px-gutter-lg bg-surface">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-margin">
            {' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              {' '}
              {/* Text Column */}{' '}
              <div className="lg:col-span-7 flex flex-col gap-space-md" data-parallax-speed="0.04">
                {' '}
                <div className="flex flex-wrap items-center gap-space-xs">
                  {' '}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-error-container text-primary font-label-sm text-label-sm tracking-widest uppercase font-bold">
                    {' '}
                    <span className="material-symbols-outlined text-[16px]">history_toggle_off</span> Sejak 31 Agustus
                    2006 • 18+ Tahun Mengabdi Untuk Energi Negeri{' '}
                  </span>{' '}
                  <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                    {' '}
                    Distributor Resmi Pertamina{' '}
                  </span>{' '}
                </div>{' '}
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
                  {' '}
                  Pilar Distribusi Energi Terpercaya, Menggerakkan Arteri{' '}
                  <span className="text-primary">Industri &amp; Infrastruktur</span> Nasional.{' '}
                </h1>{' '}
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  {' '}
                  Didirikan pada <strong>31 Agustus 2006</strong> di Jakarta,{' '}
                  <strong>PT Serena Energi Unggul (PT Serena Energy)</strong> berdiri teguh sebagai garda terdepan
                  rantai pasok energi industri nasional. Berbekal integritas izin niaga resmi dan jaringan armada
                  logistik multimoda, kami memastikan setiap tetes bahan bakar Pertamina tersalurkan dengan kepastian
                  mutu, takaran, dan presisi waktu ke pabrik manufaktur, proyek strategis BUMN Karya, tambang mineral,
                  hingga kapal pelayaran samudra.{' '}
                </p>{' '}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  {' '}
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all"
                    href="https://wa.me/62811842595"
                    rel="noopener"
                    target="_blank"
                  >
                    {' '}
                    <span className="material-symbols-outlined text-[20px]">handshake</span>{' '}
                    <span className="">Inisiasi Kemitraan Energi</span>{' '}
                  </a>{' '}
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-surface-container-high text-secondary font-label-lg text-label-lg hover:bg-surface-variant transition-colors"
                    href="#legalitas"
                  >
                    {' '}
                    <span className="material-symbols-outlined text-[20px]">shield</span>{' '}
                    <span className="">Dokumen Legalitas &amp; Sertifikasi</span>{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
              {/* Visual Mosaic Column */}{' '}
              <div className="lg:col-span-5 relative">
                {' '}
                <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">
                  {' '}
                  <img
                    className="w-full h-80 lg:h-96 object-cover"
                    data-alt="High-capacity modern industrial fuel tanker truck emblazoned with red industrial compliance markings refilling storage tanks at a sunlit coastal logistics depot in Jakarta Indonesia, cinematic sharp engineering lighting, pristine navy and white energy infrastructure."
                    src="/images/stitch/3fb4e6db79f6968a3b911ae1f9aface2.jpg"
                  />{' '}
                  <div className="p-space-md bg-surface-container-lowest flex items-center justify-between">
                    {' '}
                    <div className="flex items-center gap-space-sm">
                      {' '}
                      <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                        {' '}
                        <span className="material-symbols-outlined text-[22px]">local_shipping</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-title-md text-title-md text-on-surface block leading-tight">
                          {' '}
                          Armada Siaga GPS 24/7{' '}
                        </span>{' '}
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {' '}
                          Kapasitas tangki 8.000L s/d 32.000L{' '}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold">
                      {' '}
                      DIGITAL TERA{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                {/* Overlapping Card */}{' '}
                <div className="-mt-8 ml-6 relative z-10 p-space-md rounded-xl bg-surface-container-low shadow-md max-w-xs">
                  {' '}
                  <div className="flex items-center gap-space-xs text-primary mb-1">
                    {' '}
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>{' '}
                    <span className="font-label-sm text-label-sm uppercase font-bold">
                      CSMS Score: Category High
                    </span>{' '}
                  </div>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface">
                    {' '}
                    Kepatuhan Total Keselamatan Migas &amp; Audit K3LL Berkala Patra Niaga.{' '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            {/* 4 KEY CREDIBILITY METRICS */}{' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-sm pt-space-md">
              {' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider font-bold">
                  {' '}
                  Integritas Historis{' '}
                </span>{' '}
                <div className="flex items-baseline gap-1">
                  {' '}
                  <span className="font-headline-xl text-headline-xl text-on-surface font-bold">2006</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface font-semibold">Tahun Pendirian Resmi</span>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {' '}
                  18+ tahun rekam jejak tanpa cela dalam kontrak pasokan energi industri nasional.{' '}
                </p>{' '}
              </div>{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm uppercase text-primary tracking-wider font-bold">
                  {' '}
                  Status Kepatuhan{' '}
                </span>{' '}
                <div className="flex items-baseline gap-1">
                  {' '}
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">100%</span>{' '}
                  <span className="font-title-md text-title-md text-primary font-bold">Legal</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface font-semibold">On-Spec SK Migas RI</span>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {' '}
                  Izin Niaga Umum No. 05.NW.03.18.00.124 dengan jaminan Certificate of Analysis (CoA).{' '}
                </p>{' '}
              </div>{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider font-bold">
                  {' '}
                  Jaringan Logistik{' '}
                </span>{' '}
                <div className="flex items-baseline gap-1">
                  {' '}
                  <span className="font-headline-xl text-headline-xl text-on-surface font-bold">38</span>{' '}
                  <span className="font-title-md text-title-md text-secondary font-bold">Provinsi</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface font-semibold">Akses Terminal Depot</span>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {' '}
                  Terintegrasi suplai BBM dari Depot Pengisian Bahan Bakar resmi Sabang sampai Merauke.{' '}
                </p>{' '}
              </div>{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider font-bold">
                  {' '}
                  Akumulasi Penyaluran{' '}
                </span>{' '}
                <div className="flex items-baseline gap-1">
                  {' '}
                  <span className="font-headline-xl text-headline-xl text-on-surface font-bold">120M+</span>{' '}
                  <span className="font-title-md text-title-md text-secondary font-bold">Liter</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface font-semibold">Volume BBM Tersalur</span>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {' '}
                  Dipercaya ratusan korporasi multinasional, proyek BUMN Karya, dan lini perkapalan.{' '}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* VISI & MISI KORPORAT: EXECUTIVE STRATEGIC STATEMENT */}{' '}
        <section className="animate-fade-in-up w-full py-margin-lg px-gutter-lg bg-surface-container-low">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-margin">
            {' '}
            {/* Section Header */}{' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              {' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                  {' '}
                  Arah Korporat Berkelanjutan{' '}
                </span>{' '}
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {' '}
                  Visi &amp; Komitmen Misi Strategis{' '}
                </h2>{' '}
              </div>{' '}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                {' '}
                Landasan operasional jangka panjang PT Serena Energy dalam merajut ketahanan energi serta mendukung
                dekarbonisasi nasional.{' '}
              </p>{' '}
            </div>{' '}
            {/* Bento Layout: Visi Card (Span 5) + Misi List (Span 7) */}{' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-stretch">
              {' '}
              {/* Visi Card */}{' '}
              <div className="lg:col-span-5 p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-md">
                  {' '}
                  <div className="w-12 h-12 rounded-xl bg-error-container text-primary flex items-center justify-center">
                    {' '}
                    <span className="material-symbols-outlined text-[28px]">explore</span>{' '}
                  </div>{' '}
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    {' '}
                    Visi Perusahaan{' '}
                  </span>{' '}
                  <blockquote className="font-headline-sm text-headline-sm text-on-surface leading-snug font-bold">
                    {' '}
                    “Menjadi mitra strategis utama penyedia dan distributor energi industri, biofuel, serta solusi
                    energi bersih terdepan di Indonesia yang berdaya saing global dan berkelanjutan.”{' '}
                  </blockquote>{' '}
                </div>{' '}
                <div className="pt-space-lg flex items-center gap-space-sm">
                  {' '}
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>{' '}
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    {' '}
                    Peta Jalan Dekarbonisasi 2025 - 2030{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              {/* Misi Cards */}{' '}
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                {' '}
                {/* Misi 1 */}{' '}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                    {' '}
                    1{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      Kepastian Suplai Mutu, Volume, &amp; Waktu{' '}
                    </span>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Menjamin pasokan energi tanpa jeda ke seluruh pelosok tanah air dengan standar spesifikasi resmi
                      migas dan verifikasi kalibrasi tera legal.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                {/* Misi 2 */}{' '}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                    {' '}
                    2{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      Standar Keselamatan Tanpa Kompromi (K3LL / CSMS){' '}
                    </span>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Menerapkan prosedur Health, Safety, Security, and Environment (HSSE) tingkat tinggi pada setiap
                      proses loading, discharging, dan penanganan di site.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                {/* Misi 3 */}{' '}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                    {' '}
                    3{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      Ekosistem Logistik Multimoda Terpadu{' '}
                    </span>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Mengembangkan sinergi armada tangki darat dan kapal bunker maritim (SPOB / Tongkang) untuk
                      menjangkau titik remote dan pelabuhan terdalam nusantara.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                {/* Misi 4 */}{' '}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                    {' '}
                    4{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      Pelopor Transisi Bioenergi &amp; Energi Bersih{' '}
                    </span>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Mendukung program mandatori pemerintah melalui distribusi Biosolar B40/B50 berkualitas stabil
                      serta penyediaan infrastruktur solar photovoltaic industri.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                {/* Misi 5 */}{' '}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
                  {' '}
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                    {' '}
                    5{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      Tata Kelola Transparan Berbasis Data Real-Time{' '}
                    </span>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Memberikan transparansi penuh kepada pelanggan melalui laporan telemetri digital, dokumentasi
                      Surat Jalan resmi, dan integrasi faktur pajak online DJP.{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* 5 PILAR NILAI LAYANAN ("PASTI PAS, PASTI SENYUM, PASTI PUAS") */}{' '}
        <section className="animate-fade-in-up w-full py-margin-lg px-gutter-lg bg-surface">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-margin">
            {' '}
            {/* Section Header */}{' '}
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs">
              {' '}
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                {' '}
                Manifesto Kualitas Pelayanan{' '}
              </span>{' '}
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                {' '}
                5 Pilar Keunggulan Nilai Operasional{' '}
              </h2>{' '}
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {' '}
                Diterjemahkan langsung dari filosofi kerja kami: <strong>“Pasti Pas, Pasti Senyum, Pasti Puas”</strong>,
                memastikan zero-tolerance terhadap penyusutan atau kontaminasi BBM.{' '}
              </p>{' '}
            </div>{' '}
            {/* 5 Cards Grid */}{' '}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-sm">
              {' '}
              {/* Pilar 1 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-sm">
                  {' '}
                  <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                    {' '}
                    <span className="material-symbols-outlined text-[26px]">science</span>{' '}
                  </div>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    {' '}
                    Pilar 01 • Akurasi Mutu{' '}
                  </span>{' '}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Jaminan Mutu “Pasti Pas”
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {' '}
                    Setiap kargo BBM dilengkapi Certificate of Analysis (CoA) resmi dari Kilang Pertamina dan Lemigas.
                    Uji densitas, flash point, serta kadar air dilakukan berlapis sebelum pembongkaran di tangki
                    pelanggan.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> Spek Dirjen Migas 100%
                  Sesuai{' '}
                </div>{' '}
              </div>{' '}
              {/* Pilar 2 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-sm">
                  {' '}
                  <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                    {' '}
                    <span className="material-symbols-outlined text-[26px]">schedule</span>{' '}
                  </div>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    {' '}
                    Pilar 02 • Kecepatan Distribusi{' '}
                  </span>{' '}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    {' '}
                    Dispatching Presisi Tepat Waktu{' '}
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {' '}
                    Unit tangki dipantau real-time melalui sistem GPS telemetri cerdas. Jadwal pengiriman dioptimalkan
                    secara algoritmis agar jalur produksi, batching plant, atau genset tambang Anda tidak pernah
                    terhenti.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> Live GPS Tracking &amp;
                  On-Time Delivery{' '}
                </div>{' '}
              </div>{' '}
              {/* Pilar 3 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-sm">
                  {' '}
                  <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                    {' '}
                    <span className="material-symbols-outlined text-[26px]">lock</span>{' '}
                  </div>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    {' '}
                    Pilar 03 • Keamanan Takaran{' '}
                  </span>{' '}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    {' '}
                    Integritas Volume Anti-Tamper{' '}
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {' '}
                    Dilengkapi segel bernomor barcode unik di manhole dan katup debit (valve). Flowmeter digital maupun
                    manual telah lulus tera berkala Badan Metrologi Legal Kementerian Perdagangan RI.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> Segel Barcode &amp;
                  Kalibrasi Tera Metrologi{' '}
                </div>{' '}
              </div>{' '}
              {/* Pilar 4 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-sm">
                  {' '}
                  <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                    {' '}
                    <span className="material-symbols-outlined text-[26px]">sentiment_satisfied</span>{' '}
                  </div>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    {' '}
                    Pilar 04 • Kemitraan Prima{' '}
                  </span>{' '}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    {' '}
                    Layanan Responsif “Pasti Senyum”{' '}
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {' '}
                    Didukung oleh petugas komersial berdedikasi tinggi serta tim dispatcher ramah yang siap melayani
                    24/7. Penanganan pesanan darurat (emergency top-up) ditanggapi dalam hitungan menit.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-semibold">
                  {' '}
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> Dedicated B2B Key Account
                  Manager{' '}
                </div>{' '}
              </div>{' '}
              {/* Pilar 5 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-2">
                {' '}
                <div className="flex flex-col gap-space-sm">
                  {' '}
                  <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                    {' '}
                    <span className="material-symbols-outlined text-[26px]">public</span>{' '}
                  </div>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    {' '}
                    Pilar 05 • Jangkauan Logistik{' '}
                  </span>{' '}
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    {' '}
                    Jangkauan Luas Seluruh Nusantara{' '}
                  </h3>{' '}
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    {' '}
                    Koneksi terpadu dengan seluruh terminal pengisian bahan bakar resmi Pertamina (Integrated Terminal
                    &amp; Fuel Terminal) di Jawa, Sumatera, Kalimantan, Sulawesi, hingga kepulauan Maluku &amp; Papua
                    menjamin kontinuitas pasokan skala besar tanpa hambatan geografis.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md flex flex-wrap items-center gap-space-md text-primary font-label-sm text-label-sm font-semibold">
                  {' '}
                  <span className="flex items-center gap-1">
                    {' '}
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Akses Langsung TBBM
                    Pertamina{' '}
                  </span>{' '}
                  <span className="flex items-center gap-1">
                    {' '}
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Pengiriman Lintas Laut
                    &amp; Remote Site{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* PORTOFOLIO LINI BISNIS & SOLUSI TERPADU */}{' '}
        <section className="animate-fade-in-up w-full py-margin-lg px-gutter-lg bg-surface-container-low">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-margin">
            {' '}
            <div className="flex flex-col gap-space-xs">
              {' '}
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                {' '}
                Kapabilitas Operasional{' '}
              </span>{' '}
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                {' '}
                4 Pilar Bisnis &amp; Solusi Energi Terintegrasi{' '}
              </h2>{' '}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                {' '}
                Dari pengadaan solar industri harian hingga rekayasa penyimpanan bahan bakar sementara di site
                pertambangan.{' '}
              </p>{' '}
            </div>{' '}
            {/* 4 Pillars Grid */}{' '}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
              {' '}
              {/* Lini 1: BBM Industri */}{' '}
              <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
                {' '}
                <div className="relative h-56 bg-surface-container">
                  {' '}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Refinery terminal gantry racks loading high grade diesel fuel into red and white commercial transport tankers with industrial precision under bright clear daylight."
                    src="/images/stitch/bf0fd369219f6eafba032b01b91cba5f.jpg"
                  />{' '}
                  <div className="absolute top-4 left-4">
                    {' '}
                    <span className="px-3 py-1 rounded-xl bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm font-bold shadow-sm">
                      {' '}
                      LINI UTAMA{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  {' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {' '}
                      Solar Industri (High Speed Diesel / Biosolar){' '}
                    </h3>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Penyaluran resmi Biosolar B40/B50 standar Dirjen Migas &amp; Pertamina Patra Niaga. Dirancang
                      khusus untuk genset beban tinggi, alat berat tambang, batching plant beton, boiler pabrik kelapa
                      sawit, dan industri manufaktur.{' '}
                    </p>{' '}
                  </div>{' '}
                  <div className="flex flex-wrap gap-2 pt-space-xs">
                    {' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Kadar Sulfur Rendah{' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Cetane Number ≥ 48{' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Armada Tangki 8KL-32KL{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              {/* Lini 2: Marine Fuel & Bunkering */}{' '}
              <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
                {' '}
                <div className="relative h-56 bg-surface-container">
                  {' '}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Modern offshore marine bunkering vessel transferring fuel to a large bulk carrier ship in a clean deepwater ocean port at sunrise, industrial maritime logistics."
                    src="/images/stitch/a3552d20b8d3155cc83e3c6dbdaa0496.jpg"
                  />{' '}
                  <div className="absolute top-4 left-4">
                    {' '}
                    <span className="px-3 py-1 rounded-xl bg-surface-container-lowest/90 backdrop-blur text-secondary font-label-sm text-label-sm font-bold shadow-sm">
                      {' '}
                      MARITIME LOGISTICS{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  {' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {' '}
                      Marine Fuel Oil &amp; Offshore Bunkering{' '}
                    </h3>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Layanan pengisian bahan bakar laut (Bunkering) terverifikasi ISO 8217 untuk kapal kargo, bulk
                      carrier, tugboat tongkang batubara, dan SPOB. Melayani ship-to-ship transfer dan pasokan dermaga
                      pelabuhan utama Indonesia.{' '}
                    </p>{' '}
                  </div>{' '}
                  <div className="flex flex-wrap gap-2 pt-space-xs">
                    {' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      MFO 180 / 380 cSt{' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Marine Gas Oil (MGO){' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Bunker Barge Terakreditasi{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              {/* Lini 3: Bahan Kimia & Kerosene */}{' '}
              <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
                {' '}
                <div className="relative h-56 bg-surface-container">
                  {' '}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Pristine automated industrial chemical processing plant storage tanks and laboratory grade pipeline fittings with technicians in high visibility gear checking gauges."
                    src="/images/stitch/048327dcb53a05290da1de6c1ad933f5.jpg"
                  />{' '}
                  <div className="absolute top-4 left-4">
                    {' '}
                    <span className="px-3 py-1 rounded-xl bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm font-bold shadow-sm">
                      {' '}
                      SPECIALTY FUELS{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  {' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {' '}
                      Bahan Kimia Industri, Pelumas &amp; Kerosene{' '}
                    </h3>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Distribusi minyak tanah industri (kerosene) murni untuk pemanasan ruang presisi, proses metalurgi,
                      industri keramik, serta penyediaan oli pelumas hidrolik dan mesin industri kelas berat Pertamina
                      Lubricants.{' '}
                    </p>{' '}
                  </div>{' '}
                  <div className="flex flex-wrap gap-2 pt-space-xs">
                    {' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Kerosene Industri Non-Subsidi{' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Solvent &amp; Hydrocarbon{' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Drum &amp; Bulk Supply{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              {/* Lini 4: Infrastruktur & Transisi Hijau */}{' '}
              <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
                {' '}
                <div className="relative h-56 bg-surface-container">
                  {' '}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Clean industrial rooftop solar panel farm installed next to modular white fuel storage skid tanks at an eco-friendly manufacturing logistics facility under sunlight."
                    src="/images/stitch/7d2c14ea413e07e23a549c13a93a803d.jpg"
                  />{' '}
                  <div className="absolute top-4 left-4">
                    {' '}
                    <span className="px-3 py-1 rounded-xl bg-surface-container-lowest/90 backdrop-blur text-secondary font-label-sm text-label-sm font-bold shadow-sm">
                      {' '}
                      GREEN ENERGY &amp; INFRASTRUCTURE{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                  {' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {' '}
                      Storage Tank Rental &amp; Solar Panel Energi Hijau{' '}
                    </h3>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Layanan penyewaan tangki penampungan darat (skid tank 5.000L s/d 50.000L) siap pasang di lokasi
                      proyek terpencil, didukung implementasi sistem pembangkit listrik tenaga surya (PLTS Atap) untuk
                      efisiensi energi perusahaan.{' '}
                    </p>{' '}
                  </div>{' '}
                  <div className="flex flex-wrap gap-2 pt-space-xs">
                    {' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Sewa Tangki Skid Mobil{' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Flowmeter Digital Pump{' '}
                    </span>{' '}
                    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                      {' '}
                      Solusi PLTS Industri{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* LEGALITAS, SERTIFIKASI & KEPATUHAN REGULASI (COMPLIANCE VAULT) */}{' '}
        <section className="animate-fade-in-up w-full py-margin-lg px-gutter-lg bg-surface" id="legalitas">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-margin">
            {' '}
            {/* Section Header */}{' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              {' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                  {' '}
                  Transparansi Hukum &amp; Standarisasi{' '}
                </span>{' '}
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {' '}
                  Kepatuhan Regulasi &amp; Legalitas Korporat{' '}
                </h2>{' '}
              </div>{' '}
              <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
                {' '}
                <span className="material-symbols-outlined text-primary text-[28px]">gavel</span>{' '}
                <div className="flex flex-col">
                  {' '}
                  <span className="font-label-sm text-label-sm text-on-surface font-bold">
                    Beban Pajak Transparan
                  </span>{' '}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    PBBKB, PPN 11%, dan PPh Pasal 22 Terbit Otomatis{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            {/* Compliance Cards Grid */}{' '}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-sm">
              {' '}
              {/* License 1 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-xs">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="px-2.5 py-0.5 rounded bg-error-container text-primary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      IZIN UTAMA{' '}
                    </span>{' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">
                    {' '}
                    Izin Usaha Niaga Umum Minyak Bumi (INU){' '}
                  </h3>{' '}
                  <span className="font-label-sm text-label-sm text-primary font-mono font-bold">
                    {' '}
                    No. 05.NW.03.18.00.124{' '}
                  </span>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {' '}
                    Diterbitkan oleh Direktorat Jenderal Minyak dan Gas Bumi (Ditjen Migas) Kementerian ESDM Republik
                    Indonesia.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md bg-surface-container-low p-2 rounded text-center">
                  {' '}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {' '}
                    Status: Sah &amp; Aktif Operasional{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              {/* License 2 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-xs">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      AKREDITASI K3{' '}
                    </span>{' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">health_and_safety</span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">
                    {' '}
                    Contractor Safety Management System (CSMS){' '}
                  </h3>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
                    {' '}
                    Sertifikasi Kualifikasi K3LL Tinggi{' '}
                  </span>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {' '}
                    Standarisasi kelayakan keselamatan armada distribusi, APD pengemudi, tanggap darurat tumpahan minyak
                    (Oil Spill Response), dan sertifikat HAZMAT.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md bg-surface-container-low p-2 rounded text-center">
                  {' '}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {' '}
                    Sesuai Pedoman HSSE Pertamina{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              {/* License 3 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-xs">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      KALIBRASI{' '}
                    </span>{' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">straighten</span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">
                    {' '}
                    Sertifikat Tera Metrologi Legalitas Sah{' '}
                  </h3>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
                    {' '}
                    Ditjen Perlindungan Konsumen &amp; Tertib Niaga{' '}
                  </span>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {' '}
                    Seluruh kompartemen tangki armada dan meter arus flowmeter diverifikasi secara periodik oleh Balai
                    Standardisasi Metrologi Legal.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md bg-surface-container-low p-2 rounded text-center">
                  {' '}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {' '}
                    Toleransi Presisi Standar Internasional{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              {/* License 4 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-xs">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      PERPAJAKAN{' '}
                    </span>{' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">receipt_long</span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">
                    {' '}
                    Pengusaha Kena Pajak (PKP) Resmi{' '}
                  </h3>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
                    {' '}
                    NPWP Terdaftar Kanwil DJP{' '}
                  </span>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {' '}
                    Kepatuhan fiskal 100% dengan penertiban e-Faktur Pajak resmi, bukti potong PPh Pasal 22 Migas, dan
                    bukti setor PBBKB resmi pemda tujuan.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md bg-surface-container-low p-2 rounded text-center">
                  {' '}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {' '}
                    Terintegrasi Sistem e-Faktur DJP{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              {/* License 5 */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-xs">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      PENGUJIAN LAB{' '}
                    </span>{' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">biotech</span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">
                    {' '}
                    Pengawasan Mutu Balai Lemigas &amp; Surveyor{' '}
                  </h3>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
                    {' '}
                    Verifikasi Independen Sucofindo / Surveyor Indonesia{' '}
                  </span>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {' '}
                    Setiap batch pengiriman dapat diaudit melalui CoA laboratorium independen guna menjamin titik nyala,
                    viskositas, dan kadar sedimen.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md bg-surface-container-low p-2 rounded text-center">
                  {' '}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Zero Sediment Guarantee
                  </span>{' '}
                </div>{' '}
              </div>{' '}
              {/* License 6: Environmental & B40 Compliance */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-xs">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="px-2.5 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      LINGKUNGAN HIDUP{' '}
                    </span>{' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">eco</span>{' '}
                  </div>{' '}
                  <h3 className="font-title-md text-title-md text-on-surface font-bold mt-2">
                    {' '}
                    Kepatuhan Mandatori Biodiesel B40/B50{' '}
                  </h3>{' '}
                  <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
                    {' '}
                    Kepmen ESDM Mandatori Biofuel{' '}
                  </span>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {' '}
                    Penyaluran biosolar dengan teknologi inhibitor oksidasi terbaik, menjaga stabilitas penyimpanan
                    tanpa endapan mikroba pada tangki pengguna.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md bg-surface-container-low p-2 rounded text-center">
                  {' '}
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {' '}
                    Ramah Lingkungan Rendah Emisi{' '}
                  </span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* STRUKTUR JARINGAN OPERASIONAL & KANTOR RESMI */}{' '}
        <section className="animate-fade-in-up w-full py-margin-lg px-gutter-lg bg-surface-container-low">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-margin">
            {' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              {' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                  {' '}
                  Pusat Komando &amp; Terminal{' '}
                </span>{' '}
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {' '}
                  Jaringan Kantor &amp; Depot Operasional{' '}
                </h2>{' '}
              </div>{' '}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                {' '}
                Terbagi menjadi kantor administrasi pusat untuk koordinasi legalitas/kontrak korporat dan depot logistik
                untuk pergerakan armada tangki.{' '}
              </p>{' '}
            </div>{' '}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg">
              {' '}
              {/* Kantor Pusat: Wijaya Grand Centre */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-md">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      <span className="material-symbols-outlined text-[16px]">corporate_fare</span> Head Office &amp;
                      Administration{' '}
                    </span>{' '}
                    <span className="text-secondary font-label-sm text-label-sm font-semibold">
                      Jakarta Selatan
                    </span>{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {' '}
                      Wijaya Grand Centre Blok G-15{' '}
                    </h3>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Jl. Wijaya II, Pulo, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160{' '}
                    </p>{' '}
                  </div>{' '}
                  {/* Mini Map container */}{' '}
                  <div
                    className="w-full h-48 bg-cover bg-center rounded-xl overflow-hidden shadow-inner"
                    data-location="Wijaya Grand Centre Blok G-15, Jakarta Selatan"
                  ></div>{' '}
                  <div className="flex flex-col gap-2 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    <div className="flex items-center gap-space-xs">
                      {' '}
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        domain_verification
                      </span>{' '}
                      <span className="">
                        Fungsi: Manajemen Eksekutif, Legal &amp; Billing, Kontrak Tender BUMN
                      </span>{' '}
                    </div>{' '}
                    <div className="flex items-center gap-space-xs">
                      {' '}
                      <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>{' '}
                      <span className="text-on-surface font-medium">admin@ptserenaenergy.com</span>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md">
                  {' '}
                  <a
                    className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-bold hover:underline"
                    href="https://maps.google.com/?q=Wijaya+Grand+Centre+Jakarta"
                    rel="noopener"
                    target="_blank"
                  >
                    {' '}
                    <span className="">Buka Petunjuk Arah Google Maps</span>{' '}
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
              {/* Depot Operasional: Meruya Utara Kembangan */}{' '}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                {' '}
                <div className="flex flex-col gap-space-md">
                  {' '}
                  <div className="flex items-center justify-between">
                    {' '}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-bold uppercase">
                      {' '}
                      <span className="material-symbols-outlined text-[16px]">warehouse</span> Operational &amp;
                      Logistics Depot{' '}
                    </span>{' '}
                    <span className="text-secondary font-label-sm text-label-sm font-semibold">Jakarta Barat</span>{' '}
                  </div>{' '}
                  <div className="flex flex-col gap-space-xs">
                    {' '}
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {' '}
                      Depot Pool Logistik Meruya{' '}
                    </h3>{' '}
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {' '}
                      Jl. Safir Raya RT.19 / RW.04, Meruya Utara, Kembangan, Jakarta Barat 11620{' '}
                    </p>{' '}
                  </div>{' '}
                  {/* Mini Map container */}{' '}
                  <div
                    className="w-full h-48 bg-cover bg-center rounded-xl overflow-hidden shadow-inner"
                    data-location="Jl. Safir Raya, Meruya Utara, Kembangan, Jakarta Barat"
                  ></div>{' '}
                  <div className="flex flex-col gap-2 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    <div className="flex items-center gap-space-xs">
                      {' '}
                      <span className="material-symbols-outlined text-secondary text-[18px]">local_shipping</span>{' '}
                      <span className="">
                        {' '}
                        Fungsi: Pool Armada Truk Tangki, Inspeksi Kalibrasi Metrologi, Workshop HSE{' '}
                      </span>{' '}
                    </div>{' '}
                    <div className="flex items-center gap-space-xs">
                      {' '}
                      <span className="material-symbols-outlined text-secondary text-[18px]">support_agent</span>{' '}
                      <span className="text-on-surface font-medium">
                        Hotline Dispatcher: +62 811-842-595 (24 Jam)
                      </span>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="pt-space-md mt-space-md">
                  {' '}
                  <a
                    className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm font-bold hover:underline"
                    href="https://maps.google.com/?q=Meruya+Utara+Kembangan+Jakarta+Barat"
                    rel="noopener"
                    target="_blank"
                  >
                    {' '}
                    <span className="">Buka Lokasi Pool Armada</span>{' '}
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* CTA SECTION: PARTNERSHIP & INQUIRY */}{' '}
        <section className="animate-fade-in-up w-full py-margin-lg px-gutter-lg bg-surface">
          {' '}
          <div className="max-w-7xl mx-auto rounded-xl p-space-lg lg:p-space-xl bg-surface-container-lowest shadow-md">
            {' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              {' '}
              {/* Content */}{' '}
              <div className="lg:col-span-7 flex flex-col gap-space-md" data-parallax-speed="0.04">
                {' '}
                <div className="flex items-center gap-space-xs">
                  {' '}
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>{' '}
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    {' '}
                    Kemitraan Kontrak Jangka Panjang{' '}
                  </span>{' '}
                </div>{' '}
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-snug">
                  {' '}
                  Siap Mengamankan Pasokan Energi Industri Anda Tanpa Risiko &amp; Tepat Waktu?{' '}
                </h2>{' '}
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
                  {' '}
                  Dapatkan kepastian harga kompetitif, verifikasi sertifikat analisis resmi (CoA), serta fasilitas
                  kredit korporat yang fleksibel dengan tim komersial PT Serena Energi Unggul.{' '}
                </p>{' '}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  {' '}
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all"
                    href="https://wa.me/62811842595"
                    rel="noopener"
                    target="_blank"
                  >
                    {' '}
                    <span className="material-symbols-outlined text-[20px]">chat</span>{' '}
                    <span className="">Hubungi Dispatcher (+62 811-842-595)</span>{' '}
                  </a>{' '}
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-variant transition-colors"
                    href="mailto:admin@ptserenaenergy.com"
                  >
                    {' '}
                    <span className="material-symbols-outlined text-[20px]">mail</span>{' '}
                    <span className="">admin@ptserenaenergy.com</span>{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
              {/* Quick Spec Inquiry Card */}{' '}
              <div className="lg:col-span-5 p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-sm shadow-sm">
                {' '}
                <span className="font-title-md text-title-md text-on-surface font-bold flex items-center gap-space-xs">
                  {' '}
                  <span className="material-symbols-outlined text-primary text-[20px]">speed</span> Respons Cepat
                  Penawaran Resmi{' '}
                </span>{' '}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {' '}
                  Kirimkan estimasi volume bulanan dan lokasi titik drop (site) Anda untuk kalkulasi indeks formula
                  harga BBM industri Pertamina periode berjalan.{' '}
                </p>{' '}
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  {' '}
                  <div className="flex items-center justify-between text-body-sm py-1">
                    {' '}
                    <span className="text-on-surface-variant">Waktu Respon Rata-rata:</span>{' '}
                    <span className="font-bold text-on-surface">≤ 15 Menit</span>{' '}
                  </div>{' '}
                  <div className="flex items-center justify-between text-body-sm py-1">
                    {' '}
                    <span className="text-on-surface-variant">Minimum Pemesanan:</span>{' '}
                    <span className="font-bold text-on-surface">5.000 Liter (1 Tangki Kecil)</span>{' '}
                  </div>{' '}
                  <div className="flex items-center justify-between text-body-sm py-1">
                    {' '}
                    <span className="text-on-surface-variant">Layanan Dokumen:</span>{' '}
                    <span className="font-bold text-secondary">Faktur Pajak + CoA + Surat Jalan Sah</span>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="pt-space-sm">
                  {' '}
                  <div className="p- space-xs p-2.5 rounded bg-surface-container-lowest flex items-center gap-2">
                    {' '}
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>{' '}
                    <span className="font-label-sm text-label-sm text-on-surface">
                      {' '}
                      Telah Terverifikasi Vendor Migas Patra Niaga{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
      </div>{' '}
    </div>
  );
}
