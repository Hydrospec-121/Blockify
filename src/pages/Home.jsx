import { Hero } from '../components/home/Hero'
import { CategorySection } from '../components/home/CategorySection'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { PromoSection } from '../components/home/PromoSection'
import { NewArrivals } from '../components/home/NewArrivals'
import { ValueSection } from '../components/home/ValueSection'
import { ServiceStrip } from '../components/home/ServiceStrip'
import { FinalCTA } from '../components/home/FinalCTA'

// Homepage assembly only — each section is its own component under
// components/home/, reading from data/homepage.js and data/products.js.
// Structure: Hero -> Categories -> Featured -> Promo -> New Arrivals ->
// Value -> Trust strip -> Final CTA. (Footer comes from AppLayout.)
export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <PromoSection />
      <NewArrivals />
      <ValueSection />
      <ServiceStrip />
      <FinalCTA />
    </div>
  )
}
