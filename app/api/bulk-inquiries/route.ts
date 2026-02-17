import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { bulkInquirySchema } from '@/lib/schema';

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = bulkInquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ ok: true, mock: true });
  const inquiry = await prisma.bulkInquiry.create({ data: parsed.data });
  return NextResponse.json(inquiry);
}
