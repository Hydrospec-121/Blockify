import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { EmptyState } from '../components/ui/EmptyState'
import { QuantitySelector } from '../components/ui/QuantitySelector'
import { PriceDisplay } from '../components/ui/PriceDisplay'
import { Button } from '../components/ui/Button'
import { formatPrice } from '../utils/format'
import './Cart.css'

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotalCents } = useCart()

  if (items.length === 0) {
    return (
      <div className="container" style={{ paddingBlock: 'var(--space-10)' }}>
        <EmptyState title="Your cart is empty" description="Items you add will show up here." actionLabel="Start shopping" actionHref="/shop" />
      </div>
    )
  }

  return (
    <div className="container cart-page">
      <h1 className="font-display cart-page__title">Your cart</h1>
      <div className="cart-page__grid">
        <ul className="cart-page__list">
          {items.map((item) => (
            <li key={`${item.productSlug}-${item.variantLabel}`} className="cart-page__item">
              <img src={item.image} alt="" className="cart-page__image" />
              <div className="cart-page__details">
                <p className="cart-page__name">{item.name}</p>
                {item.variantLabel && <p className="cart-page__variant">{item.variantLabel}</p>}
                <PriceDisplay priceCents={item.priceCents} />
                <div className="cart-page__row">
                  <QuantitySelector value={item.quantity} onChange={(q) => updateQuantity(item.productSlug, item.variantLabel, q)} />
                  <button className="cart-page__remove" onClick={() => removeItem(item.productSlug, item.variantLabel)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <aside className="cart-page__summary">
          <h2 className="font-display cart-page__summary-title">Order summary</h2>
          <div className="cart-page__summary-row"><span>Subtotal</span><strong>{formatPrice(subtotalCents)}</strong></div>
          <div className="cart-page__summary-row"><span>Shipping</span><span>Calculated at checkout</span></div>
          <Button as={Link} to="/checkout" className="cart-page__checkout">Checkout</Button>
        </aside>
      </div>
    </div>
  )
}
