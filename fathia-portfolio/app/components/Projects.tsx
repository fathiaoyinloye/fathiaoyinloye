"use client";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>01 — PROJECTS</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            Things I&apos;ve Tested &amp; Built
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.6rem" }}>{p.emoji}</span>
                <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      style={{
                        display: "flex", alignItems: "center", gap: "0.3rem",
                        background: "var(--accent-bright)", color: "#fff",
                        padding: "0.25rem 0.6rem", borderRadius: "3px",
                        fontSize: "0.6rem", fontFamily: "'DM Mono', monospace",
                        letterSpacing: "0.08em", textDecoration: "none",
                      }}
                    >
                      <ExternalLink size={10} />
                      LIVE
                    </a>
                  )}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--fg)" }}>
                    {p.name}
                  </h3>
                  {p.live && (
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }} />
                  )}
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: "0.5rem" }}>{p.desc}</p>
                <p style={{ fontSize: "0.72rem", color: "var(--fg-subtle)", lineHeight: 1.7 }}>{p.detail}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <Link
                href={`/projects/${p.slug}`}
                style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--accent-bright)", textDecoration: "none",
                  fontFamily: "'DM Mono', monospace", marginTop: "0.25rem",
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
          gap: 1rem;
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
