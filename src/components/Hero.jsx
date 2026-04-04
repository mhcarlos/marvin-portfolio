import { useState } from 'react'
import { motion } from 'framer-motion'

const HEADLINES = [
  "Hire Marvin. He's totally not AI.",
  "100% human-generated pixels. No hallucinations.",
  "I passed the Turing test. Also the CPACC.",
  "Not a design system. An actual designer.",
  "Your AI can't argue with stakeholders in a design review.",
]

const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function Hero({ onWork }) {
  const [headline] = useState(() => HEADLINES[Math.floor(Math.random() * HEADLINES.length)])

  return (
    <motion.section
      className="pt-16 pb-4"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.p variants={fade} className="text-sm tracking-widest uppercase text-neutral-600 dark:text-neutral-400 mb-6">
        Lead Product Designer · New York
      </motion.p>

      <motion.h1
        variants={fade}
        className="font-display text-neutral-900 dark:text-neutral-100 max-w-4xl mb-6"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.05 }}
      >
        {headline}
      </motion.h1>

      <motion.p variants={fade} className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl leading-relaxed font-light mb-8">
        10+ years leading product design, design systems, and AI-driven features at Intuit,
        Morgan Stanley, American Express, Mastercard, AOL, and Time Inc. CPACC-certified.
      </motion.p>

      <motion.div variants={fade} className="flex flex-wrap gap-2">
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
