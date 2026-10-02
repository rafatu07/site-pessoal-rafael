import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/content/cases";
import { site } from "@/content/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/system-field";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getCase(slug);

  if (!work) {
    return {};
  }

  return {
    title: work.title,
    description: work.problem,
    alternates: {
      canonical: `/trabalhos/${work.slug}`,
    },
    openGraph: {
      title: `${work.title} — ${site.name}`,
      description: work.problem,
      url: `/trabalhos/${work.slug}`,
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const work = getCase(slug);

  if (!work) {
    notFound();
  }

  const blocks = [
    { label: "Contexto", text: work.context },
    { label: "Atuação", text: work.role },
    { label: "Solução", text: work.solution },
    { label: "Resultado", text: work.outcome },
  ];

  return (
    <main id="conteudo">
      <article>
        <Container className="pb-20 pt-10 md:pb-28 md:pt-16">
          <Link
            href="/#projetos"
            className="inline-flex min-h-11 items-center text-sm text-mute transition-colors hover:text-accent"
          >
            ← Projetos
          </Link>
          <Reveal>
          <p className="mt-10 text-[0.7rem] uppercase tracking-[0.22em] text-signal">
            Case
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-ink">
            {work.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink md:text-2xl">
            {work.problem}
          </p>
          {work.image ? (
            <div className="relative mt-10">
              <span aria-hidden className="absolute -left-2 -top-2 h-6 w-6 border-l border-t border-signal/70" />
              <span aria-hidden className="absolute -bottom-2 -right-2 h-6 w-6 border-b border-r border-signal/70" />
              <div className="relative aspect-[16/10] overflow-hidden bg-line">
                <Image
                  src={work.image}
                  alt={work.imageAlt ?? work.title}
                  fill
                  priority
                  sizes="(min-width: 1120px) 1120px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ) : null}
          <dl className="mt-14 max-w-2xl">
            {blocks.map((block) => (
              <div key={block.label} className="border-t border-line py-8">
                <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-signal">
                  {block.label}
                </dt>
                <dd className="mt-3 text-lg leading-relaxed text-ink-soft">
                  {block.text}
                </dd>
              </div>
            ))}
          </dl>
          {work.technologies.length > 0 ? (
            <p className="mt-2 max-w-2xl border-t border-line pt-8 text-sm leading-relaxed text-mute">
              <span className="uppercase tracking-[0.16em]">Tecnologias</span>
              <span className="mt-2 block text-base text-ink-soft">
                {work.technologies.join(" · ")}
              </span>
            </p>
          ) : null}
          {work.href && work.linkLabel ? (
            <p className="mt-10">
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw inline-flex min-h-11 items-center gap-2 text-ink hover:text-accent"
              >
                {work.linkLabel}
                <span className="sr-only"> (abre em nova aba)</span>
                <span aria-hidden className="text-accent">
                  →
                </span>
              </a>
            </p>
          ) : null}
          </Reveal>
        </Container>
      </article>
    </main>
  );
}
