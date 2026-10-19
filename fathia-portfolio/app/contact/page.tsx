import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Fathia Oyinloye",
  description: "Get in touch with Fathia Oyinloye — QA Engineer open to full-time roles, internships, and collaborations.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "5rem" }}>
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
