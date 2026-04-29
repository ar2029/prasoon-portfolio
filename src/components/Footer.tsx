import { MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-secondary/50 border-t border-white/5">
      <div className="container-max px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-heading font-bold text-gradient mb-3">
              Prasoon Garg
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Senior Data Engineer specializing in Azure Cloud, Microsoft Fabric, and Databricks.
              Building scalable data platforms that drive business value.
            </p>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <MdLocationOn size={14} />
              Gurgaon, India
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {/* <a
                href="mailto:abc@gmail.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <MdEmail size={16} className="text-brand-blue" />
                abc@gmail.com
              </a> */}
              <a
                href="https://linkedin.com/in/prasoon-garg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <FaLinkedin size={15} className="text-brand-blue" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ar2029"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <FaGithub size={15} className="text-gray-400" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Prasoon Garg. All rights reserved.</span>
          {/* <span>Built with React + TypeScript + Vite + Tailwind CSS</span> */}
        </div>
      </div>
    </footer>
  )
}
