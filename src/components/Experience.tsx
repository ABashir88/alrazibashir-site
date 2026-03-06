"use client";
import Link from "next/link";
import { siteConfig } from "../config";

export function Experience() {
  const { sections, experience } = siteConfig;
  return (
    <section id="experience" aria-labelledby="experience-heading" style={{ borderBottom: "1px solid var(--color-border)", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem", maxWidth: "580px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <h2 id="experience-heading" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              {sections.experience.eyebrow}
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 400, color: "var(--color-text)", margin: 0, lineHeight: 1.25 }}>
            {sections.experience.title}
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "0", top: "8px", bottom: "8px", width: "2px", backgroundColor: "var(--color-border)", display: "none" }} className="timeline-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {experience.map((role, i) => (
              <article key={role.company} className="card-hover" style={{
                border: "1px solid var(--color-border)",
                borderLeft: i === 0 ? "3px solid var(--color-accent)" : "1px solid var(--color-border)",
                borderRadius: "16px",
                backgroundColor: i === 0 ? "var(--color-surface-card)" : "var(--color-surface)",
                padding: "1.5rem",
                display: "flex", flexDirection: "column", gap: "1rem"
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 0.25rem", fontFamily: "var(--font-body)" }}>{role.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-accent)", margin: "0 0 0.2rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>{role.company}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}>{role.period}</p>
                    <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>{role.location}</p>
                  </div>
                </div>
                <ul style={{ margin: 0, padding: "0 0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {role.bullets.map((bullet) => (
                    <li key={bullet} style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href={siteConfig.resumeUrl} target="_blank"
            style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            View full resume →
          </Link>
        </div>
      </div>
    </section>
  );
}
