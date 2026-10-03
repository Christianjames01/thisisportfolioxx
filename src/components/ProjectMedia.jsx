import { useState } from 'react'

const VAULT_CATEGORIES = ['Banking', 'Cards', 'E-Wallets', 'Email', 'IDs & Government', 'Secure Notes']

/**
 * Simplified, hand-drawn-in-CSS illustration of the VaultLocks layout.
 * It is labelled as an illustration — it is not a screenshot.
 */
export function VaultPreview({ compact = false }) {
  return (
    <div className={`vault-preview ${compact ? 'vault-preview--compact' : ''}`} role="img" aria-label="Simplified illustration of the VaultLocks interface: a dark vault screen with a search bar and a list of categories">
      <div className="vault-preview__phone" aria-hidden="true">
        <div className="vault-preview__bar">
          <span className="vault-preview__lock" />
          <span className="vault-preview__brand">VAULT</span>
        </div>
        <div className="vault-preview__search">Search vault</div>
        <ul className="vault-preview__list">
          {VAULT_CATEGORIES.map((c) => (
            <li key={c}>
              <span className="vault-preview__icon" />
              <span>{c}</span>
              <span className="vault-preview__dots">••••</span>
            </li>
          ))}
        </ul>
      </div>
      <span className="vault-preview__label">Illustration</span>
    </div>
  )
}

/** Browser-window frame around a real screenshot. */
export function BrowserFrame({ src, alt, caption, eager = false }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="browser">
      <div className="browser__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {failed ? (
        <div className="browser__missing">Screenshot unavailable</div>
      ) : (
        <img
          src={src}
          alt={alt}
          width="1440"
          height="900"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

/** The main visual of a project card. */
export default function ProjectMedia({ project }) {
  const shot = project.screenshots[0]
  if (shot) return <BrowserFrame src={shot.src} alt={shot.alt} />
  if (project.preview === 'vault') return <VaultPreview compact />
  return (
    <div className="media-empty" aria-hidden="true">
      <span className="media-empty__title">{project.title}</span>
      <span className="media-empty__note">Screenshots coming soon</span>
    </div>
  )
}
