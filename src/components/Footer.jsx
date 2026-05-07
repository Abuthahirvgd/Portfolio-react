import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaThreads,
  FaGithub
} from 'react-icons/fa6'
import { HiMail, HiPhone } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

        <p className="text-xs text-slate-400">
          {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">

          {/* Github */}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaGithub size={14} />
          </a>

          {/* LinkedIn */}
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaLinkedinIn size={14} />
          </a>

          {/* Email */}
          <a href={`mailto:${personalInfo.email}`} className="icon-btn">
            <HiMail size={14} />
          </a>

          {/* Call */}
          <a href={`callto:${personalInfo.phone}`} className="icon-btn">
            <HiPhone size={12} />
          </a>

          {/* WhatsApp */}
          <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaWhatsapp size={14} />
          </a>

          {/* Facebook */}
          <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaFacebookF size={14} />
          </a>

          {/* Instagram */}
          <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaInstagram size={14} />
          </a>

          {/* YouTube */}
          <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaYoutube size={14} />
          </a>

          {/* X (Twitter) */}
          <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaXTwitter size={14} />
          </a>

          {/* Threads */}
          <a href={personalInfo.threads} target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaThreads size={14} />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
