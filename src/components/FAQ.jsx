import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    q: 'What is a CP12 gas safety certificate?',
    a: 'A CP12 (also known as a Landlord Gas Safety Record or LGSR) is a legal document that must be issued by a Gas Safe registered engineer after inspecting gas appliances in a rented property. Landlords are required by law to have gas appliances checked every 12 months.',
  },
  {
    q: 'Is GasPilot free to use?',
    a: 'GasPilot has a free Starter tier that includes CP12 gas safety certificates and basic job tracking. The Pro plan (£20/month or £179.99/year) unlocks all 7 gas form types, unlimited customers, invoices and quotes, smart scheduling, team management and renewal reminders. Pro includes a 30-day free trial for new subscribers.',
  },
  {
    q: 'Is GasPilot Gas Safe compliant?',
    a: 'Yes. CP12 certificates generated through GasPilot meet all legal requirements under the Gas Safety (Installation and Use) Regulations 1998. The app is designed specifically for Gas Safe registered engineers in the UK.',
  },
  {
    q: 'Can I use GasPilot offline?',
    a: 'Yes. GasPilot works without an internet connection. You can create certificates, invoices, and manage jobs on site even with no signal. Your data syncs automatically when you are back online.',
  },
  {
    q: 'Can my team use GasPilot?',
    a: 'Yes. Pro includes team management - invite engineers with a unique code, assign jobs, and see everyone\'s schedule across devices. Perfect for growing gas engineering businesses.',
  },
  {
    q: 'Can I put my company logo on certificates and invoices?',
    a: 'Yes. Upload your company logo once and it appears on every certificate, invoice and quote you send - professional branding on every document.',
  },
  {
    q: 'Does GasPilot remind me when gas certificates are due for renewal?',
    a: 'Yes. GasPilot automatically tracks expiry dates on every Gas Safety Record you issue and reminds you before they are due, so you never miss a renewal and your repeat work keeps coming back.',
  },
  {
    q: 'Where can I download GasPilot?',
    a: 'GasPilot is available on the Apple App Store. Search for "GasPilot" or tap any download button on this page.',
  },
]

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border border-[var(--border)] rounded-2xl bg-[var(--bg-surface)] overflow-hidden transition-colors hover:border-[var(--border-hover)]">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5 sm:py-6 cursor-pointer"
      >
        <span className="font-display text-base sm:text-lg font-semibold text-[var(--fg)]">{item.q}</span>
        <svg
          aria-hidden="true"
          className={`w-4 h-4 shrink-0 text-[var(--accent)] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-6 sm:px-8 pb-6 text-[var(--fg-muted)] text-sm sm:text-base leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section id="faq" className="py-28 sm:py-36 lg:py-44 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8" ref={ref}>
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-5">FAQ</p>
          <h2 className={`text-3xl sm:text-[2.75rem] font-bold text-[var(--fg)] mb-6 leading-tight ${
            inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
          }`}>
            Questions, answered
          </h2>
          <p className={`text-[var(--fg-muted)] text-base sm:text-lg ${
            inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'
          }`}>
            Everything gas engineers ask before switching from paper.
          </p>
        </div>

        <div className={`flex flex-col gap-3 ${inView ? 'opacity-0 animate-fade-up animation-delay-150' : 'opacity-0'}`}>
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>

        <p className={`text-center text-sm text-[var(--fg-dim)] mt-10 ${inView ? 'opacity-0 animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          Still got a question?{' '}
          <a href="mailto:support@gaspilotapp.com" className="text-[var(--accent)] hover:underline">
            support@gaspilotapp.com
          </a>
        </p>
      </div>
    </section>
  )
}
