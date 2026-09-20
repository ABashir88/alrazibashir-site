"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config";

function HiringNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Deal Record", href: "#wins" },
    { label: "Career", href: "#career" },
    { label: "Technical Depth", href: "#tech" },
    { label: "How I Sell", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 100, width: "100%",
          backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "#ffffff",
          borderBottom: `1px solid ${scrolled ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.06)"}`,
          boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.2s ease",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 1.5rem", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text)", fontFamily: "var(--font-body)", textDecoration: "none", flexShrink: 0 }}>
            Alrazi Bashir
          </Link>

          <div className="h-desk-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {links.map((item) => (
              <a key={item.href} href={item.href} style={{ fontSize: "0.825rem", fontWeight: 500, color: "var(--color-text-secondary)", padding: "0.35rem 0.65rem", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-body)", transition: "color 0.15s ease, background 0.15s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; (e.currentTarget as HTMLElement).style.background = "var(--color-surface)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                {item.label}
              </a>
            ))}
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"
              style={{ marginLeft: "0.5rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-accent)", border: "1px solid var(--color-accent-border)", padding: "0.35rem 0.9rem", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-body)", transition: "background 0.15s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-accent-dim)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              Resume
            </a>
          </div>

          <button className="h-mob-btn" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.4rem", color: "var(--color-text)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(4px)", display: "flex", flexDirection: "column", padding: "80px 2rem 2rem" }}
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-text)", padding: "0.85rem 1rem", borderRadius: 8, fontFamily: "var(--font-body)", borderBottom: "1px solid var(--color-border)", textDecoration: "none" }}>
                {item.label}
              </a>
            ))}
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              style={{ marginTop: "1rem", fontSize: "0.95rem", fontWeight: 600, color: "#fff", background: "var(--color-accent)", padding: "0.75rem 1rem", borderRadius: 8, textAlign: "center", fontFamily: "var(--font-body)", textDecoration: "none" }}>
              Download Resume
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .h-desk-nav { display: none !important; }
          .h-mob-btn { display: flex !important; }
          .h-proof-strip { flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
          .h-proof-strip .h-divider { display: none !important; }
          .h-career-grid { grid-template-columns: 1fr !important; }
          .h-deal-body { grid-template-columns: 1fr !important; }
          .h-process-grid { grid-template-columns: 1fr !important; }
          .h-eco-grid { grid-template-columns: 1fr !important; }
          .h-deal-hd { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .h-deal-metrics { flex-wrap: wrap !important; gap: 16px !important; }
          .h-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .h-cta-btns a { text-align: center !important; }
        }
      `}</style>
    </>
  );
}

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#111827" }}>
      <HiringNav />

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1024, margin: "0 auto", padding: "64px 24px 56px" }}>

        {/* Category line */}
        <p style={{ fontSize: 13, fontWeight: 500, color: "#9ca3af", letterSpacing: "0.04em", marginBottom: 16, fontFamily: "var(--font-body)" }}>
          Voice AI &bull; Conversational AI &bull; CPaaS &bull; CCaaS &bull; Enterprise SaaS
        </p>

        {/* Name */}
        <h1 style={{ fontSize: "clamp(38px, 6vw, 56px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#0d1117", lineHeight: 1.05, marginBottom: 10, fontFamily: "var(--font-body)" }}>
          Alrazi Bashir
        </h1>

        <p style={{ fontSize: 20, fontWeight: 500, color: "#374151", marginBottom: 20, fontFamily: "var(--font-body)" }}>
          Enterprise Account Executive
        </p>

        <p style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.7, maxWidth: 620, marginBottom: 32, fontFamily: "var(--font-body)" }}>
          I sell technical AI and communications platforms into Fortune 1000 accounts.
          I run complex sales cycles from technical discovery and proof of value through
          executive alignment, procurement, and multi-year close.
        </p>

        {/* Proof strip */}
        <div
          className="h-proof-strip"
          style={{
            display: "flex", alignItems: "center", gap: 0,
            padding: "20px 24px", backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb", borderRadius: 10,
            marginBottom: 28, flexWrap: "wrap",
          }}
        >
          {[
            { value: "$1.2M", label: "Annual Quota" },
            { value: "$65K to $550K", label: "ACV Range" },
            { value: "6 to 10 months", label: "Sales Cycles" },
            { value: "15+", label: "Multi-Year Agreements" },
            { value: "102%", label: "Peak Attainment" },
          ].map((stat, i) => (
            <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ padding: "0 20px", textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0d1117", lineHeight: 1, fontFamily: "var(--font-body)" }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4, fontWeight: 500, fontFamily: "var(--font-body)" }}>{stat.label}</div>
              </div>
              {i < 4 && <div className="h-divider" style={{ width: 1, height: 36, backgroundColor: "#e5e7eb", flexShrink: 0 }} />}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="#wins" style={{ fontSize: 14, fontWeight: 600, color: "#fff", backgroundColor: "var(--color-accent)", padding: "11px 22px", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-body)" }}>
            View Deal Record
          </a>
          <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: "var(--color-accent)", border: "1px solid var(--color-accent-border)", padding: "11px 22px", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-body)" }}>
            Resume
          </a>
          <a href="https://linkedin.com/in/alrazibashir" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 500, color: "#6b7280", border: "1px solid #e5e7eb", padding: "11px 22px", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-body)" }}>
            LinkedIn
          </a>
        </div>
      </section>

      {/* ── CAREER ── */}
      <section id="career" style={{ backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>Career</p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0d1117", marginBottom: 6, fontFamily: "var(--font-body)" }}>
            Commercial experience across the Voice AI and CX stack
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 36, maxWidth: 480, lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
            Each role moved deeper into the infrastructure that powers enterprise customer experience.
          </p>

          <div className="h-career-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
            {[
              {
                company: "Twilio",
                period: "2019 to 2021",
                category: "Cloud Communications and CPaaS",
                copy: "Programmable communications, messaging, SIP, and contact center modernization for engineering and enterprise buyers.",
              },
              {
                company: "Cyara",
                period: "2023 to 2024",
                category: "CX Assurance and Conversational AI",
                copy: "Contact center testing, conversational AI validation, and CCaaS monitoring for Fortune 1000 organizations.",
              },
              {
                company: "Telnyx",
                period: "2025 to Present",
                category: "AI Voice Infrastructure and Telephony",
                copy: "Voice infrastructure, SIP, routing, reliability, and production requirements for technical enterprise buying groups.",
              },
            ].map((role, i) => (
              <div key={role.company} style={{ backgroundColor: "#fff", padding: "28px 24px 24px", position: "relative", borderRight: i < 2 ? "1px solid #e5e7eb" : "none" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, backgroundColor: "var(--color-accent)" }} />
                <div style={{ marginTop: 10, marginBottom: 4, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "#0d1117", fontFamily: "var(--font-body)" }}>{role.company}</span>
                  {i < 2 && <span style={{ fontSize: 16, color: "#d1d5db" }}>&#8594;</span>}
                </div>
                <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6, fontWeight: 500, fontFamily: "var(--font-body)" }}>{role.period}</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-accent)", marginBottom: 12, fontFamily: "var(--font-body)" }}>{role.category}</p>
                <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>{role.copy}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14, color: "#374151", marginTop: 20, fontWeight: 500, fontFamily: "var(--font-body)" }}>
            <strong style={{ color: "#0d1117" }}>The progression:</strong> communications infrastructure &rarr; CX assurance &rarr; production Voice AI.
          </p>
        </div>
      </section>

      {/* ── DEAL RECORD ── */}
      <section id="wins" style={{ maxWidth: 1024, margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>Enterprise Deal Record</p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0d1117", marginBottom: 6, fontFamily: "var(--font-body)" }}>
          Representative enterprise wins
        </h2>
        <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 40, maxWidth: 500, lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
          Multi-stakeholder buying groups, technical discovery, and multi-month commercial cycles across all three.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            {
              label: "Voice AI Infrastructure",
              title: "Competitive carrier replacement for AI voice automation",
              company: "Fortune 500 technology enterprise",
              arr: "$285K ARR", tcv: "$855K TCV", cycle: "8 months", term: "3-year",
              challenge: "Enterprise customer needed production-grade voice infrastructure to support a new AI voice automation initiative. Legacy carrier could not meet latency, routing, or failover requirements.",
              motion: "Led discovery across SIP architecture, PSTN routing, latency thresholds, failover topology, and carrier economics. Multithreaded engineering, IT, operations, and the economic buyer before engaging commercial leadership.",
              outcome: "Displaced the incumbent. Delivered a programmable telephony layer that enabled the AI deployment. Closed a three-year committed agreement.",
            },
            {
              label: "Conversational AI and CCaaS Assurance",
              title: "De-risking a cloud contact center and conversational AI migration",
              company: "Insurance enterprise, large contact center operation",
              arr: "$180K ARR", tcv: "$360K TCV", cycle: "7 months", term: "2-year",
              challenge: "Mid-migration from legacy IVR and on-premise contact center to cloud CCaaS. No automated regression coverage for IVR or conversational AI flows. Production risk tied to regulatory exposure.",
              motion: "Engaged QA and CX operations leadership to map the testing gap. Connected production risk to regulatory exposure in the insurance context. Built the commercial case with VP CX as the economic buyer.",
              outcome: "Closed a two-year assurance agreement timed to the migration go-live. Eliminated manual regression testing across IVR and conversational AI flows.",
            },
            {
              label: "Programmable Contact Center Modernization",
              title: "Enterprise contact center modernization for financial services",
              company: "Financial services organization, 400-seat contact center",
              arr: "$120K ARR", tcv: "$240K TCV", cycle: "6 months", term: "2-year",
              challenge: "Aging on-premise contact center with no digital channel capability and limited CRM integration. VP of Customer Operations needed a modernization path without a full rip-and-replace.",
              motion: "Technical discovery covered CRM integrations, agent desktop requirements, digital channel roadmap, and carrier interconnect. Built a phased architecture with the engineering team that reduced risk and enabled a pilot approach.",
              outcome: "Deployed across 400 seats with CRM integration and digital channel enablement. Two-year agreement structured with a pilot that converted to full commitment at month four.",
            },
          ].map((deal) => (
            <div key={deal.title} style={{ border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
              <div className="h-deal-hd" style={{ backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 4, fontFamily: "var(--font-body)" }}>{deal.label}</p>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0d1117", lineHeight: 1.3, fontFamily: "var(--font-body)" }}>{deal.title}</h3>
                  <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 2, fontFamily: "var(--font-body)" }}>{deal.company}</p>
                </div>
                <div className="h-deal-metrics" style={{ display: "flex", gap: 24, flexShrink: 0 }}>
                  {[{ l: "ARR", v: deal.arr }, { l: "TCV", v: deal.tcv }, { l: "Cycle", v: deal.cycle }, { l: "Term", v: deal.term }].map((m) => (
                    <div key={m.l} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#0d1117", lineHeight: 1, fontFamily: "var(--font-body)" }}>{m.v}</div>
                      <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-deal-body" style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {[
                  { label: "Challenge", text: deal.challenge },
                  { label: "Sales Motion", text: deal.motion },
                  { label: "Outcome", text: deal.outcome },
                ].map((block) => (
                  <div key={block.label}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 6, fontFamily: "var(--font-body)" }}>{block.label}</p>
                    <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNICAL DEPTH ── */}
      <section id="tech" style={{ backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>Technical Depth</p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0d1117", marginBottom: 6, fontFamily: "var(--font-body)" }}>
            Technical enough to sell the architecture
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 36, maxWidth: 520, lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
            I study the products I sell. These projects exist to understand how Voice AI systems are built, deployed, and fail in production.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="h-eco-grid">
            {/* Razor Voice */}
            <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12, gap: 12 }}>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0d1117", marginBottom: 4, fontFamily: "var(--font-body)" }}>Razor Voice</h3>
                  <p style={{ fontSize: 12, color: "var(--color-accent)", fontWeight: 600, fontFamily: "var(--font-body)" }}>Deepgram &bull; Telnyx &bull; ElevenLabs</p>
                </div>
                <a href="https://alrazibashir.com" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, fontWeight: 600, color: "var(--color-accent)", border: "1px solid var(--color-accent-border)", padding: "5px 12px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", fontFamily: "var(--font-body)" }}>
                  View Project
                </a>
              </div>
              <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 16, fontFamily: "var(--font-body)" }}>
                Experimental real-time Voice AI pipeline exploring speech recognition, telephony orchestration, and text-to-speech. Built to understand latency constraints, failover behavior, and production reliability requirements from the inside.
              </p>
              {/* Simple architecture diagram */}
              <div style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "16px", fontFamily: "var(--font-body)" }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 12 }}>Pipeline Architecture</p>
                <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap", rowGap: 8 }}>
                  {[
                    { name: "Inbound call", sub: "Telnyx SIP" },
                    { name: "Speech-to-text", sub: "Deepgram ASR" },
                    { name: "LLM reasoning", sub: "Orchestration" },
                    { name: "Text-to-speech", sub: "ElevenLabs TTS" },
                    { name: "Voice output", sub: "Telnyx PSTN" },
                  ].map((node, i) => (
                    <div key={node.name} style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ textAlign: "center", padding: "8px 10px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 6 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "#111827" }}>{node.name}</div>
                        <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>{node.sub}</div>
                      </div>
                      {i < 4 && <span style={{ fontSize: 14, color: "#d1d5db", padding: "0 4px" }}>&#8594;</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise Voice AI Architectures */}
            <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12, gap: 12 }}>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0d1117", marginBottom: 4, fontFamily: "var(--font-body)" }}>Enterprise Voice AI Architectures</h3>
                  <p style={{ fontSize: 12, color: "var(--color-accent)", fontWeight: 600, fontFamily: "var(--font-body)" }}>Research and frameworks</p>
                </div>
                <a href="https://alrazibashir.com" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, fontWeight: 600, color: "var(--color-accent)", border: "1px solid var(--color-accent-border)", padding: "5px 12px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", fontFamily: "var(--font-body)" }}>
                  View Work
                </a>
              </div>
              <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7, marginBottom: 20, fontFamily: "var(--font-body)" }}>
                Practical frameworks covering latency budgets, failure modes, production reliability, and AI evaluation for enterprise contact center deployments.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { topic: "Latency budgets in real-time Voice AI", detail: "ASR, LLM, and TTS latency thresholds for production deployments" },
                  { topic: "Failover and reliability architecture", detail: "Carrier redundancy, fallback routing, and SIP trunk design" },
                  { topic: "AI evaluation for contact centers", detail: "LLM validation, regression testing, and QA automation frameworks" },
                ].map((item) => (
                  <div key={item.topic} style={{ padding: "10px 14px", backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 6 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 2, fontFamily: "var(--font-body)" }}>{item.topic}</p>
                    <p style={{ fontSize: 12, color: "#6b7280", fontFamily: "var(--font-body)" }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech ecosystem - grouped */}
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="h-process-grid">
            {[
              { group: "Voice AI", items: ["Speech recognition", "TTS", "AI agents", "Latency", "Audio quality"] },
              { group: "Communications infrastructure", items: ["SIP", "PSTN", "CPaaS APIs", "Routing", "Failover", "Carrier economics"] },
              { group: "Contact center", items: ["Genesys Cloud", "Amazon Connect", "Twilio Flex", "IVR", "QA", "Monitoring"] },
              { group: "Enterprise buyers", items: ["Engineering", "Product", "IT", "CX", "Contact Center", "Operations", "C-suite"] },
            ].map((group) => (
              <div key={group.group} style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: "16px 18px" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 10, fontFamily: "var(--font-body)" }}>{group.group}</p>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
                  {group.items.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I SELL ── */}
      <section id="process" style={{ maxWidth: 1024, margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>Sales Process</p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0d1117", marginBottom: 6, fontFamily: "var(--font-body)" }}>
          How I run an enterprise deal
        </h2>
        <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 36, maxWidth: 480, lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
          MEDDPICC-aligned. Built for technical products and complex buying groups.
        </p>

        <div className="h-process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          {[
            { n: 1, stage: "Discover", copy: "Architecture, business pain, current environment, operational risk, integration requirements." },
            { n: 2, stage: "Qualify", copy: "MEDDPICC, economic buyer, decision criteria, competitive landscape, commercial reality." },
            { n: 3, stage: "Validate", copy: "Proof of value, technical success criteria agreed in writing, engineering alignment." },
            { n: 4, stage: "Align", copy: "Business case, executive sponsorship, measurable outcomes, procurement path." },
            { n: 5, stage: "Close", copy: "Pricing, legal, security, InfoSec, procurement, forecast discipline, multi-year structure." },
          ].map((step) => (
            <div key={step.stage} style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#d1d5db", marginBottom: 8, fontFamily: "var(--font-body)" }}>0{step.n}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0d1117", marginBottom: 8, fontFamily: "var(--font-body)" }}>{step.stage}</div>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HIRING CTA ── */}
      <section id="contact" style={{ backgroundColor: "#0d1117", padding: "64px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.25, fontFamily: "var(--font-body)" }}>
            Building an enterprise sales team in Voice AI, Conversational AI, CPaaS, CCaaS, or Enterprise AI?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32, fontFamily: "var(--font-body)" }}>
            I am currently evaluating Enterprise AE and Strategic AE opportunities with technical products,
            large enterprise customers, and complex sales motions.
          </p>
          <div className="h-cta-btns" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${siteConfig.email}`}
              style={{ fontSize: 14, fontWeight: 700, color: "#0d1117", backgroundColor: "#ffffff", padding: "13px 26px", borderRadius: 999, textDecoration: "none", fontFamily: "var(--font-body)" }}>
              Email Alrazi
            </a>
            <a href="https://linkedin.com/in/alrazibashir" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 14, fontWeight: 600, color: "#fff", backgroundColor: "rgba(255,255,255,0.1)", padding: "13px 26px", borderRadius: 999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "var(--font-body)" }}>
              LinkedIn
            </a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 14, fontWeight: 600, color: "#fff", backgroundColor: "rgba(255,255,255,0.1)", padding: "13px 26px", borderRadius: 999, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "var(--font-body)" }}>
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "#4b5563", fontFamily: "var(--font-body)" }}>Alrazi Bashir &mdash; Enterprise Account Executive</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none", fontFamily: "var(--font-body)" }}>Main Site</Link>
            <a href="https://linkedin.com/in/alrazibashir" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none", fontFamily: "var(--font-body)" }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
