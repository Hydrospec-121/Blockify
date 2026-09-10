import { Link } from 'react-router-dom'
import './Logo.css'

// The wordmark pairs a small 4-block glyph (literal "blocks") with the
// Space Grotesk wordmark — the one deliberately bold element in the header.
export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="BLOCKIFY home">
      <span className="logo__mark" aria-hidden="true">
        <span /><span /><span /><span />
      </span>
      <span className="logo__word font-display">BLOCKIFY</span>
    </Link>
  )
}
