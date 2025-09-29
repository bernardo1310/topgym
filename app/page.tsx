import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing-section"
import { ScheduleSection } from "@/components/schedule-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PricingSection />
      <ScheduleSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
