import { NavLink } from 'react-router-dom'
import { Drawer } from '../ui/Drawer'
import { categories } from '../../data/categories'
import { cn } from '../../utils/cn'
import './MobileMenu.css'

const linkClass = ({ isActive }) => cn('mobile-menu__link', { active: isActive })

export function MobileMenu({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Menu" side="left">
      <nav aria-label="Primary">
        <ul className="mobile-menu__list">
          <li><NavLink to="/shop" className={linkClass} onClick={onClose}>Shop all</NavLink></li>
          {categories.map((c) => (
            <li key={c.id}>
              <NavLink to={`/category/${c.slug}`} className={linkClass} onClick={onClose}>{c.name}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="mobile-menu__list mobile-menu__list--secondary">
          <li><NavLink to="/account" className={linkClass} onClick={onClose}>Account</NavLink></li>
          <li><NavLink to="/wishlist" className={linkClass} onClick={onClose}>Wishlist</NavLink></li>
          <li><NavLink to="/about" className={linkClass} onClick={onClose}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass} onClick={onClose}>Contact</NavLink></li>
        </ul>
      </nav>
    </Drawer>
  )
}
