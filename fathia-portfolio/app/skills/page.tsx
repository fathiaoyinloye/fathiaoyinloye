import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SkillsList } from "../components/SkillsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Fathia Oyinloye",
  description: "QA skills and tools — manual testing, API testing, test automation, SQL validation, and software engineering foundations.",
};

export default function SkillsPage() {
  return (
    <main>
      <Navbar />

      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ marginBottom: "3rem" }}>
            <h1 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 2.625rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              What I Test With
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--fg)", lineHeight: 1.8, maxWidth: "620px" }}>
              My core skills are in manual testing, test design, API testing, and database validation. I have working experience with automation using pytest and Cypress.
            </p>
          </div>

          <SkillsList />
        </div>
      </section>

      <Footer />
    </main>
  );
}
