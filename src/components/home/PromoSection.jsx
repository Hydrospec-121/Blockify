import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { promoContent } from '../../data/homepage'
import './PromoSection.css'

// A single strong promotional break between the two product-grid
// sections. Split composition on desktop, stacked on mobile — kept to
// one CTA so it reads as a shopping moment, not an ad banner.
export function PromoSection() {
  const { eyebrow, heading, description, cta, image, imageAlt } = promoContent

  return (
    <section className="promo">
      <div className="container promo__inner">
        <div className="promo__visual">
          <img src={image} alt={imageAlt} className="promo__image" loading="lazy" />
        </div>
        <div className="promo__content">
          {eyebrow && <Badge tone="signal" className="promo__eyebrow">{eyebrow}</Badge>}
          <h2 className="promo__title">{heading}</h2>
          <p className="promo__desc">{description}</p>
          <Button as={Link} to={cta.to} variant="primary">{cta.label}</Button>
        </div>
      </div>
    </section>
  )
}
