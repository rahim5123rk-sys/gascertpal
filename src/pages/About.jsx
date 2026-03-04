import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const capabilities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Gas Safety Certificates',
    description: 'Generate fully compliant CP12 certificates on-site. Enter appliance data, capture readings, get a digital signature, and email the certificate to the landlord and tenant instantly.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Invoices & Quotes',
    description: 'Create professional invoices and quotes in seconds. Add line items, apply VAT, and send a polished PDF directly to your customer by email. Track payments.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Job Management',
    description: 'Create and track every job from start to finish. Log customer details, attach site photos, update job status on the go, and keep a full history.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Team Management',
    description: 'Invite workers with a unique code. Assign jobs, manage schedules, and let them complete work on their own device.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Calendar & Scheduling',
    description: 'See your full schedule at a glance. View upcoming jobs on a visual calendar. Spot clashes and never double-book.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Digital Signatures',
    description: 'Get customers to sign directly on your phone. Signatures are captured and locked into certificates and documents. No paper.',
  },
]

const whyItems = [
  { title: 'Works Offline', desc: 'No signal on site? No problem. GasCertPal works without internet and syncs when you\'re back online.', tag: 'Reliability' },
  { title: 'Free to Use', desc: 'Download and use every feature for free. No subscriptions, no hidden charges.', tag: 'Pricing' },
  { title: 'Gas Safe Compliant', desc: 'CP12 certificates meet all legal requirements under the Gas Safety Regulations 1998.', tag: 'Compliance' },
  { title: 'GDPR Compliant', desc: 'Your data is encrypted, securely stored, and exportable or deletable at any time.', tag: 'Security' },
  { title: 'Dead Simple', desc: 'No training needed. If you can use a phone, you can use GasCertPal. Set up in under 3 minutes.', tag: 'Ease' },
  { title: 'UK Focused', desc: 'Built specifically for UK gas engineers and tradespeople. VAT, HMRC, Gas Safe — we get it.', tag: 'Local' },
]

const delays = ['', 'animation-delay-75', 'animation-delay-150', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400']

export default function About() {
  const [featRef, featInView] = useInView()
  const [whyRef, whyInView] = useInView()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative pt-28 sm:pt-32 pb-20 overflow-hidden grid-bg noise">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-[var(--accent)]/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center relative z-10">
          <div className="inline-flex items-center gap-3 text-[var(--accent)] font-600 text-xs uppercase tracking-[0.2em] mb-5">
            <span className="w-6 h-px bg-[var(--accent)]" />
            About
            <span className="w-6 h-px bg-[var(--accent)]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-700 text-[var(--fg)] mb-5 leading-tight">
            Everything a Gas Engineer<br />
            <span className="text-[var(--fg-muted)]">Needs in One App</span>
          </h1>
          <p className="text-[var(--fg-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            GasCertPal was built by tradespeople, for tradespeople. We know the hassle of paper forms, chasing invoices, and juggling spreadsheets. So we built an app that puts your entire business in your pocket.
          </p>
          <a href="/#download" className="btn-primary text-base px-8 py-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Free
          </a>
        </div>
      </div>

      {/* App Screenshots */}
      <section className="py-28 sm:py-36 relative overflow-hidden border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 text-[var(--cyan)] font-600 text-xs uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-[var(--cyan)]" />
              Preview
              <span className="w-6 h-px bg-[var(--cyan)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-700 text-[var(--fg)] mb-4 leading-tight">
              Designed for<br /><span className="text-[var(--fg-muted)]">Real Engineers</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <div className="relative w-56 sm:w-60">
              <div className="bg-[#0a0c10] rounded-[2.5rem] p-2 shadow-[0_24px_64px_rgba(0,0,0,0.4)] ring-1 ring-white/5">
                <div className="rounded-[2rem] overflow-hidden">
                  <img src="/IMG_2634.PNG" alt="GasCertPal dashboard" className="w-full h-auto block" loading="lazy" width="550" height="1110" />
                </div>
              </div>
              <p className="text-center text-[var(--fg-muted)] text-sm font-500 mt-4">Dashboard & Quick Actions</p>
            </div>
            <div className="relative w-56 sm:w-60">
              <div className="bg-[#0a0c10] rounded-[2.5rem] p-2 shadow-[0_24px_64px_rgba(0,0,0,0.4)] ring-1 ring-white/5">
                <div className="rounded-[2rem] overflow-hidden">
                  <img src="/IMG_2633.PNG" alt="GasCertPal CP12 certificate form" className="w-full h-auto block" loading="lazy" width="550" height="1110" />
                </div>
              </div>
              <p className="text-center text-[var(--fg-muted)] text-sm font-500 mt-4">CP12 Gas Safety Certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-28 sm:py-36 relative overflow-hidden noise">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10" ref={featRef}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 text-[var(--accent)] font-600 text-xs uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-[var(--accent)]" />
              Capabilities
              <span className="w-6 h-px bg-[var(--accent)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-700 text-[var(--fg)] mb-4">
              What You Can Do<br /><span className="text-[var(--fg-muted)]">With GasCertPal</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((c, idx) => (
              <div
                key={c.title}
                className={`glass-card rounded-3xl p-10 group ${
                  featInView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
                }`}
              >
                <div className="w-14 h-14 bg-[var(--bg-elevated)] rounded-xl flex items-center justify-center text-[var(--fg-muted)] mb-7 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-600 text-[var(--fg)] mb-3">{c.title}</h3>
                <p className="text-[var(--fg-muted)] text-sm leading-[1.75]">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GasCertPal */}
      <section className="py-28 sm:py-36 relative overflow-hidden border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10" ref={whyRef}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 text-[var(--cyan)] font-600 text-xs uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-[var(--cyan)]" />
              Why Us
              <span className="w-6 h-px bg-[var(--cyan)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-700 text-[var(--fg)] mb-4">
              Built for the<br /><span className="text-[var(--fg-muted)]">Real World</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyItems.map((item, idx) => (
              <div
                key={item.title}
                className={`glass-card rounded-3xl p-8 sm:p-10 hover:border-[var(--border-hover)] ${
                  whyInView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
                }`}
              >
                <span className="text-[10px] font-600 text-[var(--cyan)] bg-[var(--cyan-glow)] px-2.5 py-1 rounded-md uppercase tracking-wider font-display mb-5 inline-block">{item.tag}</span>
                <h3 className="font-display text-lg font-600 text-[var(--fg)] mb-3">{item.title}</h3>
                <p className="text-[var(--fg-muted)] text-sm leading-[1.75]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 sm:py-36 border-t border-[var(--border)] relative overflow-hidden grid-bg noise">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-700 text-[var(--fg)] mb-4">
            Ready to Simplify<br /><span className="text-[var(--fg-muted)]">Your Business?</span>
          </h2>
          <p className="text-[var(--fg-muted)] text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Join thousands of gas engineers already using GasCertPal to save time and look professional.
          </p>
          <a href="/#download" className="btn-primary text-lg px-10 py-5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Now — Free
          </a>
        </div>
      </section>
    </div>
  )
}
