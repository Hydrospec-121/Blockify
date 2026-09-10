import { Link } from 'react-router-dom'
import { Logo } from '../navigation/Logo'
import './Footer.css'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All products', to: '/shop' },
      { label: 'Desks', to: '/category/desks' },
      { label: 'Seating', to: '/category/seating' },
      { label: 'Storage', to: '/category/storage' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact us', to: '/contact' },
      { label: 'Refund policy', to: '/refund-policy' },
      { label: 'Order tracking', to: '/account/orders' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About BLOCKIFY', to: '/about' },
      { label: 'Privacy policy', to: '/privacy' },
      { label: 'Terms of service', to: '/terms' },
    ],
  },
]

const social = [
  { label: 'Instagram', href: 'https://instagram.com', glyph: '◎' },
  { label: 'Facebook', href: 'https://facebook.com', glyph: '◫' },
  { label: 'YouTube', href: 'https://youtube.com', glyph: '▷' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">Furniture and desk goods, built in blocks.</p>
          <div className="footer__social">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="footer__social-link">
                <span aria-hidden="true">{s.glyph}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer__columns">
          {columns.map((col) => (
            <div key={col.title} className="footer__column">
              <h4 className="footer__heading">{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} BLOCKIFY. All rights reserved.</span>
      </div>
    </footer>
  )
}
