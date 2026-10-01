import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { contactLinks, site } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rafael Turino — Tecnologia, Sistemas, Dados e Gestão",
    template: "%s — Rafael Turino",
  },
  description: site.description,
  keywords: [
    "Rafael Turino",
    "Rafael Turino Taubaté",
    "tecnologia",
    "sistemas",
    "dados",
    "gestão pública",
    "desenvolvimento de sistemas",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Rafael Turino — Tecnologia, Sistemas, Dados e Gestão",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Turino — Tecnologia, Sistemas, Dados e Gestão",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/rafael.jpeg`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Taubaté",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: contactLinks
    .filter((item) => item.label !== "WhatsApp")
    .map((item) => item.href),
  knowsAbout: [
    "Sistemas",
    "Processos",
    "Dados",
    "Tecnologia",
    "Automação",
    "Gestão pública",
    "Transformação digital",
    "Desenvolvimento de sistemas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
