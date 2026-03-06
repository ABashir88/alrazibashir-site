"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config";

export function Hero() {
  const { hero, email } = siteConfig;

  return (
    <section id="top" aria-labelledby="hero-heading" className="hero-gradient" style={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)" }} />

      <div style={{
        maxWidth: "1024px", margin: "0 auto",
        padding: "clamp(3rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 5rem)",
        display: "flex", flexDirection: "column", gap: "2.5rem",
        alignItems: "flex-start"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0", width: "100%" }}>

          {/* Mobile headshot */}
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "2rem" }} className="mobile-headshot">
            <div style={{ position: "relative", width: "90px", height: "90px", borderRadius: "50%", overflow: "hidden", border: "2px solid var(--color-accent-border)" }}>
              <Image src="/alrazi-headshot.jpg" alt="Alrazi Bashir" fill sizes="90px" priority className="object-cover" />
            </div>
          </div>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "24px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              {hero.eyebrow}
            </p>
          </div>

          {/* Main layout: headline + headshot */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "3rem", width: "100%" }}>
            <div style={{ flex: 1 }}>
              {/* Headline */}
              <h1 id="hero-heading"
                style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 400, lineHeight: 1.15, color: "var(--color-text)",
                  margin: "0 0 1.5rem", letterSpacing: "-0.01em", maxWidth: "680px"
                }}
              >
                {hero.headline.split("turning").map((part, i) => i === 0 ? (
                  <span key={i}>{part}<span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>turning</span></span>
                ) : <span key={i}>{part}</span>)}
              </h1>

              {/* Subheadline */}
              <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 2rem", maxWidth: "580px", fontFamily: "var(--font-body)" }}>
                {hero.subheadline}
              </p>

              {/* Metrics */}
              {hero.metrics && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem 2rem", marginBottom: "2.5rem", maxWidth: "580px" }}>
                  {hero.metrics.map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: "0.4rem", alignItems: "baseline" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}>{item.label}:</span>
                      <span style={{ fontSize: "0.82rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <Link href={hero.primaryCta.href}
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    backgroundColor: "var(--color-accent)", color: "#000",
                    fontWeight: 700, fontSize: "0.85rem", padding: "0.65rem 1.5rem",
                    borderRadius: "999px", fontFamily: "var(--font-body)",
                    transition: "all 0.2s ease", whiteSpace: "nowrap"
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(232,160,32,0.35)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} target="_blank"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--color-border-strong)", color: "var(--color-text)",
                    fontWeight: 600, fontSize: "0.85rem", padding: "0.65rem 1.5rem",
                    borderRadius: "999px", fontFamily: "var(--font-body)",
                    transition: "all 0.2s ease", whiteSpace: "nowrap"
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
                >
                  {hero.secondaryCta.label}
                </Link>
                {hero.tertiaryCta && (
                  <Link href={hero.tertiaryCta.href} target="_blank"
                    style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontWeight: 500, transition: "color 0.2s ease", whiteSpace: "nowrap" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    {hero.tertiaryCta.label} →
                  </Link>
                )}
              </div>

              <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>
                Or reach me at{" "}
                <a href={`mailto:${email}`} style={{ color: "var(--color-text-secondary)", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                >{email}</a>
              </p>
            </div>

            {/* Desktop headshot */}
            <div className="desktop-headshot" style={{ flexShrink: 0 }}>
              <div style={{
                position: "relative", width: "clamp(180px, 20vw, 240px)", height: "clamp(180px, 20vw, 240px)",
                borderRadius: "50%", overflow: "hidden",
                border: "2px solid var(--color-accent-border)",
                boxShadow: "0 0 60px rgba(232,160,32,0.12)"
              }}>
                <Image src="/alrazi-headshot.jpg" alt="Alrazi Bashir" fill sizes="240px" priority className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to bottom, transparent, var(--color-bg))", pointerEvents: "none" }} />

      <style>{`
        .mobile-headshot { display: flex; }
        .desktop-headshot { display: none; }
        @media (min-width: 768px) {
          .mobile-headshot { display: none; }
          .desktop-headshot { display: flex; }
        }
      `}</style>
    </section>
  );
}
