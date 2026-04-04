import { useState } from 'react'

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Nav({ onWork, onAbout, onContact }) {
  const [dark, setDark] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const isDark = saved === 'dark' || (!saved && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    if (isDark && typeof document !== 'undefined') document.documentElement.classList.add('dark')
    return isDark
  })

  const toggle = () => {
    setDark(prev => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }

  return (
    <nav className="flex justify-between items-center py-8 border-b border-neutral-200 dark:border-neutral-800">
      <span
        className="cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span
          className="font-display text-2xl text-neutral-900 dark:text-neutral-100 select-none"
          style={{ letterSpacing: '-0.03em' }}
        >
          MC
        </span>
      </span>
      <div className="flex items-center gap-8">
        <button onClick={onWork} className="nav-link">Work</button>
        <button onClick={onAbout} className="nav-link">About</button>
        <button onClick={onContact} className="nav-link">Contact</button>
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-200"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}
