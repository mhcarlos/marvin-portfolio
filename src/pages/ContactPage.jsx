import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DarkModeToggle from '../components/DarkModeToggle'

const FORMSPREE_URL = 'https://formspree.io/f/xlgoolwl'

export default function ContactPage() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-10">
      {/* Nav */}
      <nav className="flex justify-between items-center py-8 border-b border-neutral-200 dark:border-neutral-800 mb-12">
        <Link to="/" className="cursor-pointer">
          <span
            className="font-display text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 select-none"
            style={{ letterSpacing: '-0.03em' }}
          >
            MARVIN CARLOS
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className="nav-link">← Back</Link>
          <DarkModeToggle />
        </div>
      </nav>

      <motion.div
        className="max-w-lg mx-auto py-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-display text-3xl text-neutral-900 dark:text-neutral-100 mb-2" style={{ letterSpacing: '-0.02em' }}>
          Get in touch
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 font-light mb-10">
          Have a project in mind? Fill out the form and I'll get back to you.
        </p>

        {status === 'success' ? (
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 text-center">
            <p className="font-display text-xl text-neutral-900 dark:text-neutral-100 mb-2">Message sent!</p>
            <p className="text-base text-neutral-600 dark:text-neutral-400 font-light">Thanks for reaching out — I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={fields.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-base outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={fields.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-base outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={fields.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-base outline-none focus:border-[var(--accent)] transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-500">Something went wrong — please try again or email me directly.</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="self-start px-8 py-3 rounded-lg text-sm tracking-widest uppercase font-medium transition-opacity disabled:opacity-50"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}
