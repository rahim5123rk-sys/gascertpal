import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Gas Safety Certificates',
    description: 'Generate fully compliant gas safety certificates on-site. Digital signatures, emailed to your customer instantly.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Smart Scheduling',
    description: 'Visual calendar for your team. Spot clashes and never double-book a customer again.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'PDF Invoices & Quotes',
    description: 'Professional invoices in seconds. Add line items, apply VAT, send polished PDFs straight from the app.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Client Management',
    description: 'Full customer database. Contact details, job history, and certificates all at your fingertips.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Job Tracking',
    description: 'Track every job from quote to completion. Update status on-site, keep your whole team in sync.',
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Digital Signatures',
    description: 'Customers sign on your screen. Locked into certificates immediately. Zero paper, zero hassle.',
  },
]

const delays = ['', 'animation-delay-75', 'animation-delay-150', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400']

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="py-28 sm:py-36 lg:py-44 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="text-center mb-20 lg:mb-24">
          <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-5">Features</p>
          <h2 className={`text-3xl sm:text-[2.75rem] font-700 text-[var(--fg)] mb-6 leading-tight ${
            inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
          }`}>
            Built for the job site
          </h2>
          <p className={`text-[var(--fg-muted)] max-w-lg mx-auto text-base sm:text-lg leading-relaxed ${
            inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'
          }`}>
            Everything a gas engineer needs. No bloat, no learning curve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-[var(--bg-base)] p-10 sm:p-12 ${
                inView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--fg-muted)] mb-6">
                {f.icon}
              </div>
              <h3 className="font-display text-lg font-600 text-[var(--fg)] mb-3">{f.title}</h3>
              <p className="text-[var(--fg-muted)] text-sm sm:text-base leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
