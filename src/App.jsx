import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MouseFollower from './components/MouseFollower'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'
import { navLinks } from './data/portfolioData'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const currentSection = [...navLinks]
        .reverse()
        .find(({ id }) => {
          const section = document.getElementById(id)
          return section && section.getBoundingClientRect().top <= 120
        })

      setActiveSection(currentSection?.id ?? 'home')
    }

    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection()

    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <>
      <MouseFollower />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App