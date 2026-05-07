import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import GlassCard from './ui/GlassCard'
import { testimonials } from '../data/portfolioData'

const Testimonial = () => {
  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          title="What Clients Say"
          subtitle="Testimonials"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="group flex h-full flex-col justify-between p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                
                {/* Rating (optional) */}
                {item.rating && (
                  <div className="mb-3 text-yellow-400">
                    {'★'.repeat(item.rating)}
                  </div>
                )}

                {/* Message */}
                <p className="text-sm leading-relaxed text-slate-300">
                  “{item.message}”
                </p>

                {/* Client Info */}
                <div className="mt-6 flex items-center gap-3">

                  {/* Logo or Initial */}
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-contain bg-white"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-300">
                      {item.name.charAt(0)}
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-slate-100">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role}
                    </p>
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

export default Testimonial