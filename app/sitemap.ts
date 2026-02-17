import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://veloraorganics.com';
  return ['', '/shop', '/bulk-export', '/about', '/blog', '/contact', '/admin'].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));
}
