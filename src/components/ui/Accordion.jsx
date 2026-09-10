import { useState } from 'react'
import { cn } from '../../utils/cn'
import './Accordion.css'

/**
 * Generic collapsible list — one open panel at a time by default.
 * items: [{ id, title, content }]. Reusable anywhere a page needs to
 * trade vertical scroll for a tap (product info on mobile, FAQs, etc).
 */
export function Accordion({ items, initialOpenId = null, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState(initialOpenId ? [initialOpenId] : [])

  function toggle(id) {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id)
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== id) : [...prev, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className="accordion__item">
            <button
              type="button"
              className="accordion__trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
            >
              <span className="text-h4">{item.title}</span>
              <span className={cn('accordion__caret', { 'is-open': isOpen })} aria-hidden="true">▾</span>
            </button>
            {isOpen && (
              <div id={`accordion-panel-${item.id}`} className="accordion__panel" role="region">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
