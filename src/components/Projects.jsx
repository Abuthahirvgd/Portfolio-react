import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import GlassCard from './ui/GlassCard'
import { projects } from '../data/portfolioData'

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Featured Projects" subtitle="Portfolio Highlights" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <GlassCard className="group flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">

                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay (optional) */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100"></div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200"
                    >
                      <HiExternalLink size={18} /> Live URL
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
