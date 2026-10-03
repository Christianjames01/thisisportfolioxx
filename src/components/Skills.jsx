import { levels, skillGroups } from '../data/skills'
import SectionHeader from './SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="section section--muted" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader index="03" label="Skills" id="skills-title" title={<>Tools I <em>work with.</em></>}>
          An honest snapshot of where I am. These are skills I’ve used in my own projects and coursework — not claims of expertise.
        </SectionHeader>

        <dl className="level-key reveal" aria-label="Proficiency levels">
          {Object.entries(levels).map(([name, text]) => (
            <div key={name} className="level-key__item">
              <dt>
                <span className={`level-dot level-dot--${name.toLowerCase()}`} aria-hidden="true" />
                {name}
              </dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group reveal">
              <h3 className="skill-group__title">{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="skill">
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__level">
                      <span className={`level-dot level-dot--${skill.level.toLowerCase()}`} aria-hidden="true" />
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
