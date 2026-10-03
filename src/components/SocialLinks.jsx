import { profile } from '../data/profile'
import { GitHub, LinkedIn, Mail } from './Icons'

/** Small icon links. Only renders the profiles that are filled in. */
export default function SocialLinks({ className = '' }) {
  const { github, linkedin, email } = profile.contact
  const items = [
    github && { href: github, label: 'GitHub', Icon: GitHub, external: true },
    linkedin && { href: linkedin, label: 'LinkedIn', Icon: LinkedIn, external: true },
    email && { href: `mailto:${email}`, label: 'Email', Icon: Mail },
  ].filter(Boolean)

  if (!items.length) return null

  return (
    <ul className={`social ${className}`} aria-label="Profiles">
      {items.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            className="social__link"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon width={16} height={16} />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
