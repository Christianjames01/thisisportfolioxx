import { profile } from '../data/profile'
import { practicalExperience } from '../data/skills'
import SectionHeader from './SectionHeader'

const OPTIONAL_SECTIONS = [
  { key: 'internships', title: 'Internships' },
  { key: 'volunteer', title: 'Volunteer experience' },
  { key: 'freelance', title: 'Freelance work' },
]

function EntryList({ title, entries }) {
  return (
    <div className="exp-optional reveal">
      <h3 className="label">{title}</h3>
      <ul className="exp-entries">
        {entries.map((e) => (
          <li key={`${e.title}-${e.organization}`} className="exp-entry">
            <div className="exp-entry__head">
              <strong>{e.title}</strong>
              {e.period && <span>{e.period}</span>}
            </div>
            {e.organization && <p className="exp-entry__org">{e.organization}</p>}
            {e.description && <p>{e.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  const filled = OPTIONAL_SECTIONS.filter((s) => profile[s.key]?.length)
  const certs = profile.certifications

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader index="04" label="Practical Experience" id="experience-title" title={<>Experience <em>through projects.</em></>}>
          I haven’t held a paid IT position yet. This is the hands-on experience I’ve gained from academic and personal projects.
        </SectionHeader>

        <ol className="exp-grid">
          {practicalExperience.map((item, i) => (
            <li key={item.title} className="exp-card reveal">
              <span className="exp-card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>

        {filled.map((s) => (
          <EntryList key={s.key} title={s.title} entries={profile[s.key]} />
        ))}

        {certs.length > 0 && (
          <div className="exp-optional reveal">
            <h3 className="label">Certifications</h3>
            <ul className="exp-entries">
              {certs.map((c) => (
                <li key={c.name} className="exp-entry">
                  <div className="exp-entry__head">
                    <strong>{c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a> : c.name}</strong>
                    {c.year && <span>{c.year}</span>}
                  </div>
                  {c.issuer && <p className="exp-entry__org">{c.issuer}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
