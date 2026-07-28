import { JetBrains_Mono } from "next/font/google";
import EmergencyAdvisory from "./EmergencyAdvisory";
import QuantiqenNavbar from "./QuantiqenNavbar";
import QuantiqenHero from "./QuantiqenHero";
import SignalIntakeEngine from "./SignalIntakeEngine";
import CoreLayer from "./CoreLayer";
import BuiltDifferent from "./BuiltDifferent";
import IndiaMoat from "./IndiaMoat";
import Integrations from "./Integrations";
import QuantiqenFooter from "./QuantiqenFooter";
import Footer from "../components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function QuantiqenPage() {
  return (
    <div className={`pt-14 ${jetbrainsMono.variable}`}>
      {/* <EmergencyAdvisory />
      <QuantiqenNavbar /> */}
      <QuantiqenHero />
      <SignalIntakeEngine />
      <CoreLayer />
      <BuiltDifferent />
      <IndiaMoat />
      <Integrations />
      <QuantiqenFooter />
      <Footer />
    </div>
  );
}
