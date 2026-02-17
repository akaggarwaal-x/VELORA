import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/sections/site-header';
import { SiteFooter } from '@/components/sections/site-footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://veloraorganics.com'),
  title: { default: 'Velora Organics | Premium Global Organic Lifestyle Brand', template: '%s | Velora Organics' },
  description: 'Luxury organic wellness and natural products for retail and global bulk export.',
  openGraph: { type: 'website', title: 'Velora Organics', description: 'Nature Engineered For Global Living' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Velora Organics',
              url: 'https://veloraorganics.com',
              sameAs: ['https://www.instagram.com', 'https://www.linkedin.com'],
              contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'exports@veloraorganics.com' }]
            })
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
