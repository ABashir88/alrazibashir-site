"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config";

// Hiring-specific nav — reuses the same visual system as NavBar.tsx
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
    { label: "Enterprise Wins", href: "#wins" },
    { label: "Career", href: "#career" },
    { label: "How I Sell", href: "#process" },
    { label: "Tech Stack", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "#ffffff",
          borderBottom: `1px solid ${scrolled ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.06)"}`,
          boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.2s ease, border-color 0.2s ease",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
        aria-label="Hiring page navigation"
      >
        <div
          style={{
            maxWidth: 1024,
            margin: "0 auto",
            padding: "0 1.5rem",
            height: 58,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--color-text)",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            Alrazi Bashir
          </Link>

          {/* Desktop links */}
          <div className="hiring-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "0.825rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  padding: "0.35rem 0.65rem",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.15s ease, background 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                  (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent-border)",
                padding: "0.35rem 0.9rem",
                borderRadius: 999,
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-accent-dim)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hiring-mobile-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.4rem",
              color: "var(--color-text)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            padding: "80px 2rem 2rem",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  padding: "0.85rem 1rem",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)",
                  borderBottom: "1px solid var(--color-border)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "1rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#fff",
                background: "var(--color-accent)",
                padding: "0.75rem 1rem",
                borderRadius: 8,
                textAlign: "center",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .hiring-desktop-nav { display: none !important; }
          .hiring-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

export default function HiringPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#111827" }}>
      <HiringNav />

      <style>{`
        /* Mobile layout overrides */
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .career-grid { grid-template-columns: 1fr !important; }
          .deal-body { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ecosystem-grid { grid-template-columns: 1fr !important; }
          .deal-header { flex-direction: column !important; align-items: flex-start !important; }
          .deal-metrics { flex-wrap: wrap !important; }
          .cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .cta-buttons a { text-align: center; }
          .hero-tags { flex-wrap: wrap !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1024, margin: "0 auto", padding: "56px 24px 48px" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Left: identity */}
          <div>
            <div
              className="hero-tags"
              style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}
            >
              {["AI Voice", "Conversational AI", "CPaaS", "CCaaS", "Enterprise SaaS"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#6b7280",
                    backgroundColor: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                    padding: "3px 9px",
                    borderRadius: 4,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 46px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#111827",
                marginBottom: 8,
                fontFamily: "var(--font-body)",
              }}
            >
              Alrazi Bashir
            </h1>

            <p
              style={{
                fontSize: 16,
                color: "#6b7280",
                fontWeight: 500,
                marginBottom: 16,
                fontFamily: "var(--font-body)",
              }}
            >
              Enterprise Account Executive
            </p>

            <p
              style={{
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.65,
                maxWidth: 560,
                marginBottom: 28,
                fontFamily: "var(--font-body)",
              }}
            >
              A decade building revenue across the Voice AI, CPaaS, and CCaaS stack.
              I sell complex technical infrastructure into Fortune 1000 buyers, run
              discovery with engineering and IT, and close multi-year commercial
              agreements with VP and C-suite stakeholders.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="#wins"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundColor: "var(--color-accent)",
                  padding: "10px 20px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                Enterprise Wins
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  border: "1px solid var(--color-accent-border)",
                  padding: "10px 20px",
                  borderRadius: 999,
                  textDecoration: "none",
                }}
              >
                Get in Touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#6b7280",
                  padding: "10px 20px",
                  borderRadius: 999,
                  textDecoration: "none",
                  border: "1px solid #e5e7eb",
                }}
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right: credential card */}
          <div
            style={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: "24px",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: 16,
                fontFamily: "var(--font-body)",
              }}
            >
              At a Glance
            </p>
            {[
              { label: "Quota", value: "$1.2M annual" },
              { label: "ACV Range", value: "$65K to $550K" },
              { label: "Buyer Level", value: "VP and C-suite" },
              { label: "Sales Cycles", value: "6 to 10 months" },
              { label: "Multi-Year Deals", value: "15+ agreements" },
              { label: "Market", value: "Fortune 1000" },
              { label: "Peak Attainment", value: "102%" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "8px 0",
                  borderBottom: "1px solid #e5e7eb",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "#9ca3af",
                    fontWeight: 500,
                    flexShrink: 0,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#111827",
                    fontWeight: 700,
                    textAlign: "right",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER PROGRESSION ── */}
      <section
        id="career"
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          padding: "56px 24px",
        }}
      >
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>
            Career Progression
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#111827", marginBottom: 6, fontFamily: "var(--font-body)" }}>
            Built across the full enterprise Voice AI and CX stack
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 36, maxWidth: 520, lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
            Each role was a deliberate move deeper into the infrastructure that powers modern enterprise customer experience.
          </p>

          <div
            className="career-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, borderRadius: 10, overflow: "hidden", border: "1px solid #e5e7eb" }}
          >
            {[
              {
                company: "Twilio",
                period: "2018 to 2021",
                category: "Cloud Communications / CPaaS",
                accent: "#e8443a",
                what: "Sold programmable voice, messaging, and contact center APIs into mid-market and enterprise accounts. Built technical buying groups across engineering, IT, and operations.",
                signal: "Foundation in API-first cloud communications and enterprise developer ecosystems.",
              },
              {
                company: "Cyara",
                period: "2021 to 2022",
                category: "CX Assurance / Conversational AI Testing",
                accent: "#0a66c2",
                what: "Sold CX assurance, IVR testing, and conversational AI validation platforms to enterprise contact center operations, QA, and CX leadership teams.",
                signal: "Deep entry into CCaaS architecture, contact center production risk, and conversational AI quality.",
              },
              {
                company: "Telnyx",
                period: "2022 to 2024",
                category: "AI Voice Infrastructure / Telephony",
                accent: "#059669",
                what: "Sold AI voice infrastructure, SIP trunking, carrier services, and programmable telephony into Fortune 1000 accounts with technical discovery across engineering, networking, and IT.",
                signal: "Deepened into voice infrastructure, latency, reliability, failover, and AI-driven automation at the carrier layer.",
              },
            ].map((role, i) => (
              <div
                key={role.company}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "28px 24px 24px",
                  position: "relative",
                  borderRight: i < 2 ? "1px solid #e5e7eb" : "none",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, backgroundColor: role.accent }} />
                <div style={{ marginTop: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#111827", fontFamily: "var(--font-body)" }}>{role.company}</span>
                  {i < 2 && <span style={{ fontSize: 14, color: "#d1d5db", marginLeft: 10 }}>&#8594;</span>}
                </div>
                <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4, fontWeight: 500, fontFamily: "var(--font-body)" }}>{role.period}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: role.accent, marginBottom: 12, fontFamily: "var(--font-body)" }}>{role.category}</p>
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.65, marginBottom: 12, fontFamily: "var(--font-body)" }}>{role.what}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5, fontStyle: "italic", paddingTop: 12, borderTop: "1px solid #f3f4f6", fontFamily: "var(--font-body)" }}>{role.signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE WINS ── */}
      <section id="wins" style={{ maxWidth: 1024, margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>
          Enterprise Deal Record
        </p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#111827", marginBottom: 6, fontFamily: "var(--font-body)" }}>
          Representative wins across complex enterprise environments
        </h2>
        <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 40, maxWidth: 520, lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
          Each deal involved multi-stakeholder buying groups, technical discovery, and multi-month commercial cycles.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            {
              label: "Voice AI Infrastructure",
              title: "Competitive carrier displacement tied to AI-driven voice automation",
              company: "Fortune 500 technology enterprise",
              arr: "$285K ARR",
              tcv: "$855K TCV",
              cycle: "8 months",
              term: "3-year",
              problem: "The account was locked into a legacy carrier arrangement that could not support the latency and routing requirements for a new AI voice automation initiative. Engineering and IT were the initial entry points.",
              discovery: "Ran technical discovery across SIP architecture, PSTN routing, latency thresholds, failover topology, and carrier economics. Identified integration requirements with the AI automation layer before engaging commercial leadership.",
              group: "Engineering VP, Network Architect, IT Director, VP Operations, CFO (economic approval)",
              outcome: "Displaced incumbent carrier. Delivered a programmable telephony layer that enabled the voice AI deployment. Negotiated a three-year agreement with usage commitment that anchored the TCV.",
              tags: ["AI Voice", "SIP", "Carrier Replacement", "Fortune 500", "Multi-Year"],
            },
            {
              label: "Contact Center and CX Assurance",
              title: "CX assurance program tied to a cloud contact center migration",
              company: "Insurance enterprise with large contact center operation",
              arr: "$180K ARR",
              tcv: "$360K TCV",
              cycle: "7 months",
              term: "2-year",
              problem: "The account was mid-migration from a legacy IVR and on-premise contact center to a cloud CCaaS environment. Production risk was the central concern. QA and CX operations had never had automated regression coverage for their IVR or conversational AI flows.",
              discovery: "Engaged QA leadership and CX operations to map the testing gap. Connected production risk to regulatory exposure in the insurance context. Bridged technical requirements from QA to a commercial case for the VP of CX.",
              group: "QA Director, CX Operations VP, Contact Center Director, IT, VP CX (economic approval)",
              outcome: "Closed the assurance platform on a two-year agreement timed to the migration go-live. Eliminated manual regression testing across IVR and conversational AI flows.",
              tags: ["CCaaS", "CX Assurance", "IVR Testing", "Insurance", "Migration"],
            },
            {
              label: "Programmable Contact Center Modernization",
              title: "Twilio Flex enterprise deployment for a financial services firm",
              company: "Financial services organization, 400-seat contact center",
              arr: "$120K ARR",
              tcv: "$240K TCV",
              cycle: "6 months",
              term: "2-year",
              problem: "The organization was running an aging on-premise contact center with no digital channel capability and limited integration into their CRM and case management systems. The VP of Customer Operations wanted to modernize without a full rip-and-replace.",
              discovery: "Technical discovery covered CRM integrations, agent desktop requirements, digital channel roadmap, and carrier interconnect. Built a phased modernization architecture with the engineering team that reduced risk and allowed a pilot approach.",
              group: "IT Director, VP Customer Operations, Head of Engineering, CFO (budget approval)",
              outcome: "Deployed Twilio Flex across 400 seats with CRM integration and digital channel enablement. Two-year agreement structured with a pilot phase that converted to full commitment at month four.",
              tags: ["CPaaS", "Twilio Flex", "Financial Services", "CCaaS Migration"],
            },
          ].map((deal) => (
            <div key={deal.title} style={{ border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
              {/* Deal header */}
              <div
                className="deal-header"
                style={{
                  backgroundColor: "#f9fafb",
                  borderBottom: "1px solid #e5e7eb",
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 4, fontFamily: "var(--font-body)" }}>
                    {deal.label}
                  </p>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "#111827", lineHeight: 1.35, fontFamily: "var(--font-body)" }}>
                    {deal.title}
                  </h3>
                  <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 2, fontFamily: "var(--font-body)" }}>{deal.company}</p>
                </div>
                <div className="deal-metrics" style={{ display: "flex", gap: 20, flexShrink: 0 }}>
                  {[
                    { label: "ARR", value: deal.arr },
                    { label: "TCV", value: deal.tcv },
                    { label: "Cycle", value: deal.cycle },
                    { label: "Term", value: deal.term },
                  ].map((m) => (
                    <div key={m.label} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#111827", lineHeight: 1, fontFamily: "var(--font-body)" }}>{m.value}</div>
                      <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 3, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deal body */}
              <div
                className="deal-body"
                style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
              >
                {[
                  { label: "Customer Problem", text: deal.problem },
                  { label: "Technical Discovery", text: deal.discovery },
                  { label: "Buying Group", text: deal.group },
                  { label: "Outcome", text: deal.outcome },
                ].map((block) => (
                  <div key={block.label}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 6, fontFamily: "var(--font-body)" }}>
                      {block.label}
                    </p>
                    <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>{block.text}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ padding: "10px 24px 14px", borderTop: "1px solid #f3f4f6", display: "flex", gap: 6, flexWrap: "wrap" }}>
                {deal.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 11, color: "#6b7280", backgroundColor: "#f3f4f6", padding: "3px 8px", borderRadius: 4, fontWeight: 500, fontFamily: "var(--font-body)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW I SELL ── */}
      <section
        id="process"
        style={{ backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "56px 24px" }}
      >
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>
            Sales Process
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#111827", marginBottom: 6, fontFamily: "var(--font-body)" }}>
            How I run an enterprise deal
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 36, maxWidth: 520, lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
            MEDDIC and MEDDPICC-aligned. A real operating model for complex technical evaluations.
          </p>

          <div
            className="process-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
          >
            {[
              { n: 1, stage: "Discovery", sub: "Technical and commercial", copy: "I open with architecture and business outcome questions before running a demo. I need to understand the environment, integration requirements, production constraints, and economic pressure before building a relevant case." },
              { n: 2, stage: "Qualification", sub: "MEDDPICC rigor", copy: "I map the buying group, confirm budget, identify the economic buyer, and understand decision criteria before investing in a proof of concept. I qualify hard early so I can invest deep in the right accounts." },
              { n: 3, stage: "Technical Validation", sub: "PoC and PoV management", copy: "I partner with solutions engineering to design evaluations tied to production success criteria, not generic demos. Success metrics are agreed in writing before the evaluation begins." },
              { n: 4, stage: "Executive Alignment", sub: "VP and C-suite access", copy: "I create economic buyer access early and build executive briefings that translate technical outcomes into business value, risk reduction, and financial impact." },
              { n: 5, stage: "Business Case", sub: "ROI and risk framing", copy: "Every enterprise deal needs a business case the economic buyer can take to a CFO or board. I build quantified ROI models around cost reduction, risk mitigation, and operational efficiency." },
              { n: 6, stage: "Negotiation", sub: "Multi-year structure", copy: "I structure multi-year agreements that benefit both sides. I understand pricing levers, commit structures, and enterprise procurement cycles. I do not give away margin to close on time." },
              { n: 7, stage: "Procurement", sub: "Legal, security, InfoSec", copy: "I manage security reviews, legal redlines, InfoSec questionnaires, and vendor procurement processes without losing control of the commercial timeline." },
              { n: 8, stage: "Close", sub: "Forecast discipline", copy: "I forecast accurately. I know the difference between a deal that is progressing and a deal that is stalling. I create mutual close plans with milestone commitments and executive sponsorship." },
            ].map((step) => (
              <div
                key={step.stage}
                style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 18 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#d1d5db", backgroundColor: "#f9fafb", width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {step.n}
                  </span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111827", lineHeight: 1.2, fontFamily: "var(--font-body)" }}>{step.stage}</div>
                    <div style={{ fontSize: 11, color: "var(--color-accent)", fontWeight: 500, marginTop: 1, fontFamily: "var(--font-body)" }}>{step.sub}</div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH AND BUYER ECOSYSTEM ── */}
      <section id="tech" style={{ maxWidth: 1024, margin: "0 auto", padding: "56px 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, fontFamily: "var(--font-body)" }}>
          Ecosystem
        </p>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#111827", marginBottom: 36, fontFamily: "var(--font-body)" }}>
          Technology and buyer landscape
        </h2>

        <div
          className="ecosystem-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
        >
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 20, fontFamily: "var(--font-body)" }}>Technology I sell and understand</p>
            {[
              { group: "AI Voice and Speech", items: ["Voice AI agents", "Speech recognition (ASR)", "Text-to-speech (TTS)", "LLM-driven voice automation", "Latency and audio quality"] },
              { group: "Infrastructure and Carrier", items: ["SIP and telephony", "PSTN interconnect", "CPaaS and programmable APIs", "WebRTC", "Failover and routing", "Carrier economics"] },
              { group: "Contact Center and CX", items: ["Genesys Cloud", "Amazon Connect", "Twilio Flex", "IVR and conversational AI testing", "CX assurance and production monitoring", "Enterprise integrations"] },
              { group: "Enterprise AI", items: ["Conversational AI and NLU", "Agentic workflows", "AI evaluation and observability", "LLM validation in production"] },
            ].map((group) => (
              <div key={group.group} style={{ marginBottom: 18 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 8, letterSpacing: "0.02em", fontFamily: "var(--font-body)" }}>{group.group}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ fontSize: 12, color: "#374151", backgroundColor: "#f3f4f6", padding: "4px 9px", borderRadius: 4, border: "1px solid #e5e7eb", fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#111827", marginBottom: 20, fontFamily: "var(--font-body)" }}>Who I sell to and with</p>
            {[
              { group: "Economic Buyers", items: ["CRO", "CIO", "CTO", "CCO", "CFO", "VP CX", "VP Operations", "GM"] },
              { group: "Technical Evaluators", items: ["Engineering VP and architects", "IT Director", "Solutions Engineering", "QA and Contact Center Operations", "Product leadership"] },
              { group: "Vertical Experience", items: ["Financial services and banking", "Insurance", "Healthcare", "Technology enterprise", "Regulated enterprise environments"] },
              { group: "Deal Types", items: ["New logo hunting", "Competitive displacement", "Platform consolidation", "Cloud migration", "AI modernization"] },
            ].map((group) => (
              <div key={group.group} style={{ marginBottom: 18 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 8, letterSpacing: "0.02em", fontFamily: "var(--font-body)" }}>{group.group}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {group.items.map((item) => (
                    <span key={item} style={{ fontSize: 12, color: "#374151", backgroundColor: "#f3f4f6", padding: "4px 9px", borderRadius: 4, border: "1px solid #e5e7eb", fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING CTA ── */}
      <section
        id="contact"
        style={{ backgroundColor: "var(--color-accent)", padding: "56px 24px" }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: 12,
              lineHeight: 1.25,
              fontFamily: "var(--font-body)",
            }}
          >
            Hiring for Enterprise AI, Voice AI, CPaaS, CCaaS, or CX?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.65,
              marginBottom: 32,
              fontFamily: "var(--font-body)",
            }}
          >
            Actively evaluating Enterprise AE and Strategic AE roles with $1M+ quota,
            technical products, and Fortune 1000 buyers. Open to early-stage companies
            building their first enterprise motion.
          </p>
          <div
            className="cta-buttons"
            style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "var(--color-accent)",
                backgroundColor: "#ffffff",
                padding: "12px 24px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              {siteConfig.email}
            </a>
            <a
              href="https://linkedin.com/in/alrazibashir"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.15)",
                padding: "12px 24px",
                borderRadius: 999,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.15)",
                padding: "12px 24px",
                borderRadius: 999,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#111827", padding: "20px 24px" }}>
        <div
          style={{
            maxWidth: 1024,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "#6b7280", fontFamily: "var(--font-body)" }}>
            Alrazi Bashir &mdash; Enterprise Account Executive
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none", fontFamily: "var(--font-body)" }}>
              Main Site
            </Link>
            <a href="https://linkedin.com/in/alrazibashir" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#6b7280", textDecoration: "none", fontFamily: "var(--font-body)" }}>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
