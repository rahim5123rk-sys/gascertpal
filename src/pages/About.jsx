import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import SEO from '../components/SEO'

const capabilities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Gas Safety Certificates',
    description: 'Generate fully compliant CP12 certificates on-site. Enter appliance data, capture readings, get a digital signature, email instantly.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Invoices & Quotes',
    description: 'Professional invoices and quotes in seconds. Add line items, apply VAT, send a polished PDF by email. Track payments.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Job Management',
    description: 'Track every job from start to finish. Log details, attach photos, update status on the go.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Team Management',
    description: 'Invite workers with a unique code. Assign jobs, manage schedules across devices.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Calendar & Scheduling',
    description: 'Full schedule at a glance. Visual calendar, spot clashes, never double-book.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Digital Signatures',
    description: 'Customers sign on your phone. Captured and locked into certificates. No paper.',
  },
]

const whyItems = [
  { title: 'Works Offline', desc: 'No signal? No problem. Works without internet and syncs when you\'re back online.' },
  { title: 'Free to Use', desc: 'Every feature, no subscriptions, no hidden charges.' },
  { title: 'Gas Safe Compliant', desc: 'CP12 certificates meet all legal requirements under Gas Safety Regulations 1998.' },
  { title: 'GDPR Compliant', desc: 'Data encrypted, securely stored, exportable or deletable at any time.' },
  { title: 'Dead Simple', desc: 'No training needed. Set up in under 3 minutes.' },
  { title: 'UK Focused', desc: 'Built for UK gas engineers. VAT, HMRC, Gas Safe — covered.' },
]

const delays = ['', 'animation-delay-75', 'animation-delay-150', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400']

export default function About() {
  const [featRef, featInView] = useInView()
  const [whyRef, whyInView] = useInView()

  return (
    <div className="min-h-screen">
      <SEO
        title="About GasPilot — CP12 Certificates, Invoices & Job Management for Gas Engineers"
        description="GasPilot was built by tradespeople, for tradespeople. Create CP12 gas safety certificates, professional invoices, manage jobs, schedule work, and run your gas engineering business from your phone."
        path="/about"
      />

      {/* Hero */}
      <div className="pt-24 sm:pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-4">About</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--fg)] mb-5 leading-tight">
            Everything a gas engineer needs in one app
          </h1>
          <p className="text-[var(--fg-muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            GasPilot was built by tradespeople, for tradespeople. Your entire business in your pocket.
          </p>
          <a href="/#download" className="btn-primary btn-lg">
            Download Free
          </a>
        </div>
      </div>

      {/* Screenshots */}
      <section className="py-20 sm:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-3">Preview</p>
            <h2 className="text-2xl sm:text-3xl font-700 text-[var(--fg)]">
              Designed for real engineers
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
            <div className="w-48 sm:w-56">
              <div className="bg-[var(--bg-elevated)] rounded-[2.2rem] p-2 ring-1 ring-[var(--border)]">
                <div className="rounded-[1.8rem] overflow-hidden">
                  <img src="/IMG_2634.PNG" alt="GasPilot dashboard" className="w-full h-auto block" loading="lazy" width="550" height="1110" />
                </div>
              </div>
              <p className="text-center text-[var(--fg-dim)] text-xs font-500 mt-3">Dashboard</p>
            </div>
            <div className="w-48 sm:w-56">
              <div className="bg-[var(--bg-elevated)] rounded-[2.2rem] p-2 ring-1 ring-[var(--border)]">
                <div className="rounded-[1.8rem] overflow-hidden">
                  <img src="/IMG_2633.PNG" alt="GasPilot CP12 certificate" className="w-full h-auto block" loading="lazy" width="550" height="1110" />
                </div>
              </div>
              <p className="text-center text-[var(--fg-dim)] text-xs font-500 mt-3">CP12 Certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 sm:py-28 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8" ref={featRef}>
          <div className="text-center mb-14">
            <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-3">Capabilities</p>
            <h2 className="text-2xl sm:text-3xl font-700 text-[var(--fg)]">
              What you can do with GasPilot
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {capabilities.map((c, idx) => (
              <div
                key={c.title}
                className={`bg-[var(--bg-base)] p-8 sm:p-10 ${
                  featInView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
                }`}
              >
                <div className="w-10 h-10 bg-[var(--bg-elevated)] rounded-lg flex items-center justify-center text-[var(--fg-muted)] mb-5">
                  {c.icon}
                </div>
                <h3 className="font-display text-base font-600 text-[var(--fg)] mb-2">{c.title}</h3>
                <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GasPilot */}
      <section className="py-20 sm:py-28 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8" ref={whyRef}>
          <div className="text-center mb-14">
            <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-2xl sm:text-3xl font-700 text-[var(--fg)]">
              Built for the real world
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
            {whyItems.map((item, idx) => (
              <div
                key={item.title}
                className={`bg-[var(--bg-base)] p-8 ${
                  whyInView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
                }`}
              >
                <h3 className="font-display text-base font-600 text-[var(--fg)] mb-2">{item.title}</h3>
                <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-700 text-[var(--fg)] mb-4">
            Ready to simplify your business?
          </h2>
          <p className="text-[var(--fg-muted)] text-base mb-8 max-w-md mx-auto">
            Join thousands of gas engineers already using GasPilot.
          </p>
          <a href="/#download" className="btn-primary btn-lg">
            Download Free
          </a>
        </div>
      </section>
    </div>
  )
}
