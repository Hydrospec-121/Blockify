import './CategoryHeader.css'

/**
 * Editorial category banner — image, name, short description. Kept
 * compact on purpose (see CategoryHeader.css) so it never pushes the
 * product grid below the fold on a phone.
 */
export function CategoryHeader({ category }) {
  return (
    <div className="category-header">
      {category.heroImage && (
        <div className="category-header__visual">
          <img src={category.heroImage} alt="" className="category-header__image" />
        </div>
      )}
      <div className="category-header__text">
        <h1 className="text-h1">{category.name}</h1>
        {category.description && <p className="category-header__desc">{category.description}</p>}
      </div>
    </div>
  )
}
