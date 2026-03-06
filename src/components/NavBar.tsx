"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "../config";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          backgroundColor: scrolled ? "rgba(8, 13, 26, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0.875rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="#top" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
            <span style={{
              width: "32px", height: "32px", borderRadius: "50%",
              backgroundColor: "var(--color-accent)",
              color: "#000", fontSize: "0.65rem", fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-body)", letterSpacing: "0.05em"
            }}>AR</span>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" style={{ display: "none", alignItems: "center", gap: "2rem" }} className="desktop-nav">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-body)", fontWeight: 500, transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              style={{
                fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-body)",
                border: "1px solid var(--color-accent-border)",
                color: "var(--color-accent)", padding: "0.4rem 1rem", borderRadius: "999px",
                transition: "all 0.2s ease", backgroundColor: "var(--color-accent-dim)"
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--color-accent)"; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "var(--color-accent-dim)"; e.currentTarget.style.color = "var(--color-accent)"; }}
            >
              Resume
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "1px solid var(--color-border-strong)",
              color: "var(--color-text)", padding: "0.4rem 0.7rem", borderRadius: "8px",
              cursor: "pointer", fontSize: "1rem"
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 40,
          backgroundColor: "rgba(8, 13, 26, 0.97)",
          backdropFilter: "blur(16px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "2rem",
          animation: "fadeIn 0.2s ease"
        }}
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}
              style={{ fontSize: "1.5rem", fontFamily: "var(--font-display)", color: "var(--color-text)", fontWeight: 400 }}
              onClick={() => setMenuOpen(false)}
            >{item.label}</Link>
          ))}
          <Link href={siteConfig.resumeUrl} target="_blank"
            style={{
              marginTop: "1rem", fontSize: "1rem", fontWeight: 600,
              border: "1px solid var(--color-accent)", color: "var(--color-accent)",
              padding: "0.65rem 2rem", borderRadius: "999px", fontFamily: "var(--font-body)"
            }}
          >Resume</Link>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
