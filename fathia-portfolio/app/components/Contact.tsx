"use client";
import { useState } from "react";
import { Mail, GitFork, Link2, Globe, MapPin } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_EMAIL = "fathiaoyinloye22@gmail.com";

// Formspree delivers submissions to the inbox. Create a free form at
// https://formspree.io, then set NEXT_PUBLIC_FORMSPREE_ENDPOINT to the form's
// endpoint (https://formspree.io/f/<form-id>) in .env.local. The endpoint is a
// public form identifier, not a secret, and no credentials are committed here.
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type FormspreeError = { field?: string; message?: string };

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function validate(): string | null {
    if (name.trim().length < 2) return "Please enter your name.";
    if (!EMAIL_PATTERN.test(email.trim())) return "Please enter a valid email address.";
    if (subject.trim().length < 3) return "Please enter a subject.";
    if (message.trim().length < 10) return "Please enter a message of at least 10 characters.";
    return null;
  }

  function describeErrors(errors: FormspreeError[]): string | null {
    if (!errors.length) return null;
    const first = errors[0];
    if (!first?.message) return null;
    return first.field
      ? `${first.field.charAt(0).toUpperCase()}${first.field.slice(1)}: ${first.message}.`
      : `${first.message}.`;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || submitted) return;

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setFeedback(
        `The contact form is not configured yet. Please email ${CONTACT_EMAIL} directly.`
      );
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });

      const payload = await response.json().catch(() => null);
      const errors: FormspreeError[] = Array.isArray(payload?.errors) ? payload.errors : [];

      if (!response.ok || errors.length || payload?.ok === false) {
        const described = describeErrors(errors);
        setStatus("error");
        setFeedback(
          described ??
          (response.status === 429
            ? "Too many messages were sent from this address. Please try again later or email me directly."
            : "Something went wrong while sending your message. Please try again or email me directly.")
        );
        return;
      }

      setStatus("success");
      setFeedback("Thanks! Your message has been sent. I'll get back to you soon.");
      setSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback(
        "Something went wrong while sending your message. Please try again or email me directly."
      );
    }
  }

  const busy = status === "submitting" || submitted;

  return (
    <section id="contact" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem 5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>04 — CONTACT</p>
        <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 2.625rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)" }}>
          Contact
        </h2>
      </div>

      <div className="contact-grid">
        <div>
          <p style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.85, marginBottom: "2rem" }}>
            I&apos;m open to full-time QA roles, internships, and interesting collaborations.
            If you&apos;re building something and need a QA engineer who understands requirements,
            designs meaningful test scenarios, and verifies fixes, I&apos;d love to hear from you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: <Mail size={14} />, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
              { icon: <Link2 size={14} />, label: "linkedin.com/in/fathia-oyinloye", href: "https://www.linkedin.com/in/fathia-oyinloye" },
              { icon: <GitFork size={14} />, label: "github.com/fathiaoyinloye", href: "https://github.com/fathiaoyinloye" },
              { icon: <Globe size={14} />, label: "fathiaoyinloye.vercel.app", href: "https://fathiaoyinloye.vercel.app/" },
              { icon: <MapPin size={14} />, label: "Lagos, Nigeria", href: null },
            ].map(({ icon, label, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span style={{ color: "var(--accent-bright)", flexShrink: 0 }}>{icon}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer"
                    style={{ fontSize: "0.95rem", color: "var(--fg-muted)", fontFamily: "'Inter', sans-serif", fontWeight: 500, textDecoration: "none", wordBreak: "break-all" }}
                  >
                    {label}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.95rem", color: "var(--fg-muted)", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: "1.75rem 1.9rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-subtle)", marginBottom: "1.2rem", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            QUICK MESSAGE
          </p>
          <form onSubmit={handleSubmit} aria-busy={status === "submitting"} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "3px", padding: "0.65rem 0.9rem",
                fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1rem",
                color: "var(--fg)", outline: "none", width: "100%",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Your email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "3px", padding: "0.65rem 0.9rem",
                fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1rem",
                color: "var(--fg)", outline: "none", width: "100%",
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "3px", padding: "0.65rem 0.9rem",
                fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1rem",
                color: "var(--fg)", outline: "none", width: "100%",
              }}
            />
            <textarea
              name="message"
              placeholder="Your message"
              aria-label="Your message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                background: "var(--bg)", border: "1px solid var(--border)",
                borderRadius: "3px", padding: "0.65rem 0.9rem",
                fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1rem",
                color: "var(--fg)", outline: "none", width: "100%", resize: "none",
              }}
            />
            <button
              type="submit"
              disabled={busy}
              style={{
                background: "var(--fg)", color: "var(--bg)",
                padding: "0.75rem", borderRadius: "3px",
                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textAlign: "center", display: "block",
                border: "none", cursor: busy ? "not-allowed" : "pointer",
                opacity: busy ? 0.7 : 1, width: "100%",
              }}
            >
              {status === "submitting" ? "SENDING…" : submitted ? "MESSAGE SENT" : "SEND MESSAGE"}
            </button>
            {feedback && (
              <p
                role="status"
                aria-live="polite"
                style={{
                  fontSize: "0.85rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: status === "success" ? "#22c55e" : "#ef4444",
                }}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
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
