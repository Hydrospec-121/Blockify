import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from '../product/ProductCard'
import { getNewArrivals } from '../../data/products'
import './NewArrivals.css'

// Deliberately different composition from Featured: a horizontally
// scrolling rail (on both mobile and desktop) rather than a static
// grid, so the two product-discovery moments don't feel repetitive.
export function NewArrivals() {
  const arrivals = getNewArrivals(6)
  if (arrivals.length === 0) return null

  return (
    <section className="home-section">
      <div className="container">
        <SectionHeading title="New arrivals" subtitle="Just added to the catalog" actionLabel="Shop all" actionHref="/shop" />
      </div>
      <div className="new-arrivals-rail container">
        {arrivals.map((p) => (
          <div key={p.id} className="new-arrivals-rail__item">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
