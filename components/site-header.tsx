"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bone/90 backdrop-blur-md">
      <ContainerBar>
        <Link href="/" className="font-serif text-lg tracking-tight text-ink">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Seções">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="min-h-11 px-1 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </ContainerBar>
      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Seções"
          className="border-t border-line md:hidden"
        >
          <div className="mx-auto flex w-full max-w-[80rem] flex-col px-5 py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-4 text-base text-ink last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function ContainerBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between px-5 py-3 md:px-8">
      {children}
    </div>
  );
}
