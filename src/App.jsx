import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Category from './pages/Category'
import Product from './pages/Product'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/account/Account'
import Orders from './pages/account/Orders'
import OrderDetail from './pages/account/OrderDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Wishlist from './pages/Wishlist'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import RefundPolicy from './pages/RefundPolicy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />}>
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
