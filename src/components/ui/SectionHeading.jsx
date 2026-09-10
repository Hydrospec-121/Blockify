import { Link } from 'react-router-dom'
import './SectionHeading.css'

export function SectionHeading({ title, subtitle, actionLabel, actionHref }) {
  return (
    <div className="section-heading">
      <div>
        <h2 className="section-heading__title font-display">{title}</h2>
        {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      </div>
      {actionLabel && actionHref && (
        <Link className="section-heading__action" to={actionHref}>
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
