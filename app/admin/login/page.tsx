'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AdminLoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setError('Invalid credentials.');
      return;
    }

    router.push(searchParams.get('redirect') || '/admin');
  }

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md items-center px-6 py-12">
      <form action={handleSubmit} className="w-full space-y-4 rounded-xl border bg-white p-6">
        <h1 className="font-serif text-3xl">Admin Login</h1>
        <Input name="email" type="email" placeholder="Admin email" required />
        <Input name="password" type="password" placeholder="Password" required />
        <Button className="w-full">Login</Button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </main>
  );
}
