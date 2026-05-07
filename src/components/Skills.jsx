import { motion } from 'framer-motion'
import { HiCode, HiServer, HiUserGroup } from 'react-icons/hi'
import SectionHeading from './SectionHeading'
import GlassCard from './ui/GlassCard'
import { skillCategories } from '../data/portfolioData'

const categoryIcons = [HiCode, HiServer, HiUserGroup]

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & Expertise" subtitle="Core Strengths" />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex]
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="text-2xl text-blue-300" />
                    <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex justify-between text-sm text-slate-300">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-700/50">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
