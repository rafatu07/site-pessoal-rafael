"use client";

import { useState } from "react";
import { about, areas } from "@/content/site";
import { Container } from "@/components/container";

export function About() {
  const [active, setActive] = useState(0);
  const current = areas[active];

  return (
    <section aria-labelledby="quem-sou" className="border-t border-line">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-3">
            <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-accent">
              <span>02</span>
              <span aria-hidden className="inline-block h-px w-8 bg-accent" />
            </p>
            <h2
              id="quem-sou"
              className="mt-3 scroll-mt-28 font-serif text-4xl leading-none tracking-[-0.03em] text-ink lg:text-5xl"
            >
              Quem sou
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-soft md:col-span-1 lg:col-span-5">
            {about.paragraphs[0]}
          </p>
          <div className="md:col-span-1 lg:col-span-4">
            <ul className="border-t border-line">
              {areas.map((area, index) => {
                const on = active === index;
                return (
                  <li key={area.name} className="border-b border-line">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className={`flex min-h-11 w-full items-center gap-3 text-left font-serif text-2xl tracking-[-0.02em] transition-colors ${on ? "text-accent" : "text-ink"}`}
                    >
                      <span
                        aria-hidden
                        className={`size-1.5 shrink-0 rounded-full ${on ? "bg-accent" : "bg-signal/50"}`}
                      />
                      {area.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{current.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
