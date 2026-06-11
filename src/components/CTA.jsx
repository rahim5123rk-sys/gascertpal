import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 sm:py-28 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8" ref={ref}>
        <div className={`relative overflow-hidden rounded-3xl border border-[var(--border-accent)] bg-[var(--bg-surface)] px-8 sm:px-16 py-16 sm:py-20 text-center ${
          inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
        }`}>
          <div className="glow-blob w-[420px] h-[420px] -top-52 left-1/2 -translate-x-1/2 bg-[#0ea5e9]/20" aria-hidden="true" />

          <div className="relative">
            <h2 className="text-3xl sm:text-[2.75rem] font-bold text-[var(--fg)] leading-tight mb-5">
              Your next CP12 could take{' '}
              <span className="text-gradient">five minutes.</span>
            </h2>
            <p className="text-[var(--fg-muted)] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join gas engineers across the UK who finish their paperwork on site, get paid faster, and take their evenings back.
            </p>
            <a
              href="https://apps.apple.com/us/app/gaspilot/id6760321543"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg"
            >
              Download Free on the App Store
            </a>
            <p className="text-xs text-[var(--fg-dim)] font-medium tracking-wide mt-6">
              Free Starter tier &middot; Pro free for 30 days &middot; Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
