import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

const roles = ['Software Engineer', 'Full Stack Developer', 'Mern Stack Expert']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 50 : 90

    const timeout = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1),
      )

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, roleIndex])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
            {personalInfo.pre}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-6xl">
            Hi, I&apos;m <span className="text-blue-400">{personalInfo.shortName}</span>
          </h1>
          <p className="mx-auto mt-6 h-8 text-lg text-slate-300 sm:text-2xl lg:mx-0">
            {typedText}
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-blue-300 align-middle" />
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-sm text-slate-400 sm:text-base lg:mx-0">
            I design and engineer high-performance web products with premium UI/UX, scalable
            architecture, and business-first execution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">

            {/* View Projects Button */}
            <button
              onClick={() => scrollToSection('projects')}
              className="relative overflow-hidden group inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3 text-sm font-semibold text-white"
            >
              {/* Sliding Background */}
              <span className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              {/* Text */}
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                View Projects
                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden group rounded-full border border-blue-500 px-6 py-3 text-sm font-semibold text-slate-200"
            >
              {/* Sliding Background */}
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Hire Me
              </span>
            </button>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-[2rem] p-3">
            <img
              src="/abu.png"
              alt="Portrait of Abu Thahir"
              className="h-[430px] w-full rounded-[1.4rem] object-cover object-center grayscale-0 transition duration-500 group-hover:grayscale sm:h-[500px] lg:h-[520px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
