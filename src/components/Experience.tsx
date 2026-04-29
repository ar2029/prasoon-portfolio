import { MdLocationOn, MdCalendarToday, MdWork } from 'react-icons/md'
import experience from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-bg-secondary/30">
      <div className="container-max px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">
            // career
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/0 via-brand-blue/40 to-brand-blue/0" />

          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.id} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-1.5 md:left-5 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    job.current
                      ? 'border-brand-cyan bg-brand-cyan/20'
                      : 'border-brand-blue/60 bg-bg-primary'
                  }`}
                >
                  {job.current && (
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`p-6 rounded-2xl border transition-colors card-hover ${
                    job.current
                      ? 'bg-bg-card border-brand-cyan/20 shadow-lg shadow-brand-cyan/5'
                      : 'bg-bg-card border-white/5'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-heading font-bold text-lg">{job.role}</h3>
                        {job.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-blue font-medium text-sm">
                        <MdWork size={14} />
                        {job.company}
                      </div>
                    </div>
                    <div className="text-right text-xs text-gray-500 space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <MdCalendarToday size={12} />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <MdLocationOn size={12} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{job.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="text-brand-cyan mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
