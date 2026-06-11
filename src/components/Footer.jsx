import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] text-[var(--fg-muted)] py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logowebsite.png" alt="" className="h-5 w-auto object-contain" />
              <span className="font-display text-[15px] font-semibold text-[var(--fg)]">GasPilot</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[240px] mb-5">
              The gas safety certificate app for Gas Safe registered engineers. CP12s, invoices, quotes and job management - all from your phone.
            </p>
            <a
              href="https://apps.apple.com/us/app/gaspilot/id6760321543"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
            >
              <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
          </div>

          {/* App */}
          <div>
            <h4 className="text-[var(--fg)] font-medium mb-4 text-sm">App</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-[var(--fg)] transition-colors">About</Link></li>
              <li><Link to="/features" className="hover:text-[var(--fg)] transition-colors">Features</Link></li>
              <li><a href="/#download" className="hover:text-[var(--fg)] transition-colors">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-[var(--fg)] transition-colors">FAQ</a></li>
              <li><a href="/#download" className="hover:text-[var(--fg)] transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-[var(--fg)] font-medium mb-4 text-sm">Features</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="hover:text-[var(--fg)] transition-colors">Gas Safety Certificates (CP12)</Link></li>
              <li><Link to="/features" className="hover:text-[var(--fg)] transition-colors">Invoices & Quotes</Link></li>
              <li><Link to="/features" className="hover:text-[var(--fg)] transition-colors">Job Tracking & Scheduling</Link></li>
              <li><Link to="/features" className="hover:text-[var(--fg)] transition-colors">Team Management</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--fg)] font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:support@gaspilotapp.com" className="hover:text-[var(--fg)] transition-colors">support@gaspilotapp.com</a></li>
              <li><Link to="/legal" className="hover:text-[var(--fg)] transition-colors">Legal</Link></li>
              <li><Link to="/privacy" className="hover:text-[var(--fg)] transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-[var(--fg)] transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--fg-dim)]">
          <p>&copy; {new Date().getFullYear()} GasPilot. All rights reserved.</p>
          <p>Made for Gas Safe Registered Engineers</p>
        </div>
      </div>
    </footer>
  )
}
