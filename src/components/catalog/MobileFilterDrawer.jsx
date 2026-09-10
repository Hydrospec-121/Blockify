import { useEffect, useState } from 'react'
import { Drawer } from '../ui/Drawer'
import { Button } from '../ui/Button'
import { FilterFields } from './FilterFields'
import { DEFAULT_FILTERS, countActiveFilters } from '../../utils/catalog'

/**
 * Mobile filter drawer with staged (draft) state: changes only commit
 * to the catalog when "Apply filters" is tapped, so browsing filter
 * options doesn't re-render the grid behind the drawer on every tap.
 * "Clear all" resets the draft immediately (a visible, low-risk action,
 * unlike individual filter toggles).
 */
export function MobileFilterDrawer({ isOpen, onClose, filters, onApply, categories, categoryCounts, tags, priceBounds, showCategoryFilter }) {
  const [draft, setDraft] = useState(filters)

  // Re-sync the draft to the committed filters each time the drawer opens.
  useEffect(() => {
    if (isOpen) setDraft(filters)
  }, [isOpen, filters])

  function handleApply() {
    onApply(draft)
    onClose()
  }

  function handleClearAll() {
    setDraft(DEFAULT_FILTERS)
  }

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Filters"
      side="right"
      footer={
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Button variant="outline" onClick={handleClearAll} style={{ flex: 1 }}>
            Clear all
          </Button>
          <Button onClick={handleApply} style={{ flex: 1 }}>
            Apply filters{countActiveFilters(draft) > 0 ? ` (${countActiveFilters(draft)})` : ''}
          </Button>
        </div>
      }
    >
      <FilterFields
        filters={draft}
        onChange={(patch) => setDraft((d) => ({ ...d, ...patch }))}
        categories={categories}
        categoryCounts={categoryCounts}
        tags={tags}
        priceBounds={priceBounds}
        showCategoryFilter={showCategoryFilter}
      />
    </Drawer>
  )
}
