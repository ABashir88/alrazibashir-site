import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Wins from "@/components/Wins";
import DealProcess from "@/components/DealProcess";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProofBar />
      <Wins />
      <DealProcess />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
