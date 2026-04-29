import { MdWork, MdPeople, MdCalendarToday, MdCheckCircle } from 'react-icons/md'
import { Project } from '../../data/projects'
import Modal from '../ui/Modal'
import Badge from '../ui/Badge'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Modal isOpen={!!project} onClose={onClose} title={project.title} wide>
      <div className="space-y-6">
        {/* Meta row */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 pb-4 border-b border-white/5">
          <span className="flex items-center gap-1.5">
            <MdWork size={14} className="text-brand-blue" />
            {project.company}
          </span>
          <span className="flex items-center gap-1.5">
            <MdCalendarToday size={14} className="text-brand-cyan" />
            {project.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MdPeople size={14} className="text-brand-purple" />
            Team of {project.teamSize}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-xs font-mono">
            {project.domain}
          </span>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-2">Overview</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Architecture diagram placeholder */}
        {project.architectureDiagram ? (
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
              Architecture
            </h4>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
              <img
                src={`${import.meta.env.BASE_URL}${project.architectureDiagram}`}
                alt={`${project.title} architecture`}
                className="w-full"
              />
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-white/10 p-6 text-center text-gray-600 text-sm">
            Architecture diagram coming soon
          </div>
        )}

        {/* Key contributions */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
            Key Contributions
          </h4>
          <ul className="space-y-2.5">
            {project.contributions.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                <MdCheckCircle size={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="blue" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
            Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.languages.map((lang) => (
              <Badge key={lang} variant="cyan" size="sm">
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10">
          <h4 className="text-brand-blue font-semibold text-sm uppercase tracking-widest mb-2">
            Impact
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">{project.impact}</p>
        </div>
      </div>
    </Modal>
  )
}
