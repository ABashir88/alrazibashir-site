"use client";

import { useRef, useEffect, useState } from "react";
import { siteConfig } from "../config";

export function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" style={{ padding: "80px 0", background: "var(--color-surface)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: "40px",
          }}
        >
          <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, marginBottom: "12px" }}>
            PROJECTS
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 14px" }}>
            How I think about GTM systems
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "520px", lineHeight: 1.65, margin: 0 }}>
            Side projects and tools built at the intersection of enterprise sales and engineering.
          </p>
        </div>

        {/* Featured: Deal Command Center */}
        <a
          href={siteConfig.social.dealCommandCenter}
          download
          style={{
            display: "block",
            padding: "28px",
            background: "var(--color-surface-card)",
            border: "1px solid var(--color-border)",
            borderLeft: "3px solid var(--color-accent)",
            borderRadius: "12px",
            marginBottom: "16px",
            textDecoration: "none",
            transition: "box-shadow 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, marginBottom: "6px" }}>
                Featured
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text)", margin: 0 }}>
                Deal Command Center
              </h3>
            </div>
            <span style={{
              fontSize: "11px", padding: "3px 10px", borderRadius: "20px",
              background: "var(--color-accent-dim)", color: "var(--color-accent)",
              border: "1px solid var(--color-accent-border)", fontWeight: 600,
              whiteSpace: "nowrap",
            }}>
              Download .xlsx
            </span>
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: "0 0 16px", maxWidth: "560px" }}>
            A single spreadsheet that does what most CRMs can't: track deal stage, stakeholder mapping, multi-threading coverage, next steps, and close probability in one view. Built to run $65K–$550K enterprise cycles.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {["Enterprise Pipeline", "Multi-threading", "Stakeholder Mapping", "Close Planning"].map(t => (
              <span key={t} style={{
                fontSize: "11px", padding: "3px 9px", borderRadius: "4px",
                background: "var(--color-surface)", color: "var(--color-text-muted)",
                border: "1px solid var(--color-border)"
              }}>{t}</span>
            ))}
          </div>
        </a>

        {/* Secondary grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
          {/* Searvis */}
          <a
            href={siteConfig.social.searvis}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "22px",
              background: "var(--color-surface-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "8px" }}>
              Startup
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px" }}>Searvis.io</h3>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--color-text-secondary)", margin: "0 0 14px" }}>
              AI-powered search built for enterprise sales teams. Research accounts, stakeholders, and triggers in seconds.
            </p>
            <span style={{ fontSize: "12px", color: "var(--color-accent)", fontWeight: 600 }}>
              searvis.io →
            </span>
          </a>

          {/* GitHub */}
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "22px",
              background: "var(--color-surface-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "8px" }}>
              Open Source
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px" }}>GitHub</h3>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--color-text-secondary)", margin: "0 0 14px" }}>
              Scripts, automations, and GTM tools I've built to move faster in enterprise sales cycles.
            </p>
            <span style={{ fontSize: "12px", color: "var(--color-accent)", fontWeight: 600 }}>
              github.com/ABashir88 →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
