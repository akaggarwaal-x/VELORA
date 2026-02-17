import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json([]);
  const orders = await prisma.order.findMany({ include: { items: true } });
  return NextResponse.json(orders);
}
