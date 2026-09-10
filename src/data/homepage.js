// Homepage-only content blocks (hero, promo, value props, trust strip,
// final CTA). Kept separate from the product/category catalog so a
// future CMS/API integration can replace just these blocks without
// touching product data or page markup.

export const heroContent = {
  eyebrow: 'New season',
  heading: 'Furniture, built in blocks.',
  description:
    'Modular desks, seating and storage designed to click together, ship flat, and hold up to daily use.',
  primaryCta: { label: 'Shop all products', to: '/shop' },
  secondaryCta: { label: 'Shop desks', to: '/category/desks' },
  image: '/mock/hero/hero-desk-setup.jpg',
  imageAlt: 'An Oakline Standing Desk set up in a bright home office',
}

export const promoContent = {
  eyebrow: 'Limited restock',
  heading: 'The Crate Shelf is back — for now.',
  description:
    'Our most-loved modular shelving sold out twice this year. This restock is capped, so it will go quickly again.',
  cta: { label: 'Shop the restock', to: '/product/crate-modular-shelf' },
  image: '/mock/promo/crate-shelf-promo.jpg',
  imageAlt: 'Crate Modular Shelf styled with books and plants',
  productSlug: 'crate-modular-shelf',
}

// Generic placeholder copy — not confirmed business policy. Swap for
// real claims once BLOCKIFY's actual guarantees are provided.
export const valueProps = [
  {
    icon: '◧',
    title: 'Curated, not endless',
    description: 'A focused catalog of pieces we\u2019d put in our own homes — not a warehouse of everything.',
  },
  {
    icon: '◨',
    title: 'Built to be used daily',
    description: 'Materials and hardware chosen for years of real use, not just first-photo good looks.',
  },
  {
    icon: '◩',
    title: 'Ships flat, sets up fast',
    description: 'Modular by design, so most pieces arrive in one box and assemble without a toolkit.',
  },
]

// Also placeholder — a UI scaffold for service messaging, not a
// confirmed policy list.
export const trustItems = [
  { icon: '⛁', label: 'Secure checkout' },
  { icon: '⟲', label: 'Easy returns' },
  { icon: '⌂', label: 'Fast delivery' },
  { icon: '☎', label: 'Real support' },
]

export const finalCta = {
  heading: 'Ready to build your space?',
  description: 'Browse the full catalog — new pieces are added every season.',
  cta: { label: 'Shop all products', to: '/shop' },
}
