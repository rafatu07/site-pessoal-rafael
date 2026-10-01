import { technologies } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export function Technologies() {
  return (
    <section aria-labelledby="tecnologias" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="07"
          title="Tecnologias"
          id="tecnologias"
          intro="O conjunto que uso com mais frequência hoje. A lista é curta de propósito."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((group) => (
            <div key={group.name}>
              <h3 className="text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                {group.name}
              </h3>
              <ul className="mt-4 space-y-2 text-lg text-ink">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
