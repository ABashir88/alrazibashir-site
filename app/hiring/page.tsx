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
                logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iODAwIiB3aWR0aD0iMTIwMCIgZmlsbD0iI0YyMkY0NiIgdmlld0JveD0iLTE0Ljk1NSAtNy41IDEyOS42MSA0NSI+PHBhdGggZD0iTTE0LjQgMTEuM2MwIDEuNy0xLjQgMy4xLTMuMSAzLjEtMS43IDAtMy4xLTEuNC0zLjEtMy4xIDAtMS43IDEuNC0zLjEgMy4xLTMuMSAxLjcgMCAzLjEgMS40IDMuMSAzLjF6bS0zLjEgNC4zYy0xLjcgMC0zLjEgMS40LTMuMSAzLjEgMCAxLjcgMS40IDMuMSAzLjEgMy4xIDEuNyAwIDMuMS0xLjQgMy4xLTMuMSAwLTEuNy0xLjQtMy4xLTMuMS0zLjF6TTMwIDE1YzAgOC4zLTYuNyAxNS0xNSAxNVMwIDIzLjMgMCAxNSA2LjcgMCAxNSAwczE1IDYuNyAxNSAxNXptLTQgMGMwLTYuMS00LjktMTEtMTEtMTFTNCA4LjkgNCAxNXM0LjkgMTEgMTEgMTEgMTEtNC45IDExLTExem0tNy4zLjZjLTEuNyAwLTMuMSAxLjQtMy4xIDMuMSAwIDEuNyAxLjQgMy4xIDMuMSAzLjEgMS43IDAgMy4xLTEuNCAzLjEtMy4xIDAtMS43LTEuNC0zLjEtMy4xLTMuMXptMC03LjRjLTEuNyAwLTMuMSAxLjQtMy4xIDMuMSAwIDEuNyAxLjQgMy4xIDMuMSAzLjEgMS43IDAgMy4xLTEuNCAzLjEtMy4xIDAtMS43LTEuNC0zLjEtMy4xLTMuMXptNTEuNi0yLjNjLjEgMCAuMi4xLjMuMnYzLjJjMCAuMi0uMi4zLS4zLjNINjVjLS4yIDAtLjMtLjItLjMtLjNWNi4yYzAtLjIuMi0uMy4zLS4zem0tLjEgNC41SDYwYy0uMSAwLS4zLjEtLjMuM2wtMS4zIDUtLjEuMy0xLjYtNS4zYzAtLjEtLjItLjMtLjMtLjNoLTRjLS4xIDAtLjMuMS0uMy4zbC0xLjUgNS0uMS4zLS4xLS4zLS42LTIuNS0uNi0yLjVjMC0uMS0uMi0uMy0uMy0uM2gtOFY2LjFjMC0uMS0uMi0uMy0uNC0uMmwtNSAxLjZjLS4yIDAtLjMuMS0uMy4zdjIuN2gtMS4zYy0uMSAwLS4zLjEtLjMuM3YzLjhjMCAuMS4xLjMuMy4zaDEuM3Y0LjdjMCAzLjMgMS44IDQuOCA1LjEgNC44IDEuNCAwIDIuNy0uMyAzLjYtLjh2LTRjMC0uMi0uMi0uMy0uMy0uMi0uNS4yLTEgLjMtMS40LjMtLjkgMC0xLjQtLjQtMS40LTEuNHYtMy40aDIuOWMuMSAwIC4zLS4xLjMtLjN2LTMuMkw0Ny44IDI0YzAgLjEuMi4zLjMuM2g0LjJjLjEgMCAuMy0uMS4zLS4zbDEuOC01LjYuOSAyLjkuOCAyLjdjMCAuMS4yLjMuMy4zaDQuMmMuMSAwIC4zLS4xLjMtLjNsMy44LTEyLjZWMjRjMCAuMS4xLjMuMy4zaDUuMWMuMSAwIC4zLS4xLjMtLjNWMTAuN2MwLS4xLS4xLS4zLS4yLS4zem02LjctNC41aC01LjFjLS4xIDAtLjMuMS0uMy4zdjE3LjdjMCAuMS4xLjMuMy4zaDUuMWMuMSAwIC4zLS4xLjMtLjNWNi4xYzAtLjEtLjEtLjItLjMtLjJ6bTYuOCAwaC01LjNjLS4xIDAtLjMuMS0uMy4zdjMuMWMwIC4xLjEuMy4zLjNoNS4zYy4xIDAgLjMtLjEuMy0uM1Y2LjFjMC0uMS0uMS0uMi0uMy0uMnptLS4xIDQuNWgtNS4xYy0uMSAwLS4zLjEtLjMuM3YxMy4xYzAgLjEuMS4zLjMuM2g1LjFjLjEgMCAuMy0uMS4zLS4zVjEwLjdjMC0uMS0uMS0uMy0uMy0uM3ptMTYuMSA2LjhjMCAzLjgtMy4yIDcuMS03LjcgNy4xLTQuNCAwLTcuNi0zLjMtNy42LTcuMXMzLjItNy4xIDcuNy03LjFjNC40IDAgNy42IDMuMyA3LjYgNy4xem0tNS40LjFjMC0xLjQtMS0yLjUtMi4yLTIuNC0xLjMgMC0yLjIgMS4xLTIuMiAyLjQgMCAxLjMgMSAyLjQgMi4yIDIuNCAxLjMgMCAyLjItMS4xIDIuMi0yLjR6Ii8+PC9zdmc+",
                logoClass: "twilio-logo",
                logoType: "png",
                period: "2019 to 2021",
                category: "Cloud Communications & CPaaS",
              },
              {
                company: "Cyara",
                alt: "Cyara",
                logo: "data:image/webp;base64,UklGRiQrAABXRUJQVlA4WAoAAAAIAAAA2wUA2wUAVlA4IEQqAACQYQKdASrcBdwFPlEolEcjoqShIJa4GJAKCWlu/Eb5/8gNf0D/eHXed/9l/ZPSQsH9z/IP9c+hX9F3ZRd+v7+t/ePaD/qfVL+gv1g+An9d+m55s/3H9V//Hew/yndRC/8/tUeV3qr3pz/O9s/+N8R/QR7E9qvx5+UjK/2MalPyz7hfsvzN+QPabwBfy/+of6r80v7pxVgBPnO9LGc3ey+pfg5UD/Jt/zv/j6QPqz/0f5v1xgLwyq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6n+jaiq+WAe6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V8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV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",
                logoClass: "cyara-logo",
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
                <div style={{ height: 36, display: "flex", alignItems: "center", marginBottom: 18 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={role.logo}
                    alt={role.alt}
                    className={role.logoClass}
                    style={{ height: "100%", width: "auto", maxWidth: 160, objectFit: "contain", objectPosition: "left center" }}
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
