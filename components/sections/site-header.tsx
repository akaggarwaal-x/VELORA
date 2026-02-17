import Link from 'next/link';

const nav = [
  ['Shop', '/shop'],
  ['Bulk & Export', '/bulk-export'],
  ['About', '/about'],
  ['Blog', '/blog'],
  ['Contact', '/contact']
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-offwhite/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl text-forest">Velora Organics</Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-forest/90 hover:text-forest">{label}</Link>)}
        </nav>
        <Link href="/admin" className="text-xs text-forest/70">Admin</Link>
      </div>
    </header>
  );
}
