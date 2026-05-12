'use client'

import { useState, useEffect, useMemo } from 'react'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [restaurants, setRestaurants] = useState([])
  const [feedback, setFeedback] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('restaurants')

  useEffect(() => {
    if (sessionStorage.getItem('stellr_dashboard_auth') === 'true') {
      setAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (authenticated) {
      loadRestaurants()
    }
  }, [authenticated])

  useEffect(() => {
    if (selectedRestaurant) {
      loadFeedback(selectedRestaurant.id)
    }
  }, [selectedRestaurant])

  async function handleAuth(e) {
    e.preventDefault()
    setAuthError('')
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, type: 'dashboard' }),
    })
    if (res.ok) {
      sessionStorage.setItem('stellr_dashboard_auth', 'true')
      setAuthenticated(true)
    } else {
      setAuthError('Incorrect password')
    }
  }

  function handleLogout() {
    sessionStorage.removeItem('stellr_dashboard_auth')
    setAuthenticated(false)
    setPassword('')
  }

  async function loadRestaurants() {
    setLoading(true)
    const { data } = await supabase
      .from('restaurants')
      .select('*')
      .order('created_at', { ascending: false })

    const { data: allFeedback } = await supabase
      .from('feedback')
      .select('id, restaurant_id, rating, created_at')

    setRestaurants(data || [])
    setFeedback(allFeedback || [])
    setLoading(false)
  }

  async function loadFeedback(restaurantId) {
    const { data } = await supabase
      .from('feedback')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false })

    setFeedback(data || [])
  }

  function getWeekAgo() {
    const d = new Date()
    d.setDate(d.getDate() - 7)
    return d.toISOString()
  }

  function getRestaurantStats(restaurantId) {
    const allForRestaurant = feedback.filter((f) => f.restaurant_id === restaurantId)
    const weekAgo = getWeekAgo()
    const complaintsThisWeek = allForRestaurant.filter(
      (f) => ['okay', 'poor', 'terrible'].includes(f.rating) && f.created_at >= weekAgo
    )
    return {
      total: allForRestaurant.length,
      complaintsThisWeek: complaintsThisWeek.length,
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <form onSubmit={handleAuth} className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Stellr Dashboard</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400 mb-3"
          />
          {authError && <p className="text-red-600 text-sm mb-3">{authError}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    )
  }

  if (selectedRestaurant) {
    return (
      <DetailView
        restaurant={selectedRestaurant}
        feedback={feedback}
        filter={filter}
        setFilter={setFilter}
        onBack={() => { setSelectedRestaurant(null); loadRestaurants() }}
        onLogout={handleLogout}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <span className="text-lg font-bold">Stellr</span>
        <button onClick={handleLogout} className="text-sm text-gray-300 hover:text-white transition-colors">
          Logout
        </button>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['restaurants', 'enquiries'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === t ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {t === 'restaurants' ? 'Restaurants' : 'Enquiries'}
            </button>
          ))}
        </div>

        {tab === 'restaurants' && (
          <>
            <h1 className="text-xl font-bold text-gray-900 mb-4">Restaurants</h1>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : restaurants.length === 0 ? (
              <p className="text-gray-500">No restaurants yet. Use /onboard to add one.</p>
            ) : (
              <div className="grid gap-3">
                {restaurants.map((r) => {
                  const stats = getRestaurantStats(r.id)
                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRestaurant(r)}
                      className="w-full text-left bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {r.logo_url && (
                          <img src={r.logo_url} alt={r.name} className="w-10 h-10 rounded-full object-contain" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900 truncate">{r.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${r.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                              {r.active ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">/r/{r.slug}</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="text-gray-600">{stats.total} total</p>
                          {stats.complaintsThisWeek > 0 && (
                            <p className="text-red-600">{stats.complaintsThisWeek} complaints this week</p>
                          )}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </>
        )}

        {tab === 'enquiries' && <EnquiriesView />}
      </div>
    </div>
  )
}

function DetailView({ restaurant, feedback, filter, setFilter, onBack, onLogout }) {
  const [report, setReport] = useState('')

  function getWeekAgo() {
    const d = new Date()
    d.setDate(d.getDate() - 7)
    return d.toISOString()
  }

  const weekAgo = getWeekAgo()

  const totalAllTime = feedback.length
  const totalThisWeek = feedback.filter((f) => f.created_at >= weekAgo).length
  const redirectedAllTime = feedback.filter((f) => f.redirected_to_google).length
  const complaintsThisWeek = feedback.filter(
    (f) => ['okay', 'poor', 'terrible'].includes(f.rating) && f.created_at >= weekAgo
  ).length

  const filteredFeedback = useMemo(() => {
    if (filter === 'complaints') {
      return feedback.filter((f) => ['okay', 'poor', 'terrible'].includes(f.rating))
    }
    if (filter === 'google') {
      return feedback.filter((f) => f.redirected_to_google)
    }
    return feedback
  }, [feedback, filter])

  function getRatingColor(rating) {
    if (['excellent', 'good'].includes(rating)) return 'bg-green-100 text-green-700'
    if (rating === 'okay') return 'bg-yellow-100 text-yellow-700'
    return 'bg-red-100 text-red-700'
  }

  function generateReport() {
    const weekFeedback = feedback.filter((f) => f.created_at >= weekAgo)
    const weekComplaints = weekFeedback.filter((f) => ['okay', 'poor', 'terrible'].includes(f.rating))
    const weekRedirected = weekFeedback.filter((f) => f.redirected_to_google).length

    const tagCounts = {}
    const tags = ['food_quality', 'staff_behaviour', 'service_speed', 'cleanliness', 'pricing', 'other']
    tags.forEach((t) => { tagCounts[t] = 0 })

    weekComplaints.forEach((f) => {
      if (f.complaint_tags) {
        f.complaint_tags.forEach((t) => {
          if (tagCounts[t] !== undefined) tagCounts[t]++
        })
      }
    })

    const mostCommon = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])
    const mostCommonTag = mostCommon[0][1] > 0 ? mostCommon[0][0].replace(/_/g, ' ') : 'None'

    const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

    const complaintDetails = weekComplaints
      .map((f) => {
        const date = new Date(f.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
        return `- [${date}] ${f.complaint_text || '(No text provided)'}`
      })
      .join('\n')

    const text = `STELLR WEEKLY REPORT
Restaurant: ${restaurant.name}
Week ending: ${today}

SUMMARY
Total interactions this week: ${weekFeedback.length}
Sent to Google reviews: ${weekRedirected}
Private complaints received: ${weekComplaints.length}

COMPLAINTS BREAKDOWN
Most common issue: ${mostCommonTag}
Food Quality complaints: ${tagCounts.food_quality}
Staff Behaviour complaints: ${tagCounts.staff_behaviour}
Service Speed complaints: ${tagCounts.service_speed}
Cleanliness complaints: ${tagCounts.cleanliness}
Pricing complaints: ${tagCounts.pricing}

COMPLAINT DETAILS
${complaintDetails || 'No complaints this week.'}

Powered by Stellr — stellr.biz`

    setReport(text)
  }

  function copyReport() {
    navigator.clipboard.writeText(report)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <span className="text-lg font-bold">Stellr</span>
        <button onClick={onLogout} className="text-sm text-gray-300 hover:text-white transition-colors">
          Logout
        </button>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-flex items-center gap-1"
        >
          ← Back to list
        </button>

        <div className="flex items-center gap-3 mb-6">
          {restaurant.logo_url && (
            <img src={restaurant.logo_url} alt={restaurant.name} className="w-12 h-12 rounded-full object-contain" />
          )}
          <h1 className="text-2xl font-bold text-gray-900">{restaurant.name}</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-2xl font-bold text-gray-900">{totalAllTime}</p>
            <p className="text-xs text-gray-500">Total all time</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-2xl font-bold text-gray-900">{totalThisWeek}</p>
            <p className="text-xs text-gray-500">This week</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-2xl font-bold text-gray-900">{redirectedAllTime}</p>
            <p className="text-xs text-gray-500">Sent to Google</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-2xl font-bold text-red-600">{complaintsThisWeek}</p>
            <p className="text-xs text-gray-500">Complaints this week</p>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {['all', 'complaints', 'google'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {f === 'all' ? 'All' : f === 'complaints' ? 'Complaints only' : 'Redirected to Google'}
            </button>
          ))}
        </div>

        <div className="space-y-2 mb-8">
          {filteredFeedback.length === 0 ? (
            <p className="text-gray-500 text-sm">No feedback entries found.</p>
          ) : (
            filteredFeedback.map((f) => (
              <div key={f.id} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getRatingColor(f.rating)}`}>
                      {f.rating}
                    </span>
                    {f.complaint_tags && f.complaint_tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {tag.replace(/_/g, ' ')}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {new Date(f.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {f.complaint_text && (
                  <p className="text-sm text-gray-700 mt-2">{f.complaint_text}</p>
                )}
              </div>
            ))
          )}
        </div>

        <div className="border-t border-gray-200 pt-6">
          <button
            onClick={generateReport}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Generate Weekly Report
          </button>

          {report && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Weekly Report</span>
                <button
                  onClick={copyReport}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Copy to clipboard
                </button>
              </div>
              <textarea
                readOnly
                value={report}
                rows={20}
                className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm font-mono resize-none focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function EnquiriesView() {
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    loadEnquiries()
  }, [])

  async function loadEnquiries() {
    setLoading(true)
    const { data } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false })
    setEnquiries(data || [])
    setLoading(false)
  }

  async function updateStatus(id, newStatus) {
    await supabase.from('enquiries').update({ status: newStatus }).eq('id', id)
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    )
  }

  const filtered = statusFilter === 'all'
    ? enquiries
    : enquiries.filter((e) => e.status === statusFilter)

  const statusColors = {
    new: 'bg-blue-100 text-blue-700',
    contacted: 'bg-yellow-100 text-yellow-700',
    converted: 'bg-green-100 text-green-700',
    closed: 'bg-gray-100 text-gray-500',
  }

  if (loading) return <p className="text-gray-500">Loading enquiries...</p>

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-900">Enquiries ({enquiries.length})</h1>
        <button
          onClick={loadEnquiries}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Refresh
        </button>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {['all', 'new', 'contacted', 'converted', 'closed'].map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              statusFilter === s
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
            {s !== 'all' && ` (${enquiries.filter((e) => e.status === s).length})`}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm">No enquiries found.</p>
      ) : (
        <div className="space-y-3">
          {filtered.map((e) => (
            <div key={e.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">{e.name}</h3>
                  <p className="text-sm text-gray-600">{e.restaurant}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {new Date(e.created_at).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                {e.country && <span>📍 {e.country}{e.city ? `, ${e.city}` : ''}</span>}
                {e.email && <span>✉️ {e.email}</span>}
                {e.whatsapp && <span>📱 {e.whatsapp}</span>}
                {e.plan && <span>📦 {e.plan}</span>}
              </div>

              {e.message && (
                <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 mb-3">{e.message}</p>
              )}

              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[e.status] || statusColors.new}`}>
                  {e.status || 'new'}
                </span>
                <select
                  value={e.status || 'new'}
                  onChange={(ev) => updateStatus(e.id, ev.target.value)}
                  className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
