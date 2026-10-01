import { experience } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export function Experience() {
  return (
    <section aria-labelledby="experiencia" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="04"
          title="Experiência"
          id="experiencia"
          intro="Três movimentos de uma mesma trajetória: o processo, o desenvolvimento e a atuação em tecnologia."
        />
        <div className="mt-12">
          {experience.map((item) => (
            <article
              key={item.title}
              className="border-t border-line py-8 last:border-b md:grid md:grid-cols-12 md:gap-10 md:py-10"
            >
              <div className="md:col-span-4">
                <p className="text-xs tracking-[0.16em] uppercase text-mute">
                  {item.period}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink-soft md:col-span-8 md:mt-1 md:text-lg">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
