import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#86868b] pt-14 sm:pt-24 pb-8 sm:pb-10 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group w-fit">
              <span className="text-white font-bold text-lg ">
                GasCertPal
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              Professional tools for modern gas engineers. Clean, fast, and built for the job.
            </p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-[#1d1d1f] hover:bg-white text-[#86868b] hover:text-black rounded-full flex items-center justify-center transition-all duration-300">
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91A4.54 4.54 0 0119.46 24H4.54A4.54 4.54 0 010 19.47V4.54A4.54 4.54 0 014.54 0h14.92A4.54 4.54 0 0124 4.56zM8 19V9H5v10h3zm-1.5-11.3a1.74 1.74 0 000-3.48 1.74 1.74 0 000 3.48zM19 19v-5.5c0-2.67-.58-4.72-3.7-4.72A3.24 3.24 0 0012.4 10h-.04V9H9.5v10h3v-4.95c0-1.26.24-2.48 1.8-2.48 1.54 0 1.56 1.44 1.56 2.56V19H19z" /></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-10 h-10 bg-[#1d1d1f] hover:bg-white text-[#86868b] hover:text-black rounded-full flex items-center justify-center transition-all duration-300">
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-[#1d1d1f] hover:bg-white text-[#86868b] hover:text-black rounded-full flex items-center justify-center transition-all duration-300">
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* App */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm">The App</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
              <li><a href="/#features" className="hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="/#how-it-works" className="hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="/#download" className="hover:text-white transition-colors duration-300">Download</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm">Features</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#features" className="hover:text-white transition-colors duration-300">CP12 Certificates</a></li>
              <li><a href="/#features" className="hover:text-white transition-colors duration-300">Job Management</a></li>
              <li><a href="/#features" className="hover:text-white transition-colors duration-300">Invoices &amp; Quotes</a></li>
              <li><a href="/#features" className="hover:text-white transition-colors duration-300">Team Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:support@gascertpal.com" className="hover:text-white transition-colors duration-300">support@gascertpal.com</a></li>
              <li><Link to="/legal" className="hover:text-white transition-colors duration-300">Legal</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors duration-300">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-white/10 h-px w-full mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} GasCertPal. All rights reserved.</p>
          <p className="text-[#86868b]">Made for Gas Safe Registered Engineers &middot; UK</p>
        </div>
      </div>
    </footer>
  )
}
