// /reset-password — the landing page for Supabase password-recovery emails.
// Supabase auto-detects the recovery token from the URL (detectSessionInUrl
// is true, PKCE flow), fires PASSWORD_RECOVERY, and lets us call updateUser.

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'

export default function ResetPassword() {
  const navigate = useNavigate()
  const [ready, setReady] = useState(false)
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [done, setDone] = useState(false)

  // Listen for the PASSWORD_RECOVERY event so we know the user is allowed to
  // set a new password. If the token's bad/expired, no event fires and the
  // form stays disabled.
  useEffect(() => {
    let mounted = true
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return
      if (event === 'PASSWORD_RECOVERY' || (event === 'SIGNED_IN' && session)) {
        setReady(true)
      }
    })
    // Also check immediately in case Supabase already resolved the session
    // before we attached the listener.
    supabase.auth.getSession().then(({ data }) => {
      if (mounted && data?.session) setReady(true)
    })
    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [])

  function validate() {
    if (password.length < 8) return 'Password must be at least 8 characters.'
    if (!/[A-Z]/.test(password)) return 'Password needs an uppercase letter.'
    if (!/[0-9]/.test(password)) return 'Password needs a number.'
    if (password !== confirm) return 'Passwords do not match.'
    return null
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const v = validate()
    if (v) { setError(v); return }
    setBusy(true)
    setError(null)
    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setDone(true)
      setTimeout(() => navigate('/team'), 1800)
    } catch (e) {
      setError(e?.message ?? 'Could not update password')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <SEO title="Reset password - GasPilot" description="Set a new password for your GasPilot account." />
      <section className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Choose a new password</h1>
        <p className="text-sm text-neutral-600 mb-6">
          At least 8 characters with one uppercase letter and one number.
        </p>

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 mb-4">
            {error}
          </div>
        )}

        {done ? (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-800">
              Password updated. Redirecting to sign in…
            </p>
          </div>
        ) : !ready ? (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-800 mb-3">
              This reset link looks invalid or has expired.
            </p>
            <Link to="/forgot-password" className="text-sm text-neutral-900 underline">
              Request a fresh link
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col gap-3">
            <input
              type="password"
              required
              autoComplete="new-password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400"
            />
            <input
              type="password"
              required
              autoComplete="new-password"
              placeholder="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={busy || !password || !confirm}
              className="rounded-lg bg-[#1d1d1f] text-white px-5 py-2 text-sm font-medium disabled:opacity-50"
            >
              {busy ? 'Saving…' : 'Save new password'}
            </button>
          </form>
        )}
      </section>
    </>
  )
}
