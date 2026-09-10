import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductBadge } from '../ui/Badge'
import { Rating } from '../ui/Rating'
import { PriceDisplay } from '../ui/PriceDisplay'
import { IconButton } from '../ui/Button'
import { useCart } from '../../context/CartContext'
import { useToast } from '../ui/Toast'
import { cn } from '../../utils/cn'
import './ProductCard.css'

/**
 * States covered: normal, sale, out-of-stock, image-loading (fade-in on
 * load), hover/focus (desktop-only image swap + quick-add reveal via
 * CSS, so no JS hover state is needed). The whole-card loading state
 * lives in ProductCardSkeleton (Skeleton.jsx), used at the call site
 * while data is pending.
 */
export function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)
  const { addItem } = useCart()
  const { showToast } = useToast()

  const isOut = product.stock.state === 'out_of_stock'
  const isLow = product.stock.state === 'low_stock'
  const secondImage = product.images[1]

  function toggleWishlist(e) {
    e.preventDefault()
    e.stopPropagation()
    setWishlisted((w) => !w)
  }

  function quickAdd(e) {
    e.preventDefault()
    e.stopPropagation()
    if (isOut) return
    addItem({
      productSlug: product.slug,
      name: product.name,
      priceCents: product.priceCents,
      image: product.images[0],
      variantLabel: product.variants?.[0]?.label ?? null,
      quantity: 1,
    })
    showToast(`Added ${product.name} to cart`, 'success')
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn('product-card', { 'product-card--out': isOut })}
      aria-disabled={isOut}
    >
      <div className="product-card__image-wrap">
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn('product-card__image', 'product-card__image--primary', { 'is-loaded': imageLoaded })}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {secondImage && (
          <img
            src={secondImage}
            alt=""
            aria-hidden="true"
            className="product-card__image product-card__image--secondary"
            loading="lazy"
          />
        )}

        <div className="product-card__badges">
          {product.tags?.includes('new') && <ProductBadge kind="new" />}
          {product.compareAtCents > product.priceCents && <ProductBadge kind="sale" />}
          {product.tags?.includes('limited') && <ProductBadge kind="limited" />}
        </div>

        <IconButton
          variant="ghost"
          className={cn('product-card__wishlist', { 'is-active': wishlisted })}
          onClick={toggleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wishlisted}
        >
          {wishlisted ? '♥' : '♡'}
        </IconButton>

        {isOut && <div className="product-card__overlay">Out of stock</div>}

        {!isOut && (
          <button type="button" className="product-card__quick-add" onClick={quickAdd}>
            Quick add
          </button>
        )}
      </div>

      <div className="product-card__body">
        <p className="product-card__brand text-caption">{product.brand}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <Rating average={product.rating.average} count={product.rating.count} size="sm" />
        <PriceDisplay priceCents={product.priceCents} compareAtCents={product.compareAtCents} />
        {isLow && <span className="product-card__low-stock">Only {product.stock.quantity} left</span>}
      </div>
    </Link>
  )
}
