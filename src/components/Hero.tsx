import { useEffect, useRef, useState } from 'react'
import { MdArrowForward, MdDownload } from 'react-icons/md'
import ResumeRequestModal from './ResumeRequestModal'

const ROLES = [
  'Senior Data Engineer',
  'Azure & Fabric Specialist',
  'Data Platform Architect',
  'Real-Time Streaming Engineer',
  'Lakehouse Architect',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((r) => (r + 1) % ROLES.length)
    }

    setDisplayText(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 80
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} id="hero-canvas" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-cyan/5 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-gray-300">Hello, I'm</span>
          <br />
          <span className="text-gradient">Prasoon Garg</span>
        </h1>

        {/* Animated role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl font-mono text-brand-cyan">
            {displayText}
            <span className="typed-cursor" />
          </p>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Engineering mission-critical data platforms — real-time event streaming,{' '}
          <span className="text-brand-cyan font-medium">Lakehouse architecture</span> &{' '}
          petabyte-scale ETL on{' '}
          <span className="text-brand-blue font-medium">Azure</span>,{' '}
          <span className="text-brand-blue font-medium">Microsoft Fabric</span> &{' '}
          <span className="text-brand-purple font-medium">Databricks</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-medium text-sm hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-brand-blue/30 active:scale-95"
          >
            View My Work
            <MdArrowForward size={18} />
          </button>
          <button
            type="button"
            onClick={() => setIsResumeOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-gray-300 rounded-xl font-medium text-sm hover:border-brand-blue/50 hover:text-white hover:bg-brand-blue/5 transition-all duration-200 active:scale-95"
          >
            Contact Me/Request Resume
            <MdDownload size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '5+', label: 'Years at Scale' },
            { value: '3', label: 'Azure Certifications' },
            { value: '40+', label: 'Delta Tables' },
            { value: '3', label: 'Industry Domains' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ResumeRequestModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  )
}
