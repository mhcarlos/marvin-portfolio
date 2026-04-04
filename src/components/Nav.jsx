import DarkModeToggle from './DarkModeToggle'

export default function Nav({ onWork, onAbout, onContact }) {
  return (
    <nav className="flex justify-between items-center py-8 border-b border-neutral-200 dark:border-neutral-800">
      <span
        className="cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="font-display text-neutral-900 dark:text-neutral-100 select-none" style={{ letterSpacing: '-0.03em' }}>
          <span className="hidden md:inline text-xl">MARVIN CARLOS</span>
          <span className="md:hidden text-lg">MC</span>
        </span>
      </span>
      <div className="flex items-center gap-8">
        <button onClick={onWork} className="nav-link">Work</button>
        <button onClick={onAbout} className="nav-link">About</button>
        <button onClick={onContact} className="nav-link">Contact</button>
        <DarkModeToggle />
      </div>
    </nav>
  )
}
