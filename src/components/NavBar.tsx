"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "../config";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = siteConfig.nav
      .filter((n) => n.href.startsWith("#"))
      .map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    width: "100%",
    backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "#ffffff",
    borderBottom: `1px solid ${scrolled ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.06)"}`,
    boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
    backdropFilter: scrolled ? "blur(8px)" : "none",
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "0 1.5rem",
    height: "58px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  };

  return (
    <>
      <nav style={navStyle} aria-label="Main navigation">
        <div style={innerStyle}>
          {/* Logo */}
          <Link href="#top" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              AB
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
            {siteConfig.nav.map((item) => {
              const isActive = item.href.startsWith("#") && activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: "0.825rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--color-accent)" : "var(--color-text-secondary)",
                    padding: "0.35rem 0.65rem",
                    borderRadius: "6px",
                    transition: "color 0.15s ease, background 0.15s ease",
                    fontFamily: "var(--font-body)",
                    position: "relative",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                      (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
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
                borderRadius: "999px",
                fontFamily: "var(--font-body)",
                transition: "background 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-accent-dim)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent-border)";
              }}
            >
              Resume
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.4rem", color: "var(--color-text)", display: "none",
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
            position: "fixed", inset: 0, zIndex: 99,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(4px)",
            display: "flex", flexDirection: "column",
            padding: "80px 2rem 2rem",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "1.1rem", fontWeight: 500,
                  color: "var(--color-text)",
                  padding: "0.85rem 1rem",
                  borderRadius: "8px",
                  fontFamily: "var(--font-body)",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "1rem",
                fontSize: "0.95rem", fontWeight: 600,
                color: "#fff", background: "var(--color-accent)",
                padding: "0.75rem 1rem", borderRadius: "8px",
                textAlign: "center", fontFamily: "var(--font-body)",
              }}
            >
              Download Resume
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
