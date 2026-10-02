import { About } from "@/components/home/about";
import { Areas } from "@/components/home/areas";
import { Cases } from "@/components/home/cases";
import { Contact } from "@/components/home/contact";
import { Education } from "@/components/home/education";
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
      <Areas />
      <Cases />
      <Experience />
      <Technologies />
      <Education />
      <Contact />
    </main>
  );
}
