import { forwardRef } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Work = forwardRef(function Work(_, ref) {
  return (
    <section ref={ref} id="work">
      <div className="border-t border-neutral-200 pt-6 mt-10 flex items-baseline gap-4 mb-2">
        <span className="text-xs tracking-widest uppercase text-neutral-700">Selected Work</span>
        <span className="text-xs text-neutral-500">{projects.length} projects</span>
      </div>

      <div className="flex flex-col pb-4">
        {projects.filter(p => p.points?.length > 0).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
})

export default Work
