import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Cincin Emas Klasik',
    price: 'Rp 3.250.000',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1610465299996-31b03d63b430?q=80&w=1640&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Kalung Liontin Berlian',
    price: 'Rp 7.850.000',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1615233500126-15b1096507d0?q=80&w=1640&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Gelang Rantai Elegan',
    price: 'Rp 5.600.000',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1640&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Anting Emas Mutiara',
    price: 'Rp 2.950.000',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1610395219791-a65899a6e2a2?q=80&w=1640&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Koleksi Pilihan</h2>
            <p className="mt-2 text-neutral-600">Produk populer dengan desain terbaru</p>
          </div>
          <a href="#" className="text-amber-600 font-medium hover:underline">Lihat semua</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl ring-1 ring-neutral-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-amber-700 font-bold">{p.price}</span>
                  <div className="flex items-center gap-1 text-sm text-neutral-600">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {p.rating}
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg bg-amber-500 py-2 text-white font-medium hover:bg-amber-600 transition-colors">Detail</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
