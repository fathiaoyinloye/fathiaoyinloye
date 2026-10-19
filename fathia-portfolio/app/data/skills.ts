export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Testing and Test Design",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Test Case Design",
      "Boundary Value Analysis",
      "Negative Testing",
      "Defect Reporting",
    ],
  },
  {
    label: "API and Data Validation",
    skills: [
      "Postman",
      "REST API Testing",
      "SQL",
      "Database Validation",
      "Authentication and Authorisation Testing",
    ],
  },
  {
    label: "Automation and Engineering Foundation",
    skills: [
      "pytest",
      "JUnit 5",
      "Cypress",
      "Playwright",
      "Java",
      "Python",
      "JavaScript and TypeScript",
      "Git",
      "CI/CD",
    ],
  },
];
