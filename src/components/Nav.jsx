import { useState } from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex justify-between items-center py-8">
        {/* Logo */}
        <span
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span
            className="font-display text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 select-none"
            style={{ letterSpacing: '-0.03em' }}
          >
            MARVIN CARLOS
          </span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <DarkModeToggle />
        </div>

        {/* Mobile: dark mode toggle + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="text-neutral-700 dark:text-neutral-300 p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-6">
          <Link to="/work" onClick={() => setMenuOpen(false)} className="nav-link text-left">Work</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="nav-link text-left">Contact</Link>
        </div>
      )}
    </nav>
  )
}
