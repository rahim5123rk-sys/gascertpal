const Stars = () => (
  <span className="flex items-center gap-0.5 text-[#fbbf24]" aria-hidden="true">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.077 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
      </svg>
    ))}
  </span>
)

export default function Hero() {
  return (
    <section className="min-h-svh flex items-center relative overflow-hidden">
      {/* Ambient brand glow */}
      <div className="glow-blob animate-glow-drift w-[480px] h-[480px] -top-40 -right-24 bg-[#2563eb]/20" aria-hidden="true" />
      <div className="glow-blob w-[360px] h-[360px] bottom-0 -left-32 bg-[#2dd4bf]/10" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32 w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">

          {/* Left */}
          <div className="text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center lg:items-start">

            <p className="opacity-0 animate-fade-up badge-pill mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-dot" aria-hidden="true" />
              Now Available on the App Store
            </p>

            <h1 className="opacity-0 animate-fade-up animation-delay-75 text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-bold text-[var(--fg)] leading-[1.08] mb-8">
              Less time on paperwork.<br />
              <span className="text-gradient">More time on the tools.</span>
            </h1>

            <p className="opacity-0 animate-fade-up animation-delay-150 text-[var(--fg-muted)] text-base sm:text-lg mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
              CP12s, invoices, quotes and bookings sorted from your phone in minutes - even with no signal. No more late nights catching up on paperwork at the kitchen table.
            </p>

            <div className="opacity-0 animate-fade-up animation-delay-200 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://apps.apple.com/us/app/gaspilot/id6760321543"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg btn-block-mobile"
              >
                Download Free on the App Store
              </a>
              <a href="/features" className="btn-ghost btn-lg btn-block-mobile">
                See Features
              </a>
            </div>

            <div className="opacity-0 animate-fade-up animation-delay-300 mt-10 flex items-center justify-center lg:justify-start gap-3">
              <Stars />
              <span className="text-xs text-[var(--fg-muted)] font-medium">
                Rated 4.9/5 by gas engineers across the UK
              </span>
            </div>

            <div className="opacity-0 animate-fade-up animation-delay-400 mt-6 flex items-center gap-6 text-xs text-[var(--fg-dim)] font-medium tracking-wide">
              <span>Gas Safe Compliant</span>
              <span className="w-px h-3 bg-[var(--border-hover)]" />
              <span>Works Offline</span>
              <span className="w-px h-3 bg-[var(--border-hover)]" />
              <span>30 Days Free</span>
            </div>
          </div>

          {/* Right: phone */}
          <div className="w-full lg:w-1/2 flex justify-center opacity-0 animate-fade-up animation-delay-300">
            <div className="relative w-56 sm:w-64 lg:w-72">
              <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_65%)]" aria-hidden="true" />
              <div className="relative bg-[var(--bg-elevated)] rounded-[2.5rem] p-2.5 ring-1 ring-[var(--border-accent)]">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                <div className="rounded-[2rem] overflow-hidden bg-white">
                  <img
                    src="/screen-dashboard.png"
                    alt="GasPilot app dashboard showing jobs, schedule and gas safety record shortcuts"
                    className="w-full h-auto block"
                    fetchPriority="high"
                    loading="eager"
                    width="550"
                    height="1110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
