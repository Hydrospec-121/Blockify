import { cn } from '../../utils/cn'
import './Input.css'

export function Input({ label, id, error, className, ...props }) {
  return (
    <div className={cn('field', className)}>
      {label && <label htmlFor={id} className="field__label">{label}</label>}
      <input id={id} className={cn('field__input', { 'field__input--error': !!error })} {...props} />
      {error && <span className="field__error">{error}</span>}
    </div>
  )
}
