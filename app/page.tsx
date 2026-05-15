import { Container } from "@/components/Container";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HowTheReviewLooks from "@/components/HowTheReviewLooks";
import Navbar from "@/components/Navbar";
import SelfHost from "@/components/SelfHost";

export default function Home() {
  return (
    <div className=" bg-black min-h-screen">
      <Container className="relative">
        <div
          aria-hidden
          className="absolute hidden md:block top-0 h-full border-l border-dashed border-white/30 left-0"
        />

        <div
          aria-hidden
          className="absolute hidden md:block top-0 h-full border-l border-dashed border-white/30 right-0"
        />
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <HowTheReviewLooks />
        <SelfHost />
      </Container>
    </div>
  );
}
