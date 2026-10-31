# OMP Task: Build PT Serena Energy B2B Industrial Fuel Portal (Next.js 16 + React Bits + Stitch 1:1)

## Overview & Context
- Client / Brand: **PT Serena Energy** (Mitra Resmi BBM Industri Pertamina Patra Niaga).
- Stitch Project ID: `4287373172445727127`
- Reference Exported HTMLs (with localized assets): `/opt/data/stitch_4287373172445727127/local_*.html`
- Local assets downloaded to: `/shared/analisis/serena-energy-ui/public/images/stitch/*`
- Design Tokens & Theme:
  - Background Canvas: Abyssal Navy (`#060A11` - `#0D1320`)
  - Accent Cyan: `#0E7490` / `#81D1F0`
  - Accent Red (Pertamina Red): `#DC2626` / `#B91C1C`
  - Accent Amber: `#F59E0B` / `#FFB95F`
  - Surface Glass: `rgba(15, 23, 42, 0.75)` with `16px` backdrop-blur and hairline border `rgba(56, 189, 248, 0.12)`
  - Fonts: Syne (Headlines), Inter / Manrope (Body), Space Grotesk (Data & Tabular / Labels)

## Required Pages (Multi-Page Architecture in `src/app/(marketing)/`):
1. `/` (`src/app/(marketing)/page.tsx`): **Beranda (Clean Executive Overview)**
   - Hero: "Mitra Resmi BBM Industri Pertamina Patra Niaga", national supply security, live quotation CTA.
   - Live Telemetry ticker: Pertamina B35/B40 Industrial Index, Bunker MFO 180, Pertamina Dex.
   - Core Pillars & Credentials: ASTM standards, Dirjen Migas certification, nationwide bunker fleet.
   - Interactive Fuel Calculator / Lead Capture.
   - Testimonials & client logos (Mining, Marine, Manufacturing, Power Plants).
2. `/harga` (`src/app/(marketing)/harga/page.tsx`): **Detail Transparansi Harga BBM Industri**
   - Pricing Matrix Periode Berjalan (Wilayah 1 s/d 4).
   - Historical pricing trend chart / indicators.
   - Formula breakdown: Base Price + PPN 11% + PBBKB + Ongkos Angkut (Franco/Loco).
   - Download Formulasi & Penawaran Resmi button.
3. `/produk` (`src/app/(marketing)/produk/page.tsx`): **Detail Produk & Spesifikasi Laboratorium**
   - Product Grid: Biosolar B35 / B40 Industrial, High Speed Diesel (HSD), Marine Fuel Oil (MFO 180 / 380 CST), Pertamina Dex Industri.
   - ASTM & Ditjen Migas Laboratory Specification Table: Cetane Index, Flash Point, Sulphur content, Density @15°C, Water content.
   - Certificate of Analysis (CoA) download triggers.
4. `/proyek` (`src/app/(marketing)/proyek/page.tsx`): **Rekam Jejak Proyek & Studi Kasus Distribusi**
   - Fleet Overview: Self-Propelled Oil Barges (SPOB), Tangki Darat Kapasitas 5kL - 32kL, Fuel Terminal Storage.
   - Case Studies: Pasokan Tambang Batubara Kaltim, Marine Bunkering Selat Malaka, Pembangkit Listrik IPP, Proyek Konstruksi Nasional.
   - Delivery performance metrics: On-Time Delivery 99.8%, 0 Incident Spill Rate.
5. `/tentang` (`src/app/(marketing)/tentang/page.tsx`): **Tentang Kami (Profil Korporat & Keandalan)**
   - Corporate Profile: Sejarah PT Serena Energy, Izin Usaha Niaga Umum (INU) Migas, Visi & Misi.
   - Direksi & Tim Manajemen Energi.
   - Hubungi Kami & Kantor Operasional (Jakarta HQ, Balikpapan Depot, Surabaya Logistics Hub, Batam Terminal).
   - Interactive Quotation / Inquiry Form (RFQ).

## Public Web & Zero-Auth Standard
- No middleware redirect to login.
- `src/proxy.ts` allows all paths.
- No `AuthProvider` redirect loop.

## Quality & 100% Coverage Requirement:
- `bun run lint` -> 0 errors.
- `bunx tsc --noEmit` -> 0 errors.
- `bun run test:cov` (Vitest) -> 100% code coverage across all domain components and pages.
- `bun run build` -> exit 0.
