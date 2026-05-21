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
    label: "Frontend",
    skills: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Data & Persistence",
    skills: ["PostgreSQL", "SQL", "Custom Persistence Framework", "File I/O", "Data Integrity & Validation"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Docker", "GitHub Actions", "AWS EC2", "Git"],
  },
  {
    label: "Architecture",
    skills: ["Layered Architecture", "Event-Driven Architecture", "Microservices", "OOP Design Patterns"],
  },
  {
    label: "Messaging",
    skills: ["Apache Kafka"],
  },
  {
    label: "Methods & Domain",
    skills: ["Agile / Scrum", "Big O Analysis", "Debugging", "Financial Logic & Reporting"],
  },
  {
    label: "Also Familiar",
    skills: ["Go"],
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

      <div style={{ display: "flex", flexDirection: "column" }}>
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
