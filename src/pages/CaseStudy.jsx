import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/projects'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const BASE = import.meta.env.BASE_URL + 'assets/'
const asset = (f) => f ? BASE + (f.endsWith('.gif') ? 'gifs/' : 'images/') + f : null

export default function CaseStudy() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) return (
    <div className="max-w-5xl mx-auto px-8">
      <Nav />
      <div className="py-32 text-center">
        <p className="text-neutral-400 mb-4">Case study not found.</p>
        <Link to="/" className="text-sm" style={{ color: '#1A6B5C' }}>← Back to work</Link>
      </div>
      <Footer />
    </div>
  )

  const allMedia = [...(project.gifs || []), ...(project.images || [])]

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Nav />

      <div className="pt-8 pb-2">
        <Link to="/" className="text-sm font-normal flex items-center gap-1.5"
          style={{ color: '#1A6B5C' }}>
          ← Back to work
        </Link>
      </div>

      <div className="pt-8 pb-10 border-b border-neutral-200">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <span className="text-xs tracking-widest uppercase font-normal"
            style={{ color: '#1A6B5C' }}>{project.client}</span>
          <span className="text-xs text-neutral-400">{project.year}</span>
          <span className="text-xs text-neutral-500">{project.role}</span>
        </div>
        <h1 style={{ fontFamily: '"DM Serif Display", serif' }}
          className="text-4xl md:text-5xl text-neutral-900 leading-tight mb-4 max-w-3xl">
          {project.title}
        </h1>
        {project.metric && (
          <p className="text-base font-normal mb-4" style={{ color: '#1A6B5C' }}>
            {project.metric}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.pills?.map(p => (
            <span key={p} className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(26,107,92,0.08)', color: '#1A6B5C',
                border: '0.5px solid rgba(26,107,92,0.2)' }}>
              {p}
            </span>
          ))}
        </div>
      </div>

      {project.thumbnail && (
        <div className="mt-10 rounded-2xl overflow-hidden"
          style={{ border: '0.5px solid #D1EAE3' }}>
          <img src={asset(project.thumbnail)} alt={project.title}
            className="w-full object-cover" style={{ maxHeight: '520px' }} />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 mt-12 pb-12 border-b border-neutral-200">
        <div>
          <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Overview</h2>
          <p className="text-base text-neutral-600 leading-relaxed">{project.overview}</p>
        </div>
        <div>
          <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Outcomes</h2>
          <div className="flex flex-col gap-4">
            {project.outcomes?.map((o, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span style={{ fontFamily: '"DM Serif Display", serif',
                  fontSize: '2rem', color: '#1A6B5C', lineHeight: 1 }}>
                  {o.value}
                </span>
                <span className="text-sm text-neutral-500 leading-snug">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {project.sections?.length > 0 && (
        <div className="mt-12 pb-12 border-b border-neutral-200">
          <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-8">Process</h2>
          <div className="flex flex-col gap-10">
            {project.sections.map((section, i) => (
              <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-10">
                <div>
                  <span className="text-xs tracking-widest uppercase text-neutral-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontFamily: '"DM Serif Display", serif' }}
                    className="text-lg text-neutral-900 leading-snug mt-1">
                    {section.title}
                  </h3>
                </div>
                <p className="text-base text-neutral-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {allMedia.length > 0 && (
        <div className="mt-12 pb-12 border-b border-neutral-200">
          <h2 className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
            Process &amp; Design
          </h2>
          <div className="flex flex-col gap-6">
            {allMedia.map(f => (
              <div key={f} className="rounded-xl overflow-hidden"
                style={{ border: '0.5px solid #D1EAE3' }}>
                <img src={asset(f)} alt="" className="w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center py-12">
        {(() => {
          const idx = projects.findIndex(p => p.id === id)
          const prev = projects[idx - 1]
          const next = projects[idx + 1]
          return (
            <>
              {prev ? (
                <Link to={`/work/${prev.id}`}
                  className="text-sm flex items-center gap-2"
                  style={{ color: '#1A6B5C' }}>
                  ← {prev.title}
                </Link>
              ) : <span />}
              {next ? (
                <Link to={`/work/${next.id}`}
                  className="text-sm flex items-center gap-2"
                  style={{ color: '#1A6B5C' }}>
                  {next.title} →
                </Link>
              ) : <span />}
            </>
          )
        })()}
      </div>

      <Footer />
    </div>
  )
}
