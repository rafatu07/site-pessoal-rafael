import { About } from "@/components/home/about";
import { Cases } from "@/components/home/cases";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { Technologies } from "@/components/home/technologies";
import { Thinking } from "@/components/home/thinking";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <About />
      <Thinking />
      <Cases />
      <Experience />
      <Technologies />
    </main>
  );
}
