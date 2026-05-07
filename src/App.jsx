import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import MouseFollower from './components/MouseFollower'
import { navLinks } from './data/portfolioData'
import Testimonial from './components/Testimonial'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <MouseFollower />
      <div className="relative min-h-screen overflow-x-hidden bg-[#020617] text-slate-100">
        <Navbar activeSection={activeSection} />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Testimonial />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

export default App