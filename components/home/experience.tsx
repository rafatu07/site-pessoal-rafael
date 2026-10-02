"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/site";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { usePrefersReducedMotion } from "@/components/system-field";

export function Experience() {
  const animate = !usePrefersReducedMotion();

  return (
    <section aria-labelledby="experiencia" className="border-t border-line">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="05"
          title="Experiência"
          id="experiencia"
          intro="Três movimentos de uma mesma trajetória: o processo, o desenvolvimento e a atuação em tecnologia."
        />
        <div className="relative mt-14">
          <span aria-hidden className="absolute bottom-4 left-[7px] top-2 w-px bg-signal/30" />
          {experience.map((item, index) => {
            const body = (
              <article className="relative grid gap-4 py-8 pl-10 md:grid-cols-12 md:gap-10 md:py-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-10 size-3.5 rounded-full border-2 border-signal bg-bone"
                />
                <div className="md:col-span-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-signal">{item.period}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-ink-soft md:col-span-8 md:text-lg">
                  {item.text}
                </p>
              </article>
            );

            if (!animate) return <div key={item.title}>{body}</div>;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                {body}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
