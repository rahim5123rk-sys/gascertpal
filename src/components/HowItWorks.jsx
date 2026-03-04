import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'Download',
    description: 'Get GasCertPal free on the App Store or Google Play. Set up your profile and Gas Safe credentials in under 3 minutes.',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Add Jobs',
    description: 'Log your first job in seconds. Import customers from contacts or add manually. Assign to team members.',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Generate Docs',
    description: 'Finish a job, create a CP12, invoice, or quote on the spot. Get a digital signature and send by email.',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Scale Up',
    description: 'Track revenue, monitor your team, never miss a renewal. The overview to grow your trade business.',
    icon: (
      <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

const delays = ['', 'animation-delay-150', 'animation-delay-300', 'animation-delay-400']

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="py-24 sm:py-32 lg:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 text-[var(--cyan)] font-600 text-xs uppercase tracking-[0.2em] mb-5">
            <span className="w-6 h-px bg-[var(--cyan)]" />
            Process
            <span className="w-6 h-px bg-[var(--cyan)]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--fg)] mb-5 leading-tight ${
            inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
          }`}>
            Up and running.<br className="hidden sm:block" />
            <span className="text-[var(--fg-muted)]">In four steps.</span>
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent z-0" />

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`relative z-10 flex flex-col items-center text-center ${
                inView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
              }`}
            >
              {/* Step number + icon */}
              <div className="relative mb-6">
                <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 bg-[var(--bg-surface)] rounded-2xl flex items-center justify-center text-[var(--fg-muted)] border border-[var(--border)] transition-all duration-200 hover:border-[var(--accent)]/30 hover:text-[var(--accent)]">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                  <span className="text-white text-[10px] font-display font-700">{step.num}</span>
                </div>
              </div>

              <h3 className="font-display text-lg font-600 text-[var(--fg)] mb-2">{step.title}</h3>
              <p className="text-[var(--fg-muted)] text-sm leading-relaxed max-w-[240px]">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 sm:mt-20 ${inView ? 'opacity-0 animate-fade-up animation-delay-500' : 'opacity-0'}`}>
          <a href="#download" className="btn-primary text-base px-8 py-4">
            Get Started Free
          </a>
          <p className="text-[var(--fg-dim)] text-xs font-500 mt-4 uppercase tracking-wider">iOS & Android</p>
        </div>
      </div>
    </section>
  )
}
