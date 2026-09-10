import { SectionHeading } from '../ui/SectionHeading'
import { CategoryCard } from '../product/CategoryCard'
import { categories } from '../../data/categories'
import './CategorySection.css'

// Mobile: a horizontal snap-scroll row — faster to scan one-handed than
// a tall 2-column grid, and keeps the homepage short.
// Desktop: an asymmetric composition — one large feature card plus a
// tighter grid of the rest, instead of five identical tiles in a row.
export function CategorySection() {
  const [featured, ...rest] = categories

  return (
    <section className="container home-section">
      <SectionHeading title="Shop by category" actionLabel="View all" actionHref="/shop" />

      <div className="category-scroll">
        {categories.map((c) => (
          <div key={c.id} className="category-scroll__item">
            <CategoryCard category={c} />
          </div>
        ))}
      </div>

      <div className="category-bento">
        <div className="category-bento__feature">
          <CategoryCard category={featured} />
        </div>
        <div className="category-bento__rest">
          {rest.map((c) => <CategoryCard key={c.id} category={c} />)}
        </div>
      </div>
    </section>
  )
}
