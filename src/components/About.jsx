import { profile } from '../data/profile'
import SectionHeader from './SectionHeader'

export default function About() {
  const { about, seeking } = profile

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader index="01" label="About" id="about-title" title={<>A student who learns <em>by building.</em></>} />

        <div className="about__grid">
          <div className="about__body reveal">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            <div className="about__seeking">
              <h3 className="label">Open to</h3>
              <ul className="tag-list">
                {seeking.map((role) => (
                  <li key={role} className="tag">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="about__interests reveal" aria-labelledby="interests-title">
            <h3 id="interests-title" className="label">
              Interests
            </h3>
            <ol className="interest-list">
              {about.interests.map((item, i) => (
                <li key={item}>
                  <span className="interest-list__num">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="bring reveal">
          <h3 className="bring__title">What I bring</h3>
          <ul className="bring__grid">
            {about.whatIBring.map((item) => (
              <li key={item.title} className="bring__item">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
