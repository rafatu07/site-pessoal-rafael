"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { editorialCases, homeMentions, visualCases, type WorkCase } from "@/content/cases";
import { Container } from "@/components/container";
import { usePrefersReducedMotion } from "@/components/system-field";

function VisualCard({ item, reduce }: { item: WorkCase; reduce: boolean }) {
  return (
    <article className="flex h-full flex-col border border-white/12">
      <motion.div
        className="relative aspect-[16/9] overflow-hidden bg-white/5"
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover object-top"
          />
        ) : null}
      </motion.div>
      <div className="p-3">
        {item.category ? (
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-accent-bright">{item.category}</p>
        ) : null}
        <h3 className="mt-2 font-serif text-2xl leading-none tracking-[-0.03em]">
          <Link href={`/trabalhos/${item.slug}`} className="transition-colors hover:text-accent-bright">
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-snug text-bone">{item.problem}</p>
        <p className="mt-1 text-sm leading-snug text-bone-ink">{item.lead}</p>
        <Link
          href={`/trabalhos/${item.slug}`}
          className="link-draw mt-2 inline-flex min-h-11 items-center gap-2 text-sm text-bone hover:text-accent-bright"
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

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-3">
          {visualCases.map((item) => (
            <VisualCard key={item.slug} item={item} reduce={reduce} />
          ))}
        </div>

        <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
          {editorialCases.map((item) => (
            <li key={item.slug} className="border-t border-white/12 py-2.5">
              <Link
                href={`/trabalhos/${item.slug}`}
                className="text-sm font-medium text-bone underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
              >
                {item.title}
              </Link>
              <p className="mt-1 text-sm leading-snug text-bone-ink">{item.problem}</p>
            </li>
          ))}
          {homeMentions.map((item) => (
            <li key={item.href} className="border-t border-white/12 py-2.5">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-bone underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
              >
                {item.title}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <p className="mt-1 text-sm leading-snug text-bone-ink">{item.description}</p>
            </li>
          ))}
        </ul>

        <Link
          href="/projetos"
          className="link-draw mt-6 inline-flex min-h-11 items-center gap-2 text-bone hover:text-accent-bright"
        >
          Explorar projetos
          <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}
