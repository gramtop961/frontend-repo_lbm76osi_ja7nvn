import React from 'react';
import { Gem, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
            <Gem size={18} />
          </span>
          <span className="text-lg">Sentra Emas & Berlian</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#harga" className="hover:text-neutral-900 transition">Harga</a>
          <a href="#kalkulator" className="hover:text-neutral-900 transition">Kalkulator</a>
          <a href="#kontak" className="hover:text-neutral-900 transition">Kontak</a>
        </nav>
        <a href="tel:+6281234567890" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-white text-sm font-medium shadow hover:bg-amber-600">
          <Phone size={16} />
          Hubungi Kami
        </a>
      </div>
    </header>
  );
};

export default Navbar;
