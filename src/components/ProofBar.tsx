"use client";
import { siteConfig } from "../config";

export function ProofBar() {
  const { proofBar } = siteConfig;
  return (
    <div style={{
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)",
      background: "var(--color-surface)",
      padding: "0.9rem 1.5rem",
    }}>
      <div style={{
        maxWidth: "1024px", margin: "0 auto",
        display: "flex", alignItems: "center", flexWrap: "wrap",
        gap: "0.75rem 1.25rem",
      }}>
        <span style={{
          fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "var(--color-text-muted)",
          fontFamily: "var(--font-body)", flexShrink: 0,
        }}>
          {proofBar.label}
        </span>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.5rem 1.25rem" }}>
          {proofBar.items.map((item, i) => (
            <span key={item} style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <span style={{
                fontSize: "0.85rem", fontWeight: 600,
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-body)",
              }}>{item}</span>
              {i < proofBar.items.length - 1 && (
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--color-border-strong)", flexShrink: 0 }} />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
