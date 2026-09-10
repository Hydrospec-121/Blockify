import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileBottomNav } from '../navigation/MobileBottomNav'

export function AppLayout() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  )
}
