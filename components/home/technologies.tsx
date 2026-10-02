import { technologies } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export function Technologies() {
  return (
    <section aria-labelledby="tecnologias" className="bg-ink text-bone">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="06"
          title="Tecnologias"
          id="tecnologias"
          tone="dark"
          intro="O conjunto que uso com mais frequência hoje. A lista é curta de propósito."
        />
        <div className="relative mt-14">
          <span
            aria-hidden
            className="absolute bottom-2 left-[6px] top-3 w-px bg-white/25 md:bottom-auto md:left-[4%] md:right-[4%] md:top-[6px] md:h-px md:w-auto"
          />
          <div className="grid gap-10 md:grid-cols-4">
            {technologies.map((group) => (
              <div key={group.name} className="relative pl-8 md:pl-0 md:pt-8">
                <span
                  aria-hidden
                  className="absolute left-0 top-1 size-3.5 rounded-full border border-accent-bright bg-ink md:left-0 md:top-0"
                />
                <h3 className="text-[0.7rem] uppercase tracking-[0.18em] text-accent-bright">
                  {group.name}
                </h3>
                <ul className="mt-4 space-y-2 text-lg text-bone">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
