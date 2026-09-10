import { useState } from 'react'
import { Button } from '../ui/Button'

/**
 * Labeled wishlist toggle for the product detail page (distinct from
 * ProductCard's icon-only overlay version — different visual context,
 * same UI-only concept: local component state, no persistence).
 */
export function WishlistButton({ initialActive = false, className }) {
  const [active, setActive] = useState(initialActive)
  return (
    <Button
      variant="outline"
      onClick={() => setActive((a) => !a)}
      aria-pressed={active}
      className={className}
    >
      <span aria-hidden="true">{active ? '♥' : '♡'}</span>
      {active ? 'Added to wishlist' : 'Add to wishlist'}
    </Button>
  )
}
