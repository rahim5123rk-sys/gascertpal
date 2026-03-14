import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] text-[var(--fg-muted)] py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display text-[15px] font-600 text-[var(--fg)] mb-4 block">
              GasPilot
            </Link>
            <p className="text-sm leading-relaxed max-w-[220px]">
              Professional tools for gas engineers. No more paperwork.
            </p>
          </div>

          {/* App */}
          <div>
            <h4 className="text-[var(--fg)] font-500 mb-4 text-sm">App</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-[var(--fg)] transition-colors">About</Link></li>
              <li><a href="/#features" className="hover:text-[var(--fg)] transition-colors">Features</a></li>
              <li><a href="/#how-it-works" className="hover:text-[var(--fg)] transition-colors">Process</a></li>
              <li><a href="/#download" className="hover:text-[var(--fg)] transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-[var(--fg)] font-500 mb-4 text-sm">Features</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#features" className="hover:text-[var(--fg)] transition-colors">Gas Certificates</a></li>
              <li><a href="/#features" className="hover:text-[var(--fg)] transition-colors">Job Tracking</a></li>
              <li><a href="/#features" className="hover:text-[var(--fg)] transition-colors">Invoices & Quotes</a></li>
              <li><a href="/#features" className="hover:text-[var(--fg)] transition-colors">Scheduling</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--fg)] font-500 mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:support@gascertpal.com" className="hover:text-[var(--fg)] transition-colors">support@gascertpal.com</a></li>
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
