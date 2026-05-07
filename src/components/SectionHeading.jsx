import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
        {subtitle}
      </p>
      <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">{title}</h2>
    </motion.div>
  )
}

export default SectionHeading
