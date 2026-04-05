import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ASSET_BASE = import.meta.env.BASE_URL + 'assets/'

export function assetUrl(filename) {
  return ASSET_BASE + 'images/' + filename
}

function thumbnail(project) {
  if (project.thumbnail) return assetUrl(project.thumbnail)
  if (project.images?.length) return assetUrl(project.images[0])
  if (project.gifs?.length) return assetUrl(project.gifs[0])
  return null
}

export default function ProjectCard({ project }) {
  const thumb = thumbnail(project)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="flex flex-col md:flex-row gap-6 md:gap-8 items-start py-8 border-b border-neutral-100 dark:border-neutral-800 group"
      >
        {/* Thumbnail — square crop */}
        <div className="w-full md:w-44 flex-shrink-0 aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
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

        {/* Content */}
        <div className="flex-1 pt-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm tracking-widest uppercase text-neutral-600 dark:text-neutral-400">{project.client}</span>
            <span className="text-sm text-neutral-500 dark:text-neutral-500">{project.year}</span>
          </div>
          <h2 className="font-display text-xl text-neutral-900 dark:text-neutral-100 leading-snug mb-2 group-hover:[color:var(--accent)] transition-colors duration-200">
            {project.title}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
