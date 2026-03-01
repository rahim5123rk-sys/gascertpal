import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const capabilities = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Gas Safety Certificates',
    description: 'Generate fully compliant CP12 certificates on-site. Enter appliance data, capture readings, get a digital signature, and email the certificate to the landlord and tenant instantly. Gas Safe compliant and ready to go.',
    accent: 'from-red-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Invoices & Quotes',
    description: 'Create professional invoices and quotes in seconds. Add line items, apply VAT, and send a polished PDF directly to your customer by email. Track what has been paid and what is still outstanding.',
    accent: 'from-amber-500 to-yellow-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Job Management',
    description: 'Create and track every job from start to finish. Log customer details, attach site photos, update job status on the go, and keep a full history of work completed. Never lose track of a job again.',
    accent: 'from-orange-500 to-amber-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Pass Jobs to Your Team',
    description: 'Invite workers to your company with a unique code. Assign jobs to specific engineers, manage their schedules, and let them complete work on their own device. Workers only see the jobs assigned to them.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Calendar & Scheduling',
    description: 'See your full schedule at a glance. View upcoming jobs for yourself or your whole team on a visual calendar. Spot clashes instantly and never double-book a customer again.',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Digital Signatures',
    description: 'Get customers to sign directly on your phone screen. Signatures are captured digitally and locked into your certificates and documents. No printing, no scanning, no paper.',
    accent: 'from-violet-500 to-purple-500',
  },
]

const delayClasses = ['', 'animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400', 'animation-delay-500']

export default function About() {
  const [featRef, featInView] = useInView()
  const [whyRef, whyInView] = useInView()

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-orange-500/[0.06] rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-amber-500/[0.05] rounded-full blur-[100px] animate-blob animation-delay-2000" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-2 glass text-orange-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            About GasCertPal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Everything a Gas Engineer
            <br />
            <span className="gradient-text">Needs in One App</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            GasCertPal was built by tradespeople, for tradespeople. We know the hassle of paper forms, chasing invoices, and juggling spreadsheets. So we built an app that puts your entire business in your pocket.
          </p>
          <a
            href="/#download"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white text-lg font-bold py-4 px-10 rounded-2xl shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.03] transition-all duration-300"
          >
            <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Free
          </a>
        </div>
      </div>

      {/* App Screenshots */}
      <section className="py-20 sm:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/[0.04] rounded-full blur-[120px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 glass text-orange-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              See It In Action
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-5 tracking-tight">
              Designed for
              <span className="gradient-text"> Real Engineers</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Clean, simple, and built for the job site. Here is what GasCertPal looks like on your phone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {/* Phone 1 - Dashboard */}
            <div className="relative w-[240px] sm:w-[260px]">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/15 rounded-full blur-[80px]" />
              <div className="bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl shadow-orange-500/10 ring-1 ring-white/10 border-2 border-slate-700">
                <div className="rounded-[2rem] overflow-hidden">
                  <img src="/IMG_2634.PNG" alt="GasCertPal dashboard" className="w-full h-auto block" />
                </div>
              </div>
              <p className="text-center text-slate-400 text-sm font-medium mt-4">Dashboard &amp; Quick Actions</p>
            </div>

            {/* Phone 2 - CP12 Certificate */}
            <div className="relative w-[240px] sm:w-[260px]">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[80px]" />
              <div className="bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl shadow-amber-500/10 ring-1 ring-white/10 border-2 border-slate-700">
                <div className="rounded-[2rem] overflow-hidden">
                  <img src="/IMG_2633.PNG" alt="GasCertPal CP12 certificate form" className="w-full h-auto block" />
                </div>
              </div>
              <p className="text-center text-slate-400 text-sm font-medium mt-4">CP12 Gas Safety Certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={featRef}>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-2 mb-5 tracking-tight">
              What You Can Do
              <span className="gradient-text"> With GasCertPal</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              From generating certificates to managing your whole team, here is everything the app handles for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, idx) => (
              <div
                key={c.title}
                className={`bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${
                  featInView ? `opacity-0 animate-fade-up ${delayClasses[idx]}` : 'opacity-0'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${c.accent} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {c.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GasCertPal */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={whyRef}>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass text-orange-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 mb-5 tracking-tight">
              Built for the
              <span className="gradient-text"> Real World</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Works Offline', desc: 'No signal on site? No problem. GasCertPal works without an internet connection and syncs when you are back online.', icon: '📡' },
              { title: 'Free to Use', desc: 'Download and use every feature for free. No subscriptions, no hidden charges, no premium tiers.', icon: '🆓' },
              { title: 'Gas Safe Compliant', desc: 'CP12 certificates meet all legal requirements under the Gas Safety Regulations 1998.', icon: '✅' },
              { title: 'GDPR Compliant', desc: 'Your data is encrypted, securely stored, and you can export or delete it at any time.', icon: '🔒' },
              { title: 'Dead Simple', desc: 'No training needed. If you can use a phone, you can use GasCertPal. Set up in under 3 minutes.', icon: '⚡' },
              { title: 'UK Focused', desc: 'Built specifically for UK gas engineers and tradespeople. VAT, HMRC, Gas Safe — we get it.', icon: '🇬🇧' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`glass-card rounded-3xl p-7 hover:bg-white/[0.06] transition-all duration-500 ${
                  whyInView ? `opacity-0 animate-fade-up ${delayClasses[idx]}` : 'opacity-0'
                }`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 animate-gradient relative overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/15 rounded-full blur-[80px] animate-blob animation-delay-2000" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
            Ready to Simplify Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of gas engineers already using GasCertPal to save time, look professional, and grow their business.
          </p>
          <a
            href="/#download"
            className="inline-flex items-center gap-4 bg-white hover:bg-orange-50 text-orange-600 text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-7 h-7 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Now — Free
          </a>
        </div>
      </section>
    </div>
  )
}
