import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { assetUrl } from '../components/ProjectCard'

export default function CaseStudy() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-24 text-center">
        <p className="text-neutral-700 mb-4">Project not found.</p>
        <Link to="/" className="contact-link">← Back to portfolio</Link>
      </div>
    )
  }

  const allImages = project.images || []
  const allGifs = project.gifs || []
  const mediaStrip = [...allImages, ...allGifs]

  return (
    <div className="max-w-5xl mx-auto px-10">
      {/* Nav */}
      <nav className="flex justify-between items-center py-8 border-b border-neutral-200 mb-12">
        <Link to="/" className="cursor-pointer">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/mc-logo.png`}
            alt="Marvin Carlos"
            style={{ height: '32px', width: 'auto' }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'inline'
            }}
          />
          <span className="font-display text-xl text-neutral-900 tracking-tight" style={{ display: 'none' }}>
            Marvin Carlos
          </span>
        </Link>
        <Link to="/" className="nav-link">← Back to Work</Link>
      </nav>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="tracking-widest uppercase text-neutral-500" style={{ fontSize: '11px' }}>{project.client}</span>
            <span className="text-neutral-500" style={{ fontSize: '11px' }}>{project.year}</span>
            <span
              className="text-xs px-2.5 py-0.5 rounded-full font-normal"
              style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
            >
              {project.role}
            </span>
          </div>

          <h1 className="font-display text-4xl text-neutral-900 leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base text-neutral-700 leading-relaxed max-w-2xl font-light">
            {project.description}
          </p>

          {project.pills?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.pills.map(p => (
                <span key={p} className="pill">{p}</span>
              ))}
            </div>
          )}
        </div>

        {/* Overview + Outcomes */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="tracking-widest uppercase text-neutral-400 mb-3" style={{ fontSize: '11px' }}>Overview</h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-light">{project.overview}</p>
          </div>
          {project.outcomes?.length > 0 && (
            <div>
              <h3 className="tracking-widest uppercase text-neutral-400 mb-3" style={{ fontSize: '11px' }}>
                {project.outcomeLabel || 'Outcomes'}
              </h3>
              <div className="flex flex-col gap-4">
                {project.outcomes.map((o, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    <span className="font-display text-2xl leading-none" style={{ color: 'var(--accent)' }}>
                      {o.value}
                    </span>
                    <span className="text-xs text-neutral-700 leading-snug">{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Body sections */}
        {project.sections?.length > 0 && (
          <div className="flex flex-col gap-10 mb-12">
            {project.sections.map((section, i) => (
              <div key={i} className="grid grid-cols-[1fr_2fr] gap-12">
                <div>
                  <span className="tracking-widest uppercase text-neutral-500" style={{ fontSize: '11px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg text-neutral-900 leading-snug mt-1">{section.title}</h3>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed font-light">{section.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Media strip — horizontal scroll */}
        {mediaStrip.length > 0 && (
          <div className="flex gap-4 overflow-x-auto pb-4 mb-12" style={{ scrollSnapType: 'x mandatory' }}>
            {mediaStrip.map(filename => (
              <div
                key={filename}
                className="flex-shrink-0 rounded-xl overflow-hidden bg-neutral-100"
                style={{ height: '320px', scrollSnapAlign: 'start' }}
              >
                <img
                  src={assetUrl(filename)}
                  alt={filename.replace(/[-_.]/g, ' ').replace(/\.[^.]+$/, '')}
                  className="h-full w-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Footer nav */}
        <div className="border-t border-neutral-200 pt-8 pb-16">
          <Link to="/" className="contact-link">← Back to all work</Link>
        </div>
      </motion.article>
    </div>
  )
}
