import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TestingProcess } from "./components/TestingProcess";
import { Footer } from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />

      {/* Link to full projects page */}
      <div style={{
        background: "var(--bg-secondary)",
        paddingBottom: "3rem",
        display: "flex",
        justifyContent: "center",
      }}>
        <Link
          href="/projects"
          style={{
            border: "1px solid var(--border)",
            color: "var(--fg-muted)",
            padding: "0.7rem 1.6rem",
            borderRadius: "3px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "border-color 0.2s ease, color 0.2s ease",
          }}
        >
          VIEW ALL PROJECTS →
        </Link>
      </div>

      <TestingProcess />

      <Footer />
    </main>
  );
}
