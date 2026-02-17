import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const valid = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;
  if (!valid) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const response = NextResponse.json({ ok: true });
  response.cookies.set('velora_admin', '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8
  });
  return response;
}
