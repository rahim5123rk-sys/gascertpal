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
        ? 'bg-[var(--bg-base)]/90 backdrop-blur-xl border-b border-[var(--border)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img src="/logowebsite.png" alt="GasPilot" className="h-10 w-auto object-contain" />
            <span className="font-display text-[22px] font-700 text-[var(--fg)] tracking-tight">
              GasPilot
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {isHome ? (
              <>
                <Link to="/about" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors">About</Link>
                <a href="#features" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors">Features</a>
                <a href="#how-it-works" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors">Process</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors">Home</Link>
                <Link to="/about" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors">About</Link>
                <Link to="/privacy" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors">Privacy</Link>
                <Link to="/terms" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-[13px] font-500 transition-colors">Terms</Link>
              </>
            )}
            <a href={isHome ? '#download' : '/#download'} className="btn-primary btn-sm">
              Download
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[var(--bg-surface)] border-t border-[var(--border)] px-6 py-4 flex flex-col gap-3">
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
          <a href={isHome ? '#download' : '/#download'} className="btn-primary btn-sm w-full text-center" onClick={() => setMenuOpen(false)}>
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}
