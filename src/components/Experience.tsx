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
      "Sold AI voice infrastructure and enterprise communications into complex technical environments. Led discovery with engineering, CX, product, and executive stakeholders across regulated and high-scale environments.",
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
      "Sold programmable communications and contact center platforms to technical and executive buyers in regulated industries. Covered healthcare and fintech verticals with deep technical discovery across 40+ enterprise accounts.",
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

function RoleRow({ role, index, total }: { role: typeof roles[0]; index: number; total: number }) {
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

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
        display: "grid",
        gridTemplateColumns: "140px 20px 1fr",
        gap: "0 1.5rem",
      }}
    >
      {/* Date column */}
      <div style={{ paddingTop: "2px", textAlign: "right" }}>
        <span style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}>
          {role.period}
        </span>
      </div>

      {/* Timeline rail */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: role.current ? "10px" : "8px",
          height: role.current ? "10px" : "8px",
          borderRadius: "50%",
          background: role.current ? "var(--color-accent)" : "var(--color-border-strong)",
          flexShrink: 0,
          marginTop: "4px",
        }} />
        {!isLast && (
          <div style={{ width: "1px", flex: 1, background: "var(--color-border)", marginTop: "6px", minHeight: "24px" }} />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "2px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
            {role.company}
          </span>
          {role.current && (
            <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Now
            </span>
          )}
        </div>
        <div style={{ fontSize: "0.825rem", color: "var(--color-text-muted)", fontWeight: 500, marginBottom: "12px", fontFamily: "var(--font-body)" }}>
          {role.title}
        </div>

        <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 12px", maxWidth: "520px" }}>
          {role.summary}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: role.metrics ? "12px" : 0 }}>
          {role.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "11px", padding: "2px 8px", borderRadius: "3px",
              background: "transparent", color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)", fontWeight: 500,
              fontFamily: "var(--font-body)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Metrics */}
        {role.metrics && (
          <div style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", borderTop: "1px solid var(--color-border)", paddingTop: "10px" }}>
            {role.metrics}
          </div>
        )}
      </div>
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
            CAREER
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 14px" }}>
            From CPaaS to AI Voice to Contact Center AI
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "540px", lineHeight: 1.65, margin: 0 }}>
            A consistent progression deeper into the technical complexity of enterprise AI and communications.
          </p>
        </div>

        <div>
          {roles.map((role, i) => (
            <RoleRow key={role.company + role.period} role={role} index={i} total={roles.length} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .exp-row { grid-template-columns: 16px 1fr !important; }
          .exp-date { display: none !important; }
        }
      `}</style>
    </section>
  );
}
