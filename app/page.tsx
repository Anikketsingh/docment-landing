import Head from "next/head";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ScrollHighlight } from "@/components/scroll-highlight";
import { HowItWorks } from "@/components/how-it-works";
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
        <ScrollHighlight />
        <FeaturesSection />
        <HowItWorks />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}