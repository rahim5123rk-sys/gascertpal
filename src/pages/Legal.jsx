import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Legal() {
  return (
    <div className="min-h-screen pt-8 sm:pt-12">
      <SEO
        title="Legal Information — GasPilot Privacy & Terms"
        description="Legal hub for GasPilot. Access our privacy policy, terms of service, and GDPR compliance information for Gas Safe registered engineers."
        path="/legal"
      />

      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4">
            Legal Information
          </h1>
          <p className="text-[var(--fg-muted)] text-base max-w-lg mx-auto leading-relaxed">
            Everything you need to know about how we handle your data and the terms governing your use of GasPilot.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-20">
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden mb-10">
          <Link to="/privacy" className="bg-[var(--bg-base)] p-8 group">
            <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-3">GDPR Compliant</p>
            <h2 className="text-lg font-semibold text-[var(--fg)] mb-2">Privacy Policy</h2>
            <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4">
              How we collect, use, protect, and store your personal data. Your rights under GDPR.
            </p>
            <span className="text-[var(--fg-muted)] text-sm group-hover:text-[var(--fg)] transition-colors">
              Read Privacy Policy &rarr;
            </span>
          </Link>

          <Link to="/terms" className="bg-[var(--bg-base)] p-8 group">
            <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-3">Last updated: 12 March 2026</p>
            <h2 className="text-lg font-semibold text-[var(--fg)] mb-2">Terms of Service</h2>
            <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4">
              Rules governing your use of GasPilot, including CP12 responsibilities and liability.
            </p>
            <span className="text-[var(--fg-muted)] text-sm group-hover:text-[var(--fg)] transition-colors">
              Read Terms &rarr;
            </span>
          </Link>
        </div>

        <div className="text-center py-8">
          <h3 className="text-[var(--fg)] font-semibold text-base mb-2">Questions?</h3>
          <p className="text-[var(--fg-muted)] text-sm mb-4">
            Contact us about your data, GDPR rights, or legal queries.
          </p>
          <a
            href="mailto:support@gaspilot.app"
            className="btn-primary btn-sm"
          >
            support@gaspilot.app
          </a>
        </div>
      </div>
    </div>
  )
}
