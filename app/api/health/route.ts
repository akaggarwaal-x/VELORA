import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'velora-organics', timestamp: new Date().toISOString() });
}
