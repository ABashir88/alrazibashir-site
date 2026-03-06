"use client";
import { siteConfig } from "../config";

export function SellingModel() {
  const { sections, sellingModel } = siteConfig as typeof siteConfig & { sellingModel: { title: string; description: string }[] };
  return (
    <section id="selling-model" aria-labelledby="selling-model-heading" style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-surface)", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem", maxWidth: "620px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <h2 id="selling-model-heading" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              {sections.sellingModel.eyebrow}
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 1rem", lineHeight: 1.25 }}>
            {sections.sellingModel.title}
          </p>
          {sections.sellingModel.body && (
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>
              {sections.sellingModel.body}
            </p>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {sellingModel.map((item, i) => (
            <article key={item.title} className="card-hover" style={{
              display: "flex", flexDirection: "column", gap: "0.75rem",
              border: "1px solid var(--color-border)", borderRadius: "16px",
              backgroundColor: "var(--color-bg)", padding: "1.5rem",
            }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", fontFamily: "var(--font-body)" }}>0{i + 1}</span>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{item.title}</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
