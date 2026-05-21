"use client";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    name: "SmartBudget",
    emoji: "💰",
    desc: "Intelligent budget tracking app with pluggable report generation and third-party financial API integration.",
    detail: "Built with layered architecture. Uses the Strategy Pattern so each report type (monthly, category, trends) is an interchangeable module — extending the system never touches core logic.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Strategy Pattern", "External API"],
    github: "https://github.com",
  },
  {
    name: "OmotempoPay",
    emoji: "💸",
    desc: "Django-powered digital wallet supporting deposits, peer-to-peer transfers, and transaction history.",
    detail: "RESTful API endpoints with atomic transaction logic to eliminate double-spend errors. Full authentication and session management tied to all wallet operations.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "REST API"],
    github: "https://github.com",
  },
  {
    name: "Food Notification System",
    emoji: "⚡",
    desc: "Event-driven notification pipeline built on Apache Kafka — brokers, topics, producers, consumers, offset management.",
    detail: "End-to-end message flow tested under failure conditions: consumer restarts, delayed messages, offset resets. Confirmed reliable delivery and correct recovery at each stage.",
    tags: ["Java", "Spring Boot", "Apache Kafka", "Event-Driven"],
    github: "https://github.com",
  },
  {
    name: "Library Management System",
    emoji: "📚",
    desc: "Library system managing a dynamic catalog with 99% data consistency and a borrow-history recommendation engine.",
    detail: "Built in both Java and Python. Recommendation algorithm surfaces books based on user borrow history across 200+ records. Zero data loss on restart.",
    tags: ["Python", "Java", "OOP", "Data Structures", "Algorithms"],
    github: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)", padding: "6rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>02 — PROJECTS</p>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            Things I've Built
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.2rem" }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ padding: "1.8rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.8rem" }}>{p.emoji}</span>
                <div style={{ display: "flex", gap: "0.6rem" }}>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ color: "var(--fg-subtle)", transition: "color 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseOut={e => (e.currentTarget.style.color = "var(--fg-subtle)")}
                  >
                    <GitFork size={15} />
                  </a>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--fg)", marginBottom: "0.4rem" }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: "0.78rem", color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: "0.6rem" }}>
                  {p.desc}
                </p>
                <p style={{ fontSize: "0.73rem", color: "var(--fg-subtle)", lineHeight: 1.7 }}>
                  {p.detail}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
