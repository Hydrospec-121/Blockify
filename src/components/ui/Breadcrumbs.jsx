import { Link } from 'react-router-dom'
import './Breadcrumbs.css'

/** items: [{ label, href }] — last item renders as plain text (current page) */
export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.label}>
              {isLast || !item.href ? (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              ) : (
                <Link to={item.href}>{item.label}</Link>
              )}
              {!isLast && <span className="breadcrumbs__sep" aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
