"use client";
import Link from "next/link";
import { siteConfig } from "@/config";

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a" }}>

      {/* Nav back */}
      <div style={{ borderBottom: "1px solid #e5e5e5", padding: "0.875rem 1.5rem" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
          <Link href="/"
            style={{ fontSize: "0.82rem", color: "#666", fontFamily: "var(--font-body)", fontWeight: 500, transition: "color 0.2s", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#0a66c2")}
            onMouseLeave={e => (e.currentTarget.style.color = "#666")}
          >← Back to site</Link>
        </div>
      </div>

      <main style={{ maxWidth: "1024px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>

        {/* HEADER */}
        <div style={{ maxWidth: "680px", marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "#0a66c2" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0a66c2", fontFamily: "var(--font-body)" }}>
              For Hiring Managers
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", margin: "0 0 1.25rem" }}>
            Why companies hire me as an Enterprise Account Executive
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#444", margin: 0, fontFamily: "var(--font-body)" }}>
            I work at the intersection of AI infrastructure, voice platforms, and enterprise revenue systems — helping companies move complex platforms into production inside large organizations. My background spans CPaaS, CCaaS, conversational AI, and AI voice infrastructure, running engineering-led sales cycles with multi-stakeholder buying committees from first call through multi-year close.
          </p>
        </div>

        {/* CORE VALUE AREAS */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "#0a66c2" }} />
            <h2 style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0a66c2", margin: 0, fontFamily: "var(--font-body)" }}>
              Core Value Areas
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { n: "01", title: "Enterprise AI infrastructure sales", body: "Proven track record selling AI voice platforms, conversational AI infrastructure, and developer-first communications platforms to engineering and product organizations. I translate architecture decisions into commercial outcomes that resonate with both technical evaluators and economic buyers." },
              { n: "02", title: "CPaaS & CCaaS platform deals", body: "Deep experience selling communications APIs, contact center platforms, and CX infrastructure into enterprises modernizing customer engagement systems. I understand the competitive landscape, the procurement dynamics, and how to position platforms against entrenched incumbents." },
              { n: "03", title: "Engineering-led discovery", body: "I run technical discovery using architecture diagrams, data flows, latency requirements, and operational constraints before any commercial discussion begins. This builds credibility with engineering teams and ensures the solution is scoped correctly before it reaches procurement." },
              { n: "04", title: "Multi-stakeholder enterprise sales cycles", body: "Experienced running 5–9 month enterprise evaluation cycles that keep engineering, security, operations, CX leadership, finance, and procurement aligned. I manage parallel technical and business tracks so deals don’t stall at the finish line." }
            ].map((card) => (
              <article key={card.n} style={{
                border: "1px solid #e5e5e5",
                borderLeft: "3px solid #0a66c2",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                padding: "1.5rem",
                display: "flex", flexDirection: "column", gap: "0.75rem"
              }}>
                <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#0a66c2", letterSpacing: "0.1em", fontFamily: "var(--font-body)" }}>{card.n}</span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1a1a", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{card.title}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#444", margin: 0, fontFamily: "var(--font-body)" }}>{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* DEAL PROFILE */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "#0a66c2" }} />
            <h2 style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0a66c2", margin: 0, fontFamily: "var(--font-body)" }}>
              Typical Enterprise Deal Profile
            </h2>
          </div>
          <div style={{ border: "1px solid #e5e5e5", borderRadius: "8px", backgroundColor: "#fafafa", padding: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem 2rem" }}>
            {[
              { label: "Deal sizes", value: "$65K – $550K+ ACV" },
              { label: "Sales cycles", value: "5–9 months" },
              { label: "Buyer groups", value: "Engineering, CX leadership, product, finance, procurement" },
              { label: "Focus areas", value: "AI voice infrastructure, CPaaS/CCaaS, conversational AI systems" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", margin: "0 0 0.35rem", fontFamily: "var(--font-body)" }}>{item.label}</p>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a1a", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "flex-start" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 400, color: "#1a1a1a", margin: 0, lineHeight: 1.35, maxWidth: "580px" }}>
            If you’re hiring enterprise sales talent for AI infrastructure, conversational platforms, or developer-focused communications, I’m always open to connecting.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
            <Link href={siteConfig.resumeUrl} target="_blank"
              style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#0a66c2", color: "#fff", fontWeight: 700, fontSize: "0.85rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "all 0.2s ease", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#004182"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#0a66c2"; }}
            >
              View resume
            </Link>
            <Link href={`mailto:${siteConfig.email}`}
              style={{ display: "inline-flex", alignItems: "center", border: "1px solid #1a1a1a", color: "#1a1a1a", fontWeight: 600, fontSize: "0.85rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "all 0.2s ease", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f3f3f3"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
            >
              Contact me
            </Link>
          </div>
          <p style={{ fontSize: "0.75rem", color: "#999", margin: 0, fontFamily: "var(--font-body)" }}>
            {siteConfig.email}
          </p>
        </div>

      </main>

      <footer style={{ borderTop: "1px solid #e5e5e5", marginTop: "4rem" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "#999", margin: 0, fontFamily: "var(--font-body)" }}>© {new Date().getFullYear()} Alrazi Bashir.</p>
          <Link href="/" style={{ fontSize: "0.75rem", color: "#999", fontFamily: "var(--font-body)", textDecoration: "none" }}>← Back to site</Link>
        </div>
      </footer>
    </div>
  );
}
