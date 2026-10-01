import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/container";

export function Hero() {
  return (
    <section aria-labelledby="inicio">
      <Container className="pb-16 pt-10 md:pb-28 md:pt-16">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-mute">
          {site.location} · {site.region}
        </p>
        <div className="mt-8 grid items-end gap-10 md:mt-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h1
              id="inicio"
              className="font-serif text-[clamp(3.4rem,12vw,6.4rem)] leading-[0.9] tracking-[-0.04em] text-ink"
            >
              Rafael
              <br />
              Turino
            </h1>
            <p className="mt-6 max-w-xl font-serif text-[1.65rem] leading-snug tracking-[-0.02em] text-ink md:text-4xl">
              {site.line}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              Atuo na interseção entre tecnologia, processos, dados e o que uma
              organização realmente precisa resolver.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
              <a
                href="#quem-sou"
                className="inline-flex min-h-11 items-center gap-2 text-ink underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
              >
                Conheça minha trajetória
                <span aria-hidden className="text-accent">
                  →
                </span>
              </a>
              <a
                href="#projetos"
                className="inline-flex min-h-11 items-center gap-2 text-ink underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
              >
                Veja meus projetos
                <span aria-hidden className="text-accent">
                  →
                </span>
              </a>
            </div>
          </div>
          <figure className="md:col-span-5">
            <div className="relative aspect-[5/4] overflow-hidden bg-line md:aspect-[4/5]">
              <Image
                src="/images/rafael.jpeg"
                alt="Retrato de Rafael Turino"
                fill
                priority
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover object-[center_18%]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-mute">
              <span>Rafael Turino</span>
              <span>Retrato</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
