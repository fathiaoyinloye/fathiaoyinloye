"use client";

const skillGroups = [
  {
    label: "Primary Language",
    skills: ["Java", "Spring Boot", "Spring Data JPA", "JUnit 5", "Mockito"],
  },
  {
    label: "Python Stack",
    skills: ["Python", "Django", "Django REST Framework", "FastAPI"],
  },
  {
    label: "Data & Persistence",
    skills: ["PostgreSQL", "SQL", "Custom Persistence", "Data Integrity", "Atomic Transactions"],
  },
  {
    label: "DevOps & CI/CD",
    skills: ["Git", "GitHub Actions", "Docker", "AWS EC2", "Linux"],
  },
  {
    label: "Architecture",
    skills: ["Layered Architecture", "Event-Driven (Kafka)", "Microservices", "OOP Patterns", "REST API Design"],
  },
  {
    label: "Methods",
    skills: ["Agile / Scrum", "Code Review", "TDD", "Big O Analysis", "Technical Documentation"],
  },
  {
    label: "Also Familiar",
    skills: ["JavaScript", "Go", "Apache Kafka", "React (basic)"],
  },
];

export function Skills() {
  return (
    <section id="skills" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>03 — SKILLS</p>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
          What I Work With
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {skillGroups.map((group, i) => (
          <div
            key={i}
            style={{
              display: "grid", gridTemplateColumns: "200px 1fr",
              gap: "2rem", padding: "1.4rem 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace" }}>
              {group.label}
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {group.skills.map(s => (
                <span
                  key={s}
                  className="tag"
                  style={{ transition: "background 0.2s, color 0.2s", cursor: "default" }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-bright)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--tag-bg)";
                    (e.currentTarget as HTMLElement).style.color = "var(--tag-fg)";
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
