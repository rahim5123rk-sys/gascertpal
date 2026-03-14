import { useInView } from '../hooks/useInView'
import SEO from '../components/SEO'

const featureGroups = [
  {
    label: 'Documents',
    title: 'Professional paperwork, zero effort',
    features: [
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        ),
        title: 'Gas Safety Certificates',
        description: 'Generate fully compliant gas safety certificates on-site. Enter appliance data, capture readings, add a digital signature, and email the finished certificate to your customer instantly.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        title: 'PDF Invoices & Quotes',
        description: 'Create professional invoices and quotes in seconds. Add line items, apply VAT, and send polished PDFs straight from the app. Track payment status at a glance.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        ),
        title: 'Digital Signatures',
        description: 'Customers sign directly on your phone screen. Signatures are captured and locked into certificates immediately. Zero paper, zero hassle.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Your Logo on Every Document',
        description: 'Upload your company logo and it appears on every invoice, quote, and certificate you send. Professional branding that makes your business stand out.',
      },
    ],
  },
  {
    label: 'Organisation',
    title: 'Run your whole business from your phone',
    features: [
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
        title: 'Job Tracking',
        description: 'Track every job from quote to completion. Update status on-site, attach photos and notes, and keep your whole team in sync from one screen.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Smart Scheduling',
        description: 'Visual calendar for you and your team. View by day, week, or month. Spot clashes instantly and never double-book a customer again.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'Client Management',
        description: 'Full customer database with contact details, service addresses, job history, and every certificate ever issued — all at your fingertips.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Renewal Reminders',
        description: 'Automatic reminders when gas safety certificates are due for renewal. Never miss a follow-up and keep your recurring revenue flowing.',
      },
    ],
  },
  {
    label: 'Team & Tools',
    title: 'Scale without the overhead',
    features: [
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        ),
        title: 'Team Management',
        description: 'Invite workers with a unique code. Assign jobs, manage permissions, and see everyone\'s schedule across devices. Perfect for growing businesses.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Works Offline',
        description: 'No signal on site? No problem. Create certificates, invoices, and manage jobs without an internet connection. Everything syncs automatically when you\'re back online.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'Gas Toolbox',
        description: 'Gas rate calculator, ventilation sizing, water hardness lookup, and boiler manuals — all built in. The tools you actually use, right where you need them.',
      },
      {
        icon: (
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: 'Gas Safe Compliant',
        description: 'Every certificate meets all legal requirements under the Gas Safety (Installation and Use) Regulations 1998. Built specifically for Gas Safe registered engineers in the UK.',
      },
    ],
  },
]

const delays = ['', 'animation-delay-75', 'animation-delay-150', 'animation-delay-200']

export default function Features() {
  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const refs = [ref1, ref2, ref3]
  const inViews = [inView1, inView2, inView3]

  return (
    <div className="min-h-screen">
      <SEO
        title="Features — GasPilot Gas Engineer App"
        description="Gas safety certificates, invoices, quotes, job tracking, scheduling, team management, digital signatures, and more. Add your own logo to every document. Works offline."
        path="/features"
      />

      {/* Hero */}
      <div className="pt-24 sm:pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-4">Features</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--fg)] mb-5 leading-tight">
            Everything you need to run your gas business
          </h1>
          <p className="text-[var(--fg-muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Certificates, invoices, scheduling, team management — all in one app. Add your own logo, work offline, and look professional from day one.
          </p>
          <a href="/#download" className="btn-primary btn-lg">
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* Feature groups */}
      {featureGroups.map((group, gi) => (
        <section key={group.label} className="py-20 sm:py-28 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8" ref={refs[gi]}>
            <div className="text-center mb-14">
              <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-3">{group.label}</p>
              <h2 className={`text-2xl sm:text-3xl font-bold text-[var(--fg)] leading-tight ${
                inViews[gi] ? 'opacity-0 animate-fade-up' : 'opacity-0'
              }`}>
                {group.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
              {group.features.map((f, idx) => (
                <div
                  key={f.title}
                  className={`bg-[var(--bg-base)] p-8 sm:p-10 ${
                    inViews[gi] ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
                  }`}
                >
                  <div className="w-10 h-10 bg-[var(--bg-elevated)] rounded-lg flex items-center justify-center text-[var(--fg-muted)] mb-5">
                    {f.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-[var(--fg)] mb-2">{f.title}</h3>
                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] mb-4">
            Ready to ditch the paperwork?
          </h2>
          <p className="text-[var(--fg-muted)] text-base mb-8 max-w-md mx-auto">
            Start your 30-day free trial. No credit card required.
          </p>
          <a href="/#download" className="btn-primary btn-lg">
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  )
}
