import { useParams, Link } from 'react-router-dom'
import { ProductCard } from '../components/product/ProductCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { EmptyState } from '../components/ui/EmptyState'
import { getProductsByCategory } from '../data/products'
import { getCategoryBySlug as findCategory } from '../data/categories'
import './ProductGrid.css'

export default function Category() {
  const { slug } = useParams()
  const category = findCategory(slug)
  const items = getProductsByCategory(slug)

  if (!category) {
    return (
      <div className="container product-grid-page">
        <EmptyState
          title="Category not found"
          description="That category doesn't exist yet."
          actionLabel="Back to shop"
          actionHref="/shop"
        />
      </div>
    )
  }

  return (
    <div className="container product-grid-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: category.name }]} />
      <h1 className="font-display product-grid-page__title">{category.name}</h1>
      {items.length === 0 ? (
        <EmptyState title="No products yet" description="Check back soon." actionLabel="Browse all products" actionHref="/shop" />
      ) : (
        <div className="product-grid">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}
