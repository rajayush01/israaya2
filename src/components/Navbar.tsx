import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { m, AnimatePresence } from 'framer-motion'
import { m, AnimatePresence } from 'framer-motion'
import logo from '../assets/ISRAAYA LOGO.svg'
import { highPriority } from '../lib/img'

const leftLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Collection', to: '/collection' },
  { label: 'Craft', to: '/craft' },
]

const rightLinks = [
  { label: 'Journal', to: '/journal' },
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

  const solid = scrolled || !isHome || open

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `eyebrow transition-colors duration-300 hover:text-gold-deep ${
      isActive ? (solid ? 'text-maroon' : 'text-gold-soft') : solid ? 'text-ink/70' : 'text-ivory/90'
    }`

  return (
    <m.header
    <m.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-3 md:top-5 inset-x-0 z-50 px-3 md:px-8 pointer-events-none"
    >
      <div
        className={`pointer-events-auto mx-auto max-w-6xl rounded-full border transition-[background-color,border-color,box-shadow] duration-500 ${
        className={`pointer-events-auto mx-auto max-w-6xl rounded-full border transition-[background-color,border-color,box-shadow] duration-500 ${
          solid
            ? 'bg-ivory/95 border-ink/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)]'
            : 'bg-ink/40 border-ivory/20'
            ? 'bg-ivory/95 border-ink/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)]'
            : 'bg-ink/40 border-ivory/20'
        } ${open ? 'rounded-3xl md:rounded-full' : ''}`}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 md:h-20 px-5 md:px-10">
          {/* left links */}
          <nav className="hidden md:flex items-center gap-8">
            {leftLinks.map((l) => (
              <NavLink key={l.label} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* mobile toggle */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-full transition-colors ${solid ? 'bg-ink' : 'bg-ivory'}`} />
            <span className={`h-px w-5 transition-colors ${solid ? 'bg-ink' : 'bg-ivory'}`} />
          </button>

          {/* centered logo */}
          <Link to="/" aria-label="Israaya home" className="flex items-center justify-center">
            <img
              src={logo}
              alt="Israaya Logo"
              decoding="async"
              loading="eager"
              {...highPriority}
              decoding="async"
              loading="eager"
              {...highPriority}
              className="h-12 md:h-20 w-auto object-contain select-none"
              draggable={false}
            />
          </Link>

          {/* right links */}
          <nav className="hidden md:flex items-center gap-8 justify-self-end">
            {rightLinks.map((l) => (
              <NavLink key={l.label} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* mobile spacer keeps logo centered */}
          <div className="md:hidden w-8 justify-self-end" />
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <m.div
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center gap-5 px-6 pt-2 pb-7 border-t border-ink/10">
                {[...leftLinks, ...rightLinks].map((l) => (
                  <NavLink
                    key={l.label}
                    to={l.to}
                    className={({ isActive }) =>
                      `eyebrow pt-4 ${isActive ? 'text-maroon' : 'text-ink/80'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.header>
    </m.header>
  )
}