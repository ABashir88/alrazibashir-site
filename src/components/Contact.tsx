"use client";

import { siteConfig } from "../config";

export default function Contact() {
  const { email } = siteConfig;

  return (
    <section id="contact" style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, marginBottom: "16px" }}>
          CONTACT
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          fontWeight: 400, color: "var(--color-text)",
          margin: "0 0 16px", lineHeight: 1.2,
        }}>
          Building an enterprise AI or communications sales team?
        </h2>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
          Best fit for enterprise AE and early GTM roles at AI voice, CPaaS/CCaaS, and contact center companies. Share a note on what you're building and where you need help.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "28px" }}>
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              backgroundColor: "var(--color-accent)", color: "#fff",
              fontWeight: 700, fontSize: "0.9rem", padding: "0.7rem 1.75rem",
              borderRadius: "999px", fontFamily: "var(--font-body)",
              transition: "all 0.2s ease", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(10,102,194,0.3)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/alrazibashir"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              border: "1px solid var(--color-border-strong)", color: "var(--color-text)",
              fontWeight: 600, fontSize: "0.9rem", padding: "0.7rem 1.75rem",
              borderRadius: "999px", fontFamily: "var(--font-body)",
              transition: "all 0.2s ease", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
            }}
          >
            LinkedIn
          </a>
        </div>

        <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
          Open to enterprise AE / GTM roles in AI infrastructure, conversational AI, and CPaaS/CCaaS.
        </p>

        <div style={{ marginTop: "60px", paddingTop: "28px", borderTop: "1px solid var(--color-border)" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Alrazi Bashir · Built with Next.js
          </p>
        </div>
      </div>
    </section>
  );
}
