import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Fathia Oyinloye | QA Engineer",
  description: "QA Engineer with a software engineering background, specializing in manual testing, API testing, and test automation. Validating functionality, APIs, and data integrity. Based in Lagos, Nigeria.",
  keywords: "QA engineer, quality engineer, API testing, test automation, manual testing, Postman, pytest, Lagos Nigeria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
