import { useInView } from '../hooks/useInView'

const steps = [
  {
    title: 'Download Free',
    description: 'Get GasCertPal free on the App Store or Google Play. Set up your company profile and Gas Safe credentials in under 3 minutes.',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    title: 'Add Jobs & Customers',
    description: 'Log your first job in seconds. Import customers from your contacts or add them manually. Assign jobs to team members.',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Generate Documents',
    description: 'Finish a job and create a CP12 certificate, invoice, or quote on the spot. Get a digital signature and send it by email instantly.',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Grow Your Business',
    description: 'Track revenue, monitor your team, and never miss a renewal. GasCertPal gives you the overview to scale your trade business with confidence.',
    icon: (
      <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

const stepDelays = ['', 'animation-delay-200', 'animation-delay-400', 'animation-delay-600']

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="py-24 sm:py-32 lg:py-40 bg-[#000000] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative" ref={ref}>
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 ">
            Up and running. <br className="hidden sm:block"/>
            <span className="text-[#86868b]">In minutes.</span>
          </h2>
          <p className="text-[#a1a1a6] max-w-2xl mx-auto text-lg sm:text-xl font-medium">
            No training courses. No complicated setup. Download GasCertPal and start managing your business today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 relative">
          {/* Desktop connector */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-transparent via-[#1d1d1f] to-transparent" />

          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`flex flex-col items-center text-center ${
                inView ? `opacity-0 animate-fade-up ${stepDelays[idx]}` : 'opacity-0'
              }`}
            >
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mb-6 sm:mb-8 border-[3px] border-[#1d1d1f]">
                {step.icon}
                <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black text-[10px] sm:text-xs font-bold">{idx + 1}</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 ">{step.title}</h3>
              <p className="text-[#86868b] text-sm sm:text-base leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 sm:mt-24">
          <a
            href="#download"
            className="inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
          >
            Download Now
          </a>
          <p className="text-[#86868b] text-sm font-medium mt-6">Available on iOS &amp; Android</p>
        </div>
      </div>
    </section>
  )
}
