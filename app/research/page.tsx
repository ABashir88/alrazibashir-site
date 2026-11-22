import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../src/config";
import { ResearchTopBar, ResearchStyles } from "@/components/research/ArticleShell";

const { research } = siteConfig;

export const metadata: Metadata = {
  title: `Research | ${siteConfig.name}`,
  description: `${research.heading}: ${research.subheading}`,
  alternates: { canonical: "/research" },
  openGraph: {
    title: `${research.heading} | ${siteConfig.name}`,
    description: research.subheading,
    url: `${siteConfig.baseUrl}/research`,
    siteName: siteConfig.name,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function ResearchIndexPage() {
  return (
    <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <ResearchTopBar back={{ label: "Home", href: "/" }} />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <p className="rr-eyebrow">Research</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4vw, 2.7rem)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 16px", letterSpacing: "-0.01em" }}>
          {research.heading}
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
          {research.subheading}
        </p>
        <p className="rr-p" style={{ margin: "0 0 40px" }}>
          Everything here is built around one question: how does an enterprise turn a customer conversation into a completed, accountable outcome? Pieces are published as working drafts and revised as practitioners push back.
        </p>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--color-border)" }}>
          {research.assets.map((a) => {
            const body = (
              <>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span className="ri-tag">{a.category}</span>
                  <span className="ri-meta">{a.format} · {a.date}</span>
                  {!a.href && <span className="ri-soon">Coming soon</span>}
                </div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 6px", lineHeight: 1.35 }}>{a.title}</h2>
                <p className="rr-p" style={{ margin: a.href ? "0 0 10px" : 0 }}>{a.description}</p>
                {a.href && <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-accent)" }}>{a.linkLabel ?? "Read"} →</span>}
              </>
            );
            return (
              <li key={a.title} style={{ borderBottom: "1px solid var(--color-border)" }}>
                {a.href ? <Link href={a.href} className="ri-item">{body}</Link> : <div className="ri-item">{body}</div>}
              </li>
            );
          })}
        </ul>

        <p className="rr-p" style={{ margin: "40px 0 0" }}>
          Feedback, corrections, or a perspective to compare notes on:{" "}
          <a href={`mailto:${siteConfig.email}`} className="rr-link" style={{ fontWeight: 600 }}>{siteConfig.email}</a>
        </p>
      </div>

      <ResearchStyles />
      <style>{`
        .ri-item { display: block; padding: 26px 0; text-decoration: none; transition: opacity 0.15s ease; }
        a.ri-item:hover h2 { color: var(--color-accent) !important; }
        .ri-tag { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; color: var(--color-accent); background: var(--color-accent-dim); padding: 3px 9px; border-radius: 999px; }
        .ri-meta { font-size: 12px; color: var(--color-text-muted); }
        .ri-soon { font-size: 11px; font-weight: 600; color: var(--color-text-muted); border: 1px solid var(--color-border-strong); padding: 2px 8px; border-radius: 999px; }
      `}</style>
    </main>
  );
}
