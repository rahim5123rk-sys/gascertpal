function PhoneMockup() {
  return (
    <div className="relative mx-auto w-55 sm:w-65 lg:w-75">
      {/* Glow behind phone */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 sm:w-75 lg:w-87.5 h-62.5 sm:h-75 lg:h-87.5 bg-linear-to-br from-orange-500/25 to-amber-500/25 rounded-full blur-[100px]" />

      {/* Phone shell */}
      <div className="relative bg-slate-900 rounded-[2.8rem] p-2.5 shadow-[0_0_60px_rgba(249,115,22,0.12)] ring-1 ring-white/10 border-[3px] border-slate-800">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-10" />

        {/* Screen - real screenshot */}
        <div className="rounded-[2.2rem] overflow-hidden bg-white">
          <img
            src="/IMG_2634.PNG"
            alt="GasCertPal app dashboard showing jobs, quotes, invoices and schedule"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Floating: Certificate Sent - hidden on mobile */}
      <div className="hidden lg:flex absolute -right-14 top-20 bg-white rounded-2xl shadow-xl shadow-black/8 p-3 border border-slate-100 items-center gap-2.5 opacity-0 animate-slide-right animation-delay-700">
        <div className="w-9 h-9 bg-linear-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm shadow-green-500/30 shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] font-extrabold text-slate-800">CP12 Sent!</div>
          <div className="text-[9px] text-slate-400 font-medium">Delivered to landlord</div>
        </div>
      </div>

      {/* Floating: Invoice Paid - hidden on mobile/tablet */}
      <div className="hidden lg:flex absolute -left-14 top-52 bg-white rounded-2xl shadow-xl shadow-black/8 p-3 border border-slate-100 items-center gap-2.5 opacity-0 animate-slide-left animation-delay-1000">
        <div className="w-9 h-9 bg-linear-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-sm shadow-amber-500/30 shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] font-extrabold text-slate-800">Invoice Paid</div>
          <div className="text-[9px] text-slate-400 font-medium">£320.00 received</div>
        </div>
      </div>

      {/* Floating: Rating - hidden on mobile/tablet */}
      <div className="hidden lg:block absolute -right-12 bottom-24 bg-white rounded-2xl shadow-xl shadow-black/8 p-2.5 border border-slate-100 opacity-0 animate-slide-right animation-delay-500">
        <div className="flex gap-0.5 mb-0.5">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-[11px] font-extrabold text-slate-800">4.9 / 5</div>
        <div className="text-[8px] text-slate-400 font-medium">2,400+ ratings</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-svh bg-slate-950 flex items-center overflow-hidden relative">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950 to-orange-950/20" />

      {/* Animated blob orbs */}
      <div className="absolute top-20 left-10 w-100 h-100 bg-orange-500/7 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-60 right-20 w-75 h-75 bg-amber-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/4 w-62.5 h-62.5 bg-red-500/4 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 lg:pb-24 w-full relative">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* Left: content */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 glass text-white/80 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Gas Safe Compliant &middot; iOS &amp; Android
            </div>

            {/* Heading */}
            <h1 className="opacity-0 animate-fade-up animation-delay-150 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] mb-6 sm:mb-8 tracking-tight">
              Your Trade
              <br />
              Business,
              <br />
              <span className="gradient-text">One App.</span>
            </h1>

            {/* Subtitle */}
            <p className="opacity-0 animate-fade-up animation-delay-300 text-slate-400 text-sm sm:text-lg lg:text-xl mb-8 sm:mb-12 leading-relaxed max-w-md mx-auto lg:mx-0">
              Manage jobs, create CP12 certificates, send invoices and quotes, assign work to your team — all from your phone. Built for gas engineers.
            </p>

            {/* Download CTA */}
            <div className="opacity-0 animate-fade-up animation-delay-400 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 sm:mb-12">
              <a
                href="#download"
                className="group relative bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white text-sm sm:text-lg font-bold py-3.5 sm:py-4 px-6 sm:px-10 rounded-2xl shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.03] transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Now — Free</span>
              </a>

              <div className="flex flex-wrap justify-center gap-3">
                <a href="#download" className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/12 text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl transition-all duration-300 border border-white/8 hover:border-white/20">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[8px] text-white/40 leading-tight">Download on the</div>
                    <div className="text-[11px] font-bold leading-tight">App Store</div>
                  </div>
                </a>
                <a href="#download" className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/12 text-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl transition-all duration-300 border border-white/8 hover:border-white/20">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.65.19.97.07l12.48-7.2-2.82-2.82-10.63 9.95zM.64 1.52C.24 1.88 0 2.47 0 3.23v17.54c0 .76.24 1.35.64 1.71l.09.08 9.83-9.83v-.23L.73 1.44l-.09.08zM20.49 10.46l-2.52-1.46-3.16 3.16 3.16 3.16 2.54-1.47c.72-.42.72-1.1 0-1.52l-.02.13zM3.18.24L15.66 7.44l-2.82 2.82L2.21.31c.32-.12.67-.1.97.07v-.14z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[8px] text-white/40 leading-tight">Get it on</div>
                    <div className="text-[11px] font-bold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10">
              {[
                { value: '10K+', label: 'Active Engineers' },
                { value: '500K+', label: 'Certs Generated' },
                { value: '4.9', label: 'App Rating', star: true },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                    {s.value}
                    {s.star && <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone with real screenshot */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in animation-delay-400">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
