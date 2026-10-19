import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
              <p className="section-label">QA CASE STUDY</p>
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              SmartBudget
            </h1>
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
              A budgeting application.
            </p>
          </section>

          {/* My Contribution */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>My Contribution</h2>
            <p style={bodyStyle}>
              This is a supporting testing project where I focused on the integration and regression aspects of the system. My contributions include:
            </p>
            <ul style={listStyle}>
              <li>Designing and executing integration tests to verify that the application layers (controller, service, and repository) interact correctly</li>
              <li>Testing that report generation modules produce accurate output for different budget configurations</li>
              <li>Verifying that the application handles third-party API failures gracefully, including timeouts, unexpected response formats, and partial data scenarios</li>
              <li>Running regression tests after changes to ensure existing functionality remained stable</li>
              <li>Writing SQL queries to validate that transactions and reports are persisted correctly in the database</li>
            </ul>
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
              Regression testing was performed after changes to the report generation layer to ensure that existing modules remained correct.
            </p>
          </section>

        </div>
      </article>

      <Footer />

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
