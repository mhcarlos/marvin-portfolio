import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { assetUrl } from '../components/ProjectCard'
import DarkModeToggle from '../components/DarkModeToggle'

export default function WorkPage() {
  const featured = projects.filter(p => p.points?.length > 0 && p.id !== 'elt-dashboard')

  return (
    <div className="max-w-7xl mx-auto px-10">
      {/* Nav */}
      <nav className="flex justify-between items-center py-8 border-b border-neutral-200 dark:border-neutral-800 mb-12">
        <Link to="/" className="cursor-pointer">
          <span
            className="font-display text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 select-none"
            style={{ letterSpacing: '-0.03em' }}
          >
            MARVIN CARLOS
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className="nav-link">← Back</Link>
          <DarkModeToggle />
        </div>
      </nav>

      <div className="mb-12">
        <h1 className="font-display text-3xl text-neutral-900 dark:text-neutral-100 mb-2" style={{ letterSpacing: '-0.02em' }}>
          Selected Work
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 font-light">
          Case studies from fintech, enterprise SaaS, and AI product design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-16">
        {featured.map((project, i) => {
          const thumb = project.thumbnail ? assetUrl(project.thumbnail) : null

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
            >
              <Link to={`/project/${project.id}`} className="block group">
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-4">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: 'var(--accent-light)' }}
                    >
                      <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                        {project.client}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400">{project.client}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">{project.year}</span>
                </div>
                <h2 className="font-display text-lg text-neutral-900 dark:text-neutral-100 leading-snug group-hover:[color:var(--accent)] transition-colors duration-200">
                  {project.title}
                </h2>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
