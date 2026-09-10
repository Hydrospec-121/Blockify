import { valueProps } from '../../data/homepage'
import './ValueSection.css'

// Placeholder value-proposition copy (see data/homepage.js) — structured
// so real brand claims can be dropped in later without touching this
// component.
export function ValueSection() {
  return (
    <section className="value-section">
      <div className="container value-section__inner">
        <h2 className="value-section__heading">Why BLOCKIFY</h2>
        <div className="value-section__grid">
          {valueProps.map((v) => (
            <div key={v.title} className="value-card">
              <span className="value-card__icon" aria-hidden="true">{v.icon}</span>
              <h3 className="value-card__title">{v.title}</h3>
              <p className="value-card__desc">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
