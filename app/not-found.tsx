import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <main id="conteudo">
      <Container className="py-24 md:py-36">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">
          Página não encontrada
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-[-0.03em] text-ink md:text-6xl">
          Este caminho não existe.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-ink underline decoration-accent underline-offset-[6px] hover:text-accent"
        >
          Voltar ao início
          <span aria-hidden className="text-accent">
            →
          </span>
        </Link>
      </Container>
    </main>
  );
}
