import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { AreasOfFocus } from "@/components/AreasOfFocus";
import Experience from "@/components/Experience";
import { Searvis } from "@/components/Searvis";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
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
