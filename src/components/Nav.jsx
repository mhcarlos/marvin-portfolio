export default function Nav({ onWork, onAbout, onContact }) {
  return (
    <nav className="flex justify-between items-center py-8 border-b border-neutral-200">

      <div
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#1A6B5C"/>
          <rect x="26" y="2" width="20" height="20" rx="3" fill="#1A6B5C" opacity="0.25"/>
          <rect x="2" y="26" width="20" height="20" rx="3" fill="#1A6B5C" opacity="0.25"/>
          <rect x="26" y="26" width="20" height="20" rx="3" fill="#1A6B5C" opacity="0.7"/>
        </svg>
        <span
          style={{ fontFamily: '"DM Serif Display", serif' }}
          className="text-lg text-neutral-900 tracking-tight leading-none"
        >
          Marvin Carlos
        </span>
      </div>

      <div className="flex gap-8">
        <button onClick={onWork} className="nav-link">Work</button>
        <button onClick={onAbout} className="nav-link">About</button>
        <button onClick={onContact} className="nav-link">Contact</button>
      </div>

    </nav>
  )
}
