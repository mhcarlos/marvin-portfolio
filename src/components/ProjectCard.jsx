import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Base path for assets — update if your repo name changes
const ASSET_BASE = import.meta.env.BASE_URL + 'assets/'

function assetUrl(filename) {
  const ext = filename.split('.').pop().toLowerCase()
  const folder = ['gif'].includes(ext) ? 'gifs/' : 'images/'
  return ASSET_BASE + folder + filename
}

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const allMedia = [...(project.gifs || []), ...(project.images || [])]

  return (
    <div
      className="border-b border-neutral-200 last:border-0"
    >
      {/* Header row — always visible, click to expand */}
      <div
        className="py-7 cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            {/* Meta line */}
            <div className="flex items-center gap-4 mb-2.5">
              <span className="text-xs tracking-widest uppercase text-neutral-400">
                {project.client}
              </span>
              <span className="text-xs text-neutral-300">{project.year}</span>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-normal"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
              >
                {project.role}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl text-neutral-900 leading-snug mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-neutral-500 leading-relaxed font-light max-w-2xl">
              {project.description}
            </p>

            {/* Pills */}
            {project.pills?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.pills.map(p => (
                  <span key={p} className="pill">{p}</span>
                ))}
              </div>
            )}
          </div>

          {/* Arrow */}
          <div
            className="text-neutral-300 group-hover:text-neutral-700 transition-all duration-200 mt-1 flex-shrink-0 text-lg"
            style={{ transform: open ? 'translate(3px, -3px)' : 'none' }}
          >
            ↗
          </div>
        </div>
      </div>

      {/* Expanded body */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 border-t border-neutral-100 pt-6">

              {/* Image / GIF strip */}
              {allMedia.length > 0 && (
                <div className="flex gap-2.5 overflow-x-auto mb-6 pb-1">
                  {allMedia.map(filename => (
                    <img
                      key={filename}
                      src={assetUrl(filename)}
                      alt={filename.replace(/[-_.]/g, ' ').replace(/\.[^.]+$/, '')}
                      className="h-44 w-auto rounded-md object-cover flex-shrink-0 border border-neutral-100"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              {/* Two-column detail */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Overview</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {project.overview}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-neutral-400 mb-3">
                    {project.outcomeLabel || 'Outcomes'}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {project.outcomes?.map((o, i) => (
                      <div key={i} className="flex items-baseline gap-2">
                        <span
                          className="font-display text-2xl leading-none"
                          style={{ color: 'var(--accent)' }}
                        >
                          {o.value}
                        </span>
                        <span className="text-xs text-neutral-400 leading-snug">{o.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
