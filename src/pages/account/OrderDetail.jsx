import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs'
import { Badge } from '../../components/ui/Badge'
import { EmptyState } from '../../components/ui/EmptyState'
import { getOrderById } from '../../data/orders'
import { formatPrice, formatOrderDate } from '../../utils/format'
import './OrderDetail.css'

export default function OrderDetail() {
  const { id } = useParams()
  const order = getOrderById(id)

  if (!order) {
    return <EmptyState title="Order not found" actionLabel="Back to orders" actionHref="/account/orders" />
  }

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Orders', href: '/account/orders' }, { label: order.id }]} />
      <div className="order-detail__header">
        <h2 className="font-display">Order {order.id}</h2>
        <Badge tone="verify">{order.status}</Badge>
      </div>
      <p className="order-detail__date">Placed {formatOrderDate(order.placedAt)}</p>
      <ul className="order-detail__items">
        {order.items.map((item) => (
          <li key={item.productSlug}>
            <span>{item.name} × {item.quantity}</span>
            <span>{formatPrice(item.priceCents * item.quantity, order.currency)}</span>
          </li>
        ))}
      </ul>
      <div className="order-detail__total">
        <span>Total</span>
        <strong>{formatPrice(order.total, order.currency)}</strong>
      </div>
    </div>
  )
}
