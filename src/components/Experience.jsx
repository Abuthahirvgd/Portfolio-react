import { motion } from 'framer-motion'
import { HiOfficeBuilding } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import GlassCard from './ui/GlassCard'
import { experiences } from '../data/portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience Timeline" subtitle="Career Journey" />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-3 top-2 hidden h-[96%] w-px bg-gradient-to-b from-blue-500/20 via-blue-400 to-cyan-300/20 md:block" />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative md:pl-10"
              >
                <span className="absolute left-0 top-5 hidden h-6 w-6 items-center justify-center rounded-full border border-blue-400/40 bg-slate-900 text-blue-300 md:flex">
                  <HiOfficeBuilding size={14} />
                </span>
                <GlassCard className="p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-300">
                    {exp.duration}
                  </p>

                  {/* Top Row: Logo + Role */}
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-10 w-10 rounded-md object-contain bg-white p-1"
                    />

                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-slate-300">
                        {exp.company} - {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience