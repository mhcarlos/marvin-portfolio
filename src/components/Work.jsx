import { forwardRef } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Work = forwardRef(function Work(_, ref) {
  const filtered = projects.filter(p => p.points?.length > 0)

  return (
    <section ref={ref} id="work">
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 mt-10 flex items-baseline gap-4 mb-2">
        <span className="text-sm tracking-widest uppercase text-neutral-700 dark:text-neutral-400">Selected Work</span>
        <span className="text-sm text-neutral-500 dark:text-neutral-500">{filtered.length} projects</span>
      </div>

      <div className="flex flex-col pb-4">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
})

export default Work
