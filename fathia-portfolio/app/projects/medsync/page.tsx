import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MedSync | Fathia Oyinloye",
  description: "QA case study: MedSync — multi-tenant electronic medical records and hospital management system.",
};

export default function MedSyncCaseStudy() {
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
              fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--fg-subtle)", textDecoration: "none",
              fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, marginBottom: "2.5rem",
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
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 2.625rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              MedSync
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "660px" }}>
              Multi-tenant electronic medical records and hospital management system.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
              {["QA Case Study", "Test Planning", "API Testing", "Regression Testing", "SQL Validation"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="divider" style={{ marginBottom: "3rem" }} />

          {/* Project Overview */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Project Overview</h2>
            <p style={bodyStyle}>
              MedSync is a multi-tenant electronic medical records and hospital management system. I tested MedSync in a QA capacity; it is not an application I own or developed, and this case study describes only my testing contribution.
            </p>
          </section>

          {/* My Contribution */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>My Contribution</h2>
            <p style={bodyStyle}>
              I am the QA Engineer on MedSync. My contributions include:
            </p>
            <ul style={listStyle}>
              <li>Writing and maintaining the test plan covering scope, entry and exit criteria, test types, and risk areas</li>
              <li>Designing test cases for functional, regression, boundary, and negative scenarios</li>
              <li>Executing API tests using Postman to validate endpoints, authentication flows, and data contracts</li>
              <li>Testing RBAC and JWT token behaviour, including role restrictions, token expiry, and unauthorised access attempts</li>
              <li>Verifying tenant isolation to ensure no cross-tenant data leakage</li>
              <li>Validating offline synchronisation behaviour when connectivity is restored</li>
              <li>Testing billing calculations and third-party payment integrations</li>
              <li>Writing SQL queries to validate database state and data integrity</li>
              <li>Reporting defects with reproduction steps, severity classification, and expected versus actual behaviour</li>
            </ul>
          </section>

          {/* Testing Scope */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Testing Scope</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { area: "Authentication", detail: "JWT token issuance, expiry, refresh, and rejection of invalid tokens" },
                { area: "Authorisation (RBAC)", detail: "Role-based access restrictions across all user types: admin, clinician, billing staff, and patient" },
                { area: "Tenant Isolation", detail: "Cross-tenant data access attempts, including direct ID manipulation" },
                { area: "Functional Testing", detail: "Patient registration, appointment scheduling, medical records CRUD, prescription management" },
                { area: "Billing Validation", detail: "Invoice generation, payment processing, refunds, and fee calculations" },
                { area: "Offline Synchronisation", detail: "Data integrity after reconnection, conflict resolution" },
                { area: "Database Validation", detail: "Direct SQL queries to verify persisted data after API operations" },
                { area: "Regression Testing", detail: "Re-running affected test cases after each bug fix or feature change" },
              ].map(({ area, detail }) => (
                <div key={area} style={{
                  display: "grid", gridTemplateColumns: "180px 1fr", gap: "1rem",
                  padding: "0.9rem 0", borderBottom: "1px solid var(--border)",
                }}>
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-subtle)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, alignSelf: "start", paddingTop: "0.1rem" }}>{area}</span>
                  <span style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.8 }}>{detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Testing Approach */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Testing Approach</h2>
            <p style={bodyStyle}>
              Testing began with a review of requirements and API documentation. I used equivalence partitioning and boundary value analysis to design test cases, focusing on the areas most likely to affect data integrity and security.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              API testing was carried out using Postman collections with environment variables for different tenant contexts. This allowed me to test cross-tenant scenarios systematically, switching between tenant credentials to verify isolation boundaries.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Regression testing is performed after each change to ensure previously working functionality is not broken. SQL queries are used to confirm that the database reflects the expected state after each test operation.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Expected results were defined for each test case, and actual results were compared against them. Defects were documented and reported for verification.
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
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: "1.2rem",
  color: "var(--fg)",
  marginBottom: "1rem",
  letterSpacing: "-0.02em",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--fg-muted)",
  lineHeight: 1.9,
};

const listStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--fg-muted)",
  lineHeight: 1.9,
  paddingLeft: "1.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};
