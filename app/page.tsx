import { NavBar } from "../src/components/NavBar";
import { Hero } from "../src/components/Hero";
import { ProofBar } from "../src/components/ProofBar";
import { WhatIDo } from "../src/components/WhatIDo";
import { Experience } from "../src/components/Experience";
import { Wins } from "../src/components/Wins";
import { Projects } from "../src/components/Projects";
import { Contact } from "../src/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavBar />
      <main>
        <Hero />
        <ProofBar />
        <WhatIDo />
        <Experience />
        <Wins />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-xs text-neutral-500 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Alrazi Bashir.</p>
          <p className="hidden sm:block">Built with Next.js.</p>
        </div>
      </footer>
    </div>
  );
}
