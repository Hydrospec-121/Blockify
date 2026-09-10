import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h3 className="font-display">{title}</h3>
          <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.body
  )
}
