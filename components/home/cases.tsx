"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCases, mentions, type WorkCase } from "@/content/cases";
import { Container } from "@/components/container";
import { usePrefersReducedMotion } from "@/components/system-field";

const spans = [
  "md:col-span-2 lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
  "md:col-span-2 lg:col-span-12",
];

function CaseCard({
  item,
  featured,
  reduce,
}: {
  item: WorkCase;
  featured?: boolean;
  reduce: boolean;
}) {
  if (!item.image) {
    return (
      <article className="flex h-full flex-col justify-between gap-4 border border-white/12 p-5 md:flex-row md:items-center">
        <div>
          <h3 className="font-serif text-3xl leading-none tracking-[-0.03em]">
            <Link href={`/trabalhos/${item.slug}`} className="transition-colors hover:text-accent-bright">
              {item.title}
            </Link>
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-bone-ink">{item.problem}</p>
        </div>
        <Link
          href={`/trabalhos/${item.slug}`}
          className="link-draw inline-flex min-h-11 shrink-0 items-center gap-2 text-sm text-bone hover:text-accent-bright"
        >
          Ver case
          <span aria-hidden>→</span>
        </Link>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col border border-white/12">
      <motion.div
        className="relative aspect-[16/9] overflow-hidden bg-white/5"
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={item.image}
          alt={item.imageAlt ?? ""}
          fill
          sizes={featured ? "(min-width: 1024px) 46vw, 100vw" : "(min-width: 1024px) 34vw, 100vw"}
          className="object-cover object-top"
        />
      </motion.div>
      <div className={featured ? "p-4 lg:p-5" : "p-4"}>
        <h3
          className={`font-serif leading-none tracking-[-0.03em] ${featured ? "text-3xl lg:text-4xl" : "text-2xl"}`}
        >
          <Link href={`/trabalhos/${item.slug}`} className="transition-colors hover:text-accent-bright">
            {item.title}
          </Link>
        </h3>
        <p className={`mt-3 leading-relaxed text-bone ${featured ? "text-sm lg:text-base" : "text-sm"}`}>
          {item.problem}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-bone-ink">{item.lead}</p>
        <Link
          href={`/trabalhos/${item.slug}`}
          className="link-draw mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-bone hover:text-accent-bright"
        >
          Ver case
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

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {featuredCases.map((item, index) => (
            <div key={item.slug} className={spans[index]}>
              <CaseCard item={item} featured={index === 0} reduce={reduce} />
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/12 pt-8">
          <h3 className="font-serif text-2xl tracking-[-0.02em]">Outros sistemas</h3>
          <ul className="mt-5 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
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
