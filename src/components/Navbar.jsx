import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, personalInfo } from '../data/portfolioData'

const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false)

  const handleNavClick = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-4 z-50 w-full px-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 shadow-[0_12px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl">
        <button
          onClick={() => handleNavClick('home')}
          className="text-sm font-semibold tracking-[0.2em] text-blue-300 transition hover:text-blue-200"
        >
          {personalInfo.shortName}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition ${
                  activeSection === link.id
                    ? 'text-blue-300'
                    : 'text-slate-300 hover:text-blue-200'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-white/10 bg-slate-900/90 p-4 backdrop-blur-xl md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    activeSection === link.id
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
