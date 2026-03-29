import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function Hero({ onWork }) {
  return (
    <motion.section
      className="py-16 pb-8"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.p variants={fade} className="tracking-widest uppercase text-neutral-400 mb-6" style={{ fontSize: '11px' }}>
        Lead Product Designer · New York
      </motion.p>

      <motion.h1
        variants={fade}
        className="font-display text-neutral-900 max-w-2xl mb-6"
        style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', lineHeight: '1.05' }}
      >
        Designing experiences that blend product, UX, and{' '}
        <em className="not-italic" style={{ color: 'var(--accent)' }}>technical precision</em>
      </motion.h1>

      <motion.p variants={fade} className="text-base text-neutral-700 max-w-xl leading-relaxed font-light mb-8">
        10+ years leading product design, design systems, and AI-driven features at Intuit,
        Morgan Stanley, American Express, Mastercard, AOL, and Time Inc. CPACC-certified.
      </motion.p>

      <motion.div variants={fade} className="flex flex-wrap gap-2">
        <span
          className="px-3 py-1 rounded-full font-normal tracking-wide"
          style={{ fontSize: '11px', background: 'var(--accent-light)', color: 'var(--accent)' }}
        >
          Available for contracts
        </span>
        <span className="tag">Fintech</span>
        <span className="tag">Enterprise SaaS</span>
        <span className="tag">Design Systems</span>
        <span className="tag">AI Product Design</span>
        <span className="tag">Accessibility · CPACC</span>
        <span className="tag">Front-End Development</span>
      </motion.div>
    </motion.section>
  )
}
