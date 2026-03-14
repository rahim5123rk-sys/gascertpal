import { useInView } from '../hooks/useInView'

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'Free forever',
    description: 'For solo engineers getting started.',
    features: [
      'Gas safety certificates',
      'Up to 10 customers',
      'Basic job tracking',
      'Digital signatures',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '20',
    period: '/month',
    description: 'Everything you need to run your business.',
    features: [
      'Unlimited customers',
      'Invoices & quotes',
      'Smart scheduling & calendar',
      'Renewal reminders',
      'Team management',
      'Works offline',
      'Priority support',
    ],
    cta: 'Start 30-Day Free Trial',
    highlight: true,
  },
]

export default function Download() {
  const [ref, inView] = useInView()

  return (
    <section id="download" className="py-28 sm:py-36 lg:py-44 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8" ref={ref}>

        <div className="text-center mb-16 sm:mb-20">
          <p className={`text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-5 ${
            inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
          }`}>Pricing</p>
          <h2 className={`text-3xl sm:text-[2.75rem] font-bold text-[var(--fg)] mb-6 leading-tight ${
            inView ? 'opacity-0 animate-fade-up animation-delay-75' : 'opacity-0'
          }`}>
            Ditch the paperwork. Go digital.
          </h2>
          <p className={`text-[var(--fg-muted)] max-w-lg mx-auto text-base sm:text-lg leading-relaxed ${
            inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'
          }`}>
            Start with a 30-day free trial on Pro. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 gap-6 mb-16 ${
          inView ? 'opacity-0 animate-fade-up animation-delay-150' : 'opacity-0'
        }`}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 sm:p-10 border ${
                plan.highlight
                  ? 'border-[var(--border-hover)] bg-[var(--bg-elevated)]'
                  : 'border-[var(--border)] bg-[var(--bg-surface)]'
              }`}
            >
              {plan.highlight && (
                <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[var(--fg)] bg-[var(--bg-base)] px-3 py-1 rounded-full mb-4 border border-[var(--border-hover)]">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-[var(--fg)] mb-2">{plan.name}</h3>
              <p className="text-[var(--fg-muted)] text-sm mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                {plan.price === '0' ? (
                  <span className="font-display text-4xl font-bold text-[var(--fg)]">Free</span>
                ) : (
                  <>
                    <span className="font-display text-4xl font-bold text-[var(--fg)]">£{plan.price}</span>
                    <span className="text-[var(--fg-muted)] text-sm font-medium">{plan.period}</span>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
                    <svg className="w-4 h-4 mt-0.5 text-[var(--fg-dim)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={plan.highlight ? 'btn-primary w-full text-center' : 'btn-ghost w-full text-center'}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* App Store badge */}
        <div className={`text-center ${inView ? 'opacity-0 animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-6">Coming soon on the App Store</p>
          <a href="#" className="inline-flex items-center gap-3 card px-6 py-3.5 rounded-xl">
            <svg aria-hidden="true" className="w-5 h-5 shrink-0 text-[var(--fg)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-[var(--fg-dim)] leading-snug font-medium">Coming soon on the</div>
              <div className="text-sm font-display font-semibold text-[var(--fg)] leading-snug mt-0.5">App Store</div>
            </div>
          </a>

          <div className="flex items-center justify-center gap-6 text-xs text-[var(--fg-dim)] font-medium tracking-wide mt-8">
            <span>30-Day Free Trial</span>
            <span className="w-px h-3 bg-[var(--border-hover)]" />
            <span>Gas Safe Compliant</span>
            <span className="w-px h-3 bg-[var(--border-hover)]" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
