import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Pricing } from "@/components/pricing";
import { HowItWorks } from "@/components/how-it-works";
import { Subscriptions } from "@/components/subscriptions";
import { SpecialtyItems } from "@/components/specialty-items";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7f2]">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <Subscriptions />
      <SpecialtyItems />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}
