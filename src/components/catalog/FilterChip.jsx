import './FilterChip.css'

export function FilterChip({ label, onRemove }) {
  return (
    <span className="filter-chip">
      {label}
      <button type="button" className="filter-chip__remove" onClick={onRemove} aria-label={`Remove filter: ${label}`}>
        ✕
      </button>
    </span>
  )
}
