import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import GlassCard from './ui/GlassCard'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleWhatsAppSend = () => {
    const { name, email, message } = formData

    // ✅ Validation
    if (!name || !email || !message) {
      alert('Please fill all fields')
      return
    }

    // ✅ Format message
    const text = encodeURIComponent(
      `Hello, my name is ${name}\nEmail: ${email}\n\n${message}`
    )

    // ✅ Use your number from personalInfo OR hardcode
    const phoneNumber = personalInfo.phone.replace(/\D/g, '') // removes +, spaces etc

    const url = `https://wa.me/${phoneNumber}?text=${text}`

    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Let&apos;s Build Something Great" subtitle="Contact" />

        <div className="grid gap-6 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <GlassCard className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-100">Get In Touch</h3>
            <p className="mt-3 text-sm text-slate-300">
              Open to full-time roles, freelance projects, and product collaborations.
              Let&apos;s discuss how I can add value to your team.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <HiMail className="text-blue-300" /> {personalInfo.email}
              </p>
              <p className="flex items-center gap-3">
                <HiPhone className="text-blue-300" /> {personalInfo.phone}
              </p>
              <p className="flex items-center gap-3">
                <HiLocationMarker className="text-blue-300" /> {personalInfo.location}
              </p>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/20"
            >
              <FaLinkedinIn size={14} />
              Connect on LinkedIn
            </a>
          </GlassCard>

          {/* RIGHT SIDE FORM */}
          <GlassCard className="p-6 sm:p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400"
                />
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                type="button"
                onClick={handleWhatsAppSend}
                className="relative overflow-hidden group flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500 px-5 py-3 text-sm font-semibold text-white"
              >
                {/* Sliding Background */}
                <span className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

                {/* Text */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Send Message
                </span>
              </motion.button>

            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

export default Contact