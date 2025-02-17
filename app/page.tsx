import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ScrollHighlight } from "@/components/scroll-highlight"
import { HowItWorks } from "@/components/how-it-works"
import { DonationSection } from "@/components/donation-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScrollHighlight />
        <HowItWorks />
        <DonationSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}

