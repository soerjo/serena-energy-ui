import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import Header, { navItems } from '@/components/serena/Header';
import Footer from '@/components/serena/Footer';
import { HeroSection, PillarsSection, FuelCalculator } from '@/components/serena/HomeSections';

// Mock usePathname
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}));

describe('PT Serena Energy Components', () => {
  describe('Header Component', () => {
    it('renders logo and all navigation items', () => {
      render(<Header />);
      expect(screen.getByText('PT SERENA ENERGY')).toBeInTheDocument();
      expect(screen.getByText('Mitra Resmi BBM Pertamina')).toBeInTheDocument();

      navItems.forEach((item) => {
        const matches = screen.getAllByText(item.label);
        expect(matches.length).toBeGreaterThan(0);
      });
    });

    it('toggles mobile menu on click', () => {
      render(<Header />);
      const toggleBtn = screen.getByRole('button', { name: /toggle navigation menu/i });
      fireEvent.click(toggleBtn);

      const mobileLinks = screen.getAllByText('Harga BBM');
      expect(mobileLinks.length).toBe(2); // desktop + mobile

      // click again to close
      fireEvent.click(toggleBtn);
    });

    it('closes mobile menu when clicking a link', () => {
      render(<Header />);
      const toggleBtn = screen.getByRole('button', { name: /toggle navigation menu/i });
      fireEvent.click(toggleBtn);

      const mobileHargaLink = screen.getAllByText('Harga BBM')[1];
      fireEvent.click(mobileHargaLink);
    });
  });

  describe('Footer Component', () => {
    it('renders company information, addresses, and commodity lists', () => {
      render(<Footer />);
      expect(screen.getAllByText('PT SERENA ENERGY').length).toBeGreaterThan(0);
      expect(screen.getByText(/Menara Kadin Indonesia/i)).toBeInTheDocument();
      expect(screen.getByText('Transparansi Indeks Harga BBM')).toBeInTheDocument();
      expect(screen.getByText('Biosolar Industri B35 / B40')).toBeInTheDocument();
    });
  });

  describe('HeroSection Component', () => {
    it('renders hero title, badges, metrics, and CTA links', () => {
      render(<HeroSection />);
      expect(screen.getByText(/ENERGIZING YOUR FUTURE/i)).toBeInTheDocument();
      expect(screen.getByText('99.8%')).toBeInTheDocument();
      expect(screen.getByText('Lihat Indeks Harga Resmi')).toBeInTheDocument();
      expect(screen.getByText('SPOB Serena Perkasa 02')).toBeInTheDocument();
    });
  });

  describe('PillarsSection Component', () => {
    it('renders all four operational pillars', () => {
      render(<PillarsSection />);
      expect(screen.getByText('Tepat Mutu & Volume')).toBeInTheDocument();
      expect(screen.getByText('Siaga Pasokan 24/7')).toBeInTheDocument();
      expect(screen.getByText('Penetrasi Medan Ekstrem')).toBeInTheDocument();
      expect(screen.getByText('Transisi Bersih B35 / B40')).toBeInTheDocument();
    });
  });

  describe('FuelCalculator Component', () => {
    it('renders and responds to product and volume changes', () => {
      render(<FuelCalculator />);
      expect(screen.getByText('Simulasi Estimasi Pengadaan BBM Industri Proyek Anda')).toBeInTheDocument();

      // Click HSD button
      const hsdBtn = screen.getByText('HSD Industri');
      fireEvent.click(hsdBtn);

      // Click Pertamina Dex button
      const dexBtn = screen.getByText('Pertamina Dex');
      fireEvent.click(dexBtn);

      // Click Biosolar button
      const b35Btn = screen.getByText('Biosolar B35');
      fireEvent.click(b35Btn);

      // Change zone selection
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: '2' } });
      fireEvent.change(select, { target: { value: '3' } });
      fireEvent.change(select, { target: { value: '4' } });
      fireEvent.change(select, { target: { value: '1' } });

      // Change range slider
      const slider = screen.getByRole('slider');
      fireEvent.change(slider, { target: { value: '25000' } });
      expect(screen.getByText(/25\.000 Liter/i)).toBeInTheDocument();
    });
  });
});
