import { about, site } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export function About() {
  return (
    <section aria-labelledby="quem-sou" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro index="01" title="Quem sou" id="quem-sou" />
        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-ink-soft">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ol className="mt-12 max-w-xl border-t border-line">
          {about.path.map((step, index) => (
            <li
              key={step}
              className="grid grid-cols-[2.25rem_1fr] items-baseline gap-3 border-b border-line py-3.5"
            >
              <span className="text-xs tracking-[0.16em] text-mute">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-2xl tracking-[-0.02em] text-ink">
                {step}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-xl font-serif text-2xl leading-snug tracking-[-0.02em] text-ink md:text-3xl">
          {site.message}
        </p>
      </Container>
    </section>
  );
}
