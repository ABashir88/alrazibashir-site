import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../config";

/** Page metadata for a research article at /research/<slug>. */
export function articleMetadata({ slug, title, description }: { slug: string; title: string; description: string }): Metadata {
  const path = `/research/${slug}`;
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteConfig.baseUrl}${path}`,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

/** Top bar shared by /research and every research article. */
export function ResearchTopBar({ back }: { back: { label: string; href: string } }) {
  return (
    <header style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", height: "58px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <Link href="/" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text)" }}>
          {siteConfig.name}
        </Link>
        <Link href={back.href} className="rr-link" style={{ fontSize: "0.825rem", fontWeight: 500 }}>
          ← {back.label}
        </Link>
      </div>
    </header>
  );
}

/** Layout for a long-form research article: title block, body, feedback footer, shared prose styles. */
export function ArticleShell({ eyebrow, title, lead, status = "Working draft", date = "November 2026", children }: {
  eyebrow: string;
  title: string;
  lead: string;
  status?: string;
  date?: string;
  children: React.ReactNode;
}) {
  return (
    <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <ResearchTopBar back={{ label: "All research", href: "/research" }} />

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <p className="rr-eyebrow">{eyebrow}</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4vw, 2.7rem)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 18px", letterSpacing: "-0.01em" }}>
          {title}
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 18px" }}>{lead}</p>
        <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "0 0 36px" }}>
          {siteConfig.name} · {status} · {date}
        </p>

        {children}

        <section style={{ borderTop: "1px solid var(--color-border)", paddingTop: "36px", marginTop: "12px" }}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>
            This is a working draft. If you run these systems in production and think something is missing or wrong, I would like to hear it.
          </p>
          <p style={{ fontSize: "0.95rem", margin: 0 }}>
            <a href={`mailto:${siteConfig.email}`} className="rr-link" style={{ fontWeight: 600 }}>{siteConfig.email}</a>
          </p>
        </section>
      </article>

      <ResearchStyles />
    </main>
  );
}

/** Prose + component styles used across research pages. */
export function ResearchStyles() {
  return (
    <style>{`
      .rr-link { color: var(--color-accent); text-decoration: none; }
      .rr-link:hover { text-decoration: underline; }
      .rr-eyebrow { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-accent); font-weight: 600; margin: 0 0 14px; }
      .rr-section { border-top: 1px solid var(--color-border); padding: 36px 0; scroll-margin-top: 24px; }
      .rr-num { font-size: 11px; font-weight: 700; color: var(--color-text-muted); margin: 0 0 6px; letter-spacing: 0.08em; }
      .rr-h2 { font-size: 1.3rem; font-weight: 700; margin: 0 0 10px; line-height: 1.3; }
      .rr-h3 { font-size: 1rem; font-weight: 700; margin: 22px 0 6px; line-height: 1.35; }
      .rr-p { font-size: 0.95rem; line-height: 1.75; color: var(--color-text-secondary); margin: 0 0 14px; }
      .rr-p strong { color: var(--color-text); }
      .rr-box { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px 22px; margin: 0 0 40px; }
      .rr-box-label { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-muted); margin: 0 0 8px; }
      .rr-callout { font-size: 0.875rem; line-height: 1.65; color: var(--color-text-secondary); margin: 18px 0 0; padding: 12px 16px; border-left: 3px solid var(--color-accent-border); background: var(--color-accent-dim); border-radius: 0 8px 8px 0; }
      .rr-callout strong { color: var(--color-text); }
      .rr-quote { font-family: var(--font-display); font-size: 1.35rem; line-height: 1.4; color: var(--color-text); margin: 8px 0 22px; padding-left: 18px; border-left: 3px solid var(--color-accent); }
      .rr-toc { margin: 0 0 48px; padding-left: 1.2rem; display: grid; gap: 6px; }
      .rr-toc li { font-size: 0.92rem; }
      .rr-bullets { margin: 0 0 14px; padding-left: 1.2rem; display: grid; gap: 8px; }
      .rr-bullets li { font-size: 0.95rem; line-height: 1.65; color: var(--color-text-secondary); }
      .rr-bullets li strong { color: var(--color-text); }
      .rr-checks { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
      .rr-checks li { position: relative; padding-left: 30px; font-size: 0.95rem; line-height: 1.65; color: var(--color-text); }
      .rr-checks li::before {
        content: ""; position: absolute; left: 0; top: 0.2em;
        width: 16px; height: 16px; border-radius: 4px;
        border: 1.5px solid var(--color-border-strong); background: var(--color-surface-card);
      }
      .rr-sources { margin: 0; padding-left: 1.2rem; display: grid; gap: 10px; }
      .rr-sources li { font-size: 0.85rem; line-height: 1.6; color: var(--color-text-secondary); }
      .rr-table-wrap { overflow-x: auto; margin: 0 0 14px; }
      .rr-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; min-width: 560px; }
      .rr-table th, .rr-table td { text-align: left; vertical-align: top; padding: 10px 12px; border-bottom: 1px solid var(--color-border); line-height: 1.55; }
      .rr-table th { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-muted); font-weight: 700; }
      .rr-table td { color: var(--color-text-secondary); }
      .rr-table td:first-child { color: var(--color-text); font-weight: 600; }
    `}</style>
  );
}
