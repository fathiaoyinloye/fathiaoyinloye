"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>01 — PROJECTS</p>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 2.625rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            Things I&apos;ve Tested
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ padding: "1.75rem 1.9rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.2rem", color: "var(--fg)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.75, marginBottom: "0.5rem" }}>{p.desc}</p>
                <p style={{ fontSize: "0.95rem", color: "var(--fg-subtle)", lineHeight: 1.7 }}>{p.detail}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <Link
                href={`/projects/${p.slug}`}
                className="link-accent"
                style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif", fontWeight: 500,
                  marginTop: "auto", paddingTop: "0.5rem",
                }}
              >
                VIEW CASE STUDY <ArrowRight size={11} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
