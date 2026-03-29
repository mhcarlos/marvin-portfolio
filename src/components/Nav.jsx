export default function Nav({ onWork, onAbout, onContact }) {
  return (
    <nav className="flex justify-between items-center py-8 border-b border-neutral-200">

      {/* Logo lockup */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* Mark — dark fill circle */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="32" fill="#171717" />
          <text
            x="32"
            y="41"
            fontFamily="DM Serif Display, serif"
            fontSize="26"
            fontWeight="400"
            fill="white"
            textAnchor="middle"
            letterSpacing="-1"
          >
            MC
          </text>
        </svg>

        {/* Wordmark */}
        <span
          style={{ fontFamily: '"DM Serif Display", serif' }}
          className="text-xl text-neutral-900 tracking-tight leading-none"
        >
          Marvin Carlos
        </span>
      </div>

      {/* Nav links */}
      <div className="flex gap-8">
        <button onClick={onWork} className="nav-link">Work</button>
        <button onClick={onAbout} className="nav-link">About</button>
        <button onClick={onContact} className="nav-link">Contact</button>
      </div>

    </nav>
  )
}
