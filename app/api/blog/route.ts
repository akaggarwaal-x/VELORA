import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { blogPosts } from '@/lib/data';

export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json(blogPosts);
  const posts = await prisma.blogPost.findMany({ include: { category: true } });
  return NextResponse.json(posts);
}
