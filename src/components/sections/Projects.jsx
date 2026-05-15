import SectionWrapper from '../ui/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="section-subheading">03. Projects</p>
      <h2 className="section-heading mb-4">Things I've Built</h2>
      <p className="text-white/40 text-sm font-mono mb-12">
        End-to-end systems, from data ingestion to deployed APIs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
