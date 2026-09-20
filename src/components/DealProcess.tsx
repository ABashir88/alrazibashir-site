"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Technical Discovery",
    description:
      "Map the architecture, stakeholders, and integration points before talking product. Understand what's failing, what's at risk, and who owns the outcome.",
  },
  {
    number: "02",
    title: "Qualification & Business Case",
    description:
      "Connect technical requirements to business outcomes. Identify the economic buyer, quantify the cost of inaction, and align on success criteria before advancing.",
  },
  {
    number: "03",
    title: "Technical Validation",
    description:
      "Scope a proof of concept against real production requirements — latency, reliability, scale, integration depth. Keep engineering involved and control the narrative.",
  },
  {
    number: "04",
    title: "Executive Alignment",
    description:
      "Bring the business case to the C-suite with the technical team behind it. Close the gap between what engineering wants and what finance will approve.",
  },
  {
    number: "05",
    title: "Commercial Close",
    description:
      "Structure multi-year agreements that reflect the full value — ARR, TCV, expansion potential. Manage legal, procurement, and internal champion coaching in parallel.",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
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
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
        display: "flex",
        gap: "1.25rem",
        padding: "1.25rem 1.5rem",
        background: "var(--color-surface-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "10px",
      }}
    >
      <div style={{
        flexShrink: 0,
        width: "36px", height: "36px",
        borderRadius: "50%",
        background: "var(--color-accent-dim)",
        border: "1px solid var(--color-accent-border)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-accent)", fontFamily: "var(--font-body)" }}>
          {step.number}
        </span>
      </div>
      <div>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 0.4rem", fontFamily: "var(--font-body)" }}>
          {step.title}
        </h3>
        <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0 }}>
          {step.description}
        </p>
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
    <section id="what-i-do" style={{ padding: "80px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px" }}>
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
            HOW I SELL
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 14px" }}>
            Engineering-led deal process
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "520px", lineHeight: 1.65, margin: 0 }}>
            From first discovery call through multi-year close — how I move complex technical sales through enterprise buying committees.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
