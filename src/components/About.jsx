import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    label: 'Disciplines',
    items: ['Product Design', 'UX Research', 'Design Systems', 'AI Product Design', 'Accessibility', 'Brand & Visual Design'],
  },
  {
    label: 'Tools & Stack',
    items: ['Figma', 'React', 'Tailwind CSS', 'ShadCN / Radix', 'TypeScript', 'Framer Motion', 'Claude Code', 'Tokens Studio'],
  },
  {
    label: 'Clients',
    items: ['Insight Partners', 'Intuit', 'Morgan Stanley', 'American Express', 'Mastercard', 'AOL', 'Time Inc.'],
  },
]

const About = forwardRef(function About(_, ref) {
  return (
    <section ref={ref} id="about">
      <div className="section-rule flex items-baseline gap-4 mb-6">
        <span className="text-xs tracking-widest uppercase text-neutral-400">About</span>
      </div>

      <motion.div
        className="grid grid-cols-2 gap-12 pb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        {/* Bio */}
        <div className="text-sm text-neutral-500 leading-relaxed font-light space-y-4">
          <p>
            Designing experiences that blend{' '}
            <strong className="text-neutral-900 font-medium">
              product, UX, design systems, AI, and technical precision
            </strong>
            — guided by a lifelong passion for visual storytelling.
          </p>
          <p>
            Across my career I've led and contributed to product design, UX, visual design,
            marketing and brand, design systems, and front-end development at{' '}
            <strong className="text-neutral-900 font-medium">
              Insight Partners, Intuit, Morgan Stanley, American Express, Mastercard, AOL,
            </strong>{' '}
            and{' '}
            <strong className="text-neutral-900 font-medium">Time Inc.</strong>
          </p>
          <p>
            I'm a{' '}
            <strong className="text-neutral-900 font-medium">CPACC-certified</strong> accessibility
            specialist. I bring both design and engineering fluency — able to prototype in code,
            speak to token architecture, and collaborate directly with developers without a handoff gap.
          </p>
          <p>
            I freelance through{' '}
            <strong className="text-neutral-900 font-medium">Arklight LLC</strong>, based in
            New York / New Jersey.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-5">
          {skills.map(group => (
            <div key={group.label}>
              <h4 className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
                {group.label}
              </h4>
              <div className="flex flex-wrap gap-1.5">
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
