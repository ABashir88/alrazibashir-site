"use client";
import Link from "next/link";
import { siteConfig } from "../config";

const hrefFromKey = (key: keyof typeof siteConfig.social) => siteConfig.social[key];

const cardAccents = [
  "rgba(232, 160, 32, 0.06)",
  "rgba(59, 130, 246, 0.05)",
  "rgba(16, 185, 129, 0.05)"
];

export function Projects() {
  const { sections, projects } = siteConfig;
  return (
    <section id="projects" aria-labelledby="projects-heading" style={{ borderBottom: "1px solid var(--color-border)", padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem", maxWidth: "580px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
            <h2 id="projects-heading" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
              GTM Lab
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 400, color: "var(--color-text)", margin: 0, lineHeight: 1.25 }}>
            {sections.projects.title}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {projects.map((project, i) => (
            <article key={project.name} className="card-hover" style={{
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              gap: "1.25rem", border: "1px solid var(--color-border)", borderRadius: "16px",
              backgroundColor: "var(--color-surface-card)", padding: "1.5rem",
              background: `linear-gradient(135deg, ${cardAccents[i] || "transparent"}, var(--color-surface-card))`,
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: 0, fontFamily: "var(--font-body)" }}>{project.name}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)" }}>{project.description}</p>
              </div>
              <Link
                href={hrefFromKey(project.hrefKey)}
                target="_blank"
                style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-body)", transition: "opacity 0.2s", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {project.ctaLabel ?? sections.projects.visitLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
