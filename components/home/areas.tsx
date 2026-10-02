"use client";

import { useState } from "react";
import { areas } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";

const POINTS = [
  [18, 8],
  [72, 18],
  [28, 32],
  [78, 46],
  [22, 60],
  [70, 76],
  [40, 92],
];

export function Areas() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="areas" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="03"
          title="Áreas de atuação"
          id="areas"
          intro="Esses campos se atravessam. Não são departamentos separados."
        />
        <div className="mt-12 grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            {areas.map((area, index) => {
              const on = active === index;
              return (
                <article
                  key={area.name}
                  tabIndex={0}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="border-t border-line py-5 outline-none last:border-b md:py-6"
                >
                  <h3
                    className={`font-serif text-[1.85rem] leading-none tracking-[-0.02em] transition-colors md:text-4xl ${on ? "text-accent" : "text-ink"}`}
                  >
                    <span className="mr-3 align-middle text-xs tracking-[0.16em] text-mute">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {area.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                    {area.text}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="relative hidden h-[28rem] md:col-span-5 md:block" aria-hidden>
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {POINTS.map((point, index) => {
                const next = POINTS[index + 1];
                if (!next) return null;
                const lit = active === index || active === index + 1;
                return (
                  <line
                    key={`${point[0]}-${next[0]}`}
                    x1={point[0]}
                    y1={point[1]}
                    x2={next[0]}
                    y2={next[1]}
                    stroke={lit ? "#1a6b66" : "rgba(30, 75, 122, 0.35)"}
                    strokeWidth={lit ? 0.7 : 0.35}
                    className="system-trace"
                  />
                );
              })}
              {POINTS.map((point, index) => (
                <circle
                  key={areas[index]?.name}
                  cx={point[0]}
                  cy={point[1]}
                  r={active === index ? 2.2 : 1.25}
                  fill={active === index ? "#1a6b66" : "#f6f5f2"}
                  stroke={active === index ? "#1a6b66" : "#1e4b7a"}
                  strokeWidth="0.4"
                />
              ))}
            </svg>
            <p className="absolute bottom-0 right-0 text-[0.7rem] uppercase tracking-[0.18em] text-signal">
              {areas[active]?.name}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
