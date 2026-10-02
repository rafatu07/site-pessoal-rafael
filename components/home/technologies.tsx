import { contactLinks, technologies } from "@/content/site";
import { Container } from "@/components/container";

export function Technologies() {
  return (
    <section aria-labelledby="tecnologias" className="bg-ink text-bone">
      <Container className="py-12 lg:py-16">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-accent-bright">
              <span>06</span>
              <span aria-hidden className="inline-block h-px w-8 bg-accent-bright" />
            </p>
            <h2
              id="tecnologias"
              className="mt-3 scroll-mt-28 font-serif text-4xl leading-none tracking-[-0.03em] lg:text-5xl"
            >
              Tecnologias
            </h2>
            <div className="relative mt-8">
              <span
                aria-hidden
                className="absolute left-[2%] right-[2%] top-[6px] hidden h-px bg-white/25 lg:block"
              />
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
                {technologies.map((group) => (
                  <div key={group.name} className="relative pl-6 lg:pl-0 lg:pt-6">
                    <span
                      aria-hidden
                      className="absolute left-0 top-1 size-3.5 rounded-full border border-accent-bright bg-ink lg:top-0"
                    />
                    <h3 className="text-[0.7rem] uppercase tracking-[0.18em] text-accent-bright">
                      {group.name}
                    </h3>
                    <ul className="mt-3 space-y-1 text-base text-bone">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span aria-hidden className="mb-6 block h-px w-16 bg-accent-bright/70" />
            <h2
              id="contato"
              className="scroll-mt-28 font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.92] tracking-[-0.04em]"
            >
              Vamos conversar.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-bone-ink lg:text-lg">
              Se o assunto for sistemas, processos, dados ou uma solução que ainda precisa ser compreendida, estes são os canais.
            </p>
            <ul className="mt-6">
              {contactLinks.map((item) => (
                <li key={item.label} className="border-t border-white/15 last:border-b">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-14 items-baseline justify-between gap-4 py-3 transition-colors hover:text-accent-bright"
                  >
                    <span className="font-serif text-2xl tracking-[-0.02em] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1">
                      {item.label}
                    </span>
                    <span className="text-right text-sm text-bone-ink">
                      {item.value}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
