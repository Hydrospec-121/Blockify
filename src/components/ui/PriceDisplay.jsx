import { formatPrice, formatDiscountPercent } from '../../utils/format'
import './PriceDisplay.css'

/**
 * Price hierarchy, strongest to weakest:
 *   1. Current price — bold display type, full ink color.
 *   2. Discount pill — orange, but small, so it informs without shouting.
 *   3. Compare-at price — struck through, faint, purely reference.
 */
export function PriceDisplay({ priceCents, compareAtCents, currency = 'BDT', size = 'md' }) {
  const onSale = compareAtCents && compareAtCents > priceCents
  const discount = formatDiscountPercent(compareAtCents, priceCents)
  return (
    <div className={`price price--${size}`}>
      <span className={`price__current${onSale ? ' price__current--sale' : ''}`}>
        {formatPrice(priceCents, currency)}
      </span>
      {onSale && <span className="price__compare">{formatPrice(compareAtCents, currency)}</span>}
      {discount && <span className="price__discount">{discount}</span>}
    </div>
  )
}
