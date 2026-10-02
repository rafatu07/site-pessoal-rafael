"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cases, mentions, type WorkCase } from "@/content/cases";
import { Container } from "@/components/container";
import { usePrefersReducedMotion } from "@/components/system-field";

function CaseCard({
  item,
  featured,
  reduce,
}: {
  item: WorkCase;
  featured?: boolean;
  reduce: boolean;
}) {
  return (
    <article className="flex h-full flex-col border border-white/12">
      {item.image ? (
        <motion.div
          className={`relative overflow-hidden bg-white/5 ${featured ? "aspect-[16/10] lg:min-h-[18rem] lg:flex-1 lg:aspect-auto" : "aspect-[16/10]"}`}
          whileHover={reduce ? undefined : { y: -6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={item.image}
            alt={item.imageAlt ?? ""}
            fill
            sizes={featured ? "(min-width: 1024px) 46vw, 100vw" : "(min-width: 1024px) 28vw, 100vw"}
            className="object-cover object-top"
          />
        </motion.div>
      ) : null}
      <div className={featured ? "p-5 lg:p-6" : "p-4"}>
        {featured ? (
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-accent-bright">
            {item.technologies[0] ?? "Sistema"}
          </p>
        ) : null}
        <h3
          className={`font-serif leading-none tracking-[-0.03em] ${featured ? "mt-2 text-4xl lg:text-5xl" : "text-2xl"}`}
        >
          <Link href={`/trabalhos/${item.slug}`} className="transition-colors hover:text-accent-bright">
            {item.title}
          </Link>
        </h3>
        <p className={`leading-relaxed text-bone-ink ${featured ? "mt-4 text-base text-bone lg:text-lg" : "mt-2 text-sm"}`}>
          {item.problem}
        </p>
        {featured ? <p className="mt-3 max-w-xl leading-relaxed text-bone-ink">{item.lead}</p> : null}
        <Link
          href={`/trabalhos/${item.slug}`}
          className="link-draw mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-bone hover:text-accent-bright"
        >
          Ler o case
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export function Cases() {
  const reduce = usePrefersReducedMotion();

  return (
    <section aria-labelledby="projetos" className="bg-ink text-bone">
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-accent-bright">
              <span>04</span>
              <span aria-hidden className="inline-block h-px w-8 bg-accent-bright" />
            </p>
            <h2
              id="projetos"
              className="mt-3 scroll-mt-28 font-serif text-4xl leading-none tracking-[-0.03em] lg:text-5xl"
            >
              Projetos
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {cases.map((item, index) => {
            const featured = index === 0;
            const span =
              featured ? "md:col-span-2 lg:col-span-7 lg:row-span-2" : index < 3 ? "lg:col-span-5" : "lg:col-span-4";

            return (
              <div key={item.slug} className={span}>
                <CaseCard item={item} featured={featured} reduce={reduce} />
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-white/12 pt-8">
          <h3 className="font-serif text-2xl tracking-[-0.02em]">Outros sistemas</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-bone-ink">
            Sistemas institucionais e estudos de menor escopo. Alguns seguem em uso. Outros ainda são protótipos.
          </p>
          <ul className="mt-6 grid md:grid-cols-2 md:gap-x-10">
            {mentions.map((item) => (
              <li key={item.href} className="border-t border-white/12 py-3">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-bone underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
                >
                  {item.title}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
                <p className="mt-1 text-sm leading-relaxed text-bone-ink">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
