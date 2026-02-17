import Link from 'next/link';
import { blogPosts } from '@/lib/data';

export const metadata = { title: 'SEO Hub & Ingredient Education' };

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-serif text-4xl">Velora Knowledge Hub</h1>
      <div className="mt-8 space-y-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-lg border bg-white p-6">
            <h2 className="font-serif text-2xl">{post.title}</h2>
            <p className="mt-2 text-sm text-forest/80">{post.excerpt}</p>
            <Link className="mt-3 inline-block text-sm underline" href={`/blog/${post.slug}`}>Read article</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
