"use client";

const edu = [
  {
    degree: "Software Engineering Programme",
    school: "Semicolon Africa",
    location: "Lagos, Nigeria",
    period: "2023 – 2024",
    subjects: ["Java", "Python", "Software Architecture", "Data Structures & Algorithms", "DevOps"],
    note: "Intensive professional engineering programme"
  },
  {
    degree: "HND — Accounting",
    school: "Lagos State Polytechnic",
    location: "Lagos, Nigeria",
    period: "2021 – 2023",
    subjects: ["Financial Logic", "Data Analysis", "Business Systems", "Reporting"],
    note: "Foundation in analytical thinking and precision"
  },
];

export function Education() {
  return (
    <section id="education" style={{ background: "var(--bg-secondary)", padding: "6rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>04 — EDUCATION</p>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            Where I Learned
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {edu.map((e, i) => (
            <div key={i} className="card" style={{ padding: "2rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--fg)", marginBottom: "0.2rem" }}>
                  {e.degree}
                </h3>
                <p style={{ color: "var(--accent-bright)", fontSize: "0.8rem", marginBottom: "0.2rem", fontFamily: "'DM Mono', monospace" }}>
                  {e.school}
                </p>
                <p style={{ color: "var(--fg-subtle)", fontSize: "0.7rem", marginBottom: "1rem", fontFamily: "'DM Mono', monospace" }}>
                  {e.location} · {e.note}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {e.subjects.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
              <div style={{
                background: "var(--tag-bg)", border: "1px solid var(--border)",
                borderRadius: "3px", padding: "0.3rem 0.8rem",
                fontSize: "0.65rem", fontFamily: "'DM Mono', monospace",
                color: "var(--fg-subtle)", whiteSpace: "nowrap",
              }}>
                {e.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
