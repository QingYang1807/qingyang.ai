import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => null)
  if (!data || !data.email || !data.message) {
    return NextResponse.json({ ok: false, message: 'Invalid payload' }, { status: 400 })
  }

  // For now: log to serverless logs; can be extended to Vercel KV/Email
  console.log('Contact form received:', data)

  return NextResponse.json({ ok: true })
}

