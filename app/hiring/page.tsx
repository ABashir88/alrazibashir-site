"use client";
import Link from "next/link";
import { siteConfig } from "@/config";

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#1a1a1a" }}>

      {/* Nav */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, backgroundColor: "rgba(255,255,255,0.96)", borderBottom: "1px solid #e5e5e5", backdropFilter: "blur(8px)", padding: "0.875rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "0.8rem", color: "#6b7280", fontFamily: "var(--font-body)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
            Back to site
          </Link>
          <span style={{ fontSize: "0.8rem", color: "#9ca3af", fontFamily: "var(--font-body)" }}>For Hiring Managers</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #e5e5e5", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a66c2", fontWeight: 600, marginBottom: "20px", fontFamily: "var(--font-body)" }}>
            Enterprise Account Executive · AI Voice · CPaaS/CCaaS
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 400, color: "#1a1a1a", margin: "0 0 28px", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "720px" }}>
            Engineering-led sales from first call to multi-year close
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#4b5563", margin: "0 0 48px", fontFamily: "var(--font-body)", maxWidth: "600px" }}>
            I sell complex AI infrastructure and communications platforms to enterprise buying committees, running technical discovery with engineering before the first commercial conversation.
          </p>

          {/* Stat row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0" }}>
            {[
              { value: "$1.2M", label: "Annual Quota" },
              { value: "$65K-$550K", label: "ACV Range" },
              { value: "6-10 mo", label: "Sales Cycles" },
              { value: "Multi-year", label: "Deal Structure" },
            ].map((stat, i, arr) => (
              <div key={stat.label} style={{ paddingRight: "40px", marginRight: "40px", borderRight: i < arr.length - 1 ? "1px solid #e5e5e5" : "none" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a1a1a", fontFamily: "var(--font-body)", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "0.72rem", fontWeight: 500, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-body)", marginTop: "5px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column body */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "72px 24px 100px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "0 80px" }} className="hiring-grid">

        {/* Left nav */}
        <div>
          <nav style={{ position: "sticky", top: "80px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {["What I Sell", "How I Sell It", "Deal Profile", "Get in Touch"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                style={{ fontSize: "0.825rem", color: "#6b7280", fontFamily: "var(--font-body)", padding: "6px 0", borderBottom: "none", fontWeight: 500, transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1a1a1a")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
              >{item}</a>
            ))}
          </nav>
        </div>

        {/* Right content */}
        <div>

          {/* What I Sell */}
          <section id="what-i-sell" style={{ marginBottom: "72px" }}>
            <h2 style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 32px", fontFamily: "var(--font-body)" }}>
              What I Sell
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px" }} className="value-grid">
              {[
                {
                  title: "AI Voice Infrastructure",
                  body: "Sell AI voice platforms and developer-first communications infrastructure to engineering and product organizations at scale.",
                },
                {
                  title: "CPaaS and CCaaS Platforms",
                  body: "Communications APIs, contact center platforms, and CX infrastructure to enterprises modernizing customer engagement systems.",
                },
                {
                  title: "Conversational AI Systems",
                  body: "Automated contact center testing, conversational AI validation, and CX assurance into large enterprise transformation programs.",
                },
                {
                  title: "Workflow Automation",
                  body: "RPA and intelligent automation into regulated mid-market accounts through structured technical discovery in compliance-driven verticals.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 style={{ fontSize: "0.925rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px", fontFamily: "var(--font-body)" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#6b7280", margin: 0, fontFamily: "var(--font-body)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How I Sell It */}
          <section id="how-i-sell-it" style={{ marginBottom: "72px", paddingTop: "72px", borderTop: "1px solid #e5e5e5" }}>
            <h2 style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 32px", fontFamily: "var(--font-body)" }}>
              How I Sell It
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { step: "01", title: "Technical discovery first", body: "Architecture diagrams, data flows, latency requirements, and operational constraints before any commercial discussion." },
                { step: "02", title: "Engineering credibility", body: "I speak the language of the technical evaluator. That builds internal champions who carry the deal forward." },
                { step: "03", title: "Business case construction", body: "Cost of inaction, ROI model, success criteria — all developed with the economic buyer before advancing to procurement." },
                { step: "04", title: "Multi-stakeholder alignment", body: "Engineering, security, CX leadership, finance, and procurement on parallel tracks. Deals don't stall at the finish line." },
                { step: "05", title: "Multi-year commercial close", body: "Structure ARR and TCV agreements that reflect the full value. Manage legal and procurement in parallel with champion coaching." },
              ].map((item, i, arr) => (
                <div key={item.step} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0 20px", paddingBottom: i < arr.length - 1 ? "28px" : "0", marginBottom: i < arr.length - 1 ? "28px" : "0", borderBottom: i < arr.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#d1d5db", fontFamily: "var(--font-body)", paddingTop: "3px" }}>{item.step}</div>
                  <div>
                    <div style={{ fontSize: "0.925rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "4px", fontFamily: "var(--font-body)" }}>{item.title}</div>
                    <div style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#6b7280", fontFamily: "var(--font-body)" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deal Profile */}
          <section id="deal-profile" style={{ marginBottom: "72px", paddingTop: "72px", borderTop: "1px solid #e5e5e5" }}>
            <h2 style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 32px", fontFamily: "var(--font-body)" }}>
              Deal Profile
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { label: "ACV Range", value: "$65K to $550K" },
                { label: "Sales Cycle", value: "6 to 10 months" },
                { label: "Deal Structure", value: "Multi-year agreements" },
                { label: "Buyer Groups", value: "Engineering, CX leadership, product, finance, procurement" },
                { label: "Verticals", value: "Healthcare, fintech, regulated enterprise, Fortune 1000" },
                { label: "Focus Areas", value: "AI voice, CPaaS, CCaaS, conversational AI, RPA" },
              ].map((row, i, arr) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid #f3f4f6" : "none", gap: "24px" }}>
                  <span style={{ fontSize: "0.825rem", color: "#9ca3af", fontFamily: "var(--font-body)", fontWeight: 500, flexShrink: 0 }}>{row.label}</span>
                  <span style={{ fontSize: "0.875rem", color: "#1a1a1a", fontFamily: "var(--font-body)", fontWeight: 600, textAlign: "right" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="get-in-touch" style={{ paddingTop: "72px", borderTop: "1px solid #e5e5e5" }}>
            <h2 style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 20px", fontFamily: "var(--font-body)" }}>
              Get in Touch
            </h2>
            <p style={{ fontSize: "1.2rem", fontFamily: "var(--font-display)", fontWeight: 400, color: "#1a1a1a", margin: "0 0 32px", lineHeight: 1.4, maxWidth: "480px" }}>
              Open to enterprise AE and early GTM roles at AI voice, CPaaS, CCaaS, and contact center companies.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#0a66c2", color: "#fff", fontWeight: 600, fontSize: "0.85rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >View resume</a>
              <a href={`mailto:${siteConfig.email}`}
                style={{ display: "inline-flex", alignItems: "center", border: "1px solid #d1d5db", color: "#1a1a1a", fontWeight: 600, fontSize: "0.85rem", padding: "0.65rem 1.5rem", borderRadius: "999px", fontFamily: "var(--font-body)", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#0a66c2")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#d1d5db")}
              >Contact me</a>
            </div>
            <p style={{ fontSize: "0.78rem", color: "#9ca3af", fontFamily: "var(--font-body)", margin: 0 }}>{siteConfig.email}</p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #e5e5e5", padding: "20px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.75rem", color: "#9ca3af", fontFamily: "var(--font-body)" }}>2026 Alrazi Bashir.</span>
          <Link href="/" style={{ fontSize: "0.75rem", color: "#9ca3af", fontFamily: "var(--font-body)" }}>Back to site</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hiring-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .hiring-grid > div:first-child { display: none; }
          .value-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
