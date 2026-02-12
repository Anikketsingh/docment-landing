import Head from "next/head";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { ScrollHighlight } from "@/components/scroll-highlight";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { IndustriesSection } from "@/components/industries-section";
import { PlatformSection } from "@/components/platform-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Docment.ai</title>
        <link rel="icon" href="public/logo.png" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ScrollHighlight />
        {/* <FeaturesSection /> */}
        <HowItWorks />
        {/* <IndustriesSection /> */}
        <PlatformSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}