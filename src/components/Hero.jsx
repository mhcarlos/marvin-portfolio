import { motion } from 'framer-motion'

export default function Hero({ onWork }) {
  return (
    <motion.section
      className="py-16 pb-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="tracking-widest uppercase text-neutral-500 mb-6" style={{ fontSize: '11px' }}>
        Product Designer · Fintech &amp; Enterprise SaaS · New York
      </p>

      <h1
        className="font-display text-neutral-900 max-w-2xl mb-6"
        style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', lineHeight: '1.05' }}
      >
        Designing experiences that blend product, UX, and{' '}
        <em className="not-italic" style={{ color: 'var(--accent)' }}>technical precision</em>
      </h1>

      <p className="text-lg text-neutral-700 max-w-xl leading-relaxed font-light mb-8">
        I've shipped AI features and enterprise products for financial institutions, small business owners, and enterprise operators — at Insight Partners, Intuit, Morgan Stanley, American Express, and Mastercard. CPACC-certified.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="tag">Fintech</span>
        <span className="tag">Enterprise SaaS</span>
        <span className="tag">Design Systems</span>
        <span className="tag">AI Product Design</span>
        <span className="tag">Accessibility · CPACC</span>
        <span className="tag">Front-End Development</span>
      </div>
    </motion.section>
  )
}
