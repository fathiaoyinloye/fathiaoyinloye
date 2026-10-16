export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Testing",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Boundary and Negative Testing",
      "Integration Testing",
      "Test Planning",
      "Test Case Design",
      "Requirements Analysis",
      "Defect Reporting",
    ],
  },
  {
    label: "API and Data Validation",
    skills: [
      "Postman",
      "REST API Testing",
      "HTTP Status Codes",
      "JWT Authentication",
      "RBAC Testing",
      "SQL and Database Validation",
    ],
  },
  {
    label: "Automation",
    skills: ["pytest", "JUnit 5", "Cypress", "Mockito", "Playwright (in progress)"],
  },
  {
    label: "Technical Foundation",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Spring Boot",
      "Django",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    label: "Tools and Collaboration",
    skills: ["Git", "GitHub", "GitHub Actions", "Docker", "Agile/Scrum"],
  },
];
