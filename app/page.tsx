import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" bg-black min-h-screen">
      <Container className="relative">
        <div
          aria-hidden
          className="absolute hidden md:block top-0 h-full border-l border-dashed border-white/10 left-0"
        />

        <div
          aria-hidden
          className="absolute hidden md:block top-0 h-full border-l border-dashed border-white/10 right-0"
        />
        <Navbar />
        <Hero />
        <HowItWorks />
      </Container>
    </div>
  );
}
