import { useInView } from '../hooks/useInView'

function StoreBadge({ type }) {
  const isApple = type === 'apple'
  return (
    <a href="#" className="inline-flex items-center gap-3 bg-white hover:bg-orange-50 text-slate-900 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
      {isApple ? (
        <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.3.17.65.19.97.07l12.48-7.2-2.82-2.82-10.63 9.95zM.64 1.52C.24 1.88 0 2.47 0 3.23v17.54c0 .76.24 1.35.64 1.71l.09.08 9.83-9.83v-.23L.73 1.44l-.09.08zM20.49 10.46l-2.52-1.46-3.16 3.16 3.16 3.16 2.54-1.47c.72-.42.72-1.1 0-1.52l-.02.13zM3.18.24L15.66 7.44l-2.82 2.82L2.21.31c.32-.12.67-.1.97.07v-.14z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-xs text-slate-500 leading-tight">{isApple ? 'Download on the' : 'Get it on'}</div>
        <div className="text-base font-bold leading-tight">{isApple ? 'App Store' : 'Google Play'}</div>
      </div>
    </a>
  )
}

export default function Download() {
  const [ref, inView] = useInView()

  return (
    <section id="download" className="py-16 sm:py-24 lg:py-32 bg-linear-to-br from-orange-500 via-orange-600 to-amber-600 animate-gradient relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-red-500/15 rounded-full blur-[80px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-amber-300/15 rounded-full blur-[80px] animate-blob animation-delay-4000" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative" ref={ref}>

        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-white/15 backdrop-blur-sm rounded-2xl sm:rounded-3xl mb-10 border border-white/20 ${inView ? 'opacity-0 animate-fade-up' : 'opacity-0'}`}>
          <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight ${inView ? 'opacity-0 animate-fade-up animation-delay-150' : 'opacity-0'}`}>
          Ready to Save Hours
          <br />
          Every Week?
        </h2>

        <p className={`text-white/80 text-sm sm:text-lg lg:text-xl mb-8 sm:mb-14 max-w-2xl mx-auto leading-relaxed ${inView ? 'opacity-0 animate-fade-up animation-delay-300' : 'opacity-0'}`}>
          Download GasCertPal free today. No subscription, no hidden costs — just the smartest way to run your trade business from your phone.
        </p>

        {/* CTA */}
        <div className={`${inView ? 'opacity-0 animate-fade-up animation-delay-400' : 'opacity-0'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 sm:gap-4 bg-white hover:bg-orange-50 text-orange-600 text-base sm:text-xl lg:text-2xl font-black px-6 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Now — Free</span>
          </a>
        </div>

        <p className={`text-white/60 text-xs sm:text-sm mt-6 sm:mt-8 mb-10 sm:mb-14 ${inView ? 'opacity-0 animate-fade-up animation-delay-500' : 'opacity-0'}`}>
          Available on iOS &amp; Android &middot; Free &middot; No account needed to browse
        </p>

        {/* Store badges */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 ${inView ? 'opacity-0 animate-fade-up animation-delay-600' : 'opacity-0'}`}>
          <StoreBadge type="apple" />
          <StoreBadge type="google" />
        </div>

        {/* Perks */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 ${inView ? 'opacity-0 animate-fade-up animation-delay-700' : 'opacity-0'}`}>
          {['Free to download', 'No subscription', 'Gas Safe compliant', 'Works offline', 'GDPR compliant'].map(perk => (
            <div key={perk} className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm border border-white/10">
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {perk}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
