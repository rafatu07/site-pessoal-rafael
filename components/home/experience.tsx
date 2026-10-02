"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/content/site";
import { Container } from "@/components/container";
import { usePrefersReducedMotion } from "@/components/system-field";

export function Experience() {
  const animate = !usePrefersReducedMotion();

  return (
    <section aria-labelledby="trajetoria" className="border-t border-line">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-accent">
              <span>05</span>
              <span aria-hidden className="inline-block h-px w-8 bg-accent" />
            </p>
            <h2
              id="trajetoria"
              className="mt-3 scroll-mt-28 font-serif text-4xl leading-none tracking-[-0.03em] text-ink lg:text-5xl"
            >
              Trajetória
            </h2>
            <div className="relative mt-8">
              <span aria-hidden className="absolute bottom-3 left-[6px] top-2 w-px bg-signal/35" />
              {experience.map((item, index) => {
                const body = (
                  <article className="relative py-4 pl-8">
                    <span
                      aria-hidden
                      className="absolute left-0 top-6 size-3.5 rounded-full border-2 border-signal bg-bone"
                    />
                    <p className="text-[0.7rem] uppercase tracking-[0.16em] text-signal">{item.period}</p>
                    <h3 className="mt-1 font-serif text-2xl leading-tight tracking-[-0.02em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">{item.text}</p>
                  </article>
                );

                if (!animate) return <div key={item.title}>{body}</div>;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    {body}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="md:pt-14">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">Formação</p>
            <div className="relative mt-6">
              <span aria-hidden className="absolute bottom-3 left-[4px] top-2 w-px bg-signal/35" />
              {education.map((item) => (
                <article key={item.title} className="relative border-t border-line py-4 pl-7 last:border-b">
                  <span aria-hidden className="absolute left-0 top-6 size-2.5 rounded-full bg-signal" />
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-mute">{item.level}</p>
                  <h3 className="mt-1 font-serif text-2xl tracking-[-0.02em] text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.institution}</p>
                  <p className="mt-1 text-sm text-signal">{item.status}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
