import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudy from './pages/CaseStudy'
import ContactPage from './pages/ContactPage'
import WorkPage from './pages/WorkPage'

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Nav />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/project/:id" element={<CaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}
