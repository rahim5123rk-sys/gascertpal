import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { supabase, callFunction } from '../lib/supabase'
import { TEAM_PLANS, getMonthlyPriceId } from '../lib/teamPlans'

const TEAM_WEB_URL = 'https://gaspilotapp.com/team'

export default function Team() {
  const [params] = useSearchParams()
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [linkSent, setLinkSent] = useState(false)
  const [authBusy, setAuthBusy] = useState(false)
  const [error, setError] = useState(null)

  const [profile, setProfile] = useState(null)
  const [company, setCompany] = useState(null)
  const [workers, setWorkers] = useState([])
  const [notice, setNotice] = useState(null)
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
      const { data: prof, error: pErr } = await supabase
        .from('profiles')
        .select('id, company_id, role, email, full_name')
        .eq('id', session.user.id)
        .maybeSingle()
      if (pErr) throw pErr
      if (!prof?.company_id) throw new Error('No company on your profile.')
      if (prof.role !== 'admin') throw new Error('Only the company admin can manage billing.')
      setProfile(prof)

      const { data: co, error: cErr } = await supabase
        .from('companies')
        .select('id, name, invite_code, worker_seat_limit, stripe_customer_id, stripe_seat_tier, stripe_status, stripe_current_period_end')
        .eq('id', prof.company_id)
        .maybeSingle()
      if (cErr) throw cErr
      setCompany(co)

      const { data: ws, error: wErr } = await supabase
        .from('profiles')
        .select('id, email, full_name, created_at')
        .eq('company_id', prof.company_id)
        .eq('role', 'worker')
        .order('created_at', { ascending: true })
      if (wErr) throw wErr
      setWorkers(ws ?? [])
    } catch (e) {
      setError(e.message ?? 'Failed to load company')
    } finally {
      setLoading(false)
    }
  }

  async function removeWorker(worker) {
    const label = worker.full_name || worker.email
    if (!window.confirm(`Remove ${label} from your team? They'll lose access until re-invited.`)) return
    setActionBusy(`remove-${worker.id}`)
    setError(null)
    setNotice(null)
    try {
      const { error: rpcErr } = await supabase.rpc('remove_worker_from_company', { p_worker_id: worker.id })
      if (rpcErr) throw rpcErr
      setWorkers((prev) => prev.filter((w) => w.id !== worker.id))
      setNotice('Worker removed. The seat is now free.')
    } catch (e) {
      setError(e.message ?? 'Could not remove worker')
    } finally {
      setActionBusy(null)
    }
  }

  async function copyInvite() {
    if (!company?.invite_code) return
    try {
      await navigator.clipboard.writeText(company.invite_code)
      setNotice('Invite code copied.')
      setTimeout(() => setNotice(null), 2500)
    } catch {
      setError('Could not copy to clipboard')
    }
  }

  async function sendMagicLink(e) {
    e.preventDefault()
    setAuthBusy(true)
    setError(null)
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          emailRedirectTo: TEAM_WEB_URL,
          shouldCreateUser: false,
        },
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
    setProfile(null)
    setWorkers([])
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
        <h1 className="text-4xl font-bold text-white mt-4 mb-2">Manage Your Team</h1>
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
        {notice && (
          <div className="rounded-lg bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-800 mb-6">
            {notice}
          </div>
        )}

        {!session && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-neutral-900">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Sign in to manage your team</h2>
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
                  className="flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400"
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
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-8 text-neutral-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">Signed in as</p>
                  <p className="text-sm text-neutral-800">{session.user.email}</p>
                </div>
                <button onClick={signOut} className="text-sm text-neutral-700 hover:text-neutral-900 underline">Sign out</button>
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
                  className="mt-4 inline-flex rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 disabled:opacity-50"
                >
                  {actionBusy === 'portal' ? 'Opening…' : 'Manage billing (change card, cancel, invoices)'}
                </button>
              )}
            </div>

            {/* Workers */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-8 text-neutral-900">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">
                  Workers ({workers.length}/{company.worker_seat_limit ?? 0})
                </h2>
              </div>

              {company.invite_code && workers.length < (company.worker_seat_limit ?? 0) && (
                <div className="rounded-lg bg-neutral-50 border border-neutral-200 px-4 py-3 mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">Invite code (single-use)</p>
                    <p className="text-lg font-mono font-bold text-neutral-900 tracking-wider">{company.invite_code}</p>
                  </div>
                  <button
                    onClick={copyInvite}
                    className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-900 hover:bg-neutral-50"
                  >Copy</button>
                </div>
              )}
              {(company.worker_seat_limit ?? 0) > 0 && workers.length >= (company.worker_seat_limit ?? 0) && (
                <p className="text-sm text-amber-700 mb-4">All seats in use — remove a worker or upgrade your plan below to add more.</p>
              )}

              {workers.length === 0 ? (
                <p className="text-sm text-neutral-500">No workers yet. Share your invite code so a worker can join from the mobile app.</p>
              ) : (
                <ul className="divide-y divide-neutral-100">
                  {workers.map((w) => (
                    <li key={w.id} className="py-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-neutral-900">{w.full_name || '(no name)'}</p>
                        <p className="text-xs text-neutral-500">{w.email}</p>
                      </div>
                      <button
                        onClick={() => removeWorker(w)}
                        disabled={actionBusy === `remove-${w.id}`}
                        className="text-xs text-red-600 hover:text-red-700 font-medium disabled:opacity-50"
                      >
                        {actionBusy === `remove-${w.id}` ? 'Removing…' : 'Remove'}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <h2 className="text-lg font-semibold text-white mb-1">{company.stripe_seat_tier ? 'Change plan' : 'Add worker seats'}</h2>
            <p className="text-sm text-neutral-400 mb-4">Billed monthly. Cancel anytime. Additional workers only — the admin seat is included with £20/mo Pro on iOS.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TEAM_PLANS.map((tier) => {
                const isCurrent = company.stripe_seat_tier === tier.id
                const priceId = getMonthlyPriceId(tier.id)
                const unavailable = !priceId
                return (
                  <div key={tier.id} className={`rounded-2xl border p-5 text-neutral-900 ${isCurrent ? 'border-[#1d1d1f] bg-neutral-50' : 'border-neutral-200 bg-white'}`}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-semibold text-neutral-900">{tier.name}</h3>
                      <p className="text-xl font-bold text-neutral-900">{tier.monthly}</p>
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
