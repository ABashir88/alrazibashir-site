import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { AreasOfFocus } from "@/components/AreasOfFocus";
import Experience from "@/components/Experience";
import { Searvis } from "@/components/Searvis";
import Contact from "@/components/Contact";
import { siteConfig } from "@/config";

export default function Home() {
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      jobTitle: "Founder & AI Industry Advisor",
      sameAs: [siteConfig.social.github, siteConfig.hero.tertiaryCta.href],
      knowsAbout: ["Customer Experience", "Voice AI", "CCaaS", "CPaaS", "AI agents"],
    },
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />
      <NavBar />
      <Hero />
      <Research />
      <AreasOfFocus />
      <Experience />
      <Searvis />
      <Contact />
    </main>
  );
}
