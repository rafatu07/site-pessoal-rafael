"use client";

import { motion } from "framer-motion";
import { thinking } from "@/content/site";
import { Container } from "@/components/container";
import { usePrefersReducedMotion } from "@/components/system-field";

export function Thinking() {
  const animate = !usePrefersReducedMotion();

  return (
    <section aria-labelledby="como-penso" className="overflow-hidden bg-ink text-bone">
      <Container className="py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-accent-bright">
              <span>03</span>
              <span aria-hidden className="inline-block h-px w-8 bg-accent-bright" />
            </p>
            <h2
              id="como-penso"
              className="mt-4 max-w-[12ch] scroll-mt-28 font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-[0.95] tracking-[-0.04em]"
            >
              {thinking.quote}
            </h2>
          </div>
          <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-3 lg:col-span-8 lg:grid-cols-6 lg:gap-3">
            <span
              aria-hidden
              className="absolute bottom-3 left-[7px] top-3 w-px bg-white/20 md:hidden"
            />
            {animate ? (
              <motion.span
                aria-hidden
                className="absolute left-[4%] right-[4%] top-[5px] hidden h-px origin-left bg-accent-bright lg:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : (
              <span
                aria-hidden
                className="absolute left-[4%] right-[4%] top-[5px] hidden h-px bg-accent-bright/70 lg:block"
              />
            )}
            {thinking.flow.map((step, index) => {
              const content = (
                <>
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 size-3.5 rounded-full border border-accent-bright bg-ink md:top-0"
                  />
                  <span className="block font-serif text-2xl tracking-[-0.03em] lg:text-[1.65rem]">
                    {step}
                  </span>
                </>
              );

              if (!animate) {
                return (
                  <li key={step} className="relative py-1 pl-8 md:py-0 md:pl-0 md:pt-7">
                    {content}
                  </li>
                );
              }

              return (
                <motion.li
                  key={step}
                  className="relative py-1 pl-8 md:py-0 md:pl-0 md:pt-7"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.4, delay: 0.08 * index }}
                >
                  {content}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
