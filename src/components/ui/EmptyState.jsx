import { Link } from 'react-router-dom'
import { Button } from './Button'
import './EmptyState.css'

export function EmptyState({ title, description, actionLabel, actionHref }) {
  return (
    <div className="empty-state">
      <h3 className="font-display empty-state__title">{title}</h3>
      {description && <p className="empty-state__desc">{description}</p>}
      {actionLabel && actionHref && (
        <Button as={Link} to={actionHref} className="empty-state__action">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
