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

  return (
    <div className="max-w-7xl mx-auto px-10">
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
            <span className="text-xs tracking-widest uppercase text-neutral-700">{project.client}</span>
            <span className="text-xs text-neutral-600">{project.year}</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14 pb-14 border-b border-neutral-200">
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-700 mb-3">Overview</h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-light">{project.overview}</p>
          </div>
          {project.outcomes?.length > 0 && (
            <div>
              <h3 className="text-xs tracking-widest uppercase text-neutral-700 mb-3">
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

        {/* Numbered discussion points */}
        {project.points?.length > 0 && (
          <div className="flex flex-col gap-14 mb-16">
            {project.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
              >
                {/* Number + Title — full width */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span
                    className="font-display text-2xl leading-none tabular-nums"
                    style={{ color: 'var(--accent)' }}
                  >
                    {i + 1}.
                  </span>
                  <h2 className="font-display text-2xl text-neutral-900 leading-snug">
                    {point.title}
                  </h2>
                </div>

                {/* Text left, image right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                  <p className="text-sm text-neutral-700 leading-relaxed font-light">
                    {point.text}
                  </p>

                  {point.media && (
                    <div className="rounded-xl overflow-hidden bg-neutral-100">
                      <img
                        src={assetUrl(point.media)}
                        alt={point.title}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
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
