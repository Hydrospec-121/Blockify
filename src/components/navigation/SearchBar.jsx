import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchProducts } from '../../data/products'
import { getTrendingSearches, getRecentSearches } from '../../data/search'
import { cn } from '../../utils/cn'
import './SearchBar.css'

/**
 * variant: 'header' (desktop inline) | 'mobile-full' (search page/drawer)
 *
 * Frontend-only search-assist: as the person types, a panel shows
 * matching mock products; when the field is empty and focused, it shows
 * recent + trending searches instead. Wired for a real search API later
 * — only searchProducts()/getTrendingSearches()/getRecentSearches() need
 * to change.
 */
export function SearchBar({ variant = 'inline', onSubmitNavigate }) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const trimmed = query.trim()
  const suggestions = trimmed ? searchProducts(trimmed).slice(0, 5) : []
  const showPanel = isFocused
  const showEmptyState = isFocused && trimmed && suggestions.length === 0

  function goToQuery(q) {
    if (!q.trim()) return
    navigate(`/search?q=${encodeURIComponent(q.trim())}`)
    setIsFocused(false)
    onSubmitNavigate?.()
  }

  function handleSubmit(e) {
    e.preventDefault()
    goToQuery(query)
  }

  function clear() {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className={`search-wrap search-wrap--${variant}`}>
      <form className={cn('search', { 'search--focused': isFocused })} onSubmit={handleSubmit} role="search">
        <span className="search__icon" aria-hidden="true">⌕</span>
        <input
          ref={inputRef}
          type="search"
          className="search__input"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 120)}
          aria-label="Search products"
        />
        {query && (
          <button type="button" className="search__clear" onClick={clear} aria-label="Clear search">✕</button>
        )}
      </form>

      {showPanel && (
        <div className="search-panel" role="listbox">
          {trimmed ? (
            suggestions.length > 0 ? (
              suggestions.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="search-panel__row"
                  onMouseDown={() => navigate(`/product/${p.slug}`)}
                >
                  <img src={p.images[0]} alt="" className="search-panel__thumb" />
                  <span className="search-panel__name">{p.name}</span>
                </button>
              ))
            ) : (
              showEmptyState && (
                <p className="search-panel__empty">No matches for &ldquo;{trimmed}&rdquo;</p>
              )
            )
          ) : (
            <>
              <div className="search-panel__group">
                <span className="text-label">Recent</span>
                {getRecentSearches().map((term) => (
                  <button key={term} type="button" className="search-panel__term" onMouseDown={() => goToQuery(term)}>
                    {term}
                  </button>
                ))}
              </div>
              <div className="search-panel__group">
                <span className="text-label">Trending</span>
                {getTrendingSearches().map((term) => (
                  <button key={term} type="button" className="search-panel__term" onMouseDown={() => goToQuery(term)}>
                    {term}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
