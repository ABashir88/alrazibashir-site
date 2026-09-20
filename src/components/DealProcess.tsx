"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Technical Discovery",
    description:
      "Architecture, integrations, production requirements, existing environment, operational constraints. I enter the technical conversation early so nothing surprises us at evaluation.",
  },
  {
    number: "02",
    title: "Qualification & Business Case",
    description:
      "Business pain, decision criteria, economic impact, competitive position. Full MEDDPICC qualification before resources go in.",
  },
  {
    number: "03",
    title: "Technical Validation",
    description:
      "POV scope, engineering alignment, success criteria, security, reliability, scalability. I structure the evaluation so we control the outcome.",
  },
  {
    number: "04",
    title: "Executive Alignment",
    description:
      "Business outcomes, transformation risk, ROI, internal priorities, economic buyer. Connecting the technical findings to the business case executives actually approve.",
  },
  {
    number: "05",
    title: "Commercial Close",
    description:
      "Pricing, procurement, legal, negotiation, implementation path, multi-year commitment. I stay in the room through signature.",
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
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        padding: "24px 28px",
        background: "var(--color-surface-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "10px",
      }}
    >
      <div style={{
        flexShrink: 0,
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: "rgba(232,160,32,0.1)",
        border: "1px solid rgba(232,160,32,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        fontWeight: 800,
        color: "var(--color-accent)",
        letterSpacing: "0.02em",
      }}>
        {step.number}
      </div>
      <div>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px", lineHeight: 1.3 }}>
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
    <section id="how-i-sell" style={{ padding: "80px 0", background: "var(--color-bg)" }}>
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
            HOW I SELL
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 16px" }}>
            How I run an enterprise deal
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "560px", lineHeight: 1.65, margin: 0 }}>
            I can hold a credible technical discovery with architects and engineering teams, then turn the findings into a business case executives can buy.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
