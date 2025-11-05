import Header from '@/components/layout/Header'
import HeroSection from '@/components/layout/HeroSection'
import BannerSection from '@/components/layout/BannerSection'
import ProductsSection from '@/components/product/ProductsSection'
import DailyBest from '@/components/product/DailyBest'
import AllDeals from '@/components/product/AllDeals'
import FooterBanner from '@/components/layout/FooterBanner'
import Features from '@/components/layout/Features'
import Footer from '@/components/layout/Footer'
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BannerSection />
      <ProductsSection />
      <DailyBest />
      <AllDeals />
      <FooterBanner />
      <Features />
      <Footer />
    </main>
  )
}
