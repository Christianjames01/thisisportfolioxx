import { useEffect, useRef } from 'react'
import { BrowserFrame, VaultPreview } from './ProjectMedia'
import { ArrowUpRight, Close, GitHub } from './Icons'

function Block({ title, children }) {
  return (
    <section className="detail-block">
      <h3 className="detail-block__title">{title}</h3>
      <div className="detail-block__body">{children}</div>
    </section>
  )
}

const List = ({ items }) => (
  <ul className="detail-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

function Workflow({ steps }) {
  return (
    <ol className={`workflow ${steps.length > 4 ? "workflow--3" : ""}`} style={{ "--cols": steps.length > 4 ? 3 : steps.length }}>
      {steps.map((step, i) => (
        <li key={step.title} className="workflow__step">
          <span className="workflow__num" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="workflow__actor">{step.actor}</span>
          <strong className="workflow__title">{step.title}</strong>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

/**
 * Full-screen project detail view, built on the native <dialog> element
 * for focus trapping, Escape-to-close, and screen-reader support.
 */
export default function ProjectDetail({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const returnFocus = document.activeElement
    if (!dialog.open) dialog.showModal()
    dialog.scrollTop = 0
    document.documentElement.classList.add('has-dialog')
    return () => {
      document.documentElement.classList.remove('has-dialog')
      if (returnFocus instanceof HTMLElement) returnFocus.focus({ preventScroll: true })
    }
  }, [project])

  if (!project) return null
  const { links } = project

  return (
    <dialog
      ref={ref}
      className="detail"
      aria-labelledby="detail-title"
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <div className="detail__panel">
        <div className="detail__topbar">
          <span className="eyebrow">
            Project {project.number} · {project.kind}
          </span>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close project details">
            <Close />
          </button>
        </div>

        <header className="detail__header">
          <p className="detail__category">{project.category}</p>
          <h2 id="detail-title" className="detail__title">
            {project.title}
          </h2>
          {project.fullTitle !== project.title && <p className="detail__fulltitle">{project.fullTitle}</p>}

          <dl className="detail__glance">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{project.stack.slice(0, 3).join(', ')}</dd>
            </div>
          </dl>

          {(links.github || links.demo) && (
            <div className="detail__links">
              {links.github && (
                <a className="btn btn--primary" href={links.github} target="_blank" rel="noopener noreferrer">
                  <GitHub width={16} height={16} /> View Repository
                </a>
              )}
              {links.demo && (
                <a className="btn btn--secondary" href={links.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo <ArrowUpRight width={16} height={16} />
                </a>
              )}
            </div>
          )}
        </header>

        <div className="detail__content">
          <Block title="Overview">
            <p>{project.overview}</p>
          </Block>

          <Block title="Problem">
            <p>{project.problem}</p>
          </Block>

          <Block title="Objectives">
            <List items={project.objectives} />
          </Block>

          <Block title="Target users">
            <ul className="tag-list">
              {project.users.map((u) => (
                <li key={u} className="tag">
                  {u}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="My role">
            <p className="detail__role">{project.role}</p>
            <List items={project.contributions} />
          </Block>

          <Block title="Technology">
            <ul className="chip-list">
              {project.stack.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Features">
            <ul className="feature-grid">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            {project.planned.length > 0 && (
              <>
                <h4 className="detail__subhead">Planned — not built yet</h4>
                <List items={project.planned} />
              </>
            )}
          </Block>

          <Block title="System workflow">
            <Workflow steps={project.workflow} />
          </Block>

          <Block title="Interface">
            {project.screenshots.length > 0 ? (
              <div className="shots">
                {project.screenshots.map((s) => (
                  <BrowserFrame key={s.src} {...s} />
                ))}
              </div>
            ) : project.preview === 'vault' ? (
              <div className="detail__preview">
                <VaultPreview />
                <p className="detail__muted">
                  A simplified illustration of the vault layout. The real app uses a strict black-and-white, offline-only interface on Windows and Android.
                </p>
              </div>
            ) : (
              <p className="detail__muted">Screenshots will be added soon.</p>
            )}
          </Block>

          <Block title="Challenges">
            <List items={project.challenges} />
          </Block>

          <Block title="Lessons learned">
            <List items={project.lessons} />
          </Block>

          {project.limitations && (
            <Block title="Known limits">
              <p>{project.limitations}</p>
            </Block>
          )}

          <Block title="Current status">
            <p>{project.status}</p>
            {project.note && <p className="detail__muted">{project.note}</p>}
          </Block>
        </div>
      </div>
    </dialog>
  )
}
