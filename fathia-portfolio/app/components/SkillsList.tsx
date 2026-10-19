"use client";
import { skillGroups } from "../data/skills";

export function SkillsList() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {skillGroups.map((group, i) => (
        <div key={i} className="skill-row">
          <span className="skill-label">{group.label}</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {group.skills.map(s => {
              const isLearning = s.toLowerCase().includes("in progress");
              return (
                <span
                  key={s}
                  className="tag"
                  style={{
                    transition: "background 0.2s, color 0.2s",
                    cursor: "default",
                    opacity: isLearning ? 0.7 : 1,
                    fontStyle: isLearning ? "italic" : "normal",
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-bright)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--tag-bg)";
                    (e.currentTarget as HTMLElement).style.color = "var(--tag-fg)";
                  }}
                >
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      ))}

      <style>{`
        .skill-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 1.5rem;
          padding: 1.2rem 0;
          border-bottom: 1px solid var(--border);
          align-items: center;
        }
        .skill-label {
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fg-subtle);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 400;
        }
        @media (max-width: 600px) {
          .skill-row {
            grid-template-columns: 1fr;
            gap: 0.6rem;
            padding: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
}
