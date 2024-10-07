import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const param = request.nextUrl.searchParams.get('busca');

  const body = await request.json();

  return Response.json({ param, body });
}
