import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { heroContent } from '../../data/homepage'
import './Hero.css'

// Desktop: split composition, text left / image right, generous space.
// Mobile: compact stack — image stays present but the section never
// pushes products below the fold on a phone-height viewport.
export function Hero() {
  const { eyebrow, heading, description, primaryCta, secondaryCta, image, imageAlt } = heroContent

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          {eyebrow && <span className="text-label hero__eyebrow">{eyebrow}</span>}
          <h1 className="hero__title">{heading}</h1>
          <p className="hero__subtitle">{description}</p>
          <div className="hero__actions">
            <Button as={Link} to={primaryCta.to} variant="primary">{primaryCta.label}</Button>
            {secondaryCta && (
              <Button as={Link} to={secondaryCta.to} variant="outline">{secondaryCta.label}</Button>
            )}
          </div>
        </div>
        <div className="hero__visual">
          <img src={image} alt={imageAlt} className="hero__image" loading="eager" />
        </div>
      </div>
    </section>
  )
}
