export type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  period: string;
  subjects: string[];
  note: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Software Engineering Training",
    school: "Semicolon Africa",
    location: "Lagos, Nigeria",
    period: "2023 – 2024",
    subjects: ["Java", "Python", "Software Architecture", "Data Structures & Algorithms", "DevOps"],
    note: "Intensive professional software engineering training",
  },
  {
    degree: "OND — Accounting",
    school: "Lagos State Polytechnic",
    location: "Lagos, Nigeria",
    period: "2021 – 2023",
    subjects: ["Financial Logic", "Data Analysis", "Business Systems", "Reporting"],
    note: "Foundation in analytical thinking and precision",
  },
];
