function PhoneMockup() {
  return (
    <div className="relative mx-auto w-56 sm:w-64 lg:w-72">
      {/* Accent glow behind phone */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[var(--accent)]/10 rounded-full blur-[80px]" />

      {/* Phone shell */}
      <div className="relative bg-[#0a0c10] rounded-[2.8rem] p-2.5 shadow-[0_32px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0c10] rounded-full z-10" />
        <div className="rounded-[2.2rem] overflow-hidden bg-white">
          <img
            src="/IMG_2634.PNG"
            alt="GasCertPal app dashboard showing jobs, quotes, invoices and schedule"
            className="w-full h-auto block"
            fetchPriority="high"
            loading="eager"
            width="550"
            height="1110"
          />
        </div>
      </div>

      {/* Floating: Rating */}
      <div className="hidden lg:block absolute -right-20 bottom-28 glass-card rounded-xl px-4 py-3 opacity-0 animate-slide-right animation-delay-600">
        <div className="text-xs font-600 text-[var(--fg)] flex items-center gap-1.5 mb-0.5">
          <svg aria-hidden="true" className="w-3.5 h-3.5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          4.9 / 5
        </div>
        <div className="text-[10px] text-[var(--fg-muted)]">2,400+ ratings</div>
      </div>

      {/* Floating: Gas Safe */}
      <div className="hidden lg:block absolute -left-16 top-24 glass-card rounded-xl px-4 py-3 opacity-0 animate-slide-left animation-delay-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-ping-accent" style={{ animationDuration: '2.5s', boxShadow: `0 0 0 0 ${('var(--cyan-glow)')}` }} />
          <span className="text-[11px] font-600 text-[var(--cyan)] uppercase tracking-wider">Gas Safe</span>
        </div>
        <div className="text-[10px] text-[var(--fg-muted)] mt-0.5">Fully Compliant</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section aria-label="GasCertPal — CP12 gas safety certificate app for gas engineers" className="min-h-svh flex items-center overflow-hidden relative grid-bg noise">
      {/* Top-right radial glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-[var(--accent)]/6 via-transparent to-transparent pointer-events-none" />
      {/* Bottom-left subtle cyan */}
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gradient-to-tr from-[var(--cyan)]/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-36 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">

          {/* Left */}
          <div className="text-center lg:text-left w-full lg:w-[55%] flex flex-col items-center lg:items-start">

            {/* Status badge */}
            <div className="opacity-0 animate-fade-up inline-flex items-center gap-2.5 bg-[var(--accent-subtle)] border border-[var(--accent)]/15 text-[var(--accent)] font-600 text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              Free on iOS & Android
            </div>

            {/* Heading */}
            <h1 className="opacity-0 animate-fade-up animation-delay-75 text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] font-700 text-[var(--fg)] leading-[1.08] mb-8">
              Your trade business,<br />
              <span className="text-[var(--accent)]">precision-engineered.</span>
            </h1>

            {/* Accent bar */}
            <div className="opacity-0 animate-fade-up animation-delay-150 accent-bar mb-8" />

            {/* Subtitle */}
            <p className="opacity-0 animate-fade-up animation-delay-200 text-[var(--fg-muted)] text-base sm:text-lg mb-12 leading-[1.75] max-w-lg mx-auto lg:mx-0">
              CP12 certificates, PDF invoices, job scheduling, and client management. One app built for gas engineers who refuse to waste time.
            </p>

            {/* CTAs */}
            <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center gap-4">
              <a href="#download" className="btn-primary btn-lg btn-block-mobile">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Now
              </a>
              <a href="#features" className="btn-ghost btn-lg btn-block-mobile">
                See Features
              </a>
            </div>

            {/* Trust line */}
            <div className="opacity-0 animate-fade-up animation-delay-400 mt-10 flex items-center gap-5 text-xs text-[var(--fg-dim)] font-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[var(--cyan)]" />
                Gas Safe Compliant
              </span>
              <span className="w-px h-3 bg-[var(--border-hover)]" />
              <span>Works Offline</span>
              <span className="w-px h-3 bg-[var(--border-hover)]" />
              <span>No Subscription</span>
            </div>
          </div>

          {/* Right: phone */}
          <div className="w-full lg:w-[45%] flex justify-center opacity-0 animate-scale-in animation-delay-400">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
