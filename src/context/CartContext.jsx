import { createContext, useContext, useMemo, useState } from 'react'

// Frontend-only cart state. Shape matches what a future POST /api/cart
// would expect, so swapping this for real persistence later only
// touches this provider.
const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // { productSlug, name, priceCents, image, variantLabel, quantity }

  function addItem(item) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productSlug === item.productSlug && i.variantLabel === item.variantLabel
      )
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...prev, item]
    })
  }

  function updateQuantity(productSlug, variantLabel, quantity) {
    setItems((prev) =>
      prev
        .map((i) =>
          i.productSlug === productSlug && i.variantLabel === variantLabel
            ? { ...i, quantity }
            : i
        )
        .filter((i) => i.quantity > 0)
    )
  }

  function removeItem(productSlug, variantLabel) {
    setItems((prev) =>
      prev.filter((i) => !(i.productSlug === productSlug && i.variantLabel === variantLabel))
    )
  }

  const itemCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotalCents = useMemo(
    () => items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0),
    [items]
  )

  const value = { items, addItem, updateQuantity, removeItem, itemCount, subtotalCents }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
