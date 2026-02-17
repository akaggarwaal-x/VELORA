import Link from 'next/link';

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/971500000000?text=Hello%20Velora%20Organics%2C%20I%20need%20bulk%20export%20support"
      target="_blank"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg"
    >
      WhatsApp Export Desk
    </Link>
  );
}
