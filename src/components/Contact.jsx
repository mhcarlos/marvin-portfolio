import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Contact = forwardRef(function Contact(_, ref) {
  return (
    <section ref={ref} id="contact">
      <motion.div
        className="flex justify-between items-center py-8 border-t border-b border-neutral-200 mt-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-display text-2xl text-neutral-900 leading-snug">
          Available for contracts.<br />
          <em className="not-italic" style={{ color: 'var(--accent)' }}>Let's work together.</em>
        </p>

        <div className="flex gap-6 flex-shrink-0">
          {/* Update these href values with your real details */}
          <a href="mailto:hello@marvincarlos.com" className="contact-link">Email</a>
          <a href="https://linkedin.com/in/marvincarlos" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" className="contact-link">Résumé</a>
        </div>
      </motion.div>
    </section>
  )
})

export default Contact
