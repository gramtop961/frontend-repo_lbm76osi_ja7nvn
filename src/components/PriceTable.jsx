import React from 'react';

const data = [
  { type: 'Emas Antam 24K', buy: 1215000, sell: 1240000 },
  { type: 'Logam Mulia 24K', buy: 1208000, sell: 1232000 },
  { type: 'Perhiasan 22K', buy: 1000000, sell: 1050000 },
  { type: 'Perhiasan 18K', buy: 820000, sell: 880000 },
  { type: 'Berlian (per karat)', buy: 12000000, sell: 15000000 },
];

const format = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const PriceTable = () => {
  return (
    <section id="harga" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Harga Beli & Jual</h2>
          <p className="mt-2 text-neutral-600">Kisaran harga terkini untuk referensi. Hubungi kami untuk penawaran terbaik.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Jenis</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">Kami Beli</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">Kami Jual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {data.map((row) => (
                <tr key={row.type} className="hover:bg-neutral-50/60">
                  <td className="px-4 py-4 text-sm font-medium text-neutral-800">{row.type}</td>
                  <td className="px-4 py-4 text-sm text-right text-emerald-700 font-semibold">{format(row.buy)}</td>
                  <td className="px-4 py-4 text-sm text-right text-amber-700 font-semibold">{format(row.sell)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
