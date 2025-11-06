import { TrendingUp } from 'lucide-react';

const rows = [
  { type: 'Antam 1 gr', buy: 'Rp 1.250.000', sell: 'Rp 1.200.000' },
  { type: 'Antam 5 gr', buy: 'Rp 6.050.000', sell: 'Rp 5.900.000' },
  { type: 'Perhiasan 75%', buy: 'Rp 880.000/gram', sell: 'Rp 820.000/gram' },
];

export default function GoldPrice() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-amber-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-500 grid place-items-center text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Update Harga Emas</h2>
            <p className="text-neutral-600">Harga indikatif, hubungi kami untuk info terbaru</p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-amber-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-amber-100">
            <thead className="bg-amber-50/60">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-700">Jenis</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-700">Beli</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-700">Jual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {rows.map((r) => (
                <tr key={r.type} className="hover:bg-amber-50/40">
                  <td className="px-6 py-4 text-sm text-neutral-800">{r.type}</td>
                  <td className="px-6 py-4 text-sm font-medium text-emerald-700">{r.buy}</td>
                  <td className="px-6 py-4 text-sm font-medium text-rose-700">{r.sell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-neutral-500">Catatan: Harga dapat berubah sewaktu-waktu mengikuti pasar.</p>
      </div>
    </section>
  );
}
