import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BASE = import.meta.env.BASE_URL + 'assets/'
const asset = (f) => BASE + (f.endsWith('.gif') ? 'gifs/' : 'images/') + f

// Exported for use in CaseStudy.jsx
export const assetUrl = asset

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const flip = index % 2 !== 0

  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer group"
      style={{ background: '#F2FAF7' }}
      onClick={() => setOpen(!open)}
    >
      <div className={`grid md:grid-cols-2 ${flip ? 'md:[direction:rtl]' : ''}`}>

        <div className={`overflow-hidden min-h-[260px] ${flip ? 'md:[direction:ltr]' : ''}`}
          style={{ background: '#C8E6DC' }}>
          {project.thumbnail ? (
            <img
              src={asset(project.thumbnail)}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ minHeight: '260px' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center min-h-[260px]">
              <span className="text-xs tracking-widest uppercase"
                style={{ color: '#1A6B5C', opacity: 0.5 }}>
                {project.client} · Case study on request
              </span>
            </div>
          )}
        </div>

        <div className={`p-8 flex flex-col justify-between ${flip ? 'md:[direction:ltr]' : ''}`}>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-3">
              <span className="text-xs tracking-widest uppercase font-normal"
                style={{ color: '#1A6B5C' }}>{project.client}</span>
              <span className="text-xs" style={{ color: '#a3a3a3' }}>{project.year}</span>
              <span className="text-xs" style={{ color: '#737373' }}>{project.role}</span>
            </div>
            <h2 style={{ fontFamily: '"DM Serif Display", serif' }}
              className="text-2xl text-neutral-900 leading-snug mb-2">
              {project.title}
            </h2>
            {project.metric && (
              <p className="text-sm font-normal mb-3" style={{ color: '#1A6B5C' }}>
                {project.metric}
              </p>
            )}
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-5 pt-4"
            style={{ borderTop: '0.5px solid rgba(26,107,92,0.15)' }}>
            <div className="flex flex-wrap gap-1.5">
              {project.pills?.map(p => (
                <span key={p} className="text-xs px-2.5 py-0.5 rounded-full font-normal"
                  style={{ background: 'rgba(26,107,92,0.08)', color: '#1A6B5C',
                    border: '0.5px solid rgba(26,107,92,0.15)' }}>
                  {p}
                </span>
              ))}
            </div>
            <span className="text-xs font-normal whitespace-nowrap flex items-center gap-1 ml-4"
              style={{ color: '#1A6B5C' }}>
              View case study
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-6"
              style={{ borderTop: '0.5px solid rgba(26,107,92,0.15)' }}>
              {(project.gifs?.length > 0 || project.images?.length > 0) && (
                <div className="flex gap-2.5 overflow-x-auto mb-6 pb-1">
                  {[...(project.gifs||[]), ...(project.images||[])].map(f => (
                    <img key={f} src={asset(f)} alt=""
                      className="h-44 w-auto rounded-lg object-cover flex-shrink-0"
                      style={{ border: '0.5px solid rgba(26,107,92,0.15)' }} />
                  ))}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: '#737373' }}>Overview</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {project.overview}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-3"
                    style={{ color: '#737373' }}>Outcomes</h4>
                  <div className="flex flex-col gap-3">
                    {project.outcomes?.map((o, i) => (
                      <div key={i} className="flex items-baseline gap-2">
                        <span style={{ fontFamily: '"DM Serif Display", serif',
                          fontSize: '1.6rem', color: '#1A6B5C', lineHeight: 1 }}>
                          {o.value}
                        </span>
                        <span className="text-xs" style={{ color: '#737373', lineHeight: 1.4 }}>
                          {o.label}
                        </span>
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
