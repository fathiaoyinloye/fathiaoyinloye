"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const roles = ["QA Engineer | API Testing and Test Automation"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        // Wrap in setTimeout to avoid direct setState in effect body
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 1.5rem", paddingTop: "5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

        {/* Mobile: stacked. Desktop: side by side */}
        <div className="hero-grid">

          {/* Photo — shows first on mobile */}
          <div className="hero-photo-wrap">
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "4px", overflow: "hidden",
                border: "1px solid var(--border)",
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                maxWidth: "320px",
                margin: "0 auto",
              }}>
                <Image
                  src="/profile.png"
                  alt="Fathia Oyinloye"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
              <div style={{
                position: "absolute", bottom: "-10px", right: "-10px",
                width: "60px", height: "60px",
                border: "1px solid var(--accent-bright)",
                borderRadius: "2px", zIndex: -1,
              }} />
            </div>
          </div>

          {/* Text content */}
          <div className="hero-text">
            <h1 style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "clamp(2.4rem, 8vw, 4.2rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              color: "var(--fg)", marginBottom: "0.4rem",
            }}>
              Fathia<br />
              <span style={{ color: "var(--accent-bright)" }}>Oyinloye</span>
            </h1>

            <div style={{ height: "2rem", marginBottom: "1.2rem", display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontStyle: "italic", fontSize: "clamp(1.05rem, 3vw, 1.35rem)", color: "var(--fg-muted)" }}>
                {displayed}
              </span>
              <span className="cursor-blink" style={{ display: "inline-block", width: "2px", height: "1.1rem", background: "var(--accent-bright)", marginLeft: "2px" }} />
            </div>

            <p style={{ color: "var(--fg-muted)", lineHeight: 1.85, fontSize: "1rem", maxWidth: "520px", marginBottom: "2rem" }}>
              I am a QA Engineer with a software engineering background. I focus on understanding requirements, evaluating application behaviour, and identifying risks through thoughtful test design and systematic testing.
              <br /><br />
              Based in <span style={{ color: "var(--fg)" }}>Lagos, Nigeria.</span>
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link href="/projects" style={{
                background: "var(--fg)", color: "var(--bg)",
                padding: "0.75rem 1.5rem", borderRadius: "3px",
                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.78rem",
                letterSpacing: "0.1em", textDecoration: "none",
              }}>
                VIEW PROJECTS
              </Link>
              <Link href="/contact" style={{
                border: "1px solid var(--border)", color: "var(--fg-muted)",
                padding: "0.75rem 1.5rem", borderRadius: "3px",
                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.78rem",
                letterSpacing: "0.1em", textDecoration: "none",
              }}>
                CONTACT
              </Link>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { label: "GitHub", href: "https://github.com/fathiaoyinloye" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/fathia-oyinloye" },
                { label: "Email", href: "mailto:fathiaoyinloye22@gmail.com" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.15em", color: "var(--fg-subtle)", textDecoration: "none", textTransform: "uppercase" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }
        .hero-photo-wrap {
          order: 2;
        }
        .hero-text {
          order: 1;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding-top: 1rem;
          }
          .hero-photo-wrap {
            order: 1;
          }
          .hero-text {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
