"use client";

import { useRef, useEffect, useState } from "react";

const wins = [
  {
    title: "Conversational AI & CCaaS Transformation",
    company: "Cyara",
    role: "Enterprise Account Executive",
    arr: "$205K",
    acvLabel: "3-Year TCV",
    acvValue: "$617K",
    description:
      "Large enterprise contact center transformation. Aligned technical and executive stakeholders around automated testing and conversational AI assurance during a Genesys Cloud migration.",
    cycle: "10-month enterprise cycle",
    term: "3-year agreement",
    tags: ["Contact Center AI", "Genesys Cloud", "CX Assurance"],
  },
  {
    title: "AI Voice Infrastructure Replacement",
    company: "Telnyx",
    role: "Enterprise Account Executive",
    arr: "$185K",
    acvLabel: "2-Year ACV",
    acvValue: "$370K",
    description:
      "Competitive displacement for an AI voice deployment. Led discovery around latency, routing, failover, reliability, scale, and unit economics. Replaced the incumbent communications provider.",
    cycle: "6-month cycle",
    term: "2-year agreement",
    tags: ["AI Voice", "CPaaS", "Competitive Displacement"],
  },
  {
    title: "Programmable Contact Center Modernization",
    company: "Twilio",
    role: "Enterprise Account Executive",
    arr: "$365K",
    acvLabel: "2-Year ACV",
    acvValue: "$730K",
    description:
      "Enterprise communications and contact center transformation. Aligned engineering and executive stakeholders around a programmable contact center architecture supporting a broader modernization initiative.",
    cycle: "9-month enterprise cycle",
    term: "2-year agreement",
    tags: ["CCaaS", "Programmable Communications", "Enterprise Architecture"],
  },
];

function WinCard({ win, index }: { win: typeof wins[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
        background: "var(--color-surface-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        borderTop: "2px solid var(--color-accent)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* Top: company + role badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, marginBottom: "6px" }}>
            {win.company}
          </div>
          <h3 style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", fontWeight: 700, color: "var(--color-text)", margin: 0, lineHeight: 1.3 }}>
            {win.title}
          </h3>
        </div>
        <span style={{
          fontSize: "11px", padding: "3px 10px", borderRadius: "20px", whiteSpace: "nowrap",
          background: "var(--color-accent-dim)", color: "var(--color-accent)",
          border: "1px solid var(--color-accent-border)", fontWeight: 600
        }}>
          {win.role}
        </span>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 14px" }}>
          <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-muted)", marginBottom: "4px" }}>ARR</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-accent)", lineHeight: 1 }}>{win.arr}</div>
        </div>
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "12px 14px" }}>
          <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-muted)", marginBottom: "4px" }}>{win.acvLabel}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-accent)", lineHeight: 1 }}>{win.acvValue}</div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0 }}>
        {win.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {win.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "11px", padding: "3px 9px", borderRadius: "4px",
            background: "var(--color-surface)", color: "var(--color-text-muted)",
            border: "1px solid var(--color-border)"
          }}>{tag}</span>
        ))}
      </div>

      {/* Footer: cycle + term */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: "var(--color-text-muted)", fontSize: "13px" }}>⏱</span>
          <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{win.cycle}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: "var(--color-text-muted)", fontSize: "13px" }}>📋</span>
          <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{win.term}</span>
        </div>
      </div>
    </div>
  );
}

export default function Wins() {
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
    <section id="wins" style={{ padding: "80px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
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
            SELECTED ENTERPRISE WINS
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 16px" }}>
            Revenue proof, not promises
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "560px", lineHeight: 1.65, margin: 0 }}>
            $120K–$365K ARR · $240K–$730K ACV · 6–10 month cycles
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {wins.map((win, i) => (
            <WinCard key={win.title} win={win} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
