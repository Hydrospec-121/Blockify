import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { cn } from '../../utils/cn'
import './MobileBottomNav.css'

const items = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/shop', label: 'Shop', icon: '▦' },
  { to: '/search', label: 'Search', icon: '⌕' },
  { to: '/cart', label: 'Cart', icon: '⊞', isCart: true },
  { to: '/account', label: 'Account', icon: '◔' },
]

export function MobileBottomNav() {
  const { itemCount } = useCart()
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => cn('bottom-nav__item', { active: isActive })}
        >
          <span className="bottom-nav__icon" aria-hidden="true">
            {item.icon}
            {item.isCart && itemCount > 0 && <span className="bottom-nav__badge">{itemCount}</span>}
          </span>
          <span className="bottom-nav__label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
