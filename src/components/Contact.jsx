import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Contact = forwardRef(function Contact(_, ref) {
  return (
    <section ref={ref} id="contact">
      <motion.div
        className="flex justify-between items-center py-10 border-t border-b border-neutral-200 dark:border-neutral-800 mt-24"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-display text-2xl text-neutral-900 dark:text-neutral-100 leading-snug">
          <em className="not-italic" style={{ color: 'var(--accent)' }}>Let's work together.</em>
        </p>

        <div className="flex gap-6 flex-shrink-0">
          <Link to="/contact" className="contact-link">Get in Touch</Link>
          <a href="https://linkedin.com/in/marvincarlos" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a
            href={`${import.meta.env.BASE_URL}assets/Marvin-Carlos_Lead-Product-Designer.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Résumé
          </a>
        </div>
      </motion.div>
    </section>
  )
})

export default Contact
