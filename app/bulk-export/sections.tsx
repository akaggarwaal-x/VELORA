'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function BulkInquiryForm() {
  const [status, setStatus] = useState('');

  async function onSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch('/api/bulk-inquiries', { method: 'POST', body: JSON.stringify(payload) });
    setStatus(res.ok ? 'Inquiry received. Export team will reply within 24h.' : 'Submission failed. Please retry.');
  }

  return (
    <form action={onSubmit} className="grid gap-4 rounded-xl border bg-white p-6 md:grid-cols-2">
      <Input name="companyName" placeholder="Company Name" required />
      <Input name="contactName" placeholder="Contact Person" required />
      <Input name="email" placeholder="Business Email" type="email" required />
      <Input name="country" placeholder="Country" required />
      <Input name="moq" placeholder="Expected MOQ" required />
      <Input name="interest" placeholder="Product Interest" required />
      <Textarea name="message" placeholder="Tell us your market and requirements" className="md:col-span-2" required />
      <Button className="md:col-span-2">Submit Bulk Inquiry</Button>
      {status && <p className="text-sm md:col-span-2">{status}</p>}
    </form>
  );
}
