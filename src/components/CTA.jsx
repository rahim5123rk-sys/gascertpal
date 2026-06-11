import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const SHARE_URL = 'https://gaspilotapp.com/?utm_source=referral&utm_medium=share&utm_campaign=tell_a_mate'
const SHARE_TEXT = `Mate, have a look at GasPilot - does your gas certs, invoices and bookings straight from your phone. Free on the App Store: ${SHARE_URL}`

export default function CTA() {
  const [ref, inView] = useInView()
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_TEXT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (e.g. non-secure context) - ignore
    }
  }

  return (
    <section className="py-20 sm:py-28 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8" ref={ref}>
        <div className={`relative overflow-hidden rounded-3xl border border-[var(--border-accent)] bg-[var(--bg-surface)] px-8 sm:px-16 py-16 sm:py-20 text-center ${
          inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
        }`}>
          <div className="glow-blob w-[420px] h-[420px] -top-52 left-1/2 -translate-x-1/2 bg-[#0ea5e9]/20" aria-hidden="true" />

          <div className="relative">
            <h2 className="text-3xl sm:text-[2.75rem] font-bold text-[var(--fg)] leading-tight mb-5">
              Your next gas cert could take{' '}
              <span className="text-gradient">five minutes.</span>
            </h2>
            <p className="text-[var(--fg-muted)] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join gas engineers across the UK who finish their paperwork on site, get paid faster, and take their evenings back.
            </p>
            <a
              href="https://apps.apple.com/us/app/gaspilot/id6760321543"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg"
            >
              Download Free on the App Store
            </a>
            <p className="text-xs text-[var(--fg-dim)] font-medium tracking-wide mt-6">
              Free Starter tier &middot; Pro free for 30 days &middot; Cancel anytime
            </p>

            {/* Tell a mate */}
            <div className="mt-12 pt-10 border-t border-[var(--border)]">
              <p className="text-sm text-[var(--fg-muted)] mb-5">
                Know another engineer still on the paper pads? Send it over.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost btn-sm inline-flex items-center gap-2"
                >
                  <svg aria-hidden="true" className="w-4 h-4 text-[#25d366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send on WhatsApp
                </a>
                <button
                  onClick={copyLink}
                  className="btn-ghost btn-sm inline-flex items-center gap-2"
                >
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
