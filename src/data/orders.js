// Mock order history for the account area. Prices in poisha (BDT * 100)
// to match the redenominated product catalog.
export const orders = [
  {
    id: 'ord_10234',
    placedAt: '2026-08-14T10:22:00Z',
    status: 'delivered',
    total: 1619000,
    currency: 'BDT',
    items: [
      { productSlug: 'aero-mesh-task-chair', name: 'Aero Mesh Task Chair', quantity: 1, priceCents: 1290000 },
      { productSlug: 'arc-desk-lamp', name: 'Arc Desk Lamp', quantity: 1, priceCents: 240000 },
      { productSlug: 'block-tray-organizer', name: 'Block Tray Organizer', quantity: 1, priceCents: 89000 },
    ],
  },
  {
    id: 'ord_10198',
    placedAt: '2026-07-02T15:05:00Z',
    status: 'shipped',
    total: 3250000,
    currency: 'BDT',
    items: [
      { productSlug: 'oakline-standing-desk', name: 'Oakline Standing Desk', quantity: 1, priceCents: 3250000 },
    ],
  },
  {
    id: 'ord_10121',
    placedAt: '2026-05-19T09:40:00Z',
    status: 'cancelled',
    total: 690000,
    currency: 'BDT',
    items: [
      { productSlug: 'crate-modular-shelf', name: 'Crate Modular Shelf', quantity: 1, priceCents: 690000 },
    ],
  },
]

export function getOrderById(id) {
  return orders.find((o) => o.id === id) ?? null
}
