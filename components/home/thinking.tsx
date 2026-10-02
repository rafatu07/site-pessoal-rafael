"use client";

import { motion } from "framer-motion";
import { thinking } from "@/content/site";
import { usePrefersReducedMotion } from "@/components/system-field";

export function Thinking() {
  const reduce = usePrefersReducedMotion();
  const animate = !reduce;

  return (
    <section aria-labelledby="como-penso" className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto grid w-full max-w-[70rem] gap-16 px-5 py-24 md:grid-cols-12 md:px-8 md:py-36">
        <div className="md:col-span-7">
          <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-accent-bright">
            <span aria-hidden className="inline-block h-px w-8 bg-accent-bright" />
            02 · Como eu penso
          </p>
          <h2
            id="como-penso"
            className="mt-8 max-w-[12ch] scroll-mt-28 font-serif text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.92] tracking-[-0.04em]"
          >
            {thinking.quote}
          </h2>
          <div className="mt-12 max-w-xl space-y-6 text-lg leading-relaxed text-bone-ink">
            {thinking.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ol className="relative md:col-span-5 md:pt-16">
          <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-white/15 md:top-20" />
          {animate ? (
            <motion.span
              aria-hidden
              className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-accent-bright md:top-20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}
          {thinking.flow.map((step, index) => {
            const content = (
              <>
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 size-3.5 rounded-full border border-accent-bright bg-ink"
                />
                <span className="text-[0.7rem] uppercase tracking-[0.18em] text-accent-bright">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-serif text-3xl tracking-[-0.03em]">{step}</span>
              </>
            );

            if (!animate) {
              return (
                <li key={step} className="relative py-4 pl-10">
                  {content}
                </li>
              );
            }

            return (
              <motion.li
                key={step}
                className="relative py-4 pl-10"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.45, delay: 0.12 * index }}
              >
                {content}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
