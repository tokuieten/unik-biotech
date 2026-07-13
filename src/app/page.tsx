import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import CompanyStory from "@/components/home/CompanyStory";
import FeaturedProducts from "@/components/home/FeaturedProducts/FeaturedProducts";
import DealerNetwork from "@/components/home/DealerNetwork";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8FAF7]">
      <Hero />

      <TrustStrip />

      <CompanyStory />

      <FeaturedProducts />

      <DealerNetwork />

      <Testimonials />

      <CTA />
    </main>
  );
}