export function SiteFooter() {
  return (
    <footer className="mt-20 bg-forest text-beige">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4">
        <div><h4 className="font-serif text-xl">Velora Organics</h4><p className="mt-3 text-sm text-beige/80">Nature Engineered For Global Living.</p></div>
        <div><h5 className="font-semibold">Global Markets</h5><p className="mt-2 text-sm text-beige/80">USA • Europe • UAE • Australia</p></div>
        <div><h5 className="font-semibold">Compliance</h5><p className="mt-2 text-sm text-beige/80">FDA-ready • GMP • ISO placeholders</p></div>
        <div><h5 className="font-semibold">Contact</h5><p className="mt-2 text-sm text-beige/80">exports@veloraorganics.com</p></div>
      </div>
    </footer>
  );
}
