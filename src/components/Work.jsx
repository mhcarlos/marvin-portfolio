import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Work = forwardRef(function Work(_, ref) {
  return (
    <section ref={ref} id="work">
      <div className="section-rule flex items-baseline gap-4 mb-6">
        <span className="text-xs tracking-widest uppercase text-neutral-400">Selected Work</span>
        <span className="text-xs text-neutral-300">{projects.length} projects</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
})

export default Work
