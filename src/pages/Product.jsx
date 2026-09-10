import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductGallery } from '../components/product/ProductGallery'
import { PriceDisplay } from '../components/ui/PriceDisplay'
import { Rating } from '../components/ui/Rating'
import { Badge } from '../components/ui/Badge'
import { QuantitySelector } from '../components/ui/QuantitySelector'
import { Button } from '../components/ui/Button'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { EmptyState } from '../components/ui/EmptyState'
import { useCart } from '../context/CartContext'
import { useToast } from '../components/ui/Toast'
import { getProductBySlug } from '../data/products'
import { getCategoryBySlug } from '../data/categories'
import './Product.css'

export default function Product() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const { showToast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(product?.variants?.[0] ?? null)

  if (!product) {
    return (
      <div className="container" style={{ paddingBlock: 'var(--space-8)' }}>
        <EmptyState title="Product not found" actionLabel="Back to shop" actionHref="/shop" />
      </div>
    )
  }

  const category = getCategoryBySlug(product.categorySlug)
  const isOut = product.stock.state === 'out_of_stock'

  function handleAddToCart() {
    addItem({
      productSlug: product.slug,
      name: product.name,
      priceCents: product.priceCents,
      image: product.images[0],
      variantLabel: variant?.label ?? null,
      quantity,
    })
    showToast(`Added ${product.name} to cart`, 'success')
  }

  return (
    <div className="container product-page">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: category?.name ?? 'Shop', href: category ? `/category/${category.slug}` : '/shop' },
          { label: product.name },
        ]}
      />
      <div className="product-page__grid">
        <ProductGallery images={product.images} alt={product.name} />
        <div className="product-page__info">
          <p className="product-page__brand">{product.brand}</p>
          <h1 className="font-display product-page__name">{product.name}</h1>
          <Rating average={product.rating.average} count={product.rating.count} />
          <PriceDisplay priceCents={product.priceCents} compareAtCents={product.compareAtCents} size="lg" />
          <p className="product-page__desc">{product.description}</p>

          {product.variants.length > 0 && (
            <div className="product-page__variants">
              <span className="product-page__variants-label">Finish</span>
              <div className="product-page__swatches">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    className="product-page__swatch"
                    data-active={variant?.id === v.id}
                    style={{ '--swatch-color': v.swatch }}
                    onClick={() => setVariant(v)}
                    aria-label={v.label}
                    title={v.label}
                  />
                ))}
              </div>
            </div>
          )}

          {isOut ? (
            <Badge tone="ink">Out of stock</Badge>
          ) : (
            <div className="product-page__actions">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <Button onClick={handleAddToCart}>Add to cart</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
