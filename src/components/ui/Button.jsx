import { cn } from '../../utils/cn'
import './Button.css'

/**
 * variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
 * size: 'md' | 'sm'
 * isLoading: shows an inline spinner and disables the button without
 *   changing its width or label (label stays in the DOM for a11y).
 */
export function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn('btn', `btn--${variant}`, `btn--${size}`, { 'btn--loading': isLoading }, className)}
      aria-busy={isLoading || undefined}
      disabled={Tag === 'button' ? disabled || isLoading : undefined}
      {...props}
    >
      {isLoading && <span className="btn__spinner" aria-hidden="true" />}
      <span className="btn__label">{children}</span>
    </Tag>
  )
}

/** A square icon-only button — always gets an aria-label from the caller. */
export function IconButton({ as: Tag = 'button', variant = 'ghost', className, children, ...props }) {
  return (
    <Tag className={cn('icon-btn', `icon-btn--${variant}`, className)} {...props}>
      {children}
    </Tag>
  )
}
