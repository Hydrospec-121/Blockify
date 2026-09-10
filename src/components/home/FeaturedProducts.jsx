import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from '../product/ProductCard'
import { getFeaturedProducts } from '../../data/products'
import './FeaturedProducts.css'

// Spacious grid composition — the homepage's primary product-discovery
// moment. 2 columns on mobile, up to 4 on desktop via the shared
// .product-grid utility (see styles/grid.css).
export function FeaturedProducts() {
  const featured = getFeaturedProducts(4)
  if (featured.length === 0) return null

  return (
    <section className="container home-section">
      <SectionHeading
        title="Featured"
        subtitle="Proven pieces, most added to cart this month"
        actionLabel="Shop all"
        actionHref="/shop"
      />
      <div className="product-grid">
        {featured.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
