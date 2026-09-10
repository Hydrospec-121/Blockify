import { useCart } from '../../context/CartContext'
import './CartButton.css'

export function CartButton({ onClick }) {
  const { itemCount } = useCart()
  return (
    <button type="button" className="cart-button" onClick={onClick} aria-label={`Cart, ${itemCount} items`}>
      <span aria-hidden="true">⊞</span>
      {itemCount > 0 && <span className="cart-button__count">{itemCount}</span>}
    </button>
  )
}
