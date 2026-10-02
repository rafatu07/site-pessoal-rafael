"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cases, mentions } from "@/content/cases";
import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { usePrefersReducedMotion } from "@/components/system-field";

export function Cases() {
  const reduce = usePrefersReducedMotion();

  return (
    <section aria-labelledby="projetos" className="bg-ink text-bone">
      <Container className="py-20 md:py-28">
        <SectionIntro
          index="04"
          title="Projetos"
          id="projetos"
          tone="dark"
          intro="Cada trabalho começa por um problema. A tecnologia aparece como parte da resposta, não como o assunto."
        />
        <div className="mt-12">
          {cases.map((item, index) => (
            <article
              key={item.slug}
              className="grid items-center gap-6 border-t border-white/12 py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="md:col-span-5">
                {item.image ? (
                  <motion.div
                    className="relative aspect-[16/10] overflow-hidden bg-white/5"
                    whileHover={reduce ? undefined : { y: -8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover object-top"
                    />
                    <span className="absolute left-3 top-3 text-[0.65rem] uppercase tracking-[0.16em] text-bone">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ) : null}
              </div>
              <div className="md:col-span-7">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-accent-bright">
                  {item.technologies[0] ?? "Sistema"}
                </p>
                <h3 className="mt-3 font-serif text-4xl leading-none tracking-[-0.03em] md:text-5xl">
                  <Link href={`/trabalhos/${item.slug}`} className="transition-colors hover:text-accent-bright">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-bone md:text-xl">{item.problem}</p>
                <p className="mt-4 max-w-xl leading-relaxed text-bone-ink">{item.lead}</p>
                <Link
                  href={`/trabalhos/${item.slug}`}
                  className="link-draw mt-6 inline-flex min-h-11 items-center gap-2 text-bone hover:text-accent-bright"
                >
                  Ler o case
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/12 pt-12">
          <h3 className="font-serif text-3xl tracking-[-0.02em]">Outros sistemas</h3>
          <p className="mt-4 max-w-xl leading-relaxed text-bone-ink">
            Sistemas institucionais e estudos de menor escopo. Alguns seguem em uso. Outros ainda são protótipos.
          </p>
          <ul className="mt-8">
            {mentions.map((item) => (
              <li key={item.href} className="border-t border-white/12 py-5 last:border-b">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-bone underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
                >
                  {item.title}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-bone-ink md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
