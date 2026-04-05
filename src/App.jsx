import { useRef } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudy from './pages/CaseStudy'
import ContactPage from './pages/ContactPage'

function HomePage() {
  const workRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="max-w-7xl mx-auto px-10">
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<CaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}
