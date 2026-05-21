"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = ["Software Engineer", "Java Developer", "Backend Engineer", "Open Source Contributor"];

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
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "0 2rem", maxWidth: "1100px", margin: "0 auto",
        paddingTop: "6rem",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "5rem", alignItems: "center", width: "100%" }}>
        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <span className="available-dot" />
            <span style={{ fontSize: "0.7rem", fontFamily: "'DM Mono', monospace", color: "#22c55e", letterSpacing: "0.1em" }}>
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              lineHeight: 1.05, letterSpacing: "-0.03em",
              color: "var(--fg)", marginBottom: "0.4rem",
            }}
          >
            Fathia<br />
            <span style={{ color: "var(--accent-bright)" }}>Oyinloye</span>
          </h1>

          <div style={{ height: "2.2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
            <span className="serif" style={{ fontSize: "1.3rem", color: "var(--fg-muted)", fontStyle: "italic" }}>
              {displayed}
            </span>
            <span className="cursor-blink" style={{ display: "inline-block", width: "2px", height: "1.2rem", background: "var(--accent-bright)", marginLeft: "2px" }} />
          </div>

          <p style={{ color: "var(--fg-muted)", lineHeight: 1.8, fontSize: "0.85rem", maxWidth: "480px", marginBottom: "2.5rem" }}>
            Junior Software Engineer with 2 years shipping production Java and Python applications.
            I build scalable, well-tested backend systems — REST APIs, event-driven pipelines, and CI/CD workflows.
            Based in <span style={{ color: "var(--fg)" }}>Lagos, Nigeria.</span>
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              href="#contact"
              style={{
                background: "var(--fg)", color: "var(--bg)",
                padding: "0.7rem 1.6rem", borderRadius: "3px",
                fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
                letterSpacing: "0.1em", textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              GET IN TOUCH
            </a>
            <a
              href="#projects"
              style={{
                border: "1px solid var(--border)", color: "var(--fg-muted)",
                padding: "0.7rem 1.6rem", borderRadius: "3px",
                fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
                letterSpacing: "0.1em", textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              VIEW PROJECTS
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "GitHub", href: "https://github.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Email", href: "mailto:fathiaoyinloye20@gmail.com" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--fg-subtle)", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--fg-subtle)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div className="photo-frame" style={{ position: "relative" }}>
          <div style={{
            borderRadius: "4px", overflow: "hidden",
            border: "1px solid var(--border)",
            aspectRatio: "3/4",
            position: "relative",
          }}>
            <Image
              src="/profile.png"
              alt="Fathia Oyinloye"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
          {/* Corner accent */}
          <div style={{
            position: "absolute", bottom: "-12px", right: "-12px",
            width: "80px", height: "80px",
            border: "1px solid var(--accent-bright)",
            borderRadius: "2px", zIndex: -1,
          }} />
        </div>
      </div>
    </section>
  );
}
