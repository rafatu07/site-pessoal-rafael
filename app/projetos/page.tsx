import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_PAGE_SIZE, portfolio } from "@/content/cases";
import { Container } from "@/components/container";

type ProjetosPageProps = {
  searchParams: Promise<{ pagina?: string | string[] }>;
};

function pageFrom(value: string | string[] | undefined, totalPages: number) {
  const raw = Array.isArray(value) ? value[0] : value;
  const requested = Number(raw);
  if (!Number.isFinite(requested) || requested < 1) return 1;
  return Math.min(Math.floor(requested), totalPages);
}

export async function generateMetadata({ searchParams }: ProjetosPageProps): Promise<Metadata> {
  const totalPages = Math.max(1, Math.ceil(portfolio.length / PORTFOLIO_PAGE_SIZE));
  const page = pageFrom((await searchParams).pagina, totalPages);
  const canonical = page <= 1 ? "/projetos" : `/projetos?pagina=${page}`;

  return {
    title: "Projetos",
    description: "Seleção e arquivo dos sistemas e projetos de Rafael Turino.",
    alternates: { canonical },
  };
}

export default async function ProjetosPage({ searchParams }: ProjetosPageProps) {
  const totalPages = Math.max(1, Math.ceil(portfolio.length / PORTFOLIO_PAGE_SIZE));
  const page = pageFrom((await searchParams).pagina, totalPages);
  const start = (page - 1) * PORTFOLIO_PAGE_SIZE;
  const items = portfolio.slice(start, start + PORTFOLIO_PAGE_SIZE);

  return (
    <main id="conteudo">
      <Container className="pb-20 pt-10 md:pb-28 md:pt-16">
        <Link
          href="/#projetos"
          className="inline-flex min-h-11 items-center text-sm text-mute transition-colors hover:text-accent"
        >
          ← Início
        </Link>
        <p className="mt-10 text-[0.7rem] uppercase tracking-[0.22em] text-signal">Arquivo</p>
        <h1 className="mt-4 font-serif text-5xl leading-none tracking-[-0.03em] text-ink lg:text-6xl">
          Projetos
        </h1>
        <ul className="mt-10">
          {items.map((item) => (
            <li key={item.key} className="border-t border-line py-4 last:border-b">
              <h2 className="font-serif text-2xl tracking-[-0.02em] text-ink">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {item.title}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-accent">
                    {item.title}
                  </Link>
                )}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </li>
          ))}
        </ul>
        {totalPages > 1 ? (
          <nav aria-label="Paginação" className="mt-8 flex items-center gap-6 text-sm">
            {page > 1 ? (
              <Link
                href={page === 2 ? "/projetos" : `/projetos?pagina=${page - 1}`}
                className="inline-flex min-h-11 items-center text-ink transition-colors hover:text-accent"
              >
                Anterior
              </Link>
            ) : (
              <span className="inline-flex min-h-11 items-center text-mute">Anterior</span>
            )}
            <p className="text-mute">
              Página {page} de {totalPages}
            </p>
            {page < totalPages ? (
              <Link
                href={`/projetos?pagina=${page + 1}`}
                className="inline-flex min-h-11 items-center text-ink transition-colors hover:text-accent"
              >
                Próxima
              </Link>
            ) : (
              <span className="inline-flex min-h-11 items-center text-mute">Próxima</span>
            )}
          </nav>
        ) : null}
      </Container>
    </main>
  );
}
