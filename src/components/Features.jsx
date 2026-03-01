import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Job Management',
    description: 'Create, assign, and track jobs from start to finish. See today\'s schedule at a glance, update status on-site, and attach photos.',
    popular: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'CP12 Certificates',
    description: 'Generate fully compliant CP12 certificates. Capture data, run checks, get signatures, and email instantly.',
    popular: true,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Invoices & Quotes',
    description: 'Create professional invoices and quotes in seconds. Send as PDFs directly to customers and track payments.',
    popular: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Team Management',
    description: 'Invite workers and assign jobs. Manage their access and see their schedules securely.',
    popular: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Scheduling',
    description: 'Visual calendar showing all upcoming jobs. Spot conflicts instantly and never double-book.',
    popular: false,
  },
  {
    icon: (
      <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Digital Signatures',
    description: 'Customers sign directly on your screen. Signatures are locked into certificates immediately.',
    popular: false,
  },
]

const delayClasses = ['', 'animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400', 'animation-delay-500']

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="py-24 sm:py-32 lg:py-40 bg-[#000000] relative border-t border-[#1d1d1f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="opacity-0 animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 ">
            Everything you need. <br className="hidden sm:block"/>
            <span className="text-[#86868b]">Nothing you don't.</span>
          </h2>
          <p className="opacity-0 animate-fade-up animation-delay-100 text-[#a1a1a6] max-w-2xl mx-auto text-lg sm:text-xl font-medium">
            Stop juggling paper forms and spreadsheets. GasCertPal puts jobs, certificates, and invoices elegantly into one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-[#000000] border border-white/10 rounded-4xl p-8 sm:p-10 transition-colors duration-300 hover:bg-[#111111] group ${
                inView ? `opacity-0 animate-fade-up ${delayClasses[idx]}` : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-[#1d1d1f] rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {f.icon}
                </div>
                {f.popular && (
                  <span className="text-[11px] font-bold text-black bg-white px-3 py-1 rounded-full">
                    Most Used
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 ">{f.title}</h3>
              <p className="text-[#86868b] text-base leading-relaxed font-medium">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
