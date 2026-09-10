import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../navigation/Logo'
import { DesktopNav } from '../navigation/DesktopNav'
import { MobileMenu } from '../navigation/MobileMenu'
import { SearchBar } from '../navigation/SearchBar'
import { CartButton } from '../navigation/CartButton'
import { CartDrawer } from '../cart/CartDrawer'
import { IconButton } from '../ui/Button'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner container">
        {/* Mobile: hamburger + logo + search + cart. Desktop: logo + nav + inline search + account + cart. */}
        <IconButton
          variant="ghost"
          className="header__menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </IconButton>

        <Logo />

        <div className="header__desktop-nav">
          <DesktopNav />
        </div>

        <div className="header__actions">
          <div className="header__desktop-search">
            <SearchBar variant="header" />
          </div>
          <IconButton as={Link} to="/search" className="header__mobile-search" aria-label="Search">⌕</IconButton>
          <IconButton as={Link} to="/account" className="header__account" aria-label="Account">◔</IconButton>
          <CartButton onClick={() => setCartOpen(true)} />
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  )
}
