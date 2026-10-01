import { education } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export function Education() {
  return (
    <section aria-labelledby="formacao" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="06"
          title="Formação"
          id="formacao"
          intro="A formação confirma o percurso. Ela não ocupa o lugar da experiência."
        />
        <div className="mt-12">
          {education.map((item) => (
            <article
              key={item.title}
              className="border-t border-line py-6 last:border-b md:grid md:grid-cols-12 md:items-baseline md:gap-6 md:py-7"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-mute md:col-span-3">
                {item.level}
              </p>
              <div className="mt-2 md:col-span-6 md:mt-0">
                <h3 className="font-serif text-2xl tracking-[-0.02em] text-ink md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.institution}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mute md:col-span-3 md:mt-0 md:text-right">
                {item.status}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
