// Catalog logic (filter / sort / derive-available-options), kept
// separate from any component so a future API integration can replace
// these with real query-param requests without touching catalog UI.
// Every function here operates on the same generic product shape
// established in data/products.js — nothing here assumes a specific
// business vertical (furniture, apparel, etc.).

/**
 * filters shape:
 * {
 *   categorySlugs: string[]   // OR'd together
 *   priceMin: number | null   // in the currency's major unit (e.g. taka, not poisha)
 *   priceMax: number | null
 *   inStockOnly: boolean
 *   minRating: number | null  // 4 means "4 stars & up"
 *   tags: string[]            // OR'd together
 * }
 */
export const DEFAULT_FILTERS = {
  categorySlugs: [],
  priceMin: null,
  priceMax: null,
  inStockOnly: false,
  minRating: null,
  tags: [],
}

export function filterProducts(products, filters) {
  const f = { ...DEFAULT_FILTERS, ...filters }
  return products.filter((p) => {
    if (f.categorySlugs.length > 0 && !f.categorySlugs.includes(p.categorySlug)) return false
    if (f.priceMin != null && p.priceCents < f.priceMin * 100) return false
    if (f.priceMax != null && p.priceCents > f.priceMax * 100) return false
    if (f.inStockOnly && p.stock.state === 'out_of_stock') return false
    if (f.minRating != null && p.rating.average < f.minRating) return false
    if (f.tags.length > 0 && !f.tags.some((t) => p.tags.includes(t))) return false
    return true
  })
}

export function countActiveFilters(filters) {
  const f = { ...DEFAULT_FILTERS, ...filters }
  let count = 0
  if (f.categorySlugs.length) count += f.categorySlugs.length
  if (f.priceMin != null) count += 1
  if (f.priceMax != null) count += 1
  if (f.inStockOnly) count += 1
  if (f.minRating != null) count += 1
  if (f.tags.length) count += f.tags.length
  return count
}

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating' },
  { value: 'name-asc', label: 'Name: A to Z' },
]

export function sortProducts(products, sortKey) {
  const list = [...products]
  switch (sortKey) {
    case 'newest':
      // No createdAt field on the mock schema yet — approximate "newest"
      // with the 'new' tag first, falling back to catalog order reversed
      // (later-added mock entries sort first). Replace with a real
      // timestamp field once the API supplies one.
      return list
        .map((p, i) => ({ p, i }))
        .sort((a, b) => {
          const aNew = a.p.tags.includes('new') ? 1 : 0
          const bNew = b.p.tags.includes('new') ? 1 : 0
          if (aNew !== bNew) return bNew - aNew
          return b.i - a.i
        })
        .map(({ p }) => p)
    case 'price-asc':
      return list.sort((a, b) => a.priceCents - b.priceCents)
    case 'price-desc':
      return list.sort((a, b) => b.priceCents - a.priceCents)
    case 'rating':
      return list.sort((a, b) => b.rating.average - a.rating.average)
    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    case 'featured':
    default:
      // Catalog order, with bestseller/featured-tagged items nudged up —
      // a reasonable default until a real "featured" ranking exists.
      return list
        .map((p, i) => ({ p, i }))
        .sort((a, b) => {
          const aFeat = a.p.tags.includes('bestseller') || a.p.tags.includes('featured') ? 1 : 0
          const bFeat = b.p.tags.includes('bestseller') || b.p.tags.includes('featured') ? 1 : 0
          if (aFeat !== bFeat) return bFeat - aFeat
          return a.i - b.i
        })
        .map(({ p }) => p)
  }
}

/** Min/max price across a product list, in the currency's major unit (rounded to whole units). */
export function getPriceRange(products) {
  if (products.length === 0) return { min: 0, max: 0 }
  const values = products.map((p) => p.priceCents / 100)
  return { min: Math.floor(Math.min(...values)), max: Math.ceil(Math.max(...values)) }
}

/** Unique tags present in a product list, for building tag-filter checkboxes. */
export function getAvailableTags(products) {
  return [...new Set(products.flatMap((p) => p.tags))].sort()
}

/** Category slugs actually present in a product list, with counts — so
 *  the filter sidebar never offers a category with zero matches. */
export function getAvailableCategoryCounts(products) {
  const counts = {}
  for (const p of products) counts[p.categorySlug] = (counts[p.categorySlug] ?? 0) + 1
  return counts
}
