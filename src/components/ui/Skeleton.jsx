import { cn } from '../../utils/cn'
import './Skeleton.css'

export function Skeleton({ className, style }) {
  return <div className={cn('skeleton', className)} style={style} />
}

export function ProductCardSkeleton() {
  return (
    <div className="skeleton-card">
      <Skeleton className="skeleton-card__image" />
      <Skeleton className="skeleton-card__line" style={{ width: '70%' }} />
      <Skeleton className="skeleton-card__line" style={{ width: '40%' }} />
    </div>
  )
}
