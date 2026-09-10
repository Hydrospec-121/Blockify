import { FilterFields } from './FilterFields'
import { countActiveFilters } from '../../utils/catalog'
import './FilterSidebar.css'

/**
 * Persistent desktop sidebar. Filters apply immediately on change — no
 * Apply button needed since there's no drawer to dismiss.
 */
export function FilterSidebar({ filters, onChange, onClearAll, categories, categoryCounts, tags, priceBounds, showCategoryFilter }) {
  const activeCount = countActiveFilters(filters)

  return (
    <aside className="filter-sidebar" aria-label="Filter products">
      <div className="filter-sidebar__header">
        <h2 className="text-h4">Filters</h2>
        {activeCount > 0 && (
          <button type="button" className="filter-sidebar__clear" onClick={onClearAll}>
            Clear all
          </button>
        )}
      </div>
      <FilterFields
        filters={filters}
        onChange={(patch) => onChange({ ...filters, ...patch })}
        categories={categories}
        categoryCounts={categoryCounts}
        tags={tags}
        priceBounds={priceBounds}
        showCategoryFilter={showCategoryFilter}
      />
    </aside>
  )
}
