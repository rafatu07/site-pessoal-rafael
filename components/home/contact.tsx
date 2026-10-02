"use client";

import { contactLinks } from "@/content/site";
import { Container } from "@/components/container";
import { SystemField, useCanTrackPointer, usePointerShift } from "@/components/system-field";

export function Contact() {
  const track = useCanTrackPointer();
  const shift = usePointerShift(track);

  return (
    <section
      aria-labelledby="contato"
      className="relative overflow-hidden border-t border-line"
      onPointerMove={shift.onPointerMove}
      onPointerLeave={shift.onPointerLeave}
    >
      <SystemField
        className="absolute inset-y-0 right-0 hidden w-1/2 opacity-70 md:block"
        sparse={!track}
        shiftX={track ? shift.x : undefined}
        shiftY={track ? shift.y : undefined}
      />
      <Container className="relative py-20 md:py-28">
        <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-accent">
          <span aria-hidden className="inline-block h-px w-8 bg-accent" />
          08
        </p>
        <h2
          id="contato"
          className="mt-4 max-w-[12ch] scroll-mt-28 font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[0.92] tracking-[-0.04em] text-ink"
        >
          Vamos conversar.
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          Se o assunto for sistemas, processos, dados ou uma solução que ainda
          precisa ser compreendida, estes são os canais.
        </p>
        <ul className="mt-12 max-w-xl">
          {contactLinks.map((item) => (
            <li key={item.label} className="border-t border-line last:border-b">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-baseline justify-between gap-6 py-5 transition-colors hover:text-accent"
              >
                <span className="font-serif text-2xl tracking-[-0.02em] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1 md:text-3xl">
                  {item.label}
                </span>
                <span className="text-right text-sm text-mute">
                  {item.value}
                  <span className="sr-only"> (abre em nova aba)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
