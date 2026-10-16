import { Navbar } from "../../components/Navbar";
import { Contact } from "../../components/Contact";
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
              <span style={{ fontSize: "2rem" }}>🏥</span>
              <p className="section-label">QA CASE STUDY</p>
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "1rem",
            }}>
              MedSync
            </h1>
            <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.8, maxWidth: "640px" }}>
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
              MedSync is a multi-tenant hospital management system designed to support multiple healthcare facilities operating from a single platform. The system handles electronic medical records, appointment scheduling, billing, and patient data management, with strict tenant isolation to ensure each facility only accesses its own data.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              The application includes role-based access control (RBAC), JWT authentication, offline synchronisation support, and integration with third-party billing systems. These characteristics make it a technically complex system from a QA perspective.
            </p>
          </section>

          {/* My Role */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>My Role and Contribution</h2>
            <p style={bodyStyle}>
              I am the QA lead on MedSync. My contributions include:
            </p>
            <ul style={listStyle}>
              <li>Writing and maintaining the test plan covering scope, entry/exit criteria, test types, and risk areas</li>
              <li>Designing test cases for functional, regression, boundary, and negative scenarios</li>
              <li>Executing API tests using Postman to validate endpoints, authentication flows, and data contracts</li>
              <li>Testing RBAC and JWT token behaviour — including role restrictions, token expiry, and unauthorised access attempts</li>
              <li>Verifying tenant isolation to ensure no cross-tenant data leakage</li>
              <li>Validating offline synchronisation behaviour when connectivity is restored</li>
              <li>Testing billing calculations and third-party payment integrations</li>
              <li>Writing SQL queries to validate database state and data integrity</li>
              <li>Reporting defects with reproduction steps, severity classification, and expected vs actual behaviour</li>
            </ul>
          </section>

          {/* Testing Scope */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Testing Scope</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { area: "Authentication", detail: "JWT token issuance, expiry, refresh, and rejection of invalid tokens" },
                { area: "Authorisation (RBAC)", detail: "Role-based access restrictions across all user types — admin, clinician, billing staff, and patient" },
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
              Testing began with a review of requirements and API documentation. I used equivalence partitioning and boundary value analysis to design test cases, focusing on the areas most likely to affect data integrity and security.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              API testing was carried out using Postman collections with environment variables for different tenant contexts. This allowed me to test cross-tenant scenarios systematically, switching between tenant credentials to verify isolation boundaries.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Regression testing is performed after each change to ensure previously working functionality is not broken. SQL queries are used to confirm that the database reflects the expected state after each test operation.
            </p>
          </section>

          {/* Tools Used */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Tools Used</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["Postman", "SQL", "PostgreSQL", "JUnit 5", "Git", "GitHub"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </section>

          {/* Defects */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Defects and Status</h2>
            <p style={bodyStyle}>
              Specific defect details, reproduction steps, and severity classifications are documented in the project&apos;s issue tracker. The categories of issues identified include:
            </p>
            <ul style={listStyle}>
              <li>Authorisation bypass scenarios where certain role restrictions were not enforced at the API layer</li>
              <li>Tenant isolation gaps where data belonging to one tenant was accessible via direct ID substitution</li>
              <li>Token expiry not handled consistently across some endpoints</li>
              <li>Billing calculation discrepancies under specific discount and tax combinations</li>
              <li>Data integrity issues following offline synchronisation in edge-case connectivity scenarios</li>
            </ul>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              <em style={{ color: "var(--fg-subtle)", fontSize: "0.75rem" }}>
                Note: Exact defect counts, resolution status, and full defect logs are maintained in the project&apos;s internal tracking system. This summary reflects the categories of issues found, not verified totals.
              </em>
            </p>
          </section>

          {/* Results / Lessons Learned */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={headingStyle}>Lessons Learned</h2>
            <p style={bodyStyle}>
              MedSync reinforced the importance of testing RBAC and multi-tenancy explicitly rather than assuming that authentication implies correct authorisation. Testing these concerns at the API layer, independently of the UI, revealed defects that UI-only testing would have missed.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Database-level validation proved essential for confirming that API responses accurately reflect persisted data — particularly for billing and medical record operations where discrepancies between the response and the database would be a serious issue in production.
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
              <li>Exact defect counts and their current resolution status</li>
              <li>Links to test plan and test case documents (if shareable)</li>
              <li>Postman collection link or screenshot examples (if shareable)</li>
              <li>Current project status (active, paused, or complete)</li>
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
