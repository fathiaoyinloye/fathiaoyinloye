import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giveaway Trust & Audit Engine | Fathia Oyinloye",
  description: "QA case study: Giveaway Trust & Audit Engine — in-progress QA work covering test planning, scope definition, and test case preparation.",
};

export default function GiveawayTrustCaseStudy() {
  return (
    <main>
      <Navbar />

      <article style={{ paddingTop: "8rem", paddingBottom: "5rem", padding: "8rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          {/* Back link */}
          <Link
            href="/projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--fg-subtle)", textDecoration: "none",
              fontFamily: "'DM Mono', monospace", marginBottom: "2.5rem",
            }}
          >
            <ArrowLeft size={11} /> BACK TO PROJECTS
          </Link>

          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <p className="section-label">QA CASE STUDY — IN PROGRESS</p>
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              Giveaway Trust &amp; Audit Engine
            </h1>
            <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "640px" }}>
              Giveaway platform trust and audit tooling, currently in development. QA work is in progress and will be updated as activities are completed.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
              {["In Progress", "Test Planning", "Test Case Design"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Status banner */}
          <div style={{
            background: "var(--tag-bg)", border: "1px solid var(--border)",
            borderRadius: "4px", padding: "1rem 1.5rem", marginBottom: "3rem",
            display: "flex", alignItems: "center", gap: "0.75rem",
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b", flexShrink: 0, display: "inline-block" }} />
            <p style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontFamily: "'DM Mono', monospace", lineHeight: 1.6 }}>
              This project is in active development. The QA activities described below reflect work that has been started. Sections marked as <strong>planned</strong> or <strong>in progress</strong> will be updated as the work is completed.
            </p>
          </div>

          <div className="divider" style={{ marginBottom: "3rem" }} />

          {/* Project Overview */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Project Overview</h2>
            <p style={bodyStyle}>
              A giveaway platform focused on trust and auditability.
            </p>
          </section>

          {/* My Contribution */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>My Contribution</h2>
            <p style={bodyStyle}>
              I am responsible for the QA process on this project. Work completed so far:
            </p>
            <ul style={listStyle}>
              <li>Requirements analysis: reviewing the product specification to identify testable requirements and clarify ambiguities</li>
              <li>Test scope definition: identifying what will and will not be tested, and documenting the rationale for each decision</li>
              <li>Test planning: defining test objectives, entry and exit criteria, risk areas, and the testing schedule</li>
              <li>Test case preparation: writing test cases covering the requirements identified in the initial scope</li>
            </ul>
          </section>

          {/* Testing Plan */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Testing Plan</h2>
            <p style={{ ...bodyStyle, marginBottom: "1rem" }}>
              The intended API and UI testing approach is to validate REST API endpoints, request and response contracts, authentication, and error handling using Postman, and to test the front-end interface once it is available. The planned areas are listed below.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { area: "API Testing", status: "Planned", detail: "Validate REST API endpoints, request/response contracts, authentication, and error handling using Postman" },
                { area: "UI Testing", status: "Planned", detail: "Functional testing of the front-end interface once available" },
                { area: "Audit Log Validation", status: "Planned", detail: "Verify that giveaway events are correctly recorded, timestamped, and immutable" },
                { area: "Participant Eligibility", status: "Planned", detail: "Test eligibility checks, boundary conditions, and edge cases for participant filtering" },
                { area: "Defect Management", status: "Planned", detail: "Report, track, and retest defects using the project's issue tracker" },
                { area: "Regression Testing", status: "Planned", detail: "Re-run affected test cases after each fix or change" },
              ].map(({ area, status, detail }) => (
                <div key={area} style={{
                  display: "grid", gridTemplateColumns: "160px auto 1fr", gap: "1rem",
                  padding: "0.9rem 0", borderBottom: "1px solid var(--border)",
                  alignItems: "start",
                }}>
                  <span style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace", paddingTop: "0.1rem" }}>{area}</span>
                  <span className="tag" style={{ alignSelf: "start", whiteSpace: "nowrap" }}>{status}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--fg-muted)", lineHeight: 1.7 }}>{detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Current Status */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Current Status</h2>
            <p style={bodyStyle}>
              This project is in progress. Requirements analysis, test scope definition, test planning, and test case preparation have been completed. API testing, UI testing, defect verification, regression testing, and automation have not been completed and will be documented as the work progresses.
            </p>
          </section>

        </div>
      </article>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          article div[style*="gridTemplateColumns: 160px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

const headingStyle: React.CSSProperties = {
  fontFamily: "'Syne', sans-serif",
  fontWeight: 700,
  fontSize: "1.1rem",
  color: "var(--fg)",
  marginBottom: "1rem",
  letterSpacing: "-0.02em",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "0.85rem",
  color: "var(--fg-muted)",
  lineHeight: 1.9,
};

const listStyle: React.CSSProperties = {
  fontSize: "0.82rem",
  color: "var(--fg-muted)",
  lineHeight: 1.9,
  paddingLeft: "1.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};
