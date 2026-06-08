// /forgot-password — mirrors the mobile app's flow:
// user enters email, Supabase sends a recovery link that lands on /reset-password.

import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'

const RESET_REDIRECT_URL = 'https://gaspilotapp.com/reset-password'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: RESET_REDIRECT_URL,
      })
      if (error) throw error
      setSent(true)
    } catch (e) {
      setError(e?.message ?? 'Could not send reset email')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <SEO title="Forgot password - GasPilot" description="Reset your GasPilot password." />
      <section className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Forgot your password?</h1>
        <p className="text-sm text-neutral-600 mb-6">
          Enter the email on your GasPilot account and we&rsquo;ll send you a link to reset it.
        </p>

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 mb-4">
            {error}
          </div>
        )}

        {sent ? (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-800 mb-3">
              Check your email for a password-reset link. It&rsquo;ll bring you back here to choose a new password.
            </p>
            <p className="text-xs text-neutral-500">
              Don&rsquo;t see it? Check your spam folder. The link expires in 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col gap-3">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={busy || !email.trim()}
              className="rounded-lg bg-[#1d1d1f] text-white px-5 py-2 text-sm font-medium disabled:opacity-50"
            >
              {busy ? 'Sending…' : 'Send reset link'}
            </button>
          </form>
        )}

        <div className="mt-6 text-sm">
          <Link to="/team" className="text-neutral-600 hover:text-neutral-900 underline">
            Back to sign in
          </Link>
        </div>
      </section>
    </>
  )
}
