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
    <section id="projects" style={{ padding: "80px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: "48px",
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
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "start",
            padding: "32px 0",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            marginBottom: "0",
            textDecoration: "none",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "8px" }}>
              Featured tool
            </div>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 10px", fontFamily: "var(--font-body)" }}>
              Deal Command Center
            </h3>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 16px", maxWidth: "480px" }}>
              A single spreadsheet that does what most CRMs can't: track deal stage, stakeholder mapping, multi-threading coverage, next steps, and close probability in one view. Built to run $65K–$550K enterprise cycles.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {["Enterprise Pipeline", "Multi-threading", "Stakeholder Mapping", "Close Planning"].map(t => (
                <span key={t} style={{
                  fontSize: "11px", padding: "2px 8px", borderRadius: "3px",
                  background: "transparent", color: "var(--color-text-muted)",
                  border: "1px solid var(--color-border)", fontWeight: 500,
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ flexShrink: 0, paddingTop: "4px" }}>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}>
              Download .xlsx ↓
            </span>
          </div>
        </a>

        {/* Secondary: Searvis + GitHub */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid var(--color-border)" }} className="projects-grid">
          <a
            href={siteConfig.social.searvis}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "32px 32px 32px 0",
              borderRight: "1px solid var(--color-border)",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "8px" }}>
              Startup
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px", fontFamily: "var(--font-body)" }}>
              Searvis.io
            </h3>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 16px" }}>
              AI-powered search built for enterprise sales teams. Research accounts, stakeholders, and triggers in seconds.
            </p>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
              searvis.io →
            </span>
          </a>

          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "32px 0 32px 32px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-muted)", fontWeight: 600, marginBottom: "8px" }}>
              Open Source
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px", fontFamily: "var(--font-body)" }}>
              GitHub
            </h3>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 16px" }}>
              Scripts, automations, and GTM tools I've built to move faster in enterprise sales cycles.
            </p>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
              github.com/ABashir88 →
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid a:first-child { border-right: none !important; border-bottom: 1px solid var(--color-border); padding: 28px 0 !important; }
          .projects-grid a:last-child { padding: 28px 0 !important; }
        }
      `}</style>
    </section>
  );
}
