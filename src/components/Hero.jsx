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

      <motion.h1
        variants={fade}
        className="font-display max-w-4xl mb-6 text-neutral-900 dark:text-neutral-100"
        style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
      >
        All things being equal, the{' '}
        <span className="gradient-text">simplest</span>{' '}
        solution is the best.
      </motion.h1>

      <motion.p
        variants={fade}
        className="text-sm tracking-widest text-neutral-400 dark:text-neutral-600 mb-12 font-light"
      >
        —Occam's Razor
      </motion.p>

      <motion.p variants={fade} className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed font-light mb-12">
        Marvin Carlos is a product designer based in New York City. For over 17 years that idea has
        shaped his work — turning complex, high-stakes software in finance, enterprise, and now AI
        into products people actually want to use.
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
