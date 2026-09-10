import { Link, Outlet, useLocation } from 'react-router-dom'
import { mockUser } from '../../data/user'
import { cn } from '../../utils/cn'
import './Account.css'

const links = [
  { to: '/account', label: 'Overview', end: true },
  { to: '/account/orders', label: 'Orders' },
  { to: '/wishlist', label: 'Wishlist' },
]

export default function Account() {
  const location = useLocation()
  const isOverview = location.pathname === '/account'

  return (
    <div className="container account-page">
      <h1 className="font-display account-page__title">My account</h1>
      <div className="account-page__grid">
        <nav className="account-page__nav" aria-label="Account">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn('account-page__nav-link', {
                active: link.end ? location.pathname === link.to : location.pathname.startsWith(link.to),
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="account-page__content">
          {isOverview ? (
            <div className="account-overview">
              <p><strong>{mockUser.firstName} {mockUser.lastName}</strong></p>
              <p className="account-overview__email">{mockUser.email}</p>
              <h3 className="font-display account-overview__subhead">Default address</h3>
              {mockUser.addresses[0] && (
                <address className="account-overview__address">
                  {mockUser.addresses[0].line1}<br />
                  {mockUser.addresses[0].city}, {mockUser.addresses[0].region} {mockUser.addresses[0].postalCode}
                </address>
              )}
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  )
}
