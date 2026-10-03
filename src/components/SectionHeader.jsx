/** Consistent numbered section heading used across the page. */
export default function SectionHeader({ index, label, title, id, children }) {
  return (
    <div className="section-header reveal">
      <p className="eyebrow">
        <span className="section-header__index">{index}</span> {label}
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {children && <p className="section-lead">{children}</p>}
    </div>
  )
}
