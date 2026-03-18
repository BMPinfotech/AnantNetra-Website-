import Contact from "@/app/components/Contact";
import { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | AnantNetra",
  description: "Have a question or a project idea? Get in touch with our team today.",
};

export default function ContactPage() {
  return (
    // 'pt-24' navbar ke liye spacing chhorne ke liye hai, aap isko adjust kar sakte hain.
    <main className="min-h-screen pt-24 pb-12 bg-white dark:bg-neutral-950">
      <Contact />
      <Footer />
    </main>
  );
}
