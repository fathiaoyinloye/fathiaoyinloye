import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Fathia Oyinloye",
  description: "QA projects by Fathia Oyinloye — case studies covering manual testing, API testing, and test automation.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>PROJECTS</p>
            <h1 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              Things I&apos;ve Tested
            </h1>
            <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "580px" }}>
              QA case studies and projects that demonstrate my testing approach. Each entry links to a full case study with scope, methods, tools, and outcomes.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((p, i) => (
              <div key={i} className="card project-item" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "240px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                      <h2 style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 600,
                        fontSize: "1.1rem", color: "var(--fg)",
                      }}>
                        {p.name}
                      </h2>
                      {p.tags.includes("In Progress") && (
                        <span className="tag" style={{ background: "var(--tag-bg)", color: "var(--fg-muted)" }}>IN PROGRESS</span>
                      )}
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", lineHeight: 1.8, marginBottom: "0.75rem", maxWidth: "520px" }}>
                      {p.desc}
                    </p>
                    <p style={{ fontSize: "0.73rem", color: "var(--fg-subtle)", lineHeight: 1.7, marginBottom: "1.2rem", maxWidth: "520px" }}>
                      {p.detail}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {p.tags.filter(t => t !== "In Progress").map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", alignItems: "flex-end", flexShrink: 0 }}>
                    <Link
                      href={`/projects/${p.slug}`}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.4rem",
                        fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "var(--accent-bright)", textDecoration: "none",
                        fontFamily: "'Inter', sans-serif", fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      VIEW CASE STUDY <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .project-item {
          transition: border-color 0.2s ease;
        }
      `}</style>
    </main>
  );
}
