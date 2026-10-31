'use client';
import React from 'react';
export default function HargaPage() {
  return (
    <div className="w-full">
      {' '}
      <div className="flex flex-col w-full">
        {' '}
        {/* Top Visual Status Strip */}{' '}
        <section className="animate-fade-in-up w-full bg-surface-container-low py-space-sm px-gutter-lg">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm">
            {' '}
            <nav className="flex items-center gap-space-xs font-label-md text-label-md text-tertiary">
              {' '}
              <a className="hover:text-primary transition-colors" href="#">
                {' '}
                Beranda{' '}
              </a>{' '}
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>{' '}
              <span className="text-on-surface font-semibold">Harga BBM Industri</span>{' '}
            </nav>{' '}
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest shadow-sm">
              {' '}
              <span className="relative flex h-2 w-2">
                {' '}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>{' '}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>{' '}
              </span>{' '}
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wide">
                {' '}
                Keputusan Resmi PT Pertamina Patra Niaga • Periode Berjalan 2025{' '}
              </span>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Editorial Page Header & Macro Indicators */}{' '}
        <section className="animate-fade-in-up w-full bg-surface py-space-xl px-gutter-lg">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            {' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-end">
              {' '}
              <div className="lg:col-span-8 flex flex-col gap-space-sm" data-parallax-speed="0.04">
                {' '}
                <div className="inline-flex items-center gap-space-xs text-primary-container font-label-md text-label-md uppercase tracking-wider">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">verified_user</span> Transparansi Indeks
                  Energi Terintegrasi{' '}
                </div>{' '}
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  {' '}
                  Transparansi Indeks Harga BBM Industri &amp; Keekonomian Nasional{' '}
                </h1>{' '}
                <p className="font-body-lg text-body-lg text-tertiary max-w-3xl">
                  {' '}
                  Daftar resmi indeks harga per liter dasar penetapan Loco Depot Pertamina dan Franco titik serah
                  seluruh teritori Indonesia. Akses terbuka, valid, dan terverifikasi dengan salinan Surat Keputusan
                  (SK) resmi Direksi Pertamina Patra Niaga.{' '}
                </p>{' '}
              </div>{' '}
              <div className="lg:col-span-4 flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-lowest shadow-md">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-sm text-label-sm text-tertiary uppercase">
                    Status Siklus Penetapan
                  </span>{' '}
                  <span className="px-space-xs py-0.5 rounded text-[11px] font-semibold bg-surface-container text-secondary">
                    {' '}
                    Periode II (P2){' '}
                  </span>{' '}
                </div>{' '}
                <div className="flex items-baseline gap-space-xs mt-space-xs">
                  {' '}
                  <span className="font-headline-md text-headline-md text-primary-container">
                    15 - 30 Juni 2025
                  </span>{' '}
                </div>{' '}
                <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-tertiary">
                  {' '}
                  <span className="material-symbols-outlined text-secondary text-[16px]">schedule</span> Pembaruan
                  berkutnya: 01 Juli 2025 (P1) pukul 00:00 WIB{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            {/* Regional Supply Tier Chips */}{' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-sm pt-space-sm">
              {' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-md text-label-md text-primary font-bold">WILAYAH I</span>{' '}
                  <span className="material-symbols-outlined text-secondary text-[18px]">dock</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface">Sumatera, Jawa, Bali, Madura</span>{' '}
                <span className="font-body-sm text-body-sm text-tertiary">
                  {' '}
                  Akses suplai via Terminal Plaju, Tanjung Gerem, Surabaya, Tuban.{' '}
                </span>{' '}
              </div>{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-md text-label-md text-secondary font-bold">WILAYAH II</span>{' '}
                  <span className="material-symbols-outlined text-secondary text-[18px]">local_shipping</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface">Kalimantan Terpadu</span>{' '}
                <span className="font-body-sm text-body-sm text-tertiary">
                  {' '}
                  Depot Balikpapan, Banjarmasin, Sampit, Pontianak &amp; Tarakan.{' '}
                </span>{' '}
              </div>{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-md text-label-md text-tertiary font-bold">WILAYAH III</span>{' '}
                  <span className="material-symbols-outlined text-secondary text-[18px]">directions_boat</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface">Sulawesi &amp; NTB</span>{' '}
                <span className="font-body-sm text-body-sm text-tertiary">
                  {' '}
                  Distribusi Makassar, Bitung, Luwuk, Ampenan, Lombok.{' '}
                </span>{' '}
              </div>{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                {' '}
                <div className="flex items-center justify-between">
                  {' '}
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold">WILAYAH IV</span>{' '}
                  <span className="material-symbols-outlined text-secondary text-[18px]">anchor</span>{' '}
                </div>{' '}
                <span className="font-title-md text-title-md text-on-surface">Maluku, NTT, Seluruh Papua</span>{' '}
                <span className="font-body-sm text-body-sm text-tertiary">
                  {' '}
                  Terminal Wayame Ambon, Kupang, Jayapura, Sorong, Timika.{' '}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Interactive Commodity Switching & Price Table Section */}{' '}
        <section className="animate-fade-in-up w-full bg-surface-container-low py-space-xl px-gutter-lg">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            {' '}
            {/* Interactive Commodity Selector */}{' '}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              {' '}
              <div className="flex flex-wrap items-center gap-space-xs p-1 bg-surface-container rounded-xl">
                {' '}
                <button
                  className="px-space-md py-space-xs rounded-xl font-label-lg text-label-lg transition-all bg-primary-container text-on-primary shadow-sm flex items-center gap-space-xs"
                  id="tab-b40"
                >
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">oil_barrel</span> Biosolar B40/B50
                  Industri{' '}
                </button>{' '}
                <button
                  className="px-space-md py-space-xs rounded-xl font-label-lg text-label-lg transition-all text-on-surface hover:bg-surface-container-highest flex items-center gap-space-xs"
                  id="tab-kero"
                >
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">science</span> Kerosene (Minyak Tanah){' '}
                </button>{' '}
                <button
                  className="px-space-md py-space-xs rounded-xl font-label-lg text-label-lg transition-all text-on-surface hover:bg-surface-container-highest flex items-center gap-space-xs"
                  id="tab-turbo"
                >
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">speed</span> Pertamax Turbo (RON 98){' '}
                </button>{' '}
                <button
                  className="px-space-md py-space-xs rounded-xl font-label-lg text-label-lg transition-all text-on-surface hover:bg-surface-container-highest flex items-center gap-space-xs"
                  id="tab-mfo"
                >
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">directions_boat</span> Marine Fuel Oil (MFO
                  180 cSt){' '}
                </button>{' '}
              </div>{' '}
              <div className="flex items-center gap-space-sm text-tertiary font-body-sm text-body-sm">
                {' '}
                <span className="material-symbols-outlined text-secondary text-[18px]">info</span> Harga dasar Loco
                Depot (belum termasuk PPN 11% &amp; PBBKB){' '}
              </div>{' '}
            </div>{' '}
            {/* Main High-Precision Table: B40 View (Default) */}{' '}
            <div className="flex flex-col gap-space-md transition-opacity duration-300" id="view-b40">
              {' '}
              <div
                className="overflow-x-auto rounded-xl shadow-md bg-surface-container-lowest"
                data-parallax-speed="0.02"
              >
                {' '}
                <table className="w-full text-left font-body-md text-body-md border-collapse">
                  {' '}
                  <thead className="bg-surface-container text-on-surface font-label-lg text-label-lg">
                    {' '}
                    <tr>
                      {' '}
                      <th className="py-space-md px-space-lg">Periode Penetapan</th>{' '}
                      <th className="py-space-md px-space-md text-right">Wilayah 1</th>{' '}
                      <th className="py-space-md px-space-md text-right">Wilayah 2</th>{' '}
                      <th className="py-space-md px-space-md text-right">Wilayah 3</th>{' '}
                      <th className="py-space-md px-space-md text-right">Wilayah 4</th>{' '}
                      <th className="py-space-md px-space-lg text-center">Status &amp; Dokumen SK</th>{' '}
                    </tr>{' '}
                  </thead>{' '}
                  <tbody className="divide-none text-on-surface">
                    {' '}
                    {/* Active Running Period */}{' '}
                    <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                      {' '}
                      <td className="py-space-md px-space-lg">
                        {' '}
                        <div className="flex flex-col">
                          {' '}
                          <span className="font-title-lg text-title-lg text-on-surface font-bold">
                            {' '}
                            (P2) 15 s.d 30 Juni 2025{' '}
                          </span>{' '}
                          <span className="font-body-sm text-body-sm text-tertiary">
                            {' '}
                            Surat Edaran No. C-0814/PND600000/2025-S3{' '}
                          </span>{' '}
                        </div>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right">
                        {' '}
                        <span className="font-headline-sm text-headline-sm text-primary-container">Rp 20.750</span>{' '}
                        <span className="block font-body-sm text-body-sm text-tertiary">per liter</span>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right">
                        {' '}
                        <span className="font-headline-sm text-headline-sm text-on-surface">Rp 20.750</span>{' '}
                        <span className="block font-body-sm text-body-sm text-tertiary">per liter</span>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right">
                        {' '}
                        <span className="font-headline-sm text-headline-sm text-on-surface">Rp 20.850</span>{' '}
                        <span className="block font-body-sm text-body-sm text-tertiary">per liter</span>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right">
                        {' '}
                        <span className="font-headline-sm text-headline-sm text-on-surface">Rp 21.000</span>{' '}
                        <span className="block font-body-sm text-body-sm text-tertiary">per liter</span>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-lg text-center">
                        {' '}
                        <div className="flex flex-col items-center gap-space-xs">
                          {' '}
                          <span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-primary-fixed text-primary font-bold">
                            {' '}
                            BERLAKU AKTIF{' '}
                          </span>{' '}
                          <a
                            className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-primary transition-colors"
                            href="#download-center"
                          >
                            {' '}
                            <span className="material-symbols-outlined text-[16px]">download</span> Unduh SK PDF{' '}
                          </a>{' '}
                        </div>{' '}
                      </td>{' '}
                    </tr>{' '}
                    {/* Period 1 June */}{' '}
                    <tr className="bg-surface hover:bg-surface-container transition-colors">
                      {' '}
                      <td className="py-space-md px-space-lg">
                        {' '}
                        <div className="flex flex-col">
                          {' '}
                          <span className="font-title-md text-title-md text-on-surface">
                            (P1) 01 s.d 14 Juni 2025
                          </span>{' '}
                          <span className="font-body-sm text-body-sm text-tertiary">
                            {' '}
                            Surat Edaran No. C-0761/PND600000/2025-S3{' '}
                          </span>{' '}
                        </div>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 20.950{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 20.950{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.050{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.200{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-lg text-center">
                        {' '}
                        <a
                          className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-tertiary hover:text-on-surface font-label-md text-label-md"
                          href="#download-center"
                        >
                          {' '}
                          <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> Arsip PDF{' '}
                        </a>{' '}
                      </td>{' '}
                    </tr>{' '}
                    {/* Period 2 May */}{' '}
                    <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                      {' '}
                      <td className="py-space-md px-space-lg">
                        {' '}
                        <div className="flex flex-col">
                          {' '}
                          <span className="font-title-md text-title-md text-on-surface">
                            (P2) 15 s.d 31 Mei 2025
                          </span>{' '}
                          <span className="font-body-sm text-body-sm text-tertiary">
                            {' '}
                            Surat Edaran No. C-0702/PND600000/2025-S3{' '}
                          </span>{' '}
                        </div>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.500{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.500{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.600{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.750{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-lg text-center">
                        {' '}
                        <a
                          className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-tertiary hover:text-on-surface font-label-md text-label-md"
                          href="#download-center"
                        >
                          {' '}
                          <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> Arsip PDF{' '}
                        </a>{' '}
                      </td>{' '}
                    </tr>{' '}
                    {/* Period 1 May */}{' '}
                    <tr className="bg-surface hover:bg-surface-container transition-colors">
                      {' '}
                      <td className="py-space-md px-space-lg">
                        {' '}
                        <div className="flex flex-col">
                          {' '}
                          <span className="font-title-md text-title-md text-on-surface">
                            (P1) 01 s.d 14 Mei 2025
                          </span>{' '}
                          <span className="font-body-sm text-body-sm text-tertiary">
                            {' '}
                            Surat Edaran No. C-0648/PND600000/2025-S3{' '}
                          </span>{' '}
                        </div>{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.800{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.800{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 21.900{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-md text-right font-title-lg text-title-lg text-on-surface">
                        {' '}
                        Rp 22.050{' '}
                      </td>{' '}
                      <td className="py-space-md px-space-lg text-center">
                        {' '}
                        <a
                          className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-tertiary hover:text-on-surface font-label-md text-label-md"
                          href="#download-center"
                        >
                          {' '}
                          <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span> Arsip PDF{' '}
                        </a>{' '}
                      </td>{' '}
                    </tr>{' '}
                  </tbody>{' '}
                </table>{' '}
              </div>{' '}
            </div>{' '}
            {/* Detail Card Alternative Commodities View (Grid 3 Kolom) */}{' '}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg pt-space-md">
              {' '}
              {/* Commodity 1: Kerosene */}{' '}
              <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-lg px-space-lg -mt-space-lg pt-space-lg rounded-t-xl">
                  {' '}
                  <div className="flex items-center gap-space-xs">
                    {' '}
                    <span className="material-symbols-outlined text-secondary text-[24px]">science</span>{' '}
                    <span className="font-title-lg text-title-lg text-on-surface font-bold">
                      Kerosene Industri
                    </span>{' '}
                  </div>{' '}
                  <span className="px-space-xs py-0.5 rounded text-[11px] font-bold bg-surface text-tertiary">
                    {' '}
                    Minyak Tanah{' '}
                  </span>{' '}
                </div>{' '}
                <div className="flex flex-col gap-space-md">
                  {' '}
                  <div>
                    {' '}
                    <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wide">
                      {' '}
                      15 - 30 Juni 2025{' '}
                    </span>{' '}
                    <div className="grid grid-cols-2 gap-space-xs mt-space-xs p-space-sm rounded bg-surface">
                      {' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 1</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 12.700</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 2</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 12.800</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 3</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 13.000</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 4</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 13.200</span>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wide">
                      {' '}
                      01 - 14 Juni 2025{' '}
                    </span>{' '}
                    <div className="grid grid-cols-2 gap-space-xs mt-space-xs p-space-sm rounded bg-surface">
                      {' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 1</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 12.950</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 2</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 13.050</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 3</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 13.250</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 4</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 13.450</span>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <a
                    className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-surface-container text-secondary font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                    href="#download-center"
                  >
                    {' '}
                    <span className="material-symbols-outlined text-[16px]">file_open</span> Lihat Spesifikasi &amp; SK
                    Kerosene{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
              {/* Commodity 2: Pertamax Turbo */}{' '}
              <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-lg px-space-lg -mt-space-lg pt-space-lg rounded-t-xl">
                  {' '}
                  <div className="flex items-center gap-space-xs">
                    {' '}
                    <span className="material-symbols-outlined text-primary-container text-[24px]">speed</span>{' '}
                    <span className="font-title-lg text-title-lg text-on-surface font-bold">Pertamax Turbo</span>{' '}
                  </div>{' '}
                  <span className="px-space-xs py-0.5 rounded text-[11px] font-bold bg-primary-fixed text-primary">
                    {' '}
                    RON 98 Industri{' '}
                  </span>{' '}
                </div>{' '}
                <div className="flex flex-col gap-space-md">
                  {' '}
                  <div>
                    {' '}
                    <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wide">
                      {' '}
                      15 - 30 Juni 2025{' '}
                    </span>{' '}
                    <div className="grid grid-cols-2 gap-space-xs mt-space-xs p-space-sm rounded bg-surface">
                      {' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 1</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 15.850</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 2</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 15.950</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 3</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 16.050</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 4</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">Rp 16.200</span>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wide">
                      {' '}
                      01 - 14 Juni 2025{' '}
                    </span>{' '}
                    <div className="grid grid-cols-2 gap-space-xs mt-space-xs p-space-sm rounded bg-surface">
                      {' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 1</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 16.150</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 2</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 16.250</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 3</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 16.350</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 4</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 16.500</span>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <a
                    className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-surface-container text-secondary font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                    href="#download-center"
                  >
                    {' '}
                    <span className="material-symbols-outlined text-[16px]">file_open</span> Lihat Spesifikasi &amp; SK
                    RON 98{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
              {/* Commodity 3: Marine Fuel Oil */}{' '}
              <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-lg px-space-lg -mt-space-lg pt-space-lg rounded-t-xl">
                  {' '}
                  <div className="flex items-center gap-space-xs">
                    {' '}
                    <span className="material-symbols-outlined text-secondary text-[24px]">anchor</span>{' '}
                    <span className="font-title-lg text-title-lg text-on-surface font-bold">Marine Fuel Oil</span>{' '}
                  </div>{' '}
                  <span className="px-space-xs py-0.5 rounded text-[11px] font-bold bg-secondary-fixed text-on-secondary-fixed-variant">
                    {' '}
                    180 cSt Bunker{' '}
                  </span>{' '}
                </div>{' '}
                <div className="flex flex-col gap-space-md">
                  {' '}
                  <div>
                    {' '}
                    <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wide">
                      {' '}
                      MFO Low Sulphur (0.5% max){' '}
                    </span>{' '}
                    <div className="mt-space-xs p-space-sm rounded bg-surface flex flex-col gap-1">
                      {' '}
                      <div className="flex justify-between items-center">
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary">Wilayah 1 s.d 4 Rentang</span>{' '}
                        <span className="font-title-md text-title-md text-on-surface font-bold">
                          {' '}
                          Rp 16.100 - Rp 16.700{' '}
                        </span>{' '}
                      </div>{' '}
                      <span className="font-body-sm text-body-sm text-tertiary">
                        {' '}
                        Kesesuaian MARPOL Annex VI Global Sulphur Cap{' '}
                      </span>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wide">
                      {' '}
                      MFO High Sulphur 180 cSt (15-30 Juni){' '}
                    </span>{' '}
                    <div className="grid grid-cols-2 gap-space-xs mt-space-xs p-space-sm rounded bg-surface">
                      {' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 1</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 14.350</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 2</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 14.450</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 3</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 14.550</span>{' '}
                      </div>{' '}
                      <div>
                        {' '}
                        <span className="font-label-sm text-label-sm text-tertiary block">Wilayah 4</span>{' '}
                        <span className="font-body-md text-body-md text-on-surface">Rp 14.700</span>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <a
                    className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-surface-container text-secondary font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                    href="#download-center"
                  >
                    {' '}
                    <span className="material-symbols-outlined text-[16px]">file_open</span> Lihat Spesifikasi &amp; SK
                    Bunker{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Industrial Supply Logistics & Taxation Framework */}{' '}
        <section className="animate-fade-in-up w-full bg-surface py-space-xl px-gutter-lg">
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            {' '}
            <div className="flex flex-col gap-space-xs">
              {' '}
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                {' '}
                Komponen Struktur Biaya &amp; Legalitas{' '}
              </span>{' '}
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                {' '}
                Ketentuan Pajak &amp; Skema Penyerahan BBM Industri{' '}
              </h2>{' '}
            </div>{' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
              {' '}
              {/* Loco vs Franco Structural Comparison */}{' '}
              <div className="lg:col-span-7 flex flex-col gap-space-md" data-parallax-speed="0.04">
                {' '}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                  {' '}
                  <div className="flex items-center gap-space-sm">
                    {' '}
                    <div className="p-space-xs rounded-lg bg-surface-container text-primary-container">
                      {' '}
                      <span className="material-symbols-outlined text-[24px]">warehouse</span>{' '}
                    </div>{' '}
                    <div>
                      {' '}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                        {' '}
                        1. Skema Loco (Pengambilan di Depot Pertamina){' '}
                      </h3>{' '}
                      <span className="font-body-sm text-body-sm text-tertiary">
                        {' '}
                        Cocok untuk korporasi dengan armada transportir teregistrasi sendiri{' '}
                      </span>{' '}
                    </div>{' '}
                  </div>{' '}
                  <p className="font-body-md text-body-md text-tertiary">
                    {' '}
                    Harga dasar indeks di atas adalah patokan murni <em>Loco Depot</em>. Klien menanggung seluruh proses
                    pengisian tangki darat/kapal bunker dari filling shed terminal resmi Pertamina yang ditunjuk,
                    termasuk biaya asuransi pengangkutan mandiri.{' '}
                  </p>{' '}
                </div>{' '}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                  {' '}
                  <div className="flex items-center gap-space-sm">
                    {' '}
                    <div className="p-space-xs rounded-lg bg-surface-container text-secondary">
                      {' '}
                      <span className="material-symbols-outlined text-[24px]">local_shipping</span>{' '}
                    </div>{' '}
                    <div>
                      {' '}
                      <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                        {' '}
                        2. Skema Franco (Diantar Sampai Tangki Site / Pabrik){' '}
                      </h3>{' '}
                      <span className="font-body-sm text-body-sm text-tertiary">
                        {' '}
                        Layanan end-to-end terintegrasi armada PT Serena Energy{' '}
                      </span>{' '}
                    </div>{' '}
                  </div>{' '}
                  <p className="font-body-md text-body-md text-tertiary">
                    {' '}
                    Harga dihitung komprehensif:{' '}
                    <strong>
                      {' '}
                      Harga Dasar Loco + Biaya Angkut Armada (Truk Tangki Kompartemen Segel / Self Propelled Oil Barge)
                      + Asuransi Transit Mutu{' '}
                    </strong>{' '}
                    . Titik serah langsung ke storage site tambang, smelter, batching plant, maupun dermaga
                    industri.{' '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              {/* Tax Breakdown Callout */}{' '}
              <div className="lg:col-span-5 p-space-lg rounded-xl bg-surface-container flex flex-col justify-between gap-space-md">
                {' '}
                <div className="flex flex-col gap-space-sm">
                  {' '}
                  <div className="flex items-center gap-space-xs text-primary-container">
                    {' '}
                    <span className="material-symbols-outlined text-[22px]">account_balance</span>{' '}
                    <span className="font-label-lg text-label-lg font-bold">Rincian Komponen Pajak Resmi RI</span>{' '}
                  </div>{' '}
                  <p className="font-body-sm text-body-sm text-on-surface">
                    {' '}
                    Sesuai perundang-undangan perpajakan migas dan regulasi Bapenda di seluruh wilayah Indonesia:{' '}
                  </p>{' '}
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                    {' '}
                    <li className="flex items-start gap-space-xs">
                      {' '}
                      <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                        {' '}
                        check_circle{' '}
                      </span>{' '}
                      <span className="">
                        {' '}
                        <strong>PPN 11%:</strong> Wajib dikenakan atas seluruh transaksi faktur pajak komersial.{' '}
                      </span>{' '}
                    </li>{' '}
                    <li className="flex items-start gap-space-xs">
                      {' '}
                      <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                        {' '}
                        check_circle{' '}
                      </span>{' '}
                      <span className="">
                        {' '}
                        <strong>PBBKB Daerah:</strong> Berkisar 5% hingga 10% bergantung pada Perda provinsi titik serah
                        (misal: DKI Jakarta, Kaltim, Sulsel, Papua).{' '}
                      </span>{' '}
                    </li>{' '}
                    <li className="flex items-start gap-space-xs">
                      {' '}
                      <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                        {' '}
                        check_circle{' '}
                      </span>{' '}
                      <span className="">
                        {' '}
                        <strong>PPh Pasal 22 Migas:</strong> Tarif 0.25% untuk pemungutan resmi industri terkait.{' '}
                      </span>{' '}
                    </li>{' '}
                  </ul>{' '}
                </div>{' '}
                <div className="p-space-sm rounded bg-surface-container-lowest flex items-center justify-between">
                  {' '}
                  <span className="font-label-md text-label-md text-tertiary">Pemberian Faktur Pajak Lengkap</span>{' '}
                  <span className="font-label-md text-label-md text-primary font-bold">
                    e-Faktur Terintegrasi DJP
                  </span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Download Center: Archive of Official Decrees (SK) */}{' '}
        <section
          className="animate-fade-in-up w-full bg-surface-container-low py-space-xl px-gutter-lg"
          id="download-center"
        >
          {' '}
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            {' '}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
              {' '}
              <div className="flex flex-col gap-space-xs">
                {' '}
                <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                  {' '}
                  Repository Arsip Resmi{' '}
                </span>{' '}
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  {' '}
                  Surat Keputusan (SK) Pertamina Patra Niaga{' '}
                </h2>{' '}
                <p className="font-body-md text-body-md text-tertiary">
                  {' '}
                  Unduh salinan resmi dokumen acuan keekonomian BBM Industri untuk kebutuhan audit internal dan
                  procurement perusahaan Anda.{' '}
                </p>{' '}
              </div>{' '}
              <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                {' '}
                <span className="material-symbols-outlined text-[20px]">verified</span> Dokumen Ber-barcode Digital
                Pertamina{' '}
              </div>{' '}
            </div>{' '}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-md">
              {' '}
              {/* Doc 1 */}{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-start gap-space-sm">
                  {' '}
                  <div className="p-space-xs rounded-lg bg-surface-container text-primary-container">
                    {' '}
                    <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>{' '}
                  </div>{' '}
                  <div className="flex flex-col">
                    {' '}
                    <span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-primary-fixed text-primary w-fit mb-1">
                      {' '}
                      TERBARU - BERLAKU AKTIF{' '}
                    </span>{' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      SK Harga Periode 15 - 30 Juni 2025{' '}
                    </span>{' '}
                    <span className="font-body-sm text-body-sm text-tertiary">
                      {' '}
                      SK Direksi No. C-0814/PND600000/2025-S3 • PDF 1.4 MB{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <button className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">file_download</span> Unduh SK Resmi (PDF){' '}
                </button>{' '}
              </div>{' '}
              {/* Doc 2 */}{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-start gap-space-sm">
                  {' '}
                  <div className="p-space-xs rounded-lg bg-surface-container text-tertiary">
                    {' '}
                    <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>{' '}
                  </div>{' '}
                  <div className="flex flex-col">
                    {' '}
                    <span className="px-space-xs py-0.5 rounded text-[10px] font-semibold bg-surface-container text-tertiary w-fit mb-1">
                      {' '}
                      ARSIP PERIODE I{' '}
                    </span>{' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      SK Harga Periode 01 - 14 Juni 2025{' '}
                    </span>{' '}
                    <span className="font-body-sm text-body-sm text-tertiary">
                      {' '}
                      SK Direksi No. C-0761/PND600000/2025-S3 • PDF 1.2 MB{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <button className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">file_download</span> Unduh Salinan (PDF){' '}
                </button>{' '}
              </div>{' '}
              {/* Doc 3 */}{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-start gap-space-sm">
                  {' '}
                  <div className="p-space-xs rounded-lg bg-surface-container text-tertiary">
                    {' '}
                    <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>{' '}
                  </div>{' '}
                  <div className="flex flex-col">
                    {' '}
                    <span className="px-space-xs py-0.5 rounded text-[10px] font-semibold bg-surface-container text-tertiary w-fit mb-1">
                      {' '}
                      ARSIP PERIODE II{' '}
                    </span>{' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      SK Harga Periode 15 - 31 Mei 2025{' '}
                    </span>{' '}
                    <span className="font-body-sm text-body-sm text-tertiary">
                      {' '}
                      SK Direksi No. C-0702/PND600000/2025-S3 • PDF 1.3 MB{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <button className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">file_download</span> Unduh Salinan (PDF){' '}
                </button>{' '}
              </div>{' '}
              {/* Doc 4 */}{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-start gap-space-sm">
                  {' '}
                  <div className="p-space-xs rounded-lg bg-surface-container text-tertiary">
                    {' '}
                    <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>{' '}
                  </div>{' '}
                  <div className="flex flex-col">
                    {' '}
                    <span className="px-space-xs py-0.5 rounded text-[10px] font-semibold bg-surface-container text-tertiary w-fit mb-1">
                      {' '}
                      ARSIP PERIODE I{' '}
                    </span>{' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      SK Harga Periode 01 - 14 Mei 2025{' '}
                    </span>{' '}
                    <span className="font-body-sm text-body-sm text-tertiary">
                      {' '}
                      SK Direksi No. C-0648/PND600000/2025-S3 • PDF 1.1 MB{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <button className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">file_download</span> Unduh Salinan (PDF){' '}
                </button>{' '}
              </div>{' '}
              {/* Doc 5 */}{' '}
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                {' '}
                <div className="flex items-start gap-space-sm">
                  {' '}
                  <div className="p-space-xs rounded-lg bg-surface-container text-tertiary">
                    {' '}
                    <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>{' '}
                  </div>{' '}
                  <div className="flex flex-col">
                    {' '}
                    <span className="px-space-xs py-0.5 rounded text-[10px] font-semibold bg-surface-container text-tertiary w-fit mb-1">
                      {' '}
                      ARSIP PERIODE II{' '}
                    </span>{' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      SK Harga Periode 15 - 30 April 2025{' '}
                    </span>{' '}
                    <span className="font-body-sm text-body-sm text-tertiary">
                      {' '}
                      SK Direksi No. C-0582/PND600000/2025-S3 • PDF 1.5 MB{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <button className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">file_download</span> Unduh Salinan (PDF){' '}
                </button>{' '}
              </div>{' '}
              {/* Technical Specification Sheet */}{' '}
              <div className="p-space-md rounded-xl bg-surface-container-high flex flex-col justify-between gap-space-md">
                {' '}
                <div className="flex items-start gap-space-sm">
                  {' '}
                  <div className="p-space-xs rounded-lg bg-surface-container-lowest text-secondary">
                    {' '}
                    <span className="material-symbols-outlined text-[28px]">verified</span>{' '}
                  </div>{' '}
                  <div className="flex flex-col">
                    {' '}
                    <span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-secondary text-on-secondary w-fit mb-1">
                      {' '}
                      LEMBAR SPESIFIKASI{' '}
                    </span>{' '}
                    <span className="font-title-md text-title-md text-on-surface font-bold">
                      {' '}
                      Certificate of Quality (CoQ) &amp; MSDS{' '}
                    </span>{' '}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {' '}
                      Standar Dirjen Migas B40 &amp; MFO 180 cSt{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <button className="inline-flex items-center justify-center gap-space-xs w-full py-space-xs rounded bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-on-secondary-fixed-variant transition-colors">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">description</span> Unduh Dokumen Mutu
                  (CoQ){' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* Interactive Simulation & Franco Quotation Banner */}{' '}
        <section className="animate-fade-in-up w-full bg-surface py-space-xl px-gutter-lg">
          {' '}
          <div className="max-w-7xl mx-auto rounded-xl bg-surface-container-lowest shadow-xl p-space-lg lg:p-space-xl">
            {' '}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              {' '}
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                {' '}
                <div className="inline-flex items-center gap-space-xs text-primary-container font-label-sm text-label-sm uppercase font-bold">
                  {' '}
                  <span className="material-symbols-outlined text-[18px]">calculate</span> Layanan Kalkulasi Franco
                  Tepat &amp; Cepat{' '}
                </div>{' '}
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  {' '}
                  Ingin Simulasi Harga Franco Sampai Lokasi Proyek Anda?{' '}
                </h2>{' '}
                <p className="font-body-lg text-body-lg text-tertiary">
                  {' '}
                  Tim logistic dispatcher Serena Energy menghitungkan penawaran komprehensif termasuk ongkos angkut
                  darat/laut, toleransi susut, dan kesiapan armada terdekat menuju site project Anda dalam waktu kurang
                  dari 60 menit.{' '}
                </p>{' '}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  {' '}
                  <div className="flex items-center gap-space-xs">
                    {' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>{' '}
                    <span className="font-body-md text-body-md text-on-surface">
                      Estimasi respon cepat &lt; 1 Jam
                    </span>{' '}
                  </div>{' '}
                  <div className="flex items-center gap-space-xs">
                    {' '}
                    <span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>{' '}
                    <span className="font-body-md text-body-md text-on-surface">Jangkauan 38 Provinsi</span>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className="lg:col-span-5 flex flex-col gap-space-sm bg-surface-container-low p-space-lg rounded-xl">
                {' '}
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  {' '}
                  Hubungi Dispatcher Serena Energy Langsung{' '}
                </span>{' '}
                <a
                  className="inline-flex items-center justify-between p-space-md rounded-xl bg-primary-container text-on-primary hover:bg-primary transition-colors"
                  href="https://wa.me/62811842595?text=Halo%20Tim%20PT%20Serena%20Energy,%20saya%20ingin%20konsultasi%20penawaran%20harga%20Franco%20BBM%20Industri"
                  target="_blank"
                >
                  {' '}
                  <div className="flex items-center gap-space-sm">
                    {' '}
                    <span className="material-symbols-outlined text-[24px]">chat</span>{' '}
                    <div className="flex flex-col text-left">
                      {' '}
                      <span className="font-label-lg text-label-lg font-bold">WhatsApp Dispatcher 24 Jam</span>{' '}
                      <span className="font-body-sm text-body-sm opacity-90">+62 811-842-595</span>{' '}
                    </div>{' '}
                  </div>{' '}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>{' '}
                </a>{' '}
                <button className="inline-flex items-center justify-center gap-space-xs p-space-md rounded-xl bg-surface-container-lowest text-secondary font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm">
                  {' '}
                  <span className="material-symbols-outlined text-[20px]">assignment</span> Ajukan RFQ Formal (Form
                  Surat Penawaran){' '}
                </button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/* RFQ Modal Dialog Structure */}{' '}
        <div
          className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-gutter-sm"
          id="rfqModal"
        >
          {' '}
          <div className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col">
            {' '}
            <div className="flex items-center justify-between p-space-md bg-surface-container">
              {' '}
              <div className="flex items-center gap-space-xs">
                {' '}
                <span className="material-symbols-outlined text-primary-container text-[22px]">request_quote</span>{' '}
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  {' '}
                  Form Permintaan Harga Franco (RFQ){' '}
                </span>{' '}
              </div>{' '}
              <button className="text-tertiary hover:text-on-surface">
                {' '}
                <span className="material-symbols-outlined text-[24px]">close</span>{' '}
              </button>{' '}
            </div>{' '}
            <form className="p-space-lg flex flex-col gap-space-md" id="rfqForm">
              {' '}
              <div>
                {' '}
                <label className="block font-label-md text-label-md text-on-surface mb-1">
                  {' '}
                  Nama Perusahaan / Instansi *{' '}
                </label>{' '}
                <input
                  className="w-full px-space-sm py-2 rounded bg-surface border-none text-on-surface font-body-md text-body-md focus:bg-surface-container"
                  placeholder="PT Tambang Prima Energi"
                  required
                  type="text"
                />{' '}
              </div>{' '}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {' '}
                <div>
                  {' '}
                  <label className="block font-label-md text-label-md text-on-surface mb-1">Nama PIC *</label>{' '}
                  <input
                    className="w-full px-space-sm py-2 rounded bg-surface border-none text-on-surface font-body-md text-body-md focus:bg-surface-container"
                    placeholder="Ir. Bambang"
                    required
                    type="text"
                  />{' '}
                </div>{' '}
                <div>
                  {' '}
                  <label className="block font-label-md text-label-md text-on-surface mb-1">
                    Nomor WhatsApp PIC *
                  </label>{' '}
                  <input
                    className="w-full px-space-sm py-2 rounded bg-surface border-none text-on-surface font-body-md text-body-md focus:bg-surface-container"
                    placeholder="081234567890"
                    required
                    type="tel"
                  />{' '}
                </div>{' '}
              </div>{' '}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {' '}
                <div>
                  {' '}
                  <label className="block font-label-md text-label-md text-on-surface mb-1">
                    {' '}
                    Komoditas yang Dibutuhkan{' '}
                  </label>{' '}
                  <select className="w-full px-space-sm py-2 rounded bg-surface border-none text-on-surface font-body-md text-body-md focus:bg-surface-container">
                    {' '}
                    <option>Biosolar B40/B50 Industri</option> <option>Kerosene (Minyak Tanah)</option>{' '}
                    <option>Pertamax Turbo (RON 98)</option> <option>Marine Fuel Oil (MFO 180 cSt)</option>{' '}
                  </select>{' '}
                </div>{' '}
                <div>
                  {' '}
                  <label className="block font-label-md text-label-md text-on-surface mb-1">
                    {' '}
                    Estimasi Kebutuhan / Drop (KL){' '}
                  </label>{' '}
                  <input
                    className="w-full px-space-sm py-2 rounded bg-surface border-none text-on-surface font-body-md text-body-md focus:bg-surface-container"
                    placeholder="16.000 Liter (16 KL)"
                    type="text"
                  />{' '}
                </div>{' '}
              </div>{' '}
              <div>
                {' '}
                <label className="block font-label-md text-label-md text-on-surface mb-1">
                  {' '}
                  Alamat Titik Serah / Proyek *{' '}
                </label>{' '}
                <textarea
                  className="w-full px-space-sm py-2 rounded bg-surface border-none text-on-surface font-body-md text-body-md focus:bg-surface-container"
                  placeholder="Kecamatan, Kabupaten, Provinsi titik serah unloading BBM"
                  required
                  rows={2}
                ></textarea>{' '}
              </div>{' '}
              <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                {' '}
                <button
                  className="px-space-md py-2 rounded text-tertiary font-label-md text-label-md hover:bg-surface-container"
                  type="button"
                >
                  {' '}
                  Batal{' '}
                </button>{' '}
                <button
                  className="px-space-lg py-2 rounded bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors"
                  type="submit"
                >
                  {' '}
                  Kirim Permintaan Simulasi{' '}
                </button>{' '}
              </div>{' '}
            </form>{' '}
          </div>{' '}
        </div>{' '}
        {/* Notification Toast Container */}{' '}
        <div
          className="fixed bottom-6 right-6 z-50 hidden bg-surface-container-lowest text-on-surface px-space-lg py-space-md rounded-xl shadow-xl flex items-center gap-space-sm"
          id="toastNotification"
        >
          {' '}
          <span className="material-symbols-outlined text-secondary text-[24px]">task_alt</span>{' '}
          <div className="flex flex-col">
            {' '}
            <span className="font-title-md text-title-md font-bold" id="toastTitle">
              {' '}
              Berhasil Diunduh{' '}
            </span>{' '}
            <span className="font-body-sm text-body-sm text-tertiary" id="toastDesc">
              {' '}
              Salinan dokumen SK telah diproses.{' '}
            </span>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
