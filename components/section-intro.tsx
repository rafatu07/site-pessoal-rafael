export function SectionIntro({
  index,
  eyebrow,
  title,
  intro,
  id,
  tone = "light",
}: {
  index: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <header className="max-w-2xl">
      <p
        className={`flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] ${dark ? "text-accent-bright" : "text-accent"}`}
      >
        <span
          aria-hidden
          className={`inline-block h-px w-8 ${dark ? "bg-accent-bright" : "bg-accent"}`}
        />
        {eyebrow ?? index}
      </p>
      <h2
        id={id}
        className={`mt-4 scroll-mt-28 font-serif text-[2.35rem] leading-[1.05] tracking-[-0.03em] md:text-5xl ${dark ? "text-bone" : "text-ink"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-bone-ink" : "text-ink-soft"}`}>
          {intro}
        </p>
      ) : null}
    </header>
  );
}
