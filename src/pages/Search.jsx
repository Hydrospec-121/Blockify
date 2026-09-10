import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/product/ProductCard'
import { SearchBar } from '../components/navigation/SearchBar'
import { EmptyState } from '../components/ui/EmptyState'
import { searchProducts } from '../data/products'
import './ProductGrid.css'

export default function Search() {
  const [params] = useSearchParams()
  const query = params.get('q') ?? ''
  const results = searchProducts(query)

  return (
    <div className="container product-grid-page">
      <SearchBar variant="mobile-full" />
      <h1 className="font-display product-grid-page__title">
        {query ? `Results for "${query}"` : 'Search'}
      </h1>
      {query && results.length === 0 && (
        <EmptyState title="No matches" description={`Nothing found for "${query}".`} actionLabel="Browse all products" actionHref="/shop" />
      )}
      <div className="product-grid">
        {results.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
