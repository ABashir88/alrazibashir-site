"use client";
import Link from "next/link";
import { siteConfig } from "../config";

export function Contact() {
  const { email, sections } = siteConfig;
  return (
    <section id="contact" aria-labelledby="contact-heading" style={{
      position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(232,160,32,0.07) 0%, transparent 70%), var(--color-surface)",
      padding: "clamp(4rem, 8vw, 7rem) 1.5rem",
      textAlign: "center"
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "120px", height: "2px", background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)" }} />

      <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
          <h2 id="contact-heading" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", margin: 0, fontFamily: "var(--font-body)" }}>
            {sections.contact.eyebrow}
          </h2>
          <div style={{ width: "20px", height: "2px", backgroundColor: "var(--color-accent)" }} />
        </div>

        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, color: "var(--color-text)", margin: 0, lineHeight: 1.2 }}>
          {sections.contact.title}
        </p>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: 0, fontFamily: "var(--font-body)", maxWidth: "520px" }}>
          {sections.contact.body}
        </p>

        <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>
          Currently focused on AI infrastructure, conversational platforms, and enterprise GTM.
        </p>

        {/* ── FIX 6: Stronger, intentional CTA language ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginTop: "0.5rem" }}>
          <Link
            href={`mailto:${email}`}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "var(--color-accent)", color: "#000",
              fontWeight: 700, fontSize: "0.95rem", padding: "0.9rem 2.25rem",
              borderRadius: "999px", fontFamily: "var(--font-body)",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(232,160,32,0.35)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            Let's talk about your team →
          </Link>
          <Link
            href="https://www.linkedin.com/in/alrazibashir"
            target="_blank"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              border: "1px solid var(--color-border-strong)", color: "var(--color-text)",
              fontWeight: 600, fontSize: "0.9rem", padding: "0.9rem 1.75rem",
              borderRadius: "999px", fontFamily: "var(--font-body)",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--color-text)"; }}
          >
            Connect on LinkedIn →
          </Link>
        </div>

        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-body)" }}>
          {sections.contact.responseNote}
        </p>
      </div>
    </section>
  );
}
