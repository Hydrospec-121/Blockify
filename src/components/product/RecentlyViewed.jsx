import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from './ProductCard'
import './RelatedProducts.css'

/**
 * UI structure only — no real view-history tracking. A future
 * integration would swap `products` for a list read from actual
 * browsing history (session storage, account activity, etc).
 */
export function RecentlyViewed({ products }) {
  if (!products || products.length === 0) return null
  return (
    <section className="related-products">
      <SectionHeading title="Recently viewed" />
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
