import { profile } from '../data/profile'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'

export default function Education({ onOpen }) {
  const edu = profile.education
  const academic = projects.filter((p) => p.kind === 'Academic')

  const extras = [
    { title: 'Relevant coursework', items: edu.coursework },
    { title: 'School activities', items: edu.activities },
    { title: 'Academic achievements', items: edu.achievements },
  ].filter((g) => g.items.length)

  return (
    <section id="education" className="section section--muted" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader index="05" label="Education" id="education-title" title={<>Where I’m <em>learning.</em></>} />

        <article className="edu-card reveal">
          <div className="edu-card__main">
            <p className="edu-card__status">
              <span className="status-dot" aria-hidden="true" />
              {edu.status}
              {edu.expectedGraduation && ` · Expected ${edu.expectedGraduation}`}
            </p>
            <h3 className="edu-card__degree">{edu.degree}</h3>
            <p className="edu-card__school">{edu.school}</p>
            <p className="edu-card__location">{edu.location}</p>
          </div>

          <div className="edu-card__side">
            {academic.length > 0 && (
              <div>
                <h4 className="label">Academic projects</h4>
                <ul className="edu-links">
                  {academic.map((p) => (
                    <li key={p.slug}>
                      <button type="button" className="text-link" onClick={() => onOpen(p.slug)}>
                        {p.title}
                      </button>
                      <span> — {p.category.split('·')[0].trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {extras.map((g) => (
              <div key={g.title}>
                <h4 className="label">{g.title}</h4>
                <ul className="detail-list">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
