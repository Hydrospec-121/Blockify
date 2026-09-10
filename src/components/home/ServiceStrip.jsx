import { trustItems } from '../../data/homepage'
import './ServiceStrip.css'

// Lightweight, compact service messaging — UI placeholders, not
// confirmed business policy (see comment in data/homepage.js).
export function ServiceStrip() {
  return (
    <section className="service-strip">
      <div className="container service-strip__inner">
        {trustItems.map((item) => (
          <div key={item.label} className="service-strip__item">
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
