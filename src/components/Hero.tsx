"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config";

export function Hero() {
  const { hero, email } = siteConfig;

  return (
    <section id="top" aria-labelledby="hero-heading" className="hero-gradient" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)" }} />

      <div style={{
        maxWidth: "1024px", margin: "0 auto",
        padding: "clamp(3rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 5rem)",
      }}>

        {/* Mobile layout: portrait centered on top */}
        <div className="mobile-hero">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <div style={{
              position: "relative", width: "140px", height: "140px",
              borderRadius: "50%", overflow: "hidden",
              border: "2px solid var(--color-accent-border)",
              boxShadow: "0 0 40px rgba(232,160,32,0.12)"
            }}>
              <Image src="/alrazi-headshot.jpg" alt="Alrazi Bashir" fill sizes="140px" priority className="object-cover" />
            </div>
          </div>
          <MobileContent hero={hero} email={email} />
        </div>

        {/* Desktop layout: text left, portrait right */}
        <div className="desktop-hero" style={{ display: "none", alignItems: "center", justifyContent: "space-between", gap: "4rem" }}>
          <div style={{ flex: 1, maxWidth: "620px" }}>
            <DesktopContent hero={hero} email={email} />
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{
              position: "relative",
              width: "clamp(200px, 22vw, 260px)",
              height: "clamp(200px, 22vw, 260px)",
              borderRadius: "50%", overflow: "hidden",
              border: "2px solid var(--color-accent-border)",
              boxShadow: "0 0 60px rgba(232,160,32,0.14)"
            }}>
              <Image src="/alrazi-headshot.jpg" alt="Alrazi Bashir" fill sizes="260px" priority className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to bottom, transparent, var(--color-bg))", pointerEvents: "none" }} />

      <style>{`
        .mobile-hero { display: block; }
        .desktop-hero { display: none !important; }
        @media (min-width: 768px) {
          .mobile-hero { display: none; }
          .desktop-hero { display: flex !important; }
        }
      `}</style>
    </section>
  );
}

function EyebrowAndBadge({ hero }: { hero: typeof siteConfig.hero }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <div style={{ width: "24px", height: "2px", backgroundColor: "var(--color-accent)", flexShrink: 0 }} />
        <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
          {hero.eyebrow}
        </p>
      </div>

      <h1 id="hero-heading" style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 400, lineHeight: 1.15, color: "var(--color-text)",
        margin: "0 0 1rem", letterSpacing: "-0.01em"
      }}>
        {hero.headline.split("turning").map((part, i) => i === 0 ? (
          <span key={i}>{part}<span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>turning</span></span>
        ) : <span key={i}>{part}</span>)}
      </h1>

      {/* Social proof pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        backgroundColor: "var(--color-accent-dim)", border: "1px solid var(--color-accent-border)",
        borderRadius: "999px", padding: "0.4rem 1rem", marginBottom: "1.5rem"
      }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-accent)", flexShrink: 0 }} />
        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}>
          $3M+ in enterprise AI deals · CPaaS · CCaaS · AI Voice Infrastructure
        </span>
      </div>
    </>
  );
}

function StatsAndCTAs({ hero, email }: { hero: typeof siteConfig.hero; email: string }) {
  return (
    <>
      <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 1.75rem", fontFamily: "var(--font-body)" }}>
        {hero.subheadline}
      </p>

      {/* Stat blocks */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
        {[
          { value: "$1.2M", label: "Annual Quota" },
          { value: "$550K", label: "Max ACV" },
          { value: "5–9mo", label: "Avg Cycle" },
        ].map((stat) => (
          <div key={stat.label} style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            backgroundColor: "var(--color-surface-card)", border: "1px solid var(--color-border)",
            borderRadius: "12px", padding: "0.75rem 1.25rem", minWidth: "90px"
          }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-body)", lineHeight: 1 }}>{stat.value}</span>
            <span style={{ fontSize: "0.62rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-body)", marginTop: "0.3rem" }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
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
        >{hero.primaryCta.label}</Link>

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
        >{hero.secondaryCta.label}</Link>

        {hero.tertiaryCta && (
          <Link href={hero.tertiaryCta.href} target="_blank"
            style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontWeight: 500, transition: "color 0.2s ease", whiteSpace: "nowrap" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >{hero.tertiaryCta.label} →</Link>
        )}
      </div>

      <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>
        Or reach me at{" "}
        <a href={`mailto:${email}`}
          style={{ color: "var(--color-text-secondary)", fontWeight: 500, transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
        >{email}</a>
      </p>
    </>
  );
}

function MobileContent({ hero, email }: { hero: typeof siteConfig.hero; email: string }) {
  return (
    <div>
      <EyebrowAndBadge hero={hero} />
      <StatsAndCTAs hero={hero} email={email} />
    </div>
  );
}

function DesktopContent({ hero, email }: { hero: typeof siteConfig.hero; email: string }) {
  return (
    <div>
      <EyebrowAndBadge hero={hero} />
      <StatsAndCTAs hero={hero} email={email} />
    </div>
  );
}
