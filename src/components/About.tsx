import { useEffect, useRef } from 'react'

const highlights = [
  { value: '5+', label: 'Years Experience', sub: 'Cloud Data Engineering' },
  { value: '3', label: 'Industry Domains', sub: 'Finance · Insurance · Workplace' },
  { value: '3', label: 'Azure Certifications', sub: 'AZ-900 · DP-900 · SC-900' },
  { value: '40+', label: 'Delta Tables Designed', sub: 'Microsoft Fabric Lakehouse' },
]

const education = [
  {
    degree: 'B.Tech — Computer Science',
    institution: 'Maharshi Dayanand University, Rohtak',
    year: '2016 – 2020',
  },
  {
    degree: 'Senior Secondary (XII) — CBSE',
    institution: 'Delhi',
    year: '2015 – 2016',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.classList.remove('section-hidden')
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-max px-6">
        {/* Heading */}
        <div className="reveal section-hidden mb-12">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">
            // about me
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="reveal section-hidden space-y-6">
            <p className="text-gray-300 leading-relaxed text-base">
              Senior Data Engineer with <span className="text-brand-blue font-medium">5+ years</span> architecting
              and shipping production-grade data infrastructure for enterprise workloads — from
              real-time event streaming and ACID-compliant Lakehouse design to end-to-end ETL orchestration
              at petabyte scale.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Deep expertise in <span className="text-brand-cyan font-medium">PySpark</span>,{' '}
              <span className="text-brand-cyan font-medium">Delta Lake</span>, and distributed data processing
              across <span className="text-brand-cyan font-medium">Azure Cloud</span>,{' '}
              <span className="text-brand-cyan font-medium">Microsoft Fabric</span>, and{' '}
              <span className="text-brand-cyan font-medium">Databricks</span>. Delivered mission-critical
              platforms spanning Workplace Analytics, Insurance, and Finance — enabling C-suite decisions
              through unified data models, real-time KPI pipelines, and self-serve BI layers.
            </p>

            {/* Education */}
            <div className="pt-4">
              <h3 className="text-white font-semibold font-heading mb-4 text-sm uppercase tracking-widest">
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-white/5"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-medium">{edu.degree}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{edu.institution}</div>
                      <div className="text-brand-cyan text-xs mt-0.5 font-mono">{edu.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight stats */}
          <div className="reveal section-hidden grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-brand-blue/20 transition-colors card-hover"
              >
                <div className="text-4xl font-heading font-bold text-gradient mb-2">
                  {item.value}
                </div>
                <div className="text-white text-sm font-semibold mb-1">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
