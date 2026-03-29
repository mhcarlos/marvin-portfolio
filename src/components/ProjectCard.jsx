import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ASSET_BASE = import.meta.env.BASE_URL + 'assets/'

export function assetUrl(filename) {
  const ext = filename.split('.').pop().toLowerCase()
  const folder = ext === 'gif' ? 'gifs/' : 'images/'
  return ASSET_BASE + folder + filename
}

export default function ProjectCard({ project }) {
  const thumb = project.thumbnail ? assetUrl(project.thumbnail) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/project/${project.id}`} className="block group">
        {/* Thumbnail */}
        <div className="w-full bg-neutral-100 rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '1/1' }}>
          {thumb ? (
            <img
              src={thumb}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-2"
              style={{ background: 'var(--accent-light)' }}
            >
              <span className="text-[11px] tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                {project.client}
              </span>
              <span className="text-[11px] text-neutral-400">Case study available on request</span>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-1.5">
          <span className="text-[11px] tracking-widest uppercase text-neutral-500">{project.client}</span>
          <span className="text-[11px] text-neutral-500">{project.year}</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-xl text-neutral-900 leading-snug group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h2>

        {/* Metric */}
        {project.metric && (
          <p className="text-xs font-normal mt-1" style={{ color: '#1A6B5C' }}>
            {project.metric}
          </p>
        )}
      </Link>
    </motion.div>
  )
}
