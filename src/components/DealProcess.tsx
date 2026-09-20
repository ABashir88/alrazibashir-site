"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Technical Discovery",
    label: "Weeks 1–3",
    description:
      "Map the architecture, stakeholders, and integration points before talking product. Understand what's failing, what's at risk, and who owns the outcome.",
    signals: ["Architecture audit", "Stakeholder mapping", "Pain quantification"],
  },
  {
    number: "02",
    title: "Qualification & Business Case",
    label: "Weeks 3–6",
    description:
      "Connect technical requirements to business outcomes. Identify the economic buyer, quantify the cost of inaction, and align on success criteria before advancing.",
    signals: ["Economic buyer identified", "Cost of inaction defined", "Success criteria agreed"],
  },
  {
    number: "03",
    title: "Technical Validation",
    label: "Weeks 6–14",
    description:
      "Scope a proof of concept against real production requirements — latency, reliability, scale, integration depth. Keep engineering involved and control the narrative.",
    signals: ["POC scoped to production specs", "Engineering champion secured", "Competitive narrative set"],
  },
  {
    number: "04",
    title: "Executive Alignment",
    label: "Weeks 14–20",
    description:
      "Bring the business case to the C-suite with the technical team behind it. Close the gap between what engineering wants and what finance will approve.",
    signals: ["C-suite presentation", "ROI model delivered", "Procurement engaged"],
  },
  {
    number: "05",
    title: "Commercial Close",
    label: "Weeks 20–26+",
    description:
      "Structure multi-year agreements that reflect the full value — ARR, TCV, expansion potential. Manage legal, procurement, and internal champion coaching in parallel.",
    signals: ["Multi-year structure", "Legal & procurement parallel", "Expansion path defined"],
  },
];

function StepRow({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
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

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "0 1.5rem",
      }}
    >
      {/* Left rail: number + connector line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          border: "1.5px solid var(--color-border-strong)",
          background: "var(--color-surface-card)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, zIndex: 1,
        }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--color-text-muted)", fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}>
            {step.number}
          </span>
        </div>
        {!isLast && (
          <div style={{ width: "1px", flex: 1, background: "var(--color-border)", marginTop: "4px", minHeight: "32px" }} />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? 0 : "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "6px", flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)" }}>
            {step.title}
          </h3>
          <span style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontWeight: 500 }}>
            {step.label}
          </span>
        </div>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 0.85rem", maxWidth: "520px" }}>
          {step.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {step.signals.map((s) => (
            <span key={s} style={{
              fontSize: "11px", padding: "2px 9px", borderRadius: "4px",
              background: "transparent", color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)", fontWeight: 500,
              fontFamily: "var(--font-body)",
            }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DealProcess() {
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
    <section id="what-i-do" style={{ padding: "80px 0", background: "var(--color-surface)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header + process side by side on desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="deal-grid">
          {/* Left: header + context */}
          <div
            ref={headerRef}
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              position: "sticky",
              top: "80px",
            }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, marginBottom: "12px" }}>
              HOW I SELL
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 16px", lineHeight: 1.2 }}>
              Engineering-led deal process
            </h2>
            <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 2rem" }}>
              From first discovery call through multi-year close — how I move complex technical sales through enterprise buying committees.
            </p>
            {/* Summary stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { value: "6–10 mo", label: "Typical cycle" },
                { value: "$65K–$550K", label: "ACV range" },
                { value: "Multi-year", label: "Deal structure" },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "1px solid var(--color-border)" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>{stat.label}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-body)" }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: step timeline */}
          <div>
            {steps.map((step, i) => (
              <StepRow key={step.number} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .deal-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .deal-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
