import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solidNav = !isHome || scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidNav
          ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-br from-orange-500 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:shadow-orange-500/50 transition-all duration-300">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Gas<span className="gradient-text">CertPal</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                <Link to="/about" className="text-white/60 hover:text-white font-medium text-sm transition-colors duration-300">About</Link>
                <a href="#features" className="text-white/60 hover:text-white font-medium text-sm transition-colors duration-300">Features</a>
                <a href="#how-it-works" className="text-white/60 hover:text-white font-medium text-sm transition-colors duration-300">How It Works</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-white/60 hover:text-white font-medium text-sm transition-colors duration-300">Home</Link>
                <Link to="/about" className="text-white/60 hover:text-white font-medium text-sm transition-colors duration-300">About</Link>
                <Link to="/privacy" className="text-white/60 hover:text-white font-medium text-sm transition-colors duration-300">Privacy</Link>
                <Link to="/terms" className="text-white/60 hover:text-white font-medium text-sm transition-colors duration-300">Terms</Link>
              </>
            )}
            <a
              href={isHome ? '#download' : '/#download'}
              className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
            >
              Download Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-950 backdrop-blur-2xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {isHome ? (
            <>
              <Link to="/about" className="text-white/60 hover:text-white font-medium text-sm transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
              <a href="#features" className="text-white/60 hover:text-white font-medium text-sm transition-colors" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-white/60 hover:text-white font-medium text-sm transition-colors" onClick={() => setMenuOpen(false)}>How It Works</a>
            </>
          ) : (
            <>
              <Link to="/" className="text-white/60 hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-white/60 hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/privacy" className="text-white/60 hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>Privacy</Link>
              <Link to="/terms" className="text-white/60 hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>Terms</Link>
            </>
          )}
          <a
            href={isHome ? '#download' : '/#download'}
            className="bg-linear-to-r from-orange-500 to-amber-500 text-white px-5 py-3.5 rounded-xl font-bold text-sm text-center shadow-lg shadow-orange-500/20"
            onClick={() => setMenuOpen(false)}
          >
            Download Free
          </a>
        </div>
      </div>
    </nav>
  )
}
