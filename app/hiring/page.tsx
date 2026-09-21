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
        .twilio-logo { height: 34px !important; width: auto !important; }
        .cyara-logo { height: 34px !important; width: auto !important; }
        .telnyx-logo { height: 36px !important; width: auto !important; }
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
                logo: "data:image/webp;base64,UklGRig1AABXRUJQVlA4IBw1AADQ0ACdASoOAwIBPhkMhUGhBJJ3KgQAYSzt34PegaUGdgBGOz3D8o/yK+VmtP03+z/mn8i+UWr76QPep8r/Mv7f/Wf24/uf////P0X9XP5q/1/uA/w7+Lf3P+3/4D/Yf5L//99/zCf1L/BftD7wHpL/wX+W/Yb/AfIN/NP7b/6uw+9Az91fVj/537X/DJ+3f7Se0T/0dZz66dwX99/Jj+x+mfjb8yfuf+J/zv9u/7/wPY/+vr/g9Bf499ofvf93/wX+//vn/l/3v3N/pP+d9nnp78wf8/1Bfyf+e/4D+7ftv/hP2i+pj8HtVNp/2PoC+2H1v/c/5P92f9H6fX+j6I/Yn/ve4D/Kv6x/tv8F+9H+P+ef+F4Qn3//h+wF/Mv7p/6f8j7rf9r/6/9d+ZPt9/Sf9F/5/9J8BH8v/tH/L/xX7y/57//+LD96fZj/eQcln9MIZWxvoh7crY30Q9uVsb6Ie3K2N9EPblbG+iHtytjfRD25Wxvoh5MzScwlwR2Cs+P/JXItMaG2DiTOrZvbpg65vExvoh7crY30Q9uVsb6Ie3K2N9EJW1C5JVRXcWmZLSXnFKPS23KYzq2FqQ8RgrTRIp6b7GqnjKY3PIhqvqorGlLe2Rnjh0OzIzxw6HZkZ44dDsyM8cKD4gnc8acAhobSBcStcSwo8Zs+8Kp48CHllBg9n36LGG1+zIzxw6HZkZ44dDsyM8cOh2ZGeNCUM7IeY6WZycGweNl9AjfUfptU+9ML770pkWDEf98KkAlbf9m1W5gKuNFcALZGeOHQ7MjPHDodmRnjh0OzIzxqrPTOf6ocXyJy3feYemOFWKSGZ/JxrV6d+LFmhelU+E+JLK6oAmC923yOGpub+X/tUT1ax/+j2MtLNRaQFwUpND7KGlsiw3Z/eYMLVFmtOjXXL2P6YFOD3zH42RK8TOOD1JDBVnZlVsP/+WjH6jlXFThC5R3cSdvxrRStEmwTWahd70Mzc7zw12D1GYOjWNmVjApqozMiVP3jg3+M1nVgJpWArowjtLluKfR1LV6/LWgpkU8SiihsSii3F8WfePQFGtYZiLU242IuFvbUKrVNe0bz3eBl2d+Vz1a4pEklEJ/Av8ibKnpJhVVlWFcgmBV6YR2jamorBqUkfQncahxztZ7WgbCOpqglaHLE/n0nMPn6XQNLIgpjpOwhFoLUsajjyTf2SrxB3KFqGmxsaepjAaJ7LGbpA3/xYrd46TrLP69NsfBT2FL7TOl5QCPVdevQLy3kVh2kOu6Qnkn2mSwVCokyZxrLbETziAJKR6gXQh1Laj/MdaSsHF1PIL/EBwdASmvfyByjdIuZ/k0XHXUwabgw++HhkBZ/N+/8M0XRUJ29KYg17v4ifhYz4JRXto8O763RN6u+TCWjdI99DmZTADABcBsEr58GhBfUdMgeuYxMPJN6isR1+542xEoSIDWwTO+fYPo1wClRkeWEOddlpB1D91rnzwjQ8uRPsXFcvikoqRDP4Gd5Vgkp+d6YQyhQwUsBGqY17zzzNrm3MEmu1kwMJ5G5ryAHiTlF5nk2EVM/7yfqWoPIIjYmqy37+iTFoF82+UJdbF+J0+toRpVcIpnxacW2HfbrUfNUPpCxYQfXex4AMJUQ4blk/PoytAfcHFlnB9l5hzUbLQX1RQKeje602gVUs0q6/q3dbcEyF/A9damIed0DE5ZtL2xIhOhD3P/LKNLw22JsRN6CHArOXyeiM3kzW6ww3HBOoX/U3yz2Up4u4X0qddx7b1v37Axa8VRNPCnd08NDyYGYMIsIcvFwWiOr5n6OEEkU+bGHYrBU3h0YCnVL+JK9QsgFDU5dez2vKbGI/bh/NZWmiTwTxOipGdyTPaM7HdrU8gvM6ikdsENYHuFauYlp/AhgeH6BnJSUi5HE6G7hT11AHAoeJDepIHh+/KkG1EHRT0D00ykYeLDE8r+PIjvgLD4zp5B6qrNCMedODEfm7X8XBTqRMQRGD/IporY7I4C9g9Vz+ix3gJybI8bxxS8JO3TgxjEYC4+FtaYHCpcINH5KmKYSnjI0vCRMwm+inw2SXa7y48cmCPowSV2PSLwF+cDeE3MC2tbaGedbFhZMHVM6nWES84fT/mznso2B+libUxMb5q9Qc/GBDsyM8cOh2ZGA4hGMmGbQCV2/qsniO/T9I7yHZkZ44dDsyM8cOh2ZGeOHQ7MjPHDlVjALHu4BZ/TCGVsb6Ie3K2N9EPblbG+iHtytjfQqAAD+//MmwD8CNfSk2troD5KgsLVgAwKZJtp43WPuqxOpFVuLGWL+1Rkj6ydvNoo9PC3XhY205pZGuiEA8ATuBI/QCiTHADCpLqGXzE8okb//r/hf+A1h1VmVIEUAk3OTnysT/C+l/2g/rNpT09pL7L0tl1aYmZZ4d4sXgB4DEEdr1qKJcbHvs/8yS6e67FRm+FHBLim+SI0ktGXHwOOI8BUKf8bRn7GUc+xT3SjBFyHP7QcVfOPo8N+LEk6Gdsa4onBNGJOEG1PDeT3gGVKxCOyC+e6KXJI7h4yx33UtSsB8eChCbKOAhvOMRXa/4vvKnc8Lb6vToo5UdU9qbKsqKgWKyP8l2Ecoo9WYv+ndXOJG3Byn2nsX4GNlERAuNb7UmxALHJOBlyOC+UQzDqo17lTWbc17Cbw18ZrS0pbOM0uzJ+NaBmp7ZR/U5rymc7b+5iy/dB3dc+IFGyQKes3HzrTny46r76Y4EsdtOfRJiEQQA/5+eYa+Nbz2jHBDcZsGrAuNj23gLzETGNA6QHc2Zsesq6tA1RG/f/BnNuQP20PiXbWz8HI7jhG7TQyWnlO5oZztpZI1nnhJ9HCvY/Hx4nO8zuTWD3yau+pTqKCWNkxbehgt2H19YHoWflrRfQ0uAX8kvijPSOmQXM9Aq6plsS1ebIZzig9QBpP4sz0+1suwjPOCpfvafHq1Ic8mEGxOrIUmTTvfynY+Czb+Z6lT/LSq7ah4QEk/7opuQEBFp3fdqr0Yhiyv8qpVm6Nu8q9g63eKac/MKP08+JRC0Q/cwKQ/6DD7ZZGFjFZGtl3C9kCQh78NLAyM1Slo/lPRGLilkPvy5Ou19UuokVbRhsGCXud5LcOGGTopNzDGXbdciRyvDIYmc+zztLMIgFlp31VmN19XFSbMAkhPcxijhBRXN0enjEneM8TjZ70NlDCnUrXAXPF4ZD15geQzrfSqt+okOH6VaaISrnxzH/IsEO4dlpYByWuUdpkij3cCd/buy7uVMsFWR6X4ydhkJp/YALH1mi5Bqr5UoH4imi6yibHETGmwySpv+gPNBxhr0czO2tVxNH0jkBBCsgs/fJeYvHQ6rXLr9SRuU3cn6Rfurj8qh9r4aO7pRu1gmxflCibQ33PZDdaRuTJAYjuKiBngQB28sPVG8+YmRUsONg6QTS1BQiq3yT57WBfpGX9Vi6SWagPdfDfLeY/YPyn49MKnE8axkUB6O3rsHN1/pDguPezVQ9GsN2z1p2lsoOiqM3KXCOwfaJtdR7YH/snvKD8yBXnLcDjPIByN4ReCA7AbeMDIvLHGJyaSNTi/TsD7ynPQE9nc76fwKtDaeJ3TK4g3cvzn3aApjI4o42KLkuF8vyFJ2v/anCdvWdAUrS/NlTIoSzSXe7PoXPtyqqVYm4iOYqzetmIp21oIwY0vE49/tTuPIjGxpa76mwKgGVev2OPMGJDGtKUPz3u4CUVsOlCgLp8+VteFJpakux0/Uvu642cMFyLKpviBkTW9wU+1WKvk1fU000wvEghYmIpPqRg3jC2X9IRv0zeNPOr7G0tTcmnT6CBzy96qJriQirzwLXiovMgiHN42eyamv1zfjXqJXf7E7AW7+D9uXfcrW+xOczIZF/Ma2KEKljOYZSrI06b3w/KDlGTmVnBlx5PJxQXO4px1ApPzWpTEmhlaIk4j6Z0R4k1eoXPsdWtzJ6AWH5IWqNHMfALl8OS6Dke64q9DP79PSXPaOGQ//fVOjdL+mBfUdmYVWzG49JWawAaPBmCLbtzAErhm1VuZHkpR6pJjTcaGCj+kLWIBa0rcfkJHp/JhbsNZDalmc3jfDNCqSrgOivDCdZA6+nCLDNPbsQBUWjPNHHVbOjbChadm7KCfGnBQuCCc8fGW0JHvXJWU1zz9VvpoluebeCVlAy3oL6/2Ybdr4g+YrN+f21RfRLUkeasm2R7St6K06C7mEquFLaTO4Dqhbr+f5B4yidGni+HIN96FUU2QFYqmWbWz2G3VMRIK84Le74AxitLZNiam87JXftxX9QQ66IDt4JdzA83lAFNpRF6RKesC8worSV97iDxUponH9UN/ik5Pu+tWXM3lX6eMT4XBjSPtDLxExYAl2zuo5n+hXRdMtMZkX7SzJk/KzE0Lrnxn4j+uqX4LW/xWU0mezGlqvzF22rwdGSrhRWGZEWiy086G5bqoUr9i1FCVRuUE2n7c/GBUUO1iAGESJ/082UJWPyiLd6IYM1INdbiC4vJilca+bPdK/8kFhrlz7GPD3YmMEcb6tw2Hl1hKUI8vAkGvQ3meh4tN6Rj9SNr/u9OYjngijJ5ggN+4dOn+J7RdDZFVniFJcfLt/FWpuaADlV+bAoxs0W+NKEoHn2dFMMdMXwuAhfhBktlTTY/vNZzVNTZ5ZIgLb5FN+Nnj3wX0Czr9S49MwTqWuVpUU7nBN0tSV2JcyITHbcTVvpZgNtDOLaoOUgyxSaX/1P/s+25Db0ooSsOR9TyzPkK6YqEhsDLyNVH9m+9AWqCJb5RcPiaPPAll7RAxd4FjDYLmoZOFkP/lOLDkVeuDs2ouU928ZvcA1eYWOXf/DgeOS5RdZPSSGzKy+HSe3kkIH4rvp7oI+lETe80UUFe+ZoIHAEMsEoxagZyjfYSy67Mg8qjF8luIhMVed95JE12umdiDtjxL4uh6iesXConz+ndKhCZ8/4MbM38q71HDi40PlGUPyLaze5jAgLcQmZSibnYrTW8jdoyygtx5gyd1Q+UEsUQrx/uJFNOEcnsl17MH9+OPg+elugcyENSb2GwMrcEnJip5oe+CqbWyRYxXUuNTz5gYRIicazrFFVP6kInYFljYrGroRcS6j1EtItFytEr6shQxbfP/Pj+kcXEQLzVlLsQrRiyj7hf2Wt5CDa6HEiWZBjRc9mP87Pc9j162lAc6QIQnn14jhuf48GRQ26/SxWvBY3hgs7wzz0xeMU7rSQIvyJhV7/V8ZX2g9pFSM4TCaJouybIDLSC76cI8cK6aJDyljZeXn6wlCEQHBptueIU2MXT5J11CxxFJ5S0xQNp8nvYS5fkpefmDLQqlsFzxjMQPIluBV+OzSZ5TGiIqQP+WEaI+fT0P9StmADuzdKo33N3xmscLU/huriq7qNV3gsEgGf5W1HDBfldrc9mfprjuN0cllX5UHXnTOAVg/5teYHPvJne6i1/OgWWi2f/54mNNzJxHI/vnwdlY+eySQGQuPGliJD1zXgJnTL+8ZOobMcJDWP5waQ3jBafxJPvFFb71/ehtJzpNSFFYV3s572v9MWPAzKVgJjhqockCxL4LVclM4xUFMHCWWG2Pxos7LENTVfLlZqDXBymqtjyID8d9NXY2f7T4Si+hmKsqvVdPBy1wa4fkpnMRaJhsp9M29SyDmGyYagEx6BWD8mEJA0i5rhR+h+ytmWJPz6UfcskA50850G8PeEuLlKwiqA9uEnI10zhDFLTNcVZdDUeI1bfxmukV0ea5RfewJAkkDcNZKyePchXy/zCIa7vRFATVNfMq6Ws/V6yyc7y7VwiVU1KVWCjgjPDbjBpiB9sNpPqjDdp6ZFpTwq145Cg55R23TlRPDMKKQBbLpBpSv63MY010WS7gjLDXNlI7K8MrL5lt0WBMn/gxtkz1hSBXYDN46Z365cx3s5Bq0UFzGJvAACVdHMzyiykRHu28E0HFU5eV9OPZVaBUlUZftHngNbgBQhlLLwKtLTHL0JQnW//m7BgIpJD5T/UUqv5EMRVBhFSKQBijYdycjizwqbt/dz9tx+1M0IPJEF5uCwBnVqI2G3zsuCELjYSCqD07bYpY9YrEmeUq8crf19Pb/87ahJ/75MLmDpvLjjykBJpitMKAg56a68JtR7hK+7A6EsSHXUt8xO+vUs0Zh5uIZVQKWy9kCR8+QEWWDn92e3S7+TaoXOoC06/9IR6rsmDexcCf2iSeTtr1DTGkR714AvZhnK0y9UUQ451NP+xUeR6MUzxu503lcx+98Gls6TtA6nPdSHWFXYkAZtPqAAWVOLUYxkRUQ7ATRK05hBlhDbvn1rloG0TSEV3oqpPp6OQUo6MljCaVplYukqJk8T9wmF81Ph0aICtoNNCOE7Ic1lC1yFcRrP3TNgno8LD4wN/x+Xz9DH5ovNLyDU6L+P3OCHqq3PjprvSYdOtvs5fRJUXzBBxWiHj77L9CDX8fgKg06GQnCmheQ+oj73rxS8NVg5ZZ6dMsqzh3l6gwrVhbMtBKQS8r8hzoQXiBMrtzmFknvqYuPrqGTmT97e9mqcZBsCcSt9YJfbawHhSBS3Bh3WIpXEh43gsn7y0vdgEH5ek5HLf1FRsTiVkaq0elEbDy+CZhUixEaa8krL3uMKUWEXxnns7DfpEp05S6fBKZ6spTDB+Yt7g5y4p4q6fF74GA3M8aCdv4ybyCVepAyh168elznq2PXIYsxYqZ050eMlbT5jBh4Vr5+LUW8e0RLqL0ODo9rxSmbmm7zDH35qOHjWiKG+U7y6ntsdfTlR0vpvcXIN4PbYgwu5vH4dcb/TW+dcUn7xeQLSJoBQPRZv+fdHj3SzraCH8erleGGuXsIAOJ5UPAAZuHoX/hvkxPWkIQ6bk1/C3ibaB6XdTd0c8Vl8w29RSepaoLZ8KlkA0y//BEaHSEgQoT5/b18NrVTliuQD6QevYk0yks3rhS+u9HU0uqyOHJ6jPRq2aQHuA6wluCBq1O++T10v0o3pQo+iVN56EQojO7vmpp3IFy1ZHiLE0rJ9vRak4Rg7olg6XYxJ/96lnG5Id7LsRYKQOVXGC/vf27/GVYIMOKqbIVDHvOZ5M6bo3h+1ffELW6/wT1vDpxlFfHU1oEnvp/O71jV83DfXucbPcEHnrvkswcEd2yZ3Svwd8GVgqR5z4MsKJQZf0eACNpPPmFcVVWrGT+RT89SF5B8ng1rFdLjFkk9dFHYxqAJzsvXtzAaSPGB1/phHN5gg2KGdYeeDvPAE9XoIkuKT1wV36o34XzfEQ+Mt294XMk/KccgDY5kXT1WPBAzZ43ZvqrSc+o4Vs+PWZKRG/qENPalV3Ws8Cd+zKgqtlF1cO3pj3uClMTOshxc1QuXRlYA21aAhfRF5Btiyy6n1m9fLVeZNVMCJbZ6W/hKStd7CwSJ9dnDAbvt/+dhsB3hwfTB3t/HWr2m2eesd7FitQOM7t+8jhKAxcmp7kKkVs5OteBOeky4FMoUtvWnr7ASUcz/8wLShMi47iMKzGYtKJNlWq4Pn7LSV/pSYxD/VwvimGz+ocEwWdl8UbY4iqdsc4zlKrAdh+to973FWFEE4YXun8ksAzk6KBBIw/4oFmwsSG2FKQnzzO5+u6YK6zgPME96xi1Mr7ya4B9CwfnazZJIoTb/6mEmAqwTHcxR1jXQH3u1VWYbL9BM0g4dlAbWpFUSW4al0E2q4/zOlUa+/26SK/UFk2VUzky0nzdMBugdDrQuf39tbDuEujZKU2w8LNCZ9QH+6SDN3HHFOqQSy9znAg1frbrNiae+4t1woxDnYmmnuksBCE9d6Av3+/CLxEmBs6W/0GNUC4gO4ik3PtUhVJ/fV3SJ4i7Krtne+HhmI53IZhih/shXARSWggKtyX7Ac7kCLpU53EvAPBCP2UMfJcfTSvcI6JAB91ndb+W2q2uXWd45dGrfEPF7bD9ZVoU97+UKk0uxVKOYz4HwNKC73vRU4846WHP74LnlLXNMtnTP+M+BPYaF+T3OZ3nWzB8ejBlG3IybKTCwKoRRvT82of9j23jHTF/9ABUIStq1U8iGa07ETV62qbe2JudHL3471Nb3rQcB+sNJu2zNgZ5xY/3zvvMYhsYIVnuCsoJYLVqv8ixCvzxnAZUMxG3ZTznkuxv1cv8hw+I/dtaIXNV2Pl7cx4ZfTBNN4ECwbLOLMJ8/kH6bFlHs/+aS3pH6a6TWFTR63EKxLP6z3/lbtx27/VBax5HadGHb2yK4Xp5CWbKMkwzBP47oOwJBsa/8W9fZSBtXihUegTnLr8nyMFDRWVXT3P7hVREl8UFvoy/17vOi7FMvANw0xyoCkRxkaF/ydsA06SNuMSqwD9chZOhyUS52kD848w73yV8kWd6j8qf4iuJKiJfycDVJ3qRsup3A/C6v10RRCjV/cyJVD7IasIA8AOQQ/VZ1TRUYVuvMtd9RqC3NPx5hUZXnxElvlerDr44arXrAPFBxarx2m+eLo9GANkajQnV/kLOzUVs2dqiRl8gO+j38MzXF69AjXQms7o3ldZyKF0/1qiKGZXZjfR+DlM7laAuAOFcEOl4Oz1eobT6wsIfkKkZXffxP1wG+ifWinJDHO3gMwoYY1mMFkhIZRxbtag/MSdN//YG8zobQwg+AXRe76AVslron+jTThmTVlHyt4i3FCmIV6VsPaz1P/TwIOj99VuIIYFzebodLBXMqSwbbdQ8HNmRt27J40SaVXGUPwGvvdv8I9rO49oH1/mT0GOG4kog7l3C3DoKHb5zch7/die5rtqV8h6LYjfgLoyw9CFvcJmIYRvR9p5cZKG1RbRPVpWonh3WZJUSrs5gIUikZZBuBaQvThlDJDlPu6o5XeIR4rIDojmJOc5hGr/il3bHPLtkCWcTYYMtdvA2LSwyfm8yKYeTQFZdo5XbMnt15dobRCF9aVMrvAPFN1FiHbBZw91ZkCca4+SrLdMj/E+IoC5x1nsHsIOHvgDRtZkEAV/H+TwDE/3019bp4c8K1cch/IhN0p0ClaMSmIWdOK1X86GYc7S5dXFa36LWbqbK9ko3/EigOJ/SIJ5rs6LhqcjLclhkUeVv4hKgI8lqgs8it0aVDLQ+yBxVq5JXOPzg+KJQc5yqkr672y3cvmFrA3wE8syMNUAcMr+xK0bRqbyxOxPvi+6CNIfG/A9v58mxFL2VSm8ccO8YonnsioRN1xITLP+7PI+eBKsF1QCkxjrAvXjnnb5kT65ctVhOJfjSC0ezejddUFsDX7hZeRU4vmau+4UXgrnIL+/l/mpMoU8TGpUPYSOyDSrTMP0czzrlKqQlfof4v3pZflxbyRfxlXh1k3H+CXLRbZDP9N1mA0HIperrg32VyLlqNrnhpdMCdwUMDWvSW1aFmFSfUHHwIB/059OeIsg55MAxM/dvjwM/L48rPSJQ19xK+esKRlIYqL2stAVrQMlv22Nz/mWNx3IRvTLdcnabwk+r/jMO7edf22r6saOWDPTboBKaNlgwuaY+DLkN6cXBggkRDL5Wu+URtefWH9lXCHDrNGHJKzjca4LThyt9D1H3WK+jwb/1Xf+UG5uX87Y96taTBdjeTd3BS+MKsUDVsSbseU8RgThv0QEATk+FadIq6NFxpzVkP9olrwk54HvxqOK5XFvSmu1G/qd9vEU56gdwDsngkSg2+I4wRaNjS2llVp4G1TG9bNf51vJk0ldGAqwrOadHN8bHppCXn67NwleRwW+LZ1UG+j5wyzWg0b6HviOsMUFmkVQzgsvPDT4w/lyGVy4s+YTpXHSaci45aLJvT2Zg4BsKJgUpmdDKClZye2w4yhPIv3tTWaWzUl3shOocbTzIQqqwo9SW+Pj5j9ak2R8u1qcqlhk7sFaHa1iVCaeUGdD7fCf+4d4ZwhEXpQituuZldJTqXajdD26XeZDtvm0GGkC9suEA/Shd26n85IYt2lWJETE+lqa49bVx/t5GUKFn+qoxqRfZrmalAQPecweJXyXHQVBKhOCVbjmZaVjyPO1IcfJewp1HFuj9Di9cjVYXxE21+X/uJDdLm7tU18RArVJczQh3tuTWJE29JJNnijl6xsNG1tE25pB7fUY91+9y5wOYH1yexmD7PiheGYIQQ8suYc76iBEGdsOklXOCR4qrX15j4gQs/OsBU9db2GUw8A2HNaXaXY6Ke9SWllAbpozoRqMTLtOxUG4mImXsRBYy3CPUfs11Tg5FyXgHhoKsVoPdwJBzxv108XYE0kNF2IuVb9DRHaDny4291URR0H1f0zkT+m0rvtgHRXN/28kldyn/Wsl9rRcRd2rG+yOREmJhZSSGpgl+SMKxf2W1lAlI6Y1aVVpCw3BGsUeTHniWJYQ66LNWU3et//Eug9Iyho+OwlbX14MMfwkytPjq9xsFONikLBb++ZF0SzFZIRbeP4+Vupb88CzTPAYYDQmliHgi8SSzMNQ/Nt7zOX9RzheqsYv4ooLlNyKY9u1DILmPgV3dIa6twH6/nm1LXFJthBA1dhLCLYENbDosFF1HFJ9Y44BwmRyjx4JR9cNMnJ1UvYyMjQ3tWfqU/ExDHJxltJthUfEdtXKH0Yy4Mx1fpNhqrZT0yCx8h0PpyjQpclEtkulLkcy3MK4O26lCUSwjzPv3Xi2t7XCwZOUBs0zpTUegFuzn/npUIbxuslLYu8xVavWII7yz9OOtYZ6XSfY7aJ4AO0eY7WO1fhFLcWtji+0GmswMoM609Hx1rurRqw6I72cIsi/jooizd+v7B2FY2hWrdezvQ6ZewSguhfQfZUM09vttEtUDniTJty/QkXhObMD5JKmaQlGOkYTBe85PmRX230994N9HBJydIkRHSHn8AD79dxo6FMAG8XWdAJe139RkE5DX6A0DBOV7QKoJ/0QG3DjRTwx4fNXEIg/pQ7UCvQZT8Q8trsRV3GJ1vOaMnakAZ7l1OqW7uDkk/6XA48s1GtzvLkUUeivhld+vTrIax6zmZFY76vUmsWrgmfOH/HXaCpIEdWPkCRR90UmAROdiiUToSWupRqF+6JkZNtGT6ylUGefK+z9P+9h8dbEpBJ3/CDJwj5L1aA3Wr6DcmTarbYl6/Jse3pxuMHSQezW+nx21MAvIN6e0bJoL52ZvAC8c2wTXnuhoC4td4xhNBTSjgU+6gBdgWjwRduhcHpi2TTvE8E7CiG8QEIL3b0ZcD8MrwNWTVWtbY4bx98K3fKURVQP9bfFBHwDH64V4uMDuW390oiE02zOy2W5kWTS4NOERcPqFwLfuajfZXSKOoR2mUV/a4y8KUgX4j+1MXjVorFObY+PMcPKKX5CntsJkhK2O9ocyuXv/PkFrFUGH6fk/ZSv5OAaMU0qX7Q3/D7MGUzm4JqPXTIUi7qMl0Pljquo5iPQ6T6jM1+nNqUimDSFHlqZImHvhS5Y/Lb303HOM6QNPVGEoTNFZCFy3M1MDTh51BMQ0Mv/Q37mCrrDK3uOwNqx1DPuGEHznH7ocbLCMBcnjeyz/5iwHiXxEasHnbAvuijifEtoLli7h8vkCYxbsCUj5r1z07ZuC0Uwk7C1EJO+2fta1jQprG4uaaNhzTUQChRrPTDLoo13ZwEcqmDKgoFf9uQmPJQQk0syQ4N/LOQSt+q0cpgrva+CHiSJ0DAQJFNwnnXYUi7spZ//K5baIKdtrlgP+4Nvxl6luJ2RSl8oxFBJEceAsWr0/Wny32DFqmns1H/xJAJ6N0Kr5FnI1oOy0RpCdZQPoV3uBekKe6PeWL86wYMI9GwmbW/IsG7A30VT1HuHlIGJ1hANMCqqU2YuXO9Y5mGnCcQGrouXqY6cSTsIZ/whmy9iLsDIhuHB/Z00PxfA2iS8HipJde8N9rAtKHByJjGAwzZkj2CfIapqZY/JSi08i0tgz58qrcKWW3yeMaf/7NPQZ6cQn4hzrFZheATntyZer2TVbJYlLTnPAcaxVUzaak3dLOYyjgWrhn6zvXFqqvmC0p5d7F24kWDifeNNWP3inTaR8iEVKtUVZ98EWLMm0nAP8isjNx8eviu2i2NS1xJIKgSKf+Qr5C3/2dsCjvr3VYosM3v+YkCRqp/vTPqCDL7385w3wU/lai5/DfpxwZGRtxAXRwIgMHRGj1CrDcbgxpr+Vgk0EdHzOG3nLQzgbf/rvZ7cFy3hp2oHMUEO4fjWz4qja6diLe6jqB6dv7XalvwxPSr/lrZmquLaAv84ABcNcFFp+TQxICct9WfexphSYBJQEhY2ZAi2NbedGbHeiZcdiYM7nsm3PpH4CwRY0cN5EUkPN7tDHQzZ97vxk81oxgsNyxV4sFgoIDySOAHrqOtJhUAfKmNPK1tYrVUfVu9toR3F8PziwpbzJSSeknu244HgAdzJFw2+MPn5OBJ++MfgtP8uv6lkQ4bb04nmSG2VbntET1IQekvy90JdzacVSK1cDMGEwk+c06OU+T1OiEgz+Ghoj/L4vfGPWwbv1jxfL4FVLb5BmiSpHjqsmMlZ59awns1bny7/YymuIHX8yfMTVngdWq5kTggYUHGsLWD81e5q0v7+8yqpgT0krfmJBia3HH8jIxeMQCPqhe3MuKg9NJ5aD6jjrY4D+kkmwTCCdzUqgxMPg4YWJleWkquht7gZ5x55QRDqxZRf12zNUR4U+sV5jtb5Wc/8/8i5bhzQLu8l+q+BSIrEKkDLvSvtN4YWQFcBvR6Otgl5CuAx7CH5OQ3JeoUHpabcGR97RD9LVuAgEGq6TU8b50SrQ72mKotNHsb4aS2z+7k7bD06t1RYwAA5wLFPGqWwvf3HF0lD8HwLO/OISH7E+4foD9o7NHzbiYcTHIeEduTz9DkNSs4GztaW1zX8ganyr+Hz6VDi6A73T6br5ObtHq7eZHmFLK/4JIVetsZ4jtDmA/Gffsr7sWXpt180g1bNDJ+0yO1XL/42A0cQ0NA/A5jf2YTCXKAQmO9wzFqqRDt+4YaKpJH9FXahVQsdzam31lAK7w4XLyKGDixbodRdJaj9aEuxURL4q/4ilCRQcc/F47zFW92FcO/CGpyVwbQ5OHFezHVpZ+oCwrqRvaaDL2tFGor9ty2bPNV9XJw/GFf7wfnC2cKnArLtYJZaZMTkhDa/ijUOpR8QW2hFFMFa5Yq0gcD1/vsZdXffZmzhAy/Ij/I38+cs6VO6cvbBaInJd0jE7Hk1rBjpveQl7YLV8eCjFgpagdXtC16NY27Om+pcLTIgGbuvDGtxjmZ6+dMLWze9Rb51r+ECBgrsgYvI4Ml8a+AJDS3OfYMmG4lgruadIQUOYULI+aFS7wjdrzYmEwPkTjaQZMCl5tksHeJohalDbJfDhaPqubU7qTZz5RkKNdpk/8YaTp7Li2JXZzrVMTQsb3X/jUL0qpbsRD0dkObgDB+x+a8AAtI6Hxwm5cuFOBQcSVmItwCOd5B1QQT4AMsDgd1PsyZba2/OG7HqFn/P/sH69LoEOMeUtfPngIoX9CdjV3wFqzATHInSOIGTU728XEZ5HJ7zzjTJAd6SnmLxktVtk1vrmCIkcQHlQYypPZS9imLeAxfYJysaWGBBS1eL0KyDL5S7gYSvJ0irISUcyS+34SSxPM4v8l1+Bf7Jml/vsWhzl9gAueJtylGolFRiSl1SZfwGNUQrhDSffdSkzVAPR+I1eUZ6GQ4zATEb7EVkJQMx7MY9+BA2jMbeNEfnmR1AyxonMzHbvuO44sdbOUbMlIj7Lv2bH2Ktg3Qu1zUH26h/5Ytg3I8bvYhBsnvcB8O+1fvZf6SsqBXxfgTndhT7yHB05qDjZKOyz1oN+T2t04UAtVseNfB1Es2nXfAb9br2tJlm1u/pjdD0W0TrY1XThM3sPd+PiuQBhJ5dxMa3vkXo/2nGckfS/LxNjZ0FwhJmerhdbicCK20L3scf9GpJBalskNXDcFkUxMqUcd0RAeW1z7h+46qgFJNCpSGRapoEoGKy3NNcXJGM8rZyE0ewPQ8RBVKE0y8sa4IQ8U5m5Cx9C7AsGw4yHNgnhpISOPmE37EngxUcF3AnKGw+AoNyv7XJUOgizJZsg//hX7lrc+B5qJnRZ1wlC2I4Jv/S+OdoUBKExvt5Fc6JGhp36aqtSf2h5dlPncutWXwcYzcIZL5fIT32sHliQ3KO34/CpdZ+0BAcZvS5bAWYQhR+8wHVT8NTMTyrLm/c1/eMzXaAmJ8m1O7cFOeqn5rN6FsimdpZF1DIkjqUWFSRWfbRn8NQaxumvGtttf2sLLfel56CGgyH2wz823aO+GWLxDjJiBCCL4OiCOml38wmkJ+aZsjeQcjyFl2xQWHGYQ43UDQdAP9K+886R23nRoc6cKjFhRP4j0IEoJhGhJWv0I79x3pUdHOSvq4UL9hFQFQysZbAHZr4qRy5oGoZ6lcyz5IDQjOVBv6uOFVg41QJOR10qclrnK669hIFtm5TPaL75DzwYbjJzRTswQ0onw3mZUlXRWNz7iSg4F4NLkKC0sFGIep1NVJla+4qtLutHcKwcyfYPpDLO2vyLLg9XHm6gYsQXFbMOb+2Ugu8t0q0rI8Y5VOvaV8ASSgZRc0eE1sC/kWaWhb29PuDcmrBtMcVnKR0/dy4yFbFGR6NYqtFcNykvOtrrBuHFtun4YLNb/j/bbLSeHGsu8f44dvmkvrfOIta28nHxAwS1R8QWMVqR7pMFZfWY0BmOJOEm+44EU86DmkW7FjXFuvz3rg73jWqE/ukdgmSS5RAVIs0mg3pYPop8S0rVUvUb4yVmB4yjvUT1J9xXdvpByVU2378cjKuD0n7kSK6KUZ5VCEeMDkEhtMNKhhiLfrGAxy7imjWpWK5U7h4ye8bY/AGGFeUaj104jh0Jd2Aw8LqyFw8ztdwh4XqauTG/MlAg6bdV+cFlIWXD+GTMbmikKDAMDPTb+cc/QLVF9VJSUYIdITqomadg6WzaJjldwHUQsEKoY+i6bObmnOfFHwZaxh2uSfHWCuzxz6dKok8IenCJ6urwDm7SJD8tVLcTc/k9rVYvWTz6KFgugDmZD4RWQoU+2fWSgGUVNq+GUHdD2xQd8JcrGpCDPL622HFmg281eBPomy7UvD7dWUjnt7Svkw7t8ahVHHMUIdiIKjWi2GbflJ/T2LtIHusFjxWb6Pob95c+nZthr/IlqAM9uBYVaIp93Nzl8xabFf+0WTX15MQgG2k2geJylgtX4LjcI9a4JKTO1WOVut97E45fo5RkVhqF8sRgC+WEjss7AvZ7V67IafKAWx8GiCzZOtWOlV8xW42hsBr4vNVTEBpB/t8wMEiMhVxA3Ss+ZGqv4WupNFVeO1hUF+toqZfSZx7pUC2T3t+bLRgrvRk0FOAKyTAL8xP5RjZ7YV+s8vPgyWUn/YY6SNj9vqP8tfPuasFFWNhTu23/5eKmmci1uxst2SpCfSAooL/+bciDGY0Br7a/spArUDy8ZG2Wsg7R1Jz9YOumNqGRPLdnjm9H9cCTtCmrsvsN05SNvZschnNSElB5k/o3DOfA1w0JFffJJhjIFnNvbk51uCTF4haA4EnHkr/7g2jXXB1jdBFRlleAcUX5RaXzHX5X53XqTlG6lgnvhtgepl0jro14Nd4GVEgxeA15eQgjFpYcxsttvJ/f0yiJhLf24sNqWa2PywQ61+bLGbz3MY2a9I2lrTfbsWY3ED+20krhhZLTXIwWWK2UAba6GtqTMx2dwLk0Dv0RMZkK6OukR3kIi5DcGvusCMTo7z77CPhldLlNVg895MLIzqbFDUCtVA9n0uj/sJEemDhA2WRY64GE1C+HYD1+8t6Qt54w6zyBQk/yNpme0rzvLoHMAytOgcsKdvUP19BUF1xTe7dFfZb0lO6MCTFaeaC6i3XQrkC6w1iScF2Q+k81OgmbiWrHzgDQkbCysQ6qNxYAkhb6FyT95EGC/tcvqyAhGmQpA7W5yKzWjJDX82DKkon2zgU4Hl7frKJxtX7fZ1kylzKMsVimfUZJX+f8QkiMwTuCawbcz0pTc90dV4CtzhH9WSghclF2G3yMx7P4Um4dKxux3M4yo41DtJxA/yhfxifSV4fvu2vfOEohcVjzU8186OVQqxzghXI4r+JP9feC/2DboRxdZJ27wALRMs5WUPcW+HWueeH28OeQK5ToS+kzOpA6SLY090SLZjaJrjwxcLo264cpIoXjd/TYFPKjmVyfs5OwS0kqcDNDE4OwMl0aV8p4oTuxWbu62UTQvaVVaAJtltVtvcdYiRcIK3b4lfFoIXXZsqXBP3gDYIdS39SplWieeGBP/AgsYOmUuIJpq48PnU80aIHEdN2QB46L23uASnUvTFT66GL/Qh4P6nsnlnP1E/ShGEt4KhlF+96sAs+yhF1A9JXXFbEPAZQUQekEHa+frCU3USQb7f1V3zJNFuoqEWrxC8+8oGpOMRtosgjKITz7yPFF/jljNUJQJ/sYZtD6ZUEBvqqO7D1Ipof6+lCyrILOo06bN0XxEG2qV+epR7mI3REU1OEj+fBBJwmnJrzATheGJ62jKL4viSOAYgoZv0DCKtyZrOb2ukbcn9SHTGWBBwg8+kKcbqD0OXr5K704m+r4mjZIbobBh+g9J/UqlAWf+H9xoQxWK2a6G6NfffQQEkH5bk02pKs3r/GOCI68nrXn7meMr0IKcUe83u5QxGqR2wNh64c08kV0M7TLzS8Jt+KhDJj40qhPbwVu6fdtXv8+2oSoRK8sY7LBEd5XSxGhdkurjFutE3/ckU9Qsy615AKCeQAVRRVBZBJCtTPmKfqFBjpxnuMfOEI+mC+PLMnhOiLkh3vwaRhxutz8vKZzOQ/EkWli4gbqBcK3LrOL9PFLJl8ty0pjuP0XtJYO0gA+p+pvqmgRxeJ1jVe8gLdoI9H1iQ8LUI4+nGP4tJrWlpdvq9G5Dx85rzDWCopRj483yW7jTTE3S8b3hpdQYYb4A1D8ez+aUqRKezacQVvI0J92DNQWfBfFJZWEVQXtDOfEAdQftxC9RRXV2/jKoiuA525YW3SEvtF5PUgR1Nj+HUO4Fv3PwTVzzXCD9b1sSnG/wrs7KR5Z0l9pz3NYB4ntPP4Op9USsPr5iZpw8Y8qweU0c3WZQl6Ku1wnBfKNpkxa7hXIScM70GYBCFGWYUK9QFtZ1CzMobd/uqPtFRp6q1NzUwdw82BM/+YZfVmqzb2sF9Ji815LsbvV2XcHF209p1IzNPmypgPkWe0M4zTRctHnWvcVsD2K7S41MbuW3XKmoVTsObIsv7KeJTIm/vyD5WupwbzSblJBii7zk6hG3jO1lwZaIKDHTLfjeYUOBNdwYXqy9nreOdumA2kiq8A51Jfe2wKd7S9PIguyXS37iUHicdZULpxvOkQk0y287QyRJosugWtuju31h8WMLC2Qdp1SsYaBjqh9ahLhZuZ/HUV85AIz/RBjvE2by1/1pqntMH55DYGIO/XJwP2wMdZoWtDMx2goVKfpF4nZ1cfKwCkDkE0p7mQn+Fg5rmrWrXysVBzayn1sNY6bX8DzO3klLjqgzRqGd9Jnz1Y98y37LGcdYVNeR6fXM/l3QLrYosqUYNCua1J57qsxpD6pm2SOubE6QEoOH8HY54ZxK/hCkHWmoU7OFxneAwM1NCb4ad8FO0dcP5g0nqewQ4ZWhFsEQkHZg5fgzxYzDUACu4NW1moX6MMS7xClktSIUQmtt396wsJXjhSeLG+kj3oMW50/XB8l9gVZPkMhrloUXsn0rmxn/vdb1mhp5LkfANTZY9czB5XvHmWSW3kO5nvVGwPWmgxlw7V3Z2ckahw4AcDw1m0TJQzsk/C8hhgHsaMS/8W1KuIn7z4M4sk7zNqAMtMishnaP+dI/fOf10NFq28sxG39YhNcXsof+LB7QF2v1PdGk9k9X4fPxjlrWv/9RUE0Mb3nD+b/nKt5RAD4Ap/FeNIbIEkEAzAAADWU73pPwqj0zteBaSzr8PnSfts2kzrYgmp4YIWb0Cfq3rWzg63HlF0zJlmRjyWyKBCdrjeAdzl0p/ERoO2Ao7ed8vSeTXBjBymiazQOjtH/ONB5+5NA5MS1HKh4ys1LaaA72W6RAj24LMXIrEKYDs5FOlgBFPmlEJkPA8IJ2NaRwPUCVo8ZLBOZpix9FHirYB4+I+UOgB3oQMrHg4X6Jtq9iyaY+3SN/BFTwwbwvJbaG0IJK60JkwaWa4CSB9nFe2qeVgU4AZcxULiuSCKgvBPgAAAAAAA=",
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
                <div style={{ height: 44, display: "flex", alignItems: "center", marginBottom: 18 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={role.logo}
                    alt={role.alt}
                    className={role.logoClass}
                    style={{ width: "auto", maxWidth: 180, objectFit: "contain", objectPosition: "left center" }}
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
