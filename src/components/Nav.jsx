export default function Nav({ onWork, onAbout, onContact }) {
  return (
    <nav className="flex justify-between items-center py-8 border-b border-neutral-200">
      <span
        className="cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="font-display text-xl text-neutral-900 tracking-tight">Marvin Carlos</span>
      </span>
      <div className="flex gap-8">
        <button onClick={onWork} className="nav-link">Work</button>
        <button onClick={onAbout} className="nav-link">About</button>
        <button onClick={onContact} className="nav-link">Contact</button>
      </div>
    </nav>
  )
}
