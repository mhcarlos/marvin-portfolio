import { forwardRef } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Work = forwardRef(function Work(_, ref) {
  return (
    <section ref={ref} id="work">
      <div className="section-rule flex items-baseline gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase text-neutral-700">Selected Work</span>
        <span className="text-xs text-neutral-500">{projects.length} projects</span>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-16 pb-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
})

export default Work
