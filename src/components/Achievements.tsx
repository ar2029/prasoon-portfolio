import { achievements } from '../data/certifications'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-max px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">
            // achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Recognition
          </h2>
        </div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div
              key={a.id}
              className="p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-brand-cyan/20 transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{a.icon}</div>

              {/* Info */}
              <h3 className="text-white font-heading font-semibold text-base mb-1">
                {a.title}
              </h3>
              <p className="text-brand-cyan text-xs font-medium mb-3">{a.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
