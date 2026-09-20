"use client";
import Link from "next/link";
import { siteConfig } from "../config";

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>

      <div style={{ borderBottom: "1px solid var(--color-border)", padding: "0.875rem 1.5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <Link href="/"
            style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontWeight: 500, transition: "color 0.2s", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >← Back to site</Link>
        </div>
      </div>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>

        <div style={{ maxWidth: "640px", marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", margin: "0 0 1.25rem" }}>
            For Hiring Managers
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "var(--color-text)", margin: "0 0 1.5rem" }}>
            Why companies hire me as an Enterprise Account Executive
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)", fontWeight: 400 }}>
            I work at the intersection of AI infrastructure, voice platforms, and enterprise revenue systems — helping companies move complex platforms into production inside large organizations. My background spans CPaaS, CCaaS, conversational AI, and AI voice infrastructure, running engineering-led sales cycles with multi-stakeholder buying committees from first call through multi-year close.
          </p>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", margin: "0 0 2rem" }}>
            Core Value Areas
          </p>
          {[
            { title: "Enterprise AI infrastructure sales", body: "Proven track record selling AI voice platforms, conversational AI infrastructure, and developer-first communications platforms to engineering and product organizations. I translate architecture decisions into commercial outcomes that resonate with both technical evaluators and economic buyers." },
            { title: "CPaaS & CCaaS platform deals", body: "Deep experience selling communications APIs, contact center platforms, and CX infrastructure into enterprises modernizing customer engagement systems. I understand the competitive landscape, the procurement dynamics, and how to position platforms against entrenched incumbents." },
            { title: "Engineering-led discovery", body: "I run technical discovery using architecture diagrams, data flows, latency requirements, and operational constraints before any commercial discussion begins. This builds credibility with engineering teams and ensures the solution is scoped correctly before it reaches procurement." },
            { title: "Multi-stakeholder enterprise sales cycles", body: "Experienced running 5–9 month enterprise evaluation cycles that keep engineering, security, operations, CX leadership, finance, and procurement aligned. I manage parallel technical and business tracks so deals don't stall at the finish line." }
          ].map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem 3rem", padding: "2rem 0", borderTop: "1px solid var(--color-border)" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{item.title}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>{item.body}</p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", margin: "0 0 2rem" }}>
            Typical Enterprise Deal Profile
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", borderTop: "1px solid var(--color-border)", borderLeft: "1px solid var(--color-border)" }}>
            {[
              { label: "Deal sizes", value: "$65K – $550K+", sub: "ACV" },
              { label: "Sales cycles", value: "5–9 months", sub: "avg. enterprise" },
              { label: "Buyer groups", value: "Engineering · CX · Product · Finance · Procurement", sub: null },
              { label: "Focus areas", value: "AI voice · CPaaS · CCaaS · Conversational AI", sub: null },
            ].map((item) => (
              <div key={item.label} style={{ padding: "1.75rem 1.5rem", borderRight: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)", margin: "0 0 0.75rem", fontFamily: "var(--font-body)" }}>{item.label}</p>
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item.value}</p>
                {item.sub && <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: "0.25rem 0 0", fontFamily: "var(--font-body)" }}>{item.sub}</p>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "4rem", maxWidth: "640px" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 2rem", lineHeight: 1.3 }}>
            If you're hiring enterprise sales talent for AI infrastructure, conversational platforms, or developer-focused communications, I'm always open to connecting.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <Link href={siteConfig.resumeUrl} target="_blank"
              style={{ display: "inline-flex", alignItems: "center", backgroundColor: "var(--color-accent)", color: "#000", fontWeight: 700, fontSize: "0.82rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "all 0.2s ease", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >View resume</Link>
            <Link href={`mailto:${siteConfig.email}`}
              style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--color-border-strong)", color: "var(--color-text)", fontWeight: 600, fontSize: "0.82rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "all 0.2s ease", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-text-muted)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)"; }}
            >Contact me</Link>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>{siteConfig.email}</p>
        </div>

      </main>

      <footer style={{ borderTop: "1px solid var(--color-border)", marginTop: "5rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>© {new Date().getFullYear()} Alrazi Bashir.</p>
          <Link href="/" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", textDecoration: "none" }}>← Back to site</Link>
        </div>
      </footer>
    </div>
  );
}
