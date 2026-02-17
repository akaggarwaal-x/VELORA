export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  ingredients: string[];
  benefits: string[];
  isBestseller?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Velora Neroli Revive Serum',
    slug: 'velora-neroli-revive-serum',
    description: 'Clinical-grade botanical serum for barrier repair and luminosity.',
    price: 68,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop',
    category: 'Skincare',
    ingredients: ['Neroli', 'Bakuchiol', 'Squalane'],
    benefits: ['Brightening', 'Barrier repair', 'Hydration'],
    isBestseller: true
  },
  {
    id: 2,
    name: 'Velora Ashwagandha Hair Elixir',
    slug: 'velora-ashwagandha-hair-elixir',
    description: 'Scalp and strand nourishment for salons and premium home routines.',
    price: 54,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1200&auto=format&fit=crop',
    category: 'Haircare',
    ingredients: ['Ashwagandha', 'Amla', 'Argan'],
    benefits: ['Strength', 'Shine', 'Reduced breakage'],
    isBestseller: true
  },
  {
    id: 3,
    name: 'Velora Sandalwood Calm Mist',
    slug: 'velora-sandalwood-calm-mist',
    description: 'Aromatherapeutic facial and linen mist for wellness rituals.',
    price: 42,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop',
    category: 'Wellness',
    ingredients: ['Sandalwood', 'Rose water', 'Lavender'],
    benefits: ['Calming', 'Hydrating', 'Travel friendly']
  }
];

export const blogPosts = [
  {
    slug: 'organic-skincare-import-guide',
    title: 'Importer Guide: Selecting Premium Organic Skincare Lines',
    excerpt: 'How distributors in USA, EU, UAE, and Australia evaluate natural product suppliers.',
    content: 'Distributors prioritize documentation, stable lead times, and transparent ingredient sourcing. Velora supports import partners with GMP-ready paperwork and private-label flexibility.'
  },
  {
    slug: 'bakuchiol-vs-retinol-global-trends',
    title: 'Bakuchiol vs Retinol: Global Consumer Preference Shifts',
    excerpt: 'A category intelligence brief for premium retailers and salons.',
    content: 'Bakuchiol is increasingly preferred by sensitive skin audiences seeking natural alternatives. Export-ready brands should provide efficacy proofs and usage education.'
  }
];
