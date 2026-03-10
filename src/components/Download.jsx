import { useInView } from '../hooks/useInView'

function StoreBadge({ type }) {
  const isApple = type === 'apple'
  return (
    <a href="#" className="inline-flex items-center gap-3 card px-6 py-3.5 rounded-xl w-fit">
      {isApple ? (
        <svg aria-hidden="true" className="w-5 h-5 shrink-0 text-[var(--fg)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="w-5 h-5 shrink-0 text-[var(--fg)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.3.17.65.19.97.07l12.48-7.2-2.82-2.82-10.63 9.95zM.64 1.52C.24 1.88 0 2.47 0 3.23v17.54c0 .76.24 1.35.64 1.71l.09.08 9.83-9.83v-.23L.73 1.44l-.09.08zM20.49 10.46l-2.52-1.46-3.16 3.16 3.16 3.16 2.54-1.47c.72-.42.72-1.1 0-1.52l-.02.13zM3.18.24L15.66 7.44l-2.82 2.82L2.21.31c.32-.12.67-.1.97.07v-.14z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] text-[var(--fg-dim)] leading-snug font-500">{isApple ? 'Download on the' : 'Get it on'}</div>
        <div className="text-sm font-display font-600 text-[var(--fg)] leading-snug mt-0.5">{isApple ? 'App Store' : 'Google Play'}</div>
      </div>
    </a>
  )
}

export default function Download() {
  const [ref, inView] = useInView()

  return (
    <section id="download" className="py-24 sm:py-32 lg:py-40 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center" ref={ref}>

        <h2 className={`text-3xl sm:text-4xl font-700 text-[var(--fg)] mb-4 leading-tight ${
          inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
        }`}>
          Ready to save hours every week?
        </h2>

        <p className={`text-[var(--fg-muted)] text-base leading-relaxed mb-10 ${
          inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'
        }`}>
          Download GasPilot free. No subscription. No hidden costs.
        </p>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center mb-8 ${
          inView ? 'opacity-0 animate-fade-up animation-delay-200' : 'opacity-0'
        }`}>
          <StoreBadge type="apple" />
          <StoreBadge type="google" />
        </div>

        <div className={`flex items-center justify-center gap-5 text-xs text-[var(--fg-dim)] font-500 tracking-wide ${
          inView ? 'opacity-0 animate-fade-up animation-delay-300' : 'opacity-0'
        }`}>
          <span>Gas Safe</span>
          <span>GDPR</span>
          <span>Offline Ready</span>
        </div>
      </div>
    </section>
  )
}
