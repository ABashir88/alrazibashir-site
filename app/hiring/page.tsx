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
        .telnyx-logo { filter: none; }
        @media (prefers-color-scheme: dark) { .telnyx-logo { filter: invert(1) brightness(2); } }
      `}
        </style>
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
          <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0d1117", marginBottom: 36, fontFamily: "var(--font-body)" }}>
            Commercial experience across the Voice AI and CX stack
          </h2>

          <div className="h-career-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              {
                company: "Twilio",
                alt: "Twilio",
                logo: "data:image/png;base64,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",
                logoClass: "",
                logoType: "png",
                period: "2019 to 2021",
                category: "Cloud Communications & CPaaS",
              },
              {
                company: "Cyara",
                alt: "Cyara",
                logo: "data:image/jpeg;base64,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",
                logoClass: "",
                logoType: "jpeg",
                period: "2023 to 2024",
                category: "CX Assurance & Conversational AI",
              },
              {
                company: "Telnyx",
                alt: "Telnyx",
                logo: "data:image/png;base64,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",
                logoClass: "telnyx-logo",
                logoType: "png",
                period: "2025 to Present",
                category: "AI Voice Infrastructure & Telephony",
              },
            ].map((role) => (
              <div key={role.company} style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "24px 22px 22px", transition: "box-shadow 0.18s ease" }}>
                <div style={{ height: 32, display: "flex", alignItems: "center", marginBottom: 18 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={role.logo}
                    alt={role.alt}
                    className={role.logoClass}
                    style={{ height: "100%", width: "auto", maxWidth: 140, objectFit: "contain", objectPosition: "left center" }}
                  />
                </div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 5, fontFamily: "var(--font-body)" }}>{role.period}</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-accent)", lineHeight: 1.4, fontFamily: "var(--font-body)" }}>{role.category}</p>
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
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>Enterprise Wins</p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#0d1117", marginBottom: 6, fontFamily: "var(--font-body)" }}>
          Enterprise Wins
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
                <a href="https://github.com/ABashir88/razor-voice-service" target="_blank" rel="noopener noreferrer"
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
                <a href="https://github.com/ABashir88/enterprise-voice-ai-architectures" target="_blank" rel="noopener noreferrer"
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
          <span style={{ fontSize: 13, color: "#4b5563", fontFamily: "var(--font-body)" }}>Alrazi Bashir &bull; Enterprise Account Executive</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none", fontFamily: "var(--font-body)" }}>Main Site</Link>
            <a href="https://linkedin.com/in/alrazibashir" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#4b5563", textDecoration: "none", fontFamily: "var(--font-body)" }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
