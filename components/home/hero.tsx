"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/container";
import { Reveal, SystemField, useCanTrackPointer, usePointerShift } from "@/components/system-field";

function Portrait({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative">
      <span aria-hidden className="absolute -left-3 -top-3 h-8 w-8 border-l border-t border-signal/70" />
      <span aria-hidden className="absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-signal/70" />
      <div className="relative aspect-[4/5] overflow-hidden bg-line">
        <Image
          src="/images/rafael.jpeg"
          alt="Retrato de Rafael Turino"
          fill
          priority={priority}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover object-[center_18%]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  const track = useCanTrackPointer();
  const shift = usePointerShift(track);

  return (
    <section
      aria-labelledby="inicio"
      className="relative overflow-hidden"
      onPointerMove={shift.onPointerMove}
      onPointerLeave={shift.onPointerLeave}
    >
      <SystemField
        className="absolute inset-0 opacity-80"
        shiftX={track ? shift.x : undefined}
        shiftY={track ? shift.y : undefined}
        sparse={!track}
      />
      <Container className="relative pb-16 pt-10 md:pb-24 md:pt-16">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-signal">
          {site.location} · {site.region}
        </p>
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6 md:row-start-1">
            <h1
              id="inicio"
              className="font-serif text-[clamp(3.4rem,11vw,6.2rem)] leading-[0.9] tracking-[-0.04em] text-ink"
            >
              Rafael
              <br />
              Turino
            </h1>
            <p className="mt-6 max-w-xl font-serif text-[1.65rem] leading-snug tracking-[-0.02em] text-ink md:text-4xl">
              {site.line}
            </p>
          </div>
          <figure className="md:col-span-6 md:col-start-7 md:row-span-2 md:row-start-1">
            <Portrait priority />
            <figcaption className="mt-5 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-mute">
              <span>Rafael Turino</span>
              <span className="text-signal">Sistemas · dados · gestão</span>
            </figcaption>
          </figure>
          <div className="md:col-span-6 md:row-start-2">
            <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
              Atuo na interseção entre tecnologia, processos, dados e o que uma
              organização realmente precisa resolver.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
              <a href="#quem-sou" className="link-draw inline-flex min-h-11 items-center gap-2 text-ink hover:text-accent">
                Conheça minha trajetória
                <span aria-hidden className="text-accent">→</span>
              </a>
              <a href="#projetos" className="link-draw inline-flex min-h-11 items-center gap-2 text-ink hover:text-accent">
                Veja meus projetos
                <span aria-hidden className="text-accent">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutPortrait() {
  return (
    <Reveal>
      <figure className="md:pt-8">
        <div className="relative ml-auto max-w-sm">
          <span aria-hidden className="absolute -left-4 top-8 hidden h-px w-10 bg-signal md:block" />
          <div className="relative aspect-[4/5] overflow-hidden bg-line">
            <Image
              src="/images/rafael.jpeg"
              alt=""
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>
      </figure>
    </Reveal>
  );
}
