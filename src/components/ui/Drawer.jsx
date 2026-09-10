import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'
import './Drawer.css'

/** side: 'right' | 'left' */
export function Drawer({ isOpen, onClose, title, side = 'right', children, footer }) {
  if (!isOpen) return null
  return createPortal(
    <div className="drawer__overlay" onClick={onClose}>
      <div
        className={cn('drawer__panel', `drawer__panel--${side}`)}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer__header">
          <h3 className="font-display">{title}</h3>
          <button className="drawer__close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="drawer__body">{children}</div>
        {footer && <div className="drawer__footer">{footer}</div>}
      </div>
    </div>,
    document.body
  )
}
