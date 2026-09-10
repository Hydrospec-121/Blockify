// Mock product catalog. Every field a product card, gallery, or PDP
// needs is modeled here so real API data can drop in without a
// component rewrite — only this file (or its future fetch layer)
// should change.

export const products = [
  {
    id: 'prod_oak_desk_01',
    slug: 'oakline-standing-desk',
    name: 'Oakline Standing Desk',
    categorySlug: 'desks',
    brand: 'Blockify Basics',
    priceCents: 3250000,
    compareAtCents: 3990000,
    currency: 'BDT',
    rating: { average: 4.6, count: 218 },
    stock: { state: 'in_stock', quantity: 42 },
    images: [
      '/mock/products/oakline-desk-1.jpg',
      '/mock/products/oakline-desk-2.jpg',
      '/mock/products/oakline-desk-3.jpg',
    ],
    variants: [
      { id: 'v1', type: 'finish', label: 'Natural Oak', swatch: '#C9A876' },
      { id: 'v2', type: 'finish', label: 'Charcoal', swatch: '#3A3A3C' },
    ],
    description:
      'A dual-motor standing desk with a solid oak-veneer top, four memory height presets, and a cable channel built into the frame.',
    tags: ['bestseller'],
  },
  {
    id: 'prod_mesh_chair_01',
    slug: 'aero-mesh-task-chair',
    name: 'Aero Mesh Task Chair',
    categorySlug: 'seating',
    brand: 'Blockify Basics',
    priceCents: 1290000,
    compareAtCents: null,
    currency: 'BDT',
    rating: { average: 4.4, count: 96 },
    stock: { state: 'in_stock', quantity: 15 },
    images: [
      '/mock/products/aero-chair-1.jpg',
      '/mock/products/aero-chair-2.jpg',
    ],
    variants: [
      { id: 'v1', type: 'color', label: 'Graphite', swatch: '#2E2F33' },
      { id: 'v2', type: 'color', label: 'Sand', swatch: '#D8CFC0' },
    ],
    description:
      'Breathable mesh back, adjustable lumbar support, and 4D armrests for full-day comfort.',
    tags: ['bestseller'],
  },
  {
    id: 'prod_crate_shelf_01',
    slug: 'crate-modular-shelf',
    name: 'Crate Modular Shelf',
    categorySlug: 'storage',
    brand: 'Blockify Basics',
    priceCents: 690000,
    compareAtCents: 890000,
    currency: 'BDT',
    rating: { average: 4.8, count: 152 },
    stock: { state: 'low_stock', quantity: 4 },
    images: [
      '/mock/products/crate-shelf-1.jpg',
      '/mock/products/crate-shelf-2.jpg',
    ],
    variants: [
      { id: 'v1', type: 'finish', label: 'Birch', swatch: '#E4D3AE' },
      { id: 'v2', type: 'finish', label: 'Walnut', swatch: '#5A3A2B' },
    ],
    description:
      'Stackable birch-ply cubes that click together without hardware — build a shelf as wide or as tall as the room allows.',
    tags: ['limited', 'featured'],
  },
  {
    id: 'prod_arc_lamp_01',
    slug: 'arc-desk-lamp',
    name: 'Arc Desk Lamp',
    categorySlug: 'lighting',
    brand: 'Blockify Basics',
    priceCents: 240000,
    compareAtCents: null,
    currency: 'BDT',
    rating: { average: 4.2, count: 61 },
    stock: { state: 'in_stock', quantity: 120 },
    images: ['/mock/products/arc-lamp-1.jpg', '/mock/products/arc-lamp-2.jpg'],
    variants: [
      { id: 'v1', type: 'color', label: 'Matte Black', swatch: '#1B1B1D' },
      { id: 'v2', type: 'color', label: 'Warm White', swatch: '#F2EFE9' },
    ],
    description:
      'A dimmable LED task lamp with a weighted base and a touch-slide brightness control.',
    tags: ['bestseller'],
  },
  {
    id: 'prod_tray_organizer_01',
    slug: 'block-tray-organizer',
    name: 'Block Tray Organizer',
    categorySlug: 'accessories',
    brand: 'Blockify Basics',
    priceCents: 89000,
    compareAtCents: 110000,
    currency: 'BDT',
    rating: { average: 4.5, count: 340 },
    stock: { state: 'in_stock', quantity: 210 },
    images: ['/mock/products/tray-organizer-1.jpg'],
    variants: [],
    description:
      'A three-slot desk tray molded from recycled ABS in a single block-print colorway.',
    tags: ['bestseller'],
  },
  {
    id: 'prod_out_of_stock_01',
    slug: 'plywood-file-cabinet',
    name: 'Plywood File Cabinet',
    categorySlug: 'storage',
    brand: 'Blockify Basics',
    priceCents: 990000,
    compareAtCents: null,
    currency: 'BDT',
    rating: { average: 4.3, count: 44 },
    stock: { state: 'out_of_stock', quantity: 0 },
    images: ['/mock/products/file-cabinet-1.jpg'],
    variants: [],
    description:
      'Two-drawer locking file cabinet in birch plywood with brass hardware.',
    tags: [],
  },
  {
    id: 'prod_canvas_chair_01',
    slug: 'canvas-task-chair',
    name: 'Canvas Task Chair',
    categorySlug: 'seating',
    brand: 'Blockify Basics',
    priceCents: 1450000,
    compareAtCents: null,
    currency: 'BDT',
    rating: { average: 4.1, count: 12 },
    stock: { state: 'in_stock', quantity: 30 },
    images: ['/mock/products/canvas-chair-1.jpg', '/mock/products/canvas-chair-2.jpg'],
    variants: [
      { id: 'v1', type: 'color', label: 'Clay', swatch: '#B9723F' },
      { id: 'v2', type: 'color', label: 'Ink', swatch: '#222326' },
    ],
    description:
      'A canvas-upholstered task chair with a bent-plywood shell and a fixed-height steel base.',
    tags: ['new'],
  },
  {
    id: 'prod_grid_organizer_01',
    slug: 'grid-wall-organizer',
    name: 'Grid Wall Organizer',
    categorySlug: 'accessories',
    brand: 'Blockify Basics',
    priceCents: 195000,
    compareAtCents: null,
    currency: 'BDT',
    rating: { average: 4.0, count: 8 },
    stock: { state: 'in_stock', quantity: 60 },
    images: ['/mock/products/grid-organizer-1.jpg'],
    variants: [],
    description:
      'A modular pegboard grid for hanging tools, cables, and small storage bins above the desk.',
    tags: ['new'],
  },
  {
    id: 'prod_nordic_lamp_01',
    slug: 'nordic-table-lamp',
    name: 'Nordic Table Lamp',
    categorySlug: 'lighting',
    brand: 'Blockify Basics',
    priceCents: 340000,
    compareAtCents: null,
    currency: 'BDT',
    rating: { average: 4.3, count: 5 },
    stock: { state: 'in_stock', quantity: 45 },
    images: ['/mock/products/nordic-lamp-1.jpg'],
    variants: [
      { id: 'v1', type: 'color', label: 'Birch', swatch: '#E4D3AE' },
      { id: 'v2', type: 'color', label: 'Black', swatch: '#1B1B1D' },
    ],
    description:
      'A soft-diffuse table lamp with a birch base and a linen shade, dimmable via a built-in slider.',
    tags: ['new'],
  },
  {
    id: 'prod_boxwood_shelf_01',
    slug: 'boxwood-bookshelf',
    name: 'Boxwood Bookshelf',
    categorySlug: 'storage',
    brand: 'Blockify Basics',
    priceCents: 1150000,
    compareAtCents: null,
    currency: 'BDT',
    rating: { average: 4.6, count: 3 },
    stock: { state: 'in_stock', quantity: 18 },
    images: ['/mock/products/boxwood-shelf-1.jpg', '/mock/products/boxwood-shelf-2.jpg'],
    variants: [],
    description:
      'A five-tier open bookshelf in solid boxwood-veneer ply, rated for up to 60kg per shelf.',
    tags: ['new'],
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.categorySlug.includes(q)
  )
}

// ---- Homepage-facing derived collections ----
// Kept here (not hardcoded in Home.jsx) so a future API layer only has
// to change these functions, not the page markup that consumes them.

export function getFeaturedProducts(limit = 4) {
  return products.filter((p) => p.tags.includes('bestseller')).slice(0, limit)
}

export function getNewArrivals(limit = 4) {
  return products.filter((p) => p.tags.includes('new')).slice(0, limit)
}

export function getBestSellingProducts(limit = 4) {
  return [...products]
    .filter((p) => p.stock.state !== 'out_of_stock')
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, limit)
}

/** A single in-stock, on-sale product to anchor the homepage promo section. */
export function getPromoProduct() {
  return products.find((p) => p.compareAtCents && p.stock.state !== 'out_of_stock') ?? null
}
