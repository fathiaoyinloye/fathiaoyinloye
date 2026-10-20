"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Deferred to avoid setState-in-effect cascade (hydration pattern)
    const t = setTimeout(() => setMounted(true), 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const t = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1rem 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled || menuOpen ? "var(--bg)" : "transparent",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--fg)", letterSpacing: "-0.02em" }}>
            Omotemmy<span style={{ color: "var(--accent-bright)" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="nav-link"
              style={{
                color: isActive(href) ? "var(--fg)" : undefined,
                borderBottom: isActive(href) ? "1px solid var(--accent-bright)" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {label.toUpperCase()}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                background: "var(--tag-bg)", border: "1px solid var(--border)",
                borderRadius: "4px", padding: "0.35rem 0.5rem",
                cursor: "pointer", color: "var(--fg-muted)",
                display: "flex", alignItems: "center", transition: "all 0.2s ease",
              }}
            >
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            </button>
          )}
        </div>

        {/* Mobile right side */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }} className="mobile-nav">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                background: "var(--tag-bg)", border: "1px solid var(--border)",
                borderRadius: "4px", padding: "0.35rem 0.5rem",
                cursor: "pointer", color: "var(--fg-muted)",
                display: "flex", alignItems: "center",
              }}
            >
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none", border: "none",
              cursor: "pointer", color: "var(--fg)",
              display: "flex", alignItems: "center", padding: "0.2rem",
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "57px", left: 0, right: 0, zIndex: 99,
          background: "var(--bg)", borderBottom: "1px solid var(--border)",
          padding: "1rem 1.5rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "1.2rem",
        }} className="mobile-menu">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: "0.78rem", letterSpacing: "0.15em",
                textTransform: "uppercase", color: isActive(href) ? "var(--fg)" : "var(--fg-muted)",
                textDecoration: "none", fontFamily: "'Inter', sans-serif", fontWeight: 500,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        .mobile-menu { display: flex !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
