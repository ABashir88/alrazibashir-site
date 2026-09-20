"use client";
import Link from "next/link";
import { siteConfig } from "../config";

const hrefFromKey = (key: keyof typeof siteConfig.social) => siteConfig.social[key];

// Deal Command Center gets featured treatment, others are secondary
const featuredProject = "Deal Command Center";

export function Projects() {
  const { sections, projects } = siteConfig;
  const featured = projects.find(p => p.name === featuredProject);
  const rest = projects.filter(p => p.name !== featuredProject);

  return (
    <section id="projects" aria-labelledby="projects-heading" style={{ borderBottom: "1px solid var(--color-border)", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem", maxWidth: "580px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <h2 id="projects-heading" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              GTM Systems
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 0.75rem", lineHeight: 1.25 }}>
            How I think about enterprise sales systems.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
            Artifacts and frameworks built from running $65K–$550K ACV enterprise cycles across AI infrastructure and communications platforms.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* Featured: Deal Command Center */}
          {featured && (
            <article className="card-hover" style={{
              border: "1px solid var(--color-accent-border)",
              borderLeft: "3px solid var(--color-accent)",
              borderRadius: "16px",
              backgroundColor: "var(--color-surface-card)",
              padding: "2rem",
              display: "flex", flexDirection: "column", gap: "1rem",
              background: "linear-gradient(135deg, rgba(232, 160, 32, 0.06), var(--color-surface-card))",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{
                  fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#000",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "999px", padding: "0.15rem 0.6rem",
                  fontFamily: "var(--font-body)"
                }}>Featured</span>
              </div>
              <div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 0.5rem", fontFamily: "var(--font-body)" }}>
                  {featured.name}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>
                  {featured.description}
                </p>
              </div>
              <Link
                href={hrefFromKey(featured.hrefKey)}
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  alignSelf: "flex-start",
                  backgroundColor: "var(--color-accent)", color: "#000",
                  fontWeight: 700, fontSize: "0.82rem", padding: "0.55rem 1.25rem",
                  borderRadius: "999px", fontFamily: "var(--font-body)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(232,160,32,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                {featured.ctaLabel ?? sections.projects.visitLabel}
              </Link>
            </article>
          )}

          {/* Secondary projects */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {rest.map((project, i) => (
              <article key={project.name} className="card-hover" style={{
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                gap: "1rem", border: "1px solid var(--color-border)", borderRadius: "16px",
                backgroundColor: "var(--color-surface)", padding: "1.5rem",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)" }}>{project.name}</h3>
                  <p style={{ fontSize: "0.83rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>{project.description}</p>
                </div>
                <Link
                  href={hrefFromKey(project.hrefKey)}
                  target="_blank"
                  style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)", transition: "opacity 0.2s", display: "inline-flex", alignItems: "center" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {project.ctaLabel ?? sections.projects.visitLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
