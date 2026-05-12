import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request) {
  const body = await request.json()
  const { name, restaurant, country, city, whatsapp, plan, message } = body

  if (!name || !restaurant) {
    return NextResponse.json({ error: 'Name and restaurant are required' }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()
  if (!supabase) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
  }

  const { data, error } = await supabase
    .from('enquiries')
    .insert({
      name,
      restaurant,
      country: country || null,
      city: city || null,
      whatsapp: whatsapp || null,
      plan: plan || null,
      message: message || null,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, id: data.id })
}
