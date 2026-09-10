import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Button } from '../components/ui/Button'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import './Checkout.css'

// Structural scaffold only — no payment processing or order submission.
// Wired for a future API call on submit.
export default function Checkout() {
  const { items, subtotalCents } = useCart()

  function handleSubmit(e) {
    e.preventDefault()
    // Future: POST /api/checkout
  }

  return (
    <div className="container checkout-page">
      <h1 className="font-display checkout-page__title">Checkout</h1>
      <form className="checkout-page__grid" onSubmit={handleSubmit}>
        <div className="checkout-page__form">
          <section className="checkout-section">
            <h2 className="font-display checkout-section__title">Contact</h2>
            <Input id="email" label="Email" type="email" placeholder="you@example.com" />
          </section>
          <section className="checkout-section">
            <h2 className="font-display checkout-section__title">Shipping address</h2>
            <div className="checkout-section__row">
              <Input id="firstName" label="First name" />
              <Input id="lastName" label="Last name" />
            </div>
            <Input id="address" label="Address" />
            <div className="checkout-section__row">
              <Input id="city" label="City" />
              <Select
                id="region"
                label="State"
                options={[{ value: 'TX', label: 'Texas' }, { value: 'CA', label: 'California' }]}
              />
              <Input id="postal" label="ZIP code" />
            </div>
          </section>
          <section className="checkout-section">
            <h2 className="font-display checkout-section__title">Payment</h2>
            <p className="checkout-section__note">Payment processing will be connected in a future phase.</p>
          </section>
        </div>
        <aside className="checkout-page__summary">
          <h2 className="font-display">Order summary</h2>
          <ul className="checkout-page__items">
            {items.map((item) => (
              <li key={`${item.productSlug}-${item.variantLabel}`}>
                <span>{item.name} × {item.quantity}</span>
                <span>{formatPrice(item.priceCents * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-page__total">
            <span>Total</span>
            <strong>{formatPrice(subtotalCents)}</strong>
          </div>
          <Button type="submit" className="checkout-page__submit">Place order</Button>
        </aside>
      </form>
    </div>
  )
}
