import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0D14]">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
