import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Contact = forwardRef(function Contact(_, ref) {
  return (
    <section ref={ref} id="contact">
      <motion.div
        className="flex justify-between items-center py-10 border-t border-b border-neutral-200 mt-24"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-display text-2xl text-neutral-900 leading-snug">
          Let's build something great.<br/>
          <em className="not-italic" style={{ color: 'var(--accent)' }}>Get in touch.</em>
        </p>

        <div className="flex gap-6 flex-shrink-0">
          <a href="mailto:hello@marvincarlos.com" className="contact-link">Email</a>
          <a href="https://linkedin.com/in/marvincarlos" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
          <a href={`${import.meta.env.BASE_URL}assets/Marvin-Carlos_Lead-Product-Designer.pdf`} target="_blank" rel="noreferrer" className="contact-link">Résumé</a>
        </div>
      </motion.div>
    </section>
  )
})

export default Contact
