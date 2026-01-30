import HomePage from "@/app/components/HomePage";
import Features from "./components/Feature";
import BentoGrids from "./components/BentoGrid";
import { AnimatedTestimonialsDemo } from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function Page() {
  return (
    <main className="relative">

      <HomePage />

      <BentoGrids />
      <Features />
      <AnimatedTestimonialsDemo />
      <Contact />
      <Footer />

    </main>
  )
    ;
}