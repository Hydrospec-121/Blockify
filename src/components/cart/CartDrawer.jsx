import { Link } from 'react-router-dom'
import { Drawer } from '../ui/Drawer'
import { Button } from '../ui/Button'
import { EmptyState } from '../ui/EmptyState'
import { QuantitySelector } from '../ui/QuantitySelector'
import { PriceDisplay } from '../ui/PriceDisplay'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/format'
import './CartDrawer.css'

export function CartDrawer({ isOpen, onClose }) {
  const { items, updateQuantity, removeItem, subtotalCents } = useCart()

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title={`Your cart${items.length ? ` (${items.length})` : ''}`}
      footer={
        items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotalCents)}</strong>
            </div>
            <Button as={Link} to="/checkout" onClick={onClose} className="cart-drawer__checkout">
              Checkout
            </Button>
          </div>
        )
      }
    >
      {items.length === 0 ? (
        <EmptyState
          title="Your cart is empty"
          description="Items you add will show up here."
          actionLabel="Start shopping"
          actionHref="/shop"
        />
      ) : (
        <ul className="cart-drawer__list">
          {items.map((item) => (
            <li key={`${item.productSlug}-${item.variantLabel}`} className="cart-drawer__item">
              <img src={item.image} alt="" className="cart-drawer__image" />
              <div className="cart-drawer__details">
                <p className="cart-drawer__name">{item.name}</p>
                {item.variantLabel && <p className="cart-drawer__variant">{item.variantLabel}</p>}
                <PriceDisplay priceCents={item.priceCents} size="sm" />
                <div className="cart-drawer__row">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(q) => updateQuantity(item.productSlug, item.variantLabel, q)}
                  />
                  <button
                    className="cart-drawer__remove"
                    onClick={() => removeItem(item.productSlug, item.variantLabel)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  )
}
