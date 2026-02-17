import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const skincare = await prisma.category.upsert({
    where: { slug: 'skincare' },
    update: {},
    create: { name: 'Skincare', slug: 'skincare', description: 'Luxury plant-based skincare' }
  });

  await prisma.product.upsert({
    where: { slug: 'velora-neroli-revive-serum' },
    update: {},
    create: {
      name: 'Velora Neroli Revive Serum',
      slug: 'velora-neroli-revive-serum',
      description: 'Clinical-grade botanical serum for barrier repair and luminosity.',
      price: 68,
      image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop',
      ingredients: ['Neroli', 'Bakuchiol', 'Squalane'],
      benefits: ['Brightening', 'Barrier repair', 'Hydration'],
      categoryId: skincare.id
    }
  });
}

main().finally(() => prisma.$disconnect());
