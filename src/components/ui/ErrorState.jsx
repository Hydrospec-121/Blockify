import { Button } from './Button'
import './ErrorState.css'

export function ErrorState({
  title = "Something didn't load",
  description = 'Try again, or come back in a moment.',
  onRetry,
}) {
  return (
    <div className="error-state">
      <h3 className="font-display error-state__title">{title}</h3>
      <p className="error-state__desc">{description}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry} className="error-state__action">
          Try again
        </Button>
      )}
    </div>
  )
}
