import { BulkInquiryForm } from './sections';

export const metadata = { title: 'Bulk Export & Private Label' };

export default function BulkExportPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-serif text-4xl">Bulk, Export & Private Label</h1>
      <p className="mt-3 max-w-3xl text-forest/80">Velora supports private label programs, white-label customization, and global shipping readiness with regulatory documentation for major markets.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-5"><h3 className="font-semibold">MOQ & Process</h3><p className="mt-2 text-sm">Transparent MOQ tiers for startups and established importers.</p></div>
        <div className="rounded-lg border p-5"><h3 className="font-semibold">Compliance Blocks</h3><p className="mt-2 text-sm">FDA / GMP / ISO placeholders with upload-ready certificates.</p></div>
        <div className="rounded-lg border p-5"><h3 className="font-semibold">Catalog & WhatsApp</h3><p className="mt-2 text-sm">Downloadable catalog and direct WA business contact.</p></div>
      </div>
      <div className="mt-12"><BulkInquiryForm /></div>
    </main>
  );
}
