import Link from "next/link";

const footerLinks = [
  { label: "Email", href: "mailto:fathiaoyinloye22@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fathia-oyinloye" },
  { label: "GitHub", href: "https://github.com/fathiaoyinloye" },
];

export function Footer() {
  return (
    <footer style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "2rem 1.5rem 3rem",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--fg)" }}>
          Omotemmy<span style={{ color: "var(--accent-bright)" }}>.</span>
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
{footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                fontSize: "0.85rem",
                color: "var(--fg)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              {label}
            </a>
          ))}
<Link
            href="/contact"
            style={{
              fontSize: "0.85rem",
              color: "var(--fg)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            Contact
          </Link>
        </div>

        <span style={{ fontSize: "0.72rem", color: "var(--fg-muted)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 400 }}>
          © {new Date().getFullYear()} Fathia Oyinloye
        </span>
      </div>
    </footer>
  );
}
