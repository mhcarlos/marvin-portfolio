import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL + 'assets/'
const asset = (f) => BASE + (f.endsWith('.gif') ? 'gifs/' : 'images/') + f

export default function ProjectCard({ project, index }) {
  const flip = index % 2 !== 0

  return (
    <Link
      to={`/work/${project.id}`}
      className="block rounded-2xl overflow-hidden group no-underline"
      style={{ background: 'white', border: '1.5px solid #D1EAE3' }}
    >
      <div className={`grid md:grid-cols-2 ${flip ? 'md:[direction:rtl]' : ''}`}>

        <div className={`overflow-hidden min-h-[260px] ${flip ? 'md:[direction:ltr]' : ''}`}
          style={{ background: '#F0FAF6' }}>
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

        <div className={`p-8 flex flex-col justify-between bg-white ${flip ? 'md:[direction:ltr]' : ''}`}>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-3">
              <span className="text-xs tracking-widest uppercase font-medium"
                style={{ color: '#1A6B5C' }}>{project.client}</span>
              <span className="text-xs" style={{ color: '#525252' }}>{project.year}</span>
              <span className="text-xs" style={{ color: '#525252' }}>{project.role}</span>
            </div>
            <h2 style={{ fontFamily: '"DM Serif Display", serif' }}
              className="text-2xl md:text-3xl text-neutral-900 leading-snug mb-2">
              {project.title}
            </h2>
            {project.metric && (
              <p className="text-base font-normal mb-3" style={{ color: '#1A6B5C' }}>
                {project.metric}
              </p>
            )}
            <p className="text-base text-neutral-700 leading-relaxed">
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
    </Link>
  )
}
