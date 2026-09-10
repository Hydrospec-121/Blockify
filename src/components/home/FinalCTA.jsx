import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { finalCta } from '../../data/homepage'
import './FinalCTA.css'

export function FinalCTA() {
  const { heading, description, cta } = finalCta
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <h2 className="final-cta__title">{heading}</h2>
        <p className="final-cta__desc">{description}</p>
        <Button as={Link} to={cta.to} variant="secondary">{cta.label}</Button>
      </div>
    </section>
  )
}
