"use client";

const skillGroups = [
  { label: "Primary Language", skills: ["Java", "Spring Boot", "Spring Data JPA", "JUnit 5", "Mockito"] },
  { label: "Python Stack", skills: ["Python", "Django", "Django REST Framework", "FastAPI"] },
  { label: "Frontend", skills: ["React", "JavaScript", "HTML/CSS"] },
  { label: "Data & Persistence", skills: ["PostgreSQL", "SQL", "Custom Persistence Framework", "File I/O", "Data Integrity & Validation"] },
  { label: "DevOps & Cloud", skills: ["Docker", "GitHub Actions", "AWS EC2", "Git"] },
  { label: "Architecture", skills: ["Layered Architecture", "Event-Driven Architecture", "Microservices", "OOP Design Patterns"] },
  { label: "Messaging", skills: ["Apache Kafka"] },
  { label: "Methods & Domain", skills: ["Agile / Scrum", "Big O Analysis", "Debugging", "Financial Logic & Reporting"] },
  { label: "Also Familiar", skills: ["Go"] },
];

export function Skills() {
  return (
    <section id="skills" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>03 — SKILLS</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
          What I Work With
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-row">
            <span className="skill-label">{group.label}</span>
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

      <style>{`
        .skill-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 1.5rem;
          padding: 1.2rem 0;
          border-bottom: 1px solid var(--border);
          align-items: center;
        }
        .skill-label {
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fg-subtle);
          font-family: 'DM Mono', monospace;
        }
        @media (max-width: 600px) {
          .skill-row {
            grid-template-columns: 1fr;
            gap: 0.6rem;
            padding: 1rem 0;
          }
        }
      `}</style>
    </section>
  );
}
