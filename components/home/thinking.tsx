import { thinking } from "@/content/site";

export function Thinking() {
  return (
    <section aria-labelledby="como-penso" className="bg-ink text-bone">
      <div className="mx-auto w-full max-w-[70rem] px-5 py-24 md:px-8 md:py-40">
        <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-bone-ink">
          <span aria-hidden className="inline-block h-px w-8 bg-bone-ink" />
          05
        </p>
        <h2 id="como-penso" className="sr-only">
          Como eu penso
        </h2>
        <blockquote className="mt-8 max-w-[12ch] font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.04em]">
          <p>{thinking.quote}</p>
        </blockquote>
        <div className="mt-14 max-w-xl space-y-6 text-lg leading-relaxed text-bone-ink md:mt-20 md:text-xl">
          {thinking.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
