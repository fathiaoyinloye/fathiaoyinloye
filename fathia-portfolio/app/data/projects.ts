export type Project = {
  slug: string;
  name: string;
  desc: string;
  detail: string;
  tags: string[];
  github: string | null;
};

export const projects: Project[] = [
  {
    slug: "medsync",
    name: "MedSync",
    desc: "Multi-tenant electronic medical records and hospital management system.",
    detail:
      "Primary QA case study. My testing contribution covers test planning and test case design, functional and regression testing, API testing including JWT/RBAC validation, tenant isolation, offline synchronisation, billing validation, database validation, and defect reporting.",
    tags: ["Test Planning", "API Testing", "Regression Testing"],
    github: null,
  },
  {
    slug: "giveaway-trust-audit-engine",
    name: "Giveaway Trust & Audit Engine",
    desc: "Giveaway platform trust and audit tooling, currently in development.",
    detail:
      "I am responsible for the QA process, including requirements analysis, test scope definition, test planning, and test case preparation. API and UI testing, defect management, retesting, and regression testing will be documented as these activities are performed.",
    tags: ["In Progress", "Test Planning", "Test Case Design"],
    github: null,
  },
  {
    slug: "smartbudget",
    name: "SmartBudget",
    desc: "Budget tracking app with pluggable report generation and third-party financial API integration.",
    detail:
      "Supporting testing project focused on integration testing, regression testing, report accuracy, and third-party API failure handling.",
    tags: ["Integration Testing", "Regression Testing"],
    github: null,
  },
];
