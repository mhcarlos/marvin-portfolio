import { forwardRef } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Work = forwardRef(function Work(_, ref) {
  return (
    <section ref={ref} id="work">
      <div className="section-rule flex items-baseline gap-4 mb-8">
        <span className="tracking-widest uppercase text-neutral-500" style={{ fontSize: '11px' }}>Selected Work</span>
        <span className="text-neutral-500" style={{ fontSize: '11px' }}>{projects.length} projects</span>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
})

export default Work
