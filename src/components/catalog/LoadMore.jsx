import { Button } from '../ui/Button'
import './LoadMore.css'

/** hasMore/onLoadMore/isLoading map directly onto a future paginated
 *  API response (hasMore -> !!response.nextCursor, etc). */
export function LoadMore({ hasMore, onLoadMore, isLoading }) {
  if (!hasMore) return null
  return (
    <div className="load-more">
      <Button variant="outline" onClick={onLoadMore} isLoading={isLoading}>
        Load more
      </Button>
    </div>
  )
}
