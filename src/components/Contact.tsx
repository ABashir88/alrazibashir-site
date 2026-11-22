import Link from "next/link";
import { siteConfig } from "../config";

const mail = (subject: string) =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;

const PATHS = [
  {
    label: "Research collaborations",
    body: "Practitioner feedback on the research, corrections, or a perspective to compare notes on.",
    cta: "Share feedback",
    href: mail("Research collaboration"),
    internal: false,
  },
  {
    label: "Advisory inquiries",
    body: "Evaluating Voice AI or CX technology, scoping a pilot, or diagnosing a customer-operations problem.",
    cta: "Start a conversation",
    href: mail("Advisory inquiry"),
    internal: false,
  },
  {
    label: "Hiring",
    body: "Recruiters and hiring managers: career history, deal record, and resume are on one page.",
    cta: "View hiring overview",
    href: "/hiring",
    internal: true,
  },
];

export default function Contact() {
  const { email } = siteConfig;

  return (
    <section id="contact" style={{ padding: "80px 0 40px", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, marginBottom: "16px" }}>
            CONTACT
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: "0 0 14px", lineHeight: 1.2 }}>
            Let&apos;s talk
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 auto", maxWidth: "520px" }}>
            Pick the path that fits, or write to me directly at{" "}
            <a href={`mailto:${email}`} className="ct-inline">{email}</a>.
          </p>
        </div>

        <div className="ct-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {PATHS.map((p) => {
            const inner = (
              <>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px" }}>{p.label}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: "0 0 18px" }}>{p.body}</p>
                <span style={{ marginTop: "auto", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-accent)" }}>{p.cta} →</span>
              </>
            );
            return p.internal ? (
              <Link key={p.label} href={p.href} className="ct-card">{inner}</Link>
            ) : (
              <a key={p.label} href={p.href} className="ct-card">{inner}</a>
            );
          })}
        </div>

        <p style={{ textAlign: "center", fontSize: "0.85rem", margin: "28px 0 0" }}>
          <a href={siteConfig.hero.tertiaryCta.href} target="_blank" rel="noopener noreferrer" className="ct-inline">Connect on LinkedIn →</a>
        </p>

        <div style={{ marginTop: "60px", paddingTop: "28px", borderTop: "1px solid var(--color-border)", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)", margin: 0 }}>
            © {new Date().getFullYear()} Alrazi Bashir · Built with Next.js
          </p>
        </div>
      </div>

      <style>{`
        .ct-card {
          display: flex; flex-direction: column;
          background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: 12px;
          padding: 22px 24px; text-decoration: none; font-family: var(--font-body);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .ct-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.08); border-color: var(--color-accent-border); }
        .ct-inline { color: var(--color-accent); font-weight: 500; text-decoration: none; }
        .ct-inline:hover { text-decoration: underline; }
        @media (max-width: 760px) {
          .ct-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
