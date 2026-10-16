export type Project = {
  slug: string;
  name: string;
  emoji: string;
  desc: string;
  detail: string;
  tags: string[];
  live: string | null;
  github: string | null;
};

export const projects: Project[] = [
  {
    slug: "medsync",
    name: "MedSync",
    emoji: "🏥",
    desc: "Multi-tenant electronic medical records and hospital management system.",
    detail:
      "Primary QA case study. My testing contribution covers test planning and test case design, functional and regression testing, API testing including JWT/RBAC validation, tenant isolation, offline synchronisation, billing validation, database validation, and defect reporting.",
    tags: ["QA Case Study", "Test Planning", "API Testing", "Regression Testing", "SQL Validation"],
    live: null,
    github: null,
  },
  {
    slug: "giveaway-trust-audit-engine",
    name: "Giveaway Trust & Audit Engine",
    emoji: "🎁",
    desc: "Giveaway platform trust and audit tooling, currently in development.",
    detail:
      "I am responsible for the QA process, including requirements analysis, test scope definition, test planning, and test case preparation. API and UI testing, defect management, retesting, and regression testing will be documented as these activities are performed.",
    tags: ["In Progress", "Test Planning", "Test Case Design"],
    live: null,
    github: null,
  },
  {
    slug: "smartbudget",
    name: "SmartBudget",
    emoji: "💰",
    desc: "Budget tracking app with pluggable report generation and third-party financial API integration.",
    detail:
      "Supporting testing project focused on integration testing, regression testing, report accuracy, and third-party API failure handling. Built with layered architecture using the Strategy Pattern for interchangeable report modules.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Integration Testing", "Regression Testing"],
    live: "https://budget-application-one.vercel.app/",
    github: null,
  },
];
