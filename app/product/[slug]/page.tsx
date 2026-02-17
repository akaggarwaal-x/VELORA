import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <Image src={product.image} alt={`${product.name} detailed gallery`} width={1200} height={1000} className="h-[520px] w-full rounded-xl object-cover" />
        <div>
          <h1 className="font-serif text-4xl">{product.name}</h1>
          <p className="mt-4 text-forest/80">{product.description}</p>
          <p className="mt-5 font-semibold">{product.currency} {product.price}</p>
          <div className="mt-5 flex flex-wrap gap-2">{product.benefits.map((b) => <span key={b} className="rounded-full bg-beige px-3 py-1 text-xs">{b}</span>)}</div>
          <h2 className="mt-8 font-serif text-2xl">Ingredient Breakdown</h2>
          <ul className="mt-3 list-disc pl-5 text-sm">{product.ingredients.map((i) => <li key={i}>{i}</li>)}</ul>
          <div className="mt-8 flex gap-4"><Button>Sticky Add to Cart</Button><Button variant="outline">Bulk Order</Button></div>
          <div className="mt-6 text-sm"><p>Lab tested proof: available with COA request.</p><p>Spec sheet PDF: downloadable in dashboard and catalog section.</p></div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              image: product.image,
              description: product.description,
              brand: { '@type': 'Brand', name: 'Velora Organics' },
              offers: {
                '@type': 'Offer',
                priceCurrency: product.currency,
                price: product.price,
                availability: 'https://schema.org/InStock'
              }
            })
          }}
        />
        </div>
      </div>
    </main>
  );
}
