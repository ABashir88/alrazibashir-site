"use client";

import Link from "next/link";
import { siteConfig } from "../../config";

export default function HiringPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

        :root {
          --color-bg:            #0A0B0D;
          --color-text:          #F0EDE8;
          --color-text-secondary:#B8B3AB;
          --color-text-muted:    #6E6B65;
          --color-accent:        #00C2A8;
          --color-accent-dim:    rgba(0,194,168,0.12);
          --color-border:        #1E2029;
          --color-border-strong: #2E3040;
          --color-surface:       #0F1015;
          --color-surface-card:  #141720;
          --font-display:        'Playfair Display', Georgia, 'Times New Roman', serif;
          --font-body:           'DM Sans', system-ui, -apple-system, sans-serif;
        }

        @media (prefers-color-scheme: light) {
          :root:not([data-theme="dark"]) {
            --color-bg:            #F5F3EF;
            --color-text:          #0A0B0D;
            --color-text-secondary:#3A3830;
            --color-text-muted:    #7A756D;
            --color-accent:        #009C87;
            --color-accent-dim:    rgba(0,156,135,0.10);
            --color-border:        #DDD9D3;
            --color-border-strong: #C4BFB8;
            --color-surface:       #EDEAE5;
            --color-surface-card:  #E8E4DF;
          }
        }
        :root[data-theme="light"] {
          --color-bg:            #F5F3EF;
          --color-text:          #0A0B0D;
          --color-text-secondary:#3A3830;
          --color-text-muted:    #7A756D;
          --color-accent:        #009C87;
          --color-accent-dim:    rgba(0,156,135,0.10);
          --color-border:        #DDD9D3;
          --color-border-strong: #C4BFB8;
          --color-surface:       #EDEAE5;
          --color-surface-card:  #E8E4DF;
        }
        :root[data-theme="dark"] {
          --color-bg:            #0A0B0D;
          --color-text:          #F0EDE8;
          --color-text-secondary:#B8B3AB;
          --color-text-muted:    #6E6B65;
          --color-accent:        #00C2A8;
          --color-accent-dim:    rgba(0,194,168,0.12);
          --color-border:        #1E2029;
          --color-border-strong: #2E3040;
          --color-surface:       #0F1015;
          --color-surface-card:  #141720;
        }

        .hiring-page {
          font-family: var(--font-body);
          background: var(--color-bg);
          color: var(--color-text);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        /* NAV */
        .hp-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          padding: 18px 24px;
        }
        .hp-nav-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .hp-nav-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-text-secondary);
          text-decoration: none;
          font-size: 13px;
          font-family: var(--font-body);
          font-weight: 400;
          letter-spacing: 0.01em;
          transition: color 0.18s ease;
        }
        .hp-nav-back:hover { color: var(--color-text); }
        .hp-nav-back:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 4px;
          border-radius: 3px;
        }
        .hp-nav-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          font-family: var(--font-body);
        }

        /* HERO */
        .hp-hero {
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-border-strong);
          padding: 72px 24px 64px;
        }
        .hp-hero-inner {
          max-width: 860px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: start;
        }
        .hp-hero-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin: 0 0 20px;
        }
        .hp-hero-headline {
          font-family: var(--font-display);
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
          color: var(--color-text);
        }
        .hp-hero-sub {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(16px, 2.2vw, 21px);
          font-weight: 400;
          color: var(--color-text-secondary);
          margin: 0;
          line-height: 1.4;
        }
        .hp-hero-stats {
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 200px;
        }
        .hp-stat-item {
          padding: 20px 0;
          border-top: 1px solid var(--color-border-strong);
        }
        .hp-stat-item:last-child { border-bottom: 1px solid var(--color-border-strong); }
        .hp-stat-value {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          color: var(--color-accent);
          line-height: 1;
          margin: 0 0 4px;
          font-variant-numeric: tabular-nums;
        }
        .hp-stat-label {
          font-size: 12px;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.3;
          max-width: 160px;
          font-family: var(--font-body);
        }

        /* SECTIONS */
        .hp-section {
          padding: 56px 24px;
          border-bottom: 1px solid var(--color-border);
        }
        .hp-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .hp-section-label {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin: 0 0 32px;
        }

        /* INTRO */
        .hp-intro-text {
          max-width: 680px;
          font-size: 17px;
          line-height: 1.75;
          color: var(--color-text-secondary);
          margin: 0;
          font-weight: 300;
        }
        .hp-intro-text strong {
          color: var(--color-text);
          font-weight: 500;
        }

        /* VALUE ROWS */
        .hp-value-rows { display: flex; flex-direction: column; }
        .hp-value-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 32px;
          padding: 28px 0;
          border-top: 1px solid var(--color-border);
          align-items: start;
        }
        .hp-value-row:last-child { border-bottom: 1px solid var(--color-border); }
        .hp-value-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
          margin: 0;
          letter-spacing: 0.01em;
          padding-top: 1px;
          font-family: var(--font-body);
        }
        .hp-value-body {
          font-size: 14px;
          line-height: 1.7;
          color: var(--color-text-secondary);
          margin: 0;
          font-family: var(--font-body);
        }

        /* COMPANIES */
        .hp-companies-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .hp-company-chip {
          display: inline-block;
          background: var(--color-surface-card);
          border: 1px solid var(--color-border-strong);
          color: var(--color-text-secondary);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 7px 14px;
          border-radius: 3px;
          font-family: var(--font-body);
          transition: border-color 0.18s ease, color 0.18s ease;
          cursor: default;
        }
        .hp-company-chip:hover {
          border-color: var(--color-accent);
          color: var(--color-text);
        }

        /* DEAL GRID */
        .hp-deal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--color-border-strong);
          border-left: 1px solid var(--color-border-strong);
        }
        .hp-deal-cell {
          padding: 28px 24px;
          border-right: 1px solid var(--color-border-strong);
          border-bottom: 1px solid var(--color-border-strong);
        }
        .hp-deal-cell-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin: 0 0 12px;
          font-family: var(--font-body);
        }
        .hp-deal-cell-value {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--color-text);
          margin: 0 0 6px;
          line-height: 1.1;
          font-variant-numeric: tabular-nums;
        }
        .hp-deal-cell-value.accent { color: var(--color-accent); }
        .hp-deal-cell-value.sm {
          font-size: 14px;
          padding-top: 4px;
        }
        .hp-deal-cell-sub {
          font-size: 12px;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.5;
          font-family: var(--font-body);
        }

        /* CTA */
        .hp-cta {
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          padding: 72px 24px;
        }
        .hp-cta-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .hp-cta-headline {
          font-family: var(--font-display);
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 600;
          font-style: italic;
          line-height: 1.2;
          color: var(--color-text);
          margin: 0 0 36px;
          max-width: 640px;
        }
        .hp-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-bottom: 28px;
        }
        .hp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          border-radius: 3px;
          cursor: pointer;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.12s ease;
          border: 1.5px solid transparent;
        }
        .hp-btn:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }
        .hp-btn-solid {
          background: var(--color-accent);
          color: #0A0B0D;
          border-color: var(--color-accent);
        }
        .hp-btn-solid:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }
        .hp-btn-outline {
          background: transparent;
          color: var(--color-text);
          border-color: var(--color-border-strong);
        }
        .hp-btn-outline:hover {
          border-color: var(--color-text-secondary);
          transform: translateY(-1px);
        }
        .hp-cta-email {
          font-size: 13px;
          color: var(--color-text-muted);
          font-family: var(--font-body);
          margin: 0;
        }
        .hp-cta-email a {
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .hp-cta-email a:hover { color: var(--color-accent); }

        /* FOOTER */
        .hp-footer {
          padding: 20px 24px;
          border-top: 1px solid var(--color-border);
          background: var(--color-bg);
        }
        .hp-footer-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hp-footer-copy {
          font-size: 12px;
          color: var(--color-text-muted);
          margin: 0;
          font-family: var(--font-body);
        }
        .hp-footer-link {
          font-size: 12px;
          color: var(--color-text-muted);
          text-decoration: none;
          font-family: var(--font-body);
          transition: color 0.15s ease;
        }
        .hp-footer-link:hover { color: var(--color-text-secondary); }

        /* RESPONSIVE */
        @media (max-width: 680px) {
          .hp-hero-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hp-hero-stats {
            flex-direction: row;
            min-width: unset;
          }
          .hp-stat-item {
            flex: 1;
            padding: 16px 12px;
            border-bottom: 1px solid var(--color-border-strong);
          }
          .hp-stat-item:not(:first-child) {
            border-left: 1px solid var(--color-border-strong);
          }
          .hp-stat-label { max-width: none; font-size: 11px; }
          .hp-stat-value { font-size: 20px; }
          .hp-value-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .hp-deal-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hp-hero { padding: 48px 24px 40px; }
          .hp-section { padding: 40px 24px; }
          .hp-cta { padding: 48px 24px; }
        }

        @media (max-width: 400px) {
          .hp-hero-stats { flex-direction: column; }
          .hp-stat-item:not(:first-child) {
            border-left: none;
            border-top: none;
          }
          .hp-deal-grid { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hp-btn, .hp-nav-back, .hp-company-chip, .hp-cta-email a, .hp-footer-link {
            transition: none !important;
          }
        }
      `}</style>

      <div className="hiring-page">

        {/* NAV */}
        <nav className="hp-nav">
          <div className="hp-nav-inner">
            <Link href="/" className="hp-nav-back">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M10 7H4m0 0 3-3M4 7l3 3" />
              </svg>
              Back to site
            </Link>
            <span className="hp-nav-tag">Hiring Page</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="hp-hero">
          <div className="hp-hero-inner">
            <div>
              <p className="hp-hero-eyebrow">For Hiring Managers</p>
              <h1 className="hp-hero-headline">
                Enterprise Account<br />Executive
              </h1>
              <p className="hp-hero-sub">
                specializing in AI infrastructure<br />
                &amp; voice platforms
              </p>
            </div>
            <div className="hp-hero-stats" role="list">
              <div className="hp-stat-item" role="listitem">
                <p className="hp-stat-value">6+ Years</p>
                <p className="hp-stat-label">Full-cycle enterprise sales</p>
              </div>
              <div className="hp-stat-item" role="listitem">
                <p className="hp-stat-value">$65K–$550K+</p>
                <p className="hp-stat-label">Average deal size ACV</p>
              </div>
              <div className="hp-stat-item" role="listitem">
                <p className="hp-stat-value">5–9 Months</p>
                <p className="hp-stat-label">Complex sales cycles</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="hp-section">
          <div className="hp-inner">
            <p className="hp-section-label">Overview</p>
            <p className="hp-intro-text">
              I work at the intersection of{" "}
              <strong>AI infrastructure, voice platforms, and enterprise revenue systems</strong>{" "}
              — helping companies move complex platforms into production inside large
              organizations. My background spans{" "}
              <strong>CPaaS, CCaaS, conversational AI, and AI voice infrastructure</strong>,
              running engineering-led sales cycles with multi-stakeholder buying
              committees from first call through multi-year close.
            </p>
          </div>
        </section>

        {/* CORE VALUE AREAS */}
        <section className="hp-section">
          <div className="hp-inner">
            <p className="hp-section-label">Core Value Areas</p>
            <div className="hp-value-rows">
              <div className="hp-value-row">
                <h3 className="hp-value-title">Technical Sales Motion</h3>
                <p className="hp-value-body">
                  Comfortable operating in deeply technical environments — partnering with
                  solutions engineers, leading proof-of-concept evaluations, and translating
                  infrastructure complexity into business outcomes for executive buyers and
                  procurement teams.
                </p>
              </div>
              <div className="hp-value-row">
                <h3 className="hp-value-title">Multi-Stakeholder Navigation</h3>
                <p className="hp-value-body">
                  Built for buying committees that span Engineering, CX, Product, Finance,
                  and Procurement. I map influence across organizations early, build champions
                  at multiple levels, and manage consensus-driven deal cycles that require
                  months of trust before they close.
                </p>
              </div>
              <div className="hp-value-row">
                <h3 className="hp-value-title">AI &amp; Voice Platform Expertise</h3>
                <p className="hp-value-body">
                  Deep familiarity with CPaaS and CCaaS architecture, conversational AI
                  deployment patterns, and the operational realities of moving AI voice
                  infrastructure from pilot into production at scale. I speak the language
                  of the buyer and the builder.
                </p>
              </div>
              <div className="hp-value-row">
                <h3 className="hp-value-title">Enterprise Revenue Systems</h3>
                <p className="hp-value-body">
                  Full-cycle ownership from outbound prospecting through multi-year contract
                  close. Experienced building pipeline in greenfield territories, managing
                  complex renewal and expansion motions, and working closely with post-sales
                  teams to protect and grow accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANIES */}
        <section className="hp-section">
          <div className="hp-inner">
            <p className="hp-section-label">Where I&apos;ve Sold</p>
            <ul className="hp-companies-list">
              {["Telnyx", "Twilio", "Cyara", "Interlink", "Motive", "Samsara"].map(
                (company) => (
                  <li key={company} className="hp-company-chip">
                    {company}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* DEAL PROFILE */}
        <section className="hp-section">
          <div className="hp-inner">
            <p className="hp-section-label">Deal Profile</p>
            <div className="hp-deal-grid" role="list">
              <div className="hp-deal-cell" role="listitem">
                <p className="hp-deal-cell-label">Deal Sizes</p>
                <p className="hp-deal-cell-value accent">$65K–$550K+</p>
                <p className="hp-deal-cell-sub">ACV across enterprise segments</p>
              </div>
              <div className="hp-deal-cell" role="listitem">
                <p className="hp-deal-cell-label">Sales Cycles</p>
                <p className="hp-deal-cell-value accent">5–9 Months</p>
                <p className="hp-deal-cell-sub">Complex multi-stakeholder timelines</p>
              </div>
              <div className="hp-deal-cell" role="listitem">
                <p className="hp-deal-cell-label">Buyer Groups</p>
                <p className="hp-deal-cell-value sm">
                  Engineering<br />
                  CX &middot; Product<br />
                  Finance &middot; Procurement
                </p>
                <p className="hp-deal-cell-sub">Multi-committee consensus</p>
              </div>
              <div className="hp-deal-cell" role="listitem">
                <p className="hp-deal-cell-label">Focus Areas</p>
                <p className="hp-deal-cell-value sm">
                  AI Voice<br />
                  CPaaS / CCaaS<br />
                  Conversational AI
                </p>
                <p className="hp-deal-cell-sub">Infrastructure-layer platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="hp-cta">
          <div className="hp-cta-inner">
            <p className="hp-section-label">Let&apos;s Talk</p>
            <h2 className="hp-cta-headline">
              If you&apos;re building a sales team around complex AI infrastructure,
              I&apos;d like to learn more about what you&apos;re trying to accomplish.
            </h2>
            <div className="hp-cta-buttons">
              <Link href="/resume" className="hp-btn hp-btn-solid">
                View Resume
              </Link>
              <Link href="/contact" className="hp-btn hp-btn-outline">
                Contact Me
              </Link>
            </div>
            <p className="hp-cta-email">
              Or reach me directly at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hp-footer">
          <div className="hp-footer-inner">
            <p className="hp-footer-copy">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <Link href="/" className="hp-footer-link">
              ← Back to site
            </Link>
          </div>
        </footer>

      </div>
    </>
  );
}
