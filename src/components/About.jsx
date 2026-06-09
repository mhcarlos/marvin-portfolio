import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    label: 'Disciplines',
    items: ['Product Design', 'UX Research', 'Design Systems', 'AI Product Design', 'Accessibility', 'Brand & Visual Design'],
  },
  {
    label: 'Clients',
    items: ['Insight Partners', 'Intuit', 'Morgan Stanley', 'American Express', 'Mastercard', 'AOL', 'Time Inc.'],
  },
]

const About = forwardRef(function About(_, ref) {
  return (
    <section ref={ref} id="about">
      <div className="section-rule flex items-baseline gap-4 mb-12">
        <span className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-500">About</span>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-20 pb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        {/* Bio */}
        <div className="text-base text-neutral-600 dark:text-neutral-400 leading-loose font-light space-y-6">
          <p>
            I started in front-end development and grew into UX and design leadership, so I've spent
            a long time on both sides of the handoff. The work I'm proudest of lives in hard places:
            regulated finance, dense enterprise tools, and now AI products where the patterns are
            still being written.
          </p>
          <p>
            Simplicity isn't a design tactic for me — it's how I try to think about most things.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-8">
          {skills.map(group => (
            <div key={group.label}>
              <h4 className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-500 mb-3">
                {group.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

export default About
