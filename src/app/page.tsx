import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <ServicesGrid limit={6} />
      <Features />
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
