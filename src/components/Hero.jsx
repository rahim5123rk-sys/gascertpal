export default function Hero() {
  return (
    <section className="min-h-svh flex items-center relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">

          {/* Left */}
          <div className="text-center lg:text-left w-full lg:w-[55%] flex flex-col items-center lg:items-start">

            <p className="opacity-0 animate-fade-up text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-8">
              30-day free trial
            </p>

            <h1 className="opacity-0 animate-fade-up animation-delay-75 text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-700 text-[var(--fg)] leading-[1.08] mb-8">
              Bringing gas engineers<br />
              <span className="text-[var(--fg-muted)]">into 2026.</span>
            </h1>

            <p className="opacity-0 animate-fade-up animation-delay-150 text-[var(--fg-muted)] text-base sm:text-lg mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
              No more paperwork. No more spreadsheets. Gas certificates, invoices, job scheduling, and client management — all from your phone. Dead simple, built for engineers.
            </p>

            <div className="opacity-0 animate-fade-up animation-delay-200 flex flex-col sm:flex-row items-center gap-4">
              <a href="#download" className="btn-primary btn-lg btn-block-mobile">
                Start Free Trial
              </a>
              <a href="#features" className="btn-ghost btn-lg btn-block-mobile">
                See Features
              </a>
            </div>

            <div className="opacity-0 animate-fade-up animation-delay-300 mt-12 flex items-center gap-6 text-xs text-[var(--fg-dim)] font-500 tracking-wide">
              <span>Gas Safe Compliant</span>
              <span className="w-px h-3 bg-[var(--border-hover)]" />
              <span>Works Offline</span>
              <span className="w-px h-3 bg-[var(--border-hover)]" />
              <span>30 Days Free</span>
            </div>
          </div>

          {/* Right: phone */}
          <div className="w-full lg:w-[40%] flex justify-center opacity-0 animate-fade-up animation-delay-300">
            <div className="relative w-52 sm:w-60">
              <div className="bg-[var(--bg-elevated)] rounded-[2.5rem] p-2 ring-1 ring-[var(--border)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[var(--bg-elevated)] rounded-full z-10" />
                <div className="rounded-[2rem] overflow-hidden bg-white">
                  <img
                    src="/screen-dashboard.png"
                    alt="GasPilot app dashboard"
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
