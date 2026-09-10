import { ProductCard } from '../product/ProductCard'
import { ProductCardSkeleton } from '../ui/Skeleton'
import { EmptyState } from '../ui/EmptyState'
import './ProductGrid.css'

const SKELETON_COUNT = 8

/**
 * Renders the three catalog states a real API round-trip would produce:
 * loading (skeletons), empty (no matches), or the actual product grid.
 * Used identically by Shop, Category, and Search so all three stay
 * visually consistent.
 */
export function ProductGrid({ products, isLoading, onClearFilters }) {
  if (isLoading) {
    return (
      <div className="product-grid" aria-busy="true" aria-label="Loading products">
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        description="Try changing or clearing your filters to see more results."
        actionLabel={onClearFilters ? 'Clear filters' : 'Shop all'}
        actionHref={onClearFilters ? undefined : '/shop'}
        onAction={onClearFilters}
      />
    )
  }

  return (
    <div className="product-grid">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
