import { NextResponse } from 'next/server'

// Simple in-memory rate limiter: max 5 attempts per IP per 15 minutes
const attempts = new Map()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000

function isRateLimited(ip) {
  const now = Date.now()
  const record = attempts.get(ip)
  if (!record || now - record.start > WINDOW_MS) {
    attempts.set(ip, { start: now, count: 1 })
    return false
  }
  record.count++
  if (record.count > MAX_ATTEMPTS) return true
  return false
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, error: 'Too many attempts. Try again later.' }, { status: 429 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }

  const { password, type } = body

  if (typeof password !== 'string' || typeof type !== 'string') {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }

  if (type === 'onboard') {
    if (password === process.env.ONBOARD_PASSWORD) {
      return NextResponse.json({ success: true })
    }
  } else if (type === 'dashboard') {
    if (password === process.env.DASHBOARD_PASSWORD) {
      return NextResponse.json({ success: true })
    }
  }

  return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 })
}
