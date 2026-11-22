"use client";

import { useRef, useEffect, useState } from "react";

/** Eyebrow + serif heading + subhead, fading in on first scroll into view. */
export function SectionHeader({ eyebrow, title, subtitle, marginBottom = "40px" }: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  marginBottom?: string;
}) {
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
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        marginBottom,
      }}
    >
      <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, marginBottom: "12px" }}>
        {eyebrow}
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "var(--color-text)", margin: subtitle ? "0 0 14px" : 0, lineHeight: 1.2 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "560px", lineHeight: 1.65, margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
