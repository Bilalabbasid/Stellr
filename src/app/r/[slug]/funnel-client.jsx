'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const RATING_MAP = {
  excellent: { label: 'Excellent', positive: true },
  good: { label: 'Good', positive: true },
  okay: { label: 'It was okay', positive: false },
  poor: { label: 'Not great', positive: false },
  terrible: { label: 'Terrible', positive: false },
}

const COMPLAINT_TAGS = [
  { value: 'food_quality', label: 'Food Quality' },
  { value: 'staff_behaviour', label: 'Staff Behaviour' },
  { value: 'service_speed', label: 'Service Speed' },
  { value: 'cleanliness', label: 'Cleanliness' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'other', label: 'Something else' },
]

export default function FunnelClient({ restaurant }) {
  const [stage, setStage] = useState('rating')
  const [feedbackId, setFeedbackId] = useState(null)
  const [complaintText, setComplaintText] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [submitting, setSubmitting] = useState(false)

  async function handleRating(rating) {
    if (submitting) return
    setSubmitting(true)

    const isPositive = RATING_MAP[rating].positive

    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert({
          restaurant_id: restaurant.id,
          rating,
          redirected_to_google: isPositive,
        })
        .select('id')
        .single()

      if (isPositive) {
        window.location.href = restaurant.google_review_url
        return
      }

      if (data) {
        setFeedbackId(data.id)
      }
      setStage('complaint')
    } catch (e) {
      // Still move to complaint stage even if save fails
      setStage('complaint')
    }

    setSubmitting(false)
  }

  async function handleComplaintSubmit(e) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)

    try {
      if (feedbackId) {
        await supabase
          .from('feedback')
          .update({
            complaint_text: complaintText || null,
            complaint_tags: selectedTags.length > 0 ? selectedTags : null,
          })
          .eq('id', feedbackId)
      }
    } catch (e) {
      // Move to thank you regardless
    }

    setStage('thankyou')
    setSubmitting(false)
  }

  function toggleTag(tag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-[480px] mx-auto flex flex-col items-center">
        {stage === 'rating' && (
          <>
            {restaurant.logo_url && (
              <img
                src={restaurant.logo_url}
                alt={restaurant.name}
                className="w-24 h-24 object-contain rounded-full mb-6"
              />
            )}
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
              {restaurant.name}
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8">
              How was your experience at {restaurant.name} today?
            </p>
            <div className="w-full flex flex-col gap-3">
              {Object.entries(RATING_MAP).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => handleRating(key)}
                  disabled={submitting}
                  className="w-full py-4 px-6 text-lg font-medium rounded-xl border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {label}
                </button>
              ))}
            </div>
          </>
        )}

        {stage === 'complaint' && (
          <>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              We&apos;re sorry to hear that.
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Please tell us what happened so we can make it right.
            </p>
            <form onSubmit={handleComplaintSubmit} className="w-full">
              <textarea
                value={complaintText}
                onChange={(e) => setComplaintText(e.target.value)}
                placeholder="Tell us what went wrong (optional)"
                rows={4}
                className="w-full p-4 border border-gray-200 rounded-xl text-base resize-none focus:outline-none focus:ring-2 focus:ring-gray-300 mb-4"
              />
              <p className="text-sm font-medium text-gray-700 mb-3">
                What was the issue about?
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {COMPLAINT_TAGS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => toggleTag(value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      selectedTags.includes(value)
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 text-lg font-medium rounded-xl bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </>
        )}

        {stage === 'thankyou' && (
          <div className="flex flex-col items-center text-center py-12">
            {restaurant.logo_url && (
              <img
                src={restaurant.logo_url}
                alt={restaurant.name}
                className="w-20 h-20 object-contain rounded-full mb-6"
              />
            )}
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Thank you for your feedback
            </h2>
            <p className="text-gray-600">
              We have passed this on to the team and they will look into it.
            </p>
          </div>
        )}

        <p className="text-xs text-gray-300 mt-auto pt-8">stellr.biz</p>
      </div>
    </div>
  )
}
