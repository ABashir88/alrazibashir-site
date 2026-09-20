"use client";
import Link from "next/link";
import { siteConfig } from "../config";

export function Hero() {
  const { hero, email } = siteConfig;

  return (
    <section id="top" aria-labelledby="hero-heading" className="hero-gradient" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "var(--color-border)" }} />

      <div style={{
        maxWidth: "1024px", margin: "0 auto",
        padding: "clamp(2rem, 5vw, 4rem) 1.5rem clamp(2rem, 4vw, 3.5rem)",
      }}>

        {/* Mobile layout: portrait centered above text */}
        <div className="mobile-hero">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
            <div style={{
              width: "100px", height: "100px",
              borderRadius: "50%", overflow: "hidden",
              border: "2px solid var(--color-border-strong)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              backgroundImage: "url('/alrazi-headshot.jpg')",
              backgroundSize: "170%",
              backgroundPosition: "center 18%",
              backgroundRepeat: "no-repeat",
            }} role="img" aria-label="Alrazi Bashir" />
          </div>
          <HeroContent hero={hero} email={email} />
        </div>

        {/* Desktop layout: portrait LEFT with name below, text RIGHT */}
        <div className="desktop-hero" style={{ display: "none", alignItems: "flex-start", gap: "3rem" }}>
          {/* Portrait + name stacked */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", paddingTop: "0.5rem" }}>
            <div style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--color-border-strong)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              backgroundImage: "url('/alrazi-headshot.jpg')",
              backgroundSize: "170%",
              backgroundPosition: "center 18%",
              backgroundRepeat: "no-repeat",
            }} role="img" aria-label="Alrazi Bashir" />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-body)" }}>Alrazi Bashir</div>
              <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", marginTop: "2px" }}>Enterprise Account Executive</div>
            </div>
          </div>
          {/* Text content */}
          <div style={{ flex: 1 }}>
            <HeroContent hero={hero} email={email} />
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "var(--color-border)" }} />

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

function HeroContent({ hero, email }: { hero: typeof siteConfig.hero; email: string }) {
  return (
    <div>
      {/* Social proof pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        backgroundColor: "var(--color-accent-dim)", border: "1px solid var(--color-accent-border)",
        borderRadius: "999px", padding: "0.35rem 0.9rem", marginBottom: "1rem"
      }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-accent)", flexShrink: 0 }} />
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}>
          $3M+ in enterprise AI deals · CPaaS · CCaaS · AI Voice
        </span>
      </div>

      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
        <div style={{ width: "24px", height: "2px", backgroundColor: "var(--color-accent)", flexShrink: 0 }} />
        <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
          {hero.eyebrow}
        </p>
      </div>

      <h1 id="hero-heading" style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
        fontWeight: 400, lineHeight: 1.18, color: "var(--color-text)",
        margin: "0 0 1rem", letterSpacing: "-0.01em"
      }}>
        {hero.headline.split("turning").map((part, i) => i === 0 ? (
          <span key={i}>{part}<span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>turning</span></span>
        ) : <span key={i}>{part}</span>)}
      </h1>

      <p style={{
        fontSize: "clamp(0.85rem, 1.8vw, 0.98rem)", lineHeight: 1.65,
        color: "var(--color-text-secondary)", margin: "0 0 1.25rem",
        fontFamily: "var(--font-body)", maxWidth: "520px"
      }}>
        Engineering-led enterprise sales across AI voice, CPaaS, and CCaaS — $65K to $550K ACV across 6–10 month cycles with Fortune 1000 and mid-market buyers.
      </p>

      {/* Stats */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.5rem" }}>
        {[
          { value: "$1.2M", label: "Annual Quota" },
          { value: "$550K", label: "Max ACV" },
          { value: "6–10mo", label: "Avg Cycle" },
        ].map((stat) => (
          <div key={stat.label} style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            backgroundColor: "var(--color-surface-card)", border: "1px solid var(--color-border)",
            borderRadius: "10px", padding: "0.6rem 1.1rem", minWidth: "85px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}>
            <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-body)", lineHeight: 1 }}>{stat.value}</span>
            <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-body)", marginTop: "0.25rem" }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center", marginBottom: "1.1rem" }}>
        <Link href={hero.primaryCta.href}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            backgroundColor: "var(--color-accent)", color: "#fff",
            fontWeight: 700, fontSize: "0.85rem", padding: "0.6rem 1.4rem",
            borderRadius: "999px", fontFamily: "var(--font-body)",
            transition: "all 0.2s ease", whiteSpace: "nowrap"
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(10,102,194,0.3)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
        >{hero.primaryCta.label}</Link>

        <Link href={hero.secondaryCta.href} target="_blank"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            border: "1px solid var(--color-border-strong)", color: "var(--color-text)",
            fontWeight: 600, fontSize: "0.85rem", padding: "0.6rem 1.4rem",
            borderRadius: "999px", fontFamily: "var(--font-body)",
            transition: "all 0.2s ease", whiteSpace: "nowrap"
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
        >{hero.secondaryCta.label}</Link>

        {hero.tertiaryCta && (
          <Link href={hero.tertiaryCta.href} target="_blank"
            style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontWeight: 500, transition: "color 0.2s ease", whiteSpace: "nowrap" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >{hero.tertiaryCta.label} →</Link>
        )}
      </div>

      <p style={{ fontSize: "0.73rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>
        Or reach me at{" "}
        <a href={`mailto:${email}`}
          style={{ color: "var(--color-text-secondary)", fontWeight: 500, transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
        >{email}</a>
      </p>
    </div>
  );
}
