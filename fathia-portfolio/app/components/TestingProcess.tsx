const steps = [
  {
    number: "01. Understand Requirements",
    detail:
      "Review requirements, clarify ambiguities, identify acceptance criteria, and consider risks before designing tests.",
  },
  {
    number: "02. Design Tests",
    detail:
      "Develop test scenarios and test cases covering expected behaviour, negative conditions, boundary conditions, and relevant edge cases.",
  },
  {
    number: "03. Execute and Document",
    detail:
      "Execute tests systematically, compare actual results with expected results, record findings, and collect relevant evidence.",
  },
  {
    number: "04. Report and Verify",
    detail:
      "Document defects with reproduction steps, verify fixes, and perform regression testing where appropriate.",
  },
];

export function TestingProcess() {
  return (
    <section id="testing-process" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>02 — TESTING PROCESS</p>
        <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 2.625rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)" }}>
          My Testing Process
        </h2>
      </div>

      <div className="process-grid">
        {steps.map((step, i) => (
          <div key={i} className="card" style={{ padding: "1.75rem 1.9rem" }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "0.72rem",
              letterSpacing: "0.15em", color: "var(--accent-bright)", marginBottom: "0.7rem",
            }}>
              {step.number}
            </p>
            <p style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.8 }}>
              {step.detail}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
