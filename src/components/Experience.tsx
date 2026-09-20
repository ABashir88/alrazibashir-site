"use client";

import { useRef, useEffect, useState } from "react";

const roles = [
  {
    company: "Telnyx",
    title: "Enterprise Account Executive",
    period: "Jan 2025 – Present",
    current: true,
    tags: ["AI Voice", "CPaaS", "SIP", "Communications Infrastructure"],
    summary:
      "Sold AI voice infrastructure and enterprise communications into complex technical environments. Led discovery with engineering, CX, product, and executive stakeholders. Closed competitive replacements and multi-year committed agreements.",
    metrics: "$1.2M quota · $65K–$550K ACV · 6–9 month cycles · 6 multi-year agreements · $900K+ TCV",
  },
  {
    company: "Cyara",
    title: "Enterprise Account Executive",
    period: "Jan 2023 – Dec 2024",
    current: false,
    tags: ["Contact Center AI", "CX Assurance", "Conversational AI Testing"],
    summary:
      "Sold automated contact center testing, monitoring, and conversational AI validation into large enterprise transformation programs. Aligned technical and executive stakeholders across Fortune 1000 buying committees.",
    metrics: "102% quota · $75K–$225K ACV · Fortune 1000 · 9 three-year agreements · $1M+ TCV",
  },
  {
    company: "Twilio",
    title: "Enterprise Account Executive",
    period: "Mar 2019 – Feb 2021",
    current: false,
    tags: ["CPaaS", "Programmable Communications", "Contact Center"],
    summary:
      "Sold programmable communications and contact center platforms to technical and executive buyers in regulated industries. Ran 40+ enterprise discovery cycles across healthcare and fintech.",
    metrics: "92% quota · $90K–$420K ACV · 6–9 month cycles · $1M+ closed",
  },
  {
    company: "Interlink",
    title: "Mid-Market Account Executive",
    period: "Mar 2021 – Aug 2022",
    current: false,
    tags: ["RPA", "Intelligent Automation"],
    summary:
      "Drove net-new automation business in regulated mid-market accounts. Closed 6 net-new logos through structured technical discovery in compliance-driven verticals.",
    metrics: "95% quota · $60K–$180K ACV · $850K+ career deals",
  },
  {
    company: "Motive",
    title: "Mid-Market Sales Development Manager",
    period: "Feb 2017 – Feb 2019",
    current: false,
    tags: ["IoT", "Fleet Telematics"],
    summary:
      "Built and coached an SDR team. $450K+ in attributed closed revenue in Year 1. Promoted 2 SDRs to Commercial AE.",
    metrics: "",
  },
];

function RoleCard({ role, index }: { role: typeof roles[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
        padding: "24px 28px",
        background: "var(--color-surface-card)",
        border: "1px solid var(--color-border)",
        borderLeft: role.current ? "3px solid var(--color-accent)" : "3px solid transparent",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <span style={{ fontSize: "1.05rem", fontWeight: 700, color: role.current ? "var(--color-accent)" : "var(--color-text)" }}>
              {role.company}
            </span>
            {role.current && (
              <span style={{
                fontSize: "10px", padding: "2px 8px", borderRadius: "20px", fontWeight: 700,
                background: "rgba(232,160,32,0.15)", color: "var(--color-accent)", border: "1px solid rgba(232,160,32,0.3)",
                textTransform: "uppercase", letterSpacing: "0.06em"
              }}>Current</span>
            )}
          </div>
          <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", fontWeight: 500 }}>{role.title}</div>
        </div>
        <div style={{ fontSize: "12px", color: "var(--color-text-muted)", whiteSpace: "nowrap" }}>{role.period}</div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {role.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "11px", padding: "3px 9px", borderRadius: "4px",
            background: "rgba(255,255,255,0.04)", color: "var(--color-text-muted)",
            border: "1px solid var(--color-border)"
          }}>{tag}</span>
        ))}
      </div>

      {/* Summary */}
      <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0 }}>
        {role.summary}
      </p>

      {/* Metrics */}
      {role.metrics && (
        <div style={{
          fontSize: "12px", color: "var(--color-accent)", fontWeight: 600,
          borderTop: "1px solid var(--color-border)", paddingTop: "12px",
          letterSpacing: "0.01em"
        }}>
          {role.metrics}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
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
    <section id="experience" style={{ padding: "80px 0", background: "var(--color-surface)" }}>
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
            CAREER
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 16px" }}>
            From CPaaS to AI Voice to Contact Center AI
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "540px", lineHeight: 1.65, margin: 0 }}>
            A consistent progression deeper into the technical complexity of enterprise AI and communications.
          </p>
        </div>

        {/* Roles */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {roles.map((role, i) => (
            <RoleCard key={role.company + role.period} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
