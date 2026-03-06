import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { ProofBar } from "../src/components/ProofBar";
import { WhatIDo } from "../src/components/WhatIDo";
import { SellingModel } from "../src/components/SellingModel";
import { Experience } from "../src/components/Experience";
import { Wins } from "../src/components/Wins";
import { Projects } from "../src/components/Projects";
import { Contact } from "../src/components/Contact";
import { ScrollReveal } from "../src/components/ScrollReveal";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      <NavBar />
      <main>
        <Hero />
        <ProofBar />
        <ScrollReveal><WhatIDo /></ScrollReveal>
        <ScrollReveal><SellingModel /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Wins /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <footer style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-bg)" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "1.5rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0 }}>
            © {new Date().getFullYear()} Alrazi Bashir.
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0 }}>
            Built with Next.js.
          </p>
        </div>
      </footer>
    </div>
  );
}
