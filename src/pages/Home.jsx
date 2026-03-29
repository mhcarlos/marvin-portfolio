import { useRef } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const workRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Nav
        onWork={() => scrollTo(workRef)}
        onAbout={() => scrollTo(aboutRef)}
        onContact={() => scrollTo(contactRef)}
      />
      <Hero onWork={() => scrollTo(workRef)} />
      <Work ref={workRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}
