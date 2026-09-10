import { Link } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { EmptyState } from '../../components/ui/EmptyState'
import { orders } from '../../data/orders'
import { formatPrice, formatOrderDate } from '../../utils/format'
import './Orders.css'

const statusTone = {
  delivered: 'success',
  shipped: 'verify',
  cancelled: 'error',
}

export default function Orders() {
  if (orders.length === 0) {
    return <EmptyState title="No orders yet" description="Your past orders will show up here." actionLabel="Start shopping" actionHref="/shop" />
  }

  return (
    <ul className="orders-list">
      {orders.map((order) => (
        <li key={order.id} className="orders-list__item">
          <Link to={`/account/orders/${order.id}`} className="orders-list__link">
            <div>
              <p className="orders-list__id">Order {order.id}</p>
              <p className="orders-list__date">{formatOrderDate(order.placedAt)}</p>
            </div>
            <Badge tone={statusTone[order.status] ?? 'ink'}>{order.status}</Badge>
            <strong>{formatPrice(order.total, order.currency)}</strong>
          </Link>
        </li>
      ))}
    </ul>
  )
}
