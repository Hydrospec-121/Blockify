import './ProductSpecs.css'

/** specs: [{ label, value }] — generic label/value layout, no
 *  category-specific assumptions baked into the component itself. */
export function ProductSpecs({ specs, sku }) {
  const rows = [...(specs ?? []), ...(sku ? [{ label: 'SKU', value: sku }] : [])]
  if (rows.length === 0) return null

  return (
    <dl className="product-specs">
      {rows.map((row) => (
        <div key={row.label} className="product-specs__row">
          <dt className="product-specs__label">{row.label}</dt>
          <dd className="product-specs__value">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
