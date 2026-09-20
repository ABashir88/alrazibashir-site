"use client";
import Link from "next/link";
import { siteConfig } from "../../config";

const valueAreas = [
  {
    title: "Enterprise AI infrastructure sales",
    body: "Proven track record selling AI voice platforms, conversational AI infrastructure, and developer-first communications platforms to engineering and product organizations. I translate architecture decisions into commercial outcomes that resonate with both technical evaluators and economic buyers."
  },
  {
    title: "CPaaS & CCaaS platform deals",
    body: "Deep experience selling communications APIs, contact center platforms, and CX infrastructure into enterprises modernizing customer engagement systems. I understand the competitive landscape, the procurement dynamics, and how to position platforms against entrenched incumbents."
  },
  {
    title: "Engineering-led discovery",
    body: "I run technical discovery using architecture diagrams, data flows, latency requirements, and operational constraints before any commercial discussion begins. This builds credibility with engineering teams and ensures the solution is scoped correctly before it reaches procurement."
  },
  {
    title: "Multi-stakeholder enterprise sales cycles",
    body: "Experienced running 5–9 month enterprise evaluation cycles that keep engineering, security, operations, CX leadership, finance, and procurement aligned. I manage parallel technical and business tracks so deals don't stall at the finish line."
  },
];

const dealProfile = [
  { label: "Deal sizes", value: "$65K – $550K+ ACV" },
  { label: "Sales cycles", value: "5–9 months" },
  { label: "Buyer groups", value: "Engineering, CX leadership, product, finance, procurement" },
  { label: "Focus areas", value: "AI voice infrastructure, CPaaS/CCaaS, conversational AI systems" },
];

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>

      {/* Nav back */}
      <div style={{ borderBottom: "1px solid var(--color-border)", padding: "0.875rem 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Link href="/"
            style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >← Back to site</Link>
        </div>
      </div>

      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>

        {/* Header */}
        <div style={{ paddingBottom: "3.5rem", borderBottom: "1px solid var(--color-border)", marginBottom: "3.5rem" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.25rem", fontFamily: "var(--font-body)" }}>
            For Hiring Managers
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 400, lineHeight: 1.15, color: "var(--color-text)", margin: "0 0 1.5rem",
            maxWidth: "640px"
          }}>
            Why companies hire me as an Enterprise Account Executive
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)", maxWidth: "600px" }}>
            I work at the intersection of AI infrastructure, voice platforms, and enterprise revenue systems — helping companies move complex platforms into production inside large organizations. My background spans CPaaS, CCaaS, conversational AI, and AI voice infrastructure, running engineering-led sales cycles with multi-stakeholder buying committees from first call through multi-year close.
          </p>
        </div>

        {/* Core Value Areas */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "2rem", fontFamily: "var(--font-body)" }}>
            Core Value Areas
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {valueAreas.map((area, i) => (
              <div key={area.title} style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "2rem",
                padding: "2rem 0",
                borderTop: i === 0 ? "1px solid var(--color-border)" : "none",
                borderBottom: "1px solid var(--color-border)",
              }}
              className="value-row"
              >
                <h3 style={{ fontSize: "0.925rem", fontWeight: 700, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.4, paddingRight: "1rem" }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deal Profile */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "2rem", fontFamily: "var(--font-body)" }}>
            Typical Enterprise Deal Profile
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderTop: "1px solid var(--color-border)" }} className="deal-profile-grid">
            {dealProfile.map((item, i) => (
              <div key={item.label} style={{
                padding: "1.75rem 0",
                borderBottom: "1px solid var(--color-border)",
                borderRight: i < dealProfile.length - 1 ? "1px solid var(--color-border)" : "none",
                paddingRight: i < dealProfile.length - 1 ? "1.5rem" : "0",
                paddingLeft: i > 0 ? "1.5rem" : "0",
              }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "8px", fontFamily: "var(--font-body)" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-text)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ paddingTop: "3rem", borderTop: "1px solid var(--color-border)" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 2rem", lineHeight: 1.4, maxWidth: "560px" }}>
            If you're hiring enterprise sales talent for AI infrastructure, conversational platforms, or developer-focused communications, I'm always open to connecting.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
            <Link href={siteConfig.resumeUrl} target="_blank"
              style={{
                display: "inline-flex", alignItems: "center",
                backgroundColor: "var(--color-accent)", color: "#fff",
                fontWeight: 700, fontSize: "0.85rem", padding: "0.65rem 1.5rem",
                borderRadius: "999px", fontFamily: "var(--font-body)", transition: "all 0.2s ease"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              View resume
            </Link>
            <Link href={`mailto:${siteConfig.email}`}
              style={{
                display: "inline-flex", alignItems: "center",
                border: "1px solid var(--color-border-strong)", color: "var(--color-text)",
                fontWeight: 600, fontSize: "0.85rem", padding: "0.65rem 1.5rem",
                borderRadius: "999px", fontFamily: "var(--font-body)", transition: "all 0.2s ease"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
            >
              Contact me
            </Link>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>
            {siteConfig.email}
          </p>
        </div>

      </main>

      <footer style={{ borderTop: "1px solid var(--color-border)", marginTop: "4rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>© {new Date().getFullYear()} Alrazi Bashir.</p>
          <Link href="/" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >← Back to site</Link>
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .value-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .deal-profile-grid { grid-template-columns: 1fr 1fr !important; }
          .deal-profile-grid > div { border-right: none !important; padding-left: 0 !important; padding-right: 0 !important; }
          .deal-profile-grid > div:nth-child(odd) { padding-right: 1rem !important; }
        }
      `}</style>
    </div>
  );
}
