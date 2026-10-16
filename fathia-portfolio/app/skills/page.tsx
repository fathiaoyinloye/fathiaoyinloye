import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
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
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>SKILLS</p>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              What I Test With
            </h1>
            <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "580px" }}>
              My core skills are in manual testing, test design, API testing, and database validation. I have working experience with automation using pytest and JUnit 5, and I am actively learning Playwright. Tools marked <em>(in progress)</em> are ones I am currently developing.
            </p>
          </div>

          <SkillsList />

          <p style={{
            marginTop: "2.5rem", fontSize: "0.7rem", color: "var(--fg-subtle)",
            fontFamily: "'DM Mono', monospace", fontStyle: "italic",
          }}>
            Skills shown in italics are tools I am currently learning or deepening.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}
