import { MdVerified } from 'react-icons/md'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-bg-secondary/30">
      <div className="container-max px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">
            // certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Microsoft Certifications
          </h2>
        </div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-brand-blue/30 transition-all duration-300 card-hover"
            >
              {/* Badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                  <span className="text-brand-blue font-heading font-bold text-sm text-center leading-tight px-1">
                    {cert.code}
                  </span>
                </div>
                <MdVerified size={22} className="text-brand-blue opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <h3 className="text-white font-heading font-semibold text-sm mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-brand-blue text-xs font-medium mb-3">{cert.issuer}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
