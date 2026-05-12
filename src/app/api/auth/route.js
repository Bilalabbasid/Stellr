import { NextResponse } from 'next/server'

export async function POST(request) {
  const { password, type } = await request.json()

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
