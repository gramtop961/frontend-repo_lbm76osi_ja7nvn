import React from 'react';
import { MapPin, Phone, MessageSquare, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Hubungi Kami</h2>
            <p className="mt-2 text-neutral-600">Konsultasi gratis untuk penjualan emas, perhiasan, dan berlian. Kami melayani antar-jemput dan transaksi di tempat Anda.</p>

            <div className="mt-6 space-y-4">
              <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center gap-3 p-4 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100">
                <MessageSquare size={18}/> WhatsApp: +62 812-3456-7890
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 p-4 rounded-lg border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100">
                <Phone size={18}/> Telepon: (021) 1234-567
              </a>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800">
                <Mail size={18}/> Email: halo@sentraemas.co.id
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800">
                <MapPin size={18}/> Jakarta & Sekitarnya, Layanan jemput 1x24 jam
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Nama</label>
                <input className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500" placeholder="Nama lengkap" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">No. WhatsApp</label>
                  <input className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500" placeholder="08xx" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Kota</label>
                  <input className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500" placeholder="Kota domisili" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Pesan</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500" placeholder="Ceritakan barang yang ingin dijual"></textarea>
              </div>
              <button className="w-full inline-flex items-center justify-center rounded-lg bg-amber-500 px-4 py-2.5 text-white font-medium shadow hover:bg-amber-600">Kirim via WhatsApp</button>
              <p className="text-xs text-neutral-500">Dengan klik kirim, Anda akan diarahkan ke WhatsApp untuk memulai percakapan dengan admin.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
