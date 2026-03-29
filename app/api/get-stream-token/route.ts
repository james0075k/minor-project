import { auth } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = await auth();

  console.log('get-stream-token: userId =', userId);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const secret = process.env.STREAM_SECRET_KEY;

  if (!apiKey || !secret) {
    return NextResponse.json({ error: 'Missing Stream config' }, { status: 500 });
  }

  const client = new StreamClient(apiKey, secret);
  const exp = Math.floor(Date.now() / 1000) + 3600;
  const iat = Math.floor(Date.now() / 1000) - 60;
  const token = client.createToken(userId, exp, iat);

  return NextResponse.json({ token });
}
