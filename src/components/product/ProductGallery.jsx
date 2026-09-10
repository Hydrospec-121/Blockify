import { useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import './ProductGallery.css'

const SWIPE_THRESHOLD = 40 // px

export function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const touchStartX = useRef(null)

  function go(index) {
    if (index === active) return
    setImageLoaded(false)
    setActive(((index % images.length) + images.length) % images.length)
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }
  function handleTouchEnd(e) {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      go(active + (delta < 0 ? 1 : -1))
    }
    touchStartX.current = null
  }

  return (
    <div className="gallery">
      <div
        className="gallery__main"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[active]}
          alt={alt}
          className={cn('gallery__main-image', { 'is-loaded': imageLoaded })}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Desktop: thumbnail rail (see ProductGallery.css for the
              row-reverse layout swap at 960px). Mobile: dot indicators,
              since thumbnails are too small to tap reliably. */}
          <div className="gallery__thumbs">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={cn('gallery__thumb', { 'gallery__thumb--active': i === active })}
                onClick={() => go(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
          <div className="gallery__dots" role="tablist" aria-label="Product images">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={cn('gallery__dot', { 'gallery__dot--active': i === active })}
                onClick={() => go(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                aria-selected={i === active}
                role="tab"
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
