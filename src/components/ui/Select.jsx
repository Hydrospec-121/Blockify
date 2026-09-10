import { cn } from '../../utils/cn'
import './Select.css'

export function Select({ label, id, options, className, ...props }) {
  return (
    <div className={cn('field', className)}>
      {label && <label htmlFor={id} className="field__label">{label}</label>}
      <select id={id} className="select" {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}
