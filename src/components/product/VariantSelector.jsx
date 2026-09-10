import { cn } from '../../utils/cn'
import './VariantSelector.css'

/**
 * Generic variant picker — groups the product's `variants` array by
 * `type` (color, finish, size, material, style — whatever the mock
 * product defines) and renders a swatch row when entries carry a
 * `swatch` color, or a text-button row otherwise. Selection is a
 * single controlled value (selectedId), matching the rest of the
 * frontend's single-variant cart model. UI states only — no real
 * inventory/availability validation.
 */
export function VariantSelector({ variants, selectedId, onSelect, disabledIds = [] }) {
  if (!variants || variants.length === 0) return null

  const groups = variants.reduce((acc, v) => {
    ;(acc[v.type] ??= []).push(v)
    return acc
  }, {})

  return (
    <div className="variant-selector">
      {Object.entries(groups).map(([type, options]) => {
        const selected = options.find((o) => o.id === selectedId)
        const isSwatchGroup = options.every((o) => o.swatch)
        return (
          <div key={type} className="variant-selector__group">
            <span className="variant-selector__label">
              {type.charAt(0).toUpperCase() + type.slice(1)}
              {selected && <span className="variant-selector__selected"> — {selected.label}</span>}
            </span>
            <div className="variant-selector__options">
              {options.map((opt) => {
                const isDisabled = disabledIds.includes(opt.id)
                const isSelected = opt.id === selectedId
                return isSwatchGroup ? (
                  <button
                    key={opt.id}
                    type="button"
                    className={cn('variant-swatch', { 'is-selected': isSelected, 'is-disabled': isDisabled })}
                    style={{ '--swatch-color': opt.swatch }}
                    onClick={() => !isDisabled && onSelect(opt)}
                    disabled={isDisabled}
                    aria-pressed={isSelected}
                    aria-label={`${type}: ${opt.label}${isDisabled ? ' (unavailable)' : ''}`}
                    title={opt.label}
                  />
                ) : (
                  <button
                    key={opt.id}
                    type="button"
                    className={cn('variant-option', { 'is-selected': isSelected, 'is-disabled': isDisabled })}
                    onClick={() => !isDisabled && onSelect(opt)}
                    disabled={isDisabled}
                    aria-pressed={isSelected}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
