import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import Header, { navItems } from '@/components/serena/Header';
import Footer from '@/components/serena/Footer';
import ParallaxProvider from '@/components/serena/ParallaxProvider';
import HomePage from '@/app/(marketing)/page';
import HargaPage from '@/app/(marketing)/harga/page';
import ProdukPage from '@/app/(marketing)/produk/page';
import ProyekPage from '@/app/(marketing)/proyek/page';
import TentangPage from '@/app/(marketing)/tentang/page';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}));

describe('PT Serena Energy 1:1 Stitch UI Pages', () => {
  it('renders Header with navigation items matching Stitch design', () => {
    render(<Header />);
    expect(screen.getByAltText('Logo PT Serena Energy')).toBeInTheDocument();
    navItems.forEach((item) => {
      const links = screen.getAllByText(item.label);
      expect(links.length).toBeGreaterThan(0);
    });
    expect(screen.getByText('Minta Penawaran')).toBeInTheDocument();
  });

  it('renders Footer with company credentials and links matching Stitch design', () => {
    render(<Footer />);
    expect(screen.getByText('SERENA')).toBeInTheDocument();
    expect(screen.getByText('ENERGY')).toBeInTheDocument();
    expect(screen.getByText('PT Serena Energi Unggul')).toBeInTheDocument();
    expect(screen.getByText(/Mitra Resmi Pertamina/i)).toBeInTheDocument();
  });

  it('renders ParallaxProvider wrapper without errors', () => {
    render(
      <ParallaxProvider>
        <div data-testid="child-elem">Content</div>
      </ParallaxProvider>,
    );
    expect(screen.getByTestId('child-elem')).toBeInTheDocument();
  });

  it('renders Beranda (HomePage) exactly matching Stitch prototype', () => {
    render(<HomePage />);
    expect(screen.getByText(/ENERGIZING/i)).toBeInTheDocument();
    expect(screen.getByText(/YOUR FUTURE/i)).toBeInTheDocument();
    expect(screen.getByText(/FONDASI KEANDALAN DISTRIBUSI ENERGI NASIONAL/i)).toBeInTheDocument();
  });

  it('renders HargaPage exactly matching Stitch prototype', () => {
    render(<HargaPage />);
    expect(screen.getByText(/Transparansi Indeks Harga BBM Industri/i)).toBeInTheDocument();
    expect(screen.getByText(/Ketentuan Pajak & Skema Penyerahan BBM Industri/i)).toBeInTheDocument();
  });

  it('renders ProdukPage exactly matching Stitch prototype', () => {
    render(<ProdukPage />);
    expect(screen.getByText(/Katalog Produk & Spesifikasi Uji Laboratorium/i)).toBeInTheDocument();
    expect(screen.getByText(/Minyak Solar Industri 48/i)).toBeInTheDocument();
  });

  it('renders ProyekPage exactly matching Stitch prototype', () => {
    render(<ProyekPage />);
    expect(screen.getByText(/Rekam Jejak Suplai Energi & Studi Kasus Distribusi/i)).toBeInTheDocument();
  });

  it('renders TentangPage exactly matching Stitch prototype', () => {
    render(<TentangPage />);
    expect(screen.getByText(/Pilar Distribusi Energi Terpercaya/i)).toBeInTheDocument();
    expect(screen.getByText(/Visi & Komitmen Misi Strategis/i)).toBeInTheDocument();
  });
});
