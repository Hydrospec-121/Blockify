export function ProductCount({ count }) {
  return (
    <span className="text-body-sm" style={{ color: 'var(--color-ink-soft)' }}>
      {count} {count === 1 ? 'product' : 'products'}
    </span>
  )
}
