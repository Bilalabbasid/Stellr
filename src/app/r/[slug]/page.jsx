import { createServerSupabaseClient } from '@/lib/supabase-server'
import FunnelClient from './funnel-client'

export const revalidate = 3600

export default async function RestaurantFunnelPage({ params }) {
  const { slug } = await params

  let restaurant = null
  let error = false

  try {
    const supabase = createServerSupabaseClient()
    const { data, error: dbError } = await supabase
      .from('restaurants')
      .select('*')
      .eq('slug', slug)
      .single()

    if (dbError || !data) {
      restaurant = null
    } else {
      restaurant = data
    }
  } catch (e) {
    error = true
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
        <p className="text-lg text-gray-600 text-center">Something went wrong. Please try again later.</p>
        <p className="text-sm text-gray-400 mt-4">stellr.biz</p>
      </div>
    )
  }

  if (!restaurant || !restaurant.active) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
        <p className="text-xl text-gray-700 text-center font-medium">This page is not available</p>
        <p className="text-sm text-gray-400 mt-8">stellr.biz</p>
      </div>
    )
  }

  return <FunnelClient restaurant={restaurant} />
}
