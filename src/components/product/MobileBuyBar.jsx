import { Button } from '../ui/Button'
import { PriceDisplay } from '../ui/PriceDisplay'
import './MobileBuyBar.css'

/**
 * Fixed purchase bar for small screens only (hidden at the desktop
 * breakpoint via CSS). Sits directly above MobileBottomNav using the
 * same --bottom-nav-safe-height token, so the two never overlap.
 */
export function MobileBuyBar({ priceCents, compareAtCents, isOut, onAddToCart, isAdding }) {
  return (
    <div className="mobile-buy-bar">
      <PriceDisplay priceCents={priceCents} compareAtCents={compareAtCents} size="sm" />
      <Button
        onClick={onAddToCart}
        disabled={isOut}
        isLoading={isAdding}
        className="mobile-buy-bar__cta"
      >
        {isOut ? 'Out of stock' : 'Add to cart'}
      </Button>
    </div>
  )
}
