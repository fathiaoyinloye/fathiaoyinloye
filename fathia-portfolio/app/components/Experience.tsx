"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const jobs = [
  {
    title: "Backend & Open Source Engineer",
    company: "GitHub Community Projects",
    period: "2024 – Present",
    type: "Remote · Volunteer",
    tags: ["Java", "Spring Boot", "JUnit 5", "Mockito", "GitHub Actions", "Docker"],
    bullets: [
      "Contributed features and bug fixes to open source Java/Spring Boot projects, iterating through code review until merged.",
      "Authored a GitHub Actions CI/CD pipeline that builds, tests, and pushes a versioned Docker image to Docker Hub on every merge.",
      "Wrote JUnit 5 unit tests and Mockito mocks, improving test coverage and catching regressions before they hit main.",
      "Updated README documentation to reduce onboarding friction for new contributors.",
    ],
  },
  {
    title: "Backend Engineer",
    company: "Stackvault Technologies",
    period: "Feb 2023 – Jan 2024",
    type: "Lagos, Nigeria · Full-time (Company closed Jan 2024)",
    tags: ["Java", "Spring Boot", "JWT", "REST APIs", "PostgreSQL", "Agile"],
    bullets: [
      "Built and maintained RESTful APIs for a fintech platform handling user onboarding, wallet management, and transaction processing.",
      "Implemented JWT authentication and role-based access control securing all protected endpoints.",
      "Designed service-layer logic following layered architecture — clean separation across controller, service, and repository layers.",
      "Collaborated in a 4-person Agile team through sprint planning, code reviews, and daily standups.",
    ],
  },
];

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>01 — EXPERIENCE</p>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
          Where I've Worked
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {jobs.map((job, i) => (
          <div
            key={i}
            className="card"
            style={{ padding: "1.5rem 2rem", cursor: "pointer" }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--fg)", marginBottom: "0.2rem" }}>
                  {job.title}
                </h3>
                <p style={{ color: "var(--accent-bright)", fontSize: "0.8rem", fontFamily: "'DM Mono', monospace", marginBottom: "0.2rem" }}>
                  {job.company}
                </p>
                <p style={{ color: "var(--fg-subtle)", fontSize: "0.7rem", fontFamily: "'DM Mono', monospace" }}>
                  {job.type} · {job.period}
                </p>
              </div>
              <ChevronDown
                size={16}
                style={{
                  color: "var(--fg-subtle)", flexShrink: 0,
                  transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease", marginTop: "4px",
                }}
              />
            </div>

            {expanded === i && (
              <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.2rem" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: "0.8rem", fontSize: "0.8rem", color: "var(--fg-muted)", lineHeight: 1.7 }}>
                      <span style={{ color: "var(--accent-bright)", flexShrink: 0, marginTop: "2px" }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
