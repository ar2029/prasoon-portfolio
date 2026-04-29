import { MdOpenInNew, MdPeople, MdCalendarToday } from 'react-icons/md'
import { Project } from '../../data/projects'
import Badge from '../ui/Badge'

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <div
      className="project-card group relative flex flex-col rounded-2xl bg-bg-card border border-white/5 overflow-hidden hover:border-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1 cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Number + domain strip */}
      <div className="px-5 pt-5 pb-4 border-b border-white/5">
        <div className="flex items-start justify-between">
          <span className="text-4xl font-heading font-bold text-white/5 select-none leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 font-mono">
            {project.domain}
          </span>
        </div>
        <h3 className="text-white font-heading font-bold text-xl mt-2">{project.title}</h3>
        <p className="text-brand-cyan text-xs font-medium mt-0.5">{project.company}</p>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex-1 flex flex-col gap-4">
        <p className="text-gray-400 text-sm leading-relaxed">{project.shortDescription}</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <MdCalendarToday size={12} />
            {project.duration}
          </span>
          <span className="flex items-center gap-1">
            <MdPeople size={12} />
            Team of {project.teamSize}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="gray" size="sm">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="gray" size="sm">+{project.tags.length - 4}</Badge>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <button
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-blue/20 text-brand-blue text-sm font-medium hover:bg-brand-blue hover:text-white transition-all duration-200 group-hover:border-brand-blue"
          onClick={(e) => { e.stopPropagation(); onOpen(project) }}
        >
          View Details
          <MdOpenInNew size={14} />
        </button>
      </div>
    </div>
  )
}
