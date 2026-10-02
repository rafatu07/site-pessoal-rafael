"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/container";
import { SystemField, useCanTrackPointer, usePointerShift } from "@/components/system-field";

export function Hero() {
  const track = useCanTrackPointer();
  const shift = usePointerShift(track);

  return (
    <section aria-labelledby="inicio" className="relative overflow-hidden">
      <Container className="py-10 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-signal">
              <span>01</span>
              <span aria-hidden className="inline-block h-px w-8 bg-signal" />
              {site.location} · {site.region}
            </p>
            <h1
              id="inicio"
              className="mt-5 font-serif text-[clamp(3.4rem,7vw,6rem)] leading-[0.88] tracking-[-0.04em] text-ink"
            >
              Rafael
              <br />
              Turino
            </h1>
            <p className="mt-5 max-w-md font-serif text-3xl leading-snug tracking-[-0.03em] text-ink lg:text-4xl">
              {site.line}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft lg:text-lg">
              Atuo na interseção entre tecnologia, processos, dados e o que uma
              organização realmente precisa resolver.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:gap-8">
              <Link
                href="/#trajetoria"
                className="link-draw inline-flex min-h-11 items-center gap-2 text-ink hover:text-accent"
              >
                Conheça minha trajetória
                <span aria-hidden className="text-accent">
                  →
                </span>
              </Link>
              <Link
                href="/#projetos"
                className="link-draw inline-flex min-h-11 items-center gap-2 text-ink hover:text-accent"
              >
                Veja meus projetos
                <span aria-hidden className="text-accent">
                  →
                </span>
              </Link>
            </div>
          </div>
          <div
            className="relative lg:col-span-6"
            onPointerMove={shift.onPointerMove}
            onPointerLeave={shift.onPointerLeave}
          >
            <SystemField
              className="absolute -inset-x-6 -inset-y-8 opacity-90"
              shiftX={track ? shift.x : undefined}
              shiftY={track ? shift.y : undefined}
              sparse={!track}
            />
            <figure className="relative">
              <span aria-hidden className="absolute -left-3 -top-3 h-8 w-8 border-l border-t border-signal/70" />
              <span aria-hidden className="absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-signal/70" />
              <div className="relative aspect-[4/5] max-h-[32rem] overflow-hidden bg-line lg:aspect-[5/6]">
                <Image
                  src="/images/rafael.jpeg"
                  alt="Retrato de Rafael Turino"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-mute">
                <span>Rafael Turino</span>
                <span className="text-signal">Sistemas · dados · gestão</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
