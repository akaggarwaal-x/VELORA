import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { products } from '@/lib/data';

export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json(products);
  const data = await prisma.product.findMany({ include: { category: true } });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  if (!process.env.DATABASE_URL) return NextResponse.json({ ok: true, mock: true });
  const defaultCategory = await prisma.category.upsert({ where: { slug: 'general' }, update: {}, create: { name: 'General', slug: 'general' } });
  const product = await prisma.product.create({
    data: {
      name: body.name,
      slug: body.slug,
      description: body.description,
      price: Number(body.price),
      image: body.image,
      ingredients: ['Pending'],
      benefits: ['Pending'],
      categoryId: defaultCategory.id
    }
  });
  return NextResponse.json(product);
}
