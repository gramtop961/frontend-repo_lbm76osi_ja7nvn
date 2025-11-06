import React from 'react';
import { ShieldCheck, Scale, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 items-center gap-10 relative">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Beli & Jual Emas / Berlian dengan Harga Terbaik
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Jual Emas & Berlian Anda, Dapatkan Harga Tinggi, Aman & Cepat
          </h1>
          <p className="mt-4 text-neutral-600 text-lg">
            Layanan profesional untuk penjualan emas, perhiasan, dan berlian. Proses transparan, taksir akurat, pembayaran instan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#kalkulator" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-white font-medium shadow hover:bg-amber-600">
              Cek Perkiraan
            </a>
            <a href="#kontak" className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-neutral-800 font-medium hover:bg-neutral-50">
              Konsultasi Gratis
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-neutral-700"><ShieldCheck className="text-emerald-600" size={18}/> Transaksi Aman</div>
            <div className="flex items-center gap-2 text-neutral-700"><Scale className="text-amber-600" size={18}/> Taksir Transparan</div>
            <div className="flex items-center gap-2 text-neutral-700"><Wallet className="text-indigo-600" size={18}/> Cair Hari Ini</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-100 via-white to-amber-50 border border-amber-200 shadow-inner p-6">
            <div className="h-full w-full rounded-xl bg-white border border-neutral-200 shadow flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-amber-500 font-semibold">Simulasi</div>
                <div className="text-4xl font-bold text-neutral-900">Harga Emas Hari Ini</div>
                <div className="mt-2 text-neutral-600">Update otomatis mengikuti pasar</div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-left">
                  <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="text-sm text-neutral-600">Antam</div>
                    <div className="text-xl font-bold text-amber-700">Rp1.240.000/gr</div>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="text-sm text-neutral-600">LM 24K</div>
                    <div className="text-xl font-bold text-amber-700">Rp1.215.000/gr</div>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="text-sm text-neutral-600">Perhiasan</div>
                    <div className="text-xl font-bold text-amber-700">Rp950.000/gr</div>
                  </div>
                </div>
                <div className="mt-6 text-xs text-neutral-500">Harga contoh untuk tampilan. Silakan gunakan kalkulator untuk estimasi detail.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
