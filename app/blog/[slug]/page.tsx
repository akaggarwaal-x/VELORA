import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-serif text-4xl">{post.title}</h1>
      <p className="mt-6 leading-8 text-forest/90">{post.content}</p>
    </main>
  );
}
