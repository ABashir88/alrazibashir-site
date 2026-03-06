"use client";
import { siteConfig } from "../config";

export function Wins() {
  const { sections, wins } = siteConfig;
  return (
    <section id="wins" aria-labelledby="wins-heading" style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-surface)", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem", maxWidth: "580px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <h2 id="wins-heading" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              {sections.wins.eyebrow}
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 400, color: "var(--color-text)", margin: 0, lineHeight: 1.25 }}>
            {sections.wins.title}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {wins.map((win) => (
            <article key={win.title} className="card-hover" style={{
              display: "flex", flexDirection: "column", gap: "1rem",
              border: "1px solid var(--color-border)", borderRadius: "16px",
              backgroundColor: "var(--color-bg)", padding: "1.5rem",
              borderTop: "2px solid var(--color-accent)"
            }}>
              {/* Role badge */}
              <span style={{
                display: "inline-block", fontSize: "0.65rem", fontWeight: 600,
                color: "var(--color-accent)", backgroundColor: "var(--color-accent-dim)",
                border: "1px solid var(--color-accent-border)", borderRadius: "999px",
                padding: "0.2rem 0.65rem", fontFamily: "var(--font-body)", alignSelf: "flex-start"
              }}>{win.role}</span>

              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{win.title}</h3>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>{win.summary}</p>

              {/* Outcome block */}
              <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "0.875rem", marginTop: "auto" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-muted)", margin: "0 0 0.3rem", fontFamily: "var(--font-body)" }}>Outcome</p>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", fontWeight: 500 }}>{win.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
