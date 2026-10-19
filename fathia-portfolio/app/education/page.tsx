import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { education } from "../data/education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Fathia Oyinloye",
  description: "Education background — Semicolon Africa software engineering training and OND in Accounting from Lagos State Polytechnic.",
};

export default function EducationPage() {
  return (
    <main>
      <Navbar />

      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ marginBottom: "3rem" }}>
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>EDUCATION</p>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              Where I Learned
            </h1>
            <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "580px" }}>
              My technical foundation comes from intensive software engineering training at Semicolon Africa, supported by an analytical background from my OND in Accounting.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {education.map((e, i) => (
              <div key={i} className="card edu-card" style={{ padding: "2rem" }}>
                <div className="edu-inner">
                  <div style={{ flex: 1 }}>
                    <h2 style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 700,
                      fontSize: "1.1rem", color: "var(--fg)", marginBottom: "0.2rem",
                    }}>
                      {e.degree}
                    </h2>
                    <p style={{
                      color: "var(--accent-bright)", fontSize: "0.82rem",
                      marginBottom: "0.15rem", fontFamily: "'DM Mono', monospace",
                    }}>
                      {e.school}
                    </p>
                    <p style={{
                      color: "var(--fg-subtle)", fontSize: "0.68rem",
                      marginBottom: "1.2rem", fontFamily: "'DM Mono', monospace",
                    }}>
                      {e.location} · {e.note}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {e.subjects.map(s => (
                        <span key={s} className="tag">{s}</span>
                      ))}
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
      </section>

      <Footer />

      <style>{`
        .edu-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
        }
        @media (max-width: 500px) {
          .edu-inner {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
