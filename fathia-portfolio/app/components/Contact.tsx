"use client";
import { Mail, GitFork, Link2, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem 8rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>05 — CONTACT</p>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)" }}>
          Let's Work Together
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <div>
          <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
            I'm open to full-time roles, internships, and interesting collaborations.
            If you're building something and need a backend engineer who ships clean,
            tested, documented code — I'd love to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: <Mail size={14} />, label: "fathiaoyinloye21@gmail.com", href: "mailto:fathiaoyinloye20@gmail.com" },
      { icon: <Link2 size={14} />, label: "linkedin.com/in/fathia-oyinloye", href: "https://linkedin.com" },
              { icon: <GitFork size={14} />, label: "github.com/fathia", href: "https://github.com" },
              { icon: <MapPin size={14} />, label: "Lagos, Nigeria", href: null },
            ].map(({ icon, label, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span style={{ color: "var(--accent-bright)" }}>{icon}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer"
                    style={{ fontSize: "0.8rem", color: "var(--fg-muted)", fontFamily: "'DM Mono', monospace", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseOut={e => (e.currentTarget.style.color = "var(--fg-muted)")}
                  >
                    {label}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.8rem", color: "var(--fg-muted)", fontFamily: "'DM Mono', monospace" }}>{label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick message prompt */}
        <div className="card" style={{ padding: "2rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-subtle)", marginBottom: "1.5rem", fontFamily: "'DM Mono', monospace" }}>
            QUICK MESSAGE
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {["Your name", "Your email", "Your message"].map((placeholder, i) => (
              i < 2 ? (
                <input key={placeholder} placeholder={placeholder}
                  style={{
                    background: "var(--bg)", border: "1px solid var(--border)",
                    borderRadius: "3px", padding: "0.7rem 1rem",
                    fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
                    color: "var(--fg)", outline: "none", width: "100%",
                  }}
                />
              ) : (
                <textarea key={placeholder} placeholder={placeholder} rows={4}
                  style={{
                    background: "var(--bg)", border: "1px solid var(--border)",
                    borderRadius: "3px", padding: "0.7rem 1rem",
                    fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
                    color: "var(--fg)", outline: "none", width: "100%",
                    resize: "none",
                  }}
                />
              )
            ))}
            <a
              href="mailto:fathiaoyinloye20@gmail.com"
              style={{
                background: "var(--fg)", color: "var(--bg)",
                padding: "0.75rem", borderRadius: "3px",
                fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
                letterSpacing: "0.1em", textDecoration: "none",
                textAlign: "center", transition: "opacity 0.2s",
              }}
            >
              SEND MESSAGE
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "var(--fg)" }}>
          FO<span style={{ color: "var(--accent-bright)" }}>.</span>
        </span>
        <span style={{ fontSize: "0.65rem", color: "var(--fg-subtle)", fontFamily: "'DM Mono', monospace" }}>
          © {new Date().getFullYear()} Fathia Oyinloye
        </span>
      </div>
    </section>
  );
}
