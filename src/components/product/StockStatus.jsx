import { Badge } from '../ui/Badge'

const STATUS_MAP = {
  in_stock: { tone: 'success', label: 'In stock' },
  low_stock: { tone: 'warning', label: 'Low stock' },
  out_of_stock: { tone: 'error', label: 'Out of stock' },
  coming_soon: { tone: 'verify', label: 'Coming soon' },
}

/** Visual-only stock indicator — no real inventory logic. `quantity` is
 *  optional extra context shown for low_stock only, matching the rest
 *  of the frontend's "Only N left" messaging. */
export function StockStatus({ state, quantity }) {
  const status = STATUS_MAP[state] ?? STATUS_MAP.in_stock
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <Badge tone={status.tone}>{status.label}</Badge>
      {state === 'low_stock' && quantity != null && (
        <span className="text-caption">Only {quantity} left</span>
      )}
    </span>
  )
}
