import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'
import './CategoryNav.css'

/**
 * Compact category switcher for category pages — a horizontal scroll
 * row on every breakpoint (simpler than duplicating the header's
 * mega-menu, and reads fine as a sidebar-adjacent strip on desktop too).
 */
export function CategoryNav({ categories, currentSlug }) {
  return (
    <nav className="category-nav" aria-label="Other categories">
      {categories.map((c) => (
        <NavLink
          key={c.id}
          to={`/category/${c.slug}`}
          className={cn('category-nav__link', { active: c.slug === currentSlug })}
        >
          {c.name}
        </NavLink>
      ))}
    </nav>
  )
}
