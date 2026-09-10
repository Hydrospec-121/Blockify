import { Input } from '../ui/Input'
import './FilterFields.css'

function toggleValue(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

const RATING_OPTIONS = [4, 3, 2]

/**
 * The actual filter controls, shared between the desktop FilterSidebar
 * and the MobileFilterDrawer so the two never drift out of sync.
 * `showCategoryFilter` is false on Category pages, where the category
 * is already fixed by the route.
 */
export function FilterFields({ filters, onChange, categories, categoryCounts, tags, priceBounds, showCategoryFilter = true }) {
  return (
    <div className="filter-fields">
      {showCategoryFilter && categories.length > 0 && (
        <fieldset className="filter-fields__group">
          <legend className="text-label">Category</legend>
          {categories.map((c) => (
            <label key={c.slug} className="filter-fields__checkbox">
              <input
                type="checkbox"
                checked={filters.categorySlugs.includes(c.slug)}
                onChange={() => onChange({ categorySlugs: toggleValue(filters.categorySlugs, c.slug) })}
              />
              <span>{c.name}</span>
              <span className="filter-fields__count">{categoryCounts[c.slug] ?? 0}</span>
            </label>
          ))}
        </fieldset>
      )}

      <fieldset className="filter-fields__group">
        <legend className="text-label">Price (৳)</legend>
        <div className="filter-fields__price-row">
          <Input
            id="price-min"
            type="number"
            inputMode="numeric"
            placeholder={String(priceBounds.min)}
            min={0}
            value={filters.priceMin ?? ''}
            onChange={(e) => onChange({ priceMin: e.target.value === '' ? null : Number(e.target.value) })}
            aria-label="Minimum price in taka"
          />
          <span className="filter-fields__price-sep">–</span>
          <Input
            id="price-max"
            type="number"
            inputMode="numeric"
            placeholder={String(priceBounds.max)}
            min={0}
            value={filters.priceMax ?? ''}
            onChange={(e) => onChange({ priceMax: e.target.value === '' ? null : Number(e.target.value) })}
            aria-label="Maximum price in taka"
          />
        </div>
      </fieldset>

      <fieldset className="filter-fields__group">
        <legend className="text-label">Availability</legend>
        <label className="filter-fields__checkbox">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onChange({ inStockOnly: e.target.checked })}
          />
          <span>In stock only</span>
        </label>
      </fieldset>

      <fieldset className="filter-fields__group">
        <legend className="text-label">Rating</legend>
        <label className="filter-fields__checkbox">
          <input
            type="radio"
            name="min-rating"
            checked={filters.minRating == null}
            onChange={() => onChange({ minRating: null })}
          />
          <span>Any rating</span>
        </label>
        {RATING_OPTIONS.map((r) => (
          <label key={r} className="filter-fields__checkbox">
            <input
              type="radio"
              name="min-rating"
              checked={filters.minRating === r}
              onChange={() => onChange({ minRating: r })}
            />
            <span>{r}★ &amp; up</span>
          </label>
        ))}
      </fieldset>

      {tags.length > 0 && (
        <fieldset className="filter-fields__group">
          <legend className="text-label">Tags</legend>
          {tags.map((t) => (
            <label key={t} className="filter-fields__checkbox">
              <input
                type="checkbox"
                checked={filters.tags.includes(t)}
                onChange={() => onChange({ tags: toggleValue(filters.tags, t) })}
              />
              <span className="filter-fields__tag-label">{t}</span>
            </label>
          ))}
        </fieldset>
      )}
    </div>
  )
}
