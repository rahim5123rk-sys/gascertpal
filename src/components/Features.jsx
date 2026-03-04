import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'CP12 Certificates',
    description: 'Generate fully compliant gas safety certificates on-site. Capture readings, get digital signatures, email instantly.',
    accent: true,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Smart Scheduling',
    description: 'Visual calendar for your whole team. Spot clashes, assign jobs, and never double-book a customer again.',
    accent: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'PDF Invoices & Quotes',
    description: 'Create professional invoices in seconds. Add line items, apply VAT, send polished PDFs. Track what\'s paid.',
    accent: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Client Management',
    description: 'Full customer database. Contact details, job history, certificates — everything at your fingertips on-site.',
    accent: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Job Tracking',
    description: 'Create, assign, and track every job from quote to completion. Update status on-site, attach photos.',
    accent: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Digital Signatures',
    description: 'Customers sign on your screen. Signatures lock into certificates and documents immediately. Zero paper.',
    accent: false,
  },
]

const delays = ['', 'animation-delay-75', 'animation-delay-150', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400']

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" aria-label="GasCertPal features — CP12 certificates, scheduling, invoicing, job tracking" className="py-32 sm:py-40 lg:py-48 relative overflow-hidden noise">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-surface)]/50 to-[var(--bg-base)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-3 text-[var(--accent)] font-600 text-xs uppercase tracking-[0.2em] mb-6">
            <span className="w-6 h-px bg-[var(--accent)]" />
            Capabilities
            <span className="w-6 h-px bg-[var(--accent)]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--fg)] mb-6 leading-tight ${
            inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
          }`}>
            Built for the job site.<br className="hidden sm:block" />
            <span className="text-[var(--fg-muted)]">Not the boardroom.</span>
          </h2>
          <p className={`text-[var(--fg-muted)] max-w-xl mx-auto text-base sm:text-lg ${
            inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'
          }`}>
            Six core tools. Zero fluff. Everything a gas engineer needs to run a tight operation.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`glass-card rounded-3xl p-10 sm:p-12 group relative overflow-hidden ${
                inView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
              }`}
            >
              {/* Accent top bar for highlighted card */}
              {f.accent && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-warm,var(--accent))] to-transparent" />
              )}

              <div className="flex items-center justify-between mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  f.accent
                    ? 'bg-[var(--accent)]/12 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white'
                    : 'bg-[var(--bg-elevated)] text-[var(--fg-muted)] group-hover:bg-[var(--fg)] group-hover:text-[var(--bg-base)]'
                }`}>
                  {f.icon}
                </div>
                {f.accent && (
                  <span className="text-[10px] font-700 text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded-md uppercase tracking-wider font-display">
                    Core
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-600 text-[var(--fg)] mb-3">{f.title}</h3>
              <p className="text-[var(--fg-muted)] text-sm leading-[1.75]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
