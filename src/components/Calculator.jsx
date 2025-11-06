import React, { useMemo, useState } from 'react';
import { Calculator as CalculatorIcon, Percent, Scale } from 'lucide-react';

const goldOptions = [
  { label: 'Antam 24K', value: 'antam', price: 1215000 },
  { label: 'LM 24K', value: 'lm24', price: 1208000 },
  { label: 'Perhiasan 22K', value: '22k', price: 1000000 },
  { label: 'Perhiasan 18K', value: '18k', price: 820000 },
];

const Calculator = () => {
  const [type, setType] = useState('antam');
  const [weight, setWeight] = useState('10');
  const [purity, setPurity] = useState('99.99');
  const [feePct, setFeePct] = useState('1.2');

  const selected = useMemo(() => goldOptions.find(g => g.value === type) || goldOptions[0], [type]);

  const estimated = useMemo(() => {
    const w = parseFloat(weight || '0');
    const fee = parseFloat(feePct || '0') / 100;
    const base = selected.price * w;
    const purityFactor = Math.max(0, Math.min(1, parseFloat(purity || '0') / 100));
    const gross = base * purityFactor;
    const net = Math.max(0, gross * (1 - fee));
    return { base, gross, net };
  }, [selected.price, weight, purity, feePct]);

  const currency = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n || 0);

  return (
    <section id="kalkulator" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Kalkulator Estimasi</h2>
            <p className="mt-2 text-neutral-600">Masukkan jenis, berat, dan kemurnian untuk melihat estimasi nilai yang kami tawarkan.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-neutral-600">
            <Percent size={18} className="text-amber-600" /> Biaya layanan fleksibel sesuai kondisi barang
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 p-6 rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Jenis</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500">
                  {goldOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Berat (gram)</label>
                <input type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Kemurnian (%)</label>
                <input type="number" min="0" max="100" step="0.01" value={purity} onChange={(e) => setPurity(e.target.value)} className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Biaya Layanan (%)</label>
                <input type="number" min="0" max="20" step="0.1" value={feePct} onChange={(e) => setFeePct(e.target.value)} className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-amber-500 focus:border-amber-500" />
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="text-sm text-neutral-600">Nilai Kotor</div>
                <div className="text-xl font-bold text-neutral-900">{currency(estimated.gross)}</div>
              </div>
              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="text-sm text-neutral-600">Perkiraan Diterima</div>
                <div className="text-xl font-bold text-emerald-700">{currency(estimated.net)}</div>
              </div>
              <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="text-sm text-neutral-600">Harga Dasar/gram</div>
                <div className="text-xl font-bold text-amber-700">{currency(selected.price)}</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-white font-medium shadow hover:bg-amber-600">
                <CalculatorIcon size={18}/> Simulasikan
              </button>
              <a href="#kontak" className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-neutral-800 font-medium hover:bg-neutral-50">
                <Scale size={18}/> Tawarkan Sekarang
              </a>
            </div>
          </div>

          <div className="md:col-span-2 p-6 rounded-xl border border-neutral-200 bg-amber-50/60">
            <h3 className="font-semibold text-neutral-900">Tips Meningkatkan Nilai</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-700">
              <li>Sertakan nota/sertifikat asli bila ada</li>
              <li>Bersihkan perhiasan dari kotoran sebelum ditaksir</li>
              <li>Berat dan kadar akan diuji di tempat secara transparan</li>
              <li>Untuk berlian, sertakan sertifikat GIA/IGI jika tersedia</li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-white border border-amber-200">
              <div className="text-xs text-neutral-600">Disclaimer</div>
              <div className="text-sm text-neutral-700">Hasil kalkulator adalah estimasi. Penawaran final ditentukan setelah pemeriksaan fisik.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
