"use client";
import { Mail, GitFork, Link2, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>05 — CONTACT</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
          Let's Work Together
        </h2>
      </div>

      <div className="contact-grid">
        <div>
          <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
            I'm open to full-time roles, internships, and interesting collaborations.
            If you're building something and need a backend engineer who ships clean,
            tested, documented code — I'd love to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: <Mail size={14} />, label: "fathiaoyinloye20@gmail.com", href: "mailto:fathiaoyinloye20@gmail.com" },
              { icon: <Link2 size={14} />, label: "linkedin.com/in/fathia-oyinloye", href: "https://linkedin.com" },
              { icon: <GitFork size={14} />, label: "github.com/fathia", href: "https://github.com" },
              { icon: <MapPin size={14} />, label: "Lagos, Nigeria", href: null },
            ].map(({ icon, label, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span style={{ color: "var(--accent-bright)", flexShrink: 0 }}>{icon}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer"
                    style={{ fontSize: "0.78rem", color: "var(--fg-muted)", fontFamily: "'DM Mono', monospace", textDecoration: "none", wordBreak: "break-all" }}
                  >
                    {label}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.78rem", color: "var(--fg-muted)", fontFamily: "'DM Mono', monospace" }}>{label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: "1.5rem" }}>
          <p style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-subtle)", marginBottom: "1.2rem", fontFamily: "'DM Mono', monospace" }}>
            QUICK MESSAGE
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {["Your name", "Your email"].map(placeholder => (
              <input key={placeholder} placeholder={placeholder}
                style={{
                  background: "var(--bg)", border: "1px solid var(--border)",
                  borderRadius: "3px", padding: "0.65rem 0.9rem",
                  fontFamily: "'DM Mono', monospace", fontSize: "0.73rem",
                  color: "var(--fg)", outline: "none", width: "100%",
                }}
              />
            ))}
            <textarea placeholder="Your message" rows={4}
              style={{
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "3px", padding: "0.65rem 0.9rem",
                fontFamily: "'DM Mono', monospace", fontSize: "0.73rem",
                color: "var(--fg)", outline: "none", width: "100%", resize: "none",
              }}
            />
            <a href="mailto:fathiaoyinloye20@gmail.com"
              style={{
                background: "var(--fg)", color: "var(--bg)",
                padding: "0.75rem", borderRadius: "3px",
                fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
                letterSpacing: "0.1em", textDecoration: "none",
                textAlign: "center", display: "block",
              }}
            >
              SEND MESSAGE
            </a>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "var(--fg)" }}>
          FO<span style={{ color: "var(--accent-bright)" }}>.</span>
        </span>
        <span style={{ fontSize: "0.62rem", color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace" }}>
          © {new Date().getFullYear()} Fathia Oyinloye
        </span>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 700px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
