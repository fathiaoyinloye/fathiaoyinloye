import { Navbar } from "../../components/Navbar";
import { Contact } from "../../components/Contact";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartBudget | Fathia Oyinloye",
  description: "QA case study: SmartBudget — integration testing, regression testing, report accuracy, and third-party API failure handling.",
};

export default function SmartBudgetCaseStudy() {
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
              <span style={{ fontSize: "2rem" }}>💰</span>
              <p className="section-label">QA CASE STUDY</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
              <h1 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
              }}>
                SmartBudget
              </h1>
              <a href="https://budget-application-one.vercel.app/" target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  background: "var(--accent-bright)", color: "#fff",
                  padding: "0.4rem 0.9rem", borderRadius: "3px",
                  fontSize: "0.6rem", fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.08em", textDecoration: "none",
                  alignSelf: "center", whiteSpace: "nowrap", flexShrink: 0,
                }}
              >
                <ExternalLink size={10} /> LIVE DEMO
              </a>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "640px" }}>
              Budget tracking application with pluggable report generation and third-party financial API integration.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
              {["Java", "Spring Boot", "PostgreSQL", "Integration Testing", "Regression Testing"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="divider" style={{ marginBottom: "3rem" }} />

          {/* Project Overview */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Project Overview</h2>
            <p style={bodyStyle}>
              SmartBudget is a personal budget tracking application built with Java and Spring Boot. It uses a layered architecture and implements the Strategy Pattern, making report generation modules interchangeable. The application integrates with a third-party financial data API to enrich transaction data.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              The system stores transaction records in PostgreSQL, generates customisable budget reports, and handles various edge cases around external API availability.
            </p>
          </section>

          {/* My Role */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>My Role and Contribution</h2>
            <p style={bodyStyle}>
              This is a supporting testing project where I focused on the integration and regression aspects of the system. My contributions include:
            </p>
            <ul style={listStyle}>
              <li>Designing and executing integration tests to verify that the application layers — controller, service, and repository — interact correctly</li>
              <li>Testing that report generation modules produce accurate output for different budget configurations</li>
              <li>Verifying that the application handles third-party API failures gracefully — including timeouts, unexpected response formats, and partial data scenarios</li>
              <li>Running regression tests after changes to ensure existing functionality remained stable</li>
              <li>Writing SQL queries to validate that transactions and reports are persisted correctly in the database</li>
            </ul>
          </section>

          {/* Testing Scope */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Testing Scope</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { area: "Integration Testing", detail: "End-to-end flow from API request through service layer to database persistence" },
                { area: "Report Accuracy", detail: "Correctness of generated reports across different date ranges, categories, and budget configurations" },
                { area: "Strategy Pattern", detail: "Verifying that pluggable report modules are interchangeable and produce consistent output" },
                { area: "Third-Party API Failure", detail: "Application behaviour when the external financial API is unavailable, slow, or returns unexpected data" },
                { area: "Regression Testing", detail: "Re-running affected tests after changes to core modules and report generation logic" },
                { area: "Database Validation", detail: "SQL queries to confirm persisted records match expected state after API operations" },
              ].map(({ area, detail }) => (
                <div key={area} style={{
                  display: "grid", gridTemplateColumns: "180px 1fr", gap: "1rem",
                  padding: "0.9rem 0", borderBottom: "1px solid var(--border)",
                }}>
                  <span style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace", alignSelf: "start", paddingTop: "0.1rem" }}>{area}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--fg-muted)", lineHeight: 1.7 }}>{detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Testing Approach */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Testing Approach</h2>
            <p style={bodyStyle}>
              Integration tests were written using JUnit 5 and Mockito to isolate the third-party API dependency, allowing me to simulate failure scenarios without relying on a live external service. This made it practical to test how the application responds to timeouts, HTTP 5xx errors, and malformed responses.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Report accuracy tests used known transaction data sets to verify that generated reports matched expected totals, category breakdowns, and date filters. These tests were run across all available report modules to confirm consistent behaviour.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Regression testing was performed after each architectural change to the report generation layer to ensure that the Strategy Pattern refactoring did not affect the correctness of existing modules.
            </p>
          </section>

          {/* Tools Used */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Tools Used</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["Java", "Spring Boot", "JUnit 5", "Mockito", "PostgreSQL", "SQL", "Git", "GitHub"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </section>

          {/* Defects */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Issues Found</h2>
            <p style={bodyStyle}>
              Testing identified issues in the following areas:
            </p>
            <ul style={listStyle}>
              <li>Report generation returning incorrect totals for transactions spanning month boundaries under certain date range configurations</li>
              <li>Insufficient error handling when the third-party API returned an HTTP 503 response — the application surfaced an unhandled exception rather than a graceful fallback</li>
              <li>Database records not rolling back correctly when a transaction was partially written during an API failure scenario</li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              <em style={{ color: "var(--fg-subtle)", fontSize: "0.75rem" }}>
                Note: This reflects the categories of issues observed. Full defect logs with reproduction steps are maintained in the project repository.
              </em>
            </p>
          </section>

          {/* Results */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Lessons Learned</h2>
            <p style={bodyStyle}>
              Testing SmartBudget highlighted how integration tests provide value that unit tests cannot: the report accuracy issues and database rollback failure only became visible when testing the full flow from API to database, rather than testing individual methods in isolation.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Using Mockito to simulate third-party failures made it practical to test error-handling paths that would otherwise require a live external service in a specific failure state — a scenario difficult to reliably reproduce manually.
            </p>
          </section>

          {/* What I Need to Fill In */}
          <section style={{
            background: "var(--tag-bg)", border: "1px solid var(--border)",
            borderRadius: "4px", padding: "1.5rem", marginBottom: "3rem",
          }}>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace", marginBottom: "0.8rem" }}>
              TO FILL IN
            </p>
            <ul style={{ ...listStyle, color: "var(--fg-muted)" }}>
              <li>Exact defect counts and resolution status</li>
              <li>Link to test code in the repository (if public)</li>
              <li>Current project status</li>
            </ul>
          </section>

        </div>
      </article>

      <Contact />

      <style>{`
        @media (max-width: 500px) {
          article div[style*="gridTemplateColumns"] {
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
