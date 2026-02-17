import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/sections/hero';
import { products } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-3xl">Brand Philosophy</h2>
        <p className="mt-4 max-w-3xl text-forest/80">Velora combines evidence-backed botanicals, transparent sourcing, and premium sensory design to serve distributors, salons, retailers, and conscious consumers globally.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="font-serif text-3xl">Bestsellers</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{products.filter(p => p.isBestseller).map((product) => (
          <Card key={product.id}>
            <Image src={product.image} alt={`${product.name} organic product`} width={800} height={600} className="h-64 w-full rounded-lg object-cover" />
            <h3 className="mt-4 font-serif text-xl">{product.name}</h3>
            <p className="mt-2 text-sm text-forest/80">{product.description}</p>
            <Link href={`/product/${product.slug}`} className="mt-4 inline-block"><Button>View Product</Button></Link>
          </Card>
        ))}</div>
      </section>
      <section className="bg-beige py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div><h3 className="font-serif text-3xl">Bulk & Distributor Partnerships</h3><p className="mt-2 text-forest/80">Private label, compliant documentation, and multi-region logistics support.</p></div>
          <Link href="/bulk-export"><Button variant="gold">Submit Bulk Inquiry</Button></Link>
        </div>
      </section>
    </main>
  );
}
