import { about, site } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { AboutPortrait } from "@/components/home/hero";
import { Reveal } from "@/components/system-field";

export function About() {
  return (
    <section aria-labelledby="quem-sou" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro index="01" title="Quem sou" id="quem-sou" />
        <div className="mt-12 grid items-start gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="max-w-xl space-y-6 text-lg leading-relaxed text-ink-soft">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-10 max-w-xl font-serif text-2xl leading-snug tracking-[-0.02em] text-ink md:text-3xl">
              {site.message}
            </p>
          </Reveal>
          <div className="md:col-span-5">
            <AboutPortrait />
          </div>
        </div>
      </Container>
    </section>
  );
}
