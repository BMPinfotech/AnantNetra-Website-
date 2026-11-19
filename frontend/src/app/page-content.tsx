import CapabilitiesSection from "./components/CapabilitiesSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HowWeWork from "./components/HowWeWork";
import PreFooterCTA from "./components/PreFooterCTA";
import ProductsSection from "./components/ProductsSection";

export default function PageContent() {
  return (
    <>
      <ProductsSection />
      <CapabilitiesSection />
      <HowWeWork />
      <Contact />
      <PreFooterCTA />
      <Footer />
    </>
  );
}
