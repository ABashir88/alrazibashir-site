"use client";
import { siteConfig } from "../config";

export function ProofBar() {
  const { proofBar } = siteConfig;
  return (
    <section aria-label="Proof of work" style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-surface)", padding: "1rem 1.5rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>
          {proofBar.label}
        </p>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", margin: 0, padding: 0, listStyle: "none" }}>
          {proofBar.items.map((item) => (
            <li key={item} style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text-secondary)", fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
