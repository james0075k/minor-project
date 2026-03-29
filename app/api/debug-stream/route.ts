import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const secret = process.env.STREAM_SECRET_KEY;

  return NextResponse.json({
    apiKeyPrefix: apiKey?.slice(0, 4) ?? 'MISSING',
    apiKeyLength: apiKey?.length ?? 0,
    secretPrefix: secret?.slice(0, 4) ?? 'MISSING',
    secretLength: secret?.length ?? 0,
  });
}
