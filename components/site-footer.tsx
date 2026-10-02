import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-2 px-5 py-8 text-sm text-mute md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Tecnologia, sistemas, dados e gestão</p>
      </div>
    </footer>
  );
}
