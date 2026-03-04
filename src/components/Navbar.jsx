import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 left-0 right-0 z-100 transition-all duration-300 ${
      scrolled
        ? 'bg-[var(--bg-base)]/85 backdrop-blur-2xl shadow-[0_1px_0_var(--border)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <svg aria-hidden="true" className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <span className="font-display text-lg font-600 text-[var(--fg)] tracking-tight">
              GasCertPal
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {isHome ? (
              <>
                <Link to="/about" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors duration-200 tracking-wide uppercase">About</Link>
                <a href="#features" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors duration-200 tracking-wide uppercase">Features</a>
                <a href="#how-it-works" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors duration-200 tracking-wide uppercase">Process</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors duration-200 tracking-wide uppercase">Home</Link>
                <Link to="/about" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors duration-200 tracking-wide uppercase">About</Link>
                <Link to="/privacy" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors duration-200 tracking-wide uppercase">Privacy</Link>
                <Link to="/terms" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors duration-200 tracking-wide uppercase">Terms</Link>
              </>
            )}
            <a href={isHome ? '#download' : '/#download'} className="btn-primary text-sm px-6 py-2.5">
              Download Free
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[var(--bg-surface)] border-t border-[var(--border)] px-6 py-5 flex flex-col gap-4">
          {isHome ? (
            <>
              <Link to="/about" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm font-500" onClick={() => setMenuOpen(false)}>About</Link>
              <a href="#features" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm font-500" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm font-500" onClick={() => setMenuOpen(false)}>Process</a>
            </>
          ) : (
            <>
              <Link to="/" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm font-500" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm font-500" onClick={() => setMenuOpen(false)}>About</Link>
            </>
          )}
          <a href={isHome ? '#download' : '/#download'} className="btn-primary text-sm px-6 py-3 w-full" onClick={() => setMenuOpen(false)}>
            Download Free
          </a>
        </div>
      </div>
    </nav>
  )
}
