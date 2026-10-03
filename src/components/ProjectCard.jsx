import ProjectMedia from './ProjectMedia'
import { ArrowRight, ArrowUpRight, GitHub } from './Icons'

export default function ProjectCard({ project, onOpen, reverse = false }) {
  const { links } = project

  return (
    <article className={`project-card reveal ${reverse ? 'project-card--reverse' : ''}`} aria-labelledby={`${project.slug}-title`}>
      <button
        type="button"
        className="project-card__media"
        onClick={() => onOpen(project.slug)}
        aria-label={`View details for ${project.title}`}
        tabIndex={-1}
      >
        <ProjectMedia project={project} />
      </button>

      <div className="project-card__body">
        <p className="project-card__meta">
          <span className="project-card__num">{project.number}</span>
          <span>{project.category}</span>
        </p>

        <h3 id={`${project.slug}-title`} className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__summary">{project.summary}</p>

        <dl className="project-card__facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>

        <ul className="project-card__features">
          {project.features.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <ul className="chip-list" aria-label="Technologies">
          {project.stack.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          <button type="button" className="btn btn--primary" onClick={() => onOpen(project.slug)}>
            View Details <ArrowRight />
          </button>
          {links.github && (
            <a className="btn btn--ghost" href={links.github} target="_blank" rel="noopener noreferrer">
              <GitHub width={16} height={16} /> GitHub
            </a>
          )}
          {links.demo && (
            <a className="btn btn--ghost" href={links.demo} target="_blank" rel="noopener noreferrer">
              Live Demo <ArrowUpRight width={16} height={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
