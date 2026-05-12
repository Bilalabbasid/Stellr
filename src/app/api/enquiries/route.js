import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

// Rate limiter: max 3 submissions per IP per 10 minutes
const submissions = new Map()
const MAX_SUBMISSIONS = 3
const WINDOW_MS = 10 * 60 * 1000

function isRateLimited(ip) {
  const now = Date.now()
  const record = submissions.get(ip)
  if (!record || now - record.start > WINDOW_MS) {
    submissions.set(ip, { start: now, count: 1 })
    return false
  }
  record.count++
  if (record.count > MAX_SUBMISSIONS) return true
  return false
}

function sanitize(str, maxLen = 500) {
  if (!str || typeof str !== 'string') return null
  return str.slice(0, maxLen).replace(/<[^>]*>/g, '').trim() || null
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const name = sanitize(body.name, 200)
  const restaurant = sanitize(body.restaurant, 200)
  const email = sanitize(body.email, 200)
  const country = sanitize(body.country, 100)
  const city = sanitize(body.city, 100)
  const whatsapp = sanitize(body.whatsapp, 30)
  const plan = sanitize(body.plan, 50)
  const message = sanitize(body.message, 1000)

  if (!name || !restaurant) {
    return NextResponse.json({ error: 'Name and restaurant are required' }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()
  if (!supabase) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 500 })
  }

  const { data, error } = await supabase
    .from('enquiries')
    .insert({ name, restaurant, email, country, city, whatsapp, plan, message })
    .select('id')
    .single()

  if (error) {
    console.error('Enquiry insert error:', error.message)
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
