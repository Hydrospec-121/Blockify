import { Button } from '../ui/Button'
import { ProductCount } from './ProductCount'
import { SortControl } from './SortControl'
import './CatalogToolbar.css'

/**
 * Desktop: product count on the left, sort on the right, no filter
 * button (the sidebar is always visible).
 * Mobile: a compact [Filter] [Sort] row with the count underneath —
 * the filter button opens MobileFilterDrawer.
 */
export function CatalogToolbar({ count, sort, onSortChange, onOpenFilters, activeFilterCount = 0 }) {
  return (
    <div className="catalog-toolbar">
      <div className="catalog-toolbar__mobile-row">
        <Button variant="outline" size="sm" onClick={onOpenFilters} className="catalog-toolbar__filter-btn">
          Filter{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
        </Button>
        <div className="catalog-toolbar__mobile-sort">
          <SortControl value={sort} onChange={onSortChange} id="sort-mobile" />
        </div>
      </div>
      <div className="catalog-toolbar__row">
        <ProductCount count={count} />
        <div className="catalog-toolbar__desktop-sort">
          <SortControl value={sort} onChange={onSortChange} id="sort-desktop" />
        </div>
      </div>
    </div>
  )
}
