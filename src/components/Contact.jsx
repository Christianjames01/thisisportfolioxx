import { profile } from '../data/profile'
import { useFileExists } from '../hooks/hooks'
import ResumeButton from './ResumeButton'
import { ArrowUpRight, GitHub, LinkedIn, Mail, MapPin } from './Icons'

export default function Contact() {
  const { email, github, linkedin } = profile.contact
  const hasResume = useFileExists(profile.resume.src, 'pdf')

  return (
    <section id="contact" className="section section--dark" aria-labelledby="contact-title">
      <div className="container contact">
        <p className="eyebrow reveal">
          <span className="section-header__index">06</span> Contact
        </p>
        <h2 id="contact-title" className="contact__title reveal">
          Let’s <em>connect.</em>
        </h2>
        <p className="contact__lead reveal">
          I’m currently building my skills and looking for an opportunity to contribute, learn, and grow in the IT industry.
        </p>

        <div className="contact__actions reveal">
          {email && (
            <a className="btn btn--light" href={`mailto:${email}`}>
              <Mail /> Email Me
            </a>
          )}
          {github && (
            <a className="btn btn--outline-light" href={github} target="_blank" rel="noopener noreferrer">
              <GitHub width={16} height={16} /> View GitHub
            </a>
          )}
          {linkedin && (
            <a className="btn btn--outline-light" href={linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn width={16} height={16} /> Connect on LinkedIn
            </a>
          )}
          <ResumeButton available={hasResume} variant="outline-light" />
        </div>

        <dl className="contact__details reveal">
          {email && (
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
          )}
          {github && (
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  {github.replace(/^https?:\/\/(www\.)?/, '')} <ArrowUpRight width={14} height={14} />
                </a>
              </dd>
            </div>
          )}
          {linkedin && (
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  {linkedin.replace(/^https?:\/\/(www\.)?/, '')} <ArrowUpRight width={14} height={14} />
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt>Location</dt>
            <dd>
              <MapPin width={14} height={14} /> {profile.location}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
