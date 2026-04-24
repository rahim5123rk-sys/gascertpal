import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { supabase, callFunction } from '../lib/supabase'
import { TEAM_PLANS, getMonthlyPriceId } from '../lib/teamPlans'

export default function Team() {
  const [params] = useSearchParams()
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [linkSent, setLinkSent] = useState(false)
  const [authBusy, setAuthBusy] = useState(false)
  const [error, setError] = useState(null)

  const [company, setCompany] = useState(null)
  const [loading, setLoading] = useState(false)
  const [actionBusy, setActionBusy] = useState(null) // tier id being processed

  const flashMsg = useMemo(() => {
    if (params.get('checkout') === 'success') {
      return 'Payment successful — your team seats are being activated. This page will refresh shortly.'
    }
    if (params.get('checkout') === 'cancel') return 'Checkout cancelled.'
    return null
  }, [params])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session ?? null))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!session) return
    void loadCompany()
    // Post-checkout: give the webhook a head start, then poll once.
    if (params.get('checkout') === 'success') {
      const t = setTimeout(() => void loadCompany(), 4000)
      return () => clearTimeout(t)
    }
  }, [session, params])

  async function loadCompany() {
    setLoading(true)
    setError(null)
    try {
      const { data: profile, error: pErr } = await supabase
        .from('profiles')
        .select('company_id, role, email')
        .eq('id', session.user.id)
        .maybeSingle()
      if (pErr) throw pErr
      if (!profile?.company_id) throw new Error('No company on your profile.')
      if (profile.role !== 'admin') throw new Error('Only the company admin can manage billing.')

      const { data: co, error: cErr } = await supabase
        .from('companies')
        .select('id, name, worker_seat_limit, stripe_customer_id, stripe_seat_tier, stripe_status, stripe_current_period_end')
        .eq('id', profile.company_id)
        .maybeSingle()
      if (cErr) throw cErr
      setCompany(co)
    } catch (e) {
      setError(e.message ?? 'Failed to load company')
    } finally {
      setLoading(false)
    }
  }

  async function sendMagicLink(e) {
    e.preventDefault()
    setAuthBusy(true)
    setError(null)
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { emailRedirectTo: `${window.location.origin}/team` },
      })
      if (error) throw error
      setLinkSent(true)
    } catch (e) {
      setError(e.message ?? 'Could not send link')
    } finally {
      setAuthBusy(false)
    }
  }

  async function signOut() {
    await supabase.auth.signOut()
    setSession(null)
    setCompany(null)
  }

  async function checkout(tierId) {
    const priceId = getMonthlyPriceId(tierId)
    if (!priceId) { setError('Plan not configured yet — please try again later.'); return }
    setActionBusy(tierId)
    try {
      const { url } = await callFunction('stripe-create-checkout', { price_id: priceId })
      if (url) window.location.href = url
    } catch (e) {
      setError(e.message ?? 'Checkout failed')
    } finally {
      setActionBusy(null)
    }
  }

  async function openPortal() {
    setActionBusy('portal')
    try {
      const { url } = await callFunction('stripe-create-portal', {})
      if (url) window.location.href = url
    } catch (e) {
      setError(e.message ?? 'Could not open billing portal')
    } finally {
      setActionBusy(null)
    }
  }

  return (
    <>
      <SEO title="Manage Team — GasPilot" description="Add and manage worker seats for your GasPilot team." />

      <section className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-800">&larr; Back to home</Link>
        <h1 className="text-4xl font-bold mt-4 mb-2">Manage Your Team</h1>
        <p className="text-neutral-600 mb-8">
          Add additional worker seats to your GasPilot company. Admin only. You keep your £20/month Pro subscription on iOS — this page adds team capacity on top of it.
        </p>

        {flashMsg && (
          <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800 mb-6">
            {flashMsg}
          </div>
        )}
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 mb-6">
            {error}
          </div>
        )}

        {!session && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Sign in to manage your team</h2>
            <p className="text-sm text-neutral-600 mb-4">
              Use the same email as your GasPilot admin account. We&rsquo;ll send you a one-time link.
            </p>
            {linkSent ? (
              <p className="text-sm text-neutral-800">Check your email for the sign-in link.</p>
            ) : (
              <form onSubmit={sendMagicLink} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm"
                />
                <button
                  type="submit"
                  disabled={authBusy}
                  className="rounded-lg bg-[#1d1d1f] text-white px-4 py-2 text-sm font-medium disabled:opacity-50"
                >
                  {authBusy ? 'Sending…' : 'Send link'}
                </button>
              </form>
            )}
          </div>
        )}

        {session && loading && <p className="text-neutral-500">Loading your company…</p>}

        {session && !loading && company && (
          <>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">Signed in as</p>
                  <p className="text-sm text-neutral-800">{session.user.email}</p>
                </div>
                <button onClick={signOut} className="text-sm text-neutral-500 hover:text-neutral-800 underline">Sign out</button>
              </div>

              <hr className="my-4 border-neutral-100" />

              <p className="text-xs text-neutral-500 uppercase tracking-wide">Current team plan</p>
              <p className="text-lg font-semibold text-neutral-900 mt-1">
                {company.stripe_seat_tier
                  ? `${TEAM_PLANS.find((t) => t.id === company.stripe_seat_tier)?.name ?? company.stripe_seat_tier} — ${company.worker_seat_limit} worker seats`
                  : 'Solo (no extra worker seats)'}
              </p>
              {company.stripe_status && company.stripe_status !== 'active' && (
                <p className="text-xs text-amber-700 mt-1">Billing status: {company.stripe_status}</p>
              )}

              {company.stripe_customer_id && (
                <button
                  onClick={openPortal}
                  disabled={actionBusy === 'portal'}
                  className="mt-4 inline-flex rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50 disabled:opacity-50"
                >
                  {actionBusy === 'portal' ? 'Opening…' : 'Manage billing (change card, cancel, invoices)'}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TEAM_PLANS.map((tier) => {
                const isCurrent = company.stripe_seat_tier === tier.id
                const priceId = getMonthlyPriceId(tier.id)
                const unavailable = !priceId
                return (
                  <div key={tier.id} className={`rounded-2xl border p-5 ${isCurrent ? 'border-[#1d1d1f] bg-neutral-50' : 'border-neutral-200 bg-white'}`}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-semibold">{tier.name}</h3>
                      <p className="text-xl font-bold">{tier.monthly}</p>
                    </div>
                    <p className="text-sm text-neutral-600 mt-1">
                      +{tier.seats} worker seat{tier.seats === 1 ? '' : 's'} per month
                    </p>
                    <button
                      onClick={() => checkout(tier.id)}
                      disabled={unavailable || actionBusy === tier.id || isCurrent}
                      className="mt-4 w-full rounded-lg bg-[#1d1d1f] text-white px-4 py-2 text-sm font-medium disabled:opacity-50"
                    >
                      {isCurrent ? 'Current plan' : unavailable ? 'Coming soon' : actionBusy === tier.id ? 'Starting…' : `Choose ${tier.name}`}
                    </button>
                  </div>
                )
              })}
            </div>

            <p className="text-xs text-neutral-500 mt-8">
              Prices exclude VAT where applicable. Subscriptions renew automatically; cancel anytime via &ldquo;Manage billing&rdquo;. Payment is processed by Stripe on behalf of GasPilot.
            </p>
          </>
        )}
      </section>
    </>
  )
}
