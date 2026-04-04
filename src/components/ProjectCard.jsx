import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ASSET_BASE = import.meta.env.BASE_URL + 'assets/'

export function assetUrl(filename) {
  const ext = filename.split('.').pop().toLowerCase()
  const folder = ext === 'gif' ? 'gifs/' : 'images/'
  return ASSET_BASE + folder + filename
}

function thumbnail(project) {
  if (project.images?.length) return assetUrl(project.images[0])
  if (project.gifs?.length) return assetUrl(project.gifs[0])
  return null
}

export default function ProjectCard({ project }) {
  const thumb = thumbnail(project)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/project/${project.id}`} className="block group">
        {/* Thumbnail */}
        <div className="w-full aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden mb-4">
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

        {/* Meta */}
        <div className="flex items-center gap-3 mb-1.5">
          <span className="text-xs tracking-widest uppercase text-neutral-700">{project.client}</span>
          <span className="text-xs text-neutral-600">{project.year}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-xl text-neutral-900 leading-snug group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h2>
      </Link>
    </motion.div>
  )
}
