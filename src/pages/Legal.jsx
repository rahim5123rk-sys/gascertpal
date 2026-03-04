import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#000000] pt-8 sm:pt-12">
      <SEO
        title="Legal Information — GasCertPal Privacy & Terms"
        description="Legal hub for GasCertPal. Access our privacy policy, terms of service, and GDPR compliance information for Gas Safe registered engineers."
        path="/legal"
      />
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#111111] text-[#a1a1a6] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Legal &amp; Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 ">
            Legal Information
          </h1>
          <p className="text-[#a1a1a6] text-lg max-w-2xl mx-auto leading-relaxed">
            GasCertPal is committed to transparency. Everything you need to know about how we handle your data and the terms governing your use of the app.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid sm:grid-cols-2 gap-6 mb-12">

          {/* Privacy Policy */}
          <Link
            to="/privacy"
            className="group  hover:border-[#1d1d1f] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#111111] text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-green-500/20">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              GDPR Compliant
            </div>
            <h2 className="text-xl font-extrabold text-white mb-2">Privacy Policy</h2>
            <p className="text-[#a1a1a6] text-sm leading-relaxed mb-6">
              How we collect, use, protect, and store your personal data. Your rights under GDPR and how to exercise them.
            </p>
            <div className="flex items-center gap-2 text-[#a1a1a6] font-bold text-sm group-hover:gap-3 transition-all duration-200">
              Read Privacy Policy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Terms of Service */}
          <Link
            to="/terms"
            className="group  hover:border-[#1d1d1f] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#111111] text-[#a1a1a6] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider border border-[#1d1d1f]">
              Last updated: 1 March 2026
            </div>
            <h2 className="text-xl font-extrabold text-white mb-2">Terms of Service</h2>
            <p className="text-[#a1a1a6] text-sm leading-relaxed mb-6">
              The rules and agreements governing your use of GasCertPal, including acceptable use, CP12 responsibilities, and liability.
            </p>
            <div className="flex items-center gap-2 text-[#a1a1a6] font-bold text-sm group-hover:gap-3 transition-all duration-200">
              Read Terms of Service
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Contact block */}
        <div className=" rounded-3xl p-8 text-center hover:border-[#1d1d1f] transition-colors duration-300">
          <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/10">
            <svg className="w-7 h-7 text-[#a1a1a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-white font-extrabold text-lg mb-2">Questions about our policies?</h3>
          <p className="text-[#a1a1a6] text-sm mb-6 max-w-md mx-auto leading-relaxed">
            If you have questions about your data, want to exercise your GDPR rights, or have any legal queries, contact us directly.
          </p>
          <a
            href="mailto:support@gascertpal.com"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105  hover:"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@gascertpal.com
          </a>
        </div>
      </div>
    </div>
  )
}
