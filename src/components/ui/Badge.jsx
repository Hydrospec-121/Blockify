import { cn } from '../../utils/cn'
import './Badge.css'

/** tone: 'signal' | 'ink' | 'verify' | 'success' | 'warning' | 'error' */
export function Badge({ tone = 'signal', children, className }) {
  return <span className={cn('badge', `badge--${tone}`, className)}>{children}</span>
}

// Semantic presets for the product-card badge slots the spec calls out.
// Thin wrappers over Badge so every product surface uses the same five
// labels/tones instead of components inventing their own copy.
const PRESETS = {
  sale: { tone: 'signal', label: 'Sale' },
  new: { tone: 'verify', label: 'New' },
  outOfStock: { tone: 'ink', label: 'Out of stock' },
  limited: { tone: 'warning', label: 'Limited' },
  featured: { tone: 'success', label: 'Featured' },
}

export function ProductBadge({ kind, className }) {
  const preset = PRESETS[kind]
  if (!preset) return null
  return <Badge tone={preset.tone} className={className}>{preset.label}</Badge>
}
