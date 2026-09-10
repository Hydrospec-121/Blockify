import { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { cn } from '../../utils/cn'
import './DesktopNav.css'

const linkClass = ({ isActive }) => cn('desktop-nav__link', { active: isActive })

// Mega-menu is CSS-driven (hover + focus-within) so it needs no open/close
// state — it just needs a place to hang the category list. Escape closes
// it by moving focus back to the trigger, which drops :focus-within.
export function DesktopNav() {
  const triggerRef = useRef(null)

  function handleKeyDown(e) {
    if (e.key === 'Escape') triggerRef.current?.focus()
  }

  return (
    <nav className="desktop-nav" aria-label="Primary" onKeyDown={handleKeyDown}>
      <ul>
        <li className="desktop-nav__mega-item">
          <Link ref={triggerRef} to="/shop" className="desktop-nav__link desktop-nav__link--trigger">
            Shop
            <span className="desktop-nav__caret" aria-hidden="true">▾</span>
          </Link>
          <div className="desktop-nav__mega" role="group" aria-label="Shop by category">
            {categories.map((c) => (
              <Link key={c.id} to={`/category/${c.slug}`} className="desktop-nav__mega-link">
                <span className="desktop-nav__mega-thumb" style={{ backgroundImage: `url(${c.heroImage})` }} aria-hidden="true" />
                <span>
                  <span className="desktop-nav__mega-name">{c.name}</span>
                  <span className="desktop-nav__mega-count">{c.productCount} items</span>
                </span>
              </Link>
            ))}
          </div>
        </li>
        {categories.slice(0, 3).map((c) => (
          <li key={c.id}>
            <NavLink to={`/category/${c.slug}`} className={linkClass}>{c.name}</NavLink>
          </li>
        ))}
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
      </ul>
    </nav>
  )
}
