import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const metadata = { title: 'Contact Global Team' };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-serif text-4xl">International Contact</h1>
      <form className="mt-8 grid gap-4 rounded-xl border bg-white p-6 md:grid-cols-2">
        <Input placeholder="Full Name" />
        <Input placeholder="Business Email" type="email" />
        <Input placeholder="Department (Sales / Compliance / Support)" className="md:col-span-2" />
        <Textarea placeholder="Your message" className="md:col-span-2" />
        <Button className="md:col-span-2">Send Inquiry</Button>
      </form>
      <iframe className="mt-8 h-72 w-full rounded-xl border" loading="lazy" src="https://maps.google.com/maps?q=Dubai&t=&z=5&ie=UTF8&iwloc=&output=embed" />
    </main>
  );
}
