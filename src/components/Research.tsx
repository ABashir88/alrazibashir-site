"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { siteConfig } from "../config";

export function Research() {
  const { research } = siteConfig;
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
    <section id="research" style={{ padding: "80px 0", background: "var(--color-bg)" }}>
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
            RESEARCH
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 14px" }}>
            {research.heading}
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "520px", lineHeight: 1.65, margin: 0 }}>
            {research.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="research-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {research.assets.map((asset) => {
            const body = (
              <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em",
                    color: "var(--color-accent)", background: "var(--color-accent-dim)",
                    padding: "3px 9px", borderRadius: "999px",
                  }}>{asset.category}</span>
                  {!asset.href && (
                    <span style={{
                      fontSize: "11px", fontWeight: 600, color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border-strong)", padding: "2px 8px", borderRadius: "999px",
                    }}>Coming soon</span>
                  )}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px", fontFamily: "var(--font-body)", lineHeight: 1.35 }}>
                  {asset.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: asset.href ? "0 0 18px" : 0 }}>
                  {asset.description}
                </p>
                {asset.href && (
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)", marginTop: "auto" }}>
                    {asset.linkLabel ?? "Read"} →
                  </span>
                )}
              </>
            );

            return asset.href ? (
              <Link key={asset.title} href={asset.href} className="research-card research-card-live">
                {body}
              </Link>
            ) : (
              <div key={asset.title} className="research-card">
                {body}
              </div>
            );
          })}
        </div>

        <Link href="/research" className="research-all">View all research →</Link>
      </div>

      <style>{`
        .research-all {
          display: inline-block; margin-top: 24px;
          font-size: 0.875rem; font-weight: 600; color: var(--color-accent);
          text-decoration: none; font-family: var(--font-body);
        }
        .research-all:hover { text-decoration: underline; }
        .research-card {
          display: flex; flex-direction: column;
          background: var(--color-surface-card);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          text-decoration: none;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .research-card-live:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.08);
          border-color: var(--color-accent-border);
        }
        @media (max-width: 640px) {
          .research-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
