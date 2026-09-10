// Mock categories — shape mirrors what a future
// GET /api/categories response is expected to return.
export const categories = [
  {
    id: 'cat_desks',
    slug: 'desks',
    name: 'Desks',
    heroImage: '/mock/categories/desks.jpg',
    productCount: 24,
  },
  {
    id: 'cat_seating',
    slug: 'seating',
    name: 'Seating',
    heroImage: '/mock/categories/seating.jpg',
    productCount: 31,
  },
  {
    id: 'cat_storage',
    slug: 'storage',
    name: 'Storage',
    heroImage: '/mock/categories/storage.jpg',
    productCount: 18,
  },
  {
    id: 'cat_lighting',
    slug: 'lighting',
    name: 'Lighting',
    heroImage: '/mock/categories/lighting.jpg',
    productCount: 12,
  },
  {
    id: 'cat_accessories',
    slug: 'accessories',
    name: 'Desk Accessories',
    heroImage: '/mock/categories/accessories.jpg',
    productCount: 40,
  },
]

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) ?? null
}
