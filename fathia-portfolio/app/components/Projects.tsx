"use client";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    name: "MedSync",
    emoji: "🏥",
    desc: "Multi-tenant electronic medical records and hospital management system.",
    detail: "Primary QA case study. My testing contribution covers test planning and test case design, functional and regression testing, API testing including JWT/RBAC validation, tenant isolation, offline synchronisation, billing validation, database validation, and defect reporting.",
    tags: ["QA Case Study", "Test Planning", "API Testing", "Regression Testing", "SQL Validation"],
    live: null,
    github: null,
  },
  {
    name: "Giveaway Trust & Audit Engine (In Progress)",
    emoji: "🎁",
    desc: "Giveaway platform trust and audit tooling, currently in development.",
    detail: "I am responsible for the QA process, including requirements analysis, test scope definition, test planning, and test case preparation. API and UI testing, defect management, retesting, and regression testing will be documented as these activities are performed.",
    tags: ["In Progress", "Test Planning", "Test Case Design"],
    live: null,
    github: null,
  },
  {
    name: "SmartBudget",
    emoji: "💰",
    desc: "Budget tracking app with pluggable report generation and third-party financial API integration.",
    detail: "Supporting testing project focused on integration testing, regression testing, report accuracy, and third-party API failure handling. Built with layered architecture using the Strategy Pattern for interchangeable report modules.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Integration Testing", "Regression Testing"],
    live: "https://budget-application-one.vercel.app/",
    github: null,
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>01 — PROJECTS</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            Things I've Tested & Built
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
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{ color: "var(--fg-subtle)" }}
                    >
                      <GitFork size={15} />
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
