"use client";

const edu = [
  {
    degree: "Software Engineering Programme",
    school: "Semicolon Africa",
    location: "Lagos, Nigeria",
    period: "2023 – 2024",
    subjects: ["Java", "Python", "Software Architecture", "Data Structures & Algorithms", "DevOps"],
    note: "Intensive professional engineering programme",
  },
  {
    degree: "OND — Accounting",
    school: "Lagos State Polytechnic",
    location: "Lagos, Nigeria",
    period: "2021 – 2023",
    subjects: ["Financial Logic", "Data Analysis", "Business Systems", "Reporting"],
    note: "Foundation in analytical thinking and precision",
  },
];

export function Education() {
  return (
    <section id="education" style={{ background: "var(--bg-secondary)", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>04 — EDUCATION</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
            Where I Learned
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {edu.map((e, i) => (
            <div key={i} className="card edu-card" style={{ padding: "1.5rem" }}>
              <div className="edu-inner">
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--fg)", marginBottom: "0.2rem" }}>
                    {e.degree}
                  </h3>
                  <p style={{ color: "var(--accent-bright)", fontSize: "0.78rem", marginBottom: "0.15rem", fontFamily: "'DM Mono', monospace" }}>
                    {e.school}
                  </p>
                  <p style={{ color: "var(--fg-subtle)", fontSize: "0.65rem", marginBottom: "1rem", fontFamily: "'DM Mono', monospace" }}>
                    {e.location} · {e.note}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {e.subjects.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                </div>
                <div style={{
                  background: "var(--tag-bg)", border: "1px solid var(--border)",
                  borderRadius: "3px", padding: "0.3rem 0.8rem",
                  fontSize: "0.62rem", fontFamily: "'DM Mono', monospace",
                  color: "var(--fg-subtle)", whiteSpace: "nowrap",
                  alignSelf: "flex-start", flexShrink: 0,
                }}>
                  {e.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        @media (max-width: 500px) {
          .edu-inner {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
