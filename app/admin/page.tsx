'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function AdminPage() {
  const [status, setStatus] = useState('');

  async function createProduct(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch('/api/products', { method: 'POST', body: JSON.stringify(payload) });
    setStatus(res.ok ? 'Product created' : 'Failed to create product');
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-serif text-4xl">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-forest/70">Manage products, orders, bulk inquiries, blog posts and lead exports.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <form action={createProduct} className="space-y-3 rounded-xl border bg-white p-5">
          <h2 className="font-semibold">Add Product</h2>
          <Input name="name" placeholder="Product name" required />
          <Input name="slug" placeholder="Slug" required />
          <Input name="price" type="number" placeholder="Price" required />
          <Input name="image" placeholder="Image URL" required />
          <Textarea name="description" placeholder="Description" required />
          <Button>Add product</Button>
        </form>
        <div className="space-y-3 rounded-xl border bg-white p-5">
          <h2 className="font-semibold">Operations</h2>
          <p className="text-sm">• Manage orders and mark fulfillment status.</p>
          <p className="text-sm">• Review and export bulk inquiries to CSV.</p>
          <p className="text-sm">• Publish SEO blog posts and category pages.</p>
          <a href="/api/admin/export-leads" className="text-sm underline">Export Leads CSV</a>
        </div>
      </div>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </main>
  );
}
