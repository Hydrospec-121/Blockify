import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from './ProductCard'
import './RelatedProducts.css'

/** Desktop: 4-column grid. Mobile: horizontal rail — matches the
 *  pattern already established for NewArrivals on the homepage. */
export function RelatedProducts({ products, title = 'You might also like' }) {
  if (!products || products.length === 0) return null
  return (
    <section className="related-products">
      <SectionHeading title={title} />
      <div className="related-products__rail">
        {products.map((p) => (
          <div key={p.id} className="related-products__item">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
