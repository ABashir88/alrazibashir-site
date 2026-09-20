"use client";
import Link from "next/link";
import { siteConfig } from "../../src/config";

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>

      {/* Nav back */}
      <div style={{ borderBottom: "1px solid var(--color-border)", padding: "0.875rem 1.5rem" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
          <Link href="/"
            style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >← Back to site</Link>
        </div>
      </div>

      <main style={{ maxWidth: "1024px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>

        {/* SECTION 1 — HEADER */}
        <div style={{ maxWidth: "680px", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", fontFamily: "var(--font-body)" }}>
              For Hiring Managers
            </span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 400, lineHeight: 1.2, color: "var(--color-text)", margin: "0 0 1.25rem"
          }}>
            Why companies hire me as an Enterprise Account Executive
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>
            I work at the intersection of AI infrastructure, voice platforms, and enterprise revenue systems — helping companies move complex platforms into production inside large organizations. My background spans CPaaS, CCaaS, conversational AI, and AI voice infrastructure, running engineering-led sales cycles with multi-stakeholder buying committees from first call through multi-year close.
          </p>
        </div>

        {/* SECTION 2 — CORE VALUE AREAS */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <h2 style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              Core Value Areas
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              {
                n: "01",
                title: "Enterprise AI infrastructure sales",
                body: "Proven track record selling AI voice platforms, conversational AI infrastructure, and developer-first communications platforms to engineering and product organizations. I translate architecture decisions into commercial outcomes that resonate with both technical evaluators and economic buyers."
              },
              {
                n: "02",
                title: "CPaaS & CCaaS platform deals",
                body: "Deep experience selling communications APIs, contact center platforms, and CX infrastructure into enterprises modernizing customer engagement systems. I understand the competitive landscape, the procurement dynamics, and how to position platforms against entrenched incumbents."
              },
              {
                n: "03",
                title: "Engineering-led discovery",
                body: "I run technical discovery using architecture diagrams, data flows, latency requirements, and operational constraints before any commercial discussion begins. This builds credibility with engineering teams and ensures the solution is scoped correctly before it reaches procurement."
              },
              {
                n: "04",
                title: "Multi-stakeholder enterprise sales cycles",
                body: "Experienced running 5–9 month enterprise evaluation cycles that keep engineering, security, operations, CX leadership, finance, and procurement aligned. I manage parallel technical and business tracks so deals don't stall at the finish line."
              }
            ].map((card) => (
              <article key={card.n} style={{
                border: "1px solid var(--color-border)",
                borderLeft: "3px solid var(--color-accent)",
                borderRadius: "16px",
                backgroundColor: "var(--color-surface-card)",
                padding: "1.5rem",
                display: "flex", flexDirection: "column", gap: "0.75rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
              }}
                className="card-hover"
              >
                <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", fontFamily: "var(--font-body)" }}>{card.n}</span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{card.title}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 3 — DEAL PROFILE */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <h2 style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              Typical Enterprise Deal Profile
            </h2>
          </div>
          <div style={{
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            backgroundColor: "var(--color-surface)",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem 2rem"
          }}>
            {[
              { label: "Deal sizes", value: "$65K – $550K+ ACV" },
              { label: "Sales cycles", value: "5–9 months" },
              { label: "Buyer groups", value: "Engineering, CX leadership, product, finance, procurement" },
              { label: "Focus areas", value: "AI voice infrastructure, CPaaS/CCaaS, conversational AI systems" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-muted)", margin: "0 0 0.35rem", fontFamily: "var(--font-body)" }}>{item.label}</p>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 — CTA */}
        <div style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "3rem",
          display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "flex-start"
        }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 400, color: "var(--color-text)", margin: 0, lineHeight: 1.35, maxWidth: "580px" }}>
            If you're hiring enterprise sales talent for AI infrastructure, conversational platforms, or developer-focused communications, I'm always open to connecting.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
            <Link href={siteConfig.resumeUrl} target="_blank"
              style={{
                display: "inline-flex", alignItems: "center",
                backgroundColor: "var(--color-accent)", color: "#000",
                fontWeight: 700, fontSize: "0.85rem", padding: "0.65rem 1.5rem",
                borderRadius: "999px", fontFamily: "var(--font-body)", transition: "all 0.2s ease"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(232,160,32,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
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
        <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>© {new Date().getFullYear()} Alrazi Bashir.</p>
          <Link href="/" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>← Back to site</Link>
        </div>
      </footer>
    </div>
  );
}
