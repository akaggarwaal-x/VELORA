import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith('/admin')) return NextResponse.next();
  if (req.nextUrl.pathname === '/admin/login') return NextResponse.next();

  const hasAdminCookie = req.cookies.get('velora_admin')?.value === '1';
  if (hasAdminCookie) return NextResponse.next();

  const loginUrl = new URL('/admin/login', req.url);
  loginUrl.searchParams.set('redirect', req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/admin/:path*']
};
