import { useInView } from '../hooks/useInView'

const steps = [
  {
    title: 'Download Free',
    description: 'Get GasCertPal free on the App Store or Google Play. Set up your company profile and Gas Safe credentials in under 3 minutes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    title: 'Add Jobs & Customers',
    description: 'Log your first job in seconds. Import customers from your contacts or add them manually. Assign jobs to team members.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Generate Documents',
    description: 'Finish a job and create a CP12 certificate, invoice, or quote on the spot. Get a digital signature and send it by email instantly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Grow Your Business',
    description: 'Track revenue, monitor your team, and never miss a renewal. GasCertPal gives you the overview to scale your trade business with confidence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

const stepDelays = ['', 'animation-delay-200', 'animation-delay-400', 'animation-delay-600']

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 glass text-orange-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-5 tracking-tight">
            Up and Running
            <span className="gradient-text"> in Minutes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            No training courses. No complicated setup. Download GasCertPal and start managing your business today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {/* Desktop connector */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-orange-500/20 via-amber-500/40 to-orange-500/20" />

          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`flex flex-col items-center text-center ${
                inView ? `opacity-0 animate-fade-up ${stepDelays[idx]}` : 'opacity-0'
              }`}
            >
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 hover:scale-110 transition-transform duration-300">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-xs font-black">{idx + 1}</span>
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-flex">
            <div className="absolute inset-0 rounded-2xl bg-orange-500/30 animate-pulse-ring" />
            <div className="absolute inset-0 rounded-2xl bg-orange-500/20 animate-pulse-ring animation-delay-400" />
            <a
              href="#download"
              className="relative z-10 inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Now — Free
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-5">Available on iOS &amp; Android &middot; No credit card required</p>
        </div>
      </div>
    </section>
  )
}
