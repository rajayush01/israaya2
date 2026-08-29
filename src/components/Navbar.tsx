import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
// import PhoenixMark from './PhoenixMark'
import logo from "../assets/logonobg.png"

const leftLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Collection', to: '/collection' },
  { label: 'Craft', to: '/craft' },
]

const rightLinks = [
  { label: 'Our Story', to: '/journal' },
  { label: 'Enquire', to: '/enquire' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const solid = scrolled || !isHome

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-ivory/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-3 items-center h-20 md:h-24">
          {/* left links */}
          <nav className="hidden md:flex items-center gap-8">
            {leftLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `eyebrow transition-colors hover:text-gold-deep ${
                    isActive ? (solid ? 'text-maroon' : 'text-gold-soft') : solid ? 'text-ink/70' : 'text-ivory/85'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* mobile toggle */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-full transition-colors ${solid ? 'bg-ink' : 'bg-ivory'}`} />
            <span className={`h-px w-5 transition-colors ${solid ? 'bg-ink' : 'bg-ivory'}`} />
          </button>

          {/* centered mark */}
          <Link to="/" className="flex flex-col items-center justify-self-center group">
            <img
              src={logo}
              alt="Israaya Logo"
              className={`w-7 h-7 md:w-10 md:h-10 transition-colors duration-500 ${
                solid ? 'text-maroon' : 'text-gold'
              }`}
            />
            <span
              className={`font-label text-[13px] md:text-sm tracking-widest2 mt-1 transition-colors duration-500 ${
                solid ? 'text-ink' : 'text-ivory'
              }`}
            >
              ISRAAYA
            </span>
          </Link>

          {/* right links */}
          <nav className="hidden md:flex items-center gap-8 justify-self-end">
            {rightLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `eyebrow transition-colors hover:text-gold-deep ${
                    isActive ? (solid ? 'text-maroon' : 'text-gold-soft') : solid ? 'text-ink/70' : 'text-ivory/85'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden justify-self-end w-8" />
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-ivory border-t border-ink/10"
        >
          <div className="flex flex-col px-6 py-6 gap-5">
            {[...leftLinks, ...rightLinks].map((l) => (
              <NavLink key={l.label} to={l.to} className="eyebrow text-ink/80">
                {l.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
