import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Comparison } from "@/components/Comparison";
import { Situations } from "@/components/Situations";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Situations />
      <FAQ />
      <Footer />
    </main>
  );
}
