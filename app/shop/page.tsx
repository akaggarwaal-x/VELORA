import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Card } from '@/components/ui/card';

export const metadata = { title: 'Shop Organic Retail Products' };

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-serif text-4xl">Retail Shop</h1>
      <p className="mt-3 text-forest/80">Filter by skin type, ingredient profile, vegan, and organic preferences.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <Card key={p.id}>
            <Image src={p.image} alt={`${p.name} ${p.category}`} width={900} height={700} className="h-56 w-full rounded-lg object-cover" />
            <h2 className="mt-4 font-serif text-xl">{p.name}</h2>
            <p className="text-sm text-forest/70">{p.category}</p>
            <p className="mt-2 text-sm">{p.currency} {p.price}</p>
            <Link className="mt-4 inline-block text-sm underline" href={`/product/${p.slug}`}>Quick view</Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
