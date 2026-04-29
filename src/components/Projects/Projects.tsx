import { useState, useRef } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import projects, { Project } from '../../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollTrack = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-max px-6">
        {/* Heading */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">
              // projects
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Featured Work
            </h2>
          </div>

          {/* Scroll controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollTrack('left')}
              className="w-10 h-10 rounded-xl border border-white/10 text-gray-400 hover:border-brand-blue/40 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Scroll left"
            >
              <MdChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollTrack('right')}
              className="w-10 h-10 rounded-xl border border-white/10 text-gray-400 hover:border-brand-blue/40 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Scroll right"
            >
              <MdChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div ref={trackRef} className="projects-track pb-4">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpen={setSelectedProject}
            />
          ))}

          {/* Placeholder "Coming Soon" card */}
          <div className="project-card flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-bg-card/30 p-8 text-center">
            <div className="text-4xl mb-3">🚧</div>
            <p className="text-gray-500 text-sm font-medium">More projects</p>
            <p className="text-gray-600 text-xs mt-1">coming soon</p>
          </div>
        </div>
      </div>

      {/* Project detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
