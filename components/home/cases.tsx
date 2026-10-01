import Link from "next/link";
import { cases, mentions } from "@/content/cases";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

export function Cases() {
  return (
    <section aria-labelledby="projetos" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="03"
          title="Projetos"
          id="projetos"
          intro="Cada trabalho começa por um problema. A tecnologia aparece como parte da resposta, não como o assunto."
        />
        <div className="mt-12">
          {cases.map((item, index) => (
            <article
              key={item.slug}
              className="border-t border-line py-10 md:grid md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="md:col-span-4">
                <p className="text-xs tracking-[0.16em] text-mute">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">
                  <Link
                    href={`/trabalhos/${item.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </h3>
              </div>
              <div className="mt-5 md:col-span-8 md:mt-0">
                <p className="text-lg leading-relaxed text-ink md:text-xl">
                  {item.problem}
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
                  {item.lead}
                </p>
                <Link
                  href={`/trabalhos/${item.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-ink underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
                >
                  Ler o case
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-line pt-12">
          <h3 className="font-serif text-3xl tracking-[-0.02em] text-ink">
            Outros sistemas
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            Sistemas institucionais e estudos de menor escopo. Alguns seguem em
            uso. Outros ainda são protótipos.
          </p>
          <ul className="mt-8">
            {mentions.map((item) => (
              <li key={item.href} className="border-t border-line py-5 last:border-b">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {item.title}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
