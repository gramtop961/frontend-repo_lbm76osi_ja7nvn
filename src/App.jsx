import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriceTable from './components/PriceTable';
import Calculator from './components/Calculator';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <PriceTable />
        <Calculator />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Sentra Emas & Berlian. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#harga" className="hover:text-neutral-900">Harga</a>
            <a href="#kalkulator" className="hover:text-neutral-900">Kalkulator</a>
            <a href="#kontak" className="hover:text-neutral-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
