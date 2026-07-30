import { forwardRef } from 'react'
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
        <p className="font-display text-2xl leading-snug">
          <em className="not-italic gradient-text">Let's work together.</em>
        </p>
      </motion.div>
    </section>
  )
})

export default Contact
