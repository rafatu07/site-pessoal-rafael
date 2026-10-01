import { areas } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export function Areas() {
  return (
    <section aria-labelledby="areas" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="02"
          title="Áreas de atuação"
          id="areas"
          intro="Esses campos se atravessam. Não são departamentos separados."
        />
        <div className="mt-12">
          {areas.map((area, index) => (
            <article
              key={area.name}
              className="border-t border-line py-6 last:border-b md:grid md:grid-cols-12 md:items-baseline md:gap-8 md:py-7"
            >
              <h3 className="font-serif text-[1.85rem] leading-none tracking-[-0.02em] text-ink md:col-span-5 md:text-4xl">
                <span className="mr-3 align-middle text-xs tracking-[0.16em] text-mute">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {area.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft md:col-span-7 md:mt-0 md:text-lg">
                {area.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
