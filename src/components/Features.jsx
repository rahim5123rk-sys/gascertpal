import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Job Management',
    description: 'Create, assign, and track jobs from start to finish. See today\'s schedule at a glance, update status on-site, and attach photos of completed work.',
    popular: false,
    accent: 'from-orange-500 to-amber-500',
    shadow: 'shadow-orange-500/30',
    hoverShadow: 'hover:shadow-orange-100/60',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'CP12 Gas Safety Certificates',
    description: 'Generate fully compliant CP12 certificates in minutes. Capture appliance data, run final checks, get a digital signature, and email to landlord and tenant instantly.',
    popular: true,
    accent: 'from-red-500 to-orange-500',
    shadow: 'shadow-red-500/30',
    hoverShadow: 'hover:shadow-red-100/60',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Invoices & Quotes',
    description: 'Create professional invoices and quotes in seconds. Send as a PDF directly to your customer by email. Track payment status and outstanding balances.',
    popular: false,
    accent: 'from-amber-500 to-yellow-500',
    shadow: 'shadow-amber-500/30',
    hoverShadow: 'hover:shadow-amber-100/60',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Team Management',
    description: 'Invite workers via a unique code. Assign jobs to specific team members, manage their access, and see their schedules. Workers see only their assigned work.',
    popular: false,
    accent: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-500/30',
    hoverShadow: 'hover:shadow-emerald-100/60',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Calendar & Scheduling',
    description: 'Visual calendar showing all upcoming jobs. Schedule work for your whole team, spot conflicts instantly, and never double-book again.',
    popular: false,
    accent: 'from-blue-500 to-indigo-500',
    shadow: 'shadow-blue-500/30',
    hoverShadow: 'hover:shadow-blue-100/60',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Digital Signatures',
    description: 'Customers sign directly on your screen — no printing, no scanning. Signatures are locked into certificates and documents immediately.',
    popular: false,
    accent: 'from-violet-500 to-purple-500',
    shadow: 'shadow-violet-500/30',
    hoverShadow: 'hover:shadow-violet-100/60',
  },
]

const delayClasses = ['', 'animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400', 'animation-delay-500']

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Everything You Need
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-2 mb-5 tracking-tight">
            One App to Run
            <span className="gradient-text"> Your Whole Business</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Stop juggling paper forms, spreadsheets, and WhatsApp. GasCertPal puts jobs, certificates, invoices, and your team in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`relative bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl ${f.hoverShadow} hover:-translate-y-2 transition-all duration-500 group cursor-default ${
                inView ? `opacity-0 animate-fade-up ${delayClasses[idx]}` : 'opacity-0'
              }`}
            >
              {f.popular && (
                <div className="absolute top-5 right-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md shadow-orange-500/30">
                  Most Used
                </div>
              )}
              <div className={`w-14 h-14 bg-gradient-to-br ${f.accent} rounded-2xl flex items-center justify-center text-white mb-6 ${f.shadow} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
