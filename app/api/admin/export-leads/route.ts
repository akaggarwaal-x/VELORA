import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  if (!process.env.DATABASE_URL) return new NextResponse('companyName,contactName,email,country\nDemo Co,Jane,jane@example.com,UAE');
  const leads = await prisma.bulkInquiry.findMany({ orderBy: { createdAt: 'desc' } });
  const csv = ['companyName,contactName,email,country,interest,moq,message'];
  for (const lead of leads) csv.push(`${lead.companyName},${lead.contactName},${lead.email},${lead.country},${lead.interest},${lead.moq},"${lead.message.replace(/"/g, '""')}"`);
  return new NextResponse(csv.join('\n'), { headers: { 'Content-Type': 'text/csv' } });
}
