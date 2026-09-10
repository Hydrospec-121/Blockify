import { Link } from 'react-router-dom'
import './CategoryCard.css'

export function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <div className="category-card__image-wrap">
        <img src={category.heroImage} alt="" className="category-card__image" loading="lazy" />
      </div>
      <div className="category-card__label">
        <span className="font-display">{category.name}</span>
        <span className="category-card__count">{category.productCount} items</span>
      </div>
    </Link>
  )
}
