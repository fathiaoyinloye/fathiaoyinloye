import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Fathia Oyinloye | Software Engineer",
  description: "Junior Software Engineer specializing in Java, Spring Boot, Python & Django. Building scalable, production-grade backend systems. Based in Lagos, Nigeria.",
  keywords: "software engineer, Java developer, Spring Boot, Python, Django, backend engineer, Lagos Nigeria",
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
