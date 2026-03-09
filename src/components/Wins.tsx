"use client";
import { siteConfig } from "../config";

// Extract the dollar amount from the outcome string for display
const dealAmounts: Record<string, { acv: string; arr: string }> = {
  "De-risked a Genesys Cloud and conversational AI migration": { acv: "$617K TCV", arr: "$205K ARR" },
  "Replaced an incumbent carrier for a Voice AI platform": { acv: "$370K ACV", arr: "$185K ARR" },
  "Closed a Flex contact center modernization deal": { acv: "$730K ACV", arr: "$365K ARR" },
};

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
          {wins.map((win) => {
            const amounts = dealAmounts[win.title];
            return (
              <article key={win.title} className="card-hover" style={{
                display: "flex", flexDirection: "column", gap: "1rem",
                border: "1px solid var(--color-border)", borderRadius: "16px",
                backgroundColor: "var(--color-bg)", padding: "1.5rem",
                borderTop: "2px solid var(--color-accent)"
              }}>

                {/* ── HIGH PRIORITY FIX 3: Dollar amounts front and center ── */}
                {amounts && (
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <div style={{
                      display: "flex", flexDirection: "column",
                      backgroundColor: "var(--color-accent-dim)",
                      border: "1px solid var(--color-accent-border)",
                      borderRadius: "10px", padding: "0.5rem 0.85rem"
                    }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-accent)", fontFamily: "var(--font-body)", lineHeight: 1 }}>{amounts.acv}</span>
                      <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-body)", marginTop: "0.2rem" }}>Deal Value</span>
                    </div>
                    <div style={{
                      display: "flex", flexDirection: "column",
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "10px", padding: "0.5rem 0.85rem"
                    }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-body)", lineHeight: 1 }}>{amounts.arr}</span>
                      <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-body)", marginTop: "0.2rem" }}>Annual Value</span>
                    </div>
                  </div>
                )}

                {/* Role badge */}
                <span style={{
                  display: "inline-block", fontSize: "0.65rem", fontWeight: 600,
                  color: "var(--color-accent)", backgroundColor: "var(--color-accent-dim)",
                  border: "1px solid var(--color-accent-border)", borderRadius: "999px",
                  padding: "0.2rem 0.65rem", fontFamily: "var(--font-body)", alignSelf: "flex-start"
                }}>{win.role}</span>

                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{win.title}</h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>{win.summary}</p>

                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "0.875rem", marginTop: "auto" }}>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-muted)", margin: "0 0 0.3rem", fontFamily: "var(--font-body)" }}>Outcome</p>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", fontWeight: 500 }}>{win.outcome}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
