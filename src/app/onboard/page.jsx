'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import QRCode from 'qrcode'

export default function OnboardPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    logo_url: '',
    google_review_url: '',
    owner_name: '',
    owner_email: '',
    owner_whatsapp: '',
    active: true,
  })
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(null)
  const [logoFile, setLogoFile] = useState(null)
  const [logoPreview, setLogoPreview] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('stellr_onboard_auth') === 'true') {
      setAuthenticated(true)
    }
  }, [])

  async function handleAuth(e) {
    e.preventDefault()
    setAuthError('')
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, type: 'onboard' }),
    })
    if (res.ok) {
      sessionStorage.setItem('stellr_onboard_auth', 'true')
      setAuthenticated(true)
    } else {
      setAuthError('Incorrect password')
    }
  }

  function handleNameChange(value) {
    setFormData((prev) => ({ ...prev, name: value }))
    if (!slugManuallyEdited) {
      const autoSlug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      setFormData((prev) => ({ ...prev, slug: autoSlug }))
    }
  }

  function handleSlugChange(value) {
    setSlugManuallyEdited(true)
    setFormData((prev) => ({ ...prev, slug: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')

    let logoUrl = formData.logo_url || null

    // Upload logo file if selected
    if (logoFile) {
      setUploading(true)
      const fileExt = logoFile.name.split('.').pop()
      const fileName = `${formData.slug}-${Date.now()}.${fileExt}`
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('logos')
        .upload(fileName, logoFile, { cacheControl: '3600', upsert: false })

      if (uploadError) {
        setSubmitError('Logo upload failed: ' + uploadError.message)
        setSubmitting(false)
        setUploading(false)
        return
      }

      const { data: urlData } = supabase.storage.from('logos').getPublicUrl(fileName)
      logoUrl = urlData.publicUrl
      setUploading(false)
    }

    const { data, error } = await supabase
      .from('restaurants')
      .insert({
        name: formData.name,
        slug: formData.slug,
        logo_url: logoUrl,
        google_review_url: formData.google_review_url,
        owner_name: formData.owner_name || null,
        owner_email: formData.owner_email || null,
        owner_whatsapp: formData.owner_whatsapp || null,
        active: formData.active,
      })
      .select()
      .single()

    if (error) {
      if (error.code === '23505' || error.message?.includes('duplicate')) {
        setSubmitError('This slug is already taken. Please choose a different one.')
      } else {
        setSubmitError(error.message || 'Something went wrong.')
      }
      setSubmitting(false)
      return
    }

    setSuccess({ name: data.name, slug: data.slug })
    setSubmitting(false)
  }

  function resetForm() {
    setFormData({
      name: '',
      slug: '',
      logo_url: '',
      google_review_url: '',
      owner_name: '',
      owner_email: '',
      owner_whatsapp: '',
      active: true,
    })
    setSlugManuallyEdited(false)
    setSuccess(null)
    setSubmitError('')
    setLogoFile(null)
    setLogoPreview(null)
  }

  function handleLogoFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setLogoFile(file)
    setLogoPreview(URL.createObjectURL(file))
    setFormData((prev) => ({ ...prev, logo_url: '' }))
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <form onSubmit={handleAuth} className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Stellr Onboard</h1>
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
            Continue
          </button>
        </form>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Restaurant Added</h2>
            <p className="text-lg text-gray-700 mb-1">{success.name}</p>
            <a
              href={`https://stellr.biz/r/${success.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm break-all"
            >
              stellr.biz/r/{success.slug}
            </a>

            <QRCodeDisplay url={`https://stellr.biz/r/${success.slug}`} />

            <button
              onClick={resetForm}
              className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Add Another Restaurant
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Restaurant</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              Lowercase only, no spaces, use hyphens. This becomes their URL: stellr.biz/r/{formData.slug || '[slug]'}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
            <div className="flex items-center gap-3 mb-2">
              <label className="flex-1 cursor-pointer">
                <div className="w-full px-4 py-3 border border-gray-300 border-dashed rounded-lg text-base text-center text-gray-500 hover:bg-gray-50 transition-colors">
                  {logoFile ? logoFile.name : 'Click to upload logo image'}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoFile}
                  className="hidden"
                />
              </label>
              {logoPreview && (
                <img src={logoPreview} alt="Preview" className="w-12 h-12 rounded-full object-contain border border-gray-200" />
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
              <span className="flex-1 h-px bg-gray-200" />
              <span>or paste URL</span>
              <span className="flex-1 h-px bg-gray-200" />
            </div>
            <input
              type="url"
              value={formData.logo_url}
              onChange={(e) => { setFormData((prev) => ({ ...prev, logo_url: e.target.value })); setLogoFile(null); setLogoPreview(null) }}
              placeholder="https://example.com/logo.png"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Google Review URL *</label>
            <input
              type="url"
              required
              value={formData.google_review_url}
              onChange={(e) => setFormData((prev) => ({ ...prev, google_review_url: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              Go to Google Maps, find the restaurant, click Write a review, copy the URL from your browser address bar
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name</label>
            <input
              type="text"
              value={formData.owner_name}
              onChange={(e) => setFormData((prev) => ({ ...prev, owner_name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Owner Email</label>
            <input
              type="email"
              value={formData.owner_email}
              onChange={(e) => setFormData((prev) => ({ ...prev, owner_email: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Owner WhatsApp</label>
            <input
              type="text"
              value={formData.owner_whatsapp}
              onChange={(e) => setFormData((prev) => ({ ...prev, owner_whatsapp: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              Include country code, no plus sign, no spaces. Example: 923001234567
            </p>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Active</label>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, active: !prev.active }))}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                formData.active ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  formData.active ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {submitError && (
            <p className="text-red-600 text-sm">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (uploading ? 'Uploading logo...' : 'Adding...') : 'Add Restaurant'}
          </button>
        </form>
      </div>
    </div>
  )
}

function QRCodeDisplay({ url }) {
  const canvasRef = useRef(null)
  const [dataUrl, setDataUrl] = useState(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, { width: 200, margin: 2 }, () => {})
      QRCode.toDataURL(url, { width: 600, margin: 2 }, (err, dataUrl) => {
        if (!err) setDataUrl(dataUrl)
      })
    }
  }, [url])

  function downloadQR() {
    if (!dataUrl) return
    const link = document.createElement('a')
    link.download = `qr-${url.split('/r/')[1] || 'restaurant'}.png`
    link.href = dataUrl
    link.click()
  }

  return (
    <div className="mt-6">
      <p className="text-sm text-gray-500 mb-3">QR Code (ready to print)</p>
      <canvas ref={canvasRef} className="mx-auto" />
      <button
        onClick={downloadQR}
        className="mt-3 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      >
        Download QR Code
      </button>
    </div>
  )
}
