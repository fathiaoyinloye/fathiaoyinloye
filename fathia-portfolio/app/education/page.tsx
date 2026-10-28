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
            <h1 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 2.625rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              Where I Learned
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "620px" }}>
              My technical foundation comes from intensive software engineering training at Semicolon Africa, supported by an analytical background from my OND in Accounting.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {education.map((e, i) => (
              <div key={i} className="card edu-card" style={{ padding: "2rem" }}>
                <div className="edu-inner">
                  <div style={{ flex: 1 }}>
                    <h2 style={{
                      fontFamily: "'Inter', sans-serif", fontWeight: 600,
                      fontSize: "1.2rem", color: "var(--fg)", marginBottom: "0.3rem",
                      letterSpacing: "-0.01em",
                    }}>
                      {e.degree}
                    </h2>
                    <p style={{
                      color: "var(--accent-bright)", fontSize: "0.95rem",
                      marginBottom: "0.2rem", fontFamily: "'Inter', sans-serif", fontWeight: 500,
                    }}>
                      {e.school}
                    </p>
                    <p style={{
                      color: "var(--fg-subtle)", fontSize: "0.72rem",
                      marginBottom: "1.2rem", fontFamily: "'JetBrains Mono', monospace", fontWeight: 400,
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
                    fontSize: "0.72rem", fontFamily: "'JetBrains Mono', monospace", fontWeight: 400,
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
