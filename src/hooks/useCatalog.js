import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_FILTERS, filterProducts, sortProducts } from '../utils/catalog'

const PAGE_SIZE = 8
// Brief, once-per-change flash so the skeleton state is visible without
// meaningfully delaying the (currently synchronous, mock-data) result.
// A real API integration would replace this with the actual request
// lifecycle instead of a timer.
const MOCK_LOAD_DELAY = 350

/**
 * Shared catalog state for Shop / Category / Search: filtering, sorting,
 * a simulated loading flash, and "load more" pagination. Consumers pass
 * in the already-scoped base list (all products, a category's products,
 * or search results) and get back everything the toolbar/grid need.
 *
 * Conceptually API-ready: filters/sort/visibleCount map cleanly onto
 * query params (?category=&minPrice=&sort=&page=) if/when a real
 * backend replaces filterProducts()/sortProducts().
 */
export function useCatalog(baseProducts) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [sort, setSort] = useState('featured')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [isLoading, setIsLoading] = useState(false)

  const filtered = useMemo(() => filterProducts(baseProducts, filters), [baseProducts, filters])
  const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort])
  const visible = sorted.slice(0, visibleCount)
  const hasMore = visibleCount < sorted.length

  // Reset pagination whenever the underlying result set changes, and
  // show a brief skeleton flash to stand in for a real network request.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), MOCK_LOAD_DELAY)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseProducts, filters, sort])

  function loadMore() {
    setVisibleCount((n) => n + PAGE_SIZE)
  }

  function updateFilters(next) {
    setFilters(next)
  }

  function clearAll() {
    setFilters(DEFAULT_FILTERS)
  }

  return {
    products: visible,
    totalCount: sorted.length,
    isLoading,
    hasMore,
    loadMore,
    filters,
    setFilters: updateFilters,
    clearAll,
    sort,
    setSort,
  }
}
