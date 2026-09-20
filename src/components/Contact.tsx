"use client";

import { useRef, useEffect, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, var(--color-bg) 0%, #0a1020 100%)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Eyebrow */}
        <div style={{
          fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--color-accent)", fontWeight: 600, marginBottom: "20px"
        }}>
          LET'S TALK
        </div>

        {/* Headline */}
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
          fontWeight: 400,
          color: "var(--color-text)",
          margin: "0 0 20px",
          lineHeight: 1.2,
        }}>
          Building an enterprise sales team around AI, communications, or customer experience?
        </h2>

        {/* Body */}
        <p style={{
          fontSize: "1.05rem",
          lineHeight: 1.7,
          color: "var(--color-text-secondary)",
          margin: "0 0 12px",
          maxWidth: "520px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          I'm focused on Enterprise AE and Strategic AE roles where technical credibility, complex deal execution, and new logo growth matter.
        </p>

        <p style={{
          fontSize: "0.9rem",
          color: "var(--color-text-muted)",
          margin: "0 0 40px",
        }}>
          Atlanta based · Open to remote enterprise roles
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="mailto:alrazi@alrazibashir.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "var(--color-accent)",
              color: "#0a0f1a",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start a conversation →
          </a>

          <a
            href="https://www.linkedin.com/in/alrazibashir"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "transparent",
              color: "var(--color-text)",
              border: "1px solid var(--color-border-strong)",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-strong)";
              e.currentTarget.style.color = "var(--color-text)";
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
