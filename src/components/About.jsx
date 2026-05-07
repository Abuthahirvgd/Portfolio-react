import { motion } from 'framer-motion'
import { HiAcademicCap, HiSparkles, HiTrendingUp } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import GlassCard from './ui/GlassCard'
import { aboutSummary, education, strengths } from '../data/portfolioData'

const icons = [HiTrendingUp, HiSparkles, HiAcademicCap]

const About = () => {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <GlassCard className="p-6 sm:p-8">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{aboutSummary}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {strengths.map((strength, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <Icon className="mb-3 text-2xl text-blue-300" />
                  <p className="text-sm text-slate-300">{strength}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-8 rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-blue-300">Education</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-100">{education.degree}</h3>
            <p className="mt-1 text-sm text-slate-300">{education.university}</p>
            <p className="mt-1 text-sm text-slate-400">{education.grade}</p>
            <p className="mt-1 text-sm text-slate-400">{education.duration}</p>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

export default About
