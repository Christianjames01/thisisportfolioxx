import { otherProjects, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import { ArrowUpRight, GitHub } from './Icons'

export default function Projects({ onOpen }) {
  return (
    <section id="projects" className="section section--projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader index="02" label="Projects" id="projects-title" title={<>Selected <em>work.</em></>}>
          Academic and personal systems I’ve built. Each one is labelled with what kind of project it is and its current status.
        </SectionHeader>

        <div className="project-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} onOpen={onOpen} reverse={i % 2 === 1} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="other-projects reveal">
            <h3 className="other-projects__title">Other projects</h3>
            <ul className="other-projects__list">
              {otherProjects.map((p) => (
                <li key={p.title} className="other-project">
                  <div>
                    <p className="other-project__type">{p.type}</p>
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                    {p.stack?.length > 0 && <p className="other-project__stack">{p.stack.join(' · ')}</p>}
                  </div>
                  <div className="other-project__links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}>
                        <GitHub width={16} height={16} />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>
                        <ArrowUpRight width={16} height={16} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
