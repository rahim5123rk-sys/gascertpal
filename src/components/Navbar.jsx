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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        solidNav
          ? 'bg-black/70 backdrop-blur-2xl border-b border-white/5 saturate-150'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300">
              <svg aria-hidden="true" className="w-4 h-4 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <span className="text-lg sm:text-lg font-bold text-white ">
              GasCertPal
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                <Link to="/about" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors duration-300">About</Link>
                <a href="#features" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors duration-300">Features</a>
                <a href="#how-it-works" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors duration-300">How It Works</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors duration-300">Home</Link>
                <Link to="/about" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors duration-300">About</Link>
                <Link to="/privacy" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors duration-300">Privacy</Link>
                <Link to="/terms" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors duration-300">Terms</Link>
              </>
            )}
            <a
              href={isHome ? '#download' : '/#download'}
              className="bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded-full font-bold text-sm transition-all duration-300"
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
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#111111] backdrop-blur-3xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {isHome ? (
            <>
              <Link to="/about" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
              <a href="#features" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors" onClick={() => setMenuOpen(false)}>How It Works</a>
            </>
          ) : (
            <>
              <Link to="/" className="text-[#a1a1a6] hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-[#a1a1a6] hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/privacy" className="text-[#a1a1a6] hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>Privacy</Link>
              <Link to="/terms" className="text-[#a1a1a6] hover:text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>Terms</Link>
            </>
          )}
          <a
            href={isHome ? '#download' : '/#download'}
            className="bg-white text-black px-5 py-3 rounded-full font-bold text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            Download Free
          </a>
        </div>
      </div>
    </nav>
  )
}
