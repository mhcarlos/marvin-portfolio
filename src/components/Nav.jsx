import { useLocation, useNavigate, Link } from 'react-router-dom'

export default function Nav({ onWork, onAbout, onContact }) {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNav = (section, scrollFn) => {
    if (isHome && scrollFn) scrollFn()
    else navigate('/')
  }

  return (
    <nav className="flex justify-between items-center py-8 border-b border-neutral-200">
      <Link to="/" className="flex items-center gap-2.5 no-underline">
        <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#1A6B5C"/>
          <rect x="26" y="2" width="20" height="20" rx="3" fill="#1A6B5C" opacity="0.25"/>
          <rect x="2" y="26" width="20" height="20" rx="3" fill="#1A6B5C" opacity="0.25"/>
          <rect x="26" y="26" width="20" height="20" rx="3" fill="#1A6B5C" opacity="0.7"/>
        </svg>
        <span style={{ fontFamily: '"DM Serif Display", serif' }}
          className="text-lg text-neutral-900 tracking-tight leading-none">
          Marvin Carlos
        </span>
      </Link>
      <div className="flex gap-8">
        <button onClick={() => handleNav('work', onWork)} className="nav-link">Work</button>
        <button onClick={() => handleNav('about', onAbout)} className="nav-link">About</button>
        <button onClick={() => handleNav('contact', onContact)} className="nav-link">Contact</button>
      </div>
    </nav>
  )
}
