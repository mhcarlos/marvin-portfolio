import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

export default function Hero({ onWork }) {
  return (
    <motion.section
      className="relative pt-28 pb-28"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      <div className="hero-glow" />

      <motion.p variants={fade} className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-500 mb-8">
        Lead Product Designer · New York
      </motion.p>

      <motion.h1
        variants={fade}
        className="font-display max-w-4xl mb-8 text-neutral-900 dark:text-neutral-100"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.05 }}
      >
        Thoughtful design for <span className="dark-gradient-text">complex problems.</span>
      </motion.h1>

      <motion.p variants={fade} className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed font-light mb-12">
        17+ years shipping digital products — from front-end development to UX leadership to
        AI-driven product design. CPACC-certified.
      </motion.p>

      <motion.div variants={fade} className="flex flex-wrap gap-2.5">
        <span className="tag">Fintech</span>
        <span className="tag">Enterprise SaaS</span>
        <span className="tag">Design Systems</span>
        <span className="tag">AI Product Design</span>
        <span className="tag">Accessibility · CPACC</span>
      </motion.div>
    </motion.section>
  )
}
