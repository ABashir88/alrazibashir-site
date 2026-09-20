
"use client";
import Link from "next/link";
import { siteConfig } from "@/config";

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a" }}>

      {/* Nav back */}
      <div style={{ borderBottom: "1px solid #e5e5e5", padding: "0.875rem 1.5rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <Link href="/" style={{ fontSize: "0.8rem", color: "#6b7280", fontFamily: "var(--font-body)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
            ← Back to site
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "72px 24px 100px" }}>

        {/* Eyebrow */}
        <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a66c2", fontWeight: 600, marginBottom: "20px", fontFamily: "var(--font-body)" }}>
          For Hiring Managers
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "#1a1a1a", margin: "0 0 24px", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
          Why companies hire me as an Enterprise Account Executive
        </h1>

        {/* Intro */}
        <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#374151", margin: "0 0 64px", fontFamily: "var(--font-body)" }}>
          I work at the intersection of AI infrastructure, voice platforms, and enterprise revenue systems — helping companies move complex platforms into production inside large organizations. My background spans CPaaS, CCaaS, conversational AI, and AI voice infrastructure, running engineering-led sales cycles with multi-stakeholder buying committees from first call through multi-year close.
        </p>

        {/* Core value areas — no cards, just editorial rows */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", fontWeight: 600, marginBottom: "32px", fontFamily: "var(--font-body)" }}>
            Core Value Areas
          </div>

          {[
            {
              title: "Enterprise AI infrastructure sales",
              body: "Proven track record selling AI voice platforms, conversational AI infrastructure, and developer-first communications platforms to engineering and product organizations. I translate architecture decisions into commercial outcomes that resonate with both technical evaluators and economic buyers.",
            },
            {
              title: "CPaaS & CCaaS platform deals",
              body: "Deep experience selling communications APIs, contact center platforms, and CX infrastructure into enterprises modernizing customer engagement systems. I understand the competitive landscape, the procurement dynamics, and how to position platforms against entrenched incumbents.",
            },
            {
              title: "Engineering-led discovery",
              body: "I run technical discovery using architecture diagrams, data flows, latency requirements, and operational constraints before any commercial discussion begins. This builds credibility with engineering teams and ensures the solution is scoped correctly before it reaches procurement.",
            },
            {
              title: "Multi-stakeholder enterprise sales cycles",
              body: "Experienced running 5–9 month enterprise evaluation cycles that keep engineering, security, operations, CX leadership, finance, and procurement aligned. I manage parallel technical and business tracks so deals don't stall at the finish line.",
            },
          ].map((item, i) => (
            <div key={i} style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #e5e5e5" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 10px", fontFamily: "var(--font-body)" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "#4b5563", margin: 0, fontFamily: "var(--font-body)" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Deal profile — clean stat row */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", fontWeight: 600, marginBottom: "24px", fontFamily: "var(--font-body)" }}>
            Typical Enterprise Deal Profile
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0", border: "1px solid #e5e5e5", borderRadius: "8px", overflow: "hidden" }}>
            {[
              { label: "Deal Sizes", value: "$65K – $550K+ ACV" },
              { label: "Sales Cycles", value: "5–9 months" },
              { label: "Buyer Groups", value: "Engineering, CX, finance, procurement" },
              { label: "Focus Areas", value: "AI voice, CPaaS/CCaaS, conversational AI" },
            ].map((stat, i, arr) => (
              <div key={stat.label} style={{ padding: "20px 20px", borderRight: i < arr.length - 1 ? "1px solid #e5e5e5" : "none" }}>
                <div style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", marginBottom: "6px", fontFamily: "var(--font-body)" }}>{stat.label}</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "48px" }}>
          <p style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontFamily: "var(--font-display)", fontWeight: 400, color: "#1a1a1a", margin: "0 0 32px", lineHeight: 1.3 }}>
            If you're hiring enterprise sales talent for AI infrastructure, conversational platforms, or developer-focused communications, I'm always open to connecting.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#0a66c2", color: "#fff", fontWeight: 600, fontSize: "0.875rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >View resume</a>
            <a href={`mailto:${siteConfig.email}`}
              style={{ display: "inline-flex", alignItems: "center", border: "1px solid #d1d5db", color: "#1a1a1a", fontWeight: 600, fontSize: "0.875rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#0a66c2")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#d1d5db")}
            >Contact me</a>
          </div>
          <p style={{ fontSize: "0.78rem", color: "#9ca3af", fontFamily: "var(--font-body)", margin: 0 }}>{siteConfig.email}</p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #e5e5e5", padding: "20px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.75rem", color: "#9ca3af", fontFamily: "var(--font-body)" }}>© {new Date().getFullYear()} Alrazi Bashir.</span>
          <Link href="/" style={{ fontSize: "0.75rem", color: "#9ca3af", fontFamily: "var(--font-body)" }}>← Back to site</Link>
        </div>
      </div>

    </div>
  );
}
