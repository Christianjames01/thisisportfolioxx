import { useState } from 'react'
import { profile } from '../data/profile'
import { useFileExists } from '../hooks/hooks'
import ResumeButton from './ResumeButton'
import SocialLinks from './SocialLinks'
import { ArrowRight, MapPin } from './Icons'

function Portrait() {
  const { photo, initials, name } = profile
  const [failed, setFailed] = useState(false)

  return (
    <figure className="portrait">
      <div className="portrait__frame">
        {failed ? (
          <div className="portrait__fallback" role="img" aria-label={`${name} — photo coming soon`}>
            <span>{initials}</span>
          </div>
        ) : (
          <img
            src={photo.src}
            alt={photo.alt}
            width="720"
            height="900"
            style={{ objectPosition: photo.position }}
            onError={() => setFailed(true)}
            fetchPriority="high"
          />
        )}
      </div>
      <figcaption className="portrait__caption">
        <MapPin width={14} height={14} />
        {profile.location}
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  const hasResume = useFileExists(profile.resume.src, 'pdf')

  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow hero__status reveal">
            <span className="status-dot" aria-hidden="true" />
            {profile.status}
          </p>

          <h1 id="hero-name" className="hero__name reveal">
            {profile.name}
          </h1>

          <p className="hero__headline reveal">{profile.headline}</p>

          <p className="hero__intro reveal">{profile.intro}</p>

          <div className="hero__actions reveal">
            <a href="#projects" className="btn btn--primary">
              View My Projects <ArrowRight />
            </a>
            <ResumeButton available={hasResume} />
            <a href="#contact" className="text-link">
              Contact Me
            </a>
          </div>

          <SocialLinks className="hero__social reveal" />
        </div>

        <div className="hero__media reveal">
          <Portrait />
        </div>
      </div>
    </section>
  )
}
