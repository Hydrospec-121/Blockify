import { ProductCard } from '../components/product/ProductCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { products } from '../data/products'
import './ProductGrid.css'

export default function Shop() {
  return (
    <div className="container product-grid-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />
      <h1 className="font-display product-grid-page__title">All products</h1>
      <div className="product-grid">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
