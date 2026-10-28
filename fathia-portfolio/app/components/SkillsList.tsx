"use client";
import { skillGroups } from "../data/skills";

export function SkillsList() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {skillGroups.map((group, i) => (
        <div key={i} className="skill-row">
          <span className="skill-label" style={{ color: "var(--fg)" }}>{group.label}</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {group.skills.map(s => {
              const isLearning = s.toLowerCase().includes("in progress");
              const tagStyles = {
                transition: "background 0.2s, color 0.2s",
                cursor: "default",
                opacity: isLearning ? 0.7 : 1,
                fontStyle: isLearning ? "italic" : "normal",
              };
              const onTagMouseOver = (e: React.MouseEvent<HTMLSpanElement>) => {
                e.currentTarget.style.background = "var(--accent-bright)";
                e.currentTarget.style.color = "#fff";
              };
              const onTagMouseOut = (e: React.MouseEvent<HTMLSpanElement>) => {
                e.currentTarget.style.background = "var(--tag-bg)";
                e.currentTarget.style.color = isLearning ? "var(--tag-fg)" : "var(--tag-fg)";
              };
              const onTagFocus = (e: React.FocusEvent<HTMLSpanElement>) => {
                e.currentTarget.style.background = "var(--accent-bright)";
                e.currentTarget.style.color = "#fff";
              };
              const onTagBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
                e.currentTarget.style.background = isLearning ? "var(--tag-bg)" : "var(--tag-bg)";
                e.currentTarget.style.color = isLearning ? "var(--tag-fg)" : "var(--tag-fg)";
              };
              return (
                <span
                  key={s}
                  className="tag"
                  style={{
                    ...tagStyles,
                  }}
                  onMouseOver={onTagMouseOver}
                  onMouseOut={onTagMouseOut}
                  onFocus={onTagFocus}
                  onBlur={onTagBlur}
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
          font-size: 0.72rem;
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
