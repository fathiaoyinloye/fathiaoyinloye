"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.2rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--fg)", letterSpacing: "-0.02em" }}>
        FO<span style={{ color: "var(--accent-bright)" }}>.</span>
      </span>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["experience", "projects", "skills", "education", "contact"].map(s => (
          <a key={s} href={`#${s}`} className="nav-link" style={{ color: "var(--fg-muted)" }}>{s}</a>
        ))}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              background: "var(--tag-bg)", border: "1px solid var(--border)",
              borderRadius: "4px", padding: "0.35rem 0.5rem",
              cursor: "pointer", color: "var(--fg-muted)",
              display: "flex", alignItems: "center",
              transition: "all 0.2s ease",
            }}
          >
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        )}
      </div>
    </nav>
  );
}
