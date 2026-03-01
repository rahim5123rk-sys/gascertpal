function PhoneMockup() {
  return (
    <div className="relative mx-auto w-55 sm:w-65 lg:w-75">
      {/* Subtle glow instead of multi-color blob */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-[100px]" />

      {/* Phone shell */}
      <div className="relative bg-black rounded-[2.8rem] p-2.5 shadow-[0_0_40px_rgba(255,255,255,0.05)] ring-1 ring-white/10 border-[3px] border-[#1d1d1f]">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

        {/* Screen - real screenshot */}
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

      {/* Floating: Rating - ultra minimal */}
      <div className="hidden lg:block absolute -right-12 bottom-24 bg-[#1d1d1f] backdrop-blur-2xl rounded-2xl shadow-xl p-3 border border-white/5 opacity-0 animate-slide-right animation-delay-500">
        <div className="text-[12px] font-bold text-white flex items-center gap-1.5 mb-0.5">
          <svg aria-hidden="true" className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          4.9 / 5
        </div>
        <div className="text-[10px] text-[#86868b] font-medium">2,400+ ratings</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-svh bg-[#000000] flex items-center overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-20 lg:pb-24 w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left: content */}
          <div className="text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            
            {/* Heading */}
            <h1 className="opacity-0 animate-fade-up text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-white leading-snug mb-6 ">
              Manage your <br className="hidden lg:block"/> business. <br/>
              <span className="text-[#86868b]">From your phone.</span>
            </h1>

            {/* Subtitle */}
            <p className="opacity-0 animate-fade-up animation-delay-150 text-[#a1a1a6] text-lg sm:text-xl lg:text-2xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Create CP12 certificates, send invoices, and track jobs effortlessly. The premium tool for modern gas engineers.
            </p>

            {/* Download CTA */}
            <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#download"
                className="bg-white hover:bg-zinc-200 text-black text-xl font-bold py-6 px-12 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                Download Free
              </a>
              <a href="#demo" className="text-white hover:text-zinc-300 text-xl font-bold py-6 px-12 rounded-full transition-all duration-300 flex items-center justify-center border-2 border-white/20 hover:border-white/40 w-full sm:w-auto">
                Discover Features
              </a>
            </div>
            
            <p className="opacity-0 animate-fade-up animation-delay-400 mt-6 text-sm text-[#86868b] font-medium">
              iOS &amp; Android &middot; Gas Safe Compliant
            </p>
          </div>

          {/* Right: phone with real screenshot */}
          <div className="w-full lg:w-1/2 flex justify-center opacity-0 animate-fade-in animation-delay-500">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
