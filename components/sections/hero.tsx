'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1200&auto=format&fit=crop">
        <source src="https://cdn.coverr.co/videos/coverr-leaves-in-the-wind-1579/1080p.mp4" />
      </video>
      <div className="absolute inset-0 bg-forest/50" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">Global Organic Wellness Exporter</p>
        <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-tight">Nature Engineered For Global Living</h1>
        <div className="mt-8 flex gap-4">
          <Link href="/shop"><Button>Shop Retail</Button></Link>
          <Link href="/bulk-export"><Button variant="gold">Bulk Inquiry</Button></Link>
        </div>
      </motion.div>
    </section>
  );
}
