import './Rating.css'

export function Rating({ average, count, size = 'md' }) {
  const rounded = Math.round(average * 2) / 2
  return (
    <div className={`rating rating--${size}`} aria-label={`Rated ${average} out of 5 from ${count} reviews`}>
      <span className="rating__stars" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => {
          const filled = i + 1 <= rounded
          const half = !filled && i + 0.5 === rounded
          return (
            <span key={i} className="rating__star" data-state={filled ? 'full' : half ? 'half' : 'empty'}>
              ★
            </span>
          )
        })}
      </span>
      {count != null && <span className="rating__count">({count})</span>}
    </div>
  )
}
